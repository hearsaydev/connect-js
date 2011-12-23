package flashutils
{
    import flash.events.*;
    import flash.external.*;
    import flash.net.*;
    import flash.utils.*;

    public class PostMessage extends Object
    {
        private var callback:String;
        private var connection:LocalConnection;
        private var connectionName:String;
        private static var currentDomain:String;

        public function PostMessage()
        {
            this.connection = new LocalConnection();
            this.connection.client = this;
            this.connection.connect(Math.random().toString());
            ExternalInterface.addCallback("postMessage_send", this.send);
            return;
        }// end function

        public function onFacebookDomain() : Boolean
        {
            return /(^|\.)facebook\.com$""(^|\.)facebook\.com$/.test(getCurrentDomain()) || /(^|\.)fbcdn\.net$""(^|\.)fbcdn\.net$/.test(getCurrentDomain());
        }// end function

        public function init(param1:String, param2:String) : void
        {
            var cb:* = param1;
            var name:* = param2;
            PostMessage.fbTrace("init", {cb:cb, name:name});
            try
            {
                if (!this.onFacebookDomain() && PostMessage.extractDomain(name) != getCurrentDomain())
                {
                    PostMessage.logError("init", "name must be a URL on the current domain: " + name);
                }
                else
                {
                    this.callback = cb;
                    if (name == this.connectionName)
                    {
                        return;
                    }
                    this.connectionName = name;
                    name = encodeURIComponent(name);
                    this.connection = new LocalConnection();
                    this.connection.client = this;
                    this.connection.connect(name);
                }
            }
            catch (e)
            {
                PostMessage.logError("init", e.toString());
            }
            return;
        }// end function

        public function send(param1:String, param2:String) : void
        {
            var msg:* = param1;
            var name:* = param2;
            PostMessage.fbTrace("send", {name:name, msg:msg});
            if (!this.connection)
            {
                PostMessage.logError("send", "connection has not been initialized.");
                return;
            }
            try
            {
                name = encodeURIComponent(name);
                this.connection.send(name, "recv", msg);
            }
            catch (e)
            {
                PostMessage.logError("send", e.toString() + ". name: " + name + ", msg: " + msg);
            }
            return;
        }// end function

        public function recv(param1:String) : void
        {
            var deliverMessage:Function;
            var msg:* = param1;
            deliverMessage = function (event:TimerEvent) : void
            {
                var evt:* = event;
                try
                {
                    XdComm.proxy(callback, encodeURIComponent(msg));
                }
                catch (e)
                {
                    PostMessage.logError("recv", e.toString());
                }
                return;
            }// end function
            ;
            PostMessage.fbTrace("recv", {msg:msg});
            var timer:* = new Timer(1, 1);
            timer.addEventListener(TimerEvent.TIMER, deliverMessage);
            timer.start();
            return;
        }// end function

        public static function extractDomain(param1:String) : String
        {
            return /^\w+:\/\/([^\/:]*)""^\w+:\/\/([^\/:]*)/.exec(param1)[1];
        }// end function

        public static function extractPathAndQuery(param1:String) : String
        {
            return /^\w+:\/\/[^\/]+(.*)$""^\w+:\/\/[^\/]+(.*)$/.exec(param1)[1];
        }// end function

        public static function getCurrentDomain() : String
        {
            if (!currentDomain)
            {
                try
                {
                    currentDomain = ExternalInterface.call("self.document.domain.toString");
                    PostMessage.fbTrace("getCurrentDomain", {currentDomain:currentDomain});
                }
                catch (e)
                {
                    PostMessage.logError("getCurrentDomain error", e);
                }
            }
            return currentDomain;
        }// end function

        private static function logError(param1:String, param2:String) : void
        {
            XdComm.fbTrace("Error: XdComm.PostMessage." + param1, {msg:param2});
            return;
        }// end function

        private static function fbTrace(param1:String, param2:Object) : void
        {
            XdComm.fbTrace("XdComm.PostMessage." + param1, param2);
            return;
        }// end function

    }
}
