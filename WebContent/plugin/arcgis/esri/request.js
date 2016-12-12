// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.
//>>built
define("esri/request","require dojo/_base/array dojo/_base/config dojo/_base/Deferred dojo/_base/lang dojo/_base/url dojo/_base/xhr dojo/io/script dojo/io/iframe dojo/dom-construct dojo/io-query ./kernel ./config ./sniff ./lang ./urlUtils ./deferredUtils".split(" "),function(P,C,M,R,s,X,t,Y,Z,S,T,h,$,p,A,l,aa){function u(a){a=new X(a);return(a.host+(a.port?":"+a.port:"")).toLowerCase()}function ba(a){return this._xhr?this._xhr.getResponseHeader(a):null}function D(a,d,e,f){var m=!1,q=!1,w;A.isDefined(d)&&
(s.isObject(d)?(m=!!d.useProxy,q=!!d.usePost,w=d.crossOrigin):m=!!d);a=s.mixin({},a);a._ssl&&(a.url=a.url.replace(/^http:/i,"https:"));d=a.content;var k=a.url,g=e&&a.form,v=n;w=A.isDefined(w)?w:v.useCors;a.load=function(a){var b;a&&(a.error?(b=s.mixin(Error(),a.error),b.log=M.isDebug):"error"===a.status&&(b=s.mixin(Error(),a),b.log=M.isDebug),b&&!A.isDefined(b.httpCode)&&(b.httpCode=b.code));return b||a};a.error=function(a,b){b&&b.xhr&&b.xhr.abort();a instanceof Error||(a=s.mixin(Error(),a));a.log=
M.isDebug;v.errorHandler(a,b);return a};a._token&&(a.content=a.content||{},a.content.token=a._token);var r=0,E;d&&k&&(E=T.objectToQuery(d),r=E.length+k.length+1,p("esri-url-encodes-apostrophe")&&(r=E.replace(/'/g,"%27").length+k.length+1));a.timeout=A.isDefined(a.timeout)?a.timeout:v.timeout;a.handleAs=a.handleAs||"json";try{var x,y,b=w&&l.canUseXhr(a.url)&&!/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i.test(a.url),c=l.hasSameOrigin(a.url,window.location.href)||b,F=q||e||r>v.postLength?!0:!1,U=!c&&
-1!==a.handleAs.indexOf("json")&&a.callbackParamName&&!e?!0:!1,G=l.getProxyRule(a.url)||v.alwaysUseProxy||m||(!U||F)&&!c?!0:!1;e&&(!p("esri-file-upload")&&!G&&b)&&(G=!0);if(G)if(x=l.getProxyUrl(k,w),y=x.path,x._xo&&(b=!0),!F&&y.length+1+r>v.postLength&&(F=!0),a.url=y+"?"+k,F)a.content=s.mixin(x.query||{},d);else{var V=T.objectToQuery(s.mixin(x.query||{},d));V&&(a.url+="?"+V);a.content=null}if(U&&!F)return!A.isDefined(a.isAsync)&&4>p("ff")&&(a.isAsync=!0),Y.get(z?z(a):a);var H=a.headers;if(b&&(!H||
!H.hasOwnProperty("X-Requested-With")))H=a.headers=H||{},H["X-Requested-With"]=null;if(e){var u=a.callbackParamName||"callback.html",D=a.callbackElementName||"textarea",I,N,J,O,K=g.elements?g.elements.length:0,B;if(d=a.content)for(I in d)if(J=d[I],A.isDefined(J)){N=null;for(O=0;O<K;O++)if(B=g.elements[O],B.name===I){N=B;break}N?N.value=J:f?g.append(I,J):g.appendChild(S.create("input",{type:"hidden",name:I,value:J}))}if(p("esri-file-upload"))C.forEach(g.elements,function(a){a.name===u&&g.removeChild(a)}),
a.contentType=!1,a.postData=f?g:new FormData(g),delete a.form;else{g.enctype="multipart/form-data";9>p("ie")&&(g.encoding="multipart/form-data");g.method="post";C.some(g.elements,function(a){return a.name===u})||g.appendChild(S.create("input",{type:"hidden",name:u,value:D}));if(-1!==k.toLowerCase().indexOf("addattachment")||-1!==k.toLowerCase().indexOf("updateattachment"))a.url=k+(-1===k.indexOf("?")?"?":"\x26")+u+"\x3d"+D,G&&(a.url=y+"?"+a.url);delete a.content}}if(b&&!a.hasOwnProperty("withCredentials")&&
"with-credentials"===n.useCors){f=G?y:k;var L=l.canUseXhr(f,!0),Q=-1<L?n.corsEnabledServers[L]:null;if(Q&&Q.hasOwnProperty("withCredentials"))Q.withCredentials&&(a.withCredentials=!0);else if(h.id){var W=h.id.findServerInfo(f);W&&W.webTierAuth&&(a.withCredentials=!0)}}a=z?z(a):a;if(F){if(e&&!p("esri-file-upload"))return Z.send(a);!G&&p("safari")&&(a.url+=(-1===a.url.indexOf("?")?"?":"\x26")+"_ts\x3d"+(new Date).getTime()+ca++);return t.post(a)}return t.get(a)}catch(P){return e=new R,e.errback(a.error(P)),
e}}function K(a){var d=n.corsStatus,e=l.canUseXhr(a,!0);-1<e&&n.corsEnabledServers.splice(e,1);d[u(a)]=1;return e}function B(a){var d=n.corsStatus;if(n.corsDetection&&n.useCors)try{var e=u(a);p("esri-cors")&&(a&&-1!==a.toLowerCase().indexOf("/rest/services")&&!l.hasSameOrigin(a,window.location.href)&&!l.canUseXhr(a)&&!d[e])&&(d[e]=-1,t.get({url:a.substring(0,a.toLowerCase().indexOf("/rest/")+6)+"info",content:{f:"json"},failOk:!0,handleAs:"json",headers:{"X-Requested-With":null}}).then(function(f){f?
(d[e]=2,l.canUseXhr(a)||n.corsEnabledServers.push(e)):d[e]=1},function(a){d[e]=1}))}catch(f){console.log("esri._detectCors: an unknown error occurred while detecting CORS support")}}function L(a){z=a}function q(a,d){function e(b){b._pendingDfd=D(a,d,z,v);if(!b._pendingDfd){b.ioArgs=b._pendingDfd&&b._pendingDfd.ioArgs;var c=Error("Deferred object is missing");c.log=M.isDebug;a._usrDfd=null;b.errback(c);b._pendingDfd=null;return b}b._pendingDfd.addCallback(function(c){b.ioArgs=b._pendingDfd&&b._pendingDfd.ioArgs;
a._usrDfd=null;d.returnFullResponse&&(c={data:c,_xhr:b.ioArgs&&b.ioArgs.xhr,getHeader:ba});b.callback(c);b._pendingDfd=null}).addErrback(function(c){var e,f,g;c&&(e=c.code,f=c.subcode,g=(g=c.messageCode)&&g.toUpperCase());if(c&&403==e&&(4==f||c.message&&-1<c.message.toLowerCase().indexOf("ssl")&&-1===c.message.toLowerCase().indexOf("permission"))){if(!a._ssl){a._ssl=a._sslFromServer=!0;a._usrDfd=b;q(a,d);return}}else if(c&&415==c.status){if(K(a.url),!a._err415){a._err415=1;a._usrDfd=b;q(a,d);return}}else if(h.id&&
-1!==C.indexOf(h.id._errorCodes,e)&&!h.id._isPublic(a.url)&&!s&&(403!=e||-1===C.indexOf(da,g)&&(!A.isDefined(f)||2==f&&a._token))){b._pendingDfd=h.id.getCredential(a.url,{token:a._token,error:c});b._pendingDfd.addCallback(function(c){a._token=c.token;a._usrDfd=b;a._credential=c;a._ssl=a._sslFromServer||c.ssl;q(a,d)}).addErrback(function(c){a._usrDfd=null;b.errback(c);b._pendingDfd=null});return}b.ioArgs=b._pendingDfd&&b._pendingDfd.ioArgs;a._usrDfd=null;b.errback(c);b._pendingDfd=null})}a.url=l.fixUrl(a.url);
l.isHTTP()&&(a.url=l.getAbsoluteUrl(a.url));d=d||{};var f,m=a.form,s=d.disableIdentityLookup,w=d._preLookup,k=!1;if(p("esri-workers")&&!1!==n.useWorkers)if(!0===d.useWorkers||!0===n.useWorkers)k=!0;else if(d.workerOptions){var g=d.workerOptions;if(g.callback||g.worker&&g.worker.worker instanceof Worker)k=!0}var v=m&&p("esri-file-upload")&&m instanceof FormData,z=m&&(m.elements?C.some(m.elements,function(a){return"file"===a.type}):v),E=-1!==a.url.toLowerCase().indexOf("token\x3d")||a.content&&a.content.token||
z&&C.some(m.elements,function(a){return"token"===a.name})?1:0;B(a.url);if(a._usrDfd)f=a._usrDfd;else{f=new R(aa._dfdCanceller);f.addCallback(function(b){if((/\/sharing\/rest\/accounts\/self/i.test(a.url)||/\/sharing\/rest\/portals\/self/i.test(a.url))&&!E&&!a._token&&b.user&&b.user.username){n.webTierAuthServers.push(u(a.url));b=n.corsEnabledServers;var c=l.canUseXhr(a.url,!0),d={host:u(a.url),withCredentials:!0};if(-1===c)b.push(d);else{var e=b[c];"object"===typeof e?e.withCredentials=!0:b.splice(c,
1,d)}}if(b=a._credential)if(c=(c=h.id.findServerInfo(b.server))&&c.owningSystemUrl)c=c.replace(/\/?$/,"/sharing"),(b=h.id.findCredential(c,b.userId))&&-1===h.id._getIdenticalSvcIdx(c,b)&&b.resources.splice(0,0,c)});f.addBoth(function(b){delete a._credential;if(b&&(!p("ie")||!b.nodeType))b._ssl=a._ssl});var x=a.load,y=a.error;x&&f.addCallback(function(a){var c=f._pendingDfd,c=c&&c.ioArgs;return x.call(c&&c.args,a,c)});y&&f.addErrback(function(a){var c=f._pendingDfd,c=c&&c.ioArgs;return y.call(c&&c.args,
a,c)})}if(h.id&&!E&&!a._token&&!h.id._isPublic(a.url)&&(!s||w))if(m=h.id.findCredential(a.url))a._token=m.token,a._ssl=m.ssl;k?d.workerOptions&&d.workerOptions.worker?(r||(r=t),t=d.workerOptions.worker,e(f)):P(["./workers/RequestClient"],function(a){r||(r=t);if(d.workerOptions){var c=d.workerOptions;t=a.getClient(c.callback,c.cbFunction)}else t=a.getClient();e(f)}):(r&&(t=r,r=null),e(f));return f}var r=null,z,n=$.defaults.io,da=["COM_0056","COM_0057"],ca=0;q._request=D;q._disableCors=K;q._detectCors=
B;q.setRequestPreCallback=L;p("extend-esri")&&(h.request=q,h._request=D,h._disableCors=K,h._detectCors=B,h.setRequestPreCallback=L);return q});