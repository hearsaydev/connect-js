package {
    import flash.events.*;
    import flash.net.*;
    import flash.display.*;
    import flashutils.*;
    import flash.external.*;
    import flash.system.*;

    public class XdComm extends Sprite {

        private static var requestIdCount:int = 0;
        private static var initialized:Boolean = false;
        private static var origin_validated:Boolean = false;

        private var _cache:SharedObject;
        private var _cacheContext:String = "unknown";
        private var postMessage:PostMessage;

        public function XdComm(){
            XdComm.fbTrace("XdComm Constructor", {url:stage.loaderInfo.url});
            if (XdComm.initialized){
                return;
            };
            XdComm.initialized = true;
            var _local1:String = PostMessage.getCurrentDomain();
            Security.allowDomain(_local1);
            Security.allowInsecureDomain(_local1);
            this.addEventListener(Event.ENTER_FRAME, this.init);
        }
        public static function proxy(_arg1:String, _arg2:String):void{
            if (origin_validated){
                ExternalInterface.call(_arg1, _arg2);
            };
        }
        public static function traceObject(_arg1:Object, _arg2:int=0, _arg3:String=""){
            var _local6:*;
            var _local7:String;
            var _local4 = "";
            var _local5:int;
            while (_local5 < _arg2) {
                _local4 = (_local4 + "\t");
                _local5++;
            };
            for (_local6 in _arg1) {
                _arg3 = (_arg3 + ((((_local4 + "[") + _local6) + "] => ") + _arg1[_local6]));
                _local7 = traceObject(_arg1[_local6], (_arg2 + 1));
                if (_local7 != ""){
                    _arg3 = (_arg3 + (((" {\n" + _local7) + _local4) + "}"));
                };
                _arg3 = (_arg3 + "\n");
            };
            return (_arg3);
        }
        public static function fbTrace(_arg1:String, _arg2:Object):void{
        }

        private function init(_arg1:Event):void{
            var _local4:String;
            XdComm.fbTrace("XdComm.init", {});
            this.removeEventListener(Event.ENTER_FRAME, this.init);
            var _local2:String = stage.loaderInfo.url;
            var _local3:String = PostMessage.extractDomain(_local2);
            if (_local3 != "connect.facebook.net"){
                XdComm.fbTrace("XdComm is not loaded from connect.facebook.net", {swfDomain:_local3});
                if (_local3.substr(-13) == ".facebook.com"){
                    _local4 = PostMessage.extractPathAndQuery(_local2);
                    if (_local4.substr(0, 8) != "/intern/"){
                        XdComm.fbTrace("XdComm is NOT in intern mode", {swfPath:_local4});
                        return;
                    };
                    XdComm.fbTrace("XdComm is in intern mode", {swfPath:_local4});
                } else {
                    return;
                };
            };
            this.postMessage = new PostMessage();
            ExternalInterface.addCallback("postMessage_init", this.initPostMessage);
            ExternalInterface.addCallback("sendXdHttpRequest", this.sendXdHttpRequest);
            ExternalInterface.addCallback("setCache", this.setCache);
            ExternalInterface.addCallback("getCache", this.getCache);
            ExternalInterface.addCallback("setCacheContext", this.setCacheContext);
            ExternalInterface.addCallback("clearAllCache", this.clearAllCache);
            ExternalInterface.call("FB_OnFlashXdCommReady");
        }
        private function initPostMessage(_arg1:String, _arg2:String):void{
            origin_validated = true;
            this.postMessage.init(_arg1, _arg2);
        }
        public function sendXdHttpRequest(_arg1:String, _arg2:String, _arg3:String, _arg4):int{
            var loader:* = null;
            var reqId:* = 0;
            var loaded:* = null;
            var key:* = null;
            var value:* = null;
            var method:* = _arg1;
            var url:* = _arg2;
            var requestBody:* = _arg3;
            var extraHeaders:* = _arg4;
            loaded = function (_arg1:Event):void{
                var _local2:String = loader.data.toString();
                XdComm.fbTrace("Requested completed", {data:_local2});
                ExternalInterface.call("FB_OnXdHttpResult", reqId, encodeURIComponent(_local2));
            };
            XdComm.fbTrace("SendXdHttpRequest", {
                method:method,
                url:url,
                requestBody:requestBody,
                extraHeaders:extraHeaders
            });
            if (((!((url.indexOf("https://") == 0))) && (!((url.indexOf("http://") == 0))))){
                url = ("http://" + url);
            };
            var host:* = PostMessage.extractDomain(url);
            if (((((!((host == "api.facebook.com"))) && (!((host == "graph.facebook.com"))))) && (!(/^(api|graph)\.[A-Za-z0-9\-\.]+\.facebook\.com$/.test(host))))){
                return (0);
            };
            XdComm.requestIdCount++;
            var req:* = new URLRequest(url);
            loader = new URLLoader();
            reqId = XdComm.requestIdCount;
            req.method = method;
            req.data = requestBody;
            if (extraHeaders != null){
                for (key in extraHeaders) {
                    value = extraHeaders[key];
                    req.requestHeaders.push(new URLRequestHeader(key, value));
                };
            };
            loader.addEventListener(Event.COMPLETE, loaded);
            loader.load(req);
            return (reqId);
        }
        private function setCacheContext(_arg1:String):void{
            if (_arg1 == null){
                _arg1 = "unknown";
            };
            this._cacheContext = _arg1;
        }
        private function clearAllCache():void{
            this.cache.clear();
            this.cache.flush();
        }
        private function getCache(_arg1:String):String{
            return (this.contextCache[_arg1]);
        }
        private function setCache(_arg1:String, _arg2:String):void{
            var _local3:Object = this.contextCache;
            _local3[_arg1] = _arg2;
            this.cache.flush();
        }
        private function get cache():SharedObject{
            if (this._cache == null){
                this._cache = SharedObject.getLocal("cache");
            };
            return (this._cache);
        }
        private function get contextCache():Object{
            var _local1:Object = this.cache.data[this._cacheContext];
            if (_local1 == null){
                _local1 = new Object();
                this.cache.data[this._cacheContext] = _local1;
            };
            return (_local1);
        }

    }
}//package
