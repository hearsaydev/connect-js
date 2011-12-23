package 
{
    import flash.display.*;
    import flash.events.*;
    import flash.external.*;
    import flash.net.*;
    import flash.system.*;
    import flashutils.*;

    public class XdComm extends Sprite
    {
        private var _cache:SharedObject;
        private var _cacheContext:String = "unknown";
        private var postMessage:PostMessage;
        private static var requestIdCount:int = 0;
        private static var initialized:Boolean = false;
        private static var origin_validated:Boolean = false;

        public function XdComm()
        {
            XdComm.fbTrace("XdComm Constructor", {url:stage.loaderInfo.url});
            if (XdComm.initialized)
            {
                return;
            }
            XdComm.initialized = true;
            var _loc_1:* = PostMessage.getCurrentDomain();
            Security.allowDomain(_loc_1);
            Security.allowInsecureDomain(_loc_1);
            this.addEventListener(Event.ENTER_FRAME, this.init);
            return;
        }// end function

        private function init(event:Event) : void
        {
            var _loc_4:String = null;
            XdComm.fbTrace("XdComm.init", {});
            this.removeEventListener(Event.ENTER_FRAME, this.init);
            var _loc_2:* = stage.loaderInfo.url;
            var _loc_3:* = PostMessage.extractDomain(_loc_2);
            if (_loc_3 != "connect.facebook.net")
            {
                XdComm.fbTrace("XdComm is not loaded from connect.facebook.net", {swfDomain:_loc_3});
                if (_loc_3.substr(-13) == ".facebook.com")
                {
                    _loc_4 = PostMessage.extractPathAndQuery(_loc_2);
                    if (_loc_4.substr(0, 8) != "/intern/")
                    {
                        XdComm.fbTrace("XdComm is NOT in intern mode", {swfPath:_loc_4});
                        return;
                    }
                    XdComm.fbTrace("XdComm is in intern mode", {swfPath:_loc_4});
                }
                else
                {
                    return;
                }
            }
            this.postMessage = new PostMessage();
            ExternalInterface.addCallback("postMessage_init", this.initPostMessage);
            ExternalInterface.addCallback("sendXdHttpRequest", this.sendXdHttpRequest);
            ExternalInterface.addCallback("setCache", this.setCache);
            ExternalInterface.addCallback("getCache", this.getCache);
            ExternalInterface.addCallback("setCacheContext", this.setCacheContext);
            ExternalInterface.addCallback("clearAllCache", this.clearAllCache);
            ExternalInterface.call("FB_OnFlashXdCommReady");
            return;
        }// end function

        private function initPostMessage(param1:String, param2:String) : void
        {
            origin_validated = true;
            this.postMessage.init(param1, param2);
            return;
        }// end function

        public function sendXdHttpRequest(param1:String, param2:String, param3:String, param4) : int
        {
            var loader:URLLoader;
            var reqId:int;
            var loaded:Function;
            var key:String;
            var value:String;
            var method:* = param1;
            var url:* = param2;
            var requestBody:* = param3;
            var extraHeaders:* = param4;
            loaded = function (event:Event) : void
            {
                var _loc_2:* = loader.data.toString();
                XdComm.fbTrace("Requested completed", {data:_loc_2});
                ExternalInterface.call("FB_OnXdHttpResult", reqId, encodeURIComponent(_loc_2));
                return;
            }// end function
            ;
            XdComm.fbTrace("SendXdHttpRequest", {method:method, url:url, requestBody:requestBody, extraHeaders:extraHeaders});
            if (url.indexOf("https://") != 0 && url.indexOf("http://") != 0)
            {
                url = "http://" + url;
            }
            var host:* = PostMessage.extractDomain(url);
            if (host != "api.facebook.com" && host != "graph.facebook.com" && !/^(api|graph)\.[A-Za-z0-9\-\.]+\.facebook\.com$""^(api|graph)\.[A-Za-z0-9\-\.]+\.facebook\.com$/.test(host))
            {
                return 0;
            }
            var _loc_6:* = XdComm;
            var _loc_7:* = XdComm.requestIdCount + 1;
            _loc_6.requestIdCount = _loc_7;
            var req:* = new URLRequest(url);
            loader = new URLLoader();
            reqId = XdComm.requestIdCount;
            req.method = method;
            req.data = requestBody;
            if (extraHeaders != null)
            {
                var _loc_6:int = 0;
                var _loc_7:* = extraHeaders;
                while (_loc_7 in _loc_6)
                {
                    
                    key = _loc_7[_loc_6];
                    value = extraHeaders[key];
                    req.requestHeaders.push(new URLRequestHeader(key, value));
                }
            }
            loader.addEventListener(Event.COMPLETE, loaded);
            loader.load(req);
            return reqId;
        }// end function

        private function setCacheContext(param1:String) : void
        {
            if (param1 == null)
            {
                param1 = "unknown";
            }
            this._cacheContext = param1;
            return;
        }// end function

        private function clearAllCache() : void
        {
            this.cache.clear();
            this.cache.flush();
            return;
        }// end function

        private function getCache(param1:String) : String
        {
            return this.contextCache[param1];
        }// end function

        private function setCache(param1:String, param2:String) : void
        {
            var _loc_3:* = this.contextCache;
            _loc_3[param1] = param2;
            this.cache.flush();
            return;
        }// end function

        private function get cache() : SharedObject
        {
            if (this._cache == null)
            {
                this._cache = SharedObject.getLocal("cache");
            }
            return this._cache;
        }// end function

        private function get contextCache() : Object
        {
            var _loc_1:* = this.cache.data[this._cacheContext];
            if (_loc_1 == null)
            {
                _loc_1 = new Object();
                this.cache.data[this._cacheContext] = _loc_1;
            }
            return _loc_1;
        }// end function

        public static function proxy(param1:String, param2:String) : void
        {
            if (origin_validated)
            {
                ExternalInterface.call(param1, param2);
            }
            return;
        }// end function

        public static function traceObject(param1:Object, param2:int = 0, param3:String = "")
        {
            var _loc_6:* = undefined;
            var _loc_7:String = null;
            var _loc_4:String = "";
            var _loc_5:int = 0;
            while (_loc_5 < param2)
            {
                
                _loc_4 = _loc_4 + "\t";
                _loc_5++;
            }
            for (_loc_6 in param1)
            {
                
                param3 = param3 + (_loc_4 + "[" + _loc_6 + "] => " + param1[_loc_6]);
                _loc_7 = traceObject(param1[_loc_6], (param2 + 1));
                if (_loc_7 != "")
                {
                    param3 = param3 + (" {\n" + _loc_7 + _loc_4 + "}");
                }
                param3 = param3 + "\n";
            }
            return param3;
        }// end function

        public static function fbTrace(param1:String, param2:Object) : void
        {
            return;
        }// end function

    }
}
