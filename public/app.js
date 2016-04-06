/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*Modules depends on*/

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _app = __webpack_require__(185);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(196);

	var _app4 = _interopRequireDefault(_app3);

	__webpack_require__(1);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	var _ServiceConfig = __webpack_require__(20);

	var _ServiceConfig2 = _interopRequireDefault(_ServiceConfig);

	var _ServiceEvents = __webpack_require__(21);

	var _ServiceEvents2 = _interopRequireDefault(_ServiceEvents);

	var _eventFocus = __webpack_require__(144);

	var _eventFocus2 = _interopRequireDefault(_eventFocus);

	var _trTest = __webpack_require__(145);

	var _trTest2 = _interopRequireDefault(_trTest);

	var _trBoard = __webpack_require__(148);

	var _trBoard2 = _interopRequireDefault(_trBoard);

	var _trBoardHeader = __webpack_require__(151);

	var _trBoardHeader2 = _interopRequireDefault(_trBoardHeader);

	var _trBoards = __webpack_require__(154);

	var _trBoards2 = _interopRequireDefault(_trBoards);

	var _trCard = __webpack_require__(157);

	var _trCard2 = _interopRequireDefault(_trCard);

	var _trFooter = __webpack_require__(161);

	var _trFooter2 = _interopRequireDefault(_trFooter);

	var _trHeader = __webpack_require__(164);

	var _trHeader2 = _interopRequireDefault(_trHeader);

	var _trIcon = __webpack_require__(167);

	var _trIcon2 = _interopRequireDefault(_trIcon);

	var _trList = __webpack_require__(170);

	var _trList2 = _interopRequireDefault(_trList);

	var _trLists = __webpack_require__(173);

	var _trLists2 = _interopRequireDefault(_trLists);

	var _trNewBoard = __webpack_require__(176);

	var _trNewBoard2 = _interopRequireDefault(_trNewBoard);

	var _trNewCard = __webpack_require__(179);

	var _trNewCard2 = _interopRequireDefault(_trNewCard);

	var _trNewList = __webpack_require__(182);

	var _trNewList2 = _interopRequireDefault(_trNewList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*Directives*/


	/*Services*/


	/*Css*/
	exports.default = angular.module("trello", ['ui.router', 'ngAnimate', 'ui.bootstrap', _app2.default, _app4.default]).config(_routes2.default)
	/*Services*/
	.service('ServiceConfig', _ServiceConfig2.default).service('ServiceEvents', _ServiceEvents2.default)
	/*Directives*/
	.directive('eventFocus', _eventFocus2.default)
	/*Components*/
	.component('trTest', _trTest2.default).component('trBoard', _trBoard2.default).component('trBoardHeader', _trBoardHeader2.default).component('trBoards', _trBoards2.default).component('trCard', _trCard2.default).component('trFooter', _trFooter2.default).component('trHeader', _trHeader2.default).component('trIcon', _trIcon2.default).component('trList', _trList2.default).component('trLists', _trLists2.default).component('trNewBoard', _trNewBoard2.default).component('trNewCard', _trNewCard2.default).component('trNewList', _trNewList2.default).name;

	/*Components*/


	/*Routes*/

	window.addEventListener('load', function () {
	    angular.bootstrap(document, ["trello"]);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($stateProvider, $urlRouterProvider) {

	    $urlRouterProvider.otherwise('/');

	    $stateProvider.state('boards', {
	        url: '/',
	        template: _boards2.default
	    }).state('board', {
	        url: '/board:boardKey/:slug',
	        template: _board2.default
	    }).state('test', {
	        url: '/test',
	        template: _test2.default
	    });
	};

	var _boards = __webpack_require__(6);

	var _boards2 = _interopRequireDefault(_boards);

	var _board = __webpack_require__(7);

	var _board2 = _interopRequireDefault(_board);

	var _test = __webpack_require__(8);

	var _test2 = _interopRequireDefault(_test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<!--State Boards-->\n\n<tr-header></tr-header>\n<div class=\"container\">\n    <tr-boards></tr-boards>\n</div>\n<tr-footer></tr-footer>"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<!--State Board-->\n<tr-header></tr-header>\n\n<div class=\"container\">\n    <tr-board-header></tr-board-header>\n    <tr-lists></tr-lists>\n</div>\n<tr-footer></tr-footer>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<h3>Test Page!!!!</h3>\n\n<tr-test></tr-test>\n\n\n\n"

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	/*! @license Firebase v2.4.2
	    License: https://www.firebase.com/terms/terms-of-service.html */
	(function() {var h,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.yb=function(){return a.zf?a.zf:a.zf=new a}}
	function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){return"array"==ca(a)}function ea(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}function q(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function r(a){return"function"==ca(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ha(a,b,c){return a.call.apply(a.bind,arguments)}
	function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)}var ja=Date.now||function(){return+new Date};
	function ka(a,b){function c(){}c.prototype=b.prototype;a.ph=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.lh=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function la(a){if(Error.captureStackTrace)Error.captureStackTrace(this,la);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ka(la,Error);la.prototype.name="CustomError";function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function ma(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function na(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function oa(a){var b=0,c;for(c in a)b++;return b}function pa(a){for(var b in a)return b}function qa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ra(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function sa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function ta(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function ua(a,b){var c=ta(a,b,void 0);return c&&a[c]}function va(a){for(var b in a)return!1;return!0}function wa(a){var b={},c;for(c in a)b[c]=a[c];return b}var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Aa(){this.Vd=void 0}
	function Ba(a,b,c){switch(typeof b){case "string":Ca(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(da(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],Ba(a,a.Vd?a.Vd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ca(f,c),
	c.push(":"),Ba(a,a.Vd?a.Vd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var Da={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ea=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Ca(a,b){b.push('"',a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Da[a]=e+b.toString(16)}),'"')};function Fa(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ja()).toString(36)};var w;a:{var Ga=n.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){w=Ha;break a}}w=""};function Ia(){this.Ya=-1};function Ja(){this.Ya=-1;this.Ya=64;this.P=[];this.pe=[];this.eg=[];this.Od=[];this.Od[0]=128;for(var a=1;a<this.Ya;++a)this.Od[a]=0;this.ge=this.ec=0;this.reset()}ka(Ja,Ia);Ja.prototype.reset=function(){this.P[0]=1732584193;this.P[1]=4023233417;this.P[2]=2562383102;this.P[3]=271733878;this.P[4]=3285377520;this.ge=this.ec=0};
	function Ka(a,b,c){c||(c=0);var d=a.eg;if(q(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.P[0];c=a.P[1];for(var g=a.P[2],k=a.P[3],m=a.P[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),l=1518500249):(f=c^g^k,l=1859775393):60>e?(f=c&g|k&(c|g),l=2400959708):(f=c^g^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.P[0]=a.P[0]+b&4294967295;a.P[1]=a.P[1]+c&4294967295;a.P[2]=a.P[2]+g&4294967295;a.P[3]=a.P[3]+k&4294967295;a.P[4]=a.P[4]+m&4294967295}
	Ja.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.pe,f=this.ec;d<b;){if(0==f)for(;d<=c;)Ka(this,a,d),d+=this.Ya;if(q(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){Ka(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Ya){Ka(this,e);f=0;break}}this.ec=f;this.ge+=b}};var x=Array.prototype,La=x.indexOf?function(a,b,c){return x.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ma=x.forEach?function(a,b,c){x.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=x.filter?function(a,b,c){return x.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?
	a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Oa=x.map?function(a,b,c){return x.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Pa=x.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;f<g;f++)e.push(arguments[f]);d&&(e[0]=u(b,d));return x.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ma(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Qa=x.every?function(a,b,
	c){return x.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ra(a,b){var c=Sa(a,b,void 0);return 0>c?null:q(a)?a.charAt(c):a[c]}function Sa(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Ta(a,b){var c=La(a,b);0<=c&&x.splice.call(a,c,1)}function Ua(a,b,c){return 2>=arguments.length?x.slice.call(a,b):x.slice.call(a,b,c)}
	function Va(a,b){a.sort(b||Wa)}function Wa(a,b){return a>b?1:a<b?-1:0};function Xa(a){n.setTimeout(function(){throw a;},0)}var Ya;
	function Za(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==w.indexOf("Presto")&&(a=function(){var a=document.createElement("iframe");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==
	d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==w.indexOf("Trident")&&-1==w.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.hb;c.hb=null;a()}};return function(a){d.next={hb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("script")?function(a){var b=
	document.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function $a(a,b){ab||bb();cb||(ab(),cb=!0);db.push(new eb(a,b))}var ab;function bb(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve();ab=function(){a.then(fb)}}else ab=function(){var a=fb;!r(n.setImmediate)||n.Window&&n.Window.prototype&&n.Window.prototype.setImmediate==n.setImmediate?(Ya||(Ya=Za()),Ya(a)):n.setImmediate(a)}}var cb=!1,db=[];[].push(function(){cb=!1;db=[]});
	function fb(){for(;db.length;){var a=db;db=[];for(var b=0;b<a.length;b++){var c=a[b];try{c.yg.call(c.scope)}catch(d){Xa(d)}}}cb=!1}function eb(a,b){this.yg=a;this.scope=b};var gb=-1!=w.indexOf("Opera")||-1!=w.indexOf("OPR"),hb=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),ib=-1!=w.indexOf("Gecko")&&-1==w.toLowerCase().indexOf("webkit")&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE")),jb=-1!=w.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(gb&&n.opera)return a=n.opera.version,r(a)?a():a;ib?b=/rv\:([^\);]+)(\)|;)/:hb?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:jb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(w))?a[1]:"");return hb&&(b=(b=n.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var kb=null,lb=null,mb=null;function nb(a,b){if(!ea(a))throw Error("encodeByteArray takes an array as a parameter");ob();for(var c=b?lb:kb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,t=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,g||(k=64));d.push(c[t],c[f],c[k],c[l])}return d.join("")}
	function ob(){if(!kb){kb={};lb={};mb={};for(var a=0;65>a;a++)kb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),lb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),mb[lb[a]]=a,62<=a&&(mb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function pb(a,b){this.N=qb;this.Rf=void 0;this.Ba=this.Ha=null;this.yd=this.ye=!1;if(a==rb)sb(this,tb,b);else try{var c=this;a.call(b,function(a){sb(c,tb,a)},function(a){if(!(a instanceof ub))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}sb(c,vb,a)})}catch(d){sb(this,vb,d)}}var qb=0,tb=2,vb=3;function rb(){}pb.prototype.then=function(a,b,c){return wb(this,r(a)?a:null,r(b)?b:null,c)};pb.prototype.then=pb.prototype.then;pb.prototype.$goog_Thenable=!0;h=pb.prototype;
	h.gh=function(a,b){return wb(this,null,a,b)};h.cancel=function(a){this.N==qb&&$a(function(){var b=new ub(a);xb(this,b)},this)};function xb(a,b){if(a.N==qb)if(a.Ha){var c=a.Ha;if(c.Ba){for(var d=0,e=-1,f=0,g;g=c.Ba[f];f++)if(g=g.o)if(d++,g==a&&(e=f),0<=e&&1<d)break;0<=e&&(c.N==qb&&1==d?xb(c,b):(d=c.Ba.splice(e,1)[0],yb(c,d,vb,b)))}a.Ha=null}else sb(a,vb,b)}function zb(a,b){a.Ba&&a.Ba.length||a.N!=tb&&a.N!=vb||Ab(a);a.Ba||(a.Ba=[]);a.Ba.push(b)}
	function wb(a,b,c,d){var e={o:null,Hf:null,Jf:null};e.o=new pb(function(a,g){e.Hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){g(l)}}:a;e.Jf=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof ub?g(b):a(e)}catch(l){g(l)}}:g});e.o.Ha=a;zb(a,e);return e.o}h.Yf=function(a){this.N=qb;sb(this,tb,a)};h.Zf=function(a){this.N=qb;sb(this,vb,a)};
	function sb(a,b,c){if(a.N==qb){if(a==c)b=vb,c=new TypeError("Promise cannot resolve to itself");else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.N=1;c.then(a.Yf,a.Zf,a);return}if(ga(c))try{var f=c.then;if(r(f)){Bb(a,c,f);return}}catch(g){b=vb,c=g}}a.Rf=c;a.N=b;a.Ha=null;Ab(a);b!=vb||c instanceof ub||Cb(a,c)}}function Bb(a,b,c){function d(b){f||(f=!0,a.Zf(b))}function e(b){f||(f=!0,a.Yf(b))}a.N=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
	function Ab(a){a.ye||(a.ye=!0,$a(a.wg,a))}h.wg=function(){for(;this.Ba&&this.Ba.length;){var a=this.Ba;this.Ba=null;for(var b=0;b<a.length;b++)yb(this,a[b],this.N,this.Rf)}this.ye=!1};function yb(a,b,c,d){if(c==tb)b.Hf(d);else{if(b.o)for(;a&&a.yd;a=a.Ha)a.yd=!1;b.Jf(d)}}function Cb(a,b){a.yd=!0;$a(function(){a.yd&&Db.call(null,b)})}var Db=Xa;function ub(a){la.call(this,a)}ka(ub,la);ub.prototype.name="cancel";var Eb=Eb||"2.4.2";function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function z(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function Gb(a){var b={};Fb(a,function(a,d){b[a]=d});return b}function Hb(a){return"object"===typeof a&&null!==a};function Ib(a){var b=[];Fb(a,function(a,d){da(d)?Ma(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function Jb(a){var b={};a=a.replace(/^\?/,"").split("&");Ma(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error("Firebase ("+Eb+") INTERNAL ASSERT FAILED: "+a)};var Mb=n.Promise||pb;pb.prototype["catch"]=pb.prototype.gh;function B(){var a=this;this.reject=this.resolve=null;this.D=new Mb(function(b,c){a.resolve=b;a.reject=c})}function C(a,b){return function(c,d){c?a.reject(c):a.resolve(d);r(b)&&(Nb(a.D),1===b.length?b(c):b(c,d))}}function Nb(a){a.then(void 0,aa)};function Ob(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,Kb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function Pb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function D(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function E(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function F(a,b,c,d){if((!d||p(c))&&!r(c))throw Error(E(a,b,d)+"must be a valid function.");}function Qb(a,b,c){if(p(c)&&(!ga(c)||null===c))throw Error(E(a,b,!0)+"must be a valid context object.");};function Rb(a){return"undefined"!==typeof JSON&&p(JSON.parse)?JSON.parse(a):za(a)}function G(a){if("undefined"!==typeof JSON&&p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join("")}return a};function Sb(){this.Zd=H}Sb.prototype.j=function(a){return this.Zd.S(a)};Sb.prototype.toString=function(){return this.Zd.toString()};function Tb(){}Tb.prototype.uf=function(){return null};Tb.prototype.Ce=function(){return null};var Ub=new Tb;function Vb(a,b,c){this.bg=a;this.Oa=b;this.Nd=c}Vb.prototype.uf=function(a){var b=this.Oa.Q;if(Wb(b,a))return b.j().T(a);b=null!=this.Nd?new Xb(this.Nd,!0,!1):this.Oa.w();return this.bg.Bc(a,b)};Vb.prototype.Ce=function(a,b,c){var d=null!=this.Nd?this.Nd:Yb(this.Oa);a=this.bg.qe(d,b,1,c,a);return 0===a.length?null:a[0]};function Zb(){this.xb=[]}function $b(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.cc();null===c||f.ea(c.cc())||(a.xb.push(c),c=null);null===c&&(c=new ac(f));c.add(e)}c&&a.xb.push(c)}function bc(a,b,c){$b(a,c);cc(a,function(a){return a.ea(b)})}function dc(a,b,c){$b(a,c);cc(a,function(a){return a.contains(b)||b.contains(a)})}
	function cc(a,b){for(var c=!0,d=0;d<a.xb.length;d++){var e=a.xb[d];if(e)if(e=e.cc(),b(e)){for(var e=a.xb[d],f=0;f<e.xd.length;f++){var g=e.xd[f];if(null!==g){e.xd[f]=null;var k=g.Zb();ec&&fc("event: "+g.toString());gc(k)}}a.xb[d]=null}else c=!1}c&&(a.xb=[])}function ac(a){this.ta=a;this.xd=[]}ac.prototype.add=function(a){this.xd.push(a)};ac.prototype.cc=function(){return this.ta};function J(a,b,c,d){this.type=a;this.Na=b;this.Za=c;this.Oe=d;this.Td=void 0}function hc(a){return new J(ic,a)}var ic="value";function jc(a,b,c,d){this.xe=b;this.be=c;this.Td=d;this.wd=a}jc.prototype.cc=function(){var a=this.be.Mb();return"value"===this.wd?a.path:a.parent().path};jc.prototype.De=function(){return this.wd};jc.prototype.Zb=function(){return this.xe.Zb(this)};jc.prototype.toString=function(){return this.cc().toString()+":"+this.wd+":"+G(this.be.qf())};function kc(a,b,c){this.xe=a;this.error=b;this.path=c}kc.prototype.cc=function(){return this.path};kc.prototype.De=function(){return"cancel"};
	kc.prototype.Zb=function(){return this.xe.Zb(this)};kc.prototype.toString=function(){return this.path.toString()+":cancel"};function Xb(a,b,c){this.A=a;this.ga=b;this.Yb=c}function lc(a){return a.ga}function mc(a){return a.Yb}function nc(a,b){return b.e()?a.ga&&!a.Yb:Wb(a,K(b))}function Wb(a,b){return a.ga&&!a.Yb||a.A.Fa(b)}Xb.prototype.j=function(){return this.A};function oc(a){this.pg=a;this.Gd=null}oc.prototype.get=function(){var a=this.pg.get(),b=wa(a);if(this.Gd)for(var c in this.Gd)b[c]-=this.Gd[c];this.Gd=a;return b};function pc(a,b){this.Vf={};this.hd=new oc(a);this.da=b;var c=1E4+2E4*Math.random();setTimeout(u(this.Of,this),Math.floor(c))}pc.prototype.Of=function(){var a=this.hd.get(),b={},c=!1,d;for(d in a)0<a[d]&&y(this.Vf,d)&&(b[d]=a[d],c=!0);c&&this.da.Ye(b);setTimeout(u(this.Of,this),Math.floor(6E5*Math.random()))};function qc(){this.Hc={}}function rc(a,b,c){p(c)||(c=1);y(a.Hc,b)||(a.Hc[b]=0);a.Hc[b]+=c}qc.prototype.get=function(){return wa(this.Hc)};var sc={},tc={};function uc(a){a=a.toString();sc[a]||(sc[a]=new qc);return sc[a]}function vc(a,b){var c=a.toString();tc[c]||(tc[c]=b());return tc[c]};function L(a,b){this.name=a;this.U=b}function wc(a,b){return new L(a,b)};function xc(a,b){return yc(a.name,b.name)}function zc(a,b){return yc(a,b)};function Ac(a,b,c){this.type=Bc;this.source=a;this.path=b;this.Ja=c}Ac.prototype.$c=function(a){return this.path.e()?new Ac(this.source,M,this.Ja.T(a)):new Ac(this.source,N(this.path),this.Ja)};Ac.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ja.toString()+")"};function Cc(a,b){this.type=Dc;this.source=a;this.path=b}Cc.prototype.$c=function(){return this.path.e()?new Cc(this.source,M):new Cc(this.source,N(this.path))};Cc.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function Ec(a,b){this.Pa=a;this.xa=b?b:Fc}h=Ec.prototype;h.Sa=function(a,b){return new Ec(this.Pa,this.xa.Sa(a,b,this.Pa).$(null,null,!1,null,null))};h.remove=function(a){return new Ec(this.Pa,this.xa.remove(a,this.Pa).$(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.xa;!c.e();){b=this.Pa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Gc(a,b){for(var c,d=a.xa,e=null;!d.e();){c=a.Pa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.xa.e()};h.count=function(){return this.xa.count()};h.Vc=function(){return this.xa.Vc()};h.jc=function(){return this.xa.jc()};h.ka=function(a){return this.xa.ka(a)};
	h.ac=function(a){return new Hc(this.xa,null,this.Pa,!1,a)};h.bc=function(a,b){return new Hc(this.xa,a,this.Pa,!1,b)};h.dc=function(a,b){return new Hc(this.xa,a,this.Pa,!0,b)};h.xf=function(a){return new Hc(this.xa,null,this.Pa,!0,a)};function Hc(a,b,c,d,e){this.Xd=e||null;this.Je=d;this.Ta=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Je?a.left:a.right;else if(0===e){this.Ta.push(a);break}else this.Ta.push(a),a=this.Je?a.right:a.left}
	function Ic(a){if(0===a.Ta.length)return null;var b=a.Ta.pop(),c;c=a.Xd?a.Xd(b.key,b.value):{key:b.key,value:b.value};if(a.Je)for(b=b.left;!b.e();)a.Ta.push(b),b=b.right;else for(b=b.right;!b.e();)a.Ta.push(b),b=b.left;return c}function Jc(a){if(0===a.Ta.length)return null;var b;b=a.Ta;b=b[b.length-1];return a.Xd?a.Xd(b.key,b.value):{key:b.key,value:b.value}}function Kc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Fc;this.right=null!=e?e:Fc}h=Kc.prototype;
	h.$=function(a,b,c,d,e){return new Kc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.ka=function(a){return this.left.ka(a)||a(this.key,this.value)||this.right.ka(a)};function Lc(a){return a.left.e()?a:Lc(a.left)}h.Vc=function(){return Lc(this).key};h.jc=function(){return this.right.e()?this.key:this.right.jc()};
	h.Sa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.$(null,null,null,e.left.Sa(a,b,c),null):0===d?e.$(null,b,null,null,null):e.$(null,null,null,null,e.right.Sa(a,b,c));return Mc(e)};function Nc(a){if(a.left.e())return Fc;a.left.ha()||a.left.left.ha()||(a=Oc(a));a=a.$(null,null,null,Nc(a.left),null);return Mc(a)}
	h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ha()||c.left.left.ha()||(c=Oc(c)),c=c.$(null,null,null,c.left.remove(a,b),null);else{c.left.ha()&&(c=Pc(c));c.right.e()||c.right.ha()||c.right.left.ha()||(c=Qc(c),c.left.left.ha()&&(c=Pc(c),c=Qc(c)));if(0===b(a,c.key)){if(c.right.e())return Fc;d=Lc(c.right);c=c.$(d.key,d.value,null,null,Nc(c.right))}c=c.$(null,null,null,null,c.right.remove(a,b))}return Mc(c)};h.ha=function(){return this.color};
	function Mc(a){a.right.ha()&&!a.left.ha()&&(a=Rc(a));a.left.ha()&&a.left.left.ha()&&(a=Pc(a));a.left.ha()&&a.right.ha()&&(a=Qc(a));return a}function Oc(a){a=Qc(a);a.right.left.ha()&&(a=a.$(null,null,null,null,Pc(a.right)),a=Rc(a),a=Qc(a));return a}function Rc(a){return a.right.$(null,null,a.color,a.$(null,null,!0,null,a.right.left),null)}function Pc(a){return a.left.$(null,null,a.color,null,a.$(null,null,!0,a.left.right,null))}
	function Qc(a){return a.$(null,null,!a.color,a.left.$(null,null,!a.left.color,null,null),a.right.$(null,null,!a.right.color,null,null))}function Sc(){}h=Sc.prototype;h.$=function(){return this};h.Sa=function(a,b){return new Kc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.ka=function(){return!1};h.Vc=function(){return null};h.jc=function(){return null};h.ha=function(){return!1};var Fc=new Sc;function Tc(a,b){return a&&"object"===typeof a?(O(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Uc(a,b){var c=new Vc;Wc(a,new P(""),function(a,e){c.rc(a,Xc(e,b))});return c}function Xc(a,b){var c=a.C().J(),c=Tc(c,b),d;if(a.L()){var e=Tc(a.Ea(),b);return e!==a.Ea()||c!==a.C().J()?new Yc(e,Q(c)):a}d=a;c!==a.C().J()&&(d=d.ia(new Yc(c)));a.R(R,function(a,c){var e=Xc(c,b);e!==c&&(d=d.W(a,e))});return d};function Zc(){this.Ac={}}Zc.prototype.set=function(a,b){null==b?delete this.Ac[a]:this.Ac[a]=b};Zc.prototype.get=function(a){return y(this.Ac,a)?this.Ac[a]:null};Zc.prototype.remove=function(a){delete this.Ac[a]};Zc.prototype.Af=!0;function $c(a){this.Ic=a;this.Sd="firebase:"}h=$c.prototype;h.set=function(a,b){null==b?this.Ic.removeItem(this.Sd+a):this.Ic.setItem(this.Sd+a,G(b))};h.get=function(a){a=this.Ic.getItem(this.Sd+a);return null==a?null:Rb(a)};h.remove=function(a){this.Ic.removeItem(this.Sd+a)};h.Af=!1;h.toString=function(){return this.Ic.toString()};function ad(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new $c(b)}}catch(c){}return new Zc}var bd=ad("localStorage"),cd=ad("sessionStorage");function dd(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.ob=b;this.lc=c;this.jh=d;this.Rd=e||"";this.ab=bd.get("host:"+a)||this.host}function ed(a,b){b!==a.ab&&(a.ab=b,"s-"===a.ab.substr(0,2)&&bd.set("host:"+a.host,a.ab))}
	function fd(a,b,c){O("string"===typeof b,"typeof type must == string");O("object"===typeof c,"typeof params must == object");if(b===gd)b=(a.ob?"wss://":"ws://")+a.ab+"/.ws?";else if(b===hd)b=(a.ob?"https://":"http://")+a.ab+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.ab&&(c.ns=a.lc);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}dd.prototype.toString=function(){var a=(this.ob?"https://":"http://")+this.host;this.Rd&&(a+="<"+this.Rd+">");return a};var id=function(){var a=1;return function(){return a++}}(),O=Kb,jd=Lb;
	function kd(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{ob();for(var c=mb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==m)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ua(d,c,
	c+8192));b=a}}return b}catch(l){fc("base64Decode failed: ",l)}return null}function ld(a){var b=Ob(a);a=new Ja;a.update(b);var b=[],c=8*a.ge;56>a.ec?a.update(a.Od,56-a.ec):a.update(a.Od,a.Ya-(a.ec-56));for(var d=a.Ya-1;56<=d;d--)a.pe[d]=c&255,c/=256;Ka(a,a.pe);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.P[d]>>e&255,++c;return nb(b)}
	function md(a){for(var b="",c=0;c<arguments.length;c++)b=ea(arguments[c])?b+md.apply(null,arguments[c]):"object"===typeof arguments[c]?b+G(arguments[c]):b+arguments[c],b+=" ";return b}var ec=null,nd=!0;
	function od(a,b){Kb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?ec=u(console.log,console):"object"===typeof console.log&&(ec=function(a){console.log(a)})),b&&cd.set("logging_enabled",!0)):r(a)?ec=a:(ec=null,cd.remove("logging_enabled"))}function fc(a){!0===nd&&(nd=!1,null===ec&&!0===cd.get("logging_enabled")&&od(!0));if(ec){var b=md.apply(null,arguments);ec(b)}}
	function pd(a){return function(){fc(a,arguments)}}function qd(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+md.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function rd(a){var b=md.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function S(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+md.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function sd(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(q(a)){var m=a.indexOf("//");0<=m&&(g=a.substring(0,m-1),a=a.substring(m+2));m=a.indexOf("/");-1===m&&(m=a.length);b=a.substring(0,m);e="";a=a.substring(m).split("/");for(m=0;m<a.length;m++)if(0<a[m].length){var l=a[m];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch(t){}e+="/"+l}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);m=b.indexOf(":");0<=m&&(f="https"===g||"wss"===g,k=b.substring(m+1),isFinite(k)&&
	(k=String(k)),k=q(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,fh:d,ob:f,scheme:g,bd:e}}function td(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function ud(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function yc(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=vd(a),d=vd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function wd(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+G(b));}
	function xd(a){if("object"!==typeof a||null===a)return G(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=G(b[d]),c+=":",c+=xd(a[b[d]]);return c+"}"}function yd(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function zd(a,b){if(da(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
	function Ad(a){O(!td(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var Bd=/^-?\d{1,10}$/;function vd(a){return Bd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function gc(a){try{a()}catch(b){setTimeout(function(){S("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function T(a,b){if(r(a)){var c=Array.prototype.slice.call(arguments,1).slice();gc(function(){a.apply(null,c)})}};function Cd(a){var b={},c={},d={},e="";try{var f=a.split("."),b=Rb(kd(f[0])||""),c=Rb(kd(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{mh:b,Ec:c,data:d,bh:e}}function Dd(a){a=Cd(a).Ec;return"object"===typeof a&&a.hasOwnProperty("iat")?z(a,"iat"):null}function Ed(a){a=Cd(a);var b=a.Ec;return!!a.bh&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Fd(a){this.Y=a;this.g=a.n.g}function Gd(a,b,c,d){var e=[],f=[];Ma(b,function(b){"child_changed"===b.type&&a.g.Dd(b.Oe,b.Na)&&f.push(new J("child_moved",b.Na,b.Za))});Hd(a,e,"child_removed",b,d,c);Hd(a,e,"child_added",b,d,c);Hd(a,e,"child_moved",f,d,c);Hd(a,e,"child_changed",b,d,c);Hd(a,e,ic,b,d,c);return e}function Hd(a,b,c,d,e,f){d=Na(d,function(a){return a.type===c});Va(d,u(a.qg,a));Ma(d,function(c){var d=Id(a,c,f);Ma(e,function(e){e.Qf(c.type)&&b.push(e.createEvent(d,a.Y))})})}
	function Id(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Td=c.wf(b.Za,b.Na,a.g));return b}Fd.prototype.qg=function(a,b){if(null==a.Za||null==b.Za)throw jd("Should only compare child_ events.");return this.g.compare(new L(a.Za,a.Na),new L(b.Za,b.Na))};function Jd(){this.ib={}}
	function Kd(a,b){var c=b.type,d=b.Za;O("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");O(".priority"!==d,"Only non-priority child changes can be tracked.");var e=z(a.ib,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.ib[d]=new J("child_changed",b.Na,d,e.Na);else if("child_removed"==c&&"child_added"==f)delete a.ib[d];else if("child_removed"==c&&"child_changed"==f)a.ib[d]=new J("child_removed",e.Oe,d);else if("child_changed"==c&&
	"child_added"==f)a.ib[d]=new J("child_added",b.Na,d);else if("child_changed"==c&&"child_changed"==f)a.ib[d]=new J("child_changed",b.Na,d,e.Oe);else throw jd("Illegal combination of changes: "+b+" occurred after "+e);}else a.ib[d]=b};function Ld(a){this.g=a}h=Ld.prototype;h.H=function(a,b,c,d,e,f){O(a.Mc(this.g),"A node must be indexed if only a child is updated");e=a.T(b);if(e.S(d).ea(c.S(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Fa(b)?Kd(f,new J("child_removed",e,b)):O(a.L(),"A child remove without an old child only makes sense on a leaf node"):e.e()?Kd(f,new J("child_added",c,b)):Kd(f,new J("child_changed",c,b,e)));return a.L()&&c.e()?a:a.W(b,c).pb(this.g)};
	h.ya=function(a,b,c){null!=c&&(a.L()||a.R(R,function(a,e){b.Fa(a)||Kd(c,new J("child_removed",e,a))}),b.L()||b.R(R,function(b,e){if(a.Fa(b)){var f=a.T(b);f.ea(e)||Kd(c,new J("child_changed",e,b,f))}else Kd(c,new J("child_added",e,b))}));return b.pb(this.g)};h.ia=function(a,b){return a.e()?H:a.ia(b)};h.Ra=function(){return!1};h.$b=function(){return this};function Md(a){this.Fe=new Ld(a.g);this.g=a.g;var b;a.oa?(b=Nd(a),b=a.g.Sc(Od(a),b)):b=a.g.Wc();this.gd=b;a.ra?(b=Pd(a),a=a.g.Sc(Rd(a),b)):a=a.g.Tc();this.Jc=a}h=Md.prototype;h.matches=function(a){return 0>=this.g.compare(this.gd,a)&&0>=this.g.compare(a,this.Jc)};h.H=function(a,b,c,d,e,f){this.matches(new L(b,c))||(c=H);return this.Fe.H(a,b,c,d,e,f)};
	h.ya=function(a,b,c){b.L()&&(b=H);var d=b.pb(this.g),d=d.ia(H),e=this;b.R(R,function(a,b){e.matches(new L(a,b))||(d=d.W(a,H))});return this.Fe.ya(a,d,c)};h.ia=function(a){return a};h.Ra=function(){return!0};h.$b=function(){return this.Fe};function Sd(a){this.ua=new Md(a);this.g=a.g;O(a.la,"Only valid if limit has been set");this.ma=a.ma;this.Nb=!Td(a)}h=Sd.prototype;h.H=function(a,b,c,d,e,f){this.ua.matches(new L(b,c))||(c=H);return a.T(b).ea(c)?a:a.Hb()<this.ma?this.ua.$b().H(a,b,c,d,e,f):Ud(this,a,b,c,e,f)};
	h.ya=function(a,b,c){var d;if(b.L()||b.e())d=H.pb(this.g);else if(2*this.ma<b.Hb()&&b.Mc(this.g)){d=H.pb(this.g);b=this.Nb?b.dc(this.ua.Jc,this.g):b.bc(this.ua.gd,this.g);for(var e=0;0<b.Ta.length&&e<this.ma;){var f=Ic(b),g;if(g=this.Nb?0>=this.g.compare(this.ua.gd,f):0>=this.g.compare(f,this.ua.Jc))d=d.W(f.name,f.U),e++;else break}}else{d=b.pb(this.g);d=d.ia(H);var k,m,l;if(this.Nb){b=d.xf(this.g);k=this.ua.Jc;m=this.ua.gd;var t=Vd(this.g);l=function(a,b){return t(b,a)}}else b=d.ac(this.g),k=this.ua.gd,
	m=this.ua.Jc,l=Vd(this.g);for(var e=0,A=!1;0<b.Ta.length;)f=Ic(b),!A&&0>=l(k,f)&&(A=!0),(g=A&&e<this.ma&&0>=l(f,m))?e++:d=d.W(f.name,H)}return this.ua.$b().ya(a,d,c)};h.ia=function(a){return a};h.Ra=function(){return!0};h.$b=function(){return this.ua.$b()};
	function Ud(a,b,c,d,e,f){var g;if(a.Nb){var k=Vd(a.g);g=function(a,b){return k(b,a)}}else g=Vd(a.g);O(b.Hb()==a.ma,"");var m=new L(c,d),l=a.Nb?Wd(b,a.g):Xd(b,a.g),t=a.ua.matches(m);if(b.Fa(c)){for(var A=b.T(c),l=e.Ce(a.g,l,a.Nb);null!=l&&(l.name==c||b.Fa(l.name));)l=e.Ce(a.g,l,a.Nb);e=null==l?1:g(l,m);if(t&&!d.e()&&0<=e)return null!=f&&Kd(f,new J("child_changed",d,c,A)),b.W(c,d);null!=f&&Kd(f,new J("child_removed",A,c));b=b.W(c,H);return null!=l&&a.ua.matches(l)?(null!=f&&Kd(f,new J("child_added",
	l.U,l.name)),b.W(l.name,l.U)):b}return d.e()?b:t&&0<=g(l,m)?(null!=f&&(Kd(f,new J("child_removed",l.U,l.name)),Kd(f,new J("child_added",d,c))),b.W(c,d).W(l.name,H)):b};function Yd(a,b){this.me=a;this.og=b}function Zd(a){this.X=a}
	Zd.prototype.gb=function(a,b,c,d){var e=new Jd,f;if(b.type===Bc)b.source.Ae?c=$d(this,a,b.path,b.Ja,c,d,e):(O(b.source.tf,"Unknown source."),f=b.source.ef||mc(a.w())&&!b.path.e(),c=ae(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===be)b.source.Ae?c=ce(this,a,b.path,b.children,c,d,e):(O(b.source.tf,"Unknown source."),f=b.source.ef||mc(a.w()),c=de(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Yd)if(b=b.path,null!=c.xc(b))c=a;else{f=new Vb(c,a,d);d=a.Q.j();if(b.e()||".priority"===K(b))lc(a.w())?
	b=c.Aa(Yb(a)):(b=a.w().j(),O(b instanceof fe,"serverChildren would be complete if leaf node"),b=c.Cc(b)),b=this.X.ya(d,b,e);else{var g=K(b),k=c.Bc(g,a.w());null==k&&Wb(a.w(),g)&&(k=d.T(g));b=null!=k?this.X.H(d,g,k,N(b),f,e):a.Q.j().Fa(g)?this.X.H(d,g,H,N(b),f,e):d;b.e()&&lc(a.w())&&(d=c.Aa(Yb(a)),d.L()&&(b=this.X.ya(b,d,e)))}d=lc(a.w())||null!=c.xc(M);c=ge(a,b,d,this.X.Ra())}else c=he(this,a,b.path,b.Ub,c,d,e);else if(b.type===Dc)d=b.path,b=a.w(),f=b.j(),g=b.ga||d.e(),c=ie(this,new je(a.Q,new Xb(f,
	g,b.Yb)),d,c,Ub,e);else throw jd("Unknown operation type: "+b.type);e=qa(e.ib);d=c;b=d.Q;b.ga&&(f=b.j().L()||b.j().e(),g=ke(a),(0<e.length||!a.Q.ga||f&&!b.j().ea(g)||!b.j().C().ea(g.C()))&&e.push(hc(ke(d))));return new Yd(c,e)};
	function ie(a,b,c,d,e,f){var g=b.Q;if(null!=d.xc(c))return b;var k;if(c.e())O(lc(b.w()),"If change path is empty, we must have complete server data"),mc(b.w())?(e=Yb(b),d=d.Cc(e instanceof fe?e:H)):d=d.Aa(Yb(b)),f=a.X.ya(b.Q.j(),d,f);else{var m=K(c);if(".priority"==m)O(1==le(c),"Can't have a priority with additional path components"),f=g.j(),k=b.w().j(),d=d.nd(c,f,k),f=null!=d?a.X.ia(f,d):g.j();else{var l=N(c);Wb(g,m)?(k=b.w().j(),d=d.nd(c,g.j(),k),d=null!=d?g.j().T(m).H(l,d):g.j().T(m)):d=d.Bc(m,
	b.w());f=null!=d?a.X.H(g.j(),m,d,l,e,f):g.j()}}return ge(b,f,g.ga||c.e(),a.X.Ra())}function ae(a,b,c,d,e,f,g,k){var m=b.w();g=g?a.X:a.X.$b();if(c.e())d=g.ya(m.j(),d,null);else if(g.Ra()&&!m.Yb)d=m.j().H(c,d),d=g.ya(m.j(),d,null);else{var l=K(c);if(!nc(m,c)&&1<le(c))return b;var t=N(c);d=m.j().T(l).H(t,d);d=".priority"==l?g.ia(m.j(),d):g.H(m.j(),l,d,t,Ub,null)}m=m.ga||c.e();b=new je(b.Q,new Xb(d,m,g.Ra()));return ie(a,b,c,e,new Vb(e,b,f),k)}
	function $d(a,b,c,d,e,f,g){var k=b.Q;e=new Vb(e,b,f);if(c.e())g=a.X.ya(b.Q.j(),d,g),a=ge(b,g,!0,a.X.Ra());else if(f=K(c),".priority"===f)g=a.X.ia(b.Q.j(),d),a=ge(b,g,k.ga,k.Yb);else{c=N(c);var m=k.j().T(f);if(!c.e()){var l=e.uf(f);d=null!=l?".priority"===me(c)&&l.S(c.parent()).e()?l:l.H(c,d):H}m.ea(d)?a=b:(g=a.X.H(k.j(),f,d,c,e,g),a=ge(b,g,k.ga,a.X.Ra()))}return a}
	function ce(a,b,c,d,e,f,g){var k=b;ne(d,function(d,l){var t=c.o(d);Wb(b.Q,K(t))&&(k=$d(a,k,t,l,e,f,g))});ne(d,function(d,l){var t=c.o(d);Wb(b.Q,K(t))||(k=$d(a,k,t,l,e,f,g))});return k}function oe(a,b){ne(b,function(b,d){a=a.H(b,d)});return a}
	function de(a,b,c,d,e,f,g,k){if(b.w().j().e()&&!lc(b.w()))return b;var m=b;c=c.e()?d:pe(qe,c,d);var l=b.w().j();c.children.ka(function(c,d){if(l.Fa(c)){var I=b.w().j().T(c),I=oe(I,d);m=ae(a,m,new P(c),I,e,f,g,k)}});c.children.ka(function(c,d){var I=!Wb(b.w(),c)&&null==d.value;l.Fa(c)||I||(I=b.w().j().T(c),I=oe(I,d),m=ae(a,m,new P(c),I,e,f,g,k))});return m}
	function he(a,b,c,d,e,f,g){if(null!=e.xc(c))return b;var k=mc(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.ga||nc(m,c))return ae(a,b,c,m.j().S(c),e,f,k,g);if(c.e()){var l=qe;m.j().R(re,function(a,b){l=l.set(new P(a),b)});return de(a,b,c,l,e,f,k,g)}return b}l=qe;ne(d,function(a){var b=c.o(a);nc(m,b)&&(l=l.set(a,m.j().S(b)))});return de(a,b,c,l,e,f,k,g)};function se(){}var te={};function Vd(a){return u(a.compare,a)}se.prototype.Dd=function(a,b){return 0!==this.compare(new L("[MIN_NAME]",a),new L("[MIN_NAME]",b))};se.prototype.Wc=function(){return ue};function ve(a){O(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.gc=a}ka(ve,se);h=ve.prototype;h.Lc=function(a){return!a.S(this.gc).e()};h.compare=function(a,b){var c=a.U.S(this.gc),d=b.U.S(this.gc),c=c.Gc(d);return 0===c?yc(a.name,b.name):c};
	h.Sc=function(a,b){var c=Q(a),c=H.H(this.gc,c);return new L(b,c)};h.Tc=function(){var a=H.H(this.gc,we);return new L("[MAX_NAME]",a)};h.toString=function(){return this.gc.slice().join("/")};function xe(){}ka(xe,se);h=xe.prototype;h.compare=function(a,b){var c=a.U.C(),d=b.U.C(),c=c.Gc(d);return 0===c?yc(a.name,b.name):c};h.Lc=function(a){return!a.C().e()};h.Dd=function(a,b){return!a.C().ea(b.C())};h.Wc=function(){return ue};h.Tc=function(){return new L("[MAX_NAME]",new Yc("[PRIORITY-POST]",we))};
	h.Sc=function(a,b){var c=Q(a);return new L(b,new Yc("[PRIORITY-POST]",c))};h.toString=function(){return".priority"};var R=new xe;function ye(){}ka(ye,se);h=ye.prototype;h.compare=function(a,b){return yc(a.name,b.name)};h.Lc=function(){throw jd("KeyIndex.isDefinedOn not expected to be called.");};h.Dd=function(){return!1};h.Wc=function(){return ue};h.Tc=function(){return new L("[MAX_NAME]",H)};h.Sc=function(a){O(q(a),"KeyIndex indexValue must always be a string.");return new L(a,H)};h.toString=function(){return".key"};
	var re=new ye;function ze(){}ka(ze,se);h=ze.prototype;h.compare=function(a,b){var c=a.U.Gc(b.U);return 0===c?yc(a.name,b.name):c};h.Lc=function(){return!0};h.Dd=function(a,b){return!a.ea(b)};h.Wc=function(){return ue};h.Tc=function(){return Ae};h.Sc=function(a,b){var c=Q(a);return new L(b,c)};h.toString=function(){return".value"};var Be=new ze;function Ce(){this.Xb=this.ra=this.Pb=this.oa=this.la=!1;this.ma=0;this.Rb="";this.ic=null;this.Bb="";this.fc=null;this.zb="";this.g=R}var De=new Ce;function Td(a){return""===a.Rb?a.oa:"l"===a.Rb}function Od(a){O(a.oa,"Only valid if start has been set");return a.ic}function Nd(a){O(a.oa,"Only valid if start has been set");return a.Pb?a.Bb:"[MIN_NAME]"}function Rd(a){O(a.ra,"Only valid if end has been set");return a.fc}
	function Pd(a){O(a.ra,"Only valid if end has been set");return a.Xb?a.zb:"[MAX_NAME]"}function Ee(a){var b=new Ce;b.la=a.la;b.ma=a.ma;b.oa=a.oa;b.ic=a.ic;b.Pb=a.Pb;b.Bb=a.Bb;b.ra=a.ra;b.fc=a.fc;b.Xb=a.Xb;b.zb=a.zb;b.g=a.g;return b}h=Ce.prototype;h.Le=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="";return b};h.Me=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="l";return b};h.Ne=function(a){var b=Ee(this);b.la=!0;b.ma=a;b.Rb="r";return b};
	h.ce=function(a,b){var c=Ee(this);c.oa=!0;p(a)||(a=null);c.ic=a;null!=b?(c.Pb=!0,c.Bb=b):(c.Pb=!1,c.Bb="");return c};h.vd=function(a,b){var c=Ee(this);c.ra=!0;p(a)||(a=null);c.fc=a;p(b)?(c.Xb=!0,c.zb=b):(c.oh=!1,c.zb="");return c};function Fe(a,b){var c=Ee(a);c.g=b;return c}function Ge(a){var b={};a.oa&&(b.sp=a.ic,a.Pb&&(b.sn=a.Bb));a.ra&&(b.ep=a.fc,a.Xb&&(b.en=a.zb));if(a.la){b.l=a.ma;var c=a.Rb;""===c&&(c=Td(a)?"l":"r");b.vf=c}a.g!==R&&(b.i=a.g.toString());return b}
	function He(a){return!(a.oa||a.ra||a.la)}function Ie(a){return He(a)&&a.g==R}function Je(a){var b={};if(Ie(a))return b;var c;a.g===R?c="$priority":a.g===Be?c="$value":a.g===re?c="$key":(O(a.g instanceof ve,"Unrecognized index type!"),c=a.g.toString());b.orderBy=G(c);a.oa&&(b.startAt=G(a.ic),a.Pb&&(b.startAt+=","+G(a.Bb)));a.ra&&(b.endAt=G(a.fc),a.Xb&&(b.endAt+=","+G(a.zb)));a.la&&(Td(a)?b.limitToFirst=a.ma:b.limitToLast=a.ma);return b}h.toString=function(){return G(Ge(this))};function Ke(a,b){this.Ed=a;this.hc=b}Ke.prototype.get=function(a){var b=z(this.Ed,a);if(!b)throw Error("No index defined for "+a);return b===te?null:b};function Le(a,b,c){var d=ma(a.Ed,function(d,f){var g=z(a.hc,f);O(g,"Missing index implementation for "+f);if(d===te){if(g.Lc(b.U)){for(var k=[],m=c.ac(wc),l=Ic(m);l;)l.name!=b.name&&k.push(l),l=Ic(m);k.push(b);return Me(k,Vd(g))}return te}g=c.get(b.name);k=d;g&&(k=k.remove(new L(b.name,g)));return k.Sa(b,b.U)});return new Ke(d,a.hc)}
	function Ne(a,b,c){var d=ma(a.Ed,function(a){if(a===te)return a;var d=c.get(b.name);return d?a.remove(new L(b.name,d)):a});return new Ke(d,a.hc)}var Oe=new Ke({".priority":te},{".priority":R});function Yc(a,b){this.B=a;O(p(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.ca=b||H;Pe(this.ca);this.Gb=null}var Qe=["object","boolean","number","string"];h=Yc.prototype;h.L=function(){return!0};h.C=function(){return this.ca};h.ia=function(a){return new Yc(this.B,a)};h.T=function(a){return".priority"===a?this.ca:H};h.S=function(a){return a.e()?this:".priority"===K(a)?this.ca:H};h.Fa=function(){return!1};h.wf=function(){return null};
	h.W=function(a,b){return".priority"===a?this.ia(b):b.e()&&".priority"!==a?this:H.W(a,b).ia(this.ca)};h.H=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;O(".priority"!==c||1===le(a),".priority must be the last token in a path");return this.W(c,H.H(N(a),b))};h.e=function(){return!1};h.Hb=function(){return 0};h.R=function(){return!1};h.J=function(a){return a&&!this.C().e()?{".value":this.Ea(),".priority":this.C().J()}:this.Ea()};
	h.hash=function(){if(null===this.Gb){var a="";this.ca.e()||(a+="priority:"+Re(this.ca.J())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+Ad(this.B):a+this.B;this.Gb=ld(a)}return this.Gb};h.Ea=function(){return this.B};h.Gc=function(a){if(a===H)return 1;if(a instanceof fe)return-1;O(a.L(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=La(Qe,b),e=La(Qe,c);O(0<=d,"Unknown leaf type: "+b);O(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	h.pb=function(){return this};h.Mc=function(){return!0};h.ea=function(a){return a===this?!0:a.L()?this.B===a.B&&this.ca.ea(a.ca):!1};h.toString=function(){return G(this.J(!0))};function fe(a,b,c){this.m=a;(this.ca=b)&&Pe(this.ca);a.e()&&O(!this.ca||this.ca.e(),"An empty node cannot have a priority");this.Ab=c;this.Gb=null}h=fe.prototype;h.L=function(){return!1};h.C=function(){return this.ca||H};h.ia=function(a){return this.m.e()?this:new fe(this.m,a,this.Ab)};h.T=function(a){if(".priority"===a)return this.C();a=this.m.get(a);return null===a?H:a};h.S=function(a){var b=K(a);return null===b?this:this.T(b).S(N(a))};h.Fa=function(a){return null!==this.m.get(a)};
	h.W=function(a,b){O(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.ia(b);var c=new L(a,b),d,e;b.e()?(d=this.m.remove(a),c=Ne(this.Ab,c,this.m)):(d=this.m.Sa(a,b),c=Le(this.Ab,c,this.m));e=d.e()?H:this.ca;return new fe(d,e,c)};h.H=function(a,b){var c=K(a);if(null===c)return b;O(".priority"!==K(a)||1===le(a),".priority must be the last token in a path");var d=this.T(c).H(N(a),b);return this.W(c,d)};h.e=function(){return this.m.e()};h.Hb=function(){return this.m.count()};
	var Se=/^(0|[1-9]\d*)$/;h=fe.prototype;h.J=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.R(R,function(f,g){b[f]=g.J(a);c++;e&&Se.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.C().e()&&(b[".priority"]=this.C().J());return b};h.hash=function(){if(null===this.Gb){var a="";this.C().e()||(a+="priority:"+Re(this.C().J())+":");this.R(R,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Gb=""===a?"":ld(a)}return this.Gb};
	h.wf=function(a,b,c){return(c=Te(this,c))?(a=Gc(c,new L(a,b)))?a.name:null:Gc(this.m,a)};function Wd(a,b){var c;c=(c=Te(a,b))?(c=c.Vc())&&c.name:a.m.Vc();return c?new L(c,a.m.get(c)):null}function Xd(a,b){var c;c=(c=Te(a,b))?(c=c.jc())&&c.name:a.m.jc();return c?new L(c,a.m.get(c)):null}h.R=function(a,b){var c=Te(this,a);return c?c.ka(function(a){return b(a.name,a.U)}):this.m.ka(b)};h.ac=function(a){return this.bc(a.Wc(),a)};
	h.bc=function(a,b){var c=Te(this,b);if(c)return c.bc(a,function(a){return a});for(var c=this.m.bc(a.name,wc),d=Jc(c);null!=d&&0>b.compare(d,a);)Ic(c),d=Jc(c);return c};h.xf=function(a){return this.dc(a.Tc(),a)};h.dc=function(a,b){var c=Te(this,b);if(c)return c.dc(a,function(a){return a});for(var c=this.m.dc(a.name,wc),d=Jc(c);null!=d&&0<b.compare(d,a);)Ic(c),d=Jc(c);return c};h.Gc=function(a){return this.e()?a.e()?0:-1:a.L()||a.e()?1:a===we?-1:0};
	h.pb=function(a){if(a===re||sa(this.Ab.hc,a.toString()))return this;var b=this.Ab,c=this.m;O(a!==re,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.ac(wc),f=Ic(c);f;)e=e||a.Lc(f.U),d.push(f),f=Ic(c);d=e?Me(d,Vd(a)):te;e=a.toString();c=wa(b.hc);c[e]=a;a=wa(b.Ed);a[e]=d;return new fe(this.m,this.ca,new Ke(a,c))};h.Mc=function(a){return a===re||sa(this.Ab.hc,a.toString())};
	h.ea=function(a){if(a===this)return!0;if(a.L())return!1;if(this.C().ea(a.C())&&this.m.count()===a.m.count()){var b=this.ac(R);a=a.ac(R);for(var c=Ic(b),d=Ic(a);c&&d;){if(c.name!==d.name||!c.U.ea(d.U))return!1;c=Ic(b);d=Ic(a)}return null===c&&null===d}return!1};function Te(a,b){return b===re?null:a.Ab.get(b.toString())}h.toString=function(){return G(this.J(!0))};function Q(a,b){if(null===a)return H;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);O(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Yc(a,Q(c));if(a instanceof Array){var d=H,e=a;v(e,function(a,b){if(y(e,b)&&"."!==b.substring(0,1)){var c=Q(a);if(c.L()||!c.e())d=
	d.W(b,c)}});return d.ia(Q(c))}var f=[],g=!1,k=a;Fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=Q(k[a]);b.e()||(g=g||!b.C().e(),f.push(new L(a,b)))}});if(0==f.length)return H;var m=Me(f,xc,function(a){return a.name},zc);if(g){var l=Me(f,Vd(R));return new fe(m,Q(c),new Ke({".priority":l},{".priority":R}))}return new fe(m,Q(c),Oe)}var Ue=Math.log(2);
	function Ve(a){this.count=parseInt(Math.log(a+1)/Ue,10);this.nf=this.count-1;this.ng=a+1&parseInt(Array(this.count+1).join("1"),2)}function We(a){var b=!(a.ng&1<<a.nf);a.nf--;return b}
	function Me(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],t=c?c(l):l;return new Kc(t,l.U,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),A=e(l+1,d),l=a[l],t=c?c(l):l;return new Kc(t,l.U,!1,f,A)}a.sort(b);var f=function(b){function d(b,g){var k=t-b,A=t;t-=b;var A=e(k+1,A),k=a[k],I=c?c(k):k,A=new Kc(I,k.U,g,null,A);f?f.left=A:l=A;f=A}for(var f=null,l=null,t=a.length,A=0;A<b.count;++A){var I=We(b),Qd=Math.pow(2,b.count-(A+1));I?d(Qd,!1):(d(Qd,!1),d(Qd,!0))}return l}(new Ve(a.length));
	return null!==f?new Ec(d||b,f):new Ec(d||b)}function Re(a){return"number"===typeof a?"number:"+Ad(a):"string:"+a}function Pe(a){if(a.L()){var b=a.J();O("string"===typeof b||"number"===typeof b||"object"===typeof b&&y(b,".sv"),"Priority must be a string or number.")}else O(a===we||a.e(),"priority of unexpected type.");O(a===we||a.C().e(),"Priority nodes can't have a priority of their own.")}var H=new fe(new Ec(zc),null,Oe);function Xe(){fe.call(this,new Ec(zc),H,Oe)}ka(Xe,fe);h=Xe.prototype;
	h.Gc=function(a){return a===this?0:1};h.ea=function(a){return a===this};h.C=function(){return this};h.T=function(){return H};h.e=function(){return!1};var we=new Xe,ue=new L("[MIN_NAME]",H),Ae=new L("[MAX_NAME]",we);function je(a,b){this.Q=a;this.ae=b}function ge(a,b,c,d){return new je(new Xb(b,c,d),a.ae)}function ke(a){return a.Q.ga?a.Q.j():null}je.prototype.w=function(){return this.ae};function Yb(a){return a.ae.ga?a.ae.j():null};function Ye(a,b){this.Y=a;var c=a.n,d=new Ld(c.g),c=He(c)?new Ld(c.g):c.la?new Sd(c):new Md(c);this.Nf=new Zd(c);var e=b.w(),f=b.Q,g=d.ya(H,e.j(),null),k=c.ya(H,f.j(),null);this.Oa=new je(new Xb(k,f.ga,c.Ra()),new Xb(g,e.ga,d.Ra()));this.$a=[];this.ug=new Fd(a)}function Ze(a){return a.Y}h=Ye.prototype;h.w=function(){return this.Oa.w().j()};h.kb=function(a){var b=Yb(this.Oa);return b&&(He(this.Y.n)||!a.e()&&!b.T(K(a)).e())?b.S(a):null};h.e=function(){return 0===this.$a.length};h.Tb=function(a){this.$a.push(a)};
	h.nb=function(a,b){var c=[];if(b){O(null==a,"A cancel should cancel all event registrations.");var d=this.Y.path;Ma(this.$a,function(a){(a=a.lf(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.$a.length;++f){var g=this.$a[f];if(!g.matches(a))e.push(g);else if(a.yf()){e=e.concat(this.$a.slice(f+1));break}}this.$a=e}else this.$a=[];return c};
	h.gb=function(a,b,c){a.type===be&&null!==a.source.Lb&&(O(Yb(this.Oa),"We should always have a full cache before handling merges"),O(ke(this.Oa),"Missing event cache, even though we have a server cache"));var d=this.Oa;a=this.Nf.gb(d,a,b,c);b=this.Nf;c=a.me;O(c.Q.j().Mc(b.X.g),"Event snap not indexed");O(c.w().j().Mc(b.X.g),"Server snap not indexed");O(lc(a.me.w())||!lc(d.w()),"Once a server snap is complete, it should never go back");this.Oa=a.me;return $e(this,a.og,a.me.Q.j(),null)};
	function af(a,b){var c=a.Oa.Q,d=[];c.j().L()||c.j().R(R,function(a,b){d.push(new J("child_added",b,a))});c.ga&&d.push(hc(c.j()));return $e(a,d,c.j(),b)}function $e(a,b,c,d){return Gd(a.ug,b,c,d?[d]:a.$a)};function bf(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}bf.prototype.$c=function(a){if(this.path.e())return a=this.children.subtree(new P(a)),a.e()?null:a.value?new Ac(this.source,M,a.value):new bf(this.source,M,a);O(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new bf(this.source,N(this.path),this.children)};bf.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function cf(a,b){this.f=pd("p:rest:");this.G=a;this.Kb=b;this.Ca=null;this.ba={}}function df(a,b){if(p(b))return"tag$"+b;O(Ie(a.n),"should have a tag if it's not a default query.");return a.path.toString()}h=cf.prototype;
	h.Cf=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.wa());var f=df(a,c),g={};this.ba[f]=g;a=Je(a.n);var k=this;ef(this,e+".json",a,function(a,b){var t=b;404===a&&(a=t=null);null===a&&k.Kb(e,t,!1,c);z(k.ba,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.$f=function(a,b){var c=df(a,b);delete this.ba[c]};h.O=function(a,b){this.Ca=a;var c=Cd(a),d=c.data,c=c.Ec&&c.Ec.exp;b&&b("ok",{auth:d,expires:c})};h.je=function(a){this.Ca=null;a("ok",null)};
	h.Qe=function(){};h.Gf=function(){};h.Md=function(){};h.put=function(){};h.Df=function(){};h.Ye=function(){};
	function ef(a,b,c,d){c=c||{};c.format="export";a.Ca&&(c.auth=a.Ca);var e=(a.G.ob?"https://":"http://")+a.G.host+b+"?"+Ib(c);a.f("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=Rb(f.responseText)}catch(c){S("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==
	f.status&&S("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function ff(a){O(da(a)&&0<a.length,"Requires a non-empty array");this.fg=a;this.Rc={}}ff.prototype.ie=function(a,b){var c;c=this.Rc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Dc.apply(c[d].Qa,Array.prototype.slice.call(arguments,1))};ff.prototype.Ib=function(a,b,c){gf(this,a);this.Rc[a]=this.Rc[a]||[];this.Rc[a].push({Dc:b,Qa:c});(a=this.Ee(a))&&b.apply(c,a)};
	ff.prototype.mc=function(a,b,c){gf(this,a);a=this.Rc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Dc===b&&(!c||c===a[d].Qa)){a.splice(d,1);break}};function gf(a,b){O(Ra(a.fg,function(a){return a===b}),"Unknown event: "+b)};var hf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);O(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);O(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function jf(){ff.call(this,["online"]);this.oc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.oc||(a.oc=!0,a.ie("online",!0))},!1);window.addEventListener("offline",function(){a.oc&&(a.oc=!1,a.ie("online",!1))},!1)}}ka(jf,ff);jf.prototype.Ee=function(a){O("online"===a,"Unknown event type: "+a);return[this.oc]};ba(jf);function kf(){ff.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Sb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Sb&&(c.Sb=b,c.ie("visible",b))},!1)}}ka(kf,ff);kf.prototype.Ee=function(a){O("visible"===a,"Unknown event type: "+a);return[this.Sb]};ba(kf);function P(a,b){if(1==arguments.length){this.u=a.split("/");for(var c=0,d=0;d<this.u.length;d++)0<this.u[d].length&&(this.u[c]=this.u[d],c++);this.u.length=c;this.aa=0}else this.u=a,this.aa=b}function lf(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return lf(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function mf(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=yc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.aa>=a.u.length?null:a.u[a.aa]}function le(a){return a.u.length-a.aa}function N(a){var b=a.aa;b<a.u.length&&b++;return new P(a.u,b)}function me(a){return a.aa<a.u.length?a.u[a.u.length-1]:null}h=P.prototype;
	h.toString=function(){for(var a="",b=this.aa;b<this.u.length;b++)""!==this.u[b]&&(a+="/"+this.u[b]);return a||"/"};h.slice=function(a){return this.u.slice(this.aa+(a||0))};h.parent=function(){if(this.aa>=this.u.length)return null;for(var a=[],b=this.aa;b<this.u.length-1;b++)a.push(this.u[b]);return new P(a,0)};
	h.o=function(a){for(var b=[],c=this.aa;c<this.u.length;c++)b.push(this.u[c]);if(a instanceof P)for(c=a.aa;c<a.u.length;c++)b.push(a.u[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new P(b,0)};h.e=function(){return this.aa>=this.u.length};h.ea=function(a){if(le(this)!==le(a))return!1;for(var b=this.aa,c=a.aa;b<=this.u.length;b++,c++)if(this.u[b]!==a.u[c])return!1;return!0};
	h.contains=function(a){var b=this.aa,c=a.aa;if(le(this)>le(a))return!1;for(;b<this.u.length;){if(this.u[b]!==a.u[c])return!1;++b;++c}return!0};var M=new P("");function nf(a,b){this.Ua=a.slice();this.Ka=Math.max(1,this.Ua.length);this.pf=b;for(var c=0;c<this.Ua.length;c++)this.Ka+=Pb(this.Ua[c]);of(this)}nf.prototype.push=function(a){0<this.Ua.length&&(this.Ka+=1);this.Ua.push(a);this.Ka+=Pb(a);of(this)};nf.prototype.pop=function(){var a=this.Ua.pop();this.Ka-=Pb(a);0<this.Ua.length&&--this.Ka};
	function of(a){if(768<a.Ka)throw Error(a.pf+"has a key path longer than 768 bytes ("+a.Ka+").");if(32<a.Ua.length)throw Error(a.pf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+pf(a));}function pf(a){return 0==a.Ua.length?"":"in property '"+a.Ua.join(".")+"'"};function qf(a,b){this.value=a;this.children=b||rf}var rf=new Ec(function(a,b){return a===b?0:a<b?-1:1});function sf(a){var b=qe;v(a,function(a,d){b=b.set(new P(d),a)});return b}h=qf.prototype;h.e=function(){return null===this.value&&this.children.e()};function tf(a,b,c){if(null!=a.value&&c(a.value))return{path:M,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=tf(a,N(b),c),null!=b?{path:(new P(d)).o(b.path),value:b.value}:null):null}
	function uf(a,b){return tf(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):qe};h.set=function(a,b){if(a.e())return new qf(b,this.children);var c=K(a),d=(this.children.get(c)||qe).set(N(a),b),c=this.children.Sa(c,d);return new qf(this.value,c)};
	h.remove=function(a){if(a.e())return this.children.e()?qe:new qf(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Sa(b,a),null===this.value&&b.e()?qe:new qf(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
	function pe(a,b,c){if(b.e())return c;var d=K(b);b=pe(a.children.get(d)||qe,N(b),c);d=b.e()?a.children.remove(d):a.children.Sa(d,b);return new qf(a.value,d)}function vf(a,b){return wf(a,M,b)}function wf(a,b,c){var d={};a.children.ka(function(a,f){d[a]=wf(f,b.o(a),c)});return c(b,a.value,d)}function xf(a,b,c){return yf(a,b,M,c)}function yf(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?yf(a,N(b),c.o(e),d):null}
	function zf(a,b,c){Af(a,b,M,c)}function Af(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Af(a,N(b),c.o(e),d):qe}function ne(a,b){Bf(a,M,b)}function Bf(a,b,c){a.children.ka(function(a,e){Bf(e,b.o(a),c)});a.value&&c(b,a.value)}function Cf(a,b){a.children.ka(function(a,d){d.value&&b(a,d.value)})}var qe=new qf(null);qf.prototype.toString=function(){var a={};ne(this,function(b,c){a[b.toString()]=c.toString()});return G(a)};function Df(a,b,c){this.type=ee;this.source=Ef;this.path=a;this.Ub=b;this.Yd=c}Df.prototype.$c=function(a){if(this.path.e()){if(null!=this.Ub.value)return O(this.Ub.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ub.subtree(new P(a));return new Df(M,a,this.Yd)}O(K(this.path)===a,"operationForChild called for unrelated child.");return new Df(N(this.path),this.Ub,this.Yd)};
	Df.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Yd+" affectedTree="+this.Ub+")"};var Bc=0,be=1,ee=2,Dc=3;function Ff(a,b,c,d){this.Ae=a;this.tf=b;this.Lb=c;this.ef=d;O(!d||b,"Tagged queries must be from server.")}var Ef=new Ff(!0,!1,null,!1),Gf=new Ff(!1,!0,null,!1);Ff.prototype.toString=function(){return this.Ae?"user":this.ef?"server(queryID="+this.Lb+")":"server"};function Hf(a){this.Z=a}var If=new Hf(new qf(null));function Jf(a,b,c){if(b.e())return new Hf(new qf(c));var d=uf(a.Z,b);if(null!=d){var e=d.path,d=d.value;b=lf(e,b);d=d.H(b,c);return new Hf(a.Z.set(e,d))}a=pe(a.Z,b,new qf(c));return new Hf(a)}function Kf(a,b,c){var d=a;Fb(c,function(a,c){d=Jf(d,b.o(a),c)});return d}Hf.prototype.Ud=function(a){if(a.e())return If;a=pe(this.Z,a,qe);return new Hf(a)};function Lf(a,b){var c=uf(a.Z,b);return null!=c?a.Z.get(c.path).S(lf(c.path,b)):null}
	function Mf(a){var b=[],c=a.Z.value;null!=c?c.L()||c.R(R,function(a,c){b.push(new L(a,c))}):a.Z.children.ka(function(a,c){null!=c.value&&b.push(new L(a,c.value))});return b}function Nf(a,b){if(b.e())return a;var c=Lf(a,b);return null!=c?new Hf(new qf(c)):new Hf(a.Z.subtree(b))}Hf.prototype.e=function(){return this.Z.e()};Hf.prototype.apply=function(a){return Of(M,this.Z,a)};
	function Of(a,b,c){if(null!=b.value)return c.H(a,b.value);var d=null;b.children.ka(function(b,f){".priority"===b?(O(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Of(a.o(b),f,c)});c.S(a).e()||null===d||(c=c.H(a.o(".priority"),d));return c};function Pf(){this.V=If;this.pa=[];this.Pc=-1}function Qf(a,b){for(var c=0;c<a.pa.length;c++){var d=a.pa[c];if(d.md===b)return d}return null}h=Pf.prototype;
	h.Ud=function(a){var b=Sa(this.pa,function(b){return b.md===a});O(0<=b,"removeWrite called with nonexistent writeId.");var c=this.pa[b];this.pa.splice(b,1);for(var d=c.visible,e=!1,f=this.pa.length-1;d&&0<=f;){var g=this.pa[f];g.visible&&(f>=b&&Rf(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.V=Sf(this.pa,Tf,M),this.Pc=0<this.pa.length?this.pa[this.pa.length-1].md:-1;else if(c.Ja)this.V=this.V.Ud(c.path);else{var k=this;v(c.children,function(a,b){k.V=k.V.Ud(c.path.o(b))})}return!0}return!1};
	h.Aa=function(a,b,c,d){if(c||d){var e=Nf(this.V,a);return!d&&e.e()?b:d||null!=b||null!=Lf(e,M)?(e=Sf(this.pa,function(b){return(b.visible||d)&&(!c||!(0<=La(c,b.md)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||H,e.apply(b)):null}e=Lf(this.V,a);if(null!=e)return e;e=Nf(this.V,a);return e.e()?b:null!=b||null!=Lf(e,M)?(b=b||H,e.apply(b)):null};
	h.Cc=function(a,b){var c=H,d=Lf(this.V,a);if(d)d.L()||d.R(R,function(a,b){c=c.W(a,b)});else if(b){var e=Nf(this.V,a);b.R(R,function(a,b){var d=Nf(e,new P(a)).apply(b);c=c.W(a,d)});Ma(Mf(e),function(a){c=c.W(a.name,a.U)})}else e=Nf(this.V,a),Ma(Mf(e),function(a){c=c.W(a.name,a.U)});return c};h.nd=function(a,b,c,d){O(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.o(b);if(null!=Lf(this.V,a))return null;a=Nf(this.V,a);return a.e()?d.S(b):a.apply(d.S(b))};
	h.Bc=function(a,b,c){a=a.o(b);var d=Lf(this.V,a);return null!=d?d:Wb(c,b)?Nf(this.V,a).apply(c.j().T(b)):null};h.xc=function(a){return Lf(this.V,a)};h.qe=function(a,b,c,d,e,f){var g;a=Nf(this.V,a);g=Lf(a,M);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.pb(f);if(g.e()||g.L())return[];b=[];a=Vd(f);e=e?g.dc(c,f):g.bc(c,f);for(f=Ic(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=Ic(e);return b};
	function Rf(a,b){return a.Ja?a.path.contains(b):!!ta(a.children,function(c,d){return a.path.o(d).contains(b)})}function Tf(a){return a.visible}
	function Sf(a,b,c){for(var d=If,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ja)c.contains(g)?(g=lf(c,g),d=Jf(d,g,f.Ja)):g.contains(c)&&(g=lf(g,c),d=Jf(d,M,f.Ja.S(g)));else if(f.children)if(c.contains(g))g=lf(c,g),d=Kf(d,g,f.children);else{if(g.contains(c))if(g=lf(g,c),g.e())d=Kf(d,M,f.children);else if(f=z(f.children,K(g)))f=f.S(N(g)),d=Jf(d,M,f)}else throw jd("WriteRecord should have .snap or .children");}}return d}function Uf(a,b){this.Qb=a;this.Z=b}h=Uf.prototype;
	h.Aa=function(a,b,c){return this.Z.Aa(this.Qb,a,b,c)};h.Cc=function(a){return this.Z.Cc(this.Qb,a)};h.nd=function(a,b,c){return this.Z.nd(this.Qb,a,b,c)};h.xc=function(a){return this.Z.xc(this.Qb.o(a))};h.qe=function(a,b,c,d,e){return this.Z.qe(this.Qb,a,b,c,d,e)};h.Bc=function(a,b){return this.Z.Bc(this.Qb,a,b)};h.o=function(a){return new Uf(this.Qb.o(a),this.Z)};function Vf(){this.children={};this.pd=0;this.value=null}function Wf(a,b,c){this.Jd=a?a:"";this.Ha=b?b:null;this.A=c?c:new Vf}function Xf(a,b){for(var c=b instanceof P?b:new P(b),d=a,e;null!==(e=K(c));)d=new Wf(e,d,z(d.A.children,e)||new Vf),c=N(c);return d}h=Wf.prototype;h.Ea=function(){return this.A.value};function Yf(a,b){O("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Zf(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.pd=0;Zf(this)};
	h.zd=function(){return 0<this.A.pd};h.e=function(){return null===this.Ea()&&!this.zd()};h.R=function(a){var b=this;v(this.A.children,function(c,d){a(new Wf(d,b,c))})};function $f(a,b,c,d){c&&!d&&b(a);a.R(function(a){$f(a,b,!0,d)});c&&d&&b(a)}function ag(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new P(null===this.Ha?this.Jd:this.Ha.path()+"/"+this.Jd)};h.name=function(){return this.Jd};h.parent=function(){return this.Ha};
	function Zf(a){if(null!==a.Ha){var b=a.Ha,c=a.Jd,d=a.e(),e=y(b.A.children,c);d&&e?(delete b.A.children[c],b.A.pd--,Zf(b)):d||e||(b.A.children[c]=a.A,b.A.pd++,Zf(b))}};var bg=/[\[\].#$\/\u0000-\u001F\u007F]/,cg=/[\[\].#$\u0000-\u001F\u007F]/,dg=/^[a-zA-Z][a-zA-Z._\-+]+$/;function eg(a){return q(a)&&0!==a.length&&!bg.test(a)}function fg(a){return null===a||q(a)||fa(a)&&!td(a)||ga(a)&&y(a,".sv")}function gg(a,b,c,d){d&&!p(b)||hg(E(a,1,d),b,c)}
	function hg(a,b,c){c instanceof P&&(c=new nf(c,a));if(!p(b))throw Error(a+"contains undefined "+pf(c));if(r(b))throw Error(a+"contains a function "+pf(c)+" with contents: "+b.toString());if(td(b))throw Error(a+"contains "+b.toString()+" "+pf(c));if(q(b)&&b.length>10485760/3&&10485760<Pb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+pf(c)+" ('"+b.substring(0,50)+"...')");if(ga(b)){var d=!1,e=!1;Fb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!eg(b)))throw Error(a+" contains an invalid key ("+b+") "+pf(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);hg(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+pf(c)+" in addition to actual children.");}}
	function ig(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!eg(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(mf);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function jg(a,b,c){var d=E(a,1,!1);if(!ga(b)||da(b))throw Error(d+" must be an object containing the children to replace.");var e=[];Fb(b,function(a,b){var k=new P(a);hg(d,b,c.o(k));if(".priority"===me(k)&&!fg(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});ig(d,e)}
	function kg(a,b,c){if(td(c))throw Error(E(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!fg(c))throw Error(E(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function lg(a,b,c){if(!c||p(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(E(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function mg(a,b){if(p(b)&&!eg(b))throw Error(E(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function ng(a,b){if(!q(b)||0===b.length||cg.test(b))throw Error(E(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function og(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}function pg(a,b){if(!q(b))throw Error(E(a,1,!1)+"must be a valid credential (a string).");}function qg(a,b,c){if(!q(c))throw Error(E(a,b,!1)+"must be a valid string.");}
	function rg(a,b){qg(a,1,b);if(!dg.test(b))throw Error(E(a,1,!1)+"'"+b+"' is not a valid authentication provider.");}function sg(a,b,c,d){if(!d||p(c))if(!ga(c)||null===c)throw Error(E(a,b,d)+"must be a valid object.");}function tg(a,b,c){if(!ga(b)||!y(b,c))throw Error(E(a,1,!1)+'must contain the key "'+c+'"');if(!q(z(b,c)))throw Error(E(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function ug(){this.set={}}h=ug.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return y(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return va(this.set)};h.count=function(){return oa(this.set)};function vg(a,b){v(a.set,function(a,d){b(d,a)})}h.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Vc(){this.m=this.B=null}Vc.prototype.find=function(a){if(null!=this.B)return this.B.S(a);if(a.e()||null==this.m)return null;var b=K(a);a=N(a);return this.m.contains(b)?this.m.get(b).find(a):null};Vc.prototype.rc=function(a,b){if(a.e())this.B=b,this.m=null;else if(null!==this.B)this.B=this.B.H(a,b);else{null==this.m&&(this.m=new ug);var c=K(a);this.m.contains(c)||this.m.add(c,new Vc);c=this.m.get(c);a=N(a);c.rc(a,b)}};
	function wg(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.L())return!1;var c=a.B;a.B=null;c.R(R,function(b,c){a.rc(new P(b),c)});return wg(a,b)}return null!==a.m?(c=K(b),b=N(b),a.m.contains(c)&&wg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function Wc(a,b,c){null!==a.B?c(b,a.B):a.R(function(a,e){var f=new P(b.toString()+"/"+a);Wc(e,f,c)})}Vc.prototype.R=function(a){null!==this.m&&vg(this.m,function(b,c){a(b,c)})};var xg="auth.firebase.com";function yg(a,b,c){this.qd=a||{};this.he=b||{};this.fb=c||{};this.qd.remember||(this.qd.remember="default")}var zg=["remember","redirectTo"];function Ag(a){var b={},c={};Fb(a||{},function(a,e){0<=La(zg,a)?b[a]=e:c[a]=e});return new yg(b,{},c)};function Bg(a,b){this.Ue=["session",a.Rd,a.lc].join(":");this.ee=b}Bg.prototype.set=function(a,b){if(!b)if(this.ee.length)b=this.ee[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Ue,a)};Bg.prototype.get=function(){var a=Oa(this.ee,u(this.Bg,this)),a=Na(a,function(a){return null!==a});Va(a,function(a,c){return Dd(c.token)-Dd(a.token)});return 0<a.length?a.shift():null};Bg.prototype.Bg=function(a){try{var b=a.get(this.Ue);if(b&&b.token)return b}catch(c){}return null};
	Bg.prototype.clear=function(){var a=this;Ma(this.ee,function(b){b.remove(a.Ue)})};function Cg(){return"undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:""}function Dg(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Cg())}function Eg(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
	function Fg(a){var b=Cg();if(""===b)return!1;if("Microsoft Internet Explorer"===navigator.appName){if((b=b.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a}else if(-1<b.indexOf("Trident")&&(b=b.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<b.length)return parseFloat(b[1])>=a;return!1};function Gg(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Hg(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Ig(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
	function Jg(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Kg(a){var b="";try{a=a.replace(/.*\?/,"");var c=Jb(a);c&&y(c,"__firebase_request_key")&&(b=z(c,"__firebase_request_key"))}catch(d){}return b}function Lg(){try{var a=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,""),a=a.replace(/\?$/,""),a=a.replace(/^#+$/,"");document.location.hash=a}catch(b){}}
	function Mg(){var a=sd(xg);return a.scheme+"://"+a.host+"/v2"}function Ng(a){return Mg()+"/"+a+"/auth/channel"};function Og(a){var b=this;this.hb=a;this.fe="*";Fg(8)?this.Uc=this.Cd=Gg():(this.Uc=window.opener,this.Cd=window);if(!b.Uc)throw"Unable to find relay frame";Hg(this.Cd,"message",u(this.nc,this));Hg(this.Cd,"message",u(this.Ff,this));try{Pg(this,{a:"ready"})}catch(c){Hg(this.Uc,"load",function(){Pg(b,{a:"ready"})})}Hg(window,"unload",u(this.Ng,this))}function Pg(a,b){b=G(b);Fg(8)?a.Uc.doPost(b,a.fe):a.Uc.postMessage(b,a.fe)}
	Og.prototype.nc=function(a){var b=this,c;try{c=Rb(a.data)}catch(d){}c&&"request"===c.a&&(Ig(window,"message",this.nc),this.fe=a.origin,this.hb&&setTimeout(function(){b.hb(b.fe,c.d,function(a,c){b.mg=!c;b.hb=void 0;Pg(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Og.prototype.Ng=function(){try{Ig(this.Cd,"message",this.Ff)}catch(a){}this.hb&&(Pg(this,{a:"error",d:"unknown closed window"}),this.hb=void 0);try{window.close()}catch(b){}};Og.prototype.Ff=function(a){if(this.mg&&"die"===a.data)try{window.close()}catch(b){}};function Qg(a){this.tc=Fa()+Fa()+Fa();this.Kf=a}Qg.prototype.open=function(a,b){cd.set("redirect_request_id",this.tc);cd.set("redirect_request_id",this.tc);b.requestId=this.tc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+Ib(b);window.location=a};Qg.isAvailable=function(){return!Eg()&&!Dg()};Qg.prototype.Fc=function(){return"redirect"};var Rg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function Sg(a){var b=Error(z(Rg,a),a);b.code=a;return b};function Tg(a){var b;(b=!a.window_features)||(b=Cg(),b=-1!==b.indexOf("Fennec/")||-1!==b.indexOf("Firefox/")&&-1!==b.indexOf("Android"));b&&(a.window_features=void 0);a.window_name||(a.window_name="_blank");this.options=a}
	Tg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);t&&(t=clearInterval(t));Ig(window,"message",e);Ig(window,"unload",d);if(l&&!a)try{l.close()}catch(b){k.postMessage("die",m)}l=k=void 0}function e(a){if(a.origin===m)try{var b=Rb(a.data);"ready"===b.a?k.postMessage(A,m):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=Fg(8),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
	var m=Jg(a);if(m!==Jg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+Ib(b);var l=window.open(a,this.options.window_name,this.options.window_features);k||(k=l);var t=setInterval(function(){l&&l.closed&&
	(d(!1),c&&(c(Sg("USER_CANCELLED")),c=null))},500),A=G({a:"request",d:b});Hg(window,"unload",d);Hg(window,"message",e)}};
	Tg.isAvailable=function(){var a;if(a="postMessage"in window&&!Eg())(a=Dg()||"undefined"!==typeof navigator&&(!!Cg().match(/Windows Phone/)||!!window.Windows&&/^ms-appx:/.test(location.href)))||(a=Cg(),a="undefined"!==typeof navigator&&"undefined"!==typeof window&&!!(a.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||a.match(/CriOS/)||a.match(/Twitter for iPhone/)||a.match(/FBAN\/FBIOS/)||window.navigator.standalone)),a=!a;return a&&!Cg().match(/PhantomJS/)};Tg.prototype.Fc=function(){return"popup"};function Ug(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
	Ug.prototype.open=function(a,b,c){function d(){c&&(c(Sg("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;Hg(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=Rb(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(Sg("SERVER_ERROR")):c(Sg("NETWORK_ERROR"));c=null;Ig(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+Ib(b),g=null;else{var k=this.options.headers.content_type;
	"application/json"===k&&(g=G(b));"application/x-www-form-urlencoded"===k&&(g=Ib(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};ya(a,this.options.headers);for(var m in a)e.setRequestHeader(m,a[m]);e.send(g)};Ug.isAvailable=function(){var a;if(a=!!window.XMLHttpRequest)a=Cg(),a=!(a.match(/MSIE/)||a.match(/Trident/))||Fg(10);return a};Ug.prototype.Fc=function(){return"json"};function Vg(a){this.tc=Fa()+Fa()+Fa();this.Kf=a}
	Vg.prototype.open=function(a,b,c){function d(){c&&(c(Sg("USER_CANCELLED")),c=null)}var e=this,f=sd(xg),g;b.requestId=this.tc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=Ib(b);(g=window.open(a,"_blank","location=no"))&&r(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var l=document.createElement("a");l.href=a.url;b=l.host===f.host&&"/blank/page.html"===l.pathname;break a}catch(t){}b=!1}b&&(a=Kg(a.url),g.removeEventListener("exit",
	d),g.close(),a=new yg(null,null,{requestId:e.tc,requestKey:a}),e.Kf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(Sg("TRANSPORT_UNAVAILABLE"))};Vg.isAvailable=function(){return Dg()};Vg.prototype.Fc=function(){return"redirect"};function Wg(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
	Wg.prototype.open=function(a,b,c){function d(){c&&(c(Sg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;va(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Ig(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+Ib(b);
	Hg(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Xg(f,a,c)};
	function Xg(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(Sg("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(Sg("NETWORK_ERROR"))}},0)}Wg.isAvailable=function(){return"undefined"!==typeof document&&null!=document.createElement};
	Wg.prototype.Fc=function(){return"json"};function Yg(a,b,c,d){ff.call(this,["auth_status"]);this.G=a;this.hf=b;this.ih=c;this.Pe=d;this.wc=new Bg(a,[bd,cd]);this.qb=null;this.We=!1;Zg(this)}ka(Yg,ff);h=Yg.prototype;h.Be=function(){return this.qb||null};function Zg(a){cd.get("redirect_request_id")&&$g(a);var b=a.wc.get();b&&b.token?(ah(a,b),a.hf(b.token,function(c,d){bh(a,c,d,!1,b.token,b)},function(b,d){ch(a,"resumeSession()",b,d)})):ah(a,null)}
	function dh(a,b,c,d,e,f){"firebaseio-demo.com"===a.G.domain&&S("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.hf(b,function(f,k){bh(a,f,k,!0,b,c,d||{},e)},function(b,c){ch(a,"auth()",b,c,f)})}function eh(a,b){a.wc.clear();ah(a,null);a.ih(function(a,d){if("ok"===a)T(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;T(b,f)}})}
	function bh(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Ed(e)?e:"",c=null,b&&y(b,"uid")?c=z(b,"uid"):y(f,"uid")&&(c=z(f,"uid")),f.uid=c,c="custom",b&&y(b,"provider")?c=z(b,"provider"):y(f,"provider")&&(c=z(f,"provider")),f.provider=c,a.wc.clear(),Ed(e)&&(g=g||{},c=bd,"sessionOnly"===g.remember&&(c=cd),"none"!==g.remember&&a.wc.set(f,c)),ah(a,f)),T(k,null,f)):(a.wc.clear(),ah(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,T(k,f))}
	function ch(a,b,c,d,e){S(b+" was canceled: "+d);a.wc.clear();ah(a,null);a=Error(d);a.code=c.toUpperCase();T(e,a)}function fh(a,b,c,d,e){gh(a);c=new yg(d||{},{},c||{});hh(a,[Ug,Wg],"/auth/"+b,c,e)}
	function ih(a,b,c,d){gh(a);var e=[Tg,Vg];c=Ag(c);var f=625;"anonymous"===b||"password"===b?setTimeout(function(){T(d,Sg("TRANSPORT_UNAVAILABLE"))},0):("github"===b&&(f=1025),c.he.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width="+f+",top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-f):0),c.he.relay_url=Ng(a.G.lc),c.he.requestWithCredential=u(a.uc,a),hh(a,e,"/auth/"+
	b,c,d))}function $g(a){var b=cd.get("redirect_request_id");if(b){var c=cd.get("redirect_client_options");cd.remove("redirect_request_id");cd.remove("redirect_client_options");var d=[Ug,Wg],b={requestId:b,requestKey:Kg(document.location.hash)},c=new yg(c,{},b);a.We=!0;Lg();hh(a,d,"/auth/session",c,function(){this.We=!1}.bind(a))}}h.ve=function(a,b){gh(this);var c=Ag(a);c.fb._method="POST";this.uc("/users",c,function(a,c){a?T(b,a):T(b,a,c)})};
	h.Xe=function(a,b){var c=this;gh(this);var d="/users/"+encodeURIComponent(a.email),e=Ag(a);e.fb._method="DELETE";this.uc(d,e,function(a,d){!a&&d&&d.uid&&c.qb&&c.qb.uid&&c.qb.uid===d.uid&&eh(c);T(b,a)})};h.se=function(a,b){gh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=Ag(a);d.fb._method="PUT";d.fb.password=a.newPassword;this.uc(c,d,function(a){T(b,a)})};
	h.re=function(a,b){gh(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=Ag(a);d.fb._method="PUT";d.fb.email=a.newEmail;d.fb.password=a.password;this.uc(c,d,function(a){T(b,a)})};h.Ze=function(a,b){gh(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=Ag(a);d.fb._method="POST";this.uc(c,d,function(a){T(b,a)})};h.uc=function(a,b,c){jh(this,[Ug,Wg],a,b,c)};
	function hh(a,b,c,d,e){jh(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?dh(a,c.token,c,d.qd,function(a,b){a?T(e,a):T(e,null,b)}):T(e,b||Sg("UNKNOWN_ERROR"))})}
	function jh(a,b,c,d,e){b=Na(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){T(e,Sg("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.he),d=Gb(d.fb),d.v="js-"+Eb,d.transport=b.Fc(),d.suppress_status_codes=!0,a=Mg()+"/"+a.G.lc+c,b.open(a,d,function(a,b){if(a)T(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;T(e,c)}else T(e,null,b)}))}
	function ah(a,b){var c=null!==a.qb||null!==b;a.qb=b;c&&a.ie("auth_status",b);a.Pe(null!==b)}h.Ee=function(a){O("auth_status"===a,'initial event must be of type "auth_status"');return this.We?null:[this.qb]};function gh(a){var b=a.G;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===xg)throw Error("This custom Firebase server ('"+a.G.domain+"') does not support delegated login.");};var gd="websocket",hd="long_polling";function kh(a){this.nc=a;this.Qd=[];this.Wb=0;this.te=-1;this.Jb=null}function lh(a,b,c){a.te=b;a.Jb=c;a.te<a.Wb&&(a.Jb(),a.Jb=null)}function mh(a,b,c){for(a.Qd[b]=c;a.Qd[a.Wb];){var d=a.Qd[a.Wb];delete a.Qd[a.Wb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;gc(function(){f.nc(d[e])})}if(a.Wb===a.te){a.Jb&&(clearTimeout(a.Jb),a.Jb(),a.Jb=null);break}a.Wb++}};function nh(a,b,c,d){this.ue=a;this.f=pd(a);this.rb=this.sb=0;this.Xa=uc(b);this.Xf=c;this.Kc=!1;this.Fb=d;this.ld=function(a){return fd(b,hd,a)}}var oh,ph;
	nh.prototype.open=function(a,b){this.mf=0;this.na=b;this.Ef=new kh(a);this.Db=!1;var c=this;this.ub=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.ub=null},Math.floor(3E4));ud(function(){if(!c.Db){c.Wa=new qh(function(a,b,d,k,m){rh(c,arguments);if(c.Wa)if(c.ub&&(clearTimeout(c.ub),c.ub=null),c.Kc=!0,"start"==a)c.id=b,c.Mf=d;else if("close"===a)b?(c.Wa.$d=!1,lh(c.Ef,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){rh(c,arguments);
	mh(c.Ef,a,b)},function(){c.bb()},c.ld);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Wa.ke&&(a.cb=c.Wa.ke);a.v="5";c.Xf&&(a.s=c.Xf);c.Fb&&(a.ls=c.Fb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.ld(a);c.f("Connecting via long-poll to "+a);sh(c.Wa,a,function(){})}})};
	nh.prototype.start=function(){var a=this.Wa,b=this.Mf;a.Gg=this.id;a.Hg=b;for(a.oe=!0;th(a););a=this.id;b=this.Mf;this.kc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.kc.src=this.ld(c);this.kc.style.display="none";document.body.appendChild(this.kc)};
	nh.isAvailable=function(){return oh||!ph&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.kh)&&!0};h=nh.prototype;h.Hd=function(){};h.fd=function(){this.Db=!0;this.Wa&&(this.Wa.close(),this.Wa=null);this.kc&&(document.body.removeChild(this.kc),this.kc=null);this.ub&&(clearTimeout(this.ub),this.ub=null)};
	h.bb=function(){this.Db||(this.f("Longpoll is closing itself"),this.fd(),this.na&&(this.na(this.Kc),this.na=null))};h.close=function(){this.Db||(this.f("Longpoll is being closed."),this.fd())};h.send=function(a){a=G(a);this.sb+=a.length;rc(this.Xa,"bytes_sent",a.length);a=Ob(a);a=nb(a,!0);a=yd(a,1840);for(var b=0;b<a.length;b++){var c=this.Wa;c.cd.push({Yg:this.mf,hh:a.length,of:a[b]});c.oe&&th(c);this.mf++}};function rh(a,b){var c=G(b).length;a.rb+=c;rc(a.Xa,"bytes_received",c)}
	function qh(a,b,c,d){this.ld=d;this.lb=c;this.Te=new ug;this.cd=[];this.we=Math.floor(1E8*Math.random());this.$d=!0;this.ke=id();window["pLPCommand"+this.ke]=a;window["pRTLPCB"+this.ke]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||fc("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.jb=a.contentDocument:a.contentWindow?a.jb=a.contentWindow.document:a.document&&(a.jb=a.document);this.Ga=a;a="";this.Ga.src&&"javascript:"===this.Ga.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ga.jb.open(),this.Ga.jb.write(a),this.Ga.jb.close()}catch(f){fc("frame writing exception"),f.stack&&fc(f.stack),fc(f)}}
	qh.prototype.close=function(){this.oe=!1;if(this.Ga){this.Ga.jb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ga&&(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.lb;b&&(this.lb=null,b())};
	function th(a){if(a.oe&&a.$d&&a.Te.count()<(0<a.cd.length?2:1)){a.we++;var b={};b.id=a.Gg;b.pw=a.Hg;b.ser=a.we;for(var b=a.ld(b),c="",d=0;0<a.cd.length;)if(1870>=a.cd[0].of.length+30+c.length){var e=a.cd.shift(),c=c+"&seg"+d+"="+e.Yg+"&ts"+d+"="+e.hh+"&d"+d+"="+e.of;d++}else break;uh(a,b+c,a.we);return!0}return!1}function uh(a,b,c){function d(){a.Te.remove(c);th(a)}a.Te.add(c,1);var e=setTimeout(d,Math.floor(25E3));sh(a,b,function(){clearTimeout(e);d()})}
	function sh(a,b,c){setTimeout(function(){try{if(a.$d){var d=a.Ga.jb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){fc("Long-poll script failed to load: "+b);a.$d=!1;a.close()};a.Ga.jb.body.appendChild(d)}}catch(e){}},Math.floor(1))};var vh=null;"undefined"!==typeof MozWebSocket?vh=MozWebSocket:"undefined"!==typeof WebSocket&&(vh=WebSocket);function wh(a,b,c,d){this.ue=a;this.f=pd(this.ue);this.frames=this.Nc=null;this.rb=this.sb=this.ff=0;this.Xa=uc(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.jf=fd(b,gd,a)}var xh;
	wh.prototype.open=function(a,b){this.lb=b;this.Lg=a;this.f("Websocket connecting to "+this.jf);this.Kc=!1;bd.set("previous_websocket_failure",!0);try{this.La=new vh(this.jf)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.La.onopen=function(){e.f("Websocket connected.");e.Kc=!0};this.La.onclose=function(){e.f("Websocket connection was disconnected.");e.La=null;e.bb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.rb+=
	a.length,rc(e.Xa,"bytes_received",a.length),yh(e),null!==e.frames)zh(e,a);else{a:{O(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.ff=b;e.frames=[];a=null;break a}}e.ff=1;e.frames=[]}null!==a&&zh(e,a)}};this.La.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};wh.prototype.start=function(){};
	wh.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==vh&&!xh};wh.responsesRequiredToBeHealthy=2;wh.healthyTimeout=3E4;h=wh.prototype;h.Hd=function(){bd.remove("previous_websocket_failure")};function zh(a,b){a.frames.push(b);if(a.frames.length==a.ff){var c=a.frames.join("");a.frames=null;c=Rb(c);a.Lg(c)}}
	h.send=function(a){yh(this);a=G(a);this.sb+=a.length;rc(this.Xa,"bytes_sent",a.length);a=yd(a,16384);1<a.length&&Ah(this,String(a.length));for(var b=0;b<a.length;b++)Ah(this,a[b])};h.fd=function(){this.Db=!0;this.Nc&&(clearInterval(this.Nc),this.Nc=null);this.La&&(this.La.close(),this.La=null)};h.bb=function(){this.Db||(this.f("WebSocket is closing itself"),this.fd(),this.lb&&(this.lb(this.Kc),this.lb=null))};h.close=function(){this.Db||(this.f("WebSocket is being closed"),this.fd())};
	function yh(a){clearInterval(a.Nc);a.Nc=setInterval(function(){a.La&&Ah(a,"0");yh(a)},Math.floor(45E3))}function Ah(a,b){try{a.La.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(u(a.bb,a),0)}};function Bh(a){Ch(this,a)}var Dh=[nh,wh];function Ch(a,b){var c=wh&&wh.isAvailable(),d=c&&!(bd.Af||!0===bd.get("previous_websocket_failure"));b.jh&&(c||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.jd=[wh];else{var e=a.jd=[];zd(Dh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function Eh(a){if(0<a.jd.length)return a.jd[0];throw Error("No transports available");};function Fh(a,b,c,d,e,f,g){this.id=a;this.f=pd("c:"+this.id+":");this.nc=c;this.Zc=d;this.na=e;this.Re=f;this.G=b;this.Pd=[];this.kf=0;this.Wf=new Bh(b);this.N=0;this.Fb=g;this.f("Connection created");Gh(this)}
	function Gh(a){var b=Eh(a.Wf);a.K=new b("c:"+a.id+":"+a.kf++,a.G,void 0,a.Fb);a.Ve=b.responsesRequiredToBeHealthy||0;var c=Hh(a,a.K),d=Ih(a,a.K);a.kd=a.K;a.ed=a.K;a.F=null;a.Eb=!1;setTimeout(function(){a.K&&a.K.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.Bd=setTimeout(function(){a.Bd=null;a.Eb||(a.K&&102400<a.K.rb?(a.f("Connection exceeded healthy timeout but has received "+a.K.rb+" bytes.  Marking connection healthy."),a.Eb=!0,a.K.Hd()):a.K&&10240<a.K.sb?a.f("Connection exceeded healthy timeout but has sent "+
	a.K.sb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function Ih(a,b){return function(c){b===a.K?(a.K=null,c||0!==a.N?1===a.N&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.G.ab.substr(0,2)&&(bd.remove("host:"+a.G.host),a.G.ab=a.G.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.kd!==c&&a.ed!==c||a.close()):a.f("closing an old connection")}}
	function Hh(a,b){return function(c){if(2!=a.N)if(b===a.ed){var d=wd("t",c);c=wd("d",c);if("c"==d){if(d=wd("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Uf=c.s;ed(a.G,f);0==a.N&&(a.K.start(),Jh(a,a.K,d),"5"!==e&&S("Protocol version mismatch detected"),c=a.Wf,(c=1<c.jd.length?c.jd[1]:null)&&Kh(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.ed=a.F;for(c=0;c<a.Pd.length;++c)a.Ld(a.Pd[c]);a.Pd=[];Lh(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.Re&&(a.Re(c),a.Re=null),a.na=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),ed(a.G,c),1===a.N?a.close():(Mh(a),Gh(a))):"e"===d?qd("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Nh(a),Oh(a)):qd("Unknown control packet command: "+d)}else"d"==d&&a.Ld(c)}else if(b===a.F)if(d=wd("t",c),c=wd("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ph(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.kd!==a.F&&a.ed!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.Tf--,Ph(a)));else if("d"==d)a.Pd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}Fh.prototype.Ia=function(a){Qh(this,{t:"d",d:a})};function Lh(a){a.kd===a.F&&a.ed===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.ue),a.K=a.F,a.F=null)}
	function Ph(a){0>=a.Tf?(a.f("Secondary connection is healthy."),a.Eb=!0,a.F.Hd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.K.send({t:"c",d:{t:"n",d:{}}}),a.kd=a.F,Lh(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}Fh.prototype.Ld=function(a){Nh(this);this.nc(a)};function Nh(a){a.Eb||(a.Ve--,0>=a.Ve&&(a.f("Primary connection is healthy."),a.Eb=!0,a.K.Hd()))}
	function Kh(a,b){a.F=new b("c:"+a.id+":"+a.kf++,a.G,a.Uf);a.Tf=b.responsesRequiredToBeHealthy||0;a.F.open(Hh(a,a.F),Ih(a,a.F));setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6E4))}function Jh(a,b,c){a.f("Realtime connection established.");a.K=b;a.N=1;a.Zc&&(a.Zc(c,a.Uf),a.Zc=null);0===a.Ve?(a.f("Primary connection is healthy."),a.Eb=!0):setTimeout(function(){Oh(a)},Math.floor(5E3))}
	function Oh(a){a.Eb||1!==a.N||(a.f("sending ping on primary."),Qh(a,{t:"c",d:{t:"p",d:{}}}))}function Qh(a,b){if(1!==a.N)throw"Connection is not connected";a.kd.send(b)}Fh.prototype.close=function(){2!==this.N&&(this.f("Closing realtime connection."),this.N=2,Mh(this),this.na&&(this.na(),this.na=null))};function Mh(a){a.f("Shutting down all connections");a.K&&(a.K.close(),a.K=null);a.F&&(a.F.close(),a.F=null);a.Bd&&(clearTimeout(a.Bd),a.Bd=null)};function Rh(a,b,c,d){this.id=Sh++;this.f=pd("p:"+this.id+":");this.Bf=this.Ie=!1;this.ba={};this.sa=[];this.ad=0;this.Yc=[];this.qa=!1;this.eb=1E3;this.Id=3E5;this.Kb=b;this.Xc=c;this.Se=d;this.G=a;this.wb=this.Ca=this.Ma=this.Fb=this.$e=null;this.Sb=!1;this.Wd={};this.Xg=0;this.rf=!0;this.Oc=this.Ke=null;Th(this,0);kf.yb().Ib("visible",this.Og,this);-1===a.host.indexOf("fblocal")&&jf.yb().Ib("online",this.Mg,this)}var Sh=0,Uh=0;h=Rh.prototype;
	h.Ia=function(a,b,c){var d=++this.Xg;a={r:d,a:a,b:b};this.f(G(a));O(this.qa,"sendRequest call when we're not connected not allowed.");this.Ma.Ia(a);c&&(this.Wd[d]=c)};h.Cf=function(a,b,c,d){var e=a.wa(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.ba[f]=this.ba[f]||{};O(Ie(a.n)||!He(a.n),"listen() called for non-default but complete query");O(!this.ba[f][e],"listen() called twice for same path/queryId.");a={I:d,Ad:b,Ug:a,tag:c};this.ba[f][e]=a;this.qa&&Vh(this,a)};
	function Vh(a,b){var c=b.Ug,d=c.path.toString(),e=c.wa();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=Ge(c.n),f.t=b.tag);f.h=b.Ad();a.Ia("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&y(k,"w")){var l=z(k,"w");da(l)&&0<=La(l,"no_index")&&S("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.ba[d]&&a.ba[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Wh(a,d,e),b.I&&
	b.I(m,k))})}h.O=function(a,b,c){this.Ca={rg:a,sf:!1,Dc:b,od:c};this.f("Authenticating using credential: "+a);Xh(this);(b=40==a.length)||(a=Cd(a).Ec,b="object"===typeof a&&!0===z(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Id=3E4)};h.je=function(a){this.Ca=null;this.qa&&this.Ia("unauth",{},function(b){a(b.s,b.d)})};
	function Xh(a){var b=a.Ca;a.qa&&b&&a.Ia("auth",{cred:b.rg},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Ca===b&&(a.Ca=null);b.sf?"ok"!==d&&b.od&&b.od(d,c):(b.sf=!0,b.Dc&&b.Dc(d,c))})}h.$f=function(a,b){var c=a.path.toString(),d=a.wa();this.f("Unlisten called for "+c+" "+d);O(Ie(a.n)||!He(a.n),"unlisten() called for non-default but complete query");if(Wh(this,c,d)&&this.qa){var e=Ge(a.n);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.Ia("n",c)}};
	h.Qe=function(a,b,c){this.qa?Yh(this,"o",a,b,c):this.Yc.push({bd:a,action:"o",data:b,I:c})};h.Gf=function(a,b,c){this.qa?Yh(this,"om",a,b,c):this.Yc.push({bd:a,action:"om",data:b,I:c})};h.Md=function(a,b){this.qa?Yh(this,"oc",a,null,b):this.Yc.push({bd:a,action:"oc",data:null,I:b})};function Yh(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Ia(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Zh(this,"p",a,b,c,d)};
	h.Df=function(a,b,c,d){Zh(this,"m",a,b,c,d)};function Zh(a,b,c,d,e,f){d={p:c,d:d};p(f)&&(d.h=f);a.sa.push({action:b,Pf:d,I:e});a.ad++;b=a.sa.length-1;a.qa?$h(a,b):a.f("Buffering put: "+c)}function $h(a,b){var c=a.sa[b].action,d=a.sa[b].Pf,e=a.sa[b].I;a.sa[b].Vg=a.qa;a.Ia(c,d,function(d){a.f(c+" response",d);delete a.sa[b];a.ad--;0===a.ad&&(a.sa=[]);e&&e(d.s,d.d)})}
	h.Ye=function(a){this.qa&&(a={c:a},this.f("reportStats",a),this.Ia("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	h.Ld=function(a){if("r"in a){this.f("from server: "+G(a));var b=a.r,c=this.Wd[b];c&&(delete this.Wd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Kb(c.p,c.d,!1,c.t):"m"===b?this.Kb(c.p,c.d,!0,c.t):"c"===b?ai(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Ca,this.Ca=null,c&&c.od&&c.od(a,b)):"sd"===b?this.$e?this.$e(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
	"\nFIREBASE: ")):qd("Unrecognized action received from server: "+G(b)+"\nAre you using the latest client?"))}};h.Zc=function(a,b){this.f("connection ready");this.qa=!0;this.Oc=(new Date).getTime();this.Se({serverTimeOffset:a-(new Date).getTime()});this.Fb=b;if(this.rf){var c={};c["sdk.js."+Eb.replace(/\./g,"-")]=1;Dg()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.Ye(c)}bi(this);this.rf=!1;this.Xc(!0)};
	function Th(a,b){O(!a.Ma,"Scheduling a connect when we're already connected/ing?");a.wb&&clearTimeout(a.wb);a.wb=setTimeout(function(){a.wb=null;ci(a)},Math.floor(b))}h.Og=function(a){a&&!this.Sb&&this.eb===this.Id&&(this.f("Window became visible.  Reducing delay."),this.eb=1E3,this.Ma||Th(this,0));this.Sb=a};h.Mg=function(a){a?(this.f("Browser went online."),this.eb=1E3,this.Ma||Th(this,0)):(this.f("Browser went offline.  Killing connection."),this.Ma&&this.Ma.close())};
	h.If=function(){this.f("data client disconnected");this.qa=!1;this.Ma=null;for(var a=0;a<this.sa.length;a++){var b=this.sa[a];b&&"h"in b.Pf&&b.Vg&&(b.I&&b.I("disconnect"),delete this.sa[a],this.ad--)}0===this.ad&&(this.sa=[]);this.Wd={};di(this)&&(this.Sb?this.Oc&&(3E4<(new Date).getTime()-this.Oc&&(this.eb=1E3),this.Oc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.eb=this.Id,this.Ke=(new Date).getTime()),a=Math.max(0,this.eb-((new Date).getTime()-this.Ke)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Th(this,a),this.eb=Math.min(this.Id,1.3*this.eb));this.Xc(!1)};function ci(a){if(di(a)){a.f("Making a connection attempt");a.Ke=(new Date).getTime();a.Oc=null;var b=u(a.Ld,a),c=u(a.Zc,a),d=u(a.If,a),e=a.id+":"+Uh++;a.Ma=new Fh(e,a.G,b,c,d,function(b){S(b+" ("+a.G.toString()+")");a.Bf=!0},a.Fb)}}h.Cb=function(){this.Ie=!0;this.Ma?this.Ma.close():(this.wb&&(clearTimeout(this.wb),this.wb=null),this.qa&&this.If())};h.vc=function(){this.Ie=!1;this.eb=1E3;this.Ma||Th(this,0)};
	function ai(a,b,c){c=c?Oa(c,function(a){return xd(a)}).join("$"):"default";(a=Wh(a,b,c))&&a.I&&a.I("permission_denied")}function Wh(a,b,c){b=(new P(b)).toString();var d;p(a.ba[b])?(d=a.ba[b][c],delete a.ba[b][c],0===oa(a.ba[b])&&delete a.ba[b]):d=void 0;return d}function bi(a){Xh(a);v(a.ba,function(b){v(b,function(b){Vh(a,b)})});for(var b=0;b<a.sa.length;b++)a.sa[b]&&$h(a,b);for(;a.Yc.length;)b=a.Yc.shift(),Yh(a,b.action,b.bd,b.data,b.I)}function di(a){var b;b=jf.yb().oc;return!a.Bf&&!a.Ie&&b};var U={zg:function(){oh=xh=!0}};U.forceLongPolling=U.zg;U.Ag=function(){ph=!0};U.forceWebSockets=U.Ag;U.Eg=function(){return wh.isAvailable()};U.isWebSocketsAvailable=U.Eg;U.ah=function(a,b){a.k.Va.$e=b};U.setSecurityDebugCallback=U.ah;U.bf=function(a,b){a.k.bf(b)};U.stats=U.bf;U.cf=function(a,b){a.k.cf(b)};U.statsIncrementCounter=U.cf;U.ud=function(a){return a.k.ud};U.dataUpdateCount=U.ud;U.Dg=function(a,b){a.k.He=b};U.interceptServerData=U.Dg;U.Kg=function(a){new Og(a)};U.onPopupOpen=U.Kg;
	U.Zg=function(a){xg=a};U.setAuthenticationServer=U.Zg;function ei(a,b){this.committed=a;this.snapshot=b};function V(a,b){this.dd=a;this.ta=b}V.prototype.cancel=function(a){D("Firebase.onDisconnect().cancel",0,1,arguments.length);F("Firebase.onDisconnect().cancel",1,a,!0);var b=new B;this.dd.Md(this.ta,C(b,a));return b.D};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){D("Firebase.onDisconnect().remove",0,1,arguments.length);og("Firebase.onDisconnect().remove",this.ta);F("Firebase.onDisconnect().remove",1,a,!0);var b=new B;fi(this.dd,this.ta,null,C(b,a));return b.D};
	V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){D("Firebase.onDisconnect().set",1,2,arguments.length);og("Firebase.onDisconnect().set",this.ta);gg("Firebase.onDisconnect().set",a,this.ta,!1);F("Firebase.onDisconnect().set",2,b,!0);var c=new B;fi(this.dd,this.ta,a,C(c,b));return c.D};V.prototype.set=V.prototype.set;
	V.prototype.Ob=function(a,b,c){D("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);og("Firebase.onDisconnect().setWithPriority",this.ta);gg("Firebase.onDisconnect().setWithPriority",a,this.ta,!1);kg("Firebase.onDisconnect().setWithPriority",2,b);F("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new B;gi(this.dd,this.ta,a,b,C(d,c));return d.D};V.prototype.setWithPriority=V.prototype.Ob;
	V.prototype.update=function(a,b){D("Firebase.onDisconnect().update",1,2,arguments.length);og("Firebase.onDisconnect().update",this.ta);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}jg("Firebase.onDisconnect().update",a,this.ta);F("Firebase.onDisconnect().update",2,b,!0);
	c=new B;hi(this.dd,this.ta,a,C(c,b));return c.D};V.prototype.update=V.prototype.update;function W(a,b,c){this.A=a;this.Y=b;this.g=c}W.prototype.J=function(){D("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.J()};W.prototype.val=W.prototype.J;W.prototype.qf=function(){D("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.J(!0)};W.prototype.exportVal=W.prototype.qf;W.prototype.xg=function(){D("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.xg;
	W.prototype.o=function(a){D("Firebase.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));ng("Firebase.DataSnapshot.child",a);var b=new P(a),c=this.Y.o(b);return new W(this.A.S(b),c,R)};W.prototype.child=W.prototype.o;W.prototype.Fa=function(a){D("Firebase.DataSnapshot.hasChild",1,1,arguments.length);ng("Firebase.DataSnapshot.hasChild",a);var b=new P(a);return!this.A.S(b).e()};W.prototype.hasChild=W.prototype.Fa;
	W.prototype.C=function(){D("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().J()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){D("Firebase.DataSnapshot.forEach",1,1,arguments.length);F("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.L())return!1;var b=this;return!!this.A.R(this.g,function(c,d){return a(new W(d,b.Y.o(c),R))})};W.prototype.forEach=W.prototype.forEach;
	W.prototype.zd=function(){D("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.L()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.zd;W.prototype.name=function(){S("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");D("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};W.prototype.name=W.prototype.name;W.prototype.key=function(){D("Firebase.DataSnapshot.key",0,0,arguments.length);return this.Y.key()};
	W.prototype.key=W.prototype.key;W.prototype.Hb=function(){D("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Hb()};W.prototype.numChildren=W.prototype.Hb;W.prototype.Mb=function(){D("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.Y};W.prototype.ref=W.prototype.Mb;function ii(a,b,c){this.Vb=a;this.tb=b;this.vb=c||null}h=ii.prototype;h.Qf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new jc("value",this,new W(a.Na,b.Mb(),c))};h.Zb=function(a){var b=this.vb;if("cancel"===a.De()){O(this.tb,"Raising a cancel event on a listener with no cancel callback");var c=this.tb;return function(){c.call(b,a.error)}}var d=this.Vb;return function(){d.call(b,a.be)}};h.lf=function(a,b){return this.tb?new kc(this,a,b):null};
	h.matches=function(a){return a instanceof ii?a.Vb&&this.Vb?a.Vb===this.Vb&&a.vb===this.vb:!0:!1};h.yf=function(){return null!==this.Vb};function ji(a,b,c){this.ja=a;this.tb=b;this.vb=c}h=ji.prototype;h.Qf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ja};h.lf=function(a,b){return this.tb?new kc(this,a,b):null};
	h.createEvent=function(a,b){O(null!=a.Za,"Child events should have a childName.");var c=b.Mb().o(a.Za);return new jc(a.type,this,new W(a.Na,c,b.n.g),a.Td)};h.Zb=function(a){var b=this.vb;if("cancel"===a.De()){O(this.tb,"Raising a cancel event on a listener with no cancel callback");var c=this.tb;return function(){c.call(b,a.error)}}var d=this.ja[a.wd];return function(){d.call(b,a.be,a.Td)}};
	h.matches=function(a){if(a instanceof ji){if(!this.ja||!a.ja)return!0;if(this.vb===a.vb){var b=oa(a.ja);if(b===oa(this.ja)){if(1===b){var b=pa(a.ja),c=pa(this.ja);return c===b&&(!a.ja[b]||!this.ja[c]||a.ja[b]===this.ja[c])}return na(this.ja,function(b,c){return a.ja[c]===b})}}}return!1};h.yf=function(){return null!==this.ja};function ki(){this.za={}}h=ki.prototype;h.e=function(){return va(this.za)};h.gb=function(a,b,c){var d=a.source.Lb;if(null!==d)return d=z(this.za,d),O(null!=d,"SyncTree gave us an op for an invalid query."),d.gb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.gb(a,b,c))});return e};h.Tb=function(a,b,c,d,e){var f=a.wa(),g=z(this.za,f);if(!g){var g=c.Aa(e?d:null),k=!1;g?k=!0:(g=d instanceof fe?c.Cc(d):H,k=!1);g=new Ye(a,new je(new Xb(g,k,!1),new Xb(d,e,!1)));this.za[f]=g}g.Tb(b);return af(g,b)};
	h.nb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=li(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.nb(b,c));a.e()&&(delete k.za[d],He(a.Y.n)||e.push(a.Y))})}else{var m=z(this.za,d);m&&(f=f.concat(m.nb(b,c)),m.e()&&(delete this.za[d],He(m.Y.n)||e.push(m.Y)))}g&&null==li(this)&&e.push(new X(a.k,a.path));return{Wg:e,vg:f}};function mi(a){return Na(qa(a.za),function(a){return!He(a.Y.n)})}h.kb=function(a){var b=null;v(this.za,function(c){b=b||c.kb(a)});return b};
	function ni(a,b){if(He(b.n))return li(a);var c=b.wa();return z(a.za,c)}function li(a){return ua(a.za,function(a){return He(a.Y.n)})||null};function oi(a){this.va=qe;this.mb=new Pf;this.df={};this.qc={};this.Qc=a}function pi(a,b,c,d,e){var f=a.mb,g=e;O(d>f.Pc,"Stacking an older write on top of newer ones");p(g)||(g=!0);f.pa.push({path:b,Ja:c,md:d,visible:g});g&&(f.V=Jf(f.V,b,c));f.Pc=d;return e?qi(a,new Ac(Ef,b,c)):[]}function ri(a,b,c,d){var e=a.mb;O(d>e.Pc,"Stacking an older merge on top of newer ones");e.pa.push({path:b,children:c,md:d,visible:!0});e.V=Kf(e.V,b,c);e.Pc=d;c=sf(c);return qi(a,new bf(Ef,b,c))}
	function si(a,b,c){c=c||!1;var d=Qf(a.mb,b);if(a.mb.Ud(b)){var e=qe;null!=d.Ja?e=e.set(M,!0):Fb(d.children,function(a,b){e=e.set(new P(a),b)});return qi(a,new Df(d.path,e,c))}return[]}function ti(a,b,c){c=sf(c);return qi(a,new bf(Gf,b,c))}function ui(a,b,c,d){d=vi(a,d);if(null!=d){var e=wi(d);d=e.path;e=e.Lb;b=lf(d,b);c=new Ac(new Ff(!1,!0,e,!0),b,c);return xi(a,d,c)}return[]}
	function yi(a,b,c,d){if(d=vi(a,d)){var e=wi(d);d=e.path;e=e.Lb;b=lf(d,b);c=sf(c);c=new bf(new Ff(!1,!0,e,!0),b,c);return xi(a,d,c)}return[]}
	oi.prototype.Tb=function(a,b){var c=a.path,d=null,e=!1;zf(this.va,c,function(a,b){var f=lf(a,c);d=d||b.kb(f);e=e||null!=li(b)});var f=this.va.get(c);f?(e=e||null!=li(f),d=d||f.kb(M)):(f=new ki,this.va=this.va.set(c,f));var g;null!=d?g=!0:(g=!1,d=H,Cf(this.va.subtree(c),function(a,b){var c=b.kb(M);c&&(d=d.W(a,c))}));var k=null!=ni(f,a);if(!k&&!He(a.n)){var m=zi(a);O(!(m in this.qc),"View does not exist, but we have a tag");var l=Ai++;this.qc[m]=l;this.df["_"+l]=m}g=f.Tb(a,b,new Uf(c,this.mb),d,g);
	k||e||(f=ni(f,a),g=g.concat(Bi(this,a,f)));return g};
	oi.prototype.nb=function(a,b,c){var d=a.path,e=this.va.get(d),f=[];if(e&&("default"===a.wa()||null!=ni(e,a))){f=e.nb(a,b,c);e.e()&&(this.va=this.va.remove(d));e=f.Wg;f=f.vg;b=-1!==Sa(e,function(a){return He(a.n)});var g=xf(this.va,d,function(a,b){return null!=li(b)});if(b&&!g&&(d=this.va.subtree(d),!d.e()))for(var d=Ci(d),k=0;k<d.length;++k){var m=d[k],l=m.Y,m=Di(this,m);this.Qc.af(Ei(l),Fi(this,l),m.Ad,m.I)}if(!g&&0<e.length&&!c)if(b)this.Qc.de(Ei(a),null);else{var t=this;Ma(e,function(a){a.wa();
	var b=t.qc[zi(a)];t.Qc.de(Ei(a),b)})}Gi(this,e)}return f};oi.prototype.Aa=function(a,b){var c=this.mb,d=xf(this.va,a,function(b,c){var d=lf(b,a);if(d=c.kb(d))return d});return c.Aa(a,d,b,!0)};function Ci(a){return vf(a,function(a,c,d){if(c&&null!=li(c))return[li(c)];var e=[];c&&(e=mi(c));v(d,function(a){e=e.concat(a)});return e})}function Gi(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!He(d.n)){var d=zi(d),e=a.qc[d];delete a.qc[d];delete a.df["_"+e]}}}
	function Ei(a){return He(a.n)&&!Ie(a.n)?a.Mb():a}function Bi(a,b,c){var d=b.path,e=Fi(a,b);c=Di(a,c);b=a.Qc.af(Ei(b),e,c.Ad,c.I);d=a.va.subtree(d);if(e)O(null==li(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=vf(d,function(a,b,c){if(!a.e()&&b&&null!=li(b))return[Ze(li(b))];var d=[];b&&(d=d.concat(Oa(mi(b),function(a){return a.Y})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Qc.de(Ei(c),Fi(a,c));return b}
	function Di(a,b){var c=b.Y,d=Fi(a,c);return{Ad:function(){return(b.w()||H).hash()},I:function(b){if("ok"===b){if(d){var f=c.path;if(b=vi(a,d)){var g=wi(b);b=g.path;g=g.Lb;f=lf(b,f);f=new Cc(new Ff(!1,!0,g,!0),f);b=xi(a,b,f)}else b=[]}else b=qi(a,new Cc(Gf,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.nb(c,null,f)}}}function zi(a){return a.path.toString()+"$"+a.wa()}function wi(a){var b=a.indexOf("$");O(-1!==b&&b<a.length-1,"Bad queryKey.");return{Lb:a.substr(b+1),path:new P(a.substr(0,b))}}function vi(a,b){var c=a.df,d="_"+b;return d in c?c[d]:void 0}function Fi(a,b){var c=zi(b);return z(a.qc,c)}var Ai=1;
	function xi(a,b,c){var d=a.va.get(b);O(d,"Missing sync point for query tag that we're tracking");return d.gb(c,new Uf(b,a.mb),null)}function qi(a,b){return Hi(a,b,a.va,null,new Uf(M,a.mb))}function Hi(a,b,c,d,e){if(b.path.e())return Ii(a,b,c,d,e);var f=c.get(M);null==d&&null!=f&&(d=f.kb(M));var g=[],k=K(b.path),m=b.$c(k);if((c=c.children.get(k))&&m)var l=d?d.T(k):null,k=e.o(k),g=g.concat(Hi(a,m,c,l,k));f&&(g=g.concat(f.gb(b,e,d)));return g}
	function Ii(a,b,c,d,e){var f=c.get(M);null==d&&null!=f&&(d=f.kb(M));var g=[];c.children.ka(function(c,f){var l=d?d.T(c):null,t=e.o(c),A=b.$c(c);A&&(g=g.concat(Ii(a,A,f,l,t)))});f&&(g=g.concat(f.gb(b,e,d)));return g};function Ji(a,b){this.G=a;this.Xa=uc(a);this.hd=null;this.fa=new Zb;this.Kd=1;this.Va=null;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.da=new cf(this.G,u(this.Kb,this)),setTimeout(u(this.Xc,this,!0),0)):this.da=this.Va=new Rh(this.G,u(this.Kb,this),u(this.Xc,this),u(this.Se,this));this.eh=vc(a,u(function(){return new pc(this.Xa,this.da)},this));this.yc=new Wf;
	this.Ge=new Sb;var c=this;this.Fd=new oi({af:function(a,b,f,g){b=[];f=c.Ge.j(a.path);f.e()||(b=qi(c.Fd,new Ac(Gf,a.path,f)),setTimeout(function(){g("ok")},0));return b},de:aa});Ki(this,"connected",!1);this.na=new Vc;this.O=new Yg(a,u(this.da.O,this.da),u(this.da.je,this.da),u(this.Pe,this));this.ud=0;this.He=null;this.M=new oi({af:function(a,b,f,g){c.da.Cf(a,f,b,function(b,e){var f=g(b,e);dc(c.fa,a.path,f)});return[]},de:function(a,b){c.da.$f(a,b)}})}h=Ji.prototype;
	h.toString=function(){return(this.G.ob?"https://":"http://")+this.G.host};h.name=function(){return this.G.lc};function Li(a){a=a.Ge.j(new P(".info/serverTimeOffset")).J()||0;return(new Date).getTime()+a}function Mi(a){a=a={timestamp:Li(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	h.Kb=function(a,b,c,d){this.ud++;var e=new P(a);b=this.He?this.He(a,b):b;a=[];d?c?(b=ma(b,function(a){return Q(a)}),a=yi(this.M,e,b,d)):(b=Q(b),a=ui(this.M,e,b,d)):c?(d=ma(b,function(a){return Q(a)}),a=ti(this.M,e,d)):(d=Q(b),a=qi(this.M,new Ac(Gf,e,d)));d=e;0<a.length&&(d=Ni(this,e));dc(this.fa,d,a)};h.Xc=function(a){Ki(this,"connected",a);!1===a&&Oi(this)};h.Se=function(a){var b=this;zd(a,function(a,d){Ki(b,d,a)})};h.Pe=function(a){Ki(this,"authenticated",a)};
	function Ki(a,b,c){b=new P("/.info/"+b);c=Q(c);var d=a.Ge;d.Zd=d.Zd.H(b,c);c=qi(a.Fd,new Ac(Gf,b,c));dc(a.fa,b,c)}h.Ob=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,nh:c});var e=Mi(this);b=Q(b,c);var e=Xc(b,e),f=this.Kd++,e=pi(this.M,a,e,f,!0);$b(this.fa,e);var g=this;this.da.put(a.toString(),b.J(!0),function(b,c){var e="ok"===b;e||S("set at "+a+" failed: "+b);e=si(g.M,f,!e);dc(g.fa,a,e);Pi(d,b,c)});e=Qi(this,a);Ni(this,e);dc(this.fa,e,[])};
	h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Mi(this),f={};v(b,function(a,b){d=!1;var c=Q(a);f[b]=Xc(c,e)});if(d)fc("update() called with empty data.  Don't do anything."),Pi(c,"ok");else{var g=this.Kd++,k=ri(this.M,a,f,g);$b(this.fa,k);var m=this;this.da.Df(a.toString(),b,function(b,d){var e="ok"===b;e||S("update at "+a+" failed: "+b);var e=si(m.M,g,!e),f=a;0<e.length&&(f=Ni(m,a));dc(m.fa,f,e);Pi(c,b,d)});b=Qi(this,a);Ni(this,b);dc(this.fa,a,[])}};
	function Oi(a){a.f("onDisconnectEvents");var b=Mi(a),c=[];Wc(Uc(a.na,b),M,function(b,e){c=c.concat(qi(a.M,new Ac(Gf,b,e)));var f=Qi(a,b);Ni(a,f)});a.na=new Vc;dc(a.fa,M,c)}h.Md=function(a,b){var c=this;this.da.Md(a.toString(),function(d,e){"ok"===d&&wg(c.na,a);Pi(b,d,e)})};function fi(a,b,c,d){var e=Q(c);a.da.Qe(b.toString(),e.J(!0),function(c,g){"ok"===c&&a.na.rc(b,e);Pi(d,c,g)})}function gi(a,b,c,d,e){var f=Q(c,d);a.da.Qe(b.toString(),f.J(!0),function(c,d){"ok"===c&&a.na.rc(b,f);Pi(e,c,d)})}
	function hi(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(fc("onDisconnect().update() called with empty data.  Don't do anything."),Pi(d,"ok")):a.da.Gf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=Q(c[m]);a.na.rc(b.o(m),l)}Pi(d,e,f)})}function Ri(a,b,c){c=".info"===K(b.path)?a.Fd.Tb(b,c):a.M.Tb(b,c);bc(a.fa,b.path,c)}h.Cb=function(){this.Va&&this.Va.Cb()};h.vc=function(){this.Va&&this.Va.vc()};
	h.bf=function(a){if("undefined"!==typeof console){a?(this.hd||(this.hd=new oc(this.Xa)),a=this.hd.get()):a=this.Xa.get();var b=Pa(ra(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.cf=function(a){rc(this.Xa,a);this.eh.Vf[a]=!0};h.f=function(a){var b="";this.Va&&(b=this.Va.id+":");fc(b,arguments)};
	function Pi(a,b,c){a&&gc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Si(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new X(a,b);g.Ib("value",f);c={path:b,update:c,I:d,status:null,Lf:id(),gf:e,Sf:0,le:function(){g.mc("value",f)},ne:null,Da:null,rd:null,sd:null,td:null};d=a.M.Aa(b,void 0)||H;c.rd=d;d=c.update(d.J());if(p(d)){hg("transaction failed: Data returned ",d,c.path);c.status=1;e=Xf(a.yc,b);var k=e.Ea()||[];k.push(c);Yf(e,k);"object"===typeof d&&null!==d&&y(d,".priority")?(k=z(d,".priority"),O(fg(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.M.Aa(b)||H).C().J();e=Mi(a);d=Q(d,k);e=Xc(d,e);c.sd=d;c.td=e;c.Da=a.Kd++;c=pi(a.M,b,e,c.Da,c.gf);dc(a.fa,b,c);Ti(a)}else c.le(),c.sd=null,c.td=null,c.I&&(a=new W(c.rd,new X(a,c.path),R),c.I(null,!1,a))}function Ti(a,b){var c=b||a.yc;b||Ui(a,c);if(null!==c.Ea()){var d=Vi(a,c);O(0<d.length,"Sending zero length transaction queue");Qa(d,function(a){return 1===a.status})&&Wi(a,c.path(),d)}else c.zd()&&c.R(function(b){Ti(a,b)})}
	function Wi(a,b,c){for(var d=Oa(c,function(a){return a.Da}),e=a.M.Aa(b,d)||H,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];O(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.Sf++;var k=lf(b,g.path),d=d.H(k,g.sd)}d=d.J(!0);a.da.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(si(a.M,c[f].Da));if(c[f].I){var g=c[f].td,k=new X(a,c[f].path);d.push(u(c[f].I,
	null,null,!0,new W(g,k,R)))}c[f].le()}Ui(a,Xf(a.yc,b));Ti(a);dc(a.fa,b,e);for(f=0;f<d.length;f++)gc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(S("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ne=d;Ni(a,b)}},e)}function Ni(a,b){var c=Xi(a,b),d=c.path(),c=Vi(a,c);Yi(a,c,d);return d}
	function Yi(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Na(b,function(a){return 1===a.status}),f=Oa(f,function(a){return a.Da}),g=0;g<b.length;g++){var k=b[g],m=lf(c,k.path),l=!1,t;O(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,t=k.ne,e=e.concat(si(a.M,k.Da,!0));else if(1===k.status)if(25<=k.Sf)l=!0,t="maxretry",e=e.concat(si(a.M,k.Da,!0));else{var A=a.M.Aa(k.path,f)||H;k.rd=A;var I=b[g].update(A.J());p(I)?(hg("transaction failed: Data returned ",
	I,k.path),m=Q(I),"object"===typeof I&&null!=I&&y(I,".priority")||(m=m.ia(A.C())),A=k.Da,I=Mi(a),I=Xc(m,I),k.sd=m,k.td=I,k.Da=a.Kd++,Ta(f,A),e=e.concat(pi(a.M,k.path,I,k.Da,k.gf)),e=e.concat(si(a.M,A,!0))):(l=!0,t="nodata",e=e.concat(si(a.M,k.Da,!0)))}dc(a.fa,c,e);e=[];l&&(b[g].status=3,setTimeout(b[g].le,Math.floor(0)),b[g].I&&("nodata"===t?(k=new X(a,b[g].path),d.push(u(b[g].I,null,null,!1,new W(b[g].rd,k,R)))):d.push(u(b[g].I,null,Error(t),!1,null))))}Ui(a,a.yc);for(g=0;g<d.length;g++)gc(d[g]);
	Ti(a)}}function Xi(a,b){for(var c,d=a.yc;null!==(c=K(b))&&null===d.Ea();)d=Xf(d,c),b=N(b);return d}function Vi(a,b){var c=[];Zi(a,b,c);c.sort(function(a,b){return a.Lf-b.Lf});return c}function Zi(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.R(function(b){Zi(a,b,c)})}function Ui(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Yf(b,0<c.length?c:null)}b.R(function(b){Ui(a,b)})}
	function Qi(a,b){var c=Xi(a,b).path(),d=Xf(a.yc,b);ag(d,function(b){$i(a,b)});$i(a,d);$f(d,function(b){$i(a,b)});return c}
	function $i(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(O(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].ne="set"):(O(1===c[g].status,"Unexpected transaction status in abort"),c[g].le(),e=e.concat(si(a.M,c[g].Da,!0)),c[g].I&&d.push(u(c[g].I,null,Error("set"),!1,null))));-1===f?Yf(b,null):c.length=f+1;dc(a.fa,b.path(),e);for(g=0;g<d.length;g++)gc(d[g])}};function aj(){this.sc={};this.ag=!1}aj.prototype.Cb=function(){for(var a in this.sc)this.sc[a].Cb()};aj.prototype.vc=function(){for(var a in this.sc)this.sc[a].vc()};aj.prototype.ze=function(){this.ag=!0};ba(aj);aj.prototype.interrupt=aj.prototype.Cb;aj.prototype.resume=aj.prototype.vc;function Y(a,b,c,d){this.k=a;this.path=b;this.n=c;this.pc=d}
	function bj(a){var b=null,c=null;a.oa&&(b=Od(a));a.ra&&(c=Rd(a));if(a.g===re){if(a.oa){if("[MIN_NAME]"!=Nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.ra){if("[MAX_NAME]"!=Pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===R){if(null!=b&&!fg(b)||null!=c&&!fg(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(O(a.g instanceof ve||a.g===Be,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function cj(a){if(a.oa&&a.ra&&a.la&&(!a.la||""===a.Rb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function dj(a,b){if(!0===a.pc)throw Error(b+": You can't combine multiple orderBy calls.");}h=Y.prototype;h.Mb=function(){D("Query.ref",0,0,arguments.length);return new X(this.k,this.path)};
	h.Ib=function(a,b,c,d){D("Query.on",2,4,arguments.length);lg("Query.on",a,!1);F("Query.on",2,b,!1);var e=ej("Query.on",c,d);if("value"===a)Ri(this.k,this,new ii(b,e.cancel||null,e.Qa||null));else{var f={};f[a]=b;Ri(this.k,this,new ji(f,e.cancel,e.Qa))}return b};
	h.mc=function(a,b,c){D("Query.off",0,3,arguments.length);lg("Query.off",a,!0);F("Query.off",2,b,!0);Qb("Query.off",3,c);var d=null,e=null;"value"===a?d=new ii(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new ji(e,null,c||null));e=this.k;d=".info"===K(this.path)?e.Fd.nb(this,d):e.M.nb(this,d);bc(e.fa,this.path,d)};
	h.Pg=function(a,b){function c(k){f&&(f=!1,e.mc(a,c),b&&b.call(d.Qa,k),g.resolve(k))}D("Query.once",1,4,arguments.length);lg("Query.once",a,!1);F("Query.once",2,b,!0);var d=ej("Query.once",arguments[2],arguments[3]),e=this,f=!0,g=new B;Nb(g.D);this.Ib(a,c,function(b){e.mc(a,c);d.cancel&&d.cancel.call(d.Qa,b);g.reject(b)});return g.D};
	h.Le=function(a){S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");D("Query.limit",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.Le(a);cj(b);return new Y(this.k,this.path,b,this.pc)};
	h.Me=function(a){D("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Me(a),this.pc)};
	h.Ne=function(a){D("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.la)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Y(this.k,this.path,this.n.Ne(a),this.pc)};
	h.Qg=function(a){D("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');ng("Query.orderByChild",a);dj(this,"Query.orderByChild");var b=new P(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new ve(b);b=Fe(this.n,b);bj(b);return new Y(this.k,this.path,b,!0)};h.Rg=function(){D("Query.orderByKey",0,0,arguments.length);dj(this,"Query.orderByKey");var a=Fe(this.n,re);bj(a);return new Y(this.k,this.path,a,!0)};h.Sg=function(){D("Query.orderByPriority",0,0,arguments.length);dj(this,"Query.orderByPriority");var a=Fe(this.n,R);bj(a);return new Y(this.k,this.path,a,!0)};
	h.Tg=function(){D("Query.orderByValue",0,0,arguments.length);dj(this,"Query.orderByValue");var a=Fe(this.n,Be);bj(a);return new Y(this.k,this.path,a,!0)};h.ce=function(a,b){D("Query.startAt",0,2,arguments.length);gg("Query.startAt",a,this.path,!0);mg("Query.startAt",b);var c=this.n.ce(a,b);cj(c);bj(c);if(this.n.oa)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");p(a)||(b=a=null);return new Y(this.k,this.path,c,this.pc)};
	h.vd=function(a,b){D("Query.endAt",0,2,arguments.length);gg("Query.endAt",a,this.path,!0);mg("Query.endAt",b);var c=this.n.vd(a,b);cj(c);bj(c);if(this.n.ra)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Y(this.k,this.path,c,this.pc)};
	h.tg=function(a,b){D("Query.equalTo",1,2,arguments.length);gg("Query.equalTo",a,this.path,!1);mg("Query.equalTo",b);if(this.n.oa)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.ra)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.ce(a,b).vd(a,b)};
	h.toString=function(){D("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.aa;c<a.u.length;c++)""!==a.u[c]&&(b+="/"+encodeURIComponent(String(a.u[c])));return this.k.toString()+(b||"/")};h.wa=function(){var a=xd(Ge(this.n));return"{}"===a?"default":a};
	function ej(a,b,c){var d={cancel:null,Qa:null};if(b&&c)d.cancel=b,F(a,3,d.cancel,!0),d.Qa=c,Qb(a,4,d.Qa);else if(b)if("object"===typeof b&&null!==b)d.Qa=b;else if("function"===typeof b)d.cancel=b;else throw Error(E(a,3,!0)+" must either be a cancel callback or a context object.");return d}Y.prototype.ref=Y.prototype.Mb;Y.prototype.on=Y.prototype.Ib;Y.prototype.off=Y.prototype.mc;Y.prototype.once=Y.prototype.Pg;Y.prototype.limit=Y.prototype.Le;Y.prototype.limitToFirst=Y.prototype.Me;
	Y.prototype.limitToLast=Y.prototype.Ne;Y.prototype.orderByChild=Y.prototype.Qg;Y.prototype.orderByKey=Y.prototype.Rg;Y.prototype.orderByPriority=Y.prototype.Sg;Y.prototype.orderByValue=Y.prototype.Tg;Y.prototype.startAt=Y.prototype.ce;Y.prototype.endAt=Y.prototype.vd;Y.prototype.equalTo=Y.prototype.tg;Y.prototype.toString=Y.prototype.toString;var Z={};Z.zc=Rh;Z.DataConnection=Z.zc;Rh.prototype.dh=function(a,b){this.Ia("q",{p:a},b)};Z.zc.prototype.simpleListen=Z.zc.prototype.dh;Rh.prototype.sg=function(a,b){this.Ia("echo",{d:a},b)};Z.zc.prototype.echo=Z.zc.prototype.sg;Rh.prototype.interrupt=Rh.prototype.Cb;Z.dg=Fh;Z.RealTimeConnection=Z.dg;Fh.prototype.sendRequest=Fh.prototype.Ia;Fh.prototype.close=Fh.prototype.close;
	Z.Cg=function(a){var b=Rh.prototype.put;Rh.prototype.put=function(c,d,e,f){p(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Rh.prototype.put=b}};Z.hijackHash=Z.Cg;Z.cg=dd;Z.ConnectionTarget=Z.cg;Z.wa=function(a){return a.wa()};Z.queryIdentifier=Z.wa;Z.Fg=function(a){return a.k.Va.ba};Z.listens=Z.Fg;Z.ze=function(a){a.ze()};Z.forceRestClient=Z.ze;function X(a,b){var c,d,e;if(a instanceof Ji)c=a,d=b;else{D("new Firebase",1,2,arguments.length);d=sd(arguments[0]);c=d.fh;"firebase"===d.domain&&rd(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c&&"undefined"!=c||rd("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.ob||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
	c=new dd(d.host,d.ob,c,"ws"===d.scheme||"wss"===d.scheme);d=new P(d.bd);e=d.toString();var f;!(f=!q(c.host)||0===c.host.length||!eg(c.lc))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(q(e)&&0!==e.length&&!cg.test(e)));if(f)throw Error(E("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof aj)e=b;else if(q(b))e=aj.yb(),c.Rd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
	else e=aj.yb();f=c.toString();var g=z(e.sc,f);g||(g=new Ji(c,e.ag),e.sc[f]=g);c=g}Y.call(this,c,d,De,!1);this.then=void 0;this["catch"]=void 0}ka(X,Y);var fj=X,gj=["Firebase"],hj=n;gj[0]in hj||!hj.execScript||hj.execScript("var "+gj[0]);for(var ij;gj.length&&(ij=gj.shift());)!gj.length&&p(fj)?hj[ij]=fj:hj=hj[ij]?hj[ij]:hj[ij]={};X.goOffline=function(){D("Firebase.goOffline",0,0,arguments.length);aj.yb().Cb()};X.goOnline=function(){D("Firebase.goOnline",0,0,arguments.length);aj.yb().vc()};
	X.enableLogging=od;X.ServerValue={TIMESTAMP:{".sv":"timestamp"}};X.SDK_VERSION=Eb;X.INTERNAL=U;X.Context=aj;X.TEST_ACCESS=Z;X.prototype.name=function(){S("Firebase.name() being deprecated. Please use Firebase.key() instead.");D("Firebase.name",0,0,arguments.length);return this.key()};X.prototype.name=X.prototype.name;X.prototype.key=function(){D("Firebase.key",0,0,arguments.length);return this.path.e()?null:me(this.path)};X.prototype.key=X.prototype.key;
	X.prototype.o=function(a){D("Firebase.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof P))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));ng("Firebase.child",b)}else ng("Firebase.child",a);return new X(this.k,this.path.o(a))};X.prototype.child=X.prototype.o;X.prototype.parent=function(){D("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new X(this.k,a)};X.prototype.parent=X.prototype.parent;
	X.prototype.root=function(){D("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};X.prototype.root=X.prototype.root;X.prototype.set=function(a,b){D("Firebase.set",1,2,arguments.length);og("Firebase.set",this.path);gg("Firebase.set",a,this.path,!1);F("Firebase.set",2,b,!0);var c=new B;this.k.Ob(this.path,a,null,C(c,b));return c.D};X.prototype.set=X.prototype.set;
	X.prototype.update=function(a,b){D("Firebase.update",1,2,arguments.length);og("Firebase.update",this.path);if(da(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}jg("Firebase.update",a,this.path);F("Firebase.update",2,b,!0);c=new B;this.k.update(this.path,a,C(c,b));return c.D};
	X.prototype.update=X.prototype.update;X.prototype.Ob=function(a,b,c){D("Firebase.setWithPriority",2,3,arguments.length);og("Firebase.setWithPriority",this.path);gg("Firebase.setWithPriority",a,this.path,!1);kg("Firebase.setWithPriority",2,b);F("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";var d=new B;this.k.Ob(this.path,a,b,C(d,c));return d.D};X.prototype.setWithPriority=X.prototype.Ob;
	X.prototype.remove=function(a){D("Firebase.remove",0,1,arguments.length);og("Firebase.remove",this.path);F("Firebase.remove",1,a,!0);return this.set(null,a)};X.prototype.remove=X.prototype.remove;
	X.prototype.transaction=function(a,b,c){D("Firebase.transaction",1,3,arguments.length);og("Firebase.transaction",this.path);F("Firebase.transaction",1,a,!1);F("Firebase.transaction",2,b,!0);if(p(c)&&"boolean"!=typeof c)throw Error(E("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new B;r(b)&&Nb(d.D);Si(this.k,this.path,a,function(a,c,g){a?
	d.reject(a):d.resolve(new ei(c,g));r(b)&&b(a,c,g)},c);return d.D};X.prototype.transaction=X.prototype.transaction;X.prototype.$g=function(a,b){D("Firebase.setPriority",1,2,arguments.length);og("Firebase.setPriority",this.path);kg("Firebase.setPriority",1,a);F("Firebase.setPriority",2,b,!0);var c=new B;this.k.Ob(this.path.o(".priority"),a,null,C(c,b));return c.D};X.prototype.setPriority=X.prototype.$g;
	X.prototype.push=function(a,b){D("Firebase.push",0,2,arguments.length);og("Firebase.push",this.path);gg("Firebase.push",a,this.path,!0);F("Firebase.push",2,b,!0);var c=Li(this.k),d=hf(c),c=this.o(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.o(d)});c.then=u(f.then,f);c["catch"]=u(f.then,f,void 0);r(b)&&Nb(f)}return c};X.prototype.push=X.prototype.push;X.prototype.lb=function(){og("Firebase.onDisconnect",this.path);return new V(this.k,this.path)};X.prototype.onDisconnect=X.prototype.lb;
	X.prototype.O=function(a,b,c){S("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");D("Firebase.auth",1,3,arguments.length);pg("Firebase.auth",a);F("Firebase.auth",2,b,!0);F("Firebase.auth",3,b,!0);var d=new B;dh(this.k.O,a,{},{remember:"none"},C(d,b),c);return d.D};X.prototype.auth=X.prototype.O;X.prototype.je=function(a){D("Firebase.unauth",0,1,arguments.length);F("Firebase.unauth",1,a,!0);var b=new B;eh(this.k.O,C(b,a));return b.D};X.prototype.unauth=X.prototype.je;
	X.prototype.Be=function(){D("Firebase.getAuth",0,0,arguments.length);return this.k.O.Be()};X.prototype.getAuth=X.prototype.Be;X.prototype.Jg=function(a,b){D("Firebase.onAuth",1,2,arguments.length);F("Firebase.onAuth",1,a,!1);Qb("Firebase.onAuth",2,b);this.k.O.Ib("auth_status",a,b)};X.prototype.onAuth=X.prototype.Jg;X.prototype.Ig=function(a,b){D("Firebase.offAuth",1,2,arguments.length);F("Firebase.offAuth",1,a,!1);Qb("Firebase.offAuth",2,b);this.k.O.mc("auth_status",a,b)};X.prototype.offAuth=X.prototype.Ig;
	X.prototype.hg=function(a,b,c){D("Firebase.authWithCustomToken",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);pg("Firebase.authWithCustomToken",a);F("Firebase.authWithCustomToken",2,b,!0);sg("Firebase.authWithCustomToken",3,c,!0);var d=new B;dh(this.k.O,a,{},c||{},C(d,b));return d.D};X.prototype.authWithCustomToken=X.prototype.hg;
	X.prototype.ig=function(a,b,c){D("Firebase.authWithOAuthPopup",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);rg("Firebase.authWithOAuthPopup",a);F("Firebase.authWithOAuthPopup",2,b,!0);sg("Firebase.authWithOAuthPopup",3,c,!0);var d=new B;ih(this.k.O,a,c,C(d,b));return d.D};X.prototype.authWithOAuthPopup=X.prototype.ig;
	X.prototype.jg=function(a,b,c){D("Firebase.authWithOAuthRedirect",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);rg("Firebase.authWithOAuthRedirect",a);F("Firebase.authWithOAuthRedirect",2,b,!1);sg("Firebase.authWithOAuthRedirect",3,c,!0);var d=new B,e=this.k.O,f=c,g=C(d,b);gh(e);var k=[Qg],f=Ag(f);"anonymous"===a||"firebase"===a?T(g,Sg("TRANSPORT_UNAVAILABLE")):(cd.set("redirect_client_options",f.qd),hh(e,k,"/auth/"+a,f,g));return d.D};X.prototype.authWithOAuthRedirect=X.prototype.jg;
	X.prototype.kg=function(a,b,c,d){D("Firebase.authWithOAuthToken",2,4,arguments.length);3===arguments.length&&Hb(c)&&(d=c,c=void 0);rg("Firebase.authWithOAuthToken",a);F("Firebase.authWithOAuthToken",3,c,!0);sg("Firebase.authWithOAuthToken",4,d,!0);var e=new B;q(b)?(qg("Firebase.authWithOAuthToken",2,b),fh(this.k.O,a+"/token",{access_token:b},d,C(e,c))):(sg("Firebase.authWithOAuthToken",2,b,!1),fh(this.k.O,a+"/token",b,d,C(e,c)));return e.D};X.prototype.authWithOAuthToken=X.prototype.kg;
	X.prototype.gg=function(a,b){D("Firebase.authAnonymously",0,2,arguments.length);1===arguments.length&&Hb(a)&&(b=a,a=void 0);F("Firebase.authAnonymously",1,a,!0);sg("Firebase.authAnonymously",2,b,!0);var c=new B;fh(this.k.O,"anonymous",{},b,C(c,a));return c.D};X.prototype.authAnonymously=X.prototype.gg;
	X.prototype.lg=function(a,b,c){D("Firebase.authWithPassword",1,3,arguments.length);2===arguments.length&&Hb(b)&&(c=b,b=void 0);sg("Firebase.authWithPassword",1,a,!1);tg("Firebase.authWithPassword",a,"email");tg("Firebase.authWithPassword",a,"password");F("Firebase.authWithPassword",2,b,!0);sg("Firebase.authWithPassword",3,c,!0);var d=new B;fh(this.k.O,"password",a,c,C(d,b));return d.D};X.prototype.authWithPassword=X.prototype.lg;
	X.prototype.ve=function(a,b){D("Firebase.createUser",1,2,arguments.length);sg("Firebase.createUser",1,a,!1);tg("Firebase.createUser",a,"email");tg("Firebase.createUser",a,"password");F("Firebase.createUser",2,b,!0);var c=new B;this.k.O.ve(a,C(c,b));return c.D};X.prototype.createUser=X.prototype.ve;
	X.prototype.Xe=function(a,b){D("Firebase.removeUser",1,2,arguments.length);sg("Firebase.removeUser",1,a,!1);tg("Firebase.removeUser",a,"email");tg("Firebase.removeUser",a,"password");F("Firebase.removeUser",2,b,!0);var c=new B;this.k.O.Xe(a,C(c,b));return c.D};X.prototype.removeUser=X.prototype.Xe;
	X.prototype.se=function(a,b){D("Firebase.changePassword",1,2,arguments.length);sg("Firebase.changePassword",1,a,!1);tg("Firebase.changePassword",a,"email");tg("Firebase.changePassword",a,"oldPassword");tg("Firebase.changePassword",a,"newPassword");F("Firebase.changePassword",2,b,!0);var c=new B;this.k.O.se(a,C(c,b));return c.D};X.prototype.changePassword=X.prototype.se;
	X.prototype.re=function(a,b){D("Firebase.changeEmail",1,2,arguments.length);sg("Firebase.changeEmail",1,a,!1);tg("Firebase.changeEmail",a,"oldEmail");tg("Firebase.changeEmail",a,"newEmail");tg("Firebase.changeEmail",a,"password");F("Firebase.changeEmail",2,b,!0);var c=new B;this.k.O.re(a,C(c,b));return c.D};X.prototype.changeEmail=X.prototype.re;
	X.prototype.Ze=function(a,b){D("Firebase.resetPassword",1,2,arguments.length);sg("Firebase.resetPassword",1,a,!1);tg("Firebase.resetPassword",a,"email");F("Firebase.resetPassword",2,b,!0);var c=new B;this.k.O.Ze(a,C(c,b));return c.D};X.prototype.resetPassword=X.prototype.Ze;})();

	module.exports = Firebase;


/***/ },
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ServiceConfig;
	function ServiceConfig() {
	    var getFirebaseBaseUrl = function getFirebaseBaseUrl() {
	        return "https://vstrello.firebaseio.com/";
	    };

	    //Public API
	    return {
	        getFirebaseBaseUrl: getFirebaseBaseUrl
	    };
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ServiceEvents;
	function ServiceEvents() {
	    //private
	    var events = new Map();

	    //public API
	    return {
	        subscribe: function subscribe(event, listener) {
	            getEvent(event).add(listener);
	        },
	        unsubscribe: function unsubscribe(event, listener) {
	            getEvent(event).delete(listener);
	        },
	        publish: function publish(event, data) {
	            getEvent(event).forEach(function (listener) {
	                return listener(data);
	            });
	        }
	    };

	    function getEvent(event) {
	        if (!events.has(event)) events.set(event, new Set());

	        return events.get(event);
	    }
	}

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24)(__webpack_require__(141).runInContext());


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var listing = __webpack_require__(25),
	    mapping = __webpack_require__(26);

	/*----------------------------------------------------------------------------*/

	/**
	 * Converts `func` of `name` to an auto-curried iteratee-first version. If `name`
	 * is an object the methods on it will be converted and the object returned.
	 *
	 * @param {string} name The name of the function to wrap.
	 * @param {Function} func The function to wrap.
	 * @returns {Function|Object} Returns the new converted function or object of
	 *  converted functions.
	 */
	function convert(name, func) {
	  if (!func) {
	    func = name;
	    name = null;
	  }
	  if (func == null) {
	    throw new TypeError;
	  }
	  var isLib = typeof func.VERSION == 'string';

	  var _ = isLib ? func : {
	    'ary': __webpack_require__(27),
	    'callback': __webpack_require__(71),
	    'curry': __webpack_require__(111),
	    'each': __webpack_require__(85),
	    'isFunction': __webpack_require__(34),
	    'keys': __webpack_require__(81),
	    'rearg': __webpack_require__(113)
	  };

	  var ary = _.ary,
	      curry = _.curry,
	      each = _.each,
	      isFunction = _.isFunction,
	      keys = _.keys,
	      rearg = _.rearg;

	  var baseAry = function(func, n) {
	    return function() {
	      var args = arguments,
	          length = Math.min(args.length, n);

	      switch (length) {
	        case 1: return func(args[0]);
	        case 2: return func(args[0], args[1]);
	        case 0: return func();
	      }
	      args = Array(length);
	      while (length--) {
	        args[length] = arguments[length];
	      }
	      return func.apply(undefined, args);
	    };
	  };

	  var wrappers = {
	    'callback': function(callback) {
	      return function(func, thisArg, argCount) {
	        argCount = argCount > 2 ? (argCount - 2) : 1;
	        func = callback(func, thisArg);
	        var length = func.length;
	        return (length && length <= argCount) ? func : baseAry(func, argCount);
	      };
	    },
	    'mixin': function(mixin) {
	      return function(source) {
	        var func = this;
	        if (!isFunction(func)) {
	          return mixin(func, source);
	        }
	        var methods = [],
	            methodNames = [];

	        each(keys(source), function(key) {
	          var value = source[key];
	          if (isFunction(value)) {
	            methodNames.push(key);
	            methods.push(func.prototype[key]);
	          }
	        });

	        mixin(func, source);

	        each(methodNames, function(methodName, index) {
	          var method = methods[index];
	          if (isFunction(method)) {
	            func.prototype[methodName] = method;
	          } else {
	            delete func.prototype[methodName];
	          }
	        });
	        return func;
	      };
	    },
	    'runInContext': function(runInContext) {
	      return function(context) {
	        return convert(runInContext(context));
	      };
	    }
	  };

	  var wrap = function(name, func) {
	    var wrapper = wrappers[name];
	    if (wrapper) {
	      return wrapper(func);
	    }
	    var result;
	    each(listing.caps, function(cap) {
	      each(mapping.aryMethodMap[cap], function(otherName) {
	        if (name == otherName) {
	          result = ary(func, cap);
	          if (cap > 1 && !mapping.skipReargMap[name]) {
	            result = rearg(result, mapping.aryReargMap[cap]);
	          }
	          return !(result = curry(result, cap));
	        }
	      });
	      return !result;
	    });
	    return result || func;
	  };

	  if (!isLib) {
	    return wrap(name, func);
	  }
	  // Disable custom `_.indexOf` use by these methods.
	  _.mixin({
	    'difference': __webpack_require__(117),
	    'includes': __webpack_require__(125),
	    'intersection': __webpack_require__(128),
	    'omit': __webpack_require__(129),
	    'pull': __webpack_require__(134),
	    'union': __webpack_require__(135),
	    'uniq': __webpack_require__(137),
	    'without': __webpack_require__(139),
	    'xor': __webpack_require__(140)
	  });

	  var pairs = [];
	  each(listing.caps, function(cap) {
	    // Iterate over methods for the current ary cap.
	    each(mapping.aryMethodMap[cap], function(name) {
	      var func = _[mapping.keyMap[name] || name];
	      if (func) {
	        // Wrap the lodash method and its aliases.
	        var wrapped = wrap(name, func);
	        pairs.push([name, wrapped]);
	        each(mapping.aliasMap[name], function(alias) { pairs.push([alias, wrapped]); });
	      }
	    });
	  });

	  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
	  _.callback = wrappers.callback(_.callback);
	  _.iteratee = _.callback;
	  _.mixin = wrappers.mixin(_.mixin);
	  _.runInContext = wrappers.runInContext(_.runInContext);

	  each(pairs, function(pair) { _[pair[0]] = pair[1]; });
	  return _;
	}

	module.exports = convert;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/** Used to iterate `mapping.aryMethodMap` keys. */
	exports.caps = ['1', '2', '3', '4'];


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {

	  /** Used to map method names to their aliases. */
	  'aliasMap': {
	    'assign': ['extend'],
	    'callback': ['iteratee'],
	    'every': ['all'],
	    'filter': ['select'],
	    'find': ['detect'],
	    'first': ['head'],
	    'forEach': ['each'],
	    'forEachRight': ['eachRight'],
	    'includes': ['contains', 'include'],
	    'isEqual': ['eq'],
	    'map': ['collect'],
	    'reduce': ['foldl', 'inject'],
	    'reduceRight': ['foldr'],
	    'rest': ['tail'],
	    'some': ['any'],
	    'uniq': ['unique'],
	    'zipObject': ['object']
	  },

	  /** Used to map ary to method names. */
	  'aryMethodMap': {
	    1: (
	      'attempt,clone,create,curry,flatten,invert,max,memoize,method,methodOf,min,' +
	      'restParam,sample,sum,template,trim,trimLeft,trimRight,uniq,words').split(','),
	    2: (
	      'add,after,ary,assign,at,before,bind,bindKey,chunk,countBy,curryN,debounce,' +
	      'defaults,defaultsDeep,delay,difference,drop,dropRight,dropRightWhile,' +
	      'dropWhile,endsWith,every,filter,find,findIndex,findKey,findLast,findLastIndex,' +
	      'findLastKey,findWhere,forEach,forEachRight,forIn,forInRight,forOwn,forOwnRight,' +
	      'get,groupBy,gt,gte,has,includes,indexBy,indexOf,intersection,invoke,isEqual,' +
	      'isMatch,lastIndexOf,lt,lte,map,mapKeys,mapValues,matchesProperty,maxBy,' +
	      'merge,minBy,omit,pad,padLeft,padRight,parseInt,partition,pick,pluck,pull,' +
	      'pullAt,random,range,rearg,reject,remove,repeat,result,set,some,sortBy,' +
	      'sortByAll,sortedIndex,sortedLastIndex,startsWith,sumBy,take,takeRight,' +
	      'takeRightWhile,takeWhile,throttle,times,trunc,union,uniqBy,uniqueId,' +
	      'unzipWith,where,without,wrap,xor,zip,zipObject').split(','),
	    3:
	      'slice,sortByOrder,reduce,reduceRight,transform,zipWith'.split(','),
	    4:
	      ['fill', 'inRange']
	  },

	  /** Used to map ary to rearg configs. */
	  'aryReargMap': {
	    2: [1, 0],
	    3: [2, 0, 1],
	    4: [3, 2, 0, 1]
	  },

	  /** Used to map keys to other keys. */
	  'keyMap': {
	    'curryN': 'curry',
	    'maxBy': 'max',
	    'minBy': 'min',
	    'sumBy': 'sum',
	    'uniqBy': 'uniq'
	  },

	  /** Used to track methods that skip `_.rearg`. */
	  'skipReargMap': {
	    'difference': true,
	    'range': true,
	    'random': true,
	    'zipObject': true
	  }
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var createWrapper = __webpack_require__(28),
	    isIterateeCall = __webpack_require__(64);

	/** Used to compose bitmasks for wrapper metadata. */
	var ARY_FLAG = 128;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that accepts up to `n` arguments ignoring any
	 * additional arguments.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to cap arguments for.
	 * @param {number} [n=func.length] The arity cap.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	 * // => [6, 8, 10]
	 */
	function ary(func, n, guard) {
	  if (guard && isIterateeCall(func, n, guard)) {
	    n = undefined;
	  }
	  n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	  return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	}

	module.exports = ary;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(29),
	    createBindWrapper = __webpack_require__(38),
	    createHybridWrapper = __webpack_require__(41),
	    createPartialWrapper = __webpack_require__(62),
	    getData = __webpack_require__(48),
	    mergeData = __webpack_require__(63),
	    setData = __webpack_require__(60);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that either curries or invokes `func` with optional
	 * `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to reference.
	 * @param {number} bitmask The bitmask of flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - `_.bind`
	 *     2 - `_.bindKey`
	 *     4 - `_.curry` or `_.curryRight` of a bound function
	 *     8 - `_.curry`
	 *    16 - `_.curryRight`
	 *    32 - `_.partial`
	 *    64 - `_.partialRight`
	 *   128 - `_.rearg`
	 *   256 - `_.ary`
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to be partially applied.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	  var isBindKey = bitmask & BIND_KEY_FLAG;
	  if (!isBindKey && typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var length = partials ? partials.length : 0;
	  if (!length) {
	    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	    partials = holders = undefined;
	  }
	  length -= (holders ? holders.length : 0);
	  if (bitmask & PARTIAL_RIGHT_FLAG) {
	    var partialsRight = partials,
	        holdersRight = holders;

	    partials = holders = undefined;
	  }
	  var data = isBindKey ? undefined : getData(func),
	      newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	  if (data) {
	    mergeData(newData, data);
	    bitmask = newData[1];
	    arity = newData[9];
	  }
	  newData[9] = arity == null
	    ? (isBindKey ? 0 : func.length)
	    : (nativeMax(arity - length, 0) || 0);

	  if (bitmask == BIND_FLAG) {
	    var result = createBindWrapper(newData[0], newData[2]);
	  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	    result = createPartialWrapper.apply(undefined, newData);
	  } else {
	    result = createHybridWrapper.apply(undefined, newData);
	  }
	  var setter = data ? baseSetData : setData;
	  return setter(result, newData);
	}

	module.exports = createWrapper;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(30),
	    metaMap = __webpack_require__(31);

	/**
	 * The base implementation of `setData` without support for hot loop detection.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetData = !metaMap ? identity : function(func, data) {
	  metaMap.set(func, data);
	  return func;
	};

	module.exports = baseSetData;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var getNative = __webpack_require__(32);

	/** Native method references. */
	var WeakMap = getNative(global, 'WeakMap');

	/** Used to store function metadata. */
	var metaMap = WeakMap && new WeakMap;

	module.exports = metaMap;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(33);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(34),
	    isHostObject = __webpack_require__(36),
	    isObjectLike = __webpack_require__(37);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}

	module.exports = isNative;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	var isHostObject = (function() {
	  try {
	    Object({ 'toString': 0 } + '');
	  } catch(e) {
	    return function() { return false; };
	  }
	  return function(value) {
	    // IE < 9 presents many host objects as `Object` objects that can coerce
	    // to strings despite having improperly defined `toString` methods.
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  };
	}());

	module.exports = isHostObject;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var createCtorWrapper = __webpack_require__(39);

	/**
	 * Creates a function that wraps `func` and invokes it with the `this`
	 * binding of `thisArg`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @returns {Function} Returns the new bound function.
	 */
	function createBindWrapper(func, thisArg) {
	  var Ctor = createCtorWrapper(func);

	  function wrapper() {
	    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(thisArg, arguments);
	  }
	  return wrapper;
	}

	module.exports = createBindWrapper;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(40),
	    isObject = __webpack_require__(35);

	/**
	 * Creates a function that produces an instance of `Ctor` regardless of
	 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	 *
	 * @private
	 * @param {Function} Ctor The constructor to wrap.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createCtorWrapper(Ctor) {
	  return function() {
	    // Use a `switch` statement to work with class constructors.
	    // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	    // for more details.
	    var args = arguments;
	    switch (args.length) {
	      case 0: return new Ctor;
	      case 1: return new Ctor(args[0]);
	      case 2: return new Ctor(args[0], args[1]);
	      case 3: return new Ctor(args[0], args[1], args[2]);
	      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	    }
	    var thisBinding = baseCreate(Ctor.prototype),
	        result = Ctor.apply(thisBinding, args);

	    // Mimic the constructor's `return` behavior.
	    // See https://es5.github.io/#x13.2.2 for more details.
	    return isObject(result) ? result : thisBinding;
	  };
	}

	module.exports = createCtorWrapper;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(prototype) {
	    if (isObject(prototype)) {
	      object.prototype = prototype;
	      var result = new object;
	      object.prototype = undefined;
	    }
	    return result || {};
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var arrayCopy = __webpack_require__(42),
	    composeArgs = __webpack_require__(43),
	    composeArgsRight = __webpack_require__(44),
	    createCtorWrapper = __webpack_require__(39),
	    isLaziable = __webpack_require__(45),
	    reorder = __webpack_require__(57),
	    replaceHolders = __webpack_require__(59),
	    setData = __webpack_require__(60);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    BIND_KEY_FLAG = 2,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    CURRY_RIGHT_FLAG = 16,
	    PARTIAL_FLAG = 32,
	    PARTIAL_RIGHT_FLAG = 64,
	    ARY_FLAG = 128;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that wraps `func` and invokes it with optional `this`
	 * binding of, partial application, and currying.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to reference.
	 * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	 * @param {Array} [holders] The `partials` placeholder indexes.
	 * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	 * @param {Array} [argPos] The argument positions of the new function.
	 * @param {number} [ary] The arity cap of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new wrapped function.
	 */
	function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	  var isAry = bitmask & ARY_FLAG,
	      isBind = bitmask & BIND_FLAG,
	      isBindKey = bitmask & BIND_KEY_FLAG,
	      isCurry = bitmask & CURRY_FLAG,
	      isCurryBound = bitmask & CURRY_BOUND_FLAG,
	      isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	      Ctor = isBindKey ? undefined : createCtorWrapper(func);

	  function wrapper() {
	    // Avoid `arguments` object use disqualifying optimizations by
	    // converting it to an array before providing it to other functions.
	    var length = arguments.length,
	        index = length,
	        args = Array(length);

	    while (index--) {
	      args[index] = arguments[index];
	    }
	    if (partials) {
	      args = composeArgs(args, partials, holders);
	    }
	    if (partialsRight) {
	      args = composeArgsRight(args, partialsRight, holdersRight);
	    }
	    if (isCurry || isCurryRight) {
	      var placeholder = wrapper.placeholder,
	          argsHolders = replaceHolders(args, placeholder);

	      length -= argsHolders.length;
	      if (length < arity) {
	        var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	            newArity = nativeMax(arity - length, 0),
	            newsHolders = isCurry ? argsHolders : undefined,
	            newHoldersRight = isCurry ? undefined : argsHolders,
	            newPartials = isCurry ? args : undefined,
	            newPartialsRight = isCurry ? undefined : args;

	        bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	        bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	        if (!isCurryBound) {
	          bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	        }
	        var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	            result = createHybridWrapper.apply(undefined, newData);

	        if (isLaziable(func)) {
	          setData(result, newData);
	        }
	        result.placeholder = placeholder;
	        return result;
	      }
	    }
	    var thisBinding = isBind ? thisArg : this,
	        fn = isBindKey ? thisBinding[func] : func;

	    if (argPos) {
	      args = reorder(args, argPos);
	    }
	    if (isAry && ary < args.length) {
	      args.length = ary;
	    }
	    if (this && this !== global && this instanceof wrapper) {
	      fn = Ctor || createCtorWrapper(func);
	    }
	    return fn.apply(thisBinding, args);
	  }
	  return wrapper;
	}

	module.exports = createHybridWrapper;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = arrayCopy;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates an array that is the composition of partially applied arguments,
	 * placeholders, and provided arguments into a single array of arguments.
	 *
	 * @private
	 * @param {Array|Object} args The provided arguments.
	 * @param {Array} partials The arguments to prepend to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgs(args, partials, holders) {
	  var holdersLength = holders.length,
	      argsIndex = -1,
	      argsLength = nativeMax(args.length - holdersLength, 0),
	      leftIndex = -1,
	      leftLength = partials.length,
	      result = Array(leftLength + argsLength);

	  while (++leftIndex < leftLength) {
	    result[leftIndex] = partials[leftIndex];
	  }
	  while (++argsIndex < holdersLength) {
	    result[holders[argsIndex]] = args[argsIndex];
	  }
	  while (argsLength--) {
	    result[leftIndex++] = args[argsIndex++];
	  }
	  return result;
	}

	module.exports = composeArgs;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This function is like `composeArgs` except that the arguments composition
	 * is tailored for `_.partialRight`.
	 *
	 * @private
	 * @param {Array|Object} args The provided arguments.
	 * @param {Array} partials The arguments to append to those provided.
	 * @param {Array} holders The `partials` placeholder indexes.
	 * @returns {Array} Returns the new array of composed arguments.
	 */
	function composeArgsRight(args, partials, holders) {
	  var holdersIndex = -1,
	      holdersLength = holders.length,
	      argsIndex = -1,
	      argsLength = nativeMax(args.length - holdersLength, 0),
	      rightIndex = -1,
	      rightLength = partials.length,
	      result = Array(argsLength + rightLength);

	  while (++argsIndex < argsLength) {
	    result[argsIndex] = args[argsIndex];
	  }
	  var offset = argsIndex;
	  while (++rightIndex < rightLength) {
	    result[offset + rightIndex] = partials[rightIndex];
	  }
	  while (++holdersIndex < holdersLength) {
	    result[offset + holders[holdersIndex]] = args[argsIndex++];
	  }
	  return result;
	}

	module.exports = composeArgsRight;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(46),
	    getData = __webpack_require__(48),
	    getFuncName = __webpack_require__(50),
	    lodash = __webpack_require__(52);

	/**
	 * Checks if `func` has a lazy counterpart.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	 */
	function isLaziable(func) {
	  var funcName = getFuncName(func),
	      other = lodash[funcName];

	  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	    return false;
	  }
	  if (func === other) {
	    return true;
	  }
	  var data = getData(other);
	  return !!data && func === data[0];
	}

	module.exports = isLaziable;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(40),
	    baseLodash = __webpack_require__(47);

	/** Used as references for `-Infinity` and `Infinity`. */
	var POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	/**
	 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 */
	function LazyWrapper(value) {
	  this.__wrapped__ = value;
	  this.__actions__ = [];
	  this.__dir__ = 1;
	  this.__filtered__ = false;
	  this.__iteratees__ = [];
	  this.__takeCount__ = POSITIVE_INFINITY;
	  this.__views__ = [];
	}

	LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	LazyWrapper.prototype.constructor = LazyWrapper;

	module.exports = LazyWrapper;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * The function whose prototype all chaining wrappers inherit from.
	 *
	 * @private
	 */
	function baseLodash() {
	  // No operation performed.
	}

	module.exports = baseLodash;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var metaMap = __webpack_require__(31),
	    noop = __webpack_require__(49);

	/**
	 * Gets metadata for `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {*} Returns the metadata for `func`.
	 */
	var getData = !metaMap ? noop : function(func) {
	  return metaMap.get(func);
	};

	module.exports = getData;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var realNames = __webpack_require__(51);

	/**
	 * Gets the name of `func`.
	 *
	 * @private
	 * @param {Function} func The function to query.
	 * @returns {string} Returns the function name.
	 */
	function getFuncName(func) {
	  var result = (func.name + ''),
	      array = realNames[result],
	      length = array ? array.length : 0;

	  while (length--) {
	    var data = array[length],
	        otherFunc = data.func;
	    if (otherFunc == null || otherFunc == func) {
	      return data.name;
	    }
	  }
	  return result;
	}

	module.exports = getFuncName;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/** Used to lookup unminified function names. */
	var realNames = {};

	module.exports = realNames;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(46),
	    LodashWrapper = __webpack_require__(53),
	    baseLodash = __webpack_require__(47),
	    isArray = __webpack_require__(54),
	    isObjectLike = __webpack_require__(37),
	    wrapperClone = __webpack_require__(56);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	 * Methods that operate on and return arrays, collections, and functions can
	 * be chained together. Methods that retrieve a single value or may return a
	 * primitive value will automatically end the chain returning the unwrapped
	 * value. Explicit chaining may be enabled using `_.chain`. The execution of
	 * chained methods is lazy, that is, execution is deferred until `_#value`
	 * is implicitly or explicitly called.
	 *
	 * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	 * fusion is an optimization strategy which merge iteratee calls; this can help
	 * to avoid the creation of intermediate data structures and greatly reduce the
	 * number of iteratee executions.
	 *
	 * Chaining is supported in custom builds as long as the `_#value` method is
	 * directly or indirectly included in the build.
	 *
	 * In addition to lodash methods, wrappers have `Array` and `String` methods.
	 *
	 * The wrapper `Array` methods are:
	 * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	 * `splice`, and `unshift`
	 *
	 * The wrapper `String` methods are:
	 * `replace` and `split`
	 *
	 * The wrapper methods that support shortcut fusion are:
	 * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	 * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	 * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	 * and `where`
	 *
	 * The chainable wrapper methods are:
	 * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	 * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	 * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	 * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	 * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	 * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	 * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	 * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	 * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	 * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	 * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	 * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	 * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	 * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	 * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	 * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	 * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	 *
	 * The wrapper methods that are **not** chainable by default are:
	 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	 * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	 * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	 * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	 * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	 * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	 * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	 * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	 * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	 * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	 * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	 * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	 * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	 * `unescape`, `uniqueId`, `value`, and `words`
	 *
	 * The wrapper method `sample` will return a wrapped value when `n` is provided,
	 * otherwise an unwrapped value is returned.
	 *
	 * @name _
	 * @constructor
	 * @category Chain
	 * @param {*} value The value to wrap in a `lodash` instance.
	 * @returns {Object} Returns the new `lodash` wrapper instance.
	 * @example
	 *
	 * var wrapped = _([1, 2, 3]);
	 *
	 * // returns an unwrapped value
	 * wrapped.reduce(function(total, n) {
	 *   return total + n;
	 * });
	 * // => 6
	 *
	 * // returns a wrapped value
	 * var squares = wrapped.map(function(n) {
	 *   return n * n;
	 * });
	 *
	 * _.isArray(squares);
	 * // => false
	 *
	 * _.isArray(squares.value());
	 * // => true
	 */
	function lodash(value) {
	  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	    if (value instanceof LodashWrapper) {
	      return value;
	    }
	    if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	      return wrapperClone(value);
	    }
	  }
	  return new LodashWrapper(value);
	}

	// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype = baseLodash.prototype;

	module.exports = lodash;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(40),
	    baseLodash = __webpack_require__(47);

	/**
	 * The base constructor for creating `lodash` wrapper objects.
	 *
	 * @private
	 * @param {*} value The value to wrap.
	 * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	 * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	 */
	function LodashWrapper(value, chainAll, actions) {
	  this.__wrapped__ = value;
	  this.__actions__ = actions || [];
	  this.__chain__ = !!chainAll;
	}

	LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	LodashWrapper.prototype.constructor = LodashWrapper;

	module.exports = LodashWrapper;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    isLength = __webpack_require__(55),
	    isObjectLike = __webpack_require__(37);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var LazyWrapper = __webpack_require__(46),
	    LodashWrapper = __webpack_require__(53),
	    arrayCopy = __webpack_require__(42);

	/**
	 * Creates a clone of `wrapper`.
	 *
	 * @private
	 * @param {Object} wrapper The wrapper to clone.
	 * @returns {Object} Returns the cloned wrapper.
	 */
	function wrapperClone(wrapper) {
	  return wrapper instanceof LazyWrapper
	    ? wrapper.clone()
	    : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	}

	module.exports = wrapperClone;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(42),
	    isIndex = __webpack_require__(58);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Reorder `array` according to the specified indexes where the element at
	 * the first index is assigned as the first element, the element at
	 * the second index is assigned as the second element, and so on.
	 *
	 * @private
	 * @param {Array} array The array to reorder.
	 * @param {Array} indexes The arranged array indexes.
	 * @returns {Array} Returns `array`.
	 */
	function reorder(array, indexes) {
	  var arrLength = array.length,
	      length = nativeMin(indexes.length, arrLength),
	      oldArray = arrayCopy(array);

	  while (length--) {
	    var index = indexes[length];
	    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	  }
	  return array;
	}

	module.exports = reorder;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/**
	 * Replaces all `placeholder` elements in `array` with an internal placeholder
	 * and returns an array of their indexes.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {*} placeholder The placeholder to replace.
	 * @returns {Array} Returns the new array of placeholder indexes.
	 */
	function replaceHolders(array, placeholder) {
	  var index = -1,
	      length = array.length,
	      resIndex = -1,
	      result = [];

	  while (++index < length) {
	    if (array[index] === placeholder) {
	      array[index] = PLACEHOLDER;
	      result[++resIndex] = index;
	    }
	  }
	  return result;
	}

	module.exports = replaceHolders;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetData = __webpack_require__(29),
	    now = __webpack_require__(61);

	/** Used to detect when a function becomes hot. */
	var HOT_COUNT = 150,
	    HOT_SPAN = 16;

	/**
	 * Sets metadata for `func`.
	 *
	 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	 * period of time, it will trip its breaker and transition to an identity function
	 * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	 * for more details.
	 *
	 * @private
	 * @param {Function} func The function to associate metadata with.
	 * @param {*} data The metadata.
	 * @returns {Function} Returns `func`.
	 */
	var setData = (function() {
	  var count = 0,
	      lastCalled = 0;

	  return function(key, value) {
	    var stamp = now(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return key;
	      }
	    } else {
	      count = 0;
	    }
	    return baseSetData(key, value);
	  };
	}());

	module.exports = setData;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	module.exports = now;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var createCtorWrapper = __webpack_require__(39);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1;

	/**
	 * Creates a function that wraps `func` and invokes it with the optional `this`
	 * binding of `thisArg` and the `partials` prepended to those provided to
	 * the wrapper.
	 *
	 * @private
	 * @param {Function} func The function to partially apply arguments to.
	 * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} partials The arguments to prepend to those provided to the new function.
	 * @returns {Function} Returns the new bound function.
	 */
	function createPartialWrapper(func, bitmask, thisArg, partials) {
	  var isBind = bitmask & BIND_FLAG,
	      Ctor = createCtorWrapper(func);

	  function wrapper() {
	    // Avoid `arguments` object use disqualifying optimizations by
	    // converting it to an array before providing it `func`.
	    var argsIndex = -1,
	        argsLength = arguments.length,
	        leftIndex = -1,
	        leftLength = partials.length,
	        args = Array(leftLength + argsLength);

	    while (++leftIndex < leftLength) {
	      args[leftIndex] = partials[leftIndex];
	    }
	    while (argsLength--) {
	      args[leftIndex++] = arguments[++argsIndex];
	    }
	    var fn = (this && this !== global && this instanceof wrapper) ? Ctor : func;
	    return fn.apply(isBind ? thisArg : this, args);
	  }
	  return wrapper;
	}

	module.exports = createPartialWrapper;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(42),
	    composeArgs = __webpack_require__(43),
	    composeArgsRight = __webpack_require__(44),
	    replaceHolders = __webpack_require__(59);

	/** Used to compose bitmasks for wrapper metadata. */
	var BIND_FLAG = 1,
	    CURRY_BOUND_FLAG = 4,
	    CURRY_FLAG = 8,
	    ARY_FLAG = 128,
	    REARG_FLAG = 256;

	/** Used as the internal argument placeholder. */
	var PLACEHOLDER = '__lodash_placeholder__';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * Merges the function metadata of `source` into `data`.
	 *
	 * Merging metadata reduces the number of wrappers required to invoke a function.
	 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	 * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	 * augment function arguments, making the order in which they are executed important,
	 * preventing the merging of metadata. However, we make an exception for a safe
	 * common case where curried functions have `_.ary` and or `_.rearg` applied.
	 *
	 * @private
	 * @param {Array} data The destination metadata.
	 * @param {Array} source The source metadata.
	 * @returns {Array} Returns `data`.
	 */
	function mergeData(data, source) {
	  var bitmask = data[1],
	      srcBitmask = source[1],
	      newBitmask = bitmask | srcBitmask,
	      isCommon = newBitmask < ARY_FLAG;

	  var isCombo =
	    (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	    (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	    (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	  // Exit early if metadata can't be merged.
	  if (!(isCommon || isCombo)) {
	    return data;
	  }
	  // Use source `thisArg` if available.
	  if (srcBitmask & BIND_FLAG) {
	    data[2] = source[2];
	    // Set when currying a bound function.
	    newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	  }
	  // Compose partial arguments.
	  var value = source[3];
	  if (value) {
	    var partials = data[3];
	    data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	  }
	  // Compose partial right arguments.
	  value = source[5];
	  if (value) {
	    partials = data[5];
	    data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	  }
	  // Use source `argPos` if available.
	  value = source[7];
	  if (value) {
	    data[7] = arrayCopy(value);
	  }
	  // Use source `ary` if it's smaller.
	  if (srcBitmask & ARY_FLAG) {
	    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	  }
	  // Use source `arity` if one is not provided.
	  if (data[9] == null) {
	    data[9] = source[9];
	  }
	  // Use source `func` and merge bitmasks.
	  data[0] = source[0];
	  data[1] = newBitmask;

	  return data;
	}

	module.exports = mergeData;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(65),
	    isIndex = __webpack_require__(58),
	    isObject = __webpack_require__(35);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(66),
	    isLength = __webpack_require__(55);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(67);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(68);

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : toObject(object)[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35),
	    isString = __webpack_require__(69),
	    support = __webpack_require__(70);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  if (support.unindexedChars && isString(value)) {
	    var index = -1,
	        length = value.length,
	        result = Object(value);

	    while (++index < length) {
	      result[index] = value.charAt(index);
	    }
	    return result;
	  }
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(37);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var arrayProto = Array.prototype,
	    errorProto = Error.prototype,
	    objectProto = Object.prototype;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/**
	 * An object environment feature flags.
	 *
	 * @static
	 * @memberOf _
	 * @type Object
	 */
	var support = {};

	(function(x) {
	  var Ctor = function() { this.x = x; },
	      object = { '0': x, 'length': x },
	      props = [];

	  Ctor.prototype = { 'valueOf': x, 'y': x };
	  for (var key in new Ctor) { props.push(key); }

	  /**
	   * Detect if `name` or `message` properties of `Error.prototype` are
	   * enumerable by default (IE < 9, Safari < 5.1).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
	    propertyIsEnumerable.call(errorProto, 'name');

	  /**
	   * Detect if `prototype` properties are enumerable by default.
	   *
	   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
	   * (if the prototype or a property on the prototype has been set)
	   * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
	   * property to `true`.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

	  /**
	   * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
	   *
	   * In IE < 9 an object's own properties, shadowing non-enumerable ones,
	   * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.nonEnumShadows = !/valueOf/.test(props);

	  /**
	   * Detect if own properties are iterated after inherited properties (IE < 9).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.ownLast = props[0] != 'x';

	  /**
	   * Detect if `Array#shift` and `Array#splice` augment array-like objects
	   * correctly.
	   *
	   * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
	   * `shift()` and `splice()` functions that fail to remove the last element,
	   * `value[0]`, of array-like objects even though the "length" property is
	   * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
	   * while `splice()` is buggy regardless of mode in IE < 9.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

	  /**
	   * Detect lack of support for accessing string characters by index.
	   *
	   * IE < 8 can't access characters by index. IE 8 can only access characters
	   * by index on string literals, not string objects.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
	}(1, 0));

	module.exports = support;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(72),
	    isIterateeCall = __webpack_require__(64),
	    isObjectLike = __webpack_require__(37),
	    matches = __webpack_require__(100);

	/**
	 * Creates a function that invokes `func` with the `this` binding of `thisArg`
	 * and arguments of the created function. If `func` is a property name the
	 * created callback returns the property value for a given element. If `func`
	 * is an object the created callback returns `true` for elements that contain
	 * the equivalent object properties, otherwise it returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @alias iteratee
	 * @category Utility
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	 * @returns {Function} Returns the callback.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 }
	 * ];
	 *
	 * // wrap to create custom callback shorthands
	 * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	 *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	 *   if (!match) {
	 *     return callback(func, thisArg);
	 *   }
	 *   return function(object) {
	 *     return match[2] == 'gt'
	 *       ? object[match[1]] > match[3]
	 *       : object[match[1]] < match[3];
	 *   };
	 * });
	 *
	 * _.filter(users, 'age__gt36');
	 * // => [{ 'user': 'fred', 'age': 40 }]
	 */
	function callback(func, thisArg, guard) {
	  if (guard && isIterateeCall(func, thisArg, guard)) {
	    thisArg = undefined;
	  }
	  return isObjectLike(func)
	    ? matches(func)
	    : baseCallback(func, thisArg);
	}

	module.exports = callback;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(73),
	    baseMatchesProperty = __webpack_require__(90),
	    bindCallback = __webpack_require__(97),
	    identity = __webpack_require__(30),
	    property = __webpack_require__(98);

	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}

	module.exports = baseCallback;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(74),
	    getMatchData = __webpack_require__(87),
	    toObject = __webpack_require__(68);

	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      object = toObject(object);
	      return object[key] === value && (value !== undefined || (key in object));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(75),
	    toObject = __webpack_require__(68);

	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(76),
	    isObject = __webpack_require__(35),
	    isObjectLike = __webpack_require__(37);

	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}

	module.exports = baseIsEqual;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(77),
	    equalByTag = __webpack_require__(79),
	    equalObjects = __webpack_require__(80),
	    isArray = __webpack_require__(54),
	    isHostObject = __webpack_require__(36),
	    isTypedArray = __webpack_require__(86);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(78);

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalArrays;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(81);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalObjects;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(32),
	    isArrayLike = __webpack_require__(65),
	    isObject = __webpack_require__(35),
	    shimKeys = __webpack_require__(82),
	    support = __webpack_require__(70);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(83),
	    isArray = __webpack_require__(54),
	    isIndex = __webpack_require__(58),
	    isLength = __webpack_require__(55),
	    isString = __webpack_require__(69),
	    keysIn = __webpack_require__(84);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object) || isString(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(65),
	    isObjectLike = __webpack_require__(37);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(85),
	    isArguments = __webpack_require__(83),
	    isArray = __webpack_require__(54),
	    isFunction = __webpack_require__(34),
	    isIndex = __webpack_require__(58),
	    isLength = __webpack_require__(55),
	    isObject = __webpack_require__(35),
	    isString = __webpack_require__(69),
	    support = __webpack_require__(70);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/** Used to fix the JScript `[[DontEnum]]` bug. */
	var shadowProps = [
	  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
	  'toLocaleString', 'toString', 'valueOf'
	];

	/** Used for native method references. */
	var errorProto = Error.prototype,
	    objectProto = Object.prototype,
	    stringProto = String.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to avoid iterating over non-enumerable properties in IE < 9. */
	var nonEnumProps = {};
	nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
	nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
	nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
	nonEnumProps[objectTag] = { 'constructor': true };

	arrayEach(shadowProps, function(key) {
	  for (var tag in nonEnumProps) {
	    if (hasOwnProperty.call(nonEnumProps, tag)) {
	      var props = nonEnumProps[tag];
	      props[key] = hasOwnProperty.call(props, key);
	    }
	  }
	});

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;

	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
	      isProto = proto === object,
	      result = Array(length),
	      skipIndexes = length > 0,
	      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
	      skipProto = support.enumPrototypes && isFunction(object);

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  // lodash skips the `constructor` property when it infers it's iterating
	  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
	  // attribute of an existing property and the `constructor` property of a
	  // prototype defaults to non-enumerable.
	  for (var key in object) {
	    if (!(skipProto && key == 'prototype') &&
	        !(skipErrorProps && (key == 'message' || key == 'name')) &&
	        !(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  if (support.nonEnumShadows && object !== objectProto) {
	    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
	        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

	    if (tag == objectTag) {
	      proto = objectProto;
	    }
	    length = shadowProps.length;
	    while (length--) {
	      key = shadowProps[length];
	      var nonEnum = nonEnums[key];
	      if (!(isProto && nonEnum) &&
	          (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
	        result.push(key);
	      }
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(55),
	    isObjectLike = __webpack_require__(37);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(88),
	    pairs = __webpack_require__(89);

	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(81),
	    toObject = __webpack_require__(68);

	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);

	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}

	module.exports = pairs;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(91),
	    baseIsEqual = __webpack_require__(75),
	    baseSlice = __webpack_require__(92),
	    isArray = __webpack_require__(54),
	    isKey = __webpack_require__(93),
	    isStrictComparable = __webpack_require__(88),
	    last = __webpack_require__(94),
	    toObject = __webpack_require__(68),
	    toPath = __webpack_require__(95);

	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');

	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(68);

	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  object = toObject(object);
	  if (pathKey !== undefined && pathKey in object) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = toObject(object)[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(54),
	    toObject = __webpack_require__(68);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}

	module.exports = isKey;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(96),
	    isArray = __webpack_require__(54);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(30);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(67),
	    basePropertyDeep = __webpack_require__(99),
	    isKey = __webpack_require__(93);

	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(91),
	    toPath = __webpack_require__(95);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(101),
	    baseMatches = __webpack_require__(73);

	/**
	 * Creates a function that performs a deep comparison between a given object
	 * and `source`, returning `true` if the given object has equivalent property
	 * values, else `false`.
	 *
	 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	 * numbers, `Object` objects, regexes, and strings. Objects are compared by
	 * their own, not inherited, enumerable properties. For comparing a single
	 * own or inherited property value see `_.matchesProperty`.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': true },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	 * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	 */
	function matches(source) {
	  return baseMatches(baseClone(source, true));
	}

	module.exports = matches;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(42),
	    arrayEach = __webpack_require__(85),
	    baseAssign = __webpack_require__(102),
	    baseForOwn = __webpack_require__(104),
	    initCloneArray = __webpack_require__(107),
	    initCloneByTag = __webpack_require__(108),
	    initCloneObject = __webpack_require__(110),
	    isArray = __webpack_require__(54),
	    isHostObject = __webpack_require__(36),
	    isObject = __webpack_require__(35);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[stringTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[mapTag] = cloneableTags[setTag] =
	cloneableTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.clone` without support for argument juggling
	 * and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The object `value` belongs to.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates clones with source counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return arrayCopy(value, result);
	    }
	  } else {
	    var tag = objToString.call(value),
	        isFunc = tag == funcTag;

	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return baseAssign(result, value);
	      }
	    } else {
	      return cloneableTags[tag]
	        ? initCloneByTag(value, tag, isDeep)
	        : (object ? value : {});
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == value) {
	      return stackB[length];
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate it with its clone.
	  stackA.push(value);
	  stackB.push(result);

	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(103),
	    keys = __webpack_require__(81);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(105),
	    keys = __webpack_require__(81);

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(106);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(68);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add array properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var bufferClone = __webpack_require__(109);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Native method references. */
	var Uint8Array = global.Uint8Array;

	/** Used to lookup a type array constructors by `toStringTag`. */
	var ctorByTag = {};
	ctorByTag[float32Tag] = global.Float32Array;
	ctorByTag[float64Tag] = global.Float64Array;
	ctorByTag[int8Tag] = global.Int8Array;
	ctorByTag[int16Tag] = global.Int16Array;
	ctorByTag[int32Tag] = global.Int32Array;
	ctorByTag[uint8Tag] = Uint8Array;
	ctorByTag[uint8ClampedTag] = global.Uint8ClampedArray;
	ctorByTag[uint16Tag] = global.Uint16Array;
	ctorByTag[uint32Tag] = global.Uint32Array;

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return bufferClone(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      // Safari 5 mobile incorrectly has `Object` as the constructor of typed arrays.
	      if (Ctor instanceof Ctor) {
	        Ctor = ctorByTag[tag];
	      }
	      var buffer = object.buffer;
	      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      var result = new Ctor(object.source, reFlags.exec(object));
	      result.lastIndex = object.lastIndex;
	  }
	  return result;
	}

	module.exports = initCloneByTag;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 109 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Native method references. */
	var ArrayBuffer = global.ArrayBuffer,
	    Uint8Array = global.Uint8Array;

	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	  var result = new ArrayBuffer(buffer.byteLength),
	      view = new Uint8Array(result);

	  view.set(new Uint8Array(buffer));
	  return result;
	}

	module.exports = bufferClone;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	    Ctor = Object;
	  }
	  return new Ctor;
	}

	module.exports = initCloneObject;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var createCurry = __webpack_require__(112);

	/** Used to compose bitmasks for wrapper metadata. */
	var CURRY_FLAG = 8;

	/**
	 * Creates a function that accepts one or more arguments of `func` that when
	 * called either invokes `func` returning its result, if all `func` arguments
	 * have been provided, or returns a function that accepts one or more of the
	 * remaining `func` arguments, and so on. The arity of `func` may be specified
	 * if `func.length` is not sufficient.
	 *
	 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	 * may be used as a placeholder for provided arguments.
	 *
	 * **Note:** This method does not set the "length" property of curried functions.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to curry.
	 * @param {number} [arity=func.length] The arity of `func`.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	 * @returns {Function} Returns the new curried function.
	 * @example
	 *
	 * var abc = function(a, b, c) {
	 *   return [a, b, c];
	 * };
	 *
	 * var curried = _.curry(abc);
	 *
	 * curried(1)(2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2)(3);
	 * // => [1, 2, 3]
	 *
	 * curried(1, 2, 3);
	 * // => [1, 2, 3]
	 *
	 * // using placeholders
	 * curried(1)(_, 3)(2);
	 * // => [1, 2, 3]
	 */
	var curry = createCurry(CURRY_FLAG);

	// Assign default placeholders.
	curry.placeholder = {};

	module.exports = curry;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var createWrapper = __webpack_require__(28),
	    isIterateeCall = __webpack_require__(64);

	/**
	 * Creates a `_.curry` or `_.curryRight` function.
	 *
	 * @private
	 * @param {boolean} flag The curry bit flag.
	 * @returns {Function} Returns the new curry function.
	 */
	function createCurry(flag) {
	  function curryFunc(func, arity, guard) {
	    if (guard && isIterateeCall(func, arity, guard)) {
	      arity = undefined;
	    }
	    var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	    result.placeholder = curryFunc.placeholder;
	    return result;
	  }
	  return curryFunc;
	}

	module.exports = createCurry;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(114),
	    createWrapper = __webpack_require__(28),
	    restParam = __webpack_require__(116);

	/** Used to compose bitmasks for wrapper metadata. */
	var REARG_FLAG = 256;

	/**
	 * Creates a function that invokes `func` with arguments arranged according
	 * to the specified indexes where the argument value at the first index is
	 * provided as the first argument, the argument value at the second index is
	 * provided as the second argument, and so on.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to rearrange arguments for.
	 * @param {...(number|number[])} indexes The arranged argument indexes,
	 *  specified as individual indexes or arrays of indexes.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var rearged = _.rearg(function(a, b, c) {
	 *   return [a, b, c];
	 * }, 2, 0, 1);
	 *
	 * rearged('b', 'c', 'a')
	 * // => ['a', 'b', 'c']
	 *
	 * var map = _.rearg(_.map, [1, 0]);
	 * map(function(n) {
	 *   return n * 3;
	 * }, [1, 2, 3]);
	 * // => [3, 6, 9]
	 */
	var rearg = restParam(function(func, indexes) {
	  return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	});

	module.exports = rearg;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(115),
	    isArguments = __webpack_require__(83),
	    isArray = __webpack_require__(54),
	    isArrayLike = __webpack_require__(65),
	    isObjectLike = __webpack_require__(37);

	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);

	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 116 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(118),
	    baseFlatten = __webpack_require__(114),
	    isArrayLike = __webpack_require__(65),
	    isObjectLike = __webpack_require__(37),
	    restParam = __webpack_require__(116);

	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});

	module.exports = difference;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(119),
	    cacheIndexOf = __webpack_require__(121),
	    createCache = __webpack_require__(122);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];

	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;

	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];

	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(120);

	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	  return result ? 0 : -1;
	}

	module.exports = cacheIndexOf;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(123),
	    getNative = __webpack_require__(32);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}

	module.exports = createCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(124),
	    getNative = __webpack_require__(32);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;

	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}

	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(35);

	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}

	module.exports = cachePush;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(119),
	    getLength = __webpack_require__(66),
	    isArray = __webpack_require__(54),
	    isIterateeCall = __webpack_require__(64),
	    isLength = __webpack_require__(55),
	    isString = __webpack_require__(69),
	    values = __webpack_require__(126);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Checks if `target` is in `collection` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons. If `fromIndex` is negative, it's used as the offset
	 * from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @alias contains, include
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {*} target The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	 * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	 * // => true
	 *
	 * _.includes('pebbles', 'eb');
	 * // => true
	 */
	function includes(collection, target, fromIndex, guard) {
	  var length = collection ? getLength(collection) : 0;
	  if (!isLength(length)) {
	    collection = values(collection);
	    length = collection.length;
	  }
	  if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	    fromIndex = 0;
	  } else {
	    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	  }
	  return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	    ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, target, fromIndex) > -1);
	}

	module.exports = includes;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(127),
	    keys = __webpack_require__(81);

	/**
	 * Creates an array of the own enumerable property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return baseValues(object, keys(object));
	}

	module.exports = values;


/***/ },
/* 127 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  var index = -1,
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = object[props[index]];
	  }
	  return result;
	}

	module.exports = baseValues;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(119),
	    cacheIndexOf = __webpack_require__(121),
	    createCache = __webpack_require__(122),
	    isArrayLike = __webpack_require__(65),
	    restParam = __webpack_require__(116);

	/**
	 * Creates an array of unique values that are included in all of the provided
	 * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of shared values.
	 * @example
	 * _.intersection([1, 2], [4, 2], [2, 1]);
	 * // => [2]
	 */
	var intersection = restParam(function(arrays) {
	  var othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(length),
	      indexOf = baseIndexOf,
	      isCommon = true,
	      result = [];

	  while (othIndex--) {
	    var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	    caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	  }
	  var array = arrays[0],
	      index = -1,
	      length = array ? array.length : 0,
	      seen = caches[0];

	  outer:
	  while (++index < length) {
	    value = array[index];
	    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	      var othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(value);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	});

	module.exports = intersection;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(130),
	    baseDifference = __webpack_require__(118),
	    baseFlatten = __webpack_require__(114),
	    bindCallback = __webpack_require__(97),
	    keysIn = __webpack_require__(84),
	    pickByArray = __webpack_require__(131),
	    pickByCallback = __webpack_require__(132),
	    restParam = __webpack_require__(116);

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to omit, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.omit(object, 'age');
	 * // => { 'user': 'fred' }
	 *
	 * _.omit(object, _.isNumber);
	 * // => { 'user': 'fred' }
	 */
	var omit = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  if (typeof props[0] != 'function') {
	    var props = arrayMap(baseFlatten(props), String);
	    return pickByArray(object, baseDifference(keysIn(object), props));
	  }
	  var predicate = bindCallback(props[0], props[1], 3);
	  return pickByCallback(object, function(value, key, object) {
	    return !predicate(value, key, object);
	  });
	});

	module.exports = omit;


/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(68);

	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);

	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}

	module.exports = pickByArray;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(133);

	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}

	module.exports = pickByCallback;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(105),
	    keysIn = __webpack_require__(84);

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	module.exports = baseForIn;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(119);

	/** Used for native method references. */
	var arrayProto = Array.prototype;

	/** Native method references. */
	var splice = arrayProto.splice;

	/**
	 * Removes all provided values from `array` using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.without`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {...*} [values] The values to remove.
	 * @returns {Array} Returns `array`.
	 * @example
	 *
	 * var array = [1, 2, 3, 1, 2, 3];
	 *
	 * _.pull(array, 2, 3);
	 * console.log(array);
	 * // => [1, 1]
	 */
	function pull() {
	  var args = arguments,
	      array = args[0];

	  if (!(array && array.length)) {
	    return array;
	  }
	  var index = 0,
	      indexOf = baseIndexOf,
	      length = args.length;

	  while (++index < length) {
	    var fromIndex = 0,
	        value = args[index];

	    while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	      splice.call(array, fromIndex, 1);
	    }
	  }
	  return array;
	}

	module.exports = pull;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(114),
	    baseUniq = __webpack_require__(136),
	    restParam = __webpack_require__(116);

	/**
	 * Creates an array of unique values, in order, from all of the provided arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([1, 2], [4, 2], [2, 1]);
	 * // => [1, 2, 4]
	 */
	var union = restParam(function(arrays) {
	  return baseUniq(baseFlatten(arrays, false, true));
	});

	module.exports = union;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(119),
	    cacheIndexOf = __webpack_require__(121),
	    createCache = __webpack_require__(122);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniq` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The function invoked per iteration.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee) {
	  var index = -1,
	      indexOf = baseIndexOf,
	      length = array.length,
	      isCommon = true,
	      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	      seen = isLarge ? createCache() : null,
	      result = [];

	  if (seen) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	  } else {
	    isLarge = false;
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value, index, array) : value;

	    if (isCommon && value === value) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (indexOf(seen, computed, 0) < 0) {
	      if (iteratee || isLarge) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(72),
	    baseUniq = __webpack_require__(136),
	    isIterateeCall = __webpack_require__(64),
	    sortedUniq = __webpack_require__(138);

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurence of each element
	 * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	 * for sorted arrays. If an iteratee function is provided it's invoked for
	 * each element in the array to generate the criterion by which uniqueness
	 * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	 * arguments: (value, index, array).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @alias unique
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {boolean} [isSorted] Specify the array is sorted.
	 * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array} Returns the new duplicate-value-free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 *
	 * // using `isSorted`
	 * _.uniq([1, 1, 2], true);
	 * // => [1, 2]
	 *
	 * // using an iteratee function
	 * _.uniq([1, 2.5, 1.5, 2], function(n) {
	 *   return this.floor(n);
	 * }, Math);
	 * // => [1, 2.5]
	 *
	 * // using the `_.property` callback shorthand
	 * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	 * // => [{ 'x': 1 }, { 'x': 2 }]
	 */
	function uniq(array, isSorted, iteratee, thisArg) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return [];
	  }
	  if (isSorted != null && typeof isSorted != 'boolean') {
	    thisArg = iteratee;
	    iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	    isSorted = false;
	  }
	  iteratee = iteratee == null ? iteratee : baseCallback(iteratee, thisArg, 3);
	  return (isSorted)
	    ? sortedUniq(array, iteratee)
	    : baseUniq(array, iteratee);
	}

	module.exports = uniq;


/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * An implementation of `_.uniq` optimized for sorted arrays without support
	 * for callback shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The function invoked per iteration.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function sortedUniq(array, iteratee) {
	  var seen,
	      index = -1,
	      length = array.length,
	      resIndex = -1,
	      result = [];

	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value, index, array) : value;

	    if (!index || seen !== computed) {
	      seen = computed;
	      result[++resIndex] = value;
	    }
	  }
	  return result;
	}

	module.exports = sortedUniq;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(118),
	    isArrayLike = __webpack_require__(65),
	    restParam = __webpack_require__(116);

	/**
	 * Creates an array excluding all provided values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to filter.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.without([1, 2, 1, 3], 1, 2);
	 * // => [3]
	 */
	var without = restParam(function(array, values) {
	  return isArrayLike(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(115),
	    baseDifference = __webpack_require__(118),
	    baseUniq = __webpack_require__(136),
	    isArrayLike = __webpack_require__(65);

	/**
	 * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the provided arrays.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of values.
	 * @example
	 *
	 * _.xor([1, 2], [4, 2]);
	 * // => [1, 4]
	 */
	function xor() {
	  var index = -1,
	      length = arguments.length;

	  while (++index < length) {
	    var array = arguments[index];
	    if (isArrayLike(array)) {
	      var result = result
	        ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	        : array;
	    }
	  }
	  return result ? baseUniq(result) : [];
	}

	module.exports = xor;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.10.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash compat -d -o ./index.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.10.2';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	   */
	  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
	    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
	  ];

	  /** Used to fix the JScript `[[DontEnum]]` bug. */
	  var shadowProps = [
	    'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
	    'toLocaleString', 'toString', 'valueOf'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled regexes. */
	  var regexpEscapes = {
	    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of a value to another
	   * and stable sort them.
	   *
	   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
	   * a value is sorted in ascending order if its corresponding order is "asc", and
	   * descending if "desc".
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        var order = orders[index];
	        return result * ((order === 'asc' || order === true) ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @param {string} leadingChar The capture group for a leading character.
	   * @param {string} whitespaceChar The capture group for a whitespace character.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
	    if (leadingChar) {
	      chr = regexpEscapes[chr];
	    } else if (whitespaceChar) {
	      chr = stringEscapes[chr];
	    }
	    return '\\' + chr;
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is a host object in IE < 9.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	   */
	  var isHostObject = (function() {
	    try {
	      Object({ 'toString': 0 } + '');
	    } catch(e) {
	      return function() { return false; };
	    }
	    return function(value) {
	      // IE < 9 presents many host objects as `Object` objects that can coerce
	      // to strings despite having improperly defined `toString` methods.
	      return typeof value.toString != 'function' && typeof (value + '') == 'string';
	    };
	  }());

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        errorProto = Error.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = context.ArrayBuffer,
	        clearTimeout = context.clearTimeout,
	        parseFloat = context.parseFloat,
	        pow = Math.pow,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = context.Uint8Array,
	        WeakMap = getNative(context, 'WeakMap');

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeCreate = getNative(Object, 'create'),
	        nativeFloor = Math.floor,
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /**
	     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /** Used to lookup a type array constructors by `toStringTag`. */
	    var ctorByTag = {};
	    ctorByTag[float32Tag] = context.Float32Array;
	    ctorByTag[float64Tag] = context.Float64Array;
	    ctorByTag[int8Tag] = context.Int8Array;
	    ctorByTag[int16Tag] = context.Int16Array;
	    ctorByTag[int32Tag] = context.Int32Array;
	    ctorByTag[uint8Tag] = Uint8Array;
	    ctorByTag[uint8ClampedTag] = context.Uint8ClampedArray;
	    ctorByTag[uint16Tag] = context.Uint16Array;
	    ctorByTag[uint32Tag] = context.Uint32Array;

	    /** Used to avoid iterating over non-enumerable properties in IE < 9. */
	    var nonEnumProps = {};
	    nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
	    nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
	    nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
	    nonEnumProps[objectTag] = { 'constructor': true };

	    arrayEach(shadowProps, function(key) {
	      for (var tag in nonEnumProps) {
	        if (hasOwnProperty.call(nonEnumProps, tag)) {
	          var props = nonEnumProps[tag];
	          props[key] = hasOwnProperty.call(props, key);
	        }
	      }
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that retrieve a single value or may return a
	     * primitive value will automatically end the chain returning the unwrapped
	     * value. Explicit chaining may be enabled using `_.chain`. The execution of
	     * chained methods is lazy, that is, execution is deferred until `_#value`
	     * is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization strategy which merge iteratee calls; this can help
	     * to avoid the creation of intermediate data structures and greatly reduce the
	     * number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
	     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
	     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
	     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
	     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
	     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
	     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
	     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
	     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
	     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
	     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
	     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
	     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
	     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
	     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
	     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
	     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
	     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
	     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
	     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
	     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
	     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
	     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
	     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
	     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
	     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
	     * `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    (function(x) {
	      var Ctor = function() { this.x = x; },
	          object = { '0': x, 'length': x },
	          props = [];

	      Ctor.prototype = { 'valueOf': x, 'y': x };
	      for (var key in new Ctor) { props.push(key); }

	      /**
	       * Detect if `name` or `message` properties of `Error.prototype` are
	       * enumerable by default (IE < 9, Safari < 5.1).
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
	        propertyIsEnumerable.call(errorProto, 'name');

	      /**
	       * Detect if `prototype` properties are enumerable by default.
	       *
	       * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
	       * (if the prototype or a property on the prototype has been set)
	       * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
	       * property to `true`.
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

	      /**
	       * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
	       *
	       * In IE < 9 an object's own properties, shadowing non-enumerable ones,
	       * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      support.nonEnumShadows = !/valueOf/.test(props);

	      /**
	       * Detect if own properties are iterated after inherited properties (IE < 9).
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      support.ownLast = props[0] != 'x';

	      /**
	       * Detect if `Array#shift` and `Array#splice` augment array-like objects
	       * correctly.
	       *
	       * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
	       * `shift()` and `splice()` functions that fail to remove the last element,
	       * `value[0]`, of array-like objects even though the "length" property is
	       * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
	       * while `splice()` is buggy regardless of mode in IE < 9.
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

	      /**
	       * Detect lack of support for accessing string characters by index.
	       *
	       * IE < 8 can't access characters by index. IE 8 can only access characters
	       * by index on string literals, not string objects.
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
	    }(1, 0));

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = arrayCopy(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = arrayCopy(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = arrayCopy(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a new array joining `array` with `other`.
	     *
	     * @private
	     * @param {Array} array The array to join.
	     * @param {Array} other The other array to join.
	     * @returns {Array} Returns the new concatenated array.
	     */
	    function arrayConcat(array, other) {
	      var index = -1,
	          length = array.length,
	          othIndex = -1,
	          othLength = other.length,
	          result = Array(length + othLength);

	      while (++index < length) {
	        result[index] = array[index];
	      }
	      while (++othIndex < othLength) {
	        result[index++] = other[othIndex];
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * Appends the elements of `values` to `array`.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to append.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayPush(array, values) {
	      var index = -1,
	          length = values.length,
	          offset = array.length;

	      while (++index < length) {
	        array[offset + index] = values[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for callback
	     * shorthands and `this` binding..
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array, iteratee) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +iteratee(array[length]) || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          if (isHostObject(value)) {
	            return object ? value : {};
	          }
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = undefined;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf === baseIndexOf,
	          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict, result) {
	      result || (result = []);

	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, isDeep, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      object = toObject(object);
	      if (pathKey !== undefined && pathKey in object) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = toObject(object)[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag && !isHostObject(object),
	          othIsObj = othTag == objectTag && !isHostObject(other),
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          object = toObject(object);
	          return object[key] === value && (value !== undefined || (key in object));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? undefined : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : toObject(object)[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + nativeFloor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf === baseIndexOf,
	          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var action = actions[index];
	        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      var result = new ArrayBuffer(buffer.byteLength),
	          view = new Uint8Array(result);

	      view.set(new Uint8Array(buffer));
	      return result;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(leftLength + argsLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    function createCache(values) {
	      return (nativeCreate && Set) ? new SetCache(values) : null;
	    }

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = undefined;
	        }
	        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.defaults` or `_.defaultsDeep` function.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Function} Returns the new defaults function.
	     */
	    function createDefaults(assigner, customizer) {
	      return restParam(function(args) {
	        var object = args[0];
	        if (object == null) {
	          return object;
	        }
	        args.push(customizer);
	        return assigner.apply(undefined, args);
	      });
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = undefined;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = isArray(collection) ? collection : toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, undefined, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? undefined : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : undefined,
	                newHoldersRight = isCurry ? undefined : argsHolders,
	                newPartials = isCurry ? args : undefined,
	                newPartialsRight = isCurry ? undefined : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        precision = precision === undefined ? 0 : (+precision || 0);
	        if (precision) {
	          precision = pow(10, precision);
	          return func(number * precision) / precision;
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined;
	      }
	      var data = isBindKey ? undefined : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = (func.name + ''),
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          // Safari 5 mobile incorrectly has `Object` as the constructor of typed arrays.
	          if (Ctor instanceof Ctor) {
	            Ctor = ctorByTag[tag];
	          }
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func),
	          other = lodash[funcName];

	      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function mergeDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object) || isString(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      if (lodash.support.unindexedChars && isString(value)) {
	        return value.split('');
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      if (lodash.support.unindexedChars && isString(value)) {
	        var index = -1,
	            length = value.length,
	            result = Object(value);

	        while (++index < length) {
	          result[index] = value.charAt(index);
	        }
	        return result;
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(nativeFloor(size) || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return (isObjectLike(array) && isArrayLike(array))
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it's only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value);
	        if (index < length &&
	            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf === baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it's invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it's invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() === baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a new array joining a wrapped array with any additional arrays
	     * and/or values.
	     *
	     * @name concat
	     * @memberOf _
	     * @category Chain
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var wrapped = _(array).concat(2, [3], [[4]]);
	     *
	     * console.log(wrapped.value());
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    var wrapperConcat = restParam(function(values) {
	      values = baseFlatten(values);
	      return this.thru(function(array) {
	        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
	      });
	    });

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapped = wrapped.plant(other);
	     *
	     * otherWrapped.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;

	      var interceptor = function(value) {
	        return value.reverse();
	      };
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(interceptor);
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      if (isArrayLike(collection)) {
	        collection = toIterable(collection);
	      }
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `target` is in `collection` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
	        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it's
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	     * and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = undefined;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
	     * values are sorted in ascending order. Otherwise, a value is sorted in
	     * ascending order if its corresponding order is "asc", and descending if "desc".
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = undefined;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = undefined;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it's invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = !!options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        lastCalled = 0;
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function complete(isCalled, id) {
	        if (id) {
	          clearTimeout(id);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (isCalled) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = undefined;
	          }
	        }
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          complete(trailingCall, maxTimeoutId);
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        complete(trailing, timeoutId);
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = undefined;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that runs each argument through a corresponding
	     * transform function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms] The functions to transform
	     * arguments, specified as individual functions or arrays of functions.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var modded = _.modArgs(function(x, y) {
	     *   return [x, y];
	     * }, square, doubled);
	     *
	     * modded(1, 2);
	     * // => [1, 4]
	     *
	     * modded(5, 10);
	     * // => [25, 20]
	     */
	    var modArgs = restParam(function(func, transforms) {
	      transforms = baseFlatten(transforms);
	      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = transforms.length;
	      return restParam(function(args) {
	        var index = nativeMin(args.length, length);
	        while (index--) {
	          args[index] = transforms[index](args[index]);
	        }
	        return func.apply(this, args);
	      });
	    });

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it's
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with up to three argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 3))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it's invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with up to three argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 3))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) &&
	        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it's an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it's invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with up to
	     * three arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    function isFinite(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    }

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    function isFunction(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 which returns 'object' for typed array constructors.
	      return isObject(value) && objToString.call(value) == funcTag;
	    }

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it's invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (isFunction(value)) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    function isPlainObject(value) {
	      var Ctor;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) ||
	          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      if (lodash.support.ownLast) {
	        baseForIn(value, function(subValue, key, object) {
	          result = hasOwnProperty.call(object, key);
	          return false;
	        });
	        return result !== false;
	      }
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObject(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return (lodash.support.unindexedChars && isString(value))
	        ? value.split('')
	        : arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it's invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it's invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = undefined;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = createDefaults(assign, assignDefaults);

	    /**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
	     * // => { 'user': { 'name': 'barney', 'age': 36 } }
	     *
	     */
	    var defaultsDeep = createDefaults(merge, mergeDefaults);

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), (path + ''));
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object) || isString(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = undefined;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? undefined : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object == 'function' ? lodash.support.enumPrototypes : isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length,
	          support = lodash.support;

	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
	          isProto = proto === object,
	          result = Array(length),
	          skipIndexes = length > 0,
	          skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
	          skipProto = support.enumPrototypes && isFunction(object);

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      // lodash skips the `constructor` property when it infers it's iterating
	      // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
	      // attribute of an existing property and the `constructor` property of a
	      // prototype defaults to non-enumerable.
	      for (var key in object) {
	        if (!(skipProto && key == 'prototype') &&
	            !(skipErrorProps && (key == 'message' || key == 'name')) &&
	            !(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      if (support.nonEnumShadows && object !== objectProto) {
	        var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
	            nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

	        if (tag == objectTag) {
	          proto = objectProto;
	        }
	        length = shadowProps.length;
	        while (length--) {
	          key = shadowProps[length];
	          var nonEnum = nonEnums[key];
	          if (!(isProto && nonEnum) &&
	              (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
	            result.push(key);
	          }
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it's invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it's invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : toObject(object)[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : toObject(object)[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it's created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it's set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (end === undefined) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = undefined;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, escapeRegExpChar)
	        : (string || '(?:)');
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = nativeFloor(mid),
	          rightLength = nativeCeil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	      // Chrome fails to trim leading <BOM> whitespace characters.
	      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	        radix = 0;
	      } else if (radix) {
	        radix = +radix;
	      }
	      string = trim(string);
	      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = undefined;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = undefined;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = undefined;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = undefined;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : undefined,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              return func.apply(object, arrayPush([this.value()], arguments));
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      root._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), (path + ''));
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it's
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = undefined;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = nativeFloor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Calculates `n` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */
	    var ceil = createRound('ceil');

	    /**
	     * Calculates `n` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */
	    var floor = createRound('floor');

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it's invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it's invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Calculates `n` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} n The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */
	    var round = createRound('round');

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = undefined;
	      }
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return iteratee.length == 1
	        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defaultsDeep = defaultsDeep;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.modArgs = modArgs;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.ceil = ceil;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.floor = floor;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.round = round;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__;
	        if (filtered && !index) {
	          return new LazyWrapper(this);
	        }
	        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

	        var result = this.clone();
	        if (filtered) {
	          result.__takeCount__ = nativeMin(result.__takeCount__, n);
	        } else {
	          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
	      var type = index + 1,
	          isFilter = type != LAZY_MAP_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var result = this.clone();
	        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
	        result.__filtered__ = result.__filtered__ || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (result.__filtered__ && (start > 0 || end < 0)) {
	        return new LazyWrapper(result);
	      }
	      if (start < 0) {
	        result = result.takeRight(-start);
	      } else if (start) {
	        result = result.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
	      return this.reverse().takeWhile(predicate, thisArg).reverse();
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.take(POSITIVE_INFINITY);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName),
	          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

	      if (!lodashFunc) {
	        return;
	      }
	      lodash.prototype[methodName] = function() {
	        var args = retUnwrapped ? [1] : arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // Avoid lazy use if the iteratee has a "length" value other than `1`.
	          isLazy = useLazy = false;
	        }
	        var interceptor = function(value) {
	          return (retUnwrapped && chainAll)
	            ? lodashFunc(value, 1)[0]
	            : lodashFunc.apply(undefined, arrayPush([value], args));
	        };

	        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
	            onlyLazy = isLazy && !isHybrid;

	        if (retUnwrapped && !chainAll) {
	          if (onlyLazy) {
	            value = value.clone();
	            value.__actions__.push(action);
	            return func.call(value);
	          }
	          return lodashFunc.call(undefined, this.value())[0];
	        }
	        if (!retUnwrapped && useLazy) {
	          value = onlyLazy ? value : new LazyWrapper(this);
	          var result = func.apply(value, args);
	          result.__actions__.push(action);
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var protoFunc = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          fixObjects = !support.spliceObjects && /^(?:pop|shift|splice)$/.test(methodName),
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      // Avoid array-like object bugs with `Array#shift` and `Array#splice` in
	      // IE < 9, Firefox < 10, and RingoJS.
	      var func = !fixObjects ? protoFunc : function() {
	        var result = protoFunc.apply(this, arguments);
	        if (this.length === 0) {
	          delete this[0];
	        }
	        return result;
	      };

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = (lodashFunc.name + ''),
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.concat = wrapperConcat;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(142)(module), (function() { return this; }())))

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 143 */,
/* 144 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = EventFocus;
	/**
	 * Set focus on element
	 * Example: <div event-focus="click" event-focus-id="email">Focus email</div>
	 */
	function EventFocus($timeout, $window) {
	    function focus(id) {
	        // timeout makes sure that is invoked after any other event has been triggered.
	        // e.g. click events that need to run before the focus or
	        // inputs elements that are in a disabled state but are enabled when those events
	        // are triggered.
	        $timeout(function () {
	            var element = $window.document.getElementById(id);
	            if (element) element.focus();
	        }, 0);
	    }

	    return function (scope, elem, attr) {
	        elem.on(attr.eventFocus, function () {
	            focus(attr.eventFocusId);
	        });

	        // Removes bound events in the element itself
	        // when the scope is destroyed
	        scope.$on('$destroy', function () {
	            elem.off(attr.eventFocus);
	        });
	    };
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _testController = __webpack_require__(146);

	var _testController2 = _interopRequireDefault(_testController);

	var _test = __webpack_require__(147);

	var _test2 = _interopRequireDefault(_test);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _testController2.default,
	    template: _test2.default
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestController = function TestController(ServiceHelper, FactoryBoards) {
	    _classCallCheck(this, TestController);
	};

	exports.default = TestController;

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _boardController = __webpack_require__(149);

	var _boardController2 = _interopRequireDefault(_boardController);

	var _board = __webpack_require__(150);

	var _board2 = _interopRequireDefault(_board);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {
	        board: '=',
	        boardKey: '<'
	    },
	    controller: _boardController2.default,
	    template: _board2.default
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BoardController = function () {
	    function BoardController(FactoryBoard, ServiceHelper, $state) {
	        _classCallCheck(this, BoardController);

	        this.BoardDB = new FactoryBoard(this.boardKey);
	        this.ServiceHelper = ServiceHelper;
	        this.$state = $state;
	    }

	    _createClass(BoardController, [{
	        key: 'toggleStarred',
	        value: function toggleStarred() {
	            this.board.starred = !this.board.starred;
	            this.BoardDB.update(this.board).catch(this.ServiceHelper.logError);
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            this.BoardDB.remove().catch(this.ServiceHelper.logError);
	        }
	    }, {
	        key: 'goToBoard',
	        value: function goToBoard() {
	            this.$state.go('board', {
	                boardKey: this.boardKey,
	                slug: this.board.slug
	            });
	        }
	    }]);

	    return BoardController;
	}();

	exports.default = BoardController;

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-xs-12 col-sm-6 col-md-4\">\n    <div class=\"board\"\n         ng-class=\"{'board--starred': $ctrl.board.starred}\"\n         ng-click=\"$ctrl.goToBoard()\"\n        >\n        {{$ctrl.board.name}}\n\n        <!--Toggle starred btn-->\n        <span ng-click=\"$ctrl.toggleStarred(); $event.stopPropagation();\" class=\"board__star\">\n            <tr-icon ng-if=\"!$ctrl.board.starred\" icon=\"star-o\"></tr-icon>\n            <tr-icon ng-if=\"$ctrl.board.starred\" icon=\"star\"></tr-icon>\n        </span>\n\n        <!--Remove btn-->\n        <span ng-click=\"$ctrl.remove(); $event.stopPropagation();\" class=\"board__delete\">\n            <tr-icon icon=\"remove\"></tr-icon>\n        </span>\n    </div>\n</div>"

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _boardHeaderController = __webpack_require__(152);

	var _boardHeaderController2 = _interopRequireDefault(_boardHeaderController);

	var _boardHeader = __webpack_require__(153);

	var _boardHeader2 = _interopRequireDefault(_boardHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _boardHeaderController2.default,
	    template: _boardHeader2.default
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BoardHeaderController = function () {
	    function BoardHeaderController($state, FactoryBoard) {
	        _classCallCheck(this, BoardHeaderController);

	        this.boardKey = $state.params.boardKey;
	        this.board = null;
	        this.BoardDB = new FactoryBoard(this.boardKey);

	        this.activate();
	    }

	    _createClass(BoardHeaderController, [{
	        key: "activate",
	        value: function activate() {
	            var _this = this;

	            this.BoardDB.onValue(function (snapshot) {
	                _this.board = snapshot.val();
	            });
	        }
	    }]);

	    return BoardHeaderController;
	}();

	exports.default = BoardHeaderController;

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <button class=\"btn btn-sm btn-default\">{{$ctrl.board.name}}</button>\n    </div>\n</div>"

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _boardsController = __webpack_require__(155);

	var _boardsController2 = _interopRequireDefault(_boardsController);

	var _boards = __webpack_require__(156);

	var _boards2 = _interopRequireDefault(_boards);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _boardsController2.default,
	    template: _boards2.default
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BoardsController = function () {
	    function BoardsController(FactoryBoards) {
	        _classCallCheck(this, BoardsController);

	        this.boards = null;
	        this.BoardsDB = FactoryBoards();

	        this.activate();
	    }

	    _createClass(BoardsController, [{
	        key: "activate",
	        value: function activate() {
	            var _this = this;

	            this.BoardsDB.onValue(function (snapshot) {
	                _this.boards = snapshot.val();
	            });
	        }
	    }]);

	    return BoardsController;
	}();

	exports.default = BoardsController;

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<!--Starred Board-->\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <h3> <tr-icon icon=\"star\"></tr-icon> Starred Boards</h3>\n    </div>\n</div>\n<div class=\"row\">\n    <tr-board\n        ng-if=\"board.starred\"\n        ng-repeat=\"(boardKey, board) in $ctrl.boards\"\n        board=\"board\"\n        board-key=\"boardKey\"\n        >\n    </tr-board>\n</div>\n\n<!--My Boards-->\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <h3> <tr-icon icon=\"user\"></tr-icon> My Boards</h3>\n    </div>\n</div>\n\n<div class=\"row\">\n    <tr-board\n        ng-repeat=\"(boardKey, board) in $ctrl.boards\"\n        board=\"board\"\n        board-key=\"boardKey\"\n        >\n    </tr-board>\n    <tr-new-board></tr-new-board>\n</div>"

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cardController = __webpack_require__(158);

	var _cardController2 = _interopRequireDefault(_cardController);

	var _card = __webpack_require__(160);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {
	        card: '=',
	        cardKey: '<',
	        listKey: '<'
	    },
	    controller: _cardController2.default,
	    template: _card2.default
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EditedElementController = __webpack_require__(159);

	var _EditedElementController2 = _interopRequireDefault(_EditedElementController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CardController = function (_EditedElementControl) {
	    _inherits(CardController, _EditedElementControl);

	    function CardController(ServiceEvents, ServiceHelper, FactoryCard, $state) {
	        _classCallCheck(this, CardController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CardController).call(this, ServiceEvents, ServiceHelper));

	        _this.elementId = _this.cardKey;
	        _this.boardKey = $state.params.boardKey;
	        _this.CardDB = new FactoryCard(_this.boardKey, _this.listKey, _this.cardKey);
	        return _this;
	    }

	    _createClass(CardController, [{
	        key: 'markDone',
	        value: function markDone() {
	            this.card.isDone = !this.card.isDone;

	            this.CardDB.update(this.card).then(this.resetState.bind(this)).catch(this.ServiceHelper.logError);
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            return this.CardDB.remove().catch(this.ServiceHelper.logError);
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            return this.CardDB.update(this.card).then(this.resetState.bind(this)).catch(this.ServiceHelper.logError);
	        }
	    }]);

	    return CardController;
	}(_EditedElementController2.default);

	exports.default = CardController;

/***/ },
/* 159 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EditedElementController = function () {
	    function EditedElementController(ServiceEvents, ServiceHelper) {
	        _classCallCheck(this, EditedElementController);

	        this.ServiceEvents = ServiceEvents;
	        this.ServiceHelper = ServiceHelper;
	        this.isEdited = false;
	        this.elementId = null; /*Warning: Need to define in child*/

	        this.activate();
	    }

	    _createClass(EditedElementController, [{
	        key: 'activate',
	        value: function activate() {
	            var self = this;

	            this.ServiceEvents.subscribe('startEdit', function (data) {
	                if (data.id == self.elementId) {
	                    return null;
	                }

	                self.resetState();
	            });
	        }
	    }, {
	        key: 'publishEventStartEdit',
	        value: function publishEventStartEdit() {
	            var self = this;
	            this.ServiceEvents.publish('startEdit', {
	                id: self.elementId
	            });
	        }
	    }, {
	        key: 'startEdit',
	        value: function startEdit() {
	            this.isEdited = true;
	            this.publishEventStartEdit();
	        }
	    }, {
	        key: 'resetState',
	        value: function resetState() {
	            this.isEdited = false;
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            this.resetState();
	        }
	    }]);

	    return EditedElementController;
	}();

	exports.default = EditedElementController;

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card\" ng-class=\"{'card--edited': $ctrl.isEdited}\">\n\n    <!--Card Not Edited State -->\n    <div ng-if=\"!$ctrl.isEdited\">\n        <div\n            class=\"form-group\"\n            event-focus=\"click\" event-focus-id=\"{{$ctrl.cardKey}}\"\n            >\n            <!--Action Done-->\n            <tr-icon\n                icon=\"check\"\n                ng-click=\"$ctrl.markDone(); $event.preventDefault()\"\n                class=\"card__done-action\"\n                >\n            </tr-icon>\n\n            <!--Action Edit-->\n            <tr-icon\n                icon=\"edit\"\n                ng-click=\"$ctrl.startEdit()\"\n                event-focus=\"click\" event-focus-id=\"{{$ctrl.cardKey}}\"\n                class=\"card__edit-action\"\n                >\n            </tr-icon>\n\n            <!--Action Remove-->\n            <tr-icon\n                icon=\"remove\"\n                ng-click=\"$ctrl.remove(); $event.preventDefault()\"\n                class=\"card__remove-action\"\n                >\n            </tr-icon>\n\n            <input\n                ng-model=\"$ctrl.card.name\"\n                class=\"form-control input-sm card__input\"\n                ng-class=\"{'card--done': $ctrl.card.isDone}\"\n                type=\"text\"\n                disabled\n                />\n        </div>\n    </div>\n\n    <!--Card Edited State-->\n    <div ng-if=\"$ctrl.isEdited\">\n        <div class=\"form-group\">\n            <input\n                ng-model=\"$ctrl.card.name\"\n                class=\"form-control input-sm card__input\"\n                id=\"{{$ctrl.cardKey}}\"\n                type=\"text\"\n                />\n        </div>\n        <div class=\"form-group\">\n            <button ng-click=\"$ctrl.save()\" class=\"btn btn-success btn-sm\">Save</button>\n            <button ng-click=\"$ctrl.cancel()\" class=\"btn btn-default btn-sm\">Cancel</button>\n        </div>\n    </div>\n</div>"

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _footerController = __webpack_require__(162);

	var _footerController2 = _interopRequireDefault(_footerController);

	var _footer = __webpack_require__(163);

	var _footer2 = _interopRequireDefault(_footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _footerController2.default,
	    template: _footer2.default
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FooterController = function FooterController() {
	    _classCallCheck(this, FooterController);
	};

	exports.default = FooterController;

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<div class=\"footer\">\n\n</div>"

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _header = __webpack_require__(165);

	var _header2 = _interopRequireDefault(_header);

	var _headerController = __webpack_require__(166);

	var _headerController2 = _interopRequireDefault(_headerController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    controller: _headerController2.default,
	    template: _header2.default
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Trello</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li><a href=\"#\">Boards</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ },
/* 166 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HeaderController = function HeaderController() {
	    _classCallCheck(this, HeaderController);
	};

	exports.default = HeaderController;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _iconController = __webpack_require__(168);

	var _iconController2 = _interopRequireDefault(_iconController);

	var _icon = __webpack_require__(169);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {
	        icon: '@'
	    },
	    controller: _iconController2.default,
	    template: _icon2.default
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var IconController = function IconController() {
	    _classCallCheck(this, IconController);
	};

	exports.default = IconController;

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "<i class=\"fa fa-{{$ctrl.icon}}\"></i>"

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _listController = __webpack_require__(171);

	var _listController2 = _interopRequireDefault(_listController);

	var _list = __webpack_require__(172);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {
	        list: '=',
	        listKey: '<'
	    },
	    controller: _listController2.default,
	    template: _list2.default
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EditedElementController = __webpack_require__(159);

	var _EditedElementController2 = _interopRequireDefault(_EditedElementController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ListController = function (_EditedElementControl) {
	    _inherits(ListController, _EditedElementControl);

	    function ListController(ServiceEvents, ServiceHelper, FactoryList, FactoryCards, $state) {
	        _classCallCheck(this, ListController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListController).call(this, ServiceEvents, ServiceHelper));

	        _this.elementId = _this.listKey;
	        _this.boardKey = $state.params.boardKey;
	        _this.ListDB = new FactoryList(_this.boardKey, _this.listKey);
	        _this.CardsDB = new FactoryCards(_this.boardKey, _this.listKey);

	        _this.inputId = ServiceHelper.randomString();
	        _this.cards = null;
	        _this.isEdited = false;
	        _this.progress = 0;

	        _this.CardsDB.onValue(function (snapshot) {
	            _this.cards = _this.getSortedCards(snapshot);
	            _this.progress = _this.calcProgress(snapshot);
	        });
	        return _this;
	    }

	    _createClass(ListController, [{
	        key: 'save',
	        value: function save() {
	            var item = {
	                name: this.list.name
	            };

	            this.ListDB.update(item).then(this.resetState.bind(this)).catch(this.ServiceHelper.logError);
	        }
	    }, {
	        key: 'removeList',
	        value: function removeList() {
	            this.ListDB.remove().catch(this.ServiceHelper.logError);
	        }
	    }, {
	        key: 'getSortedCards',
	        value: function getSortedCards(snapshot) {
	            var cards = snapshot.val();
	            var sortedCards = {};

	            for (var cardKey in cards) {
	                var card = cards[cardKey];

	                if (!card.isDone) sortedCards[cardKey] = card;
	            }

	            for (var _cardKey in cards) {
	                var _card = cards[_cardKey];

	                if (_card.isDone) sortedCards[_cardKey] = _card;
	            }

	            return sortedCards;
	        }
	    }, {
	        key: 'calcProgress',
	        value: function calcProgress(snapshot) {
	            var cards = snapshot.val();

	            if (!cards) {
	                return 0;
	            }

	            var all = Object.keys(cards).length;
	            var done = 0;

	            for (var cardKey in cards) {
	                var card = cards[cardKey];
	                if (card.isDone) {
	                    done++;
	                }
	            }

	            return 100 * done / all;
	        }
	    }]);

	    return ListController;
	}(_EditedElementController2.default);

	exports.default = ListController;

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<div class=\"list\" ng-class=\"{'list--edited': $ctrl.isEdited}\">\n    <!--List Header-->\n    <div class=\"list__header\" >\n        <!--Not Edited State-->\n        <div class=\"form-group\"\n             ng-if=\"!$ctrl.isEdited\"\n             ng-click=\"$ctrl.startEdit()\"\n             event-focus=\"click\" event-focus-id=\"{{$ctrl.inputId}}\"\n            >\n            <input type=\"text\" class=\"list__header_name form-control\" ng-model=\"$ctrl.list.name\" disabled/>\n            <!--TODO: MOve to component-->\n            <uib-progressbar class=\"progress\" value=\"$ctrl.progress\" type=\"success\"></uib-progressbar>\n        </div>\n\n        <!--Edited State-->\n        <div ng-if=\"$ctrl.isEdited\">\n            <div class=\"form-group\" >\n                <input type=\"text\" id=\"{{$ctrl.inputId}}\" class=\"list__header_name form-control\" ng-model=\"$ctrl.list.name\">\n            </div>\n            <div class=\"form-group\">\n                <button ng-click=\"$ctrl.save()\" class=\"btn btn-success btn-sm\">Save</button>\n                <button ng-click=\"$ctrl.cancel()\" class=\"btn btn-default btn-sm\">Cancel</button>\n            </div>\n        </div>\n\n        <!--List Delete-->\n        <span class=\"list__delete\" ng-click=\"$ctrl.removeList()\">\n            <tr-icon icon=\"remove\"></tr-icon>\n        </span>\n    </div>\n\n    <!--Cards-->\n    <tr-card\n        card=\"card\"\n        card-key=\"cardKey\"\n        list-key=\"$ctrl.listKey\"\n        ng-repeat=\"(cardKey, card) in $ctrl.cards\"\n        >\n    </tr-card>\n\n    <!--New Card-->\n    <tr-new-card list-key=\"$ctrl.listKey\"></tr-new-card>\n</div>"

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _listsController = __webpack_require__(174);

	var _listsController2 = _interopRequireDefault(_listsController);

	var _lists = __webpack_require__(175);

	var _lists2 = _interopRequireDefault(_lists);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _listsController2.default,
	    template: _lists2.default
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListsController = function () {
	    function ListsController(FactoryLists, $state) {
	        _classCallCheck(this, ListsController);

	        this.boardKey = $state.params.boardKey;
	        this.ListsDB = new FactoryLists(this.boardKey);
	        this.lists = null;

	        this.activate();
	    }

	    _createClass(ListsController, [{
	        key: "activate",
	        value: function activate() {
	            var _this = this;

	            this.ListsDB.onValue(function (snapshot) {
	                _this.lists = snapshot.val();
	            });
	        }
	    }]);

	    return ListsController;
	}();

	exports.default = ListsController;

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = "<div class=\"lists\">\n    <tr-list\n            ng-repeat=\"(listKey, list) in $ctrl.lists\"\n            list=\"list\"\n            list-key=\"listKey\"\n            >\n    </tr-list>\n    <tr-new-list></tr-new-list>\n</div>"

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _newBoardController = __webpack_require__(177);

	var _newBoardController2 = _interopRequireDefault(_newBoardController);

	var _newBoard = __webpack_require__(178);

	var _newBoard2 = _interopRequireDefault(_newBoard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _newBoardController2.default,
	    template: _newBoard2.default
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _EditedElementController = __webpack_require__(159);

	var _EditedElementController2 = _interopRequireDefault(_EditedElementController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewBoardController = function (_EditedElementControl) {
	    _inherits(NewBoardController, _EditedElementControl);

	    function NewBoardController(ServiceEvents, ServiceHelper, FactoryBoards) {
	        _classCallCheck(this, NewBoardController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewBoardController).call(this, ServiceEvents, ServiceHelper));

	        _this.BoardsDB = new FactoryBoards();
	        _this.elementId = ServiceHelper.randomString();
	        _this.inputId = ServiceHelper.randomString();
	        _this.isEdited = false;
	        _this.boardName = '';
	        return _this;
	    }

	    _createClass(NewBoardController, [{
	        key: 'resetState',
	        value: function resetState() {
	            _get(Object.getPrototypeOf(NewBoardController.prototype), 'resetState', this).call(this);
	            this.boardName = '';
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var item = {
	                name: this.boardName
	            };
	            return this.BoardsDB.push(item).then(this.resetState.bind(this)).catch(this.ServiceHelper.logError);
	        }
	    }]);

	    return NewBoardController;
	}(_EditedElementController2.default);

	exports.default = NewBoardController;

/***/ },
/* 178 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-xs-12 col-sm-6 col-md-4\">\n    <!--Not Editable State-->\n    <div\n        class=\"board board--new board--notediting\"\n        ng-click=\"$ctrl.startEdit()\"\n        event-focus=\"click\" event-focus-id=\"{{$ctrl.inputId}}\"\n        ng-if=\"!$ctrl.isEdited\"\n        >\n        <span class=\"board__name\">New Board</span>\n    </div>\n\n    <!--Editable State-->\n    <div ng-if=\"$ctrl.isEdited\" class=\"board board--new board--editing\">\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"newBoardName\">Title</label>\n            <input\n                id=\"{{$ctrl.inputId}}\"\n                ng-model=\"$ctrl.boardName\"\n                class=\"form-control input-sm board_input\"\n                type=\"text\"\n                id=\"newBoardName\"\n                value=\"\"\n                />\n        </div>\n        <div class=\"form-group\">\n            <button ng-click=\"$ctrl.save()\" class=\"btn btn-success btn-sm\">Save</button>\n            <button ng-click=\"$ctrl.cancel()\" class=\"btn btn-default btn-sm\">Cancel</button>\n        </div>\n    </div>\n</div>"

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _newCard = __webpack_require__(180);

	var _newCard2 = _interopRequireDefault(_newCard);

	var _newCardController = __webpack_require__(181);

	var _newCardController2 = _interopRequireDefault(_newCardController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {
	        listKey: '<'
	    },
	    controller: _newCardController2.default,
	    template: _newCard2.default
	};

/***/ },
/* 180 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <!--Not Edited State-->\n    <div\n        ng-click=\"$ctrl.startEdit()\"\n        event-focus=\"click\" event-focus-id=\"{{$ctrl.inputId}}\"\n        ng-if=\"!$ctrl.isEdited\"\n        class=\"card card--new\"\n        >\n        <div class=\"card__name\">New Card...</div>\n    </div>\n\n    <!--Edited State-->\n    <div ng-if=\"$ctrl.isEdited\" class=\"card card--new\">\n        <div class=\"form-group\">\n            <input id=\"{{$ctrl.inputId}}\" ng-model=\"$ctrl.cardName\" class=\"form-control input-sm card__input\" type=\"text\" value=\"\"/>\n        </div>\n        <div class=\"form-group\">\n            <button ng-click=\"$ctrl.save()\" class=\"btn btn-success btn-sm\">Save</button>\n            <button ng-click=\"$ctrl.cancel()\" class=\"btn btn-default btn-sm\">Cancel</button>\n        </div>\n    </div>\n</div>"

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _EditedElementController = __webpack_require__(159);

	var _EditedElementController2 = _interopRequireDefault(_EditedElementController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewCardController = function (_EditedElementControl) {
	    _inherits(NewCardController, _EditedElementControl);

	    function NewCardController(FactoryCards, ServiceHelper, ServiceEvents, $state) {
	        _classCallCheck(this, NewCardController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewCardController).call(this, ServiceEvents, ServiceHelper));

	        _this.boardKey = $state.params.boardKey;
	        _this.CardsDB = new FactoryCards(_this.boardKey, _this.listKey);
	        _this.elementId = ServiceHelper.randomString();
	        _this.inputId = ServiceHelper.randomString();
	        _this.isEdited = false;
	        _this.cardName = '';
	        return _this;
	    }

	    _createClass(NewCardController, [{
	        key: 'resetState',
	        value: function resetState() {
	            _get(Object.getPrototypeOf(NewCardController.prototype), 'resetState', this).call(this);
	            this.cardName = '';
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var item = {
	                name: this.cardName
	            };

	            return this.CardsDB.push(item).then(this.resetState.bind(this)).catch(this.ServiceHelper.logError);
	        }
	    }]);

	    return NewCardController;
	}(_EditedElementController2.default);

	exports.default = NewCardController;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _newList = __webpack_require__(183);

	var _newList2 = _interopRequireDefault(_newList);

	var _newListController = __webpack_require__(184);

	var _newListController2 = _interopRequireDefault(_newListController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    bindings: {},
	    controller: _newListController2.default,
	    template: _newList2.default
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	module.exports = "<!--Not Edited State-->\n<div\n    ng-click=\"$ctrl.startEdit()\"\n    event-focus=\"click\" event-focus-id=\"{{$ctrl.inputId}}\"\n    ng-if=\"!$ctrl.isEdited\"\n    class=\"list list--new\"\n    >\n    <span class=\"list__header_new_name\">New List</span>\n</div>\n\n<!--Edited State-->\n<div ng-if=\"$ctrl.isEdited\" class=\"list list--new\">\n    <div class=\"form-group\">\n        <label for=\"newListName\" class=\"control-label\">Title</label>\n        <input\n            id=\"{{$ctrl.inputId}}\"\n            ng-model=\"$ctrl.listName\"\n            class=\"form-control input-sm list__input\"\n            type=\"text\"\n            id=\"newListName\"\n            />\n    </div>\n    <div class=\"form-group\">\n        <button ng-click=\"$ctrl.save()\" class=\"btn btn-success btn-sm\">Save</button>\n        <button ng-click=\"$ctrl.cancel()\" class=\"btn btn-default btn-sm\">Cancel</button>\n    </div>\n</div>\n\n"

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _EditedElementController = __webpack_require__(159);

	var _EditedElementController2 = _interopRequireDefault(_EditedElementController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewListController = function (_EditedElementControl) {
	    _inherits(NewListController, _EditedElementControl);

	    function NewListController(ServiceEvents, ServiceHelper, FactoryLists, $state) {
	        _classCallCheck(this, NewListController);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewListController).call(this, ServiceEvents, ServiceHelper));

	        _this.boardKey = $state.params.boardKey;
	        _this.ListsDB = new FactoryLists(_this.boardKey);
	        _this.elementId = ServiceHelper.randomString();
	        _this.inputId = ServiceHelper.randomString();
	        _this.isEdited = false;
	        _this.listName = '';
	        return _this;
	    }

	    _createClass(NewListController, [{
	        key: 'resetState',
	        value: function resetState() {
	            _get(Object.getPrototypeOf(NewListController.prototype), 'resetState', this).call(this);
	            this.listName = '';
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var item = {
	                name: this.listName
	            };

	            this.ListsDB.push(item).then(this.resetState.bind(this)).catch(this.ServiceHelper.logError);
	        }
	    }]);

	    return NewListController;
	}(_EditedElementController2.default);

	exports.default = NewListController;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*Modules Depends On*/

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _app = __webpack_require__(196);

	var _app2 = _interopRequireDefault(_app);

	var _BoardScheme = __webpack_require__(186);

	var _BoardScheme2 = _interopRequireDefault(_BoardScheme);

	var _CardScheme = __webpack_require__(187);

	var _CardScheme2 = _interopRequireDefault(_CardScheme);

	var _ListScheme = __webpack_require__(188);

	var _ListScheme2 = _interopRequireDefault(_ListScheme);

	var _FactoryBoard = __webpack_require__(189);

	var _FactoryBoard2 = _interopRequireDefault(_FactoryBoard);

	var _FactoryBoards = __webpack_require__(190);

	var _FactoryBoards2 = _interopRequireDefault(_FactoryBoards);

	var _FactoryCard = __webpack_require__(191);

	var _FactoryCard2 = _interopRequireDefault(_FactoryCard);

	var _FactoryCards = __webpack_require__(192);

	var _FactoryCards2 = _interopRequireDefault(_FactoryCards);

	var _FactoryDbDriver = __webpack_require__(193);

	var _FactoryDbDriver2 = _interopRequireDefault(_FactoryDbDriver);

	var _FactoryList = __webpack_require__(194);

	var _FactoryList2 = _interopRequireDefault(_FactoryList);

	var _FactoryLists = __webpack_require__(195);

	var _FactoryLists2 = _interopRequireDefault(_FactoryLists);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*Schemes Firebase*/
	exports.default = angular.module("trello-db-api", [_app2.default])
	/*Schemes Firebase*/
	.service('BoardScheme', _BoardScheme2.default).service('CardScheme', _CardScheme2.default).service('ListScheme', _ListScheme2.default)
	/*Services Firebase*/
	.factory('FactoryBoard', _FactoryBoard2.default).factory('FactoryBoards', _FactoryBoards2.default).factory('FactoryCard', _FactoryCard2.default).factory('FactoryCards', _FactoryCards2.default).factory('FactoryDbDriver', _FactoryDbDriver2.default).factory('FactoryList', _FactoryList2.default).factory('FactoryLists', _FactoryLists2.default).name;

	/*Services Firebase*/

/***/ },
/* 186 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BoardScheme = function () {
	    function BoardScheme(ServiceHelper) {
	        _classCallCheck(this, BoardScheme);

	        this.ServiceHelper = ServiceHelper;
	    }

	    _createClass(BoardScheme, [{
	        key: 'getScheme',
	        value: function getScheme() {
	            return {
	                id: this.ServiceHelper.randomString(),
	                timestamp: this.ServiceHelper.timestamp(),
	                updated: this.ServiceHelper.timestamp(),
	                name: '',
	                slug: '',
	                starred: false
	            };
	        }
	    }, {
	        key: 'validate',
	        value: function validate(item) {
	            if (!this.ServiceHelper.trimName(item)) return 'Board Validate Error: Empty name';

	            return false;
	        }
	    }]);

	    return BoardScheme;
	}();

	exports.default = BoardScheme;

/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CardScheme = function () {
	    function CardScheme(ServiceHelper) {
	        _classCallCheck(this, CardScheme);

	        this.ServiceHelper = ServiceHelper;
	    }

	    _createClass(CardScheme, [{
	        key: 'getScheme',
	        value: function getScheme() {
	            return {
	                id: this.ServiceHelper.randomString(),
	                timestamp: this.ServiceHelper.timestamp(),
	                updated: this.ServiceHelper.timestamp(),
	                name: '',
	                slug: '',
	                isDone: false
	            };
	        }
	    }, {
	        key: 'validate',
	        value: function validate(item) {
	            if (!this.ServiceHelper.trimName(item)) return 'Card Validate Error: Empty name';

	            return false;
	        }
	    }]);

	    return CardScheme;
	}();

	exports.default = CardScheme;

/***/ },
/* 188 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ListScheme = function () {
	    function ListScheme(ServiceHelper) {
	        _classCallCheck(this, ListScheme);

	        this.ServiceHelper = ServiceHelper;
	    }

	    _createClass(ListScheme, [{
	        key: 'getScheme',
	        value: function getScheme() {
	            return {
	                id: this.ServiceHelper.randomString(),
	                timestamp: this.ServiceHelper.timestamp(),
	                updated: this.ServiceHelper.timestamp(),
	                name: '',
	                slug: ''
	            };
	        }
	    }, {
	        key: 'validate',
	        value: function validate(item) {
	            if (!this.ServiceHelper.trimName(item)) return 'List Validate Error: Empty name';

	            return false;
	        }
	    }]);

	    return ListScheme;
	}();

	exports.default = ListScheme;

/***/ },
/* 189 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryBoard;
	function FactoryBoard(FactoryBoards) {
	    return function (boardKey) {
	        if (!boardKey) throw new Error('Board Error! Not provided boardKey');

	        var BoardDB = new FactoryBoards();
	        BoardDB.ref = BoardDB.ref.child(boardKey);
	        return BoardDB;
	    };
	}

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryBoards;
	function FactoryBoards(FactoryDbDriver, BoardScheme) {
	    return function () {
	        var BoardsDB = new FactoryDbDriver();

	        BoardsDB.ref = BoardsDB.ref.child("boards");
	        BoardsDB.getScheme = function () {
	            return BoardScheme.getScheme();
	        };
	        BoardsDB.validate = function (item) {
	            return BoardScheme.validate(item);
	        };
	        return BoardsDB;
	    };
	}

/***/ },
/* 191 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryCard;
	function FactoryCard(FactoryCards) {
	    return function (boardKey, listKey, cardKey) {
	        if (!boardKey) throw new Error('Card Error! Does not provided boardKey');

	        if (!listKey) throw new Error('Card Error! Does not provided listKey');

	        if (!cardKey) throw new Error('Card Error! Does not provided cardKey');

	        var CardDB = new FactoryCards(boardKey, listKey);
	        CardDB.ref = CardDB.ref.child(cardKey);
	        return CardDB;
	    };
	}

/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryCards;
	function FactoryCards(FactoryList, CardScheme) {
	    return function (boardKey, listKey) {
	        if (!boardKey) throw new Error('Cards Error! Does not provided boardKey');

	        if (!listKey) throw new Error('Cards Error! Does not provided listKey');

	        var CardsDB = new FactoryList(boardKey, listKey);
	        CardsDB.ref = CardsDB.ref.child('cards');
	        CardsDB.getScheme = function () {
	            return CardScheme.getScheme();
	        };
	        CardsDB.validate = function (item) {
	            return CardScheme.validate(item);
	        };
	        return CardsDB;
	    };
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryDbDriver;

	var _DbDriver = __webpack_require__(199);

	var _DbDriver2 = _interopRequireDefault(_DbDriver);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function FactoryDbDriver(ServiceConfig, ServiceHelper, $timeout, $q) {
	    return function () {
	        return new _DbDriver2.default(ServiceConfig, ServiceHelper, $timeout, $q);
	    };
	}

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryList;
	function FactoryList(FactoryLists) {
	    return function (boardKey, listKey) {
	        if (!boardKey) throw new Error('Lists Error! Does not provided boardKey');

	        if (!listKey) throw new Error('Lists Error! Does not provided listKey');

	        var ListDB = new FactoryLists(boardKey);
	        ListDB.ref = ListDB.ref.child(listKey);

	        return ListDB;
	    };
	}

/***/ },
/* 195 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FactoryLists;
	function FactoryLists(FactoryDbDriver, ListScheme) {
	    return function (boardKey) {
	        if (!boardKey) throw new Error('Lists Error! Does not provided boardKey');

	        var ListsDB = new FactoryDbDriver();
	        ListsDB.ref = ListsDB.ref.child("lists").child(boardKey);
	        ListsDB.getScheme = function () {
	            return ListScheme.getScheme();
	        };
	        ListsDB.validate = function (item) {
	            return ListScheme.validate(item);
	        };
	        return ListsDB;
	    };
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ServiceHelper = __webpack_require__(197);

	var _ServiceHelper2 = _interopRequireDefault(_ServiceHelper);

	var _ServiceTranslit = __webpack_require__(198);

	var _ServiceTranslit2 = _interopRequireDefault(_ServiceTranslit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("trello-shared", []).service('ServiceHelper', _ServiceHelper2.default).service('ServiceTranslit', _ServiceTranslit2.default).name;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ServiceHelper;

	var _lodashFp = __webpack_require__(23);

	var _lodashFp2 = _interopRequireDefault(_lodashFp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ServiceHelper(ServiceTranslit) {
	    var trimName = _lodashFp2.default.flow(_lodashFp2.default.get('name'), _lodashFp2.default.trim);
	    var timestamp = Date.now;

	    //Public API
	    return {
	        trimName: trimName,
	        timestamp: timestamp,
	        randomString: randomString,
	        slug: slug,
	        logError: logError
	    };

	    //Function Declaration Section
	    /**
	     * Generate random string
	     * @param length
	     * @returns {string}
	     */
	    function randomString(len) {
	        var length = len || 16;
	        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

	        var str = '';
	        for (var i = 0; i < length; i++) {
	            str += chars[Math.floor(Math.random() * chars.length)];
	        }
	        return str;
	    }

	    /**
	     * Return slug (string without spaces)
	     * @param str
	     * @returns {*}
	     */
	    function slug(str) {
	        if (!_lodashFp2.default.isString(str)) return '';

	        var translit = ServiceTranslit.translit(str);
	        return _lodashFp2.default.kebabCase(translit);
	    }

	    /**
	     * logError
	     * @param err
	     */
	    function logError(err) {
	        console.error(err);
	    }
	}

/***/ },
/* 198 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ServiceTranslit;
	function ServiceTranslit() {
	    //Public API
	    return {
	        translit: translit
	    };

	    //Function Declaration Section
	    function translit(str) {
	        if (!str) return '';

	        var L = {
	            'А': 'A', 'а': 'a', 'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g',
	            'Д': 'D', 'д': 'd', 'Е': 'E', 'е': 'e', 'Ё': 'Yo', 'ё': 'yo', 'Ж': 'Zh', 'ж': 'zh',
	            'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'Й': 'Y', 'й': 'y', 'К': 'K', 'к': 'k',
	            'Л': 'L', 'л': 'l', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'О': 'O', 'о': 'o',
	            'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't',
	            'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'Kh', 'х': 'kh', 'Ц': 'Ts', 'ц': 'ts',
	            'Ч': 'Ch', 'ч': 'ch', 'Ш': 'Sh', 'ш': 'sh', 'Щ': 'Sch', 'щ': 'sch', 'Ъ': '', 'ъ': '',
	            'Ы': 'Y', 'ы': 'y', 'Ь': "", 'ь': "", 'Э': 'E', 'э': 'e', 'Ю': 'Yu', 'ю': 'yu',
	            'Я': 'Ya', 'я': 'ya', ' ': ' ', '_': '-',
	            'І': 'I', 'і': 'i',
	            '"': '', "'": '', '.': '', ',': '', '!': '', ':': '', ';': ''
	        };
	        var r = '';
	        var k = void 0;

	        for (k in L) {
	            r += k;
	        }r = new RegExp('[' + r + ']', 'g');
	        k = function k(a) {
	            return a in L ? L[a] : '';
	        };

	        var trans = function trans() {
	            var text_string = str.replace(r, k).replace(' ', '-').toString();

	            var literals = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm-0123456789';
	            var newString = '';
	            for (var i = 0; i < text_string.length; i++) {
	                if (!(literals.indexOf(text_string.charAt(i)) == -1)) {
	                    newString += text_string.charAt(i);
	                }
	            }
	            return newString;
	        };

	        return trans();
	    }
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _firebase = __webpack_require__(17);

	var _firebase2 = _interopRequireDefault(_firebase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DbDriver = function () {
	    function DbDriver(ServiceConfig, ServiceHelper, $timeout, $q) {
	        _classCallCheck(this, DbDriver);

	        this.ServiceConfig = ServiceConfig;
	        this.ServiceHelper = ServiceHelper;
	        this.$timeout = $timeout;
	        this.$q = $q;
	        this.ref = new _firebase2.default(this.ServiceConfig.getFirebaseBaseUrl());
	    }

	    /*Warning: need to implement in child */


	    _createClass(DbDriver, [{
	        key: 'getScheme',
	        value: function getScheme() {
	            throw new Error('Error! Not implemented getScheme function');
	        }

	        /*Warning: need to implement in child */

	    }, {
	        key: 'validate',
	        value: function validate(item) {
	            throw new Error('Error! Not implemented validate function');
	        }
	    }, {
	        key: '_prepareItemForPush',
	        value: function _prepareItemForPush(item) {
	            var itemRequiredFields = {
	                id: this.ServiceHelper.randomString(),
	                slug: this.ServiceHelper.slug(item.name),
	                updated: this.ServiceHelper.timestamp(),
	                timestamp: this.ServiceHelper.timestamp()
	            };

	            return Object.assign({}, this.getScheme(), item, itemRequiredFields);
	        }
	    }, {
	        key: '_prepareItemForUpdate',
	        value: function _prepareItemForUpdate(item) {
	            var itemRequiredFields = {
	                slug: this.ServiceHelper.slug(item.name),
	                updated: this.ServiceHelper.timestamp()
	            };

	            return Object.assign({}, item, itemRequiredFields);
	        }
	    }, {
	        key: 'push',
	        value: function push(item) {
	            var self = this;
	            var validateMessage = void 0;
	            var preparedItem = this._prepareItemForPush(item);

	            return this.$q(function (resolve, reject) {
	                if (validateMessage = self.validate(preparedItem)) {
	                    return reject(validateMessage);
	                }

	                self.ref.push(preparedItem).then(function (response) {
	                    return resolve(response);
	                }).catch(function (err) {
	                    return reject(err);
	                });
	            });
	        }
	    }, {
	        key: 'update',
	        value: function update(item) {
	            var self = this;
	            var validateMessage = void 0;
	            var preparedItem = this._prepareItemForUpdate(item);

	            return this.$q(function (resolve, reject) {
	                if (validateMessage = self.validate(preparedItem)) {
	                    return reject(new Error(validateMessage));
	                }

	                self.ref.update(preparedItem).then(function (response) {
	                    return resolve(response);
	                }).catch(function (err) {
	                    return reject(err);
	                });
	            });
	        }
	    }, {
	        key: 'onValue',
	        value: function onValue(fn, fnErr) {
	            var self = this;
	            var _fn = fn || function () {};
	            var _fnError = fnErr || function (err) {
	                console.error(err);
	            };

	            return this.ref.on("value", function (snapshot) {
	                self.$timeout(function () {
	                    return _fn(snapshot);
	                }, 0); //$timeout - hack for angular, otherwise doesn't see changes
	            }, _fnError);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(fn) {
	            return this.ref.remove(fn);
	        }
	    }]);

	    return DbDriver;
	}();

	exports.default = DbDriver;

/***/ }
/******/ ]);