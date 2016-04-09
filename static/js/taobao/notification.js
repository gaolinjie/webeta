!function(a){"function"==typeof define?define("#underscore/1.3.3/underscore",[],a):a()}(function(a,b,c){function d(a,b,c){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;if(a._chain&&(a=a._wrapped),b._chain&&(b=b._wrapped),a.isEqual&&A.isFunction(a.isEqual))return a.isEqual(b);if(b.isEqual&&A.isFunction(b.isEqual))return b.isEqual(a);var e=m.call(a);if(e!=m.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return!0;c.push(a);var g=0,h=!0;if("[object Array]"==e){if(g=a.length,h=g==b.length)for(;g--&&(h=g in a==g in b&&d(a[g],b[g],c)););}else{if("constructor"in a!="constructor"in b||a.constructor!=b.constructor)return!1;for(var i in a)if(A.has(a,i)&&(g++,!(h=A.has(b,i)&&d(a[i],b[i],c))))break;if(h){for(i in b)if(A.has(b,i)&&!g--)break;h=!g}}return c.pop(),h}var e=this,f=e._,g={},h=Array.prototype,i=Object.prototype,j=Function.prototype,k=h.slice,l=h.unshift,m=i.toString,n=i.hasOwnProperty,o=h.forEach,p=h.map,q=h.reduce,r=h.reduceRight,s=h.filter,t=h.every,u=h.some,v=h.indexOf,w=h.lastIndexOf,x=Array.isArray,y=Object.keys,z=j.bind,A=function(a){return new L(a)};"undefined"!=typeof b?("undefined"!=typeof c&&c.exports&&(b=c.exports=A),b._=A):e._=A,A.VERSION="1.3.3";var B=A.each=A.forEach=function(a,b,c){if(null!=a)if(o&&a.forEach===o)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,e=a.length;e>d;d++)if(d in a&&b.call(c,a[d],d,a)===g)return}else for(var f in a)if(A.has(a,f)&&b.call(c,a[f],f,a)===g)return};A.map=A.collect=function(a,b,c){var d=[];return null==a?d:p&&a.map===p?a.map(b,c):(B(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),a.length===+a.length&&(d.length=a.length),d)},A.reduce=A.foldl=A.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),q&&a.reduce===q)return d&&(b=A.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(B(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError("Reduce of empty array with no initial value");return c},A.reduceRight=A.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),r&&a.reduceRight===r)return d&&(b=A.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=A.toArray(a).reverse();return d&&!e&&(b=A.bind(b,d)),e?A.reduce(f,b,c,d):A.reduce(f,b)},A.find=A.detect=function(a,b,c){var d;return C(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},A.filter=A.select=function(a,b,c){var d=[];return null==a?d:s&&a.filter===s?a.filter(b,c):(B(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},A.reject=function(a,b,c){var d=[];return null==a?d:(B(a,function(a,e,f){b.call(c,a,e,f)||(d[d.length]=a)}),d)},A.every=A.all=function(a,b,c){var d=!0;return null==a?d:t&&a.every===t?a.every(b,c):(B(a,function(a,e,f){return(d=d&&b.call(c,a,e,f))?void 0:g}),!!d)};var C=A.some=A.any=function(a,b,c){b||(b=A.identity);var d=!1;return null==a?d:u&&a.some===u?a.some(b,c):(B(a,function(a,e,f){return d||(d=b.call(c,a,e,f))?g:void 0}),!!d)};A.include=A.contains=function(a,b){var c=!1;return null==a?c:v&&a.indexOf===v?-1!=a.indexOf(b):c=C(a,function(a){return a===b})},A.invoke=function(a,b){var c=k.call(arguments,2);return A.map(a,function(a){return(A.isFunction(b)?b||a:a[b]).apply(a,c)})},A.pluck=function(a,b){return A.map(a,function(a){return a[b]})},A.max=function(a,b,c){if(!b&&A.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!b&&A.isEmpty(a))return-1/0;var d={computed:-1/0};return B(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},A.min=function(a,b,c){if(!b&&A.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!b&&A.isEmpty(a))return 1/0;var d={computed:1/0};return B(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},A.shuffle=function(a){var b,c=[];return B(a,function(a,d){b=Math.floor(Math.random()*(d+1)),c[d]=c[b],c[b]=a}),c},A.sortBy=function(a,b,c){var d=A.isFunction(b)?b:function(a){return a[b]};return A.pluck(A.map(a,function(a,b,e){return{value:a,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return void 0===c?1:void 0===d?-1:d>c?-1:c>d?1:0}),"value")},A.groupBy=function(a,b){var c={},d=A.isFunction(b)?b:function(a){return a[b]};return B(a,function(a,b){var e=d(a,b);(c[e]||(c[e]=[])).push(a)}),c},A.sortedIndex=function(a,b,c){c||(c=A.identity);for(var d=0,e=a.length;e>d;){var f=d+e>>1;c(a[f])<c(b)?d=f+1:e=f}return d},A.toArray=function(a){return a?A.isArray(a)?k.call(a):A.isArguments(a)?k.call(a):a.toArray&&A.isFunction(a.toArray)?a.toArray():A.values(a):[]},A.size=function(a){return A.isArray(a)?a.length:A.keys(a).length},A.first=A.head=A.take=function(a,b,c){return null==b||c?a[0]:k.call(a,0,b)},A.initial=function(a,b,c){return k.call(a,0,a.length-(null==b||c?1:b))},A.last=function(a,b,c){return null==b||c?a[a.length-1]:k.call(a,Math.max(a.length-b,0))},A.rest=A.tail=function(a,b,c){return k.call(a,null==b||c?1:b)},A.compact=function(a){return A.filter(a,function(a){return!!a})},A.flatten=function(a,b){return A.reduce(a,function(a,c){return A.isArray(c)?a.concat(b?c:A.flatten(c)):(a[a.length]=c,a)},[])},A.without=function(a){return A.difference(a,k.call(arguments,1))},A.uniq=A.unique=function(a,b,c){var d=c?A.map(a,c):a,e=[];return a.length<3&&(b=!0),A.reduce(d,function(c,d,f){return(b?A.last(c)===d&&c.length:A.include(c,d))||(c.push(d),e.push(a[f])),c},[]),e},A.union=function(){return A.uniq(A.flatten(arguments,!0))},A.intersection=A.intersect=function(a){var b=k.call(arguments,1);return A.filter(A.uniq(a),function(a){return A.every(b,function(b){return A.indexOf(b,a)>=0})})},A.difference=function(a){var b=A.flatten(k.call(arguments,1),!0);return A.filter(a,function(a){return!A.include(b,a)})},A.zip=function(){for(var a=k.call(arguments),b=A.max(A.pluck(a,"length")),c=new Array(b),d=0;b>d;d++)c[d]=A.pluck(a,""+d);return c},A.indexOf=function(a,b,c){if(null==a)return-1;var d,e;if(c)return d=A.sortedIndex(a,b),a[d]===b?d:-1;if(v&&a.indexOf===v)return a.indexOf(b);for(d=0,e=a.length;e>d;d++)if(d in a&&a[d]===b)return d;return-1},A.lastIndexOf=function(a,b){if(null==a)return-1;if(w&&a.lastIndexOf===w)return a.lastIndexOf(b);for(var c=a.length;c--;)if(c in a&&a[c]===b)return c;return-1},A.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f};var D=function(){};A.bind=function(a,b){var c,d;if(a.bind===z&&z)return z.apply(a,k.call(arguments,1));if(!A.isFunction(a))throw new TypeError;return d=k.call(arguments,2),c=function(){if(!(this instanceof c))return a.apply(b,d.concat(k.call(arguments)));D.prototype=a.prototype;var e=new D,f=a.apply(e,d.concat(k.call(arguments)));return Object(f)===f?f:e}},A.bindAll=function(a){var b=k.call(arguments,1);return 0==b.length&&(b=A.functions(a)),B(b,function(b){a[b]=A.bind(a[b],a)}),a},A.memoize=function(a,b){var c={};return b||(b=A.identity),function(){var d=b.apply(this,arguments);return A.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},A.delay=function(a,b){var c=k.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},A.defer=function(a){return A.delay.apply(A,[a,1].concat(k.call(arguments,1)))},A.throttle=function(a,b){var c,d,e,f,g,h,i=A.debounce(function(){g=f=!1},b);return function(){c=this,d=arguments;var j=function(){e=null,g&&a.apply(c,d),i()};return e||(e=setTimeout(j,b)),f?g=!0:h=a.apply(c,d),i(),f=!0,h}},A.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)};c&&!d&&a.apply(e,f),clearTimeout(d),d=setTimeout(g,b)}},A.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments))}},A.wrap=function(a,b){return function(){var c=[a].concat(k.call(arguments,0));return b.apply(this,c)}},A.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},A.after=function(a,b){return 0>=a?b():function(){return--a<1?b.apply(this,arguments):void 0}},A.keys=y||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)A.has(a,c)&&(b[b.length]=c);return b},A.values=function(a){return A.map(a,A.identity)},A.functions=A.methods=function(a){var b=[];for(var c in a)A.isFunction(a[c])&&b.push(c);return b.sort()},A.extend=function(a){return B(k.call(arguments,1),function(b){for(var c in b)a[c]=b[c]}),a},A.pick=function(a){var b={};return B(A.flatten(k.call(arguments,1)),function(c){c in a&&(b[c]=a[c])}),b},A.defaults=function(a){return B(k.call(arguments,1),function(b){for(var c in b)null==a[c]&&(a[c]=b[c])}),a},A.clone=function(a){return A.isObject(a)?A.isArray(a)?a.slice():A.extend({},a):a},A.tap=function(a,b){return b(a),a},A.isEqual=function(a,b){return d(a,b,[])},A.isEmpty=function(a){if(null==a)return!0;if(A.isArray(a)||A.isString(a))return 0===a.length;for(var b in a)if(A.has(a,b))return!1;return!0},A.isElement=function(a){return!(!a||1!=a.nodeType)},A.isArray=x||function(a){return"[object Array]"==m.call(a)},A.isObject=function(a){return a===Object(a)},A.isArguments=function(a){return"[object Arguments]"==m.call(a)},A.isArguments(arguments)||(A.isArguments=function(a){return!(!a||!A.has(a,"callee"))}),A.isFunction=function(a){return"[object Function]"==m.call(a)},A.isString=function(a){return"[object String]"==m.call(a)},A.isNumber=function(a){return"[object Number]"==m.call(a)},A.isFinite=function(a){return A.isNumber(a)&&isFinite(a)},A.isNaN=function(a){return a!==a},A.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==m.call(a)},A.isDate=function(a){return"[object Date]"==m.call(a)},A.isRegExp=function(a){return"[object RegExp]"==m.call(a)},A.isNull=function(a){return null===a},A.isUndefined=function(a){return void 0===a},A.has=function(a,b){return n.call(a,b)},A.noConflict=function(){return e._=f,this},A.identity=function(a){return a},A.times=function(a,b,c){for(var d=0;a>d;d++)b.call(c,d)},A.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")},A.result=function(a,b){if(null==a)return null;var c=a[b];return A.isFunction(c)?c.call(a):c},A.mixin=function(a){B(A.functions(a),function(b){N(b,A[b]=a[b])})};var E=0;A.uniqueId=function(a){var b=E++;return a?a+b:b},A.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var F=/.^/,G={"\\":"\\","'":"'",r:"\r",n:"\n",t:"	",u2028:"\u2028",u2029:"\u2029"};for(var H in G)G[G[H]]=H;var I=/\\|'|\r|\n|\t|\u2028|\u2029/g,J=/\\(\\|'|r|n|t|u2028|u2029)/g,K=function(a){return a.replace(J,function(a,b){return G[b]})};A.template=function(a,b,c){c=A.defaults(c||{},A.templateSettings);var d="__p+='"+a.replace(I,function(a){return"\\"+G[a]}).replace(c.escape||F,function(a,b){return"'+\n((__t=("+K(b)+"))==null?'':_.escape(__t))+\n'"}).replace(c.interpolate||F,function(a,b){return"'+\n((__t=("+K(b)+"))==null?'':__t)+\n'"}).replace(c.evaluate||F,function(a,b){return"';\n"+K(b)+"\n;__p+='"})+"';\n";c.variable||(d="with(obj||{}){\n"+d+"}\n"),d="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')};\n"+d+"return __p;\n";var e=new Function(c.variable||"obj","_",d);if(b)return e(b,A);var f=function(a){return e.call(this,a,A)};return f.source="function("+(c.variable||"obj")+"){\n"+d+"}",f},A.chain=function(a){return A(a).chain()};var L=function(a){this._wrapped=a};A.prototype=L.prototype;var M=function(a,b){return b?A(a).chain():a},N=function(a,b){L.prototype[a]=function(){var a=k.call(arguments);return l.call(a,this._wrapped),M(b.apply(A,a),this._chain)}};A.mixin(A),B(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=h[a];L.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],M(c,this._chain)}}),B(["concat","join","slice"],function(a){var b=h[a];L.prototype[a]=function(){return M(b.apply(this._wrapped,arguments),this._chain)}}),L.prototype.chain=function(){return this._chain=!0,this},L.prototype.value=function(){return this._wrapped}});!function(a,b){function c(a){var b=e.createElement("img");b.style.cssText="display:none",b.src=a,e.body.appendChild(b)}function d(a){a=a||{};var b={},d=a.apname||a.ap_name,e=a.apuri||a.ap_uri,f=a.apdata||a.ap_data;if(d){if("/"===d.charAt(0)&&(d=d.slice(1)),e&&(b.apuri=e),f)for(var g in f)b[g]=f[g];b.cache=parseInt((Math.random()+1)*Date.now());var h=[];for(var i in b){var j=b[i];"object"==typeof j&&(j=JSON.stringify(j)),h.push(i+"="+encodeURIComponent(j))}c("//wgo.mmstat.com/"+d+"?"+h.join("&"))}}var e=a.document;a.location;if(window.Zepto){var f=Zepto.ajax;Zepto.ajax=function(a){if(a){var b=a.complete;a.complete=function(){(a.aplus===!0||a.apname)&&d(a),b&&b.apply(this,arguments)},a.url?f.call(Zepto,a):a.complete()}}}b.aplus=d}(window,window.lib||(window.lib={}));!function(){var a=window.location.host&&window.location.host.match(".*\\m\\.(taobao|tmall)\\.com.*");return window.namespace?(console.warn("namespace aleady exist"),void 0):(window.namespace=function(b,c){if(2===arguments.length){for(var d,e=b.split("."),f=window,g=0;g<e.length;g++){if(d=e[g],g===e.length-1){f[d]?(console.error("namespace aleady exist :"+b),a&&(console.warn("forse replacement"),f[d]=c)):f[d]=c;break}f[d]||(f[d]={}),f=f[d]}return f}if(1===arguments.length)try{for(var h=b.split("."),i=window;h.length&&i;)i=i[h.shift()];return i}catch(j){return void 0}},window._define=function(a,b){var c={},d=c.exports={};namespace(a,b(null,d,c)||c.exports)},namespace("lib.define",function(a,b){namespace(a,b())}),void 0)}();!function(a){function b(a){var b=document.cookie.indexOf(";",a);return-1===b&&(b=document.cookie.length),window.unescape(decodeURIComponent(document.cookie.substring(a,b)))}a.storage||(a.storage={}),a.storage.cookie={isCookieEnable:function(){if(!window.navigator.cookieEnabled)return!1;var a="_s_cookie_",b=this.getCookie(a);return this.setCookie(a,"1"),"1"===b?(this.delCookie(a),!0):!1},getCookie:function(a){for(var c,d=a+"=",e=d.length,f=document.cookie.length,g=0;f>g;){if(c=g+e,document.cookie.substring(g,c)===d)return b(c);if(g=document.cookie.indexOf(" ",g)+1,0===g)break}return null},setCookie:function(a,b){var c=window.location.host,d=c.indexOf("."),e=c.substring(0,d),f=arguments.length>2?arguments[2]:null,g=new Date;"waptest"!==e&&"wapa"!==e&&"m"!==e&&(c.indexOf("taobao")>-1||c.indexOf("tmall")>-1)&&(c=c.substr(d+1)),null==f?document.cookie=a+"="+window.escape(b)+";path=/;domain="+c:(g.setTime(g.getTime()+1e3*f),document.cookie=a+"="+window.escape(b)+";path=/;domain="+c+";expires="+g.toGMTString())},delCookie:function(a){var b=new Date,c=this.getCookie(a);b.setTime(b.getTime()-1),document.cookie=a+"="+c+"; expires="+b.toGMTString()}}}(window.lib||(window.lib={}));!function(a){function b(a){var b,c,d,e="",f=0;for(b=c=d=0;f<a.length;)b=a.charCodeAt(f),128>b?(e+=String.fromCharCode(b),f++):b>191&&224>b?(d=a.charCodeAt(f+1),e+=String.fromCharCode((31&b)<<6|63&d),f+=2):(d=a.charCodeAt(f+1),c=a.charCodeAt(f+2),e+=String.fromCharCode((15&b)<<12|(63&d)<<6|63&c),f+=3);return e}function c(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(192|d>>6),b+=String.fromCharCode(128|63&d)):(b+=String.fromCharCode(224|d>>12),b+=String.fromCharCode(128|63&d>>6),b+=String.fromCharCode(128|63&d))}return b}var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.encode||(a.encode={}),a.encode.base64_utf8={encode:function(a){var b,e,f,g,h,i,j,k="",l=0;for(a=c(a);l<a.length;)b=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=b>>2,h=(3&b)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k=k+d.charAt(g)+d.charAt(h)+d.charAt(i)+d.charAt(j);return k},decode:function(a){var c,e,f,g,h,i,j,k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)g=d.indexOf(a.charAt(l++)),h=d.indexOf(a.charAt(l++)),i=d.indexOf(a.charAt(l++)),j=d.indexOf(a.charAt(l++)),c=g<<2|h>>4,e=(15&h)<<4|i>>2,f=(3&i)<<6|j,k+=String.fromCharCode(c),64!==i&&(k+=String.fromCharCode(e)),64!==j&&(k+=String.fromCharCode(f));return k=b(k)}}}(window.lib||(window.lib={}));!function(a,b){function c(a,c){if(a&&(c||"object"!=typeof a||(c=a,a=c.id))){var d=b(a);if(!d.length)throw new Error("dom not find");this.$container=d,this.init(c||{})}}c.prototype={init:function(a){var c={index:1,pageCount:null,preFix:"!page/",objId:"Z",disableHash:null};b.extend(this,c,a),this.pageCount||(this.disableHash=!0),this.oldIndex=-1;var d=this.preFix,e=d.length;"/"!=d.charAt(e-1)&&(this.preFix+="/"),isNaN(this.index)&&(this.index=1),this.pageCount&&this.index>this.pageCount&&(this.index=this.pageCount),this.index<=0&&(this.index=1),this.createDom(),this.eventAttach(),!this.disableHash&&this.parseHash(),this.renderPage()},setIndex:function(a){var b=this;b.$select&&(a=Number(a),isNaN(a)&&(a=1),a>b.pageCount&&(a=b.pageCount),0>=a&&(a=1),b.index=a,b.renderPage())},setCount:function(a){a&&(this.pageCount=this.index=a,this.renderPage())},parseHash:function(){var a=this,b=location.hash,c=b.substr(b.lastIndexOf("/")+1),d=[],e=0,f=[];d=c.split("-");for(var g=0;g<d.length;g++){f=d[g].split("");var h=f.shift();h==this.objId&&(e=Number(f.join("")),(isNaN(e)||0>=e)&&(a.index=1),e>a.pageCount&&(a.index=a.pageCount),a.index=e)}},setContainer:function(a){this.$container=b(a)},getObjId:function(){return this.objId},pContainer:function(){return this.$container},changeHash:function(){var a=this,b=location.hash;if(""==b)location.hash=a.preFix+"-"+a.objId+a.index;else{var c=b.lastIndexOf(a.objId),d=c;if(-1==c)location.hash+="-"+a.objId+a.index;else{for(;;)if(d++,"-"==b[d]||!b[d])break;b=b.replace(b.substring(c,d),a.objId+a.index),location.hash=b}}},createDom:function(){var a=this,b=a.$container,c=a.pageCount,d=c&&'<i class="aw a-u"></i>'||"",e=c&&'<select class="c-p-select"></select>'||"",f=['<section class="c-p-con">','<a class="c-btn c-btn-aw c-p-pre"><span>上一页</span></a>','<div class="c-p-cur c-btn"><span>','<div class="c-p-arrow">',"<span></span>",d,"</div>",e,"</span></div>",'<a class="c-btn c-btn-awr c-p-next"><span>下一页</span></a>',"</section>"];if(b.html(f.join("")),c){e=a.$select||(a.$select=b.find("select")),f=new Array(c);for(var g=1;c>=g;g++)f[g-1]="<option>第"+g+"页</option>";e.append(f.join(""))}},renderPage:function(a){var c=this,d=c.$container,e=c.$select,f=c.pageCount,g=c.index,h=b(".c-p-pre",d),i=b(".c-p-next",d);f?(1>=f?(h.addClass("c-btn-off"),i.addClass("c-btn-off"),c.pageCount=1):1==g?(h.addClass("c-btn-off"),f>1&&i.removeClass("c-btn-off")):g==f?(i.addClass("c-btn-off"),f>1&&h.removeClass("c-btn-off")):g>1&&f>g&&(h.removeClass("c-btn-off"),i.removeClass("c-btn-off")),e&&(e.get(0).selectedIndex=g-1)):("end"==a&&(g--,i.addClass("c-btn-off"),c.pageCount=c.index=g),1>=g?h.addClass("c-btn-off"):h.removeClass("c-btn-off"));var j=g+"/"+f;e||(j="第 "+g+" 页"),b(".c-p-arrow span",d).text(j)},eventDetach:function(){var a=this,b=a.$container,c=a.$select;c&&c.off(),b.off("click"),a.$select=null,a.$arrow=null},eventAttach:function(){var a=this,c=a.$container,d=a.$select;a.$arrow||(a.$arrow=b(".c-p-arrow i")),commonFunc=function(b){a.triggerEvent(b)},d&&d.on({change:commonFunc}),c.on("click",".c-p-pre",commonFunc),c.on("click",".c-p-next",commonFunc)},triggerEvent:function(a){a.preventDefault();var c=this,d=a.currentTarget,e=b(d),f=d.tagName.toLowerCase(),g=c.index,h={};if("a"==f){if(e.hasClass("c-btn-off"))return;var i="";e.hasClass("c-p-pre")?(g--,i="pre"):e.hasClass("c-p-next")&&(g++,i="next")}else if("select"==f){if(g=d.selectedIndex+1,c.oldIndex==g)return;i="select"}c.index=g,h={index:g,type:i},c.$select?c.renderPage():h.callback=function(a){c.renderPage(a)},c.disableHash?c.$container.trigger("P:switchPage",h):c.changeHash(),c.oldIndex=g}},a.lib=a.lib||{},lib.PageNav=c}(window,$);!function(a,b){var c=a.Zepto||a.$,d=function(){var a="WebkitTransform"in document.documentElement.style?!0:!1;return a},e=function(){var a,b=!1,c=document.createElement("div"),a=["&#173;",'<style id="smodernizr">',"@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}","</style>"].join(""),d=document.documentElement.style;return c.id="modernizr",c.innerHTML+=a,document.body.appendChild(c),"WebkitPerspective"in d&&"webkitPerspective"in d&&(b=9===c.offsetLeft&&3===c.offsetHeight),c.parentNode.removeChild(c),b},f=e?"translate3d(":"translate(",g=e?",0)":")",h=function(a,b){return a?(b?b.container=a:b="string"==typeof a?{container:a}:a,c.extend(this,{container:".slider",wrap:null,panel:null,trigger:null,activeTriggerCls:"sel",hasTrigger:!1,steps:0,left:0,visible:1,margin:0,curIndex:0,duration:300,loop:!1,play:!1,interval:5e3,useTransform:e?!0:!1,lazy:".lazyimg",lazyIndex:1,callback:null,prev:null,next:null,activePnCls:"none"},b),void(this.findEl()&&this.init()&&this.increaseEvent())):null};c.extend(h.prototype,{reset:function(a){this.loop&&(this._oldLoop=!0),c.extend(this,a||{}),this.init()},findEl:function(){var a=this.container=c(this.container);return a.length?(this.wrap=this.wrap&&a.find(this.wrap)||a.children().first(),this.wrap.length?(this.panel=this.panel&&a.find(this.panel)||this.wrap.children().first(),this.panel.length?(this.panels=this.panel.children(),this.panels.length?(this.trigger=this.trigger&&a.find(this.trigger),this.prev=this.prev&&a.find(this.prev),this.next=this.next&&a.find(this.next),this):(this.container.hide(),null)):null):null):null},init:function(){var a=this.wrap,b=this.panel,c=this.panels,f=this.trigger,g=this.len=c.length,h=this.margin,i=0,j=this.visible,k=this.useTransform=d?this.useTransform:!1;this.steps=this.steps||a.width(),c.each(function(a,b){i+=b.offsetWidth}),h&&"number"==typeof h&&(i+=(g-1)*h,this.steps+=h),j>1&&(this.loop=!1);var l=this.left;l-=this.curIndex*this.steps,this.setCoord(b,l),k&&(e&&a.css({"-webkit-transform":"translateZ(0)"}),b.css({"-webkit-backface-visibility":"hidden"}));var m=this._pages=Math.ceil(g/j);if(this._minpage=0,this._maxpage=this._pages-1,this.loadImg(),this.updateArrow(),1>=m)return this.getImg(c[0]),f&&f.hide(),null;if(this._oldLoop){var n=b.children();n.eq(n.length-2).remove(),n.eq(n.length-1).remove()}if(this.loop){b.append(c[0].cloneNode(!0));var o=c[g-1].cloneNode(!0);b.append(o),this.getImg(o),o.style.cssText+="position:relative;left:"+-this.steps*(g+2)+"px;",i+=c[0].offsetWidth,i+=c[g-1].offsetWidth}if(b.css("width",i),f&&f.length){var p="",q=f.children();if(!q.length){for(var r=0;m>r;r++)p+="<span"+(r==this.curIndex?" class="+this.activeTriggerCls:"")+"></span>";f.html(p)}this.triggers=f.children(),this.triggerSel=this.triggers[this.curIndex]}else this.hasTrigger=!1;return this.slideTo(this.curIndex),this},increaseEvent:function(){var a=this,b=a.wrap[0],d=a.prev,e=a.next,f=a.triggers;b.addEventListener&&(b.addEventListener("touchstart",a,!1),b.addEventListener("touchmove",a,!1),b.addEventListener("touchend",a,!1),b.addEventListener("webkitTransitionEnd",a,!1),b.addEventListener("msTransitionEnd",a,!1),b.addEventListener("oTransitionEnd",a,!1),b.addEventListener("transitionend",a,!1)),a.play&&a.begin(),d&&d.length&&d.on("click",function(b){a.backward.call(a,b),a.begin()}),e&&e.length&&e.on("click",function(b){a.forward.call(a,b),a.begin()}),a.hasTrigger&&f&&f.each(function(b,d){c(d).on("click",function(){a.slideTo(b)})})},handleEvent:function(a){switch(a.type){case"touchstart":this.start(a);break;case"touchmove":this.move(a);break;case"touchend":case"touchcancel":this.end(a);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(a)}},loadImg:function(a){a=a||0,a<this._minpage?a=this._maxpage:a>this._maxpage&&(a=this._minpage);var b=this.visible,c=this.lazyIndex-1,d=c+a;if(!(d>this._maxpage)){d+=1;var e=(a&&c+a||a)*b,f=d*b,g=this.panels;f=Math.min(g.length,f);for(var h=e;f>h;h++)this.getImg(g[h])}},getImg:function(a){if(a&&(a=c(a),!a.attr("l"))){var b=this,d=b.lazy,e="img"+d;d=d.replace(/^\.|#/g,""),a.find(e).each(function(a,b){var e=c(b);src=e.attr("dataimg"),src&&e.attr("src",src).removeAttr("dataimg").removeClass(d)}),a.attr("l","1")}},start:function(a){var b=a.touches[0];this._movestart=void 0,this._disX=0,this._coord={x:b.pageX,y:b.pageY}},move:function(a){if(!(a.touches.length>1||a.scale&&1!==a.scale)){var b,c=a.touches[0],d=this._disX=c.pageX-this._coord.x,e=this.left;"undefined"==typeof this._movestart&&(this._movestart=!!(this._movestart||Math.abs(d)<Math.abs(c.pageY-this._coord.y))),this._movestart||(a.preventDefault(),a.stopPropagation(),this.stop(),this.loop||(d/=!this.curIndex&&d>0||this.curIndex==this._maxpage&&0>d?Math.abs(d)/this.steps+1:1),b=e-this.curIndex*this.steps+d,this.setCoord(this.panel,b),this._disX=d)}},end:function(a){if(!this._movestart){var b=this._disX;-10>b?(a.preventDefault(),this.forward()):b>10&&(a.preventDefault(),this.backward()),b=null}},backward:function(a){a&&a.preventDefault&&a.preventDefault();var b=this.curIndex,c=this._minpage;b-=1,c>b&&(b=this.loop?c-1:c),this.slideTo(b),this.callback&&this.callback(Math.max(b,c),-1)},forward:function(a){a&&a.preventDefault&&a.preventDefault();var b=this.curIndex,c=this._maxpage;b+=1,b>c&&(b=this.loop?c+1:c),this.slideTo(b),this.callback&&this.callback(Math.min(b,c),1)},setCoord:function(a,b){this.useTransform&&a.css("-webkit-transform",f+b+"px,0"+g)||a.css("left",b)},slideTo:function(a,b){a=a||0,this.curIndex=a;var c=this.panel,d=c[0].style,e=this.left-a*this.steps;d.webkitTransitionDuration=d.MozTransitionDuration=d.msTransitionDuration=d.OTransitionDuration=d.transitionDuration=(b||this.duration)+"ms",this.setCoord(c,e),this.loadImg(a)},transitionEnd:function(){var a=this.panel,b=a[0].style,c=this.loop,d=this.curIndex;c&&(d>this._maxpage?this.curIndex=0:d<this._minpage&&(this.curIndex=this._maxpage),this.setCoord(a,this.left-this.curIndex*this.steps)),c||d!=this._maxpage?this.begin():(this.stop(),this.play=!1),this.update(),this.updateArrow(),b.webkitTransitionDuration=b.MozTransitionDuration=b.msTransitionDuration=b.OTransitionDuration=b.transitionDuration=0},update:function(){var a=this.triggers,b=this.activeTriggerCls,c=this.curIndex;a&&a[c]&&(this.triggerSel&&(this.triggerSel.className=""),a[c].className=b,this.triggerSel=a[c])},updateArrow:function(){var a=this.prev,b=this.next;if(a&&a.length&&b&&b.length&&!this.loop){var c=this.curIndex,d=this.activePnCls;0>=c&&a.addClass(d)||a.removeClass(d),c>=this._maxpage&&b.addClass(d)||b.removeClass(d)}},begin:function(){var a=this;a.play&&!a._playTimer&&(a.stop(),a._playTimer=setInterval(function(){a.forward()},a.interval))},stop:function(){var a=this;a.play&&a._playTimer&&(clearInterval(a._playTimer),a._playTimer=null)},destroy:function(){var a=this,b=a.wrap[0],d=a.prev,e=a.next,f=a.triggers;b.removeEventListener&&(b.removeEventListener("touchstart",a,!1),b.removeEventListener("touchmove",a,!1),b.removeEventListener("touchend",a,!1),b.removeEventListener("webkitTransitionEnd",a,!1),b.removeEventListener("msTransitionEnd",a,!1),b.removeEventListener("oTransitionEnd",a,!1),b.removeEventListener("transitionend",a,!1)),d&&d.length&&d.off("click"),e&&e.length&&e.off("click"),a.hasTrigger&&f&&f.each(function(a,b){c(b).off("click")})},attachTo:function(a,b){return a=c(a),a.each(function(a,c){c.getAttribute("l")||(c.setAttribute("l",!0),h.cache.push(new h(c,b)))})}}),h.cache=[],h.destroy=function(){var a=h.cache,b=a.length;if(!(1>b)){for(var c=0;b>c;c++)a[c].destroy();h.cache=[]}},b.Slider=h}(window,window.lib||(window.lib={}));!function(a,b){function c(a){this._options=b.extend({mode:"msg",text:"网页提示",useTap:!1},a||{}),this._init()}var d,e=b(a),f=['<div class="c-float-popWrap msgMode hide">','<div class="c-float-modePop">','<div class="warnMsg"></div>','<div class="content"></div>','<div class="doBtn">','<button class="ok">确定</button>','<button class="cancel">取消</button>',"</div>","</div>","</div>"].join(""),g=b(f),h=g.find(".warnMsg"),i=g.find(".content"),j=g.find(".doBtn .ok"),k=g.find(".doBtn .cancel"),l=!1,m="body";b.extend(c.prototype,{_init:function(){var a=this,c=a._options,d=c.mode,f=c.text,n=c.content,o=c.callback,p=c.background,q=c.useTap?"tap":"click",r=c.usedInWangWang,s=g.attr("class");s=s.replace(/(msg|alert|confirm)Mode/i,d+"Mode"),g.attr("class",s),p&&g.css("background",p),f&&h.html(f),n&&i.html(n),j.off(q).on(q,function(b){o.call(a,b,!0)}),k.off(q).on(q,function(b){o.call(a,b,!1)}),l||(l=!0,b(m).append(g),r||e.on("resize",function(){setTimeout(function(){a._pos()},500)}))},_pos:function(){var a,b,c,d,e,f,h=this,i=document,j=i.documentElement,k=i.body;h.isHide()||(a=k.scrollTop,b=k.scrollLeft,c=j.clientWidth,d=j.clientHeight,e=g.width(),f=g.height(),g.css({top:a+(d-f)/2,left:b+(c-e)/2}))},isShow:function(){return g.hasClass("show")},isHide:function(){return g.hasClass("hide")},_cbShow:function(){var a=this,b=a._options,c=b.onShow;g.css("opacity","1").addClass("show"),c&&c.call(a)},show:function(){var a=this;d&&(clearTimeout(d),d=void 0),a.isShow()?a._cbShow():(g.css("opacity","0").removeClass("hide"),a._pos(),setTimeout(function(){a._cbShow()},300),setTimeout(function(){g.animate({opacity:"1"},300,"linear")},1))},_cbHide:function(){var a=this,b=a._options,c=b.onHide;g.css("opacity","0").addClass("hide"),c&&c.call(a)},hide:function(){var a=this;a.isHide()?a._cbHide():(g.css("opacity","1").removeClass("show"),setTimeout(function(){a._cbHide()},300),setTimeout(function(){g.animate({opacity:"0"},300,"linear")},1))},flash:function(a){var b=this;opt=b._options,opt.onShow=function(){d=setTimeout(function(){d&&b.hide()},a)},b.show()}}),a.lib=a.lib||{},lib.notification=new function(){this.simple=function(a,b,d){2==arguments.length&&"number"==typeof arguments[1]&&(d=arguments[1],b=void 0);var e=new c({mode:"msg",text:a,background:b});return e.flash(d||2e3),e},this.msg=function(a,d){return new c(b.extend({mode:"msg",text:a},d||{}))},this.alert=function(a,d,e){return new c(b.extend({mode:"alert",text:a,callback:d},e||{}))},this.confirm=function(a,d,e,f){return new c(b.extend({mode:"confirm",text:a,content:d,callback:e},f||{}))},this.pop=function(a){return new c(a)}}}(window,$);