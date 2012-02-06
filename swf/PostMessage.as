package flashutils {
    import flash.events.*;
    import flash.net.*;
    import flash.external.*;
    import flash.utils.*;

    public class PostMessage {

        private static var currentDomain:String;

        private var callback:String;
        private var connection:LocalConnection;
        private var connectionName:String;

        public function PostMessage(){
            this.connection = new LocalConnection();
            this.connection.client = this;
            this.connection.connect(Math.random().toString());
            ExternalInterface.addCallback("postMessage_send", this.send);
        }
        public static function extractDomain(_arg1:String):String{
            return (/^\w+:\/\/(.*@)?([^:\/#?]*)/.exec(_arg1)[2]);
        }
        public static function extractPathAndQuery(_arg1:String):String{
            return (/^\w+:\/\/[^\/]+(.*)$/.exec(_arg1)[1]);
        }
        public static function getCurrentDomain():String{
            if (!currentDomain){
                try {
                    currentDomain = ExternalInterface.call("self.document.domain.toString");
                    PostMessage.fbTrace("getCurrentDomain", {currentDomain:currentDomain});
                } catch(e) {
                    PostMessage.logError("getCurrentDomain error", e);
                };
            };
            return (currentDomain);
        }
        private static function logError(_arg1:String, _arg2:String):void{
            XdComm.fbTrace(("Error: XdComm.PostMessage." + _arg1), {msg:_arg2});
        }
        private static function fbTrace(_arg1:String, _arg2:Object):void{
            XdComm.fbTrace(("XdComm.PostMessage." + _arg1), _arg2);
        }

        public function onFacebookDomain():Boolean{
            return (((/(^|\.)facebook\.com$/.test(getCurrentDomain())) || (/(^|\.)fbcdn\.net$/.test(getCurrentDomain()))));
        }
        public function init(_arg1:String, _arg2:String):void{
            var cb:* = _arg1;
            var name:* = _arg2;
            PostMessage.fbTrace("init", {
                cb:cb,
                name:name
            });
            try {
                if (((!(this.onFacebookDomain())) && (!((PostMessage.extractDomain(name) == getCurrentDomain()))))){
                    PostMessage.logError("init", ("name must be a URL on the current domain: " + name));
                } else {
                    this.callback = cb;
                    if (name == this.connectionName){
                        return;
                    };
                    this.connectionName = name;
                    name = encodeURIComponent(name);
                    this.connection = new LocalConnection();
                    this.connection.client = this;
                    this.connection.connect(name);
                };
            } catch(e) {
                PostMessage.logError("init", e.toString());
            };
        }
        public function send(_arg1:String, _arg2:String):void{
            var msg:* = _arg1;
            var name:* = _arg2;
            PostMessage.fbTrace("send", {
                name:name,
                msg:msg
            });
            if (!this.connection){
                PostMessage.logError("send", "connection has not been initialized.");
                return;
            };
            try {
                name = encodeURIComponent(name);
                this.connection.send(name, "recv", msg);
            } catch(e) {
                PostMessage.logError("send", ((((e.toString() + ". name: ") + name) + ", msg: ") + msg));
            };
        }
        public function recv(_arg1:String):void{
            var deliverMessage:* = null;
            var msg:* = _arg1;
            deliverMessage = function (_arg1:TimerEvent):void{
                var evt:* = _arg1;
                try {
                    XdComm.proxy(callback, encodeURIComponent(msg));
                } catch(e) {
                    PostMessage.logError("recv", e.toString());
                };
            };
            PostMessage.fbTrace("recv", {msg:msg});
            var timer:* = new Timer(1, 1);
            timer.addEventListener(TimerEvent.TIMER, deliverMessage);
            timer.start();
        }

    }
}//package flashutils 
