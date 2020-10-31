/*! For license information please see bastian.js.LICENSE */
var Bastian=function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict"
n.r(t)
var r=n(1),i=n.n(r),s=n(5),o=n.n(s),a=(n(7),n(8),n(22),n(42),n(53)),c=n(29),l=n(54),u=n(55)
const h={"authoring-toolkit/misc":()=>n(96),"authoring-toolkit/ui":()=>n(189),feed:()=>n(183),"feed/authoring/card":()=>n(187).exposable,"feed/items/register":()=>n(182).registerExternalItemFactory,renderer:()=>n(73),version:()=>n(181)},d=c.Globals.document
function p(e){try{n(185).launch(e)}catch(t){Object(l.triggerDomEvent)(a.LAUNCH_FAILED,d),n(20).error("Impossible to launch Bastian",t,t.stack)}}p.require=function(e){return i()(e)&&e in h?h[e]():n(e)},Object.defineProperty(p,"version",{get:h.version}),c.Globals.bstn&&Object.defineProperty(p,"lazy",{get:c.Globals.bstn.lazy}),Object(l.triggerDomEvent)(a.APP_LOADED,d),u.GloboAB.setApplicationAsLoaded(),o()(c.Globals.globalWebdeps)&&c.Globals.globalWebdeps("player"),t.default=p},function(e,t,n){var r=n(2),i=n(3),s=n(4)
e.exports=function(e){return"string"==typeof e||!i(e)&&s(e)&&"[object String]"==r(e)}},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t){var n=Array.isArray
e.exports=n},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var r=n(2),i=n(6)
e.exports=function(e){if(!i(e))return!1
var t=r(e)
return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){e.exports=function(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}},function(e,t,n){},function(e,t,n){"use strict"
n.r(t),n.d(t,"$OnDemandSource",(function(){return h}))
var r=n(9),i=n.n(r),s=n(5),o=n.n(s),a=n(10),c=n.n(a),l=n(15),u=n(21)
class h{constructor(e){this.buffer=[],this.loadLocked=!1,this.nextFetch=null,this.nextPage=null,this.isFetchNeeded=()=>this.whenToFetch(),this.unlock=e=>(this.loadLocked=!1,e),this.isEnded=()=>this.whenToComplete()
const t=this
this.stream=c.a.create({start(e){t.listener=e},stop(){t.listener=null}}),e&&this.store(e)}store(e){const t=Object(u.castArray)(e).map(l.PostIndex.filter).filter(e=>e)
return this.buffer.push(...t),t.length}isEmpty(){return 0===this.buffer.length}setNextFetch(e){this.nextFetch=i()(e)?e:null}setNextPage(e){this.nextPage=i()(e)?e:null}request(e){if(this.listener){const t=this.listener,n=this.isEmpty()
n&&this.isEnded()?t.complete():(e&&!0===e.preventFetch&&!n||!this.isFetchNeeded()||this.fetch(e),n||t.next(this.buffer.shift()))}}whenToFetch(){throw new Error("Not implemented")}fetch(e){if(!1===this.loadLocked)return this.loadLocked=!0,this.howToFetch(e)}howToFetch(e){throw new Error("Not implemented")}whenToComplete(){throw new Error("Not implemented")}saveAndResumeStream(e,t){const n=this.isEmpty()
this.store(e),o()(t)&&t(e),n&&setTimeout(()=>{this.request()},100)}}},function(e,t,n){var r=n(2),i=n(4)
e.exports=function(e){return"number"==typeof e||i(e)&&"[object Number]"==r(e)}},function(e,t,n){"use strict"
var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)}
return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(11),s={}
function o(){}function a(e){for(var t=e.length,n=Array(t),r=0;r<t;++r)n[r]=e[r]
return n}function c(e,t,n){try{return e.f(t)}catch(r){return n._e(r),s}}t.NO=s
var l={_n:o,_e:o,_c:o}
function u(e){e._start=function(e){e.next=e._n,e.error=e._e,e.complete=e._c,this.start(e)},e._stop=e.stop}t.NO_IL=l
var h=function(){function e(e,t){this._stream=e,this._listener=t}return e.prototype.unsubscribe=function(){this._stream._remove(this._listener)},e}(),d=function(){function e(e){this._listener=e}return e.prototype.next=function(e){this._listener._n(e)},e.prototype.error=function(e){this._listener._e(e)},e.prototype.complete=function(){this._listener._c()},e}(),p=function(){function e(e){this.type="fromObservable",this.ins=e,this.active=!1}return e.prototype._start=function(e){this.out=e,this.active=!0,this._sub=this.ins.subscribe(new d(e)),this.active||this._sub.unsubscribe()},e.prototype._stop=function(){this._sub&&this._sub.unsubscribe(),this.active=!1},e}(),f=function(){function e(e){this.type="merge",this.insArr=e,this.out=s,this.ac=0}return e.prototype._start=function(e){this.out=e
var t=this.insArr,n=t.length
this.ac=n
for(var r=0;r<n;r++)t[r]._add(this)},e.prototype._stop=function(){for(var e=this.insArr,t=e.length,n=0;n<t;n++)e[n]._remove(this)
this.out=s},e.prototype._n=function(e){var t=this.out
t!==s&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){if(--this.ac<=0){var e=this.out
if(e===s)return
e._c()}},e}(),m=function(){function e(e,t,n){this.i=e,this.out=t,this.p=n,n.ils.push(this)}return e.prototype._n=function(e){var t=this.p,n=this.out
if(n!==s&&t.up(e,this.i)){for(var r=t.vals,i=r.length,o=Array(i),a=0;a<i;++a)o[a]=r[a]
n._n(o)}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.p
e.out!==s&&0==--e.Nc&&e.out._c()},e}(),g=function(){function e(e){this.type="combine",this.insArr=e,this.out=s,this.ils=[],this.Nc=this.Nn=0,this.vals=[]}return e.prototype.up=function(e,t){var n=this.vals[t],r=this.Nn?n===s?--this.Nn:this.Nn:0
return this.vals[t]=e,0===r},e.prototype._start=function(e){this.out=e
var t=this.insArr,n=this.Nc=this.Nn=t.length,r=this.vals=new Array(n)
if(0===n)e._n([]),e._c()
else for(var i=0;i<n;i++)r[i]=s,t[i]._add(new m(i,e,this))},e.prototype._stop=function(){for(var e=this.insArr,t=e.length,n=this.ils,r=0;r<t;r++)e[r]._remove(n[r])
this.out=s,this.ils=[],this.vals=[]},e}(),v=function(){function e(e){this.type="fromArray",this.a=e}return e.prototype._start=function(e){for(var t=this.a,n=0,r=t.length;n<r;n++)e._n(t[n])
e._c()},e.prototype._stop=function(){},e}(),b=function(){function e(e){this.type="fromPromise",this.on=!1,this.p=e}return e.prototype._start=function(e){var t=this
this.on=!0,this.p.then((function(n){t.on&&(e._n(n),e._c())}),(function(t){e._e(t)})).then(o,(function(e){setTimeout((function(){throw e}))}))},e.prototype._stop=function(){this.on=!1},e}(),E=function(){function e(e){this.type="periodic",this.period=e,this.intervalID=-1,this.i=0}return e.prototype._start=function(e){var t=this
this.intervalID=setInterval((function(){e._n(t.i++)}),this.period)},e.prototype._stop=function(){-1!==this.intervalID&&clearInterval(this.intervalID),this.intervalID=-1,this.i=0},e}(),_=function(){function e(e,t){this.type="debug",this.ins=e,this.out=s,this.s=o,this.l="","string"==typeof t?this.l=t:"function"==typeof t&&(this.s=t)}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s},e.prototype._n=function(e){var t=this.out
if(t!==s){var n=this.s,r=this.l
if(n!==o)try{n(e)}catch(i){t._e(i)}else r?console.log(r+":",e):console.log(e)
t._n(e)}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),y=function(){function e(e,t){this.type="drop",this.ins=t,this.out=s,this.max=e,this.dropped=0}return e.prototype._start=function(e){this.out=e,this.dropped=0,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s},e.prototype._n=function(e){var t=this.out
t!==s&&this.dropped++>=this.max&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),O=function(){function e(e,t){this.out=e,this.op=t}return e.prototype._n=function(){this.op.end()},e.prototype._e=function(e){this.out._e(e)},e.prototype._c=function(){this.op.end()},e}(),w=function(){function e(e,t){this.type="endWhen",this.ins=t,this.out=s,this.o=e,this.oil=l}return e.prototype._start=function(e){this.out=e,this.o._add(this.oil=new O(e,this)),this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.o._remove(this.oil),this.out=s,this.oil=l},e.prototype.end=function(){var e=this.out
e!==s&&e._c()},e.prototype._n=function(e){var t=this.out
t!==s&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){this.end()},e}(),S=function(){function e(e,t){this.type="filter",this.ins=t,this.out=s,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s},e.prototype._n=function(e){var t=this.out
if(t!==s){var n=c(this,e,t)
n!==s&&n&&t._n(e)}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),I=function(){function e(e,t){this.out=e,this.op=t}return e.prototype._n=function(e){this.out._n(e)},e.prototype._e=function(e){this.out._e(e)},e.prototype._c=function(){this.op.inner=s,this.op.less()},e}(),C=function(){function e(e){this.type="flatten",this.ins=e,this.out=s,this.open=!0,this.inner=s,this.il=l}return e.prototype._start=function(e){this.out=e,this.open=!0,this.inner=s,this.il=l,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.inner!==s&&this.inner._remove(this.il),this.out=s,this.open=!0,this.inner=s,this.il=l},e.prototype.less=function(){var e=this.out
e!==s&&(this.open||this.inner!==s||e._c())},e.prototype._n=function(e){var t=this.out
if(t!==s){var n=this.inner,r=this.il
n!==s&&r!==l&&n._remove(r),(this.inner=e)._add(this.il=new I(t,this))}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){this.open=!1,this.less()},e}(),T=function(){function e(e,t,n){var r=this
this.type="fold",this.ins=n,this.out=s,this.f=function(t){return e(r.acc,t)},this.acc=this.seed=t}return e.prototype._start=function(e){this.out=e,this.acc=this.seed,e._n(this.acc),this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s,this.acc=this.seed},e.prototype._n=function(e){var t=this.out
if(t!==s){var n=c(this,e,t)
n!==s&&t._n(this.acc=n)}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),x=function(){function e(e){this.type="last",this.ins=e,this.out=s,this.has=!1,this.val=s}return e.prototype._start=function(e){this.out=e,this.has=!1,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s,this.val=s},e.prototype._n=function(e){this.has=!0,this.val=e},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&(this.has?(e._n(this.val),e._c()):e._e(new Error("last() failed because input stream completed")))},e}(),A=function(){function e(e,t){this.type="map",this.ins=t,this.out=s,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s},e.prototype._n=function(e){var t=this.out
if(t!==s){var n=c(this,e,t)
n!==s&&t._n(n)}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),j=function(){function e(e){this.type="remember",this.ins=e,this.out=s}return e.prototype._start=function(e){this.out=e,this.ins._add(e)},e.prototype._stop=function(){this.ins._remove(this.out),this.out=s},e}(),N=function(){function e(e,t){this.type="replaceError",this.ins=t,this.out=s,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s},e.prototype._n=function(e){var t=this.out
t!==s&&t._n(e)},e.prototype._e=function(e){var t=this.out
if(t!==s)try{this.ins._remove(this),(this.ins=this.f(e))._add(this)}catch(n){t._e(n)}},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),R=function(){function e(e,t){this.type="startWith",this.ins=e,this.out=s,this.val=t}return e.prototype._start=function(e){this.out=e,this.out._n(this.val),this.ins._add(e)},e.prototype._stop=function(){this.ins._remove(this.out),this.out=s},e}(),P=function(){function e(e,t){this.type="take",this.ins=t,this.out=s,this.max=e,this.taken=0}return e.prototype._start=function(e){this.out=e,this.taken=0,this.max<=0?e._c():this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=s},e.prototype._n=function(e){var t=this.out
if(t!==s){var n=++this.taken
n<this.max?t._n(e):n===this.max&&(t._n(e),t._c())}},e.prototype._e=function(e){var t=this.out
t!==s&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==s&&e._c()},e}(),k=function(){function e(e){this._prod=e||s,this._ils=[],this._stopID=s,this._dl=s,this._d=!1,this._target=s,this._err=s}return e.prototype._n=function(e){var t=this._ils,n=t.length
if(this._d&&this._dl._n(e),1==n)t[0]._n(e)
else{if(0==n)return
for(var r=a(t),i=0;i<n;i++)r[i]._n(e)}},e.prototype._e=function(e){if(this._err===s){this._err=e
var t=this._ils,n=t.length
if(this._x(),this._d&&this._dl._e(e),1==n)t[0]._e(e)
else{if(0==n)return
for(var r=a(t),i=0;i<n;i++)r[i]._e(e)}if(!this._d&&0==n)throw this._err}},e.prototype._c=function(){var e=this._ils,t=e.length
if(this._x(),this._d&&this._dl._c(),1==t)e[0]._c()
else{if(0==t)return
for(var n=a(e),r=0;r<t;r++)n[r]._c()}},e.prototype._x=function(){0!==this._ils.length&&(this._prod!==s&&this._prod._stop(),this._err=s,this._ils=[])},e.prototype._stopNow=function(){this._prod._stop(),this._err=s,this._stopID=s},e.prototype._add=function(e){var t=this._target
if(t!==s)return t._add(e)
var n=this._ils
if(n.push(e),!(n.length>1))if(this._stopID!==s)clearTimeout(this._stopID),this._stopID=s
else{var r=this._prod
r!==s&&r._start(this)}},e.prototype._remove=function(e){var t=this,n=this._target
if(n!==s)return n._remove(e)
var r=this._ils,i=r.indexOf(e)
i>-1&&(r.splice(i,1),this._prod!==s&&r.length<=0?(this._err=s,this._stopID=setTimeout((function(){return t._stopNow()}))):1===r.length&&this._pruneCycles())},e.prototype._pruneCycles=function(){this._hasNoSinks(this,[])&&this._remove(this._ils[0])},e.prototype._hasNoSinks=function(e,t){if(-1!==t.indexOf(e))return!0
if(e.out===this)return!0
if(e.out&&e.out!==s)return this._hasNoSinks(e.out,t.concat(e))
if(e._ils){for(var n=0,r=e._ils.length;n<r;n++)if(!this._hasNoSinks(e._ils[n],t.concat(e)))return!1
return!0}return!1},e.prototype.ctor=function(){return this instanceof L?L:e},e.prototype.addListener=function(e){e._n=e.next||o,e._e=e.error||o,e._c=e.complete||o,this._add(e)},e.prototype.removeListener=function(e){this._remove(e)},e.prototype.subscribe=function(e){return this.addListener(e),new h(this,e)},e.prototype[i.default]=function(){return this},e.create=function(t){if(t){if("function"!=typeof t.start||"function"!=typeof t.stop)throw new Error("producer requires both start and stop functions")
u(t)}return new e(t)},e.createWithMemory=function(e){return e&&u(e),new L(e)},e.never=function(){return new e({_start:o,_stop:o})},e.empty=function(){return new e({_start:function(e){e._c()},_stop:o})},e.throw=function(t){return new e({_start:function(e){e._e(t)},_stop:o})},e.from=function(t){if("function"==typeof t[i.default])return e.fromObservable(t)
if("function"==typeof t.then)return e.fromPromise(t)
if(Array.isArray(t))return e.fromArray(t)
throw new TypeError("Type of input to from() must be an Array, Promise, or Observable")},e.of=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return e.fromArray(t)},e.fromArray=function(t){return new e(new v(t))},e.fromPromise=function(t){return new e(new b(t))},e.fromObservable=function(t){if(t.endWhen)return t
var n="function"==typeof t[i.default]?t[i.default]():t
return new e(new p(n))},e.periodic=function(t){return new e(new E(t))},e.prototype._map=function(e){return new(this.ctor())(new A(e,this))},e.prototype.map=function(e){return this._map(e)},e.prototype.mapTo=function(e){var t=this.map((function(){return e}))
return t._prod.type="mapTo",t},e.prototype.filter=function(t){var n,r,i=this._prod
return new e(i instanceof S?new S((n=i.f,r=t,function(e){return n(e)&&r(e)}),i.ins):new S(t,this))},e.prototype.take=function(e){return new(this.ctor())(new P(e,this))},e.prototype.drop=function(t){return new e(new y(t,this))},e.prototype.last=function(){return new e(new x(this))},e.prototype.startWith=function(e){return new L(new R(this,e))},e.prototype.endWhen=function(e){return new(this.ctor())(new w(e,this))},e.prototype.fold=function(e,t){return new L(new T(e,t,this))},e.prototype.replaceError=function(e){return new(this.ctor())(new N(e,this))},e.prototype.flatten=function(){return new e(new C(this))},e.prototype.compose=function(e){return e(this)},e.prototype.remember=function(){return new L(new j(this))},e.prototype.debug=function(e){return new(this.ctor())(new _(this,e))},e.prototype.imitate=function(e){if(e instanceof L)throw new Error("A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq")
this._target=e
for(var t=this._ils,n=t.length,r=0;r<n;r++)e._add(t[r])
this._ils=[]},e.prototype.shamefullySendNext=function(e){this._n(e)},e.prototype.shamefullySendError=function(e){this._e(e)},e.prototype.shamefullySendComplete=function(){this._c()},e.prototype.setDebugListener=function(e){e?(this._d=!0,e._n=e.next||o,e._e=e.error||o,e._c=e.complete||o,this._dl=e):(this._d=!1,this._dl=s)},e.merge=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new e(new f(t))},e.combine=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new e(new g(t))},e}()
t.Stream=k
var L=function(e){function t(t){var n=e.call(this,t)||this
return n._has=!1,n}return r(t,e),t.prototype._n=function(t){this._v=t,this._has=!0,e.prototype._n.call(this,t)},t.prototype._add=function(e){var t=this._target
if(t!==s)return t._add(e)
var n=this._ils
if(n.push(e),n.length>1)this._has&&e._n(this._v)
else if(this._stopID!==s)this._has&&e._n(this._v),clearTimeout(this._stopID),this._stopID=s
else if(this._has)e._n(this._v)
else{var r=this._prod
r!==s&&r._start(this)}},t.prototype._stopNow=function(){this._has=!1,e.prototype._stopNow.call(this)},t.prototype._x=function(){this._has=!1,e.prototype._x.call(this)},t.prototype.map=function(e){return this._map(e)},t.prototype.mapTo=function(t){return e.prototype.mapTo.call(this,t)},t.prototype.take=function(t){return e.prototype.take.call(this,t)},t.prototype.endWhen=function(t){return e.prototype.endWhen.call(this,t)},t.prototype.replaceError=function(t){return e.prototype.replaceError.call(this,t)},t.prototype.remember=function(){return this},t.prototype.debug=function(t){return e.prototype.debug.call(this,t)},t}(k)
t.MemoryStream=L
var D=k
t.default=D},function(e,t,n){"use strict"
n.r(t),function(e,r){var i,s=n(14)
i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r
var o=Object(s.default)(i)
t.default=o}.call(this,n(12),n(13)(e))},function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict"
function r(e){var t,n=e.Symbol
return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"PostIndex",(function(){return g}))
var r=n(16),i=n.n(r),s=n(1),o=n.n(s),a=n(19),c=n.n(a)
n(20)
const l=[],u=/^[a-z0-9]+:\/\//,h=e=>e.replace(u,""),d=i()(e=>{c()([...new Set(e)]).filter(o.a).forEach(p)}),p=e=>{l.push(h(e))}
function f(e){if(!o()(e.key))throw new Error("Can't register post without a key (post: "+JSON.stringify(e)+")")
p(e.key)}function m(e){if(o()(e.key))return l.indexOf(h(e.key))>=0
throw new Error("Can't look for a post without a key (post: "+JSON.stringify(e)+")")}const g={loadInitialURLs:d,register:f,has:m,filter:function(e){if(!m(e))return f(e),e},destroy:function(){l.splice(0,l.length)}}},function(e,t,n){var r=n(17)
e.exports=function(e){return r(2,e)}},function(e,t,n){var r=n(18)
e.exports=function(e,t){var n
if("function"!=typeof t)throw new TypeError("Expected a function")
return e=r(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=void 0),n}}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var s=e[t]
s&&(i[r++]=s)}return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"error",(function(){return o})),n.d(t,"warn",(function(){return a})),n.d(t,"info",(function(){return c})),n.d(t,"log",(function(){return l}))
var r=n(1),i=n.n(r)
function s(e){return i()(e[0])?["[bastian] "+e[0],...e.slice(1)]:["[bastian]",...e]}const o=(...e)=>console.error(...s(e)),a=(...e)=>{console.warn(...s(e))},c=(...e)=>{},l=(...e)=>{}},function(e,t,n){"use strict"
function r(e){return Array.isArray(e)?e:[e]}n.r(t),n.d(t,"castArray",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"setKey",(function(){return f})),n.d(t,"$Falkor",(function(){return m}))
var r=n(1),i=n.n(r),s=n(9),o=n.n(s),a=n(20),c=n(23),l=n(30),u=n(25),h=n(8)
let d
const p={},f=e=>{let t=e.key
i()(t)||o()(t)||(Object(u.get)(e,"content.url")?t=e.content.url:Object(u.get)(e,"content.video.id")?t=e.content.video.id:e.id&&(t=e.id)),t&&(e.key=String(t).trim())}
class m extends h.$OnDemandSource{static getInstance(e){if(e&&!d&&(d=new m(e,p)),d)return d
throw new Error("Couldn't return an $Falkor instance")}constructor(e,t){t!==p&&Object(a.warn)("Class $Falkor is a singleton and shouldn't be called directly."),super(e.items),this.minimun=20,this.feedId=c.Configs.get("feedId"),this.setNextFetch(e.nextFetch||e.nextPage),this.setNextPage(e.nextPage)}whenToFetch(){let e=!1
return e=this.buffer.length<=this.minimun&&!this.isEnded(),e}static buildRequestUrl(e,t,n){return e+"/page/"+t+(n?"/query_parameter/"+encodeURI(n):"")}store(e){return Array.isArray(e)||(e=[e]),e.forEach(e=>{f(e),e.source=m.staticName}),super.store(e)}getResourceURI(){const e=l.Settings.get("RESOURCE_URI")
return e.match(/local.globoi.com/g)?e.replace("http://local.globoi.com:4000","https://falkor-cda.bastian.globo.com"):e}howToFetch(){const e=this.nextFetch,t=this.getResourceURI(),n=l.Settings.get("DEVICE_GROUP"),r={method:"GET",headers:new Headers({"X-Mobile-Group":n,Vary:"X-Mobile-Group"})},i=m.buildRequestUrl(t,e,l.Settings.get("QUERY_PARAMETER"))
if(o()(e))return fetch(i,r).then(e=>e.json()).then(this.unlock).then(e=>{this.setNextPage(e.nextPage),this.setNextFetch(e.nextFetch||e.nextPage),this.saveAndResumeStream(e.items)}).catch(e=>{this.listener&&this.listener.error(e)})}whenToComplete(){let e
return e=null===this.nextPage,e}}m.staticName="$Falkor"},function(e,t,n){"use strict"
n.r(t),n.d(t,"set",(function(){return d})),n.d(t,"get",(function(){return p})),n.d(t,"decr",(function(){return f})),n.d(t,"incr",(function(){return m})),n.d(t,"absorbConfigs",(function(){return v})),n.d(t,"Configs",(function(){return y}))
var r=n(24),i=n.n(r),s=n(9),o=n.n(s),a=n(25),c=n(28),l=n(29),u=n(30)
const h=new Map([["referer",""]])
function d(e,t){return h.set(e,t),t}const p=(e,t)=>{const n=h.get(e)
return i()(n)?t:n},f=(e,t=1)=>{const n=parseInt(p(e,null),10)
if(o()(n)&&t>0)return d(e,n-t)},m=(e,t=1)=>{const n=parseInt(p(e,null),10)
if(o()(n)&&t>0)return d(e,n+t)},g=[["forePosts","config.forePosts",0],["headlineVariation","config.headlineVariation"],["componentPosition","config.componentPosition",7],["feedType","config.feedType",u.Settings.get("FEED_TYPE")||"unknown-type"],["photoOverVideo","config.photoOverVideo",u.Settings.get("IS_PHOTO_PRIORIZED")||!1],["recommendationContentId","config.recommendation.contentId",u.Settings.get("RECOMMENDATION.CONTENT_ID")||"feed"],["disableDateTime","config.disableDateTime",!1]],v=e=>{for(const[t,n,r]of g)d(t,Object(a.get)(e,n)||r)
d("feedId",e.id||Object(a.get)(e,"items.0.feedId")||"unknown-feedId"),d("referer",e.referer),d("recommendationCounter",0),b(e),E(e),_(e)},b=e=>{const t="distributed-components",n="cards"
let r
const i=u.Settings.get("EXTENSION_MODEL"),s=Object(a.get)(e,"config.componentPosition")
r=[t,n].includes(i)?i:o()(s)?t:n,d("thirdPartyingModel",r)},E=e=>{const t=Object(a.get)(e,"config.recommendation.start")||Object(a.get)(e,"config.cutRange")+1,n=p("forePosts")
d("recommendationStart",(!c.At.smallScreen||"uber"===p("headlineVariation"))&&t<=n?n+1:t)},_=e=>{const t=Object(a.get)(e,"config.recommendation.active")
d("isRecommended",l.Globals.BASTIAN_FORCE_RECOMMENDED||(i()(t)?u.Settings.get("IS_RECOMMENDED",!1):t))},y={set:d,has:e=>h.has(e),get:p,unset:e=>h.delete(e),clear:()=>h.clear(),decr:f,incr:m,absorbConfigs:v}
t.default=y},function(e,t){e.exports=function(e){return void 0===e}},function(e,t,n){"use strict"
n.r(t)
var r=n(26),i=n.n(r)
n.d(t,"get",(function(){return i.a}))},function(e,t,n){n(27)
e.exports=function(e,t){for(var n=t.split("."),r=n.pop();t=n.shift();)if(null==(e=e[t]))return
return e[r]}},function(e,t){e.exports=function(e){switch(typeof e){case"string":case"number":case"boolean":return!0}return null==e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"SMALL_SCREEN",(function(){return i})),n.d(t,"MEDIUM_SCREEN",(function(){return s})),n.d(t,"LARGE_SCREEN",(function(){return o})),n.d(t,"SCREEN_BREAKPOINT",(function(){return p})),n.d(t,"At",(function(){return g}))
var r=n(29)
const[i,s,o]=[1,2,4]
let a,c,l,u,h,d
const p={SMALL:0,MEDIUM:540,LARGE:1e3}
a=!0
const f=e=>Number(r.Globals.matchMedia("(min-width: "+e+"px)").matches),m=Number(!0)<<f(p.MEDIUM)<<f(p.LARGE)
u=e=>m===e,h=e=>m>e,d=u(i),l=u(s),c=u(o)
const g={server:!1,client:!0,largeScreen:c,mediumScreen:l,smallScreen:d,screen:u,screenGreatThan:h}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Globals",(function(){return r}))
const r=function(){return this||(0,eval)("this")}()},function(e,t,n){"use strict"
n.r(t),n.d(t,"Settings",(function(){return p}))
var r=n(31),i=n.n(r),s=n(24),o=n.n(s),a=n(25),c=n(40),l=n(29)
let u,h
const d=e=>"SETTINGS.BASTIAN."+e
u=i()(e=>Object(c.has)(l.Globals,d(e)))
h=i()((e,t)=>{let n=Object(a.get)(l.Globals,d(e))
return o()(n)&&!o()(t)&&(n=t),n},(...e)=>e.map(String).join("|"))
const p={has:u,get:h}},function(e,t,n){var r=n(32)
function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function")
var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache
if(s.has(i))return s.get(i)
var o=e.apply(this,r)
return n.cache=s.set(i,o)||s,o}
return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},function(e,t,n){var r=n(33),i=n(34),s=n(37),o=n(38),a=n(39)
function c(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=s,c.prototype.has=o,c.prototype.set=a,e.exports=c},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(35),i=Array.prototype.splice
e.exports=function(e){var t=this.__data__,n=r(t,e)
return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)}},function(e,t,n){var r=n(36)
e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n
return-1}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(35)
e.exports=function(e){var t=this.__data__,n=r(t,e)
return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(35)
e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(35)
e.exports=function(e,t){var n=this.__data__,i=r(n,e)
return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},function(e,t,n){"use strict"
n.r(t)
var r=n(41),i=n.n(r)
n.d(t,"has",(function(){return i.a}))},function(e,t,n){var r=n(26)
e.exports=function(e,t){return void 0!==r(e,t)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"reportToRealtime",(function(){return m}))
var r=n(5),i=n.n(r),s=n(28),o=n(29),a=n(43),c=n(25)
let l
const u=[]
let h=!1
const d=()=>i()(Object(c.get)(o.Globals,"$.glbrealtime.gerar_clique")),p=()=>{for(const e of u)o.Globals.$.glbrealtime.gerar_clique(...e)};(async()=>{await Object(a.availabilityOf)("$.glbrealtime.gerar_clique",d,"30s"),d()&&(h=!0,p())})()
const f=s.At.smallScreen?"mobile":"desktop"
l=function(e,t){u.push([e,f,t]),h&&p()}
const m=l},function(e,t,n){"use strict"
n.r(t),n.d(t,"check",(function(){return _})),n.d(t,"availabilityOf",(function(){return y})),n.d(t,"MISSING_WARN",(function(){return O})),n.d(t,"missingWarn",(function(){return w}))
var r=n(31),i=n.n(r),s=n(1),o=n.n(s),a=n(44),c=n.n(a),l=n(23),u=n(51),h=n(52),d=n(20)
let p,f
let m=!1
const g={}
let v=0
const b=new Promise(()=>{}),E=()=>{m=!0
for(const e in g){const t=g[e]
!t.done&&Object(u.safeCall)(t.assertion,null)&&(v-=1,t.done=!0,c()(t.resolve))}v>0?setTimeout(E,500):m=!1}
p=(e,t={})=>{const{id:n="",timeout:r=1e4}=t,i=e.toString()+n
if(i in g)return g[i].promise
const s={assertion:e,done:!1,promise:b},a=new Promise((e,t)=>{s.resolve=e,setTimeout(()=>{s.done=!0,t(new Error("detector test timeout of "+i))},o()(r)?Object(h.timeToInt)(r):r)})
return s.promise=a,g[i]=s,v+=1,m||c()(E),a},f=async(e,t,n)=>{try{await _(t,{timeout:n})}catch(r){"esppub"!==l.Configs.get("feedType")&&w(e)}}
const _=p,y=f,O="seems to be missing on the page",w=i()(e=>Object(d.warn)(e,O))},function(e,t,n){var r=n(45),i=n(46)((function(e,t){return r(e,1,t)}))
e.exports=i},function(e,t){e.exports=function(e,t,n){if("function"!=typeof e)throw new TypeError("Expected a function")
return setTimeout((function(){e.apply(void 0,n)}),t)}},function(e,t,n){var r=n(47),i=n(48),s=n(50)
e.exports=function(e,t){return s(i(e,t,r),e+"")}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(49),i=Math.max
e.exports=function(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var s=arguments,o=-1,a=i(s.length-t,0),c=Array(a);++o<a;)c[o]=s[t+o]
o=-1
for(var l=Array(t+1);++o<t;)l[o]=s[o]
return l[t]=n(c),r(e,this,l)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"safeCall",(function(){return o}))
var r=n(5),i=n.n(r),s=n(20)
const o=(e,t,...n)=>{try{if(i()(e))return e.apply(t,n)
throw new TypeError("Given value is not a function")}catch(r){Object(s.error)(r)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"timeToInt",(function(){return a}))
var r=n(31),i=n.n(r)
const s={ms:{value:1,extractor:/^(\d+)ms$/},seg:{value:1e3,extractor:/^(\d+|\d+\.\d+)s$/},min:{value:6e4,extractor:/^(\d+|\d+\.\d+)min$/},hr:{value:36e5,extractor:/^(\d+|\d+\.\d+)hr$/},d:{value:864e5,extractor:/^(\d+|\d+\.\d+)d$/}},o=i()(e=>{for(const t in s){const n=e.match(s[t].extractor)
if(n)return s[t].value*Number(n[1])}throw new Error("Could not find a resolver for translate "+e)}),a=i()(e=>e.split(" ").reduce((e,t)=>e+o(t),0))},function(e,t,n){"use strict"
n.r(t),n.d(t,"CARD_RENDERED",(function(){return r})),n.d(t,"PAGE_RENDERED",(function(){return i})),n.d(t,"APP_LOADED",(function(){return s})),n.d(t,"ELEMENT_VIEWED",(function(){return o})),n.d(t,"LAUNCH_FAILED",(function(){return a})),n.d(t,"ITEM_CLICK",(function(){return c})),n.d(t,"VIDEOPREVIEW_INTERSECT",(function(){return l}))
const r="bastian-feed-card_rendered",i="bastian-feed-page_rendered",s="bstn-app-loaded",o="element-view",a="bstn-launch-failed",c="bstn-item-click",l="bstn-videopreview-intersect"},function(e,t,n){"use strict"
n.r(t),n.d(t,"triggerDomEvent",(function(){return l}))
var r=n(5),i=n.n(r),s=n(44),o=n.n(s),a=n(51)
let c
c=function(e,t,n){const r=new CustomEvent(e,{bubbles:!0,cancelable:!0})
i()(n)&&Object(a.safeCall)(n,null,r),o()(()=>t.dispatchEvent(r))}
const l=c},function(e,t,n){"use strict"
n.r(t),n.d(t,"FALLBACK_ALTERNATIVE",(function(){return m})),n.d(t,"Experiment",(function(){return g})),n.d(t,"EXPERIMENTS",(function(){return b})),n.d(t,"GloboAB",(function(){return E})),n.d(t,"libAvailability",(function(){return _})),n.d(t,"getClient",(function(){return y}))
var r=n(16),i=n.n(r),s=n(5),o=n.n(s),a=n(20),c=n(29),l=n(43),u=n(40),h=n(56)
let d,p,f
p=()=>Object(u.has)(c.Globals,"GloboAB")&&o()(c.Globals.GloboAB)
const m=Symbol("fallback alternative")
d=new class{constructor(){let e
this.experiments=new Map,this.promisesCallbacks=new Map,this.batchRaffled=!1,this.applicationLoad=new Promise(t=>{e=t}).then(()=>this.raffleAll()),this.applicationLoadResolve=e}setApplicationAsLoaded(){this.applicationLoadResolve()}register(e,t={}){let n=this.experiments.get(e)
if(n)return n
let r=()=>{},i=()=>{}
const s=new Promise((e,t)=>{i=e,r=t})
return n=this.save({experimentName:e,options:t,promise:s,resolve:i,reject:r}),this.batchRaffled&&this.immediateRaffle(n),n}save(e){const{experimentName:t,options:n,promise:r,resolve:i,reject:s}=e,o=new g(t,r,n)
return this.experiments.set(t,o),this.promisesCallbacks.set(o,{resolve:i,reject:s}),o}get(e){return this.experiments.get(e)}async raffleAll(){let e
try{e=await f()}catch(t){}if(e){if(this.experiments.size>0){const e=Array.from(this.experiments.values())
this.requestMulti(e.filter(e=>e.options.skipImpression)),this.requestMulti(e.filter(e=>!e.options.skipImpression))}this.batchRaffled=!0}}async requestMulti(e){const t=[],n=[],r=[]
let i,s={}
for(const a of e){const e=this.promisesCallbacks.get(a)
if(e){const{name:i,options:o}=a,{resolve:c,reject:l}=e
t.push(i),s=o,n.push({name:i,fn:c}),r.push(l)}}try{i=await f()}catch(c){}if(i){const e=i.createOptions().timeout(5e3)
e.options.skipImpressions=!1,s.skipImpression&&e.skipImpression(),i.choose(t).then((o=n,e=>{for(const{name:n,fn:r}of o)if(n in e)try{r(e[n])}catch(t){Object(a.error)(t)}})).catch(function(e){return t=>{for(const r of e)try{r(t)}catch(n){Object(a.error)(n)}}}(r))}var o}async immediateRaffle(e){await Object(l.check)(p)
const t=this.promisesCallbacks.get(e)
if(t){const{name:r,options:i}=e,{resolve:s,reject:o}=t
let a
try{a=await f()}catch(n){}if(a){const e=a.options().timeout(3e3)
return e.options.skipImpressions=!1,i.skipImpression&&e.skipImpression(),a.choose(r).then(s).catch(o)}}}}
class g{constructor(e,t,n){this.name=e,this.promise=t,this.options=n,this.effects=new Map,this.impressionRecorded=Boolean(n.skipImpression)}setEffects(e,t){this.effects.clear()
for(const{name:n,callback:r}of e)this.addEffect(n,r)
this.addEffect(m,t),this.engageEffects()}addEffect(e,t){const n=this.effects.get(e)
n?n.push(t):this.effects.set(e,[t])}async engageEffects(){try{const e=await this.promise,t=this.effects.get(e.alternative)
t?(v(t),this.markImpression(e)):this.invokeFallback(e)}catch(e){Object(a.error)("Failed to resolve AB promise",e),this.invokeFallback()}}markImpression(e){this.impressionRecorded||(e.impression(),this.impressionRecorded=!0)}invokeFallback(e){const t=this.effects.get(m)
if(t){let n
e&&(n=this.makeAlternativeSurface(e)),v(t,n)}}makeAlternativeSurface(e){const t={}
return t.alternative=e.alternative,this.impressionRecorded||(t.markImpression=()=>this.markImpression(e)),t}async convert(){(await this.promise).conversion()}}function v(e,t){for(;e.length>0;){const r=e.shift()
try{r(t)}catch(n){Object(a.error)(n)}}}f=i()(async()=>{if(c.Globals.globalWebdeps){try{await c.Globals.globalWebdeps("globo-ab")}catch(e){throw new Error("Failed to fetch globo-ab")}const t=c.Globals.location.hostname.split(".").includes("qa")||["localhost"].includes(c.Globals.location.hostname)?"qa":"prod"
return new c.Globals.GloboAB(t,h.Horizon.client)}})
const b={},E=d,_=p,y=f},function(e,t,n){"use strict"
n.r(t),n.d(t,"Horizon",(function(){return v}))
var r=n(1),i=n.n(r),s=n(57),o=n(58),a=n.n(o),c=n(10),l=n.n(c),u=n(20),h=n(59),d=n(29),p=(n(60),n(30)),f=n(23)
let m
class g extends h.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==f.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){d.Globals.location.hostname.includes(".qa.")&&s.Settings.useQAConfiguration()
const e=p.Settings.get("PORTAL"),t=p.Settings.get("DEVICE_GROUP")
i()(e)&&i()(t)?this.client=new s.HorizonClient(e.toLowerCase(),t.toLowerCase(),"feed"):Object(u.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const e=l.a.periodic(1e4).filter(()=>"visible"===d.Globals.document.visibilityState),t=l.a.periodic(6e4)
l.a.merge(e,t).compose(a()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report(e,t){const n=new e(t).toSend()
this.client&&this.client.send(n)}}m=new g
const v=m},function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=i(n(10))
function i(e){return e&&e.__esModule?e:{default:e}}var s={AVOID_COOKIE_USAGE:!1,EVENTS_BUFFER_SIZE:100,EVENTS_SENDER_INTERVAL:1e4,EVENTS_SENDER_MIN_INTERVAL:5e3,EVENTS_SENDER_MAX_INTERVAL:2e4,EVENTS_DISCARD_AFTER_MSECS:36e5,EVENTS_BULK_SIZE:10,HORIZON_CALLBACK_STACK_LIMIT:1e3,HORIZON_TRACK_IDENTIFICATION_RESOURCE:"id",HORIZON_TRACK_HOST:"horizon-track.globo.com",HORIZON_CLIENT_UUID:i(n(2)).default.getResource("clientInstanceUUID",(0,r.default)()),HORIZON_REQUEST_ENCODING:"base64",HORIZON_SCHEMAS_HOST:"horizon-schemas.globo.com",IDENTIFICATION_LOAD_RETRY_AFTER_MSECS:5e3,PACKAGE_VERSION:"1.5.1",SCHEMA_VALIDATOR_SCRIPT_URL:"s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES:2,SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS:1e4,USE_HTTPS:!0},o={avoidCookieUsage:function(){s.AVOID_COOKIE_USAGE=!0},useHTTPOnly:function(){s.USE_HTTPS=!1},useQAConfiguration:function(){s.HORIZON_TRACK_HOST="horizon-track.qa.globoi.com",s.HORIZON_SCHEMAS_HOST="horizon-schemas.qa.globoi.com",s.HORIZON_REQUEST_ENCODING="json"}}
t.default=Object.assign(s,o)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r={COMPONENT_NOT_READY:"[Horizon] Component is not ready.",COMPONENT_UNAVAILABLE:"[Horizon] Class or function is required.",DUPLICATED_SCHEMA:"[Horizon] Duplicated schema.",ERROR_LOADING_RESOURCE:"[Horizon] Failed to load resource.",INVALID_AUTH_TOKEN:"[Horizon] Invalid authorization token.",INVALID_DATA:"[Horizon] Invalid data.",INVALID_DATE:"[Horizon] Invalid date-time RFC 3339 format.",INVALID_ENVIRONMENT:"[Horizon] Invalid environment value.",INVALID_FORMAT:"[Horizon] Invalid event format.",INVALID_REQUEST:"[Horizon] Invalid request.",INVALID_TIMESTAMP:"[Horizon] Invalid timestamp.",INVALID_VERSION_FORMAT:"[Horizon] Invalid version format.",LIMIT_EXCEEDED:"[Horizon] Resource limit exceeded.",MUST_BE_DEFINED:"[Horizon] Parameter or argument must be defined",SCHEMA_VALIDATOR_ERROR_LOADING:"[Horizon] Could not load SchemaValidator.",UNSUPPORTED_TYPE:"[Horizon] Unsupported type.",UNSUPPORTED_TENANT:"[Horizon] Unsupported tenant.",UNSUPPORTED_ENCODER:"[Horizon] Unsupported encoder.",USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE:"[Horizon] Can not set or remove a logged user when AVOID_COOKIE_USAGE is not enabled."},i={mustBeDefined:function(e){throw new Error(r.MUST_BE_DEFINED+": "+e+".")}}
t.default=Object.assign(r,i)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){return window.horizonResources=window.horizonResources||{},window.horizonResources}
t.default={getContext:r,getResource:function(e,t){var n=r()
return n[e]=n[e]||t,n[e]}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default={execAsync:function(e,t){setTimeout((function(){return e(t)}),1)}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default={request:function(e,t,n,r){var i=new XMLHttpRequest
i.open(e,t,!0),i.onload=function(){return i.status<400?n(JSON.parse(i.response)):r(i.response)},i.onerror=r,i.send()}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(3)),s=l(n(2)),o=l(n(1)),a=l(n(4)),c=l(n(0))
function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){return s.default.getResource("idManager",{clientIDs:{}})},h=["GLBID","GST"],d="statusReady",p="statusNotReady",f="statusLoading",m="statusScheduled",g="statusError",v=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state=n?d:p,this.url=t,this.bypass=n,this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}}return r(e,[{key:"onLoad",value:function(e){this.callbacks.onLoad.push(e)}},{key:"onRetry",value:function(e){this.callbacks.onRetry.push(e)}},{key:"onReady",value:function(e){if(this.state===d)return e(u().clientIDs)
if(this.callbacks.onReady.length>c.default.HORIZON_CALLBACK_STACK_LIMIT)throw new Error(o.default.LIMIT_EXCEEDED+" IDManager callback stack.")
return this.callbacks.onReady.push(e)}},{key:"onError",value:function(e){this.state===g?e():this.callbacks.onError.push(e)}},{key:"getAsKeyValue",value:function(){if(!this.isReady())throw new Error(""+o.default.COMPONENT_NOT_READY)
if(this.bypass)return""
var e=u()
return Object.keys(e.clientIDs).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e.clientIDs[t])})).join("&")}},{key:"isReady",value:function(){return this.state===d}},{key:"retry",value:function(){var e=this
this.state=m,this.callbacks.onRetry.forEach((function(e){return e()})),setTimeout((function(){e.state=p,e.load()}),c.default.IDENTIFICATION_LOAD_RETRY_AFTER_MSECS)}},{key:"setLoggedUser",value:function(e,t){if(-1===h.indexOf(e))throw Error(o.default.INVALID_AUTH_TOKEN)
u().clientIDs[e]=t}},{key:"removeLoggedUser",value:function(){var e=u()
h.forEach((function(t){return delete e.clientIDs[t]}))}},{key:"load",value:function(){var e=this,t=u()
if(this.state===p){this.state=f,this.callbacks.onLoad.forEach((function(e){return e()}))
var n=c.default.USE_HTTPS?"https://":"http://"
a.default.request("GET",""+n+this.url,(function(n){t.clientIDs=Object.assign(t.clientIDs||{},n),e.state=d,e.callbacks.onReady.forEach((function(e){return i.default.execAsync(e,t.clientIDs)}))}),(function(t){e.state=g,e.callbacks.onError.forEach((function(e){return i.default.execAsync(e,t)})),e.retry()}))}}}]),e}(),b=function(e){var t=u()
if(!t.instance){var n=e||c.default.HORIZON_TRACK_HOST+"/"+c.default.HORIZON_TRACK_IDENTIFICATION_RESOURCE,r=!1===c.default.AVOID_COOKIE_USAGE
t.instance=new v(n,r)}return t.instance}
t.default={getInstance:b,getContextManager:u,setLoggedUser:function(e,t){if(!c.default.AVOID_COOKIE_USAGE)throw Error(o.default.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
e&&0!==e.length||o.default.mustBeDefined("tokenName"),t&&0!==t.length||o.default.mustBeDefined("tokenValue"),b().setLoggedUser(e,t)},removeLoggedUser:function(){if(!c.default.AVOID_COOKIE_USAGE)throw Error(o.default.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
b().removeLoggedUser()}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.IDManager=t.Settings=t.HorizonClient=void 0,n(7)
var r=o(n(9)),i=o(n(0)),s=o(n(5))
function o(e){return e&&e.__esModule?e:{default:e}}var a={setLoggedUser:s.default.setLoggedUser,removeLoggedUser:s.default.removeLoggedUser}
t.HorizonClient=r.default,t.Settings=i.default,t.IDManager=a},function(e,t,n){"use strict"
n(8).polyfill()},function(e,t,n){"use strict"
function r(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object")
for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r]
if(null!=i)for(var s=Object.keys(Object(i)),o=0,a=s.length;o<a;o++){var c=s[o],l=Object.getOwnPropertyDescriptor(i,c)
void 0!==l&&l.enumerable&&(n[c]=i[c])}}return n}e.exports={assign:r,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:r})}}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=h(n(0)),s=h(n(13)),o=h(n(1)),a=h(n(15)),c=h(n(26)),l=h(n(27)),u=h(n(5))
function h(e){return e&&e.__esModule?e:{default:e}}var d="stateReady",p="stateNotReady",f="stateLoading",m=["web","instant-article","app"],g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this,h=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"web"
if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tenant=t||l.default.getTenant()||o.default.mustBeDefined("tenant"),this.deviceGroup=n||l.default.getDeviceGroup()||o.default.mustBeDefined("deviceGroup"),this.defaultContentType=h,-1===m.indexOf(d))throw Error(o.default.INVALID_ENVIRONMENT)
this.environment=d,this.validator=s.default,this.clientVersion=i.default.PACKAGE_VERSION,this.state=p,this.referer=document.referrer
var f=null,g=null,v=null
this.setSchemasProvider=function(e){f=e},this.getSchemasProvider=function(){if(!f){var e=c.default.getInstance()
r.setSchemasProvider(e)}return f},this.setEventBus=function(e){g=e},this.getEventBus=function(){if(!g){var e=a.default.getInstance(r.tenant,r.deviceGroup,r.environment,r.getIdManager())
r.setEventBus(e)}return g},this.setIdManager=function(e){v=e},this.getIdManager=function(){if(!v){var e=u.default.getInstance()
r.setIdManager(e)}return v},this.isReady=function(){return!!f&&!!v&&r.validator.isReady()&&f.isReady()&&v.isReady()},window.addEventListener("beforeunload",(function(){r.unload()}))}return r(e,[{key:"useDefaultContentType",value:function(e){this.defaultContentType=e}},{key:"setValidator",value:function(e){this.validator=e}},{key:"setReferer",value:function(e){this.referer=e||document.referrer}},{key:"unload",value:function(){this.flush()}},{key:"getScopeInfo",value:function(){return{url:document.location.href,actionTs:+Date.now(),horizonClientVersion:this.clientVersion,horizonClientReferer:this.referer}}},{key:"validateBeforeEnqueue",value:function(e){var t=this.getSchemasProvider().get(e.id,e.version)
this.validator.validateFor(e,t)}},{key:"onReady",value:function(e){this.validator.isReady()?this.getSchemasProvider().isReady()?this.getIdManager().isReady()?(this.state=d,e()):(this.state=f,this.getIdManager().onReady(e),this.getIdManager().load()):(this.state=f,this.getSchemasProvider().onReady(e),this.getSchemasProvider().load()):(this.state=f,this.validator.onReady(e),this.validator.load())}},{key:"flush",value:function(){var e=this
this.isReady()?this.getEventBus().flush():this.onReady((function(){return e.flush()}))}},{key:"send",value:function(e){var t=this
if(this.validator.validateArgs(e),!this.isReady())return this.state===p&&this.flush(),void this.onReady((function(){return t.send(e)}))
this.validateBeforeEnqueue(e)
var n=this.getScopeInfo(),r=Object.assign({},n,e)
r.contentType||(this.defaultContentType||o.default.mustBeDefined("contentType"),r.contentType=this.defaultContentType),this.getEventBus().enqueue(r)}}]),e}()
t.default=g},function(e,t,n){var r=n(11),i=n(12)
e.exports=function(e,t,n){var s=t&&n||0
"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null)
var o=(e=e||{}).random||(e.rng||r)()
if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;++a)t[s+a]=o[a]
return t||i(o)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(n){var r=new Uint8Array(16)
e.exports=function(){return n(r),r}}else{var i=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255
return i}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1)
e.exports=function(e,t){var r=t||0,i=n
return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=a(n(14)),s=a(n(1)),o=a(n(0))
function a(e){return e&&e.__esModule?e:{default:e}}var c={ready:[]},l=["url"],u=function(){return!!window.tv4},h=function(e){return null===e||isNaN(e)&&!isNaN(Date.parse(e))?null:s.default.INVALID_DATE}
t.default={validateFor:function(e,t){if(!u())throw new Error(s.default.ERROR_LOADING_RESOURCE+" Validator is not ready.")
if(!t)throw new Error(s.default.INVALID_DATA+" Argument: schema.")
if(!/\d+\.\d+/.test(e.version))throw new Error(s.default.INVALID_VERSION_FORMAT)
if(!tv4.validate(e.properties,t))throw new Error(s.default.INVALID_DATA+" "+e.id+" "+e.version+". "+tv4.error)},validateArgs:function(e){var t=Object.prototype.hasOwnProperty
if(!(e&&t.call(e,"id")&&t.call(e,"version")&&t.call(e,"properties")))throw new Error(s.default.INVALID_FORMAT+" Missing properties: "+JSON.stringify(e))
if("string"!=typeof e.id||"string"!=typeof e.version||"object"!==r(e.properties))throw new Error(s.default.INVALID_FORMAT+" Wrong object type: "+JSON.stringify(e))
if(l.filter((function(t){return e[t]&&"string"!=typeof e[t]})).length>0)throw new Error(s.default.INVALID_FORMAT+" Wrong object type: "+JSON.stringify(e))
if(e.id.length<2||e.version.length<3)throw new Error(s.default.INVALID_FORMAT+" Invalid property size: "+JSON.stringify(e))
var n=Object.assign({},e)
delete n.id,delete n.version,delete n.properties,delete n.contentType
var i=Object.keys(n)
if(i.length>0&&!i.every((function(e){return-1!==l.indexOf(e)})))throw new Error(s.default.INVALID_FORMAT+" Extra keys aren't allowed: "+JSON.stringify(n))},tv4IsValidData:h,isReady:u,onReady:function(e){if(u())return e()
if(c.ready.length>o.default.HORIZON_CALLBACK_STACK_LIMIT)throw new Error(s.default.LIMIT_EXCEEDED+" Validator callback stack.")
return c.ready.unshift(e)},load:function(){if(!i.default.isDefined("tv4")){var e=(o.default.USE_HTTPS?"https://":"http://")+o.default.SCHEMA_VALIDATOR_SCRIPT_URL;(0,i.default)([e],"tv4",{async:!0,numRetries:o.default.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,success:function(){tv4.addFormat("date-time",h),c.ready.forEach((function(e){return e()}))},error:function(e){throw new Error(s.default.SCHEMA_VALIDATOR_ERROR_LOADING+" "+e)}})}}}},function(e,t,n){var r,i,s
i=[],void 0===(s="function"==typeof(r=function(){var e=function(){},t={},n={},r={}
function i(e,t){if(e){var i=r[e]
if(n[e]=t,i)for(;i.length;)i[0](e,t),i.splice(0,1)}}function s(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function o(t,n,r,i){var s,a,c=document,l=r.async,u=(r.numRetries||0)+1,h=r.before||e,d=t.replace(/^(css|img)!/,"")
i=i||0,/(^css!|\.css$)/.test(t)?((a=c.createElement("link")).rel="stylesheet",a.href=d,(s="hideFocus"in a)&&a.relList&&(s=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(a=c.createElement("img")).src=d:((a=c.createElement("script")).src=t,a.async=void 0===l||l),a.onload=a.onerror=a.onbeforeload=function(e){var c=e.type[0]
if(s)try{a.sheet.cssText.length||(c="e")}catch(e){18!=e.code&&(c="e")}if("e"==c){if((i+=1)<u)return o(t,n,r,i)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet"
n(t,c,e.defaultPrevented)},!1!==h(t,a)&&c.head.appendChild(a)}function a(e,n,r){var a,c
if(n&&n.trim&&(a=n),c=(a?r:n)||{},a){if(a in t)throw"LoadJS"
t[a]=!0}function l(t,n){!function(e,t,n){var r,i,s=(e=e.push?e:[e]).length,a=s,c=[]
for(r=function(e,n,r){if("e"==n&&c.push(e),"b"==n){if(!r)return
c.push(e)}--s||t(c)},i=0;i<a;i++)o(e[i],r,n)}(e,(function(e){s(c,e),t&&s({success:t,error:n},e),i(a,e)}),c)}if(c.returnPromise)return new Promise(l)
l()}return a.ready=function(e,t){return function(e,t){var i,s,o,a=[],c=(e=e.push?e:[e]).length,l=c
for(i=function(e,n){n.length&&a.push(e),--l||t(a)};c--;)s=e[c],(o=n[s])?i(s,o):(r[s]=r[s]||[]).push(i)}(e,(function(e){s(t,e)})),a},a.done=function(e){i(e,[])},a.reset=function(){t={},n={},r={}},a.isDefined=function(e){return e in t},a})?r.apply(t,i):r)||(e.exports=s)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
n(16)
var i=h(n(2)),s=h(n(17)),o=h(n(0)),a=h(n(1)),c=h(n(22)),l=h(n(23)),u=h(n(24))
function h(e){return e&&e.__esModule?e:{default:e}}var d=function(){return i.default.getResource("bus",{})},p=function(){function e(t,n,r,i,s){var h=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentTenant=t||a.default.mustBeDefined("tenant"),this.instanceID=n||a.default.mustBeDefined("instanceID"),this.deviceGroup=r||a.default.mustBeDefined("deviceGroup"),this.environment=i||a.default.mustBeDefined("environment"),this.queue=new c.default(o.default.EVENTS_BUFFER_SIZE),this.idManager=s,this.dispatchNumber=1,this.actionCounter=0,(new l.default).every(o.default.EVENTS_SENDER_INTERVAL).call((function(){h.queue=h.filterQueue()
var e=h.prepareRequest()
h.dispatch(e,o.default.HORIZON_REQUEST_ENCODING)||e.actions.forEach((function(e){return h.enqueue(e)}))})).call(u.default).start()}return r(e,[{key:"setMaxQueueSize",value:function(e){this.queue=c.default.fromArray(this.queue.items,e)}},{key:"filterQueue",value:function(){var e=+Date.now()-o.default.EVENTS_DISCARD_AFTER_MSECS
return this.queue.filter((function(t){return t.actionTs>e}))}},{key:"prepareRequest",value:function(){var e=this.queue.splice(0,o.default.EVENTS_BULK_SIZE)
return this.actionCounter+=e.length,{horizonClientUUID:this.instanceID,horizonClientTenant:this.currentTenant,horizonClientTs:Date.now(),horizonClientType:"js",horizonClientDeviceGroup:this.deviceGroup,horizonDispatchNumber:this.dispatchNumber,horizonActionCounter:this.actionCounter,horizonEnvironment:this.environment,actions:e}}},{key:"isValidRequest",value:function(e){if(!e||e&&!e.actions)throw new Error(a.default.INVALID_REQUEST)
return e.actions.length>0}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",n=o.default.USE_HTTPS?"https://":"http://",r=this.idManager.getAsKeyValue(),i=r?"?"+r:"",a=""+n+o.default.HORIZON_TRACK_HOST+"/event/"+this.currentTenant+i,c=s.default.get(t)
if(!this.isValidRequest(e))return!1
this.dispatchNumber+=1
var l=c(e)
return navigator.sendBeacon(a,l)}},{key:"enqueue",value:function(e){if(!e.actionTs)throw new Error(a.default.INVALID_TIMESTAMP)
this.queue.push(e)}},{key:"flush",value:function(){for(;this.queue.length>0;){this.queue=this.filterQueue()
var e=this.prepareRequest()
this.dispatch(e,o.default.HORIZON_REQUEST_ENCODING)}}},{key:"length",get:function(){return this.queue.length}}]),e}()
t.default={getInstance:function(e,t,n,r){var i=d(),s=e+"-"+t
return i[s]||(i[s]=new p(e,o.default.HORIZON_CLIENT_UUID,t,n,r)),i[s]},reset:function(e,t){e&&0!==e.length||a.default.mustBeDefined("tenant"),t&&0!==t.length||a.default.mustBeDefined("deviceGroup")
var n=e+"-"+t
delete d()[n]},getContextBus:d}},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(){(function(){return"navigator"in this&&"sendBeacon"in this.navigator}).call(this)||("navigator"in this||(this.navigator={}),this.navigator.sendBeacon=function(e,t){var n=this.event&&this.event.type,r="unload"===n||"beforeunload"===n,i="XMLHttpRequest"in this?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")
i.open("POST",e,!r),i.withCredentials=!0,i.setRequestHeader("Accept","*/*"),function(e){return"string"==typeof e}(t)?(i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),i.responseType="text/plain"):function(e){return e instanceof Blob}(t)&&t.type&&i.setRequestHeader("Content-Type",t.type)
try{i.send(t)}catch(e){return!1}return!0}.bind(this))}).call("object"===("undefined"==typeof window?"undefined":n(window))?window:{})},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=o(n(18)),i=o(n(21)),s=o(n(1))
function o(e){return e&&e.__esModule?e:{default:e}}var a={base64:function(e){var t=new FormData
return t.append("data",r.default.encode(i.default.encode(JSON.stringify(e)))),t.append("encoding","base64"),t},json:function(e){return JSON.stringify(e)}}
t.default={get:function(e){if(!(e in a))throw new Error(s.default.UNSUPPORTED_ENCODER+" Invalid "+e+" encoder.")
return a[e]}}},function(e,t,n){(function(e,r){var i
!function(s){var o=("object"==typeof e&&e&&e.exports,"object"==typeof r&&r)
o.global!==o&&o.window
var a=function(e){this.message=e};(a.prototype=new Error).name="InvalidCharacterError"
var c=function(e){throw new a(e)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=/[\t\n\f\r ]/g,h={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&c("The string to be encoded contains characters outside of the Latin1 range.")
for(var t,n,r,i,s=e.length%3,o="",a=-1,u=e.length-s;++a<u;)t=e.charCodeAt(a)<<16,n=e.charCodeAt(++a)<<8,r=e.charCodeAt(++a),o+=l.charAt((i=t+n+r)>>18&63)+l.charAt(i>>12&63)+l.charAt(i>>6&63)+l.charAt(63&i)
return 2==s?(t=e.charCodeAt(a)<<8,n=e.charCodeAt(++a),o+=l.charAt((i=t+n)>>10)+l.charAt(i>>4&63)+l.charAt(i<<2&63)+"="):1==s&&(i=e.charCodeAt(a),o+=l.charAt(i>>2)+l.charAt(i<<4&63)+"=="),o},decode:function(e){var t=(e=String(e).replace(u,"")).length
t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&c("Invalid character: the string to be decoded is not correctly encoded.")
for(var n,r,i=0,s="",o=-1;++o<t;)r=l.indexOf(e.charAt(o)),n=i%4?64*n+r:r,i++%4&&(s+=String.fromCharCode(255&n>>(-2*i&6)))
return s},version:"0.1.0"}
void 0===(i=function(){return h}.call(t,n,t,e))||(e.exports=i)}()}).call(t,n(19)(e),n(20))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var n
n=function(){return this}()
try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){!function(e){var t,n,r,i=String.fromCharCode
function s(e){for(var t,n,r=[],i=0,s=e.length;i<s;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<s?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function o(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function a(e,t){return i(e>>t&63|128)}function c(e){if(0==(4294967168&e))return i(e)
var t=""
return 0==(4294965248&e)?t=i(e>>6&31|192):0==(4294901760&e)?(o(e),t=i(e>>12&15|224),t+=a(e,6)):0==(4292870144&e)&&(t=i(e>>18&7|240),t+=a(e,12),t+=a(e,6)),t+i(63&e|128)}function l(){if(r>=n)throw Error("Invalid byte index")
var e=255&t[r]
if(r++,128==(192&e))return 63&e
throw Error("Invalid continuation byte")}function u(){var e,i
if(r>n)throw Error("Invalid byte index")
if(r==n)return!1
if(e=255&t[r],r++,0==(128&e))return e
if(192==(224&e)){if((i=(31&e)<<6|l())>=128)return i
throw Error("Invalid continuation byte")}if(224==(240&e)){if((i=(15&e)<<12|l()<<6|l())>=2048)return o(i),i
throw Error("Invalid continuation byte")}if(240==(248&e)&&(i=(7&e)<<18|l()<<12|l()<<6|l())>=65536&&i<=1114111)return i
throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=s(e),n=t.length,r=-1,i="";++r<n;)i+=c(t[r])
return i},e.decode=function(e){t=s(e),n=t.length,r=0
for(var o,a=[];!1!==(o=u());)a.push(o)
return function(e){for(var t,n=e.length,r=-1,s="";++r<n;)(t=e[r])>65535&&(s+=i((t-=65536)>>>10&1023|55296),t=56320|1023&t),s+=i(t)
return s}(a)}}(t)},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._queue=[],this.maxSize=t}return r(e,[{key:"push",value:function(e){this._queue=[e].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}(this.slice(0,this.maxSize-1)))}},{key:"forEach",value:function(e){return this._queue.forEach(e)}},{key:"slice",value:function(e,t){return this._queue.slice(e,t)}},{key:"splice",value:function(e,t){return this._queue.splice(e,t)}},{key:"clear",value:function(){this._queue=[]}},{key:"filter",value:function(t){return e.fromArray(this._queue.filter(t),this.maxSize)}},{key:"length",get:function(){return this._queue.length}},{key:"items",get:function(){return JSON.parse(JSON.stringify(this._queue))}}],[{key:"fromArray",value:function(t,n){var r=new e(n)
return t.forEach((function(e){return r.push(e)})),r}}]),e}()
t.default=i},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.interval=0,this.tickIntervalId=0,this.callbacks=[]}return r(e,[{key:"tick",value:function(){var e=this
this.callbacks.forEach((function(t){return t(e)}))}},{key:"start",value:function(){return this.tickIntervalId=setInterval(this.tick.bind(this),this.interval),this}},{key:"stop",value:function(){return clearInterval(this.tickIntervalId),this.tickIntervalId=0,this}},{key:"reschedule",value:function(e){return this.stop().every(e).start()}},{key:"every",value:function(e){return this.interval=e,this}},{key:"call",value:function(e){return this.callbacks.push(e),this}},{key:"isRunning",get:function(){return!!this.tickIntervalId}}]),e}()
t.default=i},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=s(n(25)),i=s(n(0))
function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=i.default.EVENTS_SENDER_MIN_INTERVAL,n=i.default.EVENTS_SENDER_MAX_INTERVAL,s=Number(r.default.get("_hzt.interval"))||i.default.EVENTS_SENDER_INTERVAL
s<=n&&s>=t&&e.interval!==s&&e.reschedule(s)}},function(e,t,n){var r,i,s
s=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e]
for(var r in n)t[r]=n[r]}return t}return function t(n){function r(t,i,s){var o
if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(s=e({path:"/"},r.defaults,s)).expires){var a=new Date
a.setMilliseconds(a.getMilliseconds()+864e5*s.expires),s.expires=a}s.expires=s.expires?s.expires.toUTCString():""
try{o=JSON.stringify(i),/^[\{\[]/.test(o)&&(i=o)}catch(e){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape)
var c=""
for(var l in s)s[l]&&(c+="; "+l,!0!==s[l]&&(c+="="+s[l]))
return document.cookie=t+"="+i+c}t||(o={})
for(var u=document.cookie?document.cookie.split("; "):[],h=/(%[0-9A-Z]{2})+/g,d=0;d<u.length;d++){var p=u[d].split("="),f=p.slice(1).join("=")
this.json||'"'!==f.charAt(0)||(f=f.slice(1,-1))
try{var m=p[0].replace(h,decodeURIComponent)
if(f=n.read?n.read(f,m):n(f,m)||f.replace(h,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(t===m){o=f
break}t||(o[m]=f)}catch(e){}}return o}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}((function(){}))},void 0===(i="function"==typeof(r=s)?r.call(t,n,t,e):r)||(e.exports=i),e.exports=s()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(3)),s=l(n(2)),o=l(n(1)),a=l(n(0)),c=l(n(4))
function l(e){return e&&e.__esModule?e:{default:e}}var u="statusReady",h="statusNotReady",d="statusLoading",p="statusScheduled",f="statusError",m=function(){return s.default.getResource("schemas",{data:{}})},g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t,this.state=h,this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}}return r(e,[{key:"get",value:function(e,t){var n=e+"-"+t
if(!this.isReady())throw new Error(""+o.default.COMPONENT_NOT_READY)
var r=m().data[n]
if(!r)throw new Error(o.default.UNSUPPORTED_TYPE+": "+n)
return r}},{key:"isReady",value:function(){return this.state===u}},{key:"retry",value:function(){var e=this
this.state=p,this.callbacks.onRetry.forEach((function(e){return e()})),setTimeout((function(){e.state=h,e.load()}),a.default.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS)}},{key:"onLoad",value:function(e){this.callbacks.onLoad.push(e)}},{key:"onRetry",value:function(e){this.callbacks.onRetry.push(e)}},{key:"onReady",value:function(e){if(this.state===u)return e(m().data)
if(this.callbacks.onReady.length>a.default.HORIZON_CALLBACK_STACK_LIMIT)throw new Error(o.default.LIMIT_EXCEEDED+" Schemas callback stack.")
return this.callbacks.onReady.push(e)}},{key:"onError",value:function(e){this.state===f?e():this.callbacks.onError.push(e)}},{key:"load",value:function(){var e=this,t=m()
if(this.state===h){this.state=d,this.callbacks.onLoad.forEach((function(e){return e()}))
var n=a.default.USE_HTTPS?"https://":"http://"
c.default.request("GET",""+n+this.url,(function(n){t.data=Object.assign(t.data||{},n),e.state=u,e.callbacks.onReady.forEach((function(e){return i.default.execAsync(e,t.data)}))}),(function(t){e.state=f,e.callbacks.onError.forEach((function(e){return i.default.execAsync(e,t)})),e.retry()}))}}}]),e}()
t.default={getInstance:function(e){var t=m()
return t.provider||(t.provider=new g(e||a.default.HORIZON_SCHEMAS_HOST+"/schemas")),t.provider},getContextSchemas:m}},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=function(e){return window.cdaaas&&window.cdaaas.SETTINGS?window.cdaaas.SETTINGS[e]:null},i=function(e){return window.utag_data?window.utag_data[e]:null}
t.default={getTenant:function(){return r("SITE_ID")||i("ut.profile")||"unknown"},getDeviceGroup:function(){return r("MOBILE_GROUP")||i("platform")||"unknown"}}}])},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(10),i=function(){function e(e,t){this.dt=e,this.ins=t,this.type="throttle",this.out=null,this.id=null}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=null,this.id=null},e.prototype.clearInterval=function(){var e=this.id
null!==e&&clearInterval(e),this.id=null},e.prototype._n=function(e){var t=this,n=this.out
n&&(this.id||(n._n(e),this.id=setInterval((function(){t.clearInterval()}),this.dt)))},e.prototype._e=function(e){var t=this.out
t&&(this.clearInterval(),t._e(e))},e.prototype._c=function(){var e=this.out
e&&(this.clearInterval(),e._c())},e}()
t.default=function(e){return function(t){return new r.Stream(new i(e,t))}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"EventEmitter",(function(){return i}))
var r=n(20)
class i{constructor(){this.subscribers=[]}on(e,t){this.subscribers.push({eventName:e,callback:t})}off(e,t){for(let n=0;n<this.subscribers.length;n++){const{eventName:r,callback:i}=this.subscribers[n]
r===e&&i===t&&(this.subscribers.splice(n,1),n--)}}trigger(e,t){this.subscribers.filter(({eventName:t})=>t===e).forEach(e=>{try{e.callback(t)}catch(n){Object(r.error)(n)}})}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"HorizonBase",(function(){return O})),n.d(t,"PostClick",(function(){return w})),n.d(t,"PostView",(function(){return S})),n.d(t,"PostViewHeadline",(function(){return I}))
var r=n(61),i=n.n(r),s=n(24),o=n.n(s),a=n(71),c=n(72),l=n(187),u=n(92),h=n(22),d=n(190),p=n(191),f=(n(81),n(20))
function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const g={destaque:"d",basico:"b",video:"v",tempo_real:"r",card:"a",cobertura:"u",placeholder:"h",especial_publicitario:"e",publicidade:"p",component:"c"},v={[c.$Advertises.staticName]:"a",[l.$Cards.staticName]:"d",[u.$DistributedComponents.staticName]:"c",[h.$Falkor.staticName]:"f",[d.$PushStream.staticName]:"p",[p.$Recommendation.staticName]:"r"},b=()=>1,E=(e,t)=>n=>{const r=e[n]
return o()(r)?t:r},_={feedType:E({automatico:"a",editorial:"e",elastic:"l",folder:"f",produto:"p",semantico:"s"},"ukn"),format:E(g,"ukn"),grouped:b,pinned:b,source:E(v,"ukn")},y=(e,t)=>t in _?_[t](e):e
class O{constructor(e){this.reporter=e}toSend(){const e={},t=new Set([...this.fields,...this.optionalFields])
for(const r of t){let t
try{t=this.reporter[r]}catch(n){Object(f.error)(n,this.reporter.debug())}if(o()(t)){if(this.fields.includes(r))throw new Error('Field "'+r+'" is required in action sending')}else e[r]=t}return{id:this.schema,version:this.version,properties:i()(e,y)}}}class w extends O{constructor(...e){super(...e),this.schema="bastian-post-click",this.version="1.1",this.fields=["feedId","position","postId"],this.optionalFields=["areaDesktop","contentId"]}}class S extends O{constructor(...e){super(...e),this.schema="bastian-post-view",this.version="2.0",this.fields=["feedId","postId","contentType","feedType","feedViewTime","format","position","size","source","viewTime"],this.optionalFields=["contentId","areaDesktop","attachment","contentStatus","grouped","pinned","wordCountSummary","wordCountTitle"]}}class I extends S{toSend(){const e=super.toSend()
return m({},e,{properties:m({},e.properties,{format:g.destaque,areaDesktop:a.DESKTOP_AREAS.HEADLINE,size:a.POST_SIZES.LARGE})})}}},function(e,t,n){var r=n(62),i=n(65),s=n(70)
e.exports=function(e,t){var n={}
return t=s(t,3),i(e,(function(e,i,s){r(n,i,t(e,i,s))})),n}},function(e,t,n){var r=n(63)
e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(64),i=function(){try{var e=r(Object,"defineProperty")
return e({},"",{}),e}catch(t){}}()
e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(66),i=n(68)
e.exports=function(e,t){return e&&r(e,t,i)}},function(e,t,n){var r=n(67)()
e.exports=r},function(e,t){e.exports=function(e){return function(t,n,r){for(var i=-1,s=Object(t),o=r(t),a=o.length;a--;){var c=o[e?a:++i]
if(!1===n(s[c],c,s))break}return t}}},function(e,t,n){var r=n(69)(Object.keys,Object)
e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"POST_SIZES",(function(){return r})),n.d(t,"DESKTOP_AREAS",(function(){return i}))
const r={SMALL:"p",MEDIUM:"m",LARGE:"g"},i={HEADLINE:"t",LEFT:"e",RIGHT:"d"}},function(e,t,n){"use strict"
n.r(t),n.d(t,"$Advertises",(function(){return l}))
var r=n(10),i=n.n(r),s=n(20),o=n(28)
let a
const c={}
class l{static getInstance(){return a||(a=new l(c)),a}constructor(e){e!==c&&Object(s.warn)("Class $Advertise is a singleton and shouldn't be called directly.")
const t=this
this.getNextPosition=u(),this.stream=i.a.create({start(e){t.listener=e},stop(){t.listener=null}})}request(){this.listener&&this.listener.next({id:"banner_"+this.getNextPosition(),type:"advertise",source:l.staticName})}}l.staticName="$Advertises"
const u=()=>{var e
const t="Home"===(null===(e=window.utag_data)||void 0===e?void 0:e.content_type)&&o.At.smallScreen?["mobile1","feed_especial","rm2_feed","rm3_feed"]:["feed_especial","feed__0"],n=((...e)=>{let t=-1
const n=e.map(()=>{return e=(e=1)||0,()=>e++
var e})
return()=>(t=(t+1)%e.length,e[t]+"__"+n[t]())})("middle_feed","feed")
return()=>t.length>0?t.shift():""+n()}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Engine",(function(){return i})),n.d(t,"Renderer",(function(){return s})),n.d(t,"createElement",(function(){return o}))
var r=n(74)
const i={render:r.render,Component:r.Component,Fragment:r.Fragment,createElement:r.h,cloneElement:r.cloneElement},s=i,o=r.h},function(e,t,n){"use strict"
n.r(t),n.d(t,"render",(function(){return D})),n.d(t,"hydrate",(function(){return M})),n.d(t,"createElement",(function(){return g})),n.d(t,"h",(function(){return g})),n.d(t,"Fragment",(function(){return E})),n.d(t,"createRef",(function(){return b})),n.d(t,"isValidElement",(function(){return i})),n.d(t,"Component",(function(){return _})),n.d(t,"cloneElement",(function(){return V})),n.d(t,"createContext",(function(){return H})),n.d(t,"toChildArray",(function(){return C})),n.d(t,"_unmount",(function(){return k})),n.d(t,"options",(function(){return r}))
var r,i,s,o,a,c,l,u,h={},d=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i
function f(e,t){for(var n in t)e[n]=t[n]
return e}function m(e){var t=e.parentNode
t&&t.removeChild(e)}function g(e,t,n){var r,i=arguments,s={}
for(r in t)"key"!==r&&"ref"!==r&&(s[r]=t[r])
if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(i[r])
if(null!=n&&(s.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===s[r]&&(s[r]=e.defaultProps[r])
return v(e,s,t&&t.key,t&&t.ref)}function v(e,t,n,i){var s={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0}
return r.vnode&&r.vnode(s),s}function b(){return{}}function E(e){return e.children}function _(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?y(e):null}function O(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return O(e)}}function w(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!o++||c!==r.debounceRendering)&&((c=r.debounceRendering)||a)(S)}function S(){for(var e;o=s.length;)e=s.sort((function(e,t){return e.__v.__b-t.__v.__b})),s=[],e.some((function(e){var t,n,r,i,s,o
e.__d&&(s=(i=(t=e).__v).__e,(o=t.__P)&&(n=[],r=j(o,i,f({},i),t.__n,void 0!==o.ownerSVGElement,null,n,null==s?y(i):s),N(n,i),r!=s&&O(i)))}))}function I(e,t,n,r,i,s,o,a,c){var l,u,p,f,g,v,b,E=n&&n.__k||d,_=E.length
if(a==h&&(a=null!=s?s[0]:_?y(n,0):null),l=0,t.__k=C(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=E[l])||p&&n.key==p.key&&n.type===p.type)E[l]=void 0
else for(u=0;u<_;u++){if((p=E[u])&&n.key==p.key&&n.type===p.type){E[u]=void 0
break}p=null}if(f=j(e,n,p=p||h,r,i,s,o,a,c),(u=n.ref)&&p.ref!=u&&(b||(b=[]),p.ref&&b.push(p.ref,null,n),b.push(u,n.__c||f,n)),null!=f){var d
if(null==v&&(v=f),void 0!==n.__d)d=n.__d,n.__d=void 0
else if(s==p||f!=a||null==f.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(f),d=null
else{for(g=a,u=0;(g=g.nextSibling)&&u<_;u+=2)if(g==f)break e
e.insertBefore(f,a),d=a}"option"==t.type&&(e.value="")}a=void 0!==d?d:f.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&p.__e==a&&a.parentNode!=e&&(a=y(p))}return l++,n})),t.__e=v,null!=s&&"function"!=typeof t.type)for(l=s.length;l--;)null!=s[l]&&m(s[l])
for(l=_;l--;)null!=E[l]&&k(E[l],E[l])
if(b)for(l=0;l<b.length;l++)P(b[l],b[++l],b[++l])}function C(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null))
else if(Array.isArray(e))for(var r=0;r<e.length;r++)C(e[r],t,n)
else n.push(t?t("string"==typeof e||"number"==typeof e?v(null,e,null,null):null!=e.__e||null!=e.__c?v(e.type,e.props,e.key,null):e):e)
return n}function T(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function x(e,t,n,r,i){var s,o,a,c,l
if(i?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(s=e.style,"string"==typeof n)s.cssText=n
else{if("string"==typeof r&&(s.cssText="",r=null),r)for(o in r)n&&o in n||T(s,o,"")
if(n)for(a in n)r&&n[a]===r[a]||T(s,a,n[a])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,A,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,A,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!i&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function A(e){this.l[e.type](r.event?r.event(e):e)}function j(e,t,n,i,s,o,a,c,l){var u,h,d,p,m,g,v,b,y,O,w=t.type
if(void 0!==t.constructor)return null;(u=r.__b)&&u(t)
try{e:if("function"==typeof w){if(b=t.props,y=(u=w.contextType)&&i[u.__c],O=u?y?y.props.value:u.__:i,n.__c?v=(h=t.__c=n.__c).__=h.__E:("prototype"in w&&w.prototype.render?t.__c=h=new w(b,O):(t.__c=h=new _(b,O),h.constructor=w,h.render=L),y&&y.sub(h),h.props=b,h.state||(h.state={}),h.context=O,h.__n=i,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=w.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=f({},h.__s)),f(h.__s,w.getDerivedStateFromProps(b,h.__s))),p=h.props,m=h.state,d)null==w.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount)
else{if(null==w.getDerivedStateFromProps&&b!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,O),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,O)){for(h.props=b,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=n.__e,t.__k=n.__k,h.__h.length&&a.push(h),u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__=t)
break e}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,O),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(p,m,g)}))}h.context=O,h.props=b,h.state=h.__s,(u=r.__r)&&u(t),h.__d=!1,h.__v=t,h.__P=e,u=h.render(h.props,h.state,h.context),t.__k=null!=u&&u.type==E&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(i=f(f({},i),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(p,m)),I(e,t,n,i,s,o,a,c,l),h.base=t.__e,h.__h.length&&a.push(h),v&&(h.__E=h.__=null),h.__e=!1}else t.__e=R(n.__e,t,n,i,s,o,a,l);(u=r.diffed)&&u(t)}catch(e){r.__e(e,t,n)}return t.__e}function N(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function R(e,t,n,r,i,s,o,a){var c,l,u,p,f,m=n.props,g=t.props
if(i="svg"===t.type||i,null!=s)for(c=0;c<s.length;c++)if(null!=(l=s[c])&&((null===t.type?3===l.nodeType:l.localName===t.type)||e==l)){e=l,s[c]=null
break}if(null==e){if(null===t.type)return document.createTextNode(g)
e=i?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,g.is&&{is:g.is}),s=null}if(null===t.type)m!==g&&e.data!=g&&(e.data=g)
else if(t!==n){if(null!=s&&(s=d.slice.call(e.childNodes)),u=(m=n.props||h).dangerouslySetInnerHTML,p=g.dangerouslySetInnerHTML,!a){if(m===h)for(m={},f=0;f<e.attributes.length;f++)m[e.attributes[f].name]=e.attributes[f].value;(p||u)&&(p&&u&&p.__html==u.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,i){var s
for(s in n)s in t||x(e,s,null,n[s],r)
for(s in t)i&&"function"!=typeof t[s]||"value"===s||"checked"===s||n[s]===t[s]||x(e,s,t[s],n[s],r)})(e,g,m,i,a),t.__k=t.props.children,p||I(e,t,n,r,"foreignObject"!==t.type&&i,s,o,h,a),a||("value"in g&&void 0!==g.value&&g.value!==e.value&&(e.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==e.checked&&(e.checked=g.checked))}return e}function P(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function k(e,t,n){var i,s,o
if(r.unmount&&r.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||P(i,null,t)),n||"function"==typeof e.type||(n=null!=(s=e.__e)),e.__e=e.__d=void 0,null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){r.__e(e,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&k(i[o],t,n)
null!=s&&m(s)}function L(e,t,n){return this.constructor(e,n)}function D(e,t,n){var i,s,o
r.__&&r.__(e,t),s=(i=n===l)?null:n&&n.__k||t.__k,e=g(E,null,[e]),o=[],j(t,(i?t:n||t).__k=e,s||h,h,void 0!==t.ownerSVGElement,n&&!i?[n]:s?null:d.slice.call(t.childNodes),o,n||h,i),N(o,e)}function M(e,t){D(e,t,l)}function V(e,t){return t=f(f({},e.props),t),arguments.length>2&&(t.children=d.slice.call(arguments,2)),v(e.type,t,t.key||e.key,t.ref||e.ref)}function H(e){var t={},n={__c:"__cC"+u++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,i=this
return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=i,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.context=t.value,w(e)}))},this.sub=function(e){r.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}}
return n.Consumer.contextType=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return w(n.__E=n)}catch(t){e=t}throw e}},i=function(e){return null!=e&&void 0===e.constructor},_.prototype.setState=function(e,t){var n
n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),w(this))},_.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},_.prototype.render=E,s=[],o=0,a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=h,u=0},function(e,t,n){"use strict"
n.r(t),n.d(t,"HEADLINES_PLACEHOLDER",(function(){return r})),n.d(t,"PLACEHOLDER",(function(){return i})),n.d(t,"ROOT",(function(){return s})),n.d(t,"FEED",(function(){return o})),n.d(t,"PAGE",(function(){return a})),n.d(t,"ITEM",(function(){return c})),n.d(t,"POST",(function(){return l})),n.d(t,"CARD",(function(){return u})),n.d(t,"LOAD_MORE",(function(){return h})),n.d(t,"LOAD_MORE_LINK",(function(){return d})),n.d(t,"BANNER_SLB_MEIO",(function(){return p})),n.d(t,"SHOWTIME_INITIALIZED",(function(){return f})),n.d(t,"AREATEMPLATE_ESQUERDA",(function(){return m})),n.d(t,"AREATEMPLATE_DIREITA",(function(){return g})),n.d(t,"BS_HOME",(function(){return v}))
const r=".areatemplate-showtime",i="#feed-placeholder",s=".feed-root",o=".bstn-feed",a=".bastian-page",c=".bastian-feed-item",l=".feed-post",u=".bastian-card-mobile, .bastian_card__mobile",h=".load-more",d=".load-more > a",p="#banner_slb_meio",f=".showtime--initialized",m=".areatemplate-esquerda",g=".areatemplate-direita",v=".bs-home"},function(e,t,n){"use strict"
n.r(t),n.d(t,"ItemReporter",(function(){return a})),n.d(t,"ItemPostReporter",(function(){return c}))
var r=n(190),i=n(25),s=n(81)
function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class a extends s.BaseReporter{constructor(e,t={}){super(e),e.itemReference&&(this.itemReference=e.itemReference),e.positionIndex&&(this.positionIndex=e.positionIndex)
const n={}
for(const r of["face","size"])n[r]=Object(i.get)(e.itemReference.state.data,"klass."+r.toUpperCase())
this.itemProps=o({},n,t)}get format(){return this.itemProps.face}get size(){return this.itemProps.size}getPostPosition(){return this.data.source===r.$PushStream.staticName?0:this.positionIndex.getPosition(this.itemReference)}}const c=Object(s.createPostReporter)(a)},function(e,t,n){var r=n(45),i=n(46),s=n(78),o=i((function(e,t,n){return r(e,s(t)||0,n)}))
e.exports=o},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"DEVICES",(function(){return r}))
const r={feature:1,smart:2,tablet:3,desktop:4}},function(e,t,n){"use strict"
n.r(t),n.d(t,"now",(function(){return l}))
var r=n(5),i=n.n(r),s=n(29),o=n(25)
const a=["now","webkitNow","msNow","mozNow"].map(e=>Object(o.get)(s.Globals,"performance."+e)).find(i.a)
let c
c=i()(a)?()=>parseInt(a.call(performance),10):()=>(new Date).getTime()
const l=c},function(e,t,n){"use strict"
n.r(t),n.d(t,"AbstractReporter",(function(){return a})),n.d(t,"BaseReporter",(function(){return c})),n.d(t,"createPostReporter",(function(){return h}))
var r=n(82),i=n.n(r),s=n(25)
function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class a{debug(){return this}}class c extends a{constructor({data:e,telemetry:t}){super(),this.telemetry=t,this.data=o({},e),this.features=new Map}get attachment(){const e=[]
for(const[t,n]of this.features)n()&&e.push(t)
if(e.length>0)return e}get contentType(){return"esppub"===this.data.type?"especial-publicitario":this.data.type}get position(){return this.getPostPosition()}get postId(){return this.data.id}get source(){return String(this.data.source)}get viewTime(){return i()(this.telemetry.getSeenTime()/1e3)}addFeatureChecks(e){for(const t in e){const n=e[t]
this.features.set(t,n)}}setContent(e){this.data=o({},this.data.content,e)}static upgrade(e,t={}){const n=new this(o({},e.reporter),o({},t))
return e.reporter=n,n}}const l=/\s+/
function u(e){if(e)return e.split(l).length}function h(e){return class extends e{get contentId(){let e=Object(s.get)(this.data,"content.url")
return e||(e=Object(s.get)(this.data,"content.video.id"),e&&(e=e.toString())),e}get pinned(){if(Object(s.get)(this.data,"pinned"))return!0}get wordCountSummary(){const e=this.attachment
if(Array.isArray(e)&&e.includes("resumo"))return u(Object(s.get)(this.data,"content.summary"))}get wordCountTitle(){return u(Object(s.get)(this.data,"content.title"))}}}},function(e,t,n){var r=n(83)("round")
e.exports=r},function(e,t,n){var r=n(84),i=n(18),s=n(78),o=n(86),a=r.isFinite,c=Math.min
e.exports=function(e){var t=Math[e]
return function(e,n){if(e=s(e),(n=null==n?0:c(i(n),292))&&a(e)){var r=(o(e)+"e").split("e"),l=t(r[0]+"e"+(+r[1]+n))
return+((r=(o(l)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},function(e,t,n){var r=n(85),i="object"==typeof self&&self&&self.Object===Object&&self,s=r||i||Function("return this")()
e.exports=s},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t
e.exports=n}).call(this,n(12))},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"as",(function(){return s}))
var r=n(88)
let i
i=function(e,t){return function(n){Object(r.set)(e,"_refs."+(t||"node"),n)}}
const s=i},function(e,t,n){"use strict"
n.r(t)
var r=n(89),i=n.n(r)
n.d(t,"set",(function(){return i.a}))},function(e,t,n){var r=n(90)
e.exports=function(e,t,n){var i=/^(.+)\.(.+)$/.exec(t)
i?r(e,i[1])[i[2]]=n:e[t]=n}},function(e,t,n){var r=n(91)
e.exports=function(e,t){return t?(r(t.split("."),(function(t){e[t]||(e[t]={}),e=e[t]})),e):e}},function(e,t){e.exports=function(e,t,n){if(null!=e)for(var r=-1,i=e.length;++r<i&&!1!==t.call(n,e[r],r,e););}},function(e,t,n){"use strict"
n.r(t),n.d(t,"$DistributedComponents",(function(){return d}))
var r=n(6),i=n.n(r),s=n(10),o=n.n(s),a=n(20),c=n(28)
function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let u
const h={}
class d{static getInstance(e){if(e&&!u&&(u=new d(e,h)),u)return u
throw new Error("Couldn't return an $DistributedComponents instance")}constructor(e,t){this.buffer=[],t!==h&&Object(a.warn)("Class $DistributedComponents is a singleton and shouldn't be called directly."),Array.isArray(e.specialItems)&&this.store([...e.specialItems])
const n=this
this.stream=o.a.create({start(e){n.listener=e},stop(){n.listener=null}})}store(e){this.buffer.push(...e)}isEmpty(){return 0===this.buffer.length}request(e){const t=i()(e)
if(!((c.At.smallScreen||!t)&&this.listener&&this.buffer.length>0))return!1
this.listener.next(l({},this.buffer.shift(),{key:Math.random().toString(),source:d.staticName}))}}d.staticName="$DistributedComponents"},function(e,t,n){var r=n(94),i=n(68)
e.exports=function(e){return null==e?[]:r(e,i(e))}},function(e,t,n){var r=n(95)
e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e)
return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"patch",(function(){return a}))
var r=n(190),i=n(28),s=n(15),o=n(97)
function a(e,t){Object.isFrozen(e)||(e.PostIndex={register:s.PostIndex.register,has:s.PostIndex.has,filter:s.PostIndex.filter},e.getItemPosition=function(e){return()=>e.source===r.$PushStream?0:e.itemIndex.getPosition(e.item)}(t),e.getAreaId=function(e){return()=>e.areaId}(t),e.implode=t.implode,e.isLargeScreen=i.At.largeScreen,e.choosePicture=o.choosePicture,delete e.patch),Object.freeze(e)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"choosePicture",(function(){return O}))
var r=n(93),i=n.n(r),s=n(98),o=n.n(s),a=n(31),c=n.n(a),l=n(102),u=n.n(l),h=n(1),d=n.n(h),p=n(104),f=n.n(p),m=n(29),g=n(25)
const v={1:"S",1.5:"M",2:"L",3:"XL",4:"XXL"},b=Object.keys(v).map(Number),E=u()(b),_=o()(b),y=c()(e=>{const t=f()(e||m.Globals.devicePixelRatio,_,E)
let n=Math.floor(t)
for(;!b.includes(n)&&n<E;)n=Math.floor(n+.1)
return v[n]||v[_]})
function O(e,t,n,r){if(e.sizes){if(r)return e.sizes[r].url
const s=e.sizes,o=function(e=1,t){let n="S"
return t&&t.height>=t.width?n="V":e&&(n=y(e)),n}(t,n)
return Object(g.get)(s,o+".url")||i()(s)[0].url}if(d()(e.url))return e.url}},function(e,t,n){var r=n(99),i=n(101),s=n(47)
e.exports=function(e){return e&&e.length?r(e,s,i):void 0}},function(e,t,n){var r=n(100)
e.exports=function(e,t,n){for(var i=-1,s=e.length;++i<s;){var o=e[i],a=t(o)
if(null!=a&&(void 0===c?a==a&&!r(a):n(a,c)))var c=a,l=o}return l}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(e,t){return e<t}},function(e,t,n){var r=n(99),i=n(103),s=n(47)
e.exports=function(e){return e&&e.length?r(e,s,i):void 0}},function(e,t){e.exports=function(e,t){return e>t}},function(e,t,n){var r=n(105),i=n(78)
e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=i(n))==n?n:0),void 0!==t&&(t=(t=i(t))==t?t:0),r(i(e),t,n)}},function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},function(e,t,n){var r=n(4),i=n(107)
e.exports=function(e){return r(e)&&1===e.nodeType&&!i(e)}},function(e,t,n){var r=n(2),i=n(108),s=n(4),o=Function.prototype,a=Object.prototype,c=o.toString,l=a.hasOwnProperty,u=c.call(Object)
e.exports=function(e){if(!s(e)||"[object Object]"!=r(e))return!1
var t=i(e)
if(null===t)return!0
var n=l.call(t,"constructor")&&t.constructor
return"function"==typeof n&&n instanceof n&&c.call(n)==u}},function(e,t,n){var r=n(69)(Object.getPrototypeOf,Object)
e.exports=r},function(e,t,n){"use strict"
n.r(t),n.d(t,"render",(function(){return g})),n.d(t,"renderToString",(function(){return g})),n.d(t,"shallowRender",(function(){return m}))
var r=n(74),i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,s=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},o=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},a=function(e,t,n){return String(e).length>(t||40)||!n&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},c={}
function l(e){var t=""
for(var n in e){var r=e[n]
null!=r&&(t&&(t+=" "),t+=c[n]||(c[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=r,"number"==typeof r&&!1===i.test(n)&&(t+="px"),t+=";")}return t||void 0}function u(e,t){for(var n in t)e[n]=t[n]
return e}function h(e,t){return Array.isArray(t)?t.reduce(h,e):null!=t&&!1!==t&&e.push(t),e}var d={shallow:!0},p=[],f=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/
g.render=g
var m=function(e,t){return g(e,t,d)}
function g(e,t,n,i,c,d){if(null==e||"boolean"==typeof e)return""
Array.isArray(e)&&(e=Object(r.createElement)(r.Fragment,null,e))
var m=e.type,v=e.props,b=!1
t=t||{}
var E,_=(n=n||{}).pretty,y=_&&"string"==typeof _?_:"\t"
if("object"!=typeof e&&!m)return s(e)
if("function"==typeof m){if(b=!0,!n.shallow||!i&&!1!==n.renderRootComponent){if(m===r.Fragment){var O="",w=[]
h(w,e.props.children)
for(var S=0;S<w.length;S++)O+=(S>0&&_?"\n":"")+g(w[S],t,n,!1!==n.shallowHighOrder,c,d)
return O}var I,C=e.__c={__v:e,context:t,props:e.props,__h:[]}
if(r.options.__r&&r.options.__r(e),m.prototype&&"function"==typeof m.prototype.render){var T=m.contextType,x=T&&t[T.__c],A=null!=T?x?x.props.value:T.__:t;(C=e.__c=new m(v,A)).__v=e,C._dirty=C.__d=!0,C.props=v,null==C.state&&(C.state={}),null==C._nextState&&null==C.__s&&(C._nextState=C.__s=C.state),C.context=A,m.getDerivedStateFromProps?C.state=u(u({},C.state),m.getDerivedStateFromProps(C.props,C.state)):C.componentWillMount&&C.componentWillMount(),C.state=C._nextState!==C.state?C._nextState:C.__s!==C.state?C.__s:C.state,I=C.render(C.props,C.state,C.context)}else{var j=m.contextType,N=j&&t[j.__c]
I=m.call(e.__c,v,null!=j?N?N.props.value:j.__:t)}return C.getChildContext&&(t=u(u({},t),C.getChildContext())),g(I,t,n,!1!==n.shallowHighOrder,c,d)}m=(E=m).displayName||E!==Function&&E.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1]
if(!t){for(var n=-1,r=p.length;r--;)if(p[r]===e){n=r
break}n<0&&(n=p.push(e)-1),t="UnnamedComponent"+n}return t}(E)}var R,P=""
if(v){var k=Object.keys(v)
n&&!0===n.sortAttributes&&k.sort()
for(var L=0;L<k.length;L++){var D=k[L],M=v[D]
if("children"!==D&&!D.match(/[\s\n\\/='"\0<>]/)&&(n&&n.allAttributes||"key"!==D&&"ref"!==D)){if("className"===D){if(v.class)continue
D="class"}else c&&D.match(/^xlink:?./)&&(D=D.toLowerCase().replace(/^xlink:?/,"xlink:"))
"style"===D&&M&&"object"==typeof M&&(M=l(M))
var V=n.attributeHook&&n.attributeHook(D,M,t,n,b)
if(V||""===V)P+=V
else if("dangerouslySetInnerHTML"===D)R=M&&M.__html
else if((M||0===M||""===M)&&"function"!=typeof M){if(!(!0!==M&&""!==M||(M=D,n&&n.xml))){P+=" "+D
continue}if("value"===D){if("select"===m){d=M
continue}"option"===m&&d==M&&(P+=" selected")}P+=" "+D+'="'+s(M)+'"'}}}}if(_){var H=P.replace(/^\n\s*/," ")
H===P||~H.indexOf("\n")?_&&~P.indexOf("\n")&&(P+="\n"):P=H}if(P="<"+m+P+">",String(m).match(/[\s\n\\/='"\0<>]/))throw new Error(m+" is not a valid HTML tag name in "+P)
var F=String(m).match(f)
F&&(P=P.replace(/>$/," />"))
var G,U=[]
if(R)_&&a(R)&&(R="\n"+y+o(R,y)),P+=R
else if(v&&h(G=[],v.children).length){for(var B=_&&~P.indexOf("\n"),z=!1,q=0;q<G.length;q++){var W=G[q]
if(null!=W&&!1!==W){var $=g(W,t,n,!0,"svg"===m||"foreignObject"!==m&&c,d)
if(_&&!B&&a($)&&(B=!0),$)if(_){var K=$.length>0&&"<"!=$[0]
z&&K?U[U.length-1]+=$:U.push($),z=K}else U.push($)}}if(_&&B)for(var Z=U.length;Z--;)U[Z]="\n"+y+o(U[Z],y)}if(U.length)P+=U.join("")
else if(n&&n.xml)return P.substring(0,P.length-1)+" />"
return F||(_&&~P.indexOf("\n")&&(P+="\n"),P+="</"+m+">"),P}g.shallowRender=m,t.default=g},function(e,t,n){"use strict"
n.r(t),n.d(t,"Cover",(function(){return m}))
var r=n(5),i=n.n(r),s=n(111),o=n.n(s),a=n(73),c=n(114),l=n(87),u=n(97),h=n(25),d=n(51)
function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const f={S:1,M:1.5,L:2}
class m extends a.Engine.Component{constructor(e){super(e),this.immediateReveal=!1,this.reveal=e=>{this.immediateReveal||null!==this.state.cover?(e.className.indexOf("_preempt-visibility")>=0&&e.firstElementChild&&(e=e.firstElementChild),i()(this.props.onReveal)&&Object(d.safeCall)(this.props.onReveal,null,e)):this.setCoverUrl()},this.state={cover:null}}render(){if(!this.props.images)return null
const e=this.getImageProps(),t=a.Engine.createElement("div",p({ref:Object(l.as)(this),onMouseUp:this.props.onMouseUp},this.getCoverProps()),a.Engine.createElement("picture",{className:"bstn-fd-cover-picture"},a.Engine.createElement("img",p({className:"bstn-fd-picture-image"},e))),this.props.children)
return Object(h.get)(e,"srcSet")?(this.immediateReveal=!0,t):a.Engine.createElement(c.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:this.props.threshold},t)}componentDidMount(){this.props.isEsppub&&this.setCoverUrl(),this.immediateReveal&&this.reveal(this._refs.node)}componentDidUpdate(){this.state.cover&&this.reveal(this._refs.node)}getCoverProps(){const e={className:"bstn-fd-item-cover "+(this.props.extraClasses||"")}
for(const t in this.props)t.startsWith("data-")&&(e[t]=this.props[t])
return e}getImageProps1x1(){let e={alt:this.props.alt,title:this.props.alt}
const t=this.props.images
if(t.sizes&&this.atFirstPage()){const n=[]
for(const e in f)e in t.sizes&&n.push(Object(h.get)(t,"sizes."+e+".url")+" "+f[e]+"x")
const r=this.props.thumbOrientation?t.sizes[this.props.thumbOrientation].url:t.sizes.S.url
e=p({},e,{srcSet:n.join(","),src:r})}return this.state.cover&&(e=p({},e,{src:this.state.cover,"data-ratio":"1:1"})),e}getImageProps4x3(){return{src:"https://s03.video.glbimg.com/480x360/"+Object(h.get)(this.props,"data-video-id")+".jpg","data-ratio":"4:3"}}getImageProps(){return"4:3"===this.props.ratio&&Object(h.get)(this.props,"data-video-id")?this.getImageProps4x3():this.getImageProps1x1()}atFirstPage(){let e
const t=this.context.item
return e=!t||t&&o()(this.context.itemIndex.getPosition(t),1,11),e}setCoverUrl(){const e=Object(u.choosePicture)(this.props.images,null,null,this.props.thumbOrientation)
e&&this.setState({cover:e})}}},function(e,t,n){var r=n(112),i=n(113),s=n(78)
e.exports=function(e,t,n){return t=i(t),void 0===n?(n=t,t=0):n=i(n),e=s(e),r(e,t,n)}},function(e,t){var n=Math.max,r=Math.min
e.exports=function(e,t,i){return e>=r(t,i)&&e<n(t,i)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"DEFAULT_THRESHOLD",(function(){return p})),n.d(t,"PreemptVisibility",(function(){return E}))
var r=n(115),i=n.n(r),s=n(44),o=n.n(s),a=n(73),c=n(29),l=n(87),u=n(118)
let h,d
const p="200%"
h=class extends a.Engine.Component{constructor(e){super(e),this.render=()=>a.Engine.createElement("div",{className:"_preempt-visibility",ref:Object(l.as)(this)},this.props.children),this.checkProximity=i()(()=>{const e=this._refs.node,t=e.getBoundingClientRect(),n=this.getThreshold(),r=t.top-d<n,i=t.top!==t.bottom,s=-t.bottom<n
if(!i&&r||r&&s){if(this.state.isNear&&!this.state.wasTriggered)return o()(()=>this.props.onNearToBeVisible(e)),this.tearDown(),void this.setState({wasTriggered:!0})
this.setState({isNear:!0}),this.reCheckProximity()}else this.setState({isNear:!1})},100,{leading:!0,trailing:!0}),this.reCheckProximity=()=>this.checkProximity(),this.state={isNear:!1,wasTriggered:!1}}async componentDidMount(){const e=await this.props.threshold||p
this.getThreshold=f(e),this.props.awaitScroll||o()(this.checkProximity),u.PassiveScrollListener.on(this.checkProximity)}componentWillUnmount(){this.tearDown()}tearDown(){u.PassiveScrollListener.off(this.checkProximity),this.checkProximity.cancel(),c.Globals.removeEventListener("resize",b)}}
const f=e=>{const[t,n]=g(e).slice(1,3),r=v[n]
return i()(r(Number(t)),1e3,{leading:!0,trailing:!1})},m=/(-?\d+)(%|px)/,g=e=>e.match(m)||["","px",e||"0"],v={"%":e=>()=>d*(e/100),px:e=>()=>e},b=()=>{d=c.Globals.innerHeight}
b(),c.Globals.addEventListener("resize",b,!1)
const E=h},function(e,t,n){var r=n(116),i=n(6)
e.exports=function(e,t,n){var s=!0,o=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
return i(n)&&(s="leading"in n?!!n.leading:s,o="trailing"in n?!!n.trailing:o),r(e,t,{leading:s,maxWait:t,trailing:o})}},function(e,t,n){var r=n(6),i=n(117),s=n(78),o=Math.max,a=Math.min
e.exports=function(e,t,n){var c,l,u,h,d,p,f=0,m=!1,g=!1,v=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
function b(t){var n=c,r=l
return c=l=void 0,f=t,h=e.apply(r,n)}function E(e){return f=e,d=setTimeout(y,t),m?b(e):h}function _(e){var n=e-p
return void 0===p||n>=t||n<0||g&&e-f>=u}function y(){var e=i()
if(_(e))return O(e)
d=setTimeout(y,function(e){var n=t-(e-p)
return g?a(n,u-(e-f)):n}(e))}function O(e){return d=void 0,v&&c?b(e):(c=l=void 0,h)}function w(){var e=i(),n=_(e)
if(c=arguments,l=this,p=e,n){if(void 0===d)return E(p)
if(g)return clearTimeout(d),d=setTimeout(y,t),b(p)}return void 0===d&&(d=setTimeout(y,t)),h}return t=s(t)||0,r(n)&&(m=!!n.leading,u=(g="maxWait"in n)?o(s(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==d&&clearTimeout(d),f=0,c=p=l=d=void 0},w.flush=function(){return void 0===d?h:O(i())},w}},function(e,t,n){var r=n(84)
e.exports=function(){return r.Date.now()}},function(e,t,n){"use strict"
n.r(t),n.d(t,"PassiveScrollListener",(function(){return v}))
var r=n(115),i=n.n(r),s=n(5),o=n.n(s),a=n(119),c=n.n(a),l=n(20),u=n(29),h=n(80),d=n(120),p=n(121)
let f,m
f={subscribers:[],queue:[],paused:!1,flush:function(){if(!this.paused){const t=Object(h.now)()
let n,r=0
for(this.queue=this.subscribers.slice(0);(n=this.queue.shift())&&r<8;){try{n()}catch(e){Object(l.error)(e)}r=Object(h.now)()-t}}},on:function(e){this.subscribers.push(e)},off:function(e){Object(d.pull)(this.subscribers,e)},pause:function(){this.paused=!0},resume:function(){this.paused=!1,this.flush()}},m=e=>(m=p.rAF?e=>Object(p.rAF)(()=>Object(p.rAF)(e)):e=>setTimeout(e,1),m(e))
const g=i()(()=>m(f.flush.bind(f)),100,{leading:!0,trailing:!1})
u.Globals.addEventListener("scroll",g,!!function(){let e=!1
const t=u.Globals.Modernizr
if(t&&c()(t.passiveeventlisteners))return t.passiveeventlisteners
try{if(o()(Object.defineProperty)){const t=Object.defineProperty({},"passive",{get(){e=!0}})
u.Globals.addEventListener("test",null,t)}}catch(n){}return e}()&&{passive:!0})
const v=f},function(e,t,n){var r=n(2),i=n(4)
e.exports=function(e){return!0===e||!1===e||i(e)&&"[object Boolean]"==r(e)}},function(e,t,n){"use strict"
function r(e,t){let n
for(n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t,n)}n.r(t),n.d(t,"pull",(function(){return r}))},function(e,t,n){"use strict"
let r
n.r(t),n.d(t,"rAF",(function(){return i})),r=n(29).Globals.requestAnimationFrame
const i=r},function(e,t,n){"use strict"
n.r(t),n.d(t,"Header",(function(){return c}))
var r=n(123),i=n.n(r),s=n(73),o=n(25),a=n(124)
function c(e){const t=Object(o.get)(e,"content.chapeu.label")||"",n=Object(o.get)(e,"content.chapeu.image.url")||"",r=i()("feed-post-header",{"with-post-chapeu":Boolean(t)})
var c=s.Engine.createElement("img",{src:n,alt:t,className:"feed-post-header-chapeu-favicon"})
return s.Engine.createElement("div",{className:r},e.children,Object(a.insertIf)(t,()=>s.Engine.createElement("span",{className:"feed-post-header-chapeu"},n&&c,t)))}},function(e,t,n){var r
!function(){"use strict"
var n={}.hasOwnProperty
function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t]
if(r){var s=typeof r
if("string"===s||"number"===s)e.push(r)
else if(Array.isArray(r)&&r.length){var o=i.apply(null,r)
o&&e.push(o)}else if("object"===s)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict"
n.r(t),n.d(t,"insertIf",(function(){return s}))
var r=n(5),i=n.n(r)
function s(e,t,n){let r=e
return i()(e)&&(r=e()),r?t(r):i()(n)?n(r):null}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Relateds",(function(){return h}))
var r=n(5),i=n.n(r),s=n(23),o=n(73),a=n(25),c=n(124)
function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){const{thumb:n,title:r,url:a,dateFactory:u,age:h,isRecommended:d}=e,p=n&&n.url,f={}
return n&&n.rightsholder&&(f.alt=n.rightsholder,f.title=n.rightsholder),o.Engine.createElement("li",{key:t,className:"bstn-relateditem"},Object(c.insertIf)(p,()=>o.Engine.createElement("div",{className:"bstn-fd-relatedimage"},o.Engine.createElement("img",l({className:"bstn-fd-relatedthumb",src:p},f)))),o.Engine.createElement("div",{className:"bstn-fd-relatedtext"},o.Engine.createElement("a",{className:"gui-color-primary gui-color-hover feed-post-body-title bstn-relatedtext",href:a},r),Object(c.insertIf)(!1===s.Configs.get("disableDateTime"),()=>o.Engine.createElement("div",{className:"feed-post-metadata"},i()(u)&&u({age:h,isRecommended:d})))))}const h=({showThumbs:e=!1,children:t,dateFactory:n,items:r})=>(t=Array.isArray(t)?t[0]:t,i()(t)||(t=e=>e),r&&r.length>0?o.Engine.createElement("div",{className:"bstn-related"},t(o.Engine.createElement("ul",{className:"bstn-relateditems"},r.map(((e,t)=>n=>{const{title:r,url:i}=n.content,{age:s,isRecommended:o}=n,c={age:s,dateFactory:t,isRecommended:o,title:r,url:i},u=Object(a.get)(n.content,"image.rightsHolder"),h=Object(a.get)(n.content,"image.sizes.S.url")
let d={}
return e&&h&&(d={thumb:{url:h,rightsholder:u}}),l({},c,d)})(e,n)).map(u)))):null)},function(e,t,n){"use strict"
n.r(t),n.d(t,"Section",(function(){return i}))
var r=n(73)
function i(e){return r.Engine.createElement("span",{className:"feed-post-metadata-section"}," ",e.text," ")}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Summary",(function(){return s}))
var r=n(73),i=n(194)
const s=({text:e})=>r.Engine.createElement(i.LabelEvent,{type:"click",label:"resumo"},r.Engine.createElement("div",{className:"feed-post-body-resumo"},e))},function(e,t,n){"use strict"
n.r(t),n.d(t,"Title",(function(){return o}))
var r=n(129),i=n(73),s=n(194)
const o=e=>{const{text:t}=e
let n=""
return e.extraClasses&&(n=Array.isArray(e.extraClasses)?e.extraClasses.join(" "):String(e.extraClasses)),i.Engine.createElement(s.LabelEvent,{type:"click",label:"titulo"},i.Engine.createElement("div",{className:"feed-post-body-title gui-color-primary gui-color-hover "+n},i.Engine.createElement(r.ElementViewTrigger,{on:"fitInScreen"},e.innerWrapper?i.Engine.createElement(e.innerWrapper,null,t):t)))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ElementViewTrigger",(function(){return E}))
var r=n(115),i=n.n(r),s=n(24),o=n.n(s),a=n(73),c=n(29),l=n(21),u=n(130),h=n(131),d=n(25),p=n(120),f=n(51),m=n(53),g=n(132),v=n(54)
let b
b=class extends(Object(h.eventable)(Object(u.drawless)(a.Engine.Component))){constructor(e){super(e),this.childrenTriggers=[],this.verifyVisibility=function(){const e=this.props.on
if(this.props.redirectToChildTriggerIfExists&&this.childrenTriggers.length>0)return this.childrenTriggers.some(e=>e.verifyVisibility())
const t=Object(g.getVisibility)(this._refs.node)
return(!1!==t.isBoxed||!0===this.props.evenIfUnboxed)&&Object(l.castArray)(e).some(e=>this.testVisibility(t,e))},this.testVisibility=(e,t)=>{if(e[t])return this.handleVisibleState(),!0},this.resume=()=>{this.isRoot()&&(Object(f.safeCall)(this.verifyVisibility,this),this.timerID=setTimeout(this.resume,250))},this.pause=()=>{clearTimeout(this.timerID)},this.syncWithVisibility=()=>{"visible"===c.Globals.document.visibilityState?this.resume():this.pause()},e.tagName&&(this.drawlessTag=e.tagName),this.verifyVisibility=i()(this.verifyVisibility.bind(this),this.props.checkInterval||1e3,{leading:!0,trailing:!1})}getChildContext(){return{parentTrigger:this,parentGroup:this.context.parentGroup}}isRoot(){return o()(this.context.parentTrigger)}handleVisibleState(){for(const e of Array.from(this._refs.node.children||[]))Object(v.triggerDomEvent)(m.ELEMENT_VIEWED,e)
this.trigger("visible",this.props.chain)}bindEvents(){this.isRoot()&&c.Globals.window.addEventListener("visibilitychange",this.syncWithVisibility)}registerChildTrigger(e){this.childrenTriggers.push(e)}unregisterChildTrigger(e){Object(p.pull)(this.childrenTriggers,e)}componentDidMount(){this.bindEvents(),this.isRoot()&&this.syncWithVisibility(),Object(d.get)(this,"context.parentTrigger.props.redirectToChildTriggerIfExists")?this.context.parentTrigger.registerChildTrigger(this):this.context.parentGroup&&this.context.parentGroup.registerChild(this)}componentWillUnmount(){this.isRoot()&&this.pause(),this.context.parentGroup&&this.context.parentGroup.unregisterChild(this),this.context.parentTrigger.props.redirectToChildTriggerIfExists&&this.context.parentTrigger.unregisterChildTrigger(this)}}
const E=b},function(e,t,n){"use strict"
n.r(t),n.d(t,"drawless",(function(){return p}))
var r=n(31),i=n.n(r),s=n(1),o=n.n(s),a=n(5),c=n.n(a),l=n(73),u=n(87)
const h=/^function ([^(]+)/,d=i()(e=>(e.match(h)||["",""])[1])
function p(e){return class extends e{render(){c()(this.beforeRender)&&this.beforeRender(this.props.children)
let e=""
this.constructor&&(e="_"+(this.constructor.displayName||this.constructor.name||d(this.constructor.toString())).replace("_render","").toLowerCase())
let t="div"
return o()(this.drawlessTag)&&(t=this.drawlessTag),l.Engine.createElement(t,{className:e,ref:Object(u.as)(this)},this.props.children)}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"eventable",(function(){return i}))
var r=n(59)
function i(e){return class extends e{constructor(e){super(e),this.emitter=new r.EventEmitter}on(e,t){this.emitter.on(e,t)}off(e,t){this.emitter.off(e,t)}trigger(e,t){this.emitter.trigger(e,t)}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"getVisibility",(function(){return o}))
var r=n(29)
function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let s
s=function(e){const t=e.getBoundingClientRect(),n=r.Globals.document.documentElement.clientHeight,s=n/4,o=3*s,a=(t.top+t.bottom)/2,c=t.top>=0&&t.top<=n,l=a>=s&&a<=o,u=t.bottom>=0&&t.bottom<=n,h=c&&u,d=t.top<=0&&t.bottom>=n,p=c||u||l||d
return i({isVisible:p,rect:t,viewportHeight:n,isBoxed:t.top!==t.bottom},p?{top:c,middle:l,bottom:u,partial:p,fitInScreen:h,tookWholeScreen:d}:{})}
const o=s},function(e,t,n){"use strict"
n.r(t),n.d(t,"Video",(function(){return b}))
var r=n(9),i=n.n(r),s=n(73),o=n(134),a=n(135),c=n(124),l=n(136),u=n(29),h=n(137),d=n(110)
function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const f=e=>{e&&e.impression&&e.impression()},m=({hasContent:e,testABExperiment:t})=>{let n=!0,r=e=>((e,t)=>{f(t),Object(a.applyVideoLightbox)(e)})(e,t)
var i;(i=t)&&u.Globals.postMateriaVideoAB&&u.Globals.postMateriaVideoAB.experiment===i.experiment&&"redirect"===t.alternative&&(n=!1,r=()=>f(t))
return{showPlayAndDuration:n,component:{onMouseUp:()=>{var e;(e=t)&&e.conversion&&e.conversion()},onReveal:r,extraClasses:"bstn-fd-video-cover "+(e?"feed-post-video-full":"")}}}
var g=s.Engine.createElement(l.BadgeAoVivo,null)
var v=s.Engine.createElement(h.VideoPlay,null)
class b extends s.Engine.Component{render(){const{video:e,image:t,isEsppub:n=!1,title:r,url:a,testABExperiment:l}=this.props
let u
if(!e||!t)return null
e.duration
const h=e.trademark,f=m({testABExperiment:l,hasContent:this.hasContent()})
var b=s.Engine.createElement("img",{className:"feed-post-video-trademark",src:h})
return u=s.Engine.createElement(d.Cover,p({images:t,alt:r},f.component,{isEsppub:n,"data-video-id":e.id,"data-short-url":a,"data-link":a,"data-program-title":e.programTitle,"data-title":r}),s.Engine.createElement("div",{className:"feed-cover-content"},this.Header(),s.Engine.createElement("div",{className:"bstn-fd-play-button"},Object(c.insertIf)(f.showPlayAndDuration,()=>v),((e,t)=>{const{isLive:n,video:r={}}=e
if(n)return g
const a=r.duration
return Object(c.insertIf)(t&&i()(a)&&a>0,()=>s.Engine.createElement("p",{className:"feed-post-video-duration"},Object(o.abbrTime)(a)))})(this.props,f.showPlayAndDuration)),this.Title(),this.Footer(),Object(c.insertIf)(h,()=>b))),u}Header(){return this.props.headerLabel?s.Engine.createElement("div",{className:"feed-post-video-full-header"},this.props.headerLabel):null}Title(){return this.props.titleLabel?s.Engine.createElement("div",{className:"feed-post-video-full-title"},this.props.titleLabel):null}Footer(){return this.props.footerComponent?this.props.footerComponent:null}hasContent(){return this.props.titleLabel||this.props.headerLabel||this.props.footerComponent}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"abbrTime",(function(){return c}))
var r=n(52)
const[i,s,o]=["1s","1min","1hr"].map(r.timeToInt),a=e=>Math.floor(e+.69)
function c(e){if(null===e)return""
const t=Math.floor(e/o)
e%=o
const n=Math.floor(e/s)
e%=s
const r=Math.floor(e/i)
return t>0?a(t+.01*n)+" hr":n>0?a(n+.01*r)+" min":r>0?a(r)+" seg":""}},function(e,t,n){"use strict"
n.r(t),n.d(t,"applyVideoLightbox",(function(){return _}))
var r=n(16),i=n.n(r),s=n(1),o=n.n(s),a=n(5),c=n.n(a),l=n(119),u=n.n(l),h=n(20),d=n(29),p=n(30),f=n(25),m=n(43)
function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const v=i()(()=>{const e=p.Settings.get("PUBLICIDADEPAGINA")
let t=p.Settings.get("VIDEO_SITEPAGE")
return u()(e)&&!u()(t)&&(Object(h.warn)("PUBLICIDADEPAGINA is deprecated. Use VIDEO_SITEPAGE instead."),t=e),!1!==t&&(t=!0),{publicidadePagina:t}}),b=i()(()=>{const e=Object(f.get)(d.Globals,"SETTINGS.FACEBOOK_APP_ID")
return o()(e)?{fbAppId:e}:{}}),E=()=>c()(Object(f.get)(d.Globals,"gui.lightbox.lightbox"))
async function _(e){if(c()(d.Globals.globalWebdeps)&&await d.Globals.globalWebdeps("player"),await Object(m.availabilityOf)("gui.lightbox.lightbox",E),e&&E()){const t=g({},b(),v())
d.Globals.gui.lightbox.lightbox(e,t)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"BadgeAoVivo",(function(){return i}))
var r=n(73).Engine.createElement("span",{className:"bstn-aovivo-label"},"ao vivo")
const i=()=>r},function(e,t,n){"use strict"
n.r(t),n.d(t,"VideoPlay",(function(){return s}))
var r=n(73),i=r.Engine.createElement("div",{className:"bstn-fd-video-play"},r.Engine.createElement("svg",{className:"bstn-fd-play-icon theme-color-primary",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.Engine.createElement("path",{d:"M8 5v14l11-7z"})))
function s(){return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"FeedReporter",(function(){return c}))
var r=n(82),i=n.n(r),s=n(28),o=n(23),a=n(81)
class c extends a.AbstractReporter{constructor({area:e}){super(),this.area=e}get areaDesktop(){if(s.At.largeScreen)return this.area}get feedId(){return o.Configs.get("feedId")}get feedType(){return o.Configs.get("feedType","").toLowerCase()}get feedViewTime(){return i()(o.Configs.get("feed_getSeenTime")()/1e3)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"SeenTimeTelemetry",(function(){return d}))
var r=n(9),i=n.n(r),s=n(116),o=n.n(s),a=n(53),c=(n(20),n(73)),l=n(80)
let u
class h extends c.Engine.Component{constructor(...e){super(...e),this.telemetry={seenTime:0,begin:null,lastSeenTimeReported:0},this.handleElementView=e=>{e.stopPropagation(),this.startCounting(),this.commitElapsedTime(),this.onView()}}cdmSeenTimeTelemetry(){this.startCounting=o()(this.startCounting,1100,{leading:!0,trailing:!1}),this.commitElapsedTime=o()(this.commitElapsedTime,1100,{leading:!1,trailing:!0}),this._refs.node.addEventListener(a.ELEMENT_VIEWED,this.handleElementView,!1)}cwuSeenTimeTelemetry(){this.startCounting.cancel(),this.commitElapsedTime.cancel(),this._refs.node.removeEventListener(a.ELEMENT_VIEWED,this.handleElementView)}startCounting(){this.telemetry.begin=Object(l.now)()}commitElapsedTime(){if(i()(this.telemetry.begin)){const e=this.telemetry.begin,t=parseInt(Object(l.now)()-e,10)
this.telemetry.seenTime+=t,this.telemetry.begin=null}}getSeenTime(){if(i()(this.telemetry.begin)){const e=this.telemetry.begin
return this.telemetry.seenTime+parseInt(Object(l.now)()-e,10)}return this.telemetry.seenTime||0}reportSeenTime(e){this.getSeenTime()!==this.telemetry.lastSeenTimeReported&&(this.telemetry.lastSeenTimeReported=this.getSeenTime(),e())}onView(){}}u=h
const d=u},function(e,t,n){"use strict"
n.r(t),n.d(t,"ElementViewGroup",(function(){return u}))
var r=n(9),i=n.n(r),s=n(73),o=n(130),a=n(131),c=n(120)
let l
l=class extends(Object(a.eventable)(Object(o.drawless)(s.Engine.Component))){constructor(e){super(e),this.children=[],this.pointer=0,this.handleParentVisibility=e=>{this.props.id||e?this.props.id===e&&this.activateChildren():this.activateChildren()},i()(e.radius)||(this.props.radius=1)}getChildContext(){return{parentTrigger:this.context.parentTrigger,parentGroup:this}}activateChildren(){const e=Math.max(this.pointer-this.props.radius,0),t=Math.min(this.pointer+this.props.radius+1,this.children.length)
let n,r=this.children.slice(e,t),i=!1
for(n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=e+n,i=!0)
if(!i)for(r=[].concat(this.children.slice(0,e),this.children.slice(t,this.children.length)),n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=this.children.indexOf(r[n]))}registerChild(e){this.children.push(e)}unregisterChild(e){Object(c.pull)(this.children,e)}componentDidMount(){this.context.parentTrigger.on("visible",this.handleParentVisibility)}componentWillUnmount(){this.context.parentTrigger.off("visible",this.handleParentVisibility)}}
const u=l},function(e,t,n){"use strict"
n.r(t),n.d(t,"ReporterCascadeAggregator",(function(){return i}))
var r=n(81)
class i extends r.AbstractReporter{constructor(...e){return super(),this.whitelist=["reporters","debug"],this.reporters=e,new Proxy(this,{get:(e,t)=>{if(e.whitelist.includes(t))return e[t]
for(const n of e.reporters){const e=n[t]
if(void 0!==e)return e}}})}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Scoreboard",(function(){return p}))
var r=n(9),i=n.n(r),s=n(123),o=n.n(s),a=n(73),c=a.Engine.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.Engine.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.Engine.createElement("g",{id:"vs"},a.Engine.createElement("g",null,a.Engine.createElement("polygon",{className:"versus",points:"12.6666667 4.27333333 11.7266667 3.33333333 8 7.06 4.27333333 3.33333333 3.33333333 4.27333333 7.06 8 3.33333333 11.7266667 4.27333333 12.6666667 8 8.94 11.7266667 12.6666667 12.6666667 11.7266667 8.94 8"}),a.Engine.createElement("polygon",{points:"0 0 16 0 16 16 0 16"})))))
function l(){return c}var u=a.Engine.createElement(l,null),h=a.Engine.createElement(l,null)
function d(e){const{away:t,home:n}=e
return i()(t.penalties)&&i()(n.penalties)&&t.penalties+n.penalties>0?a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),a.Engine.createElement("span",{className:"score-penalties"},"(",n.penalties),u,a.Engine.createElement("span",{className:"score-penalties"},t.penalties,")"),a.Engine.createElement("span",{className:"score-number"},t.score)):a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),h,a.Engine.createElement("span",{className:"score-number"},t.score))}function p(e){const{away:t,home:n,headline:r}=e,i=o()("scoreboard-bastian-feed",{headline:r})
return a.Engine.createElement("div",{className:i},a.Engine.createElement("div",{className:"scoreboard-home-team",title:n.name},a.Engine.createElement("span",{className:"shortName"},n.shortName),a.Engine.createElement("img",{className:"crest",src:n.crest})),a.Engine.createElement(d,{away:t,home:n}),a.Engine.createElement("div",{className:"scoreboard-away-team",title:t.name},a.Engine.createElement("img",{className:"crest",src:t.crest}),a.Engine.createElement("span",{className:"shortName"},t.shortName)))}},function(e,t,n){"use strict"
n.r(t)
var r=n(73),i=n(144)
const s={mobile:{width:36,height:36},desktop:{width:48,height:48}}
var o=r.Engine.createElement("g",null,r.Engine.createElement("rect",{fill:"#fff",height:"24",width:"24"})),a=r.Engine.createElement("rect",{height:"10",width:"7",x:"8.5",y:"7"}),c=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"6",y:"8.5"}),l=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"16.5",y:"8.5"})
t.default=e=>{const{device:t="mobile"}=e,n={width:s[t].width,height:s[t].height}
return r.Engine.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:n.height,width:n.width,viewBox:"0 0 24 24",style:{marginBottom:"mobile"===t?12:0,borderRadius:"50%"}},o,r.Engine.createElement("g",{fill:Object(i.getCategoryColor)()},a,c,l))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"getCategoryColor",(function(){return s}))
var r=n(145),i=n.n(r)
const s=()=>i()(window,"utag_data.cor_pagina",i()(window,"cdaaas.SETTINGS.COR","#000"))},function(e,t,n){var r=n(146)
e.exports=function(e,t,n){var i=null==e?void 0:r(e,t)
return void 0===i?n:i}},function(e,t,n){var r=n(147),i=n(151)
e.exports=function(e,t){for(var n=0,s=(t=r(t,e)).length;null!=e&&n<s;)e=e[i(t[n++])]
return n&&n==s?e:void 0}},function(e,t,n){var r=n(3),i=n(148),s=n(149),o=n(86)
e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:s(o(e))}},function(e,t,n){var r=n(3),i=n(100),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/
e.exports=function(e,t){if(r(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(o.test(e)||!s.test(e)||null!=t&&e in Object(t))}},function(e,t,n){var r=n(150),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,o=r((function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(s,"$1"):n||e)})),t}))
e.exports=o},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"requestMabExperiment",(function(){return a})),n.d(t,"isMabAvailiable",(function(){return c}))
var r=n(55)
let i,s
const o=new Set
i=({experimentName:e,skipImpression:t=!1})=>{if(s(e))return o.add(e),(async(e,t)=>{let n
try{n=await Object(r.getClient)()}catch(s){return Promise.reject(s)}const i=n.createOptions().timeout(3e3)
i.options.skipImpressions=!1,t.skipImpression&&i.skipImpression()
return n.mab().choose(e)})(e,{skipImpression:t})
throw new Error('An Mab experiment has already ran and "'+e+"\" couldn't be created")},s=e=>!o.has(e)
const a=i,c=s},function(e,t,n){"use strict"
function r(e){return JSON.parse(JSON.stringify(e))}n.r(t),n.d(t,"cloneJSON",(function(){return r}))},function(e,t,n){var r=n(155),i=n(158)
e.exports=function(e){if(null==e)return!0
if("string"==typeof e||i(e))return!e.length
if("object"==typeof e){var t=!0
return r(e,(function(){return t=!1,!1})),t}return!0}},function(e,t,n){var r=n(156),i=n(157)
e.exports=function(e,t,n){i(e,(function(i,s){if(r(e,s))return t.call(n,e[s],s,e)}))}},function(e,t){e.exports=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},function(e,t,n){var r,i,s=n(156)
function o(e,t,n,r){return e.call(r,t[n],n,t)}e.exports=function(e,t,n){var a,c=0
for(a in null==r&&function(){for(var e in i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=!0,{toString:null})r=!1}(),e)if(!1===o(t,e,a,n))break
if(r)for(var l=e.constructor,u=!!l&&e===l.prototype;(a=i[c++])&&("constructor"===a&&(u||!s(e,a))||e[a]===Object.prototype[a]||!1!==o(t,e,a,n)););}},function(e,t,n){var r=n(159),i=Array.isArray||function(e){return r(e,"Array")}
e.exports=i},function(e,t,n){var r=n(160)
e.exports=function(e,t){return r(e)===t}},function(e,t){e.exports=function(e){return Object.prototype.toString.call(e).slice(8,-1)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isLiveVideo",(function(){return s}))
var r=n(1),i=n.n(r)
const s=e=>i()(e)&&"live"===String(e).toLowerCase()},function(e,t,n){var r=n(163),i=n(164)
e.exports=function(e,t,n,s){return e=r(e),n=n||"...",t=s?t+1:t,(e=i(e)).length<=t?e:(e=e.substr(0,t-n.length),(e=s?e.substr(0,e.lastIndexOf(" ")):i(e))+n)}},function(e,t){e.exports=function(e){return null==e?"":e.toString()}},function(e,t,n){var r=n(163),i=n(165),s=n(166),o=n(167)
e.exports=function(e,t){return e=r(e),s(o(e,t=t||i),t)}},function(e,t){e.exports=[" ","\n","\r","\t","\f","\v"," "," ","᠎"," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]},function(e,t,n){var r=n(163),i=n(165)
e.exports=function(e,t){e=r(e),t=t||i
for(var n,s,o=0,a=e.length,c=t.length,l=!0;l&&o<a;)for(l=!1,n=-1,s=e.charAt(o);++n<c;)if(s===t[n]){l=!0,o++
break}return o>=a?"":e.substr(o,a)}},function(e,t,n){var r=n(163),i=n(165)
e.exports=function(e,t){e=r(e),t=t||i
for(var n,s,o=e.length-1,a=t.length,c=!0;c&&o>=0;)for(c=!1,n=-1,s=e.charAt(o);++n<a;)if(s===t[n]){c=!0,o--
break}return o>=0?e.substring(0,o+1):""}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ItemIndex",(function(){return o}))
var r=n(25)
const i=[],s=e=>{const t=Object(r.get)(e,"state.data.source")
return"$Advertises"!==t&&"$DistributedComponents"!==t||!0===Object(r.get)(e,"_refs.child.isBoxed")}
class o{constructor(){this.items=[],i.push(this)}register(e){this.items.push(e)}getPosition(e){let t,n=0
for(t of this.items)if(s(t)&&(n+=1),t===e)return n
return-1}clear(){this.items.splice(0,this.items.length)}static destroy(){i.forEach(e=>e.clear()),i.splice(0,i.length)}}o.HEADLINE_PLACEHOLDER="headline_placeholder"},function(e,t,n){var r=n(170),i=n(171),s=n(172),o=n(3),a=n(173),c=n(175),l=n(176),u=n(177),h=Object.prototype.hasOwnProperty
e.exports=function(e){if(null==e)return!0
if(a(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||s(e)))return!e.length
var t=i(e)
if("[object Map]"==t||"[object Set]"==t)return!e.size
if(l(e))return!r(e).length
for(var n in e)if(h.call(e,n))return!1
return!0}},function(e,t,n){var r=n(69)(Object.keys,Object)
e.exports=r},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(5),i=n(174)
e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isGooglePubadsAvailable",(function(){return d})),n.d(t,"getPubads",(function(){return p})),n.d(t,"isCustomLazyAvailable",(function(){return f})),n.d(t,"defineBanner",(function(){return m})),n.d(t,"canGetSlot",(function(){return g})),n.d(t,"filterEvents",(function(){return v}))
var r=n(5),i=n.n(r),s=n(44),o=n.n(s),a=n(29),c=n(25),l=n(40),u=n(20),h=n(43)
const d=async()=>{const e=()=>i()(Object(c.get)(a.Globals,"googletag.pubads"))
return await Object(h.availabilityOf)("googletag.pubads",e),e()},p=()=>a.Globals.googletag.pubads(),f=async()=>{const e=()=>i()(a.Globals.bannerLazyLoading)
return await Object(h.availabilityOf)("bannerLazyLoading",e),e()},m=(e,t,n)=>{e.setAttribute("id",t),o()(()=>a.Globals.bannerLazyLoading(t,n))},g=e=>!(!e||!Object(l.has)(e,"slot.u.o")&&!Object(l.has)(e,"slot.getSlotElementId"))||(Object(u.warn)("mab:vwblt path to creative name seems broken"),!1),v=(e,t)=>n=>{if(!g(n))return
return(e=>Object(c.get)(e,"slot.u.o")||Object(c.get)(e,"slot.getSlotElementId")())(n)===e.props.id?t(n):void 0}},function(e,t,n){"use strict"
n.r(t),n.d(t,"setupVideoPreviewViewportObserver",(function(){return g})),n.d(t,"observeElement",(function(){return p})),n.d(t,"unobserveElement",(function(){return f})),n.d(t,"mobileCallback",(function(){return h})),n.d(t,"shouldPlay",(function(){return d}))
var r=n(28),i=(n(73),n(29)),s=n(180),o=n(193),a=n(54),c=n(53)
const l="feed-post-video-viewport-observer",u={root:null,rootMargin:"-100px 0px -20px 0px",threshold:1},h=e=>{Object(a.triggerDomEvent)(c.VIDEOPREVIEW_INTERSECT,i.Globals.window,t=>{t.data=e})},d=(e,t)=>{const n=t.find(t=>t.target.isSameNode(e))
if(!n||!n.isIntersecting)return!1
return!(t.lastIndexOf(e=>e.isIntersecting)>t.indexOf(n))},p=(e,t)=>{Object(s.observeElement)(l,e),i.Globals.window.addEventListener(c.VIDEOPREVIEW_INTERSECT,t)},f=(e,t)=>{Object(s.unobserveElement)(l,e),i.Globals.window.removeEventListener(c.VIDEOPREVIEW_INTERSECT,t)},m=()=>!(i.Globals.postVideoPreviewAB&&"no-preview"===i.Globals.postVideoPreviewAB.alternative)&&Object(o.hasVideoPreviewSupport)(),g=()=>{m()&&r.At.smallScreen&&Object(s.setViewportObserver)({observerName:l,options:u,callback:h})}},function(e,t,n){"use strict"
n.r(t),n.d(t,"setViewportObserver",(function(){return i})),n.d(t,"observeElement",(function(){return s})),n.d(t,"unobserveElement",(function(){return o})),n.d(t,"hasIntersectionObserverSupport",(function(){return a}))
var r=n(20)
let i,s,o,a
i=({options:e,observerName:t,callback:n})=>{if(t&&n)return window[t]=new IntersectionObserver(n,e),window[t]
Object(r.warn)("ViewportObserver :: setViewportObserver - requires observerName and callback")},s=(e,t)=>t&&window[e]&&window[e].observe(t),o=(e,t)=>t&&window[e]&&window[e].unobserve(t),a=()=>"IntersectionObserver"in window},function(e,t,n){const r="10.7.0".split(".")
r.toString=function(){return this.join(".")},e.exports=r,e.exports.default=e.exports},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(186),s=n(110),o=n(73),a=n(194),c=n(25)
let l
l=function(e){const t=Object(c.get)(e,"pubeditorial.anunciante")||{url:null,logo_pequeno:null}
let n=null
return t.logo_pequeno&&(n=o.Engine.createElement(a.LabelEvent,{type:"click",label:"chapeu"},o.Engine.createElement("a",{href:Object(c.get)(t,"url")||"#"},o.Engine.createElement("span",{className:"feed-post-header-special-advertising-logo"},o.Engine.createElement("img",{className:"special-advertising-logo",src:Object(c.get)(t,"logo_pequeno")}))))),o.Engine.createElement("div",{className:"feed-post-header post-header-special-advertising"},o.Engine.createElement("span",{className:"feed-post-header-chapeu gui-text-section-title gui-text-special-advertising"},decodeURI("Especial Publicit%C3%A1rio")),n)}
const u=l,h=e=>t=>o.Engine.createElement("a",{href:e.url,className:"feed-post-link gui-color-primary gui-color-hover"},t.children)
var d=n(128),p=n(133),f=n(87),m=n(30),g=n(123),v=n.n(g),b=n(192),E=n(122),_=n(135),y=n(169),O=n.n(y),w=e=>!e||O()(e),S=n(124),I=n(134),C=n(136),T=n(137)
const x=e=>{const{extraClasses:t,isEsppub:n,video:r,image:i,url:a,title:c,children:l,onReveal:u,onMouseUp:h,threshold:d,ratio:p="1:1"}=e,f="bstn-fd-video-cover "+(t||"")
let m
return m=o.Engine.createElement(s.Cover,{images:i,alt:r.description,extraClasses:f.trim(),isEsppub:n,"data-video-id":r.id,ratio:p,"data-short-url":a,"data-link":a,"data-program-title":r.programTitle,"data-title":c,onReveal:u,onMouseUp:h,threshold:d},l),m}
var A=n(97),j=n(28),N=n(114),R=n(179)
class P extends o.Engine.Component{constructor(...e){super(...e),this.onChangeView=e=>{Object(R.shouldPlay)(this.base,e.data)?this.doPlay():this.doPause()},this.onCanPlay=()=>{this.waitingToPlay&&this.doPlay()},this.doPlay=()=>{this.waitingToPlay=!1,this._refs.preview&&this._refs.preview.paused&&(4===this._refs.preview.readyState?this._refs.preview.play():this.waitingToPlay=!0)},this.doPause=()=>{this._refs.preview&&!this._refs.preview.paused&&this._refs.preview.load()},this.reveal=()=>{!this.revealed&&this._refs.container&&(this._refs.preview&&0===this._refs.preview.readyState&&this._refs.preview.load(),this.props.onReveal(this._refs.container),this.revealed=!0)}}componentDidMount(){j.At.smallScreen&&Object(R.observeElement)(this.base,this.onChangeView)}componentWillUnmount(){j.At.smallScreen&&Object(R.unobserveElement)(this.base,this.onChangeView)}render(){const{children:e,title:t,url:n,video:r,image:i}=this.props,s=Object(A.choosePicture)(i)
return o.Engine.createElement(N.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:Promise.resolve("50%")},o.Engine.createElement("div",{ref:Object(f.as)(this,"container"),className:"post-media-preview","data-video-id":r.id,"data-short-url":n,"data-link":n,"data-program-title":r.programTitle,"data-title":t,onMouseEnter:this.doPlay,onMouseLeave:this.doPause},o.Engine.createElement("video",{ref:Object(f.as)(this,"preview"),className:"post-media-preview__video",poster:s,preload:"none",loop:!0,muted:!0,src:r.previewUrl,oncanplay:this.onCanPlay}),o.Engine.createElement("div",{className:"post-media-preview__content"},e)))}}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=o.Engine.createElement(C.BadgeAoVivo,null)
var D=o.Engine.createElement(T.VideoPlay,null)
const M=({children:e,isLive:t,video:n})=>o.Engine.createElement("div",{className:"feed-cover-content"},e,o.Engine.createElement("div",{className:"bstn-fd-play-button"},D,((e,t)=>e?L:Object(S.insertIf)(t>0,()=>o.Engine.createElement("p",{className:"feed-post-video-duration"},Object(I.abbrTime)(t))))(t,n.duration)),Object(S.insertIf)(n.trademark,()=>o.Engine.createElement("img",{className:"feed-post-video-trademark",src:n.trademark}))),V=e=>{const{image:t,video:n,canShowVideoPreview:r}=e
let i
const s=(n||{}).previewUrl
if(w(n)||w(t)||!n.id)return null
const a=e=>{e&&Object(_.applyVideoLightbox)(e)}
return i=r&&s?o.Engine.createElement(P,k({onReveal:a},e),M(e)):o.Engine.createElement(x,k({onReveal:a},e),M(e)),i}
var H=n(23)
const F=({image:e,video:t})=>w(e)?null:Boolean(t)&&Boolean(t.id)&&!H.Configs.get("photoOverVideo")?"video":"photo",G={video:({image:e,video:t,title:n,url:r,isEsppub:i,canShowVideoPreview:s})=>o.Engine.createElement(V,{title:n,url:r,video:t,image:e,isEsppub:i,canShowVideoPreview:s}),photo:({image:e,isEsppub:t})=>{const n=e.rightsHolder?"Foto: ("+e.rightsHolder+")":null
return o.Engine.createElement(s.Cover,{images:e,alt:n,isEsppub:t})}},U=e=>{const{image:t,video:n,url:r}=e,i=F({image:t,video:n})
return null===i?null:o.Engine.createElement("div",{className:"feed-media-wrapper"},o.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},o.Engine.createElement("a",{href:r,className:"feed-post-figure-link gui-image-hover"},G[i](e))))}
var B=n(126)
const z=e=>{const{date:t,section:n}=e
return o.Engine.createElement("div",{className:"feed-post-metadata"},Object(S.insertIf)(!1===H.Configs.get("disableDateTime"),()=>o.Engine.createElement(b.Datetime,{isRecommended:t.isRecommended,ageInSeconds:t.age,publication:t.publication})),n&&o.Engine.createElement(B.Section,{text:n}))}
var q=n(125),W=n(127),$=n(29),K=n(193)
const Z=e=>$.Globals[e],J=e=>{if(!Z("postVideoFull"))return!1
const{contentType:t}=e
return["video"].includes(t)},Y=e=>{if(!Object(K.hasVideoPreviewSupport)())return!1
const{content:t,media:n,contentType:r}=e
if(!["basico","materia","materia_video"].includes(r))return!1
const i=(t.video||{}).previewUrl
return"video"===n&&Boolean(i)},X=e=>{const t=(Z("postVideoPreviewAB")||{}).alternative
return Y(e)&&"no-preview"!==t},Q=[{name:"postVideoPreviewAB",isAvailableForPost:Y,impressionOnPostView:!0,conversionOnPostClick:!0},{name:"postVideoFull",isAvailableForPost:J,impressionOnPostView:!0,conversionOnPostClick:!0}]
var ee=n(152),te=n(76),ne=n(71),re=n(40)
class ie extends o.Engine.Component{constructor(e){super(e),this.getPostContentData=()=>{const e=Object(c.get)(this,"props.content")
return{content:e,media:F(e),contentType:this.getContentType()}},this.state={title:this.isMabEnabled()?"":Object(c.get)(e,"content.title")}}render(){const e=v()("feed-post","bstn-item-shape",{["type-"+this.props.type]:this.props.type})
return o.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:e},o.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=te.ItemPostReporter.upgrade(this.context.sharedItemData),this.reporter.addFeatureChecks({resumo:()=>this.hasSummary(),foto:()=>"photo"===F(Object(c.get)(this,"props.content")),video:()=>"video"===F(Object(c.get)(this,"props.content"))})}componentDidMount(){this._refs.post.setAttribute("id",this.props.id),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.uninstallMab()}isMabEnabled(){if(j.At.server)return!1
const e=Object(c.get)(this,"props.content.mab.experiment")
return e&&Object(ee.isMabAvailiable)(e)}async installMab(){const e=Object(c.get)(this,"props.content.mab.experiment")
if(e)try{const t=await Object(ee.requestMabExperiment)({experimentName:e}),n=this.props.content.mab.metadata[t.arm]
this.setState({title:n}),this.reporter.setContent({title:n}),this.mabRewardHandler=()=>t.reward(),this._refs.post.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)("title exp failed\n",t)}}uninstallMab(){this.mabRewardHandler&&this._refs.post.removeEventListener("click",this.mabRewardHandler)}getUrl(){return Object(c.get)(this,"props.content.url")||null}getContentType(){return this.props.type}hasMedia(){return Boolean(F(Object(c.get)(this,"props.content")))}Media(){const{title:e,url:t,video:n,image:r}=this.props.content
return o.Engine.createElement(U,{ref:Object(f.as)(this,F(Object(c.get)(this,"props.content"))),title:e,url:t,video:n,image:r,isEsppub:Object(re.has)(this,"props.pubeditorial"),postContentType:this.getContentType(),canShowVideoPreview:X(this.getPostContentData())})}Metadata(){let e
const t=m.Settings.get("PORTAL")
return["valor","valor-investe"].indexOf(t)>=0&&(e=this.props.publication),o.Engine.createElement(z,{section:this.props.content.section,date:{age:this.props.age,publication:e,isRecommended:this.props.isRecommended}})}Header(e){return o.Engine.createElement(E.Header,{content:this.props.content,parent:this},e)}Title(){return Object(re.has)(this,"state.title")?o.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:h({url:this.getUrl()})}):null}hasSummary(){const e=this.props.aggregatedPosts
return Boolean(this.props.content.summary)&&!(Array.isArray(e)&&e.length>0)}Summary(){const e=this.props.content.summary
return e&&this.hasSummary()?o.Engine.createElement(W.Summary,{text:e}):null}Relateds(){const e=this.props.aggregatedPosts
return Array.isArray(e)&&e.length>0?o.Engine.createElement(q.Relateds,{items:e,dateFactory:({age:e})=>o.Engine.createElement(b.Datetime,{ageInSeconds:e||this.props.age,isRecommended:this.props.isRecommended})},e=>o.Engine.createElement(a.LabelEvent,{type:"click",label:"agregados"},e)):null}onView(){var e
e=this.getPostContentData(),Q.forEach(t=>{const n=Z(t.name)
n&&t.impressionOnPostView&&t.isAvailableForPost(e)&&n.impression()})}onClick(){var e
this.clicked||(e=this.getPostContentData(),Q.forEach(t=>{const n=Z(t.name)
n&&t.conversionOnPostClick&&t.isAvailableForPost(e)&&n.conversion()}),this.clicked=!0)}reportToHorizon(){return{"post-id":this.props.id,"post-type":this.getContentType(),"post-url":this.getUrl(),"post-has-resumo":this.hasSummary(),"post-has-photo":this.hasMedia()}}}function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}ie.FACE="basico",ie.SIZE=ne.POST_SIZES.MEDIUM
class oe extends ie{constructor(...e){super(...e),this.Header=()=>String(m.Settings.get("PORTAL")).startsWith("valor")?null:o.Engine.createElement(u,{pubeditorial:this.props.pubeditorial})}getContentType(){return"especial-publicitario"}Title(){return o.Engine.createElement(d.Title,{text:this.state.title||this.props.content.title,extraClasses:"feed-post-advertising-title",innerWrapper:h({url:this.getUrl()})})}renderVideo(){return Object(c.get)(this,"props.content.video.id")?o.Engine.createElement(p.Video,se({ref:Object(f.as)(this,"video")},this.props.content,{isEsppub:!0})):null}renderImage(){const e=this.props.content.image
if(e){let t=Object(c.get)(this,"props.content.image.rightsHolder")||null
return t&&(t="Foto: ("+t+")"),o.Engine.createElement(s.Cover,{ref:Object(f.as)(this,"photo"),images:e,alt:t,isEsppub:!0})}return null}}oe.FACE="especial_publicitario"
var ae=n(59),ce=n(5),le=n.n(ce),ue=n(44),he=n.n(ue),de=n(96),pe=n(189),fe=n(116),me=n.n(fe),ge=n(130)
let ve
ve=class extends(Object(ge.drawless)(o.Engine.Component)){constructor(e){super(e),this.observe=()=>{this.observer&&(this.observer.observe(this._refs.node,{childList:!0,subtree:!0,attributes:!0,attributesFilter:["style","width","height"]}),this.checkMutation())},this.checkMutation=me()(()=>{const{offsetHeight:e,offsetWidth:t}=this._refs.node,n=e>=this.minHeight&&t>=this.minWidth
if(n!==this.isBoxed&&(this.isBoxed=n,le()(this.props.onChange)))try{this.props.onChange(n,{height:e,width:t})}catch(i){Object(r.error)(i)}this.disconnectObserver()},500,{leading:!0,trailing:!0}),this.disconnectObserver=me()(()=>{this.observer&&(this.observer.disconnect(),this.observer=null)},1e4,{leading:!1,trailing:!0}),this.isBoxed=!1,this.minHeight=this.props.minHeight||1,this.minWidth=this.props.minWidth||1,this.observer=new MutationObserver(this.checkMutation)}componentDidMount(){le()(this.props.manualStart)?this.props.manualStart(this.observe):this.observe()}}
const be=ve
function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const _e=Ee({},de,{ui:Ee({},pe)}),ye=e=>{var t,n
return n=t=class extends o.Engine.Component{constructor(...e){super(...e),this.state={imploded:!1},this.syncBoxingState=e=>{this.isBoxed=e}}render(){return o.Engine.createElement(be,{onChange:this.syncBoxingState,minHeight:3},Object(S.insertIf)(!this.state.imploded,()=>o.Engine.createElement("div",{className:"post-item"},o.Engine.createElement("div",{ref:Object(f.as)(this),className:"bstn-item-shape"}))))}componentWillMount(){te.ItemPostReporter.upgrade(this.context.sharedItemData)}componentDidMount(){he()(()=>{const t=this.context,n=Ee({},_e)
de.patch(n,{areaId:t.areaId,item:t.item,itemIndex:t.itemIndex,source:this.props.source,implode:this.implode.bind(this)})
try{le()(e)&&e(this.props,this._refs.node,n)}catch(i){Object(r.error)("[component] ["+this.props.type+"]\n",i)}})}shouldComponentUpdate(e,t){return t.imploded}implode(){this.setState({imploded:!0})
const{props:e}=this
Object(r.warn)("The item of type "+e.type+" self imploded.",e)}},t.FACE="component",t.SIZE=ne.POST_SIZES.MEDIUM,n}
class Oe extends te.ItemPostReporter{get contentStatus(){if(this.itemProps.isLive)return"ao_vivo"}}var we=o.Engine.createElement(C.BadgeAoVivo,null)
class Se extends ie{constructor(...e){super(...e),this.isLive=()=>Object(c.get)(this.props,"cobertura.isLive"),this.Header=()=>{const{content:e}=this.props
return this.isLive()?o.Engine.createElement(E.Header,{content:e},we):o.Engine.createElement(E.Header,{content:e})}}componentWillMount(){this.reporter=Oe.upgrade(this.context.sharedItemData,{isLive:this.isLive()})}}Se.FACE="cobertura"
var Ie=n(111),Ce=n.n(Ie),Te=n(195),xe=n(142)
function Ae(){return(Ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const je={criado:1,iniciado:2,INITIATED:2,"em andamento":3,IN_PROGRESS:3,encerrado:4,CLOSED:4}
var Ne=o.Engine.createElement("div",{className:"bstn-aovivo-label"},"tempo real")
class Re extends ie{constructor(e){super(e),this.state.match=e.match}render(){return o.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape bstn-face-temporeal type-"+this.props.type},o.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Score(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=Pe.upgrade(this.context.sharedItemData,{status:this.getStatus()}),this.reporter.addFeatureChecks({placar:()=>this.hasScore(),label_tr:()=>this.hasLabelTempoReal(),destaques:()=>this.hasHighlights(),resumo:()=>this.hasSummary(),espectadores:()=>this.showSpectators()})}componentDidMount(){this.completeRecommended()}async completeRecommended(){const{match:e,isRecommended:t}=this.props
if(e&&e.resume&&t){const t=await fetch(e.resume),n=await t.json()
this.fillRecommended(n)}}fillRecommended(e){const t=Ae({},this.state.match)
t&&(t.homeTeam.score=e.equipe_mandante.placar||0,t.awayTeam.score=e.equipe_visitante.placar||0,t.homeTeam.penalties=e.equipe_mandante.penalti||0,t.awayTeam.penalties=e.equipe_visitante.penalti||0,t.status=e.status,this.setState({match:t}))}Header(){return super.Header(this.hasLabelTempoReal()?Ne:null)}Metadata(){let e=null
return this.showSpectators()&&(e=o.Engine.createElement("span",{className:"post-tr-spectators"},this.props.match.spectators.toLocaleString("pt-br")," assistindo")),o.Engine.createElement("div",{className:"feed-post-metadata"},o.Engine.createElement(b.Datetime,{isRecommended:this.props.isRecommended,ageInSeconds:this.props.age}),e)}Summary(){return this.hasHighlights()?o.Engine.createElement(Te.Highlight,{content:this.state.match.highlights[0]}):this.hasSummary()?super.Summary():null}Score(){if(this.hasScore()){const{awayTeam:e,homeTeam:t}=this.state.match
return o.Engine.createElement(xe.Scoreboard,{away:e,home:t})}return null}isLive(){const e=((this.props.match||{}).status||"").toLowerCase()
return!!Ce()(je[e],je.INITIATED,je.CLOSED)&&(!!this.props.isRecommended||0===String(this.props.content.summary||"").trim().length)}hasScore(){return Boolean(this.state.match)}hasLabelTempoReal(){return this.isLive()}hasChapeu(){return!this.hasLabelTempoReal()&&Object(c.get)(this.props.content,"chapeu.label")}hasSummary(){return!this.hasHighlights()&&super.hasSummary()}hasHighlights(){return this.isLive()&&Object(c.get)(this.state,"match.highlights",[]).length>0}showSpectators(){return this.hasLabelTempoReal()&&Object(c.get)(this.props,"content.showSpectators")&&this.state.match.spectators>0}getStatus(){return(Object(c.get)(this.props,"match.status")||"encerrada").toLowerCase()}}Re.FACE="tempo_real"
class Pe extends te.ItemPostReporter{get contentStatus(){if(this.itemProps.status)return this.itemProps.status}}var ke=n(144),Le=n(145),De=n.n(Le),Me=n(143)
function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const He=e=>{const{extraClasses:t,image:n,description:r,thumbOrientation:i,url:a,title:c,children:l,ratio:u="1:1"}=e,h="bstn-fd-stories-cover "+(t||"")
let d
return d=o.Engine.createElement(s.Cover,{images:n,alt:r,thumbOrientation:i,extraClasses:h.trim(),ratio:u,"data-short-url":a,"data-link":a,"data-title":c},l),d}
var Fe=o.Engine.createElement(Me.default,{device:"mobile"})
const Ge=e=>{return o.Engine.createElement(He,Ve({},e,{thumbOrientation:"V"}),o.Engine.createElement("div",{className:"stories__content"},o.Engine.createElement("div",{className:"stories__content--header"}," ",De()(e,"chapeu.label",e.section)," "),o.Engine.createElement("div",null,Fe,o.Engine.createElement("p",{className:"stories__content--title"}," ",(t=e.title,n=70,t.length>n?t.substring(0,n)+"...":t)," "),o.Engine.createElement("div",{className:"stories__content--metadata"},e.children))))
var t,n}
var Ue=o.Engine.createElement("div",{className:"bstn-fd-play-button"},o.Engine.createElement(Me.default,{device:"desktop"}))
const Be=e=>o.Engine.createElement(He,Ve({},e,{thumbOrientation:"H"}),Ue),ze=e=>e.desktop?o.Engine.createElement(Be,e):o.Engine.createElement(Ge,e)
function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var We=n(161)
function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ke(){const e=H.Configs.get("recommendationTag",null)
e&&le()($.Globals.convertRecAb)&&$.Globals.convertRecAb(e)}var Ze=o.Engine.createElement(C.BadgeAoVivo,null)
class Je extends ie{constructor(...e){super(...e),this.renderHeader=()=>o.Engine.createElement("div",{className:"feed-post-video-full-header"},Object(c.get)(this.props,"content.chapeu.label",null)),this.renderTitle=()=>o.Engine.createElement("div",{className:"feed-post-video-full-title"},this.state.title)}renderVideo(e){const{content:t}=this.props
return o.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type},o.Engine.createElement("div",{className:"feed-post-body",onClick:Ke},this.Header(t),this.Title(),o.Engine.createElement("div",{className:"feed-media-wrapper"},o.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},o.Engine.createElement("a",{href:e,className:"feed-post-figure-link gui-image-hover"},o.Engine.createElement(V,$e({ref:Object(f.as)(this,"video")},t,{isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial"))}))))),this.Metadata(),this.Relateds()))}renderVideoFull(e){const{content:t}=this.props
return o.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type+" feed-post-video-full-container"},o.Engine.createElement("div",{className:"feed-post-body",onClick:Ke},o.Engine.createElement("div",{className:"feed-media-wrapper"},o.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},o.Engine.createElement("a",{href:e,className:"feed-post-figure-link gui-image-hover"},o.Engine.createElement(V,$e({},t,{ratio:"4:3",extraClasses:"feed-post-video-full",isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),isLive:this.isLive()}),this.renderHeader(),this.renderTitle(),this.Metadata())))),this.Relateds()))}render(){const e=this.props.content
e.url=e.url||$.Globals.location.href
const t=e.url||""
return n=this.getPostContentData(),J(n)&&"videofull"===Z("postVideoFull").alternative?this.renderVideoFull(t):this.renderVideo(t)
var n}Header(e){return o.Engine.createElement(E.Header,{content:e},Object(S.insertIf)(this.isLive(),()=>Ze))}Title(){if(Object(re.has)(this,"state.title")){const e=this.getUrl(),t=Object(c.get)(this.props.content,"video.id")
return o.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:n=>o.Engine.createElement("a",{href:e,className:"feed-post-link gui-color-primary gui-color-hover","data-video-id":t,"data-short-url":e,"data-link":e,ref:e=>Object(_.applyVideoLightbox)(e)},n.children)})}return null}componentWillMount(){this.reporter=Oe.upgrade(this.context.sharedItemData,{isLive:this.isLive()}),this.reporter.addFeatureChecks({video:()=>!0})}isLive(){return Object(We.isLiveVideo)(Object(c.get)(this.props.content,"video.kind"))}}Je.FACE="video",n.d(t,"emitter",(function(){return Ye})),n.d(t,"NEW_POST_TYPE",(function(){return Xe})),n.d(t,"registerExternalItemFactory",(function(){return et})),n.d(t,"assignFactory",(function(){return tt}))
const Ye=new ae.EventEmitter,Xe="NEW_POST_TYPE_",Qe={default:ie,basico:ie,materia:ie,materia_video:ie,advertise:i.default,cobertura:Se,stories:class extends ie{constructor(...e){super(...e),this.StoriesMobile=()=>o.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type+" stories",style:{borderBottom:"5px solid "+Object(ke.getCategoryColor)()}},o.Engine.createElement("div",{className:"feed-media-wrapper"},o.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},o.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},o.Engine.createElement(ze,qe({mobile:!0,extraClasses:"feed-post-stories-mobile",ref:Object(f.as)(this,"stories")},this.props.content),this.Metadata()))))),this.StoriesDesktop=()=>o.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type},o.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),o.Engine.createElement("div",{className:"feed-media-wrapper"},o.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},o.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},o.Engine.createElement(ze,qe({desktop:!0,extraClasses:"feed-post-stories-desktop",ref:Object(f.as)(this,"stories")},this.props.content))))),this.Summary(),this.Metadata()))}render(){return j.At.smallScreen?this.StoriesMobile():this.StoriesDesktop()}},"especial-publicitario":oe,video:Je,"eventos-esportivos":Re},et=(e,t)=>{((e,t)=>{"advertise"!==e&&"especial-publicitario"!==e&&(Qe[e]=t,Ye.trigger(Xe+e))})(e,ye(t))},tt=e=>{let t=e.type
e.pubeditorial&&"cobertura"!==t&&(t="especial-publicitario"),!(t in Qe)&&(e=>Object(c.get)(e,"content.title")&&Object(c.get)(e,"content.url"))(e)&&(t="default")
const n="gshow"===m.Settings.get("PORTAL"),r=!Object(re.has)(e,"content.video.id"),i="materia"===e.type,s=!Object(re.has)(e,"pubeditorial")
return n&&r&&i&&s&&(t="default"),t in Qe&&(e.klass=Qe[t]),e}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(73),s=n(123),o=n.n(s),a=n(23),c=n(71),l=n(129),u=n(138),h=n(139),d=n(87),p=n(115),f=n.n(p),m=n(5),g=n.n(m),v=n(10),b=n.n(v),E=n(93),_=n.n(E),y=n(61),O=n.n(y),w=n(72),S=n(187),I=n(92),C=n(1),T=n.n(C),x=n(22),A=n(191)
let j
const N={}
function R(e){e.content&&T()(e.content.url)&&(e.content.url=e.content.url.trim()+a.Configs.get("recommendationTag"))}class P{static getInstance(){return j||(j=new P(N)),j}constructor(e){e!==N&&Object(r.warn)("Class $Posts is a singleton and shouldn't be called directly.")
const t=x.$Falkor.getInstance(),n=t.stream
let i
this.$falkor=t,this.source=t,this.stream=n
try{i=A.$Recommendation.getInstance()}catch(s){}if(i){this.source=i
const e=i.stream,s=()=>{this.source=t,this.request()}
e.addListener({next:()=>{},error:()=>{Object(r.error)("soft error: recommendation failed, activating fallback"),s()},complete:()=>{console.info("[bastian] Recommendation ended. Activating fallback..."),s()}}),this.stream=b.a.merge(e,n.map(e=>(a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")<a.Configs.get("recommendationStart")?a.Configs.incr("recommendationCounter"):a.Configs.has("recommendationTag")&&(R(e),Array.isArray(e.aggregatedPosts)&&e.aggregatedPosts.forEach(R)),e)))}}request(){a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")+1>=a.Configs.get("recommendationStart")?this.source.request():this.$falkor.request({preventFetch:!0})}isEmpty(){return this.source.isEmpty()}getNextPage(){return this.source.nextPage}}var k=n(28)
let L
const D={},M=(e,t)=>new Array(t).fill().map(()=>e),V=e=>({request:e}),H=(...e)=>V(t=>e.some(e=>!1!==e.request(t))),F=e=>{const t=V(n=>(t.request=()=>!1,e.request(n)))
return t}
class G{static getInstance(){return L||(L=new G(D)),L}constructor(e){var t
let n
e!==D&&Object(r.warn)("Class $Rhythmist is a singleton and shouldn't be called directly."),n={AD:w.$Advertises,CARD:S.$Cards,DISTRIBUTED_COMPONENTS:I.$DistributedComponents,POST:P}
const i=O()(n,e=>e.getInstance()),s="cards"===a.Configs.get("thirdPartyingModel")?i.CARD:i.DISTRIBUTED_COMPONENTS,o=H(i.AD,i.POST)
"Home"===(null===(t=window.utag_data)||void 0===t?void 0:t.content_type)&&k.At.smallScreen?this.rhythm=[...M(i.POST,2),H(F(i.AD),i.POST),i.POST,o,i.POST,H(F(i.AD),i.POST),i.POST,o]:this.rhythm=[...M(i.POST,4),o,i.POST,...M(i.POST,2),o]
const c=a.Configs.get("componentPosition")-1
this.rhythm.splice(c,0,H(s,i.POST))
const l=_()(i).map(e=>e.stream)
this.stream=b.a.merge(...l).endWhen(P.getInstance().stream.last())}rotateRhythm(){this.rhythm.push(this.rhythm.shift())}request(e){const t=this.rhythm[0]
this.rotateRhythm()
!1===t.request(e)&&(Object(r.warn)("all choices failed, skipping position:",e),this.request(e))}}let U
const B={}
class z{static getInstance(){return U||(U=new z(B)),U}constructor(e){this.itemCounter=0,this.pageCounter=0,this.isBusy=!1,e!==B&&Object(r.warn)("Class $Pages is a singleton and shouldn't be called directly."),this.stream=b.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}})}request(){if(!this.isBusy&&this.listener){const e=this.listener,t=[],n=G.getInstance()
let i
const s=()=>{t.length>0&&(this.deliver=null,this.pageCounter++,this.itemCounter+=t.length,n.stream.removeListener(i),e.next(t),this.isBusy=!1)}
this.deliver=s
const o=()=>({pageNumber:this.pageCounter+1,position:this.itemCounter+t.length+1,positionOnPage:t.length+1})
i={next:e=>{t.push(e),t.length<10?n.request(o()):s()},error:t=>{Object(r.error)(t),s(),e.error(t)},complete:()=>{s(),e.complete()}},n.stream.addListener(i),this.isBusy=!0,n.request(o())}}flush(){g()(this.deliver)&&this.deliver()}}var q=n(29)
let W
const $=/(.*\/)([^?#]*)(\?[^#]*|)(#.*|)/
const K=/(?:(.*\/)([^/]+)\/feed\/pagina-(\d+)(\.g?html|\/|)|(.*\/)([^.]*)(\.g?html|))/,Z=/\..*/
function J(){const e=a.Configs.get("referer")||"",t=function(e){const t=e.match($)||["","","",""],[,n,r,i,s]=t
return{path:n,name:r,querystring:i,hash:s}}(e),n=(""+t.path+t.name).match(K)||["","","","","",""],[,r,i,s,o,c,l,u]=n
return{path:c||r,name:l&&l.replace(Z,"")||i||"index",page:s||"1",extension:u||o||"",querystring:t.querystring,hash:t.hash,decomposed:Boolean(e&&(c||r))}}const Y={getPageURL:function(e){return W=W||J(),W.decomposed?""+W.path+W.name+"/feed/pagina-"+e+W.extension+W.querystring+W.hash:null},destroy:function(){W=null}}
var X=n(118),Q=n(132),ee=n(40)
var te=n(188)
class ne extends i.Engine.Component{constructor(){super(),this.autoLoadActive=!1,this.handleLoadMore=e=>{e&&(e.stopPropagation(),e.preventDefault()),Object(te.default)({origin:"botao mais noticias",label:"interacao | carregamento "+String(this.state.pagesDelivered).padStart(3,"0")},["GA","CommonEvents"]),this.proceedLoadMore()},this.proceedLoadMore=f()(()=>{z.getInstance().request(),a.Configs.has("recommendationTag")&&A.$Recommendation.getInstance().fetch()},1e3,{leading:!0,trailing:!1}),this.scheduleAutoLoad=()=>{this.autoLoadActive&&(this.autoLoad(),this.timer=setTimeout(this.scheduleAutoLoad,1e3))},this.teardownAutoLoad=()=>{this.autoLoadActive&&(X.PassiveScrollListener.off(this.autoLoad),clearTimeout(this.timer),this.autoLoadActive=!1)}
const e=z.getInstance()
this.state={pagesDelivered:e.pageCounter,reachedEnd:!1},e.stream.addListener({next:()=>{this.setState({pagesDelivered:e.pageCounter})},error:()=>{},complete:()=>{this.setState({reachedEnd:!0})}})}render(){const e=P.getInstance(),t=e.getNextPage(),n=Math.max(t||0,this.state.pagesDelivered+1)
return(this.state.reachedEnd||null===t)&&e.isEmpty()?null:i.Engine.createElement("div",{className:"load-more gui-color-primary-bg"},i.Engine.createElement("a",{ref:Object(d.as)(this),href:Y.getPageURL(n)},"Veja mais"))}componentDidMount(){this.setupAutoLoad(),this._refs&&this._refs.node&&this._refs.node.addEventListener("click",this.handleLoadMore,!1)}componentWillUnmount(){this.teardownAutoLoad(),this._refs&&this._refs.node&&this._refs.node.removeEventListener("click",this.handleLoadMore)}setupAutoLoad(){const e=P.getInstance()
null===e.getNextPage()&&e.isEmpty()||Object(ee.has)(q.Globals,"campos.pubeditorial")||(this.autoLoad=this.pureAutoLoad.bind(this),this.autoLoad=function(e,t,n){let r=0
return function(){let i
r<e?(i=t(),i&&(r+=1)):i&&g()(n)&&n(i)}}(3,this.autoLoad,this.teardownAutoLoad),this.autoLoad=f()(this.autoLoad,1e3,{leading:!0,trailing:!1}),this.autoLoadActive=!0,setTimeout(this.scheduleAutoLoad,0),X.PassiveScrollListener.on(this.autoLoad))}pureAutoLoad(){const e=Object(Q.getVisibility)(this.context.root._refs.node)
return!!(e.isBoxed&&e.rect.bottom<e.viewportHeight+1e3)&&(this.handleLoadMore(),!0)}}var re=n(190),ie=n(140),se=n(184),oe=n(168),ae=n(25),ce=n(53),le=n(54),ue=n(196)
class he extends i.Engine.Component{render(){const{items:e,pageIndex:t}=this.props,n="page-"+t+"-items"
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:n},i.Engine.createElement("div",{ref:Object(d.as)(this,"page"),className:"bastian-page","data-index":t},i.Engine.createElement(ie.ElementViewGroup,{id:n,radius:2},e.map((e,t)=>i.Engine.createElement(ue.Item,{key:t,data:e,index:t+1})))))}componentDidMount(){Object(le.triggerDomEvent)(ce.PAGE_RENDERED,this._refs.page)}}function de(e){let t=[]
return e.stream.take(1).addListener({next:e=>{t=e},error:r.error,complete:()=>{}}),e.request(),e.flush(),t}class pe extends i.Engine.Component{constructor(){super(),this.itemIndex=new oe.ItemIndex,this.resetItemIndex()
const e=z.getInstance(),t=e.stream
this.state={updates:[],pages:[de(e)]},re.$PushStream.getInstance().stream.addListener({next:e=>this.setState({updates:[...this.state.updates,...e]}),error:r.error,complete:()=>{}}),t.addListener({next:e=>this.setState({pages:[...this.state.pages,e]}),error:r.error,complete:()=>{}})}getChildContext(){return{itemIndex:this.itemIndex}}render(){let e
return this.state.updates.length>0&&(e=i.Engine.createElement(he,{key:0,pageIndex:0,items:this.state.updates})),i.Engine.createElement(ie.ElementViewGroup,{id:"pages"},e,this.state.pages.map((e,t)=>i.Engine.createElement(he,{key:t+1,pageIndex:t+1,items:e})))}componentWillUpdate(){this.resetItemIndex()}shouldComponentUpdate(e,t){const n=Object(ae.get)(this.state,"updates.length")!==Object(ae.get)(t,"updates.length"),r=this.state.pages.length!==t.pages.length
return n||r}resetItemIndex(){this.itemIndex.clear(),new Array(se.Headlines.getConsumed()).fill().forEach(()=>this.itemIndex.register(oe.ItemIndex.HEADLINE_PLACEHOLDER))}}var fe=n(75),me=n(79),ge=n(30),ve=n(121)
function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Ee=()=>{},_e={next:Ee,error:Ee,complete:Ee}
function ye(e){setTimeout(()=>{X.PassiveScrollListener.pause()
const t=function(e){const t=Object(ae.get)(e,"content.url")
if(!t)return null
let n=q.Globals.document.querySelector('.bastian-page:nth-child(1) .feed-post-link[href="'+t+'"]')
if(n)for(;n.className&&-1===n.className.indexOf(fe.ITEM.slice(1))&&n.parentElement;)n=n.parentElement
return n}(e[0])
t&&function(e,t,n){const r=performance.now(),i=q.Globals.window.scrollY
if(i===e)return n()
Object(ve.rAF)((function s(){const o=performance.now(),a=Math.min(1,(o-r)/t),c=(l=a)<.5?2*l*l:(4-2*l)*l-1
var l
q.Globals.window.scrollTo(0,c*(e-i)+i),a<1?Object(ve.rAF)(s):n()}))}(function(e){let t=13
return me.DEVICES[ge.Settings.get("DEVICE_GROUP","desktop")]>me.DEVICES.smart&&(t+=100),e.getBoundingClientRect().top+q.Globals.window.scrollY-t}(t),1e3,()=>{X.PassiveScrollListener.resume()})},100)}class Oe extends i.Engine.Component{constructor(e){super(e),this.handleClick=()=>{Object(te.default)({origin:"botao pushstream click",label:"Quantidade: "+String(this.state.counter).padStart(2,"0")})
const e=re.$PushStream.getInstance()
e.stream.take(1).addListener(be({},_e,{next:ye})),e.request()},this.state={counter:0,topIsVisible:!0},re.$PushStream.getInstance().counterStream.addListener({next:e=>{this.setState({counter:e})},error:r.error,complete:()=>{}})}render(){const e=this.state.counter,t=o()("post-notifier-pushstream gui-color-primary-bg",{"notify-pushstream":Boolean(1===e),"notify-pulse":Boolean(e>1),"bstn-fd-visible-top":this.state.topIsVisible})
return 0===e?i.Engine.createElement("div",{className:t,ref:Object(d.as)(this)}):i.Engine.createElement("div",{className:t,ref:Object(d.as)(this),onClick:this.handleClick},i.Engine.createElement("span",null,e)," ","atualizaç"+(e>1?"ões":"ão"))}componentDidMount(){if(me.DEVICES[ge.Settings.get("DEVICE_GROUP","desktop")]<=me.DEVICES.smart){const e=()=>{const e=this._refs.node.parentElement
e&&this.setState({topIsVisible:Object(Q.getVisibility)(e).top})}
e(),X.PassiveScrollListener.on(e)}}}var we=i.Engine.createElement(Oe,null),Se=i.Engine.createElement(pe,null),Ie=i.Engine.createElement(ne,null)
class Ce extends h.SeenTimeTelemetry{constructor(e){super(e),this.sharedFeedData={reporter:new u.FeedReporter({area:c.DESKTOP_AREAS.LEFT})}}getChildContext(){return{root:this,areaId:"feed",sharedFeedData:this.sharedFeedData}}render(){const e=o()("bstn-fd","bstn-fd-csr",{"bstn-fd-recommended":a.Configs.get("isRecommended")})
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:"pages",checkInterval:1e3},i.Engine.createElement("div",{ref:Object(d.as)(this),className:e},we,Se,Ie))}componentDidMount(){this.cdmSeenTimeTelemetry(),a.Configs.set("feed_getSeenTime",this.getSeenTime.bind(this))}componentWillUnmount(){this.cwuSeenTimeTelemetry()}}let Te
n.d(t,"Feed",(function(){return Ae}))
const xe={}
class Ae{static getInstance(){return Te||(Te=new Ae(xe)),Te}constructor(e){e!==xe&&Object(r.warn)("Class Feed is a singleton and shouldn't be called directly."),this.virtualElement=i.Engine.createElement(Ce)}}},function(e,t,n){"use strict"
n.r(t)
var r=n(93),i=n.n(r),s=n(104),o=n.n(s),a=n(20),c=n(28),l=n(22),u=n(23),h=n(73),d=n(123),p=n.n(d),f=n(71),m=n(140),g=n(129),v=n(138),b=n(16),E=n.n(b),_=n(106),y=n.n(_),O=n(53),w=n(141),S=n(142),I=n(143),C=n(139),T=n(87),x=n(43),A=n(97),j=n(124),N=h.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},h.Engine.createElement("g",{fill:"none"},h.Engine.createElement("path",{d:"M6 6c1 0 2-1 2-2S7 2 6 2 4 3 4 4s1 2 2 2zm0 1c-1.3 0-4 .7-4 2v1h8V9c0-1.3-2.7-2-4-2z",fill:"#FFF"}),h.Engine.createElement("path",{d:"M0 0h12v12H0"})))
var R=h.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},h.Engine.createElement("g",{fill:"none"},h.Engine.createElement("path",{d:"M6 .2C2.8.2.2 2.8.2 6c0 3.2 2.6 5.8 5.8 5.8 3.2 0 5.8-2.6 5.8-5.8C11.8 2.8 9.2.2 6 .2zm0 10.5c-2.6 0-4.7-2-4.7-4.7 0-2.6 2-4.7 4.7-4.7 2.6 0 4.7 2 4.7 4.7 0 2.6-2 4.7-4.7 4.7z",fill:"#FFF"}),h.Engine.createElement("path",{d:"M-1-1h14v14H-1"}),h.Engine.createElement("path",{fill:"#FFF",d:"M6.3 3h-1v3.6l3.2 1.8.4-.7L6.2 6"})))
var P=h.Engine.createElement("div",{className:"text"},h.Engine.createElement(()=>R,null)," SIGA EM TEMPO REAL"),k=h.Engine.createElement(()=>N,null)
function L({spectators:e}){return h.Engine.createElement("div",{className:"label-tempo-real headline"},P,Object(j.insertIf)(e,()=>h.Engine.createElement("div",{className:"count"},k," ",e.toLocaleString("pt-br")," assistindo")))}var D=n(56),M=n(188),V=n(81)
class H extends V.BaseReporter{constructor(e){super(e),this.isLive=e.isLive,this.status=e.status}get contentStatus(){return this.status?this.status:this.isLive?"ao_vivo":void 0}get format(){return"destaque"}get size(){return f.POST_SIZES.LARGE}getPostPosition(){return this.data.index+1}}const F=Object(V.createPostReporter)(H)
var G=n(29),U=n(136),B=n(152),z=n(60),q=n(153),W=n(25),$=n(144),K=n(154),Z=n.n(K),J=n(161),Y=n(42),X=n(54),Q=n(195),ee=n(135)
function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ne=h.Engine.createElement("div",{className:"bastian-feed-show-temporeal-link"},"Siga em Tempo Real")
class re extends h.Engine.Component{render(){const{hasVideo:e,video:t,url:n,title:r,hasSummary:i,hasScoreFinished:s,summary:o,hasHighlights:a}=this.props,c=Object(W.get)(this.props,"match.highlights")||[],l={}
e&&t&&(l["data-video-id"]=t.id,l["data-short-url"]=n,l["data-link"]=n,l["data-title"]=r)
var u=h.Engine.createElement("span",{className:"bstn-hl-summary gui-color-primary gui-color-hover"},o)
return h.Engine.createElement("div",null,h.Engine.createElement(g.ElementViewTrigger,{on:"fitInScreen"},h.Engine.createElement("span",te({className:"bstn-hl-title gui-color-primary gui-color-hover gui-color-primary-bg-after",ref:Object(T.as)(this,"title")},l),r)),Object(j.insertIf)(i||s,()=>u,()=>Object(j.insertIf)(a,()=>h.Engine.createElement("div",{className:"highlights-bastian-feed"},c.slice(0,2).map((e,t)=>h.Engine.createElement(Q.Highlight,{key:t,content:e,headline:!0})),ne))))}componentDidMount(){this.props.hasVideo&&Object(ee.applyVideoLightbox)(this._refs.title)}}function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const se=({allowThumb:e})=>(t,n)=>{const{title:r,url:i}=t.content,s=Object(W.get)(t.content,"image.sizes.S.url"),o={}
return e&&s&&(o.thumb={url:s,rightsholder:Object(W.get)(t.content,"image.rightsHolder")}),h.Engine.createElement("li",{key:n,className:"bstn-hl-itemlist bstn-hl-relateditem"},h.Engine.createElement(oe,ie({title:r,url:i},o)))}
function oe({url:e,title:t,thumb:n}){const r=n&&n.url,i={}
return n&&n.rightsholder&&(i.alt=n.rightsholder,i.title=n.rightsholder),h.Engine.createElement("a",{className:"bstn-hl-link bstn-related",href:e},Object(j.insertIf)(r,()=>h.Engine.createElement("img",ie({className:"bstn-hl-relatedthumb",src:r},i))),h.Engine.createElement("span",{className:"bstn-hl-title gui-color-primary gui-color-hover bstn-related"},t))}var ae=n(145),ce=n.n(ae),le=n(9),ue=n.n(le),he=n(137),de=n(134),pe=h.Engine.createElement(he.VideoPlay,null)
class fe extends h.Engine.Component{render(){const{props:e}=this
if(e.video&&e.image){const{id:t,duration:n}=e.video,r=e.image.url
return h.Engine.createElement("div",{ref:Object(T.as)(this,"video"),className:"bstn-hl-video",title:e.title,"data-video-id":t,"data-short-url":e.url,"data-link":e.url,"data-title":e.title,"data-img":r},pe,Object(j.insertIf)(ue()(n),()=>h.Engine.createElement("div",{className:"bstn-hl-duration"},Object(de.abbrTime)(n))))}return null}componentDidMount(){ce()(this._refs,"video")&&(Object(ee.applyVideoLightbox)(this._refs.video),this._refs.video.addEventListener("click",e=>e.stopPropagation(),!1))}}var me=h.Engine.createElement(I.default,{device:"desktop"})
class ge extends h.Engine.Component{render(){return h.Engine.createElement("div",{ref:Object(T.as)(this,"video"),className:"bstn-hl-video"},me)}}function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var be=h.Engine.createElement(U.BadgeAoVivo,null),Ee=h.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-spaceritem"}),_e=h.Engine.createElement(ge,null)
class ye extends C.SeenTimeTelemetry{constructor(e){super(e),this.reportView=()=>{const e=this.getSeenTime()
this.lastReportedSeenTime!==e&&(this.lastReportedSeenTime=e,D.Horizon.report(z.PostViewHeadline,this.reporter))},this.reportClick=e=>{const t=Object(q.cloneJSON)(this.props)
t.bstn$source="headline",Object(X.triggerDomEvent)(O.ITEM_CLICK,document,e=>{e.data=t}),D.Horizon.report(z.PostClick,this.reporter),this.reportEvent(e),this.reportToRealtime()},this.getFeatures=E()(()=>{const e=this.props,{summary:t,status:n,video:r,chapeuLabel:i,imageSizes:s,imageUrl:o,videoKind:a,highlights:c}=this.getProps(),l="uber"===e.headlineVariation,u=Boolean(s||o),h=Boolean(r&&!l),d=Boolean(i),p=Boolean(Object(W.get)(e,"cobertura.isLive")||Object(J.isLiveVideo)(a)),f=Boolean("eventos-esportivos"===e.type&&e.match&&!l),m=f&&(t.length>0||"Encerrada"===n),g=Boolean(!h&&!Z()(e.aggregatedPosts)),v=Boolean(t&&(!d||!u||l)&&!h&&(!g||l)),b=Boolean(c&&c.length>0&&!l),E=Boolean(f&&!m),_=Boolean(E&&Object(W.get)(e,"content.showSpectators"))
return{hasPhoto:u,hasVideo:h,hasChapeu:d,isLive:p,hasRelated:g,hasScore:f,hasScoreFinished:m,hasSummary:v,isUber:l,isStories:Boolean("stories"===Object(W.get)(this.props,"type")),hasHighlights:b,hasLabelTempoReal:E,showSpectators:_}}),this.state={title:""},this.state.title=this.isMabEnabled()?"":Object(W.get)(e,"content.title")}render(){const e=this.props,t=this.getFeatures(),n=this.getClasses(t),r=Object(W.get)(e,"match")||{spectators:0},i=r.spectators,s=this.getRelateds(t),o=Object(W.get)(e,"content.chapeu.label")
let a=null,c=null,l=Object(W.get)(e,"content.url")
const u=Object(W.get)(e,"content.video.id")
t.hasVideo&&u&&(l="#v/"+u,l=""+G.Globals.location.origin+G.Globals.location.pathname+"#v/"+u),t.hasScore&&r.awayTeam&&r.homeTeam&&(a=r.awayTeam,c=r.homeTeam)
var d=h.Engine.createElement("span",{className:"bstn-hl-chapeu gui-subject gui-color-primary-bg-after"},o)
return h.Engine.createElement("div",{className:"bstn-hl-wrapper"},h.Engine.createElement("div",{ref:Object(T.as)(this),className:p()("bstn-hl type-"+e.type,n),onClick:this.reportClick},h.Engine.createElement("a",{className:"bstn-hl-link",href:l},Object(j.insertIf)(t.hasLabelTempoReal,()=>h.Engine.createElement(L,{spectators:t.showSpectators?i:0})),h.Engine.createElement("ul",{className:"bstn-hl-list"},Object(j.insertIf)(t.hasChapeu||t.isLive,()=>h.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-chapeuitem"},Object(j.insertIf)(t.isLive,()=>be,()=>Object(j.insertIf)(t.hasChapeu,()=>d)))),Ee,h.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton "},Object(j.insertIf)(t.hasVideo,()=>h.Engine.createElement(fe,this.props.content))),h.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton bstn-hl-video"},Object(j.insertIf)(t.isStories,()=>_e)),h.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-mainitem"},Object(j.insertIf)(a&&c,()=>h.Engine.createElement(S.Scoreboard,{headline:!0,away:a,home:c})),h.Engine.createElement(re,ve({},e.content,t,{title:this.state.title,match:r}))),Object(j.insertIf)(!t.isUber,()=>s.map(se({allowThumb:!1})))))),Object(j.insertIf)(t.isUber&&t.hasRelated,()=>h.Engine.createElement("ul",{className:"bstn-hl-uberrelateds",onClick:this.reportClick},s.map(se({allowThumb:!0})))))}componentWillMount(){const e=this.getFeatures(),t=new F({data:this.props,telemetry:this,isLive:e.isLive,status:e.hasScore&&String(this.getProps().status).toLowerCase()})
t.addFeatureChecks({foto:()=>e.hasPhoto&&!e.hasVideo,agregados:()=>e.hasRelated,resumo:()=>e.hasSummary,video:()=>e.hasVideo,placar:()=>e.hasScore,label_tr:()=>e.hasLabelTempoReal,espectadores:()=>e.showSpectators}),this.reporter=new w.ReporterCascadeAggregator(t,this.context.sharedHeadlineData.reporter)}async componentDidMount(){const e=this.getFeatures()
this.cdmSeenTimeTelemetry(),D.Horizon.on("collect-metrics",this.reportView)
const t=this._refs.node
t.style.setProperty("--bstn-hl-cover",this.state.backgroundImage),e.isStories&&(t.style.borderBottom="5px solid "+Object($.getCategoryColor)())
const n=Object(W.get)(this,"props.content.image")
if(!this.state.backgroundImage&&n&&t){const e=100
await Object(x.check)(()=>t.offsetHeight>e,{id:this.props.index})
const r=2,i=Object(A.choosePicture)(n,r,{height:t.offsetHeight,width:t.offsetWidth})
i&&this.setState({backgroundImage:'url("'+i+'")'})}this.isMabEnabled()&&this.installMab()}componentDidUpdate(){this._refs.node.style.setProperty("--bstn-hl-cover",this.state.backgroundImage)}componentWillUnmount(){D.Horizon.off("collect-metrics",this.reportView),this.cwuSeenTimeTelemetry()}isMabEnabled(){if(c.At.server)return!1
const e=Object(W.get)(this,"props.content.mab.experiment")
return e&&Object(B.isMabAvailiable)(e)}async installMab(){const e=Object(W.get)(this,"props.content.mab.experiment")
if(e)try{const t=await Object(B.requestMabExperiment)({experimentName:e})
this.setState({title:this.props.content.mab.metadata[t.arm]}),this.mabRewardHandler=()=>t.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(a.error)(t)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getClasses(e){return{"no-photo":!e.hasPhoto,"with-photo":e.hasPhoto,"with-video":e.hasVideo,"with-chapeu":e.hasChapeu,"with-summary":e.hasSummary,"with-related":e.hasRelated,"with-score":e.hasScore,"is-half-size":this.props.isHalfSize,"is-live":e.isLive}}getRelateds(e){return e.hasRelated?Object(W.get)(this.props,"aggregatedPosts"):[]}reportEvent(e){const t={origin:this.props.type,action:Oe(e)?"play":"clique",label:"headline",hasVideo:this.getFeatures().hasVideo,hasPhoto:this.getFeatures().hasPhoto,hasSummary:this.getFeatures().hasSummary,position:"posicao "+String(this.getItemPosition()).padStart(4,"0")}
Object(M.default)(t,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const e=this.props
let t='tipo desconhecido "'+Object(W.get)(e,"key")+'"'
const n=Object(W.get)(e,"content.url")
if(n)t=n
else{const n=Object(W.get)(e,"content.video.id")
n&&(t="video "+n)}Object(Y.reportToRealtime)("headlines",t)}getProps(){const{content:e}=this.props
return{summary:String(Object(W.get)(e,"summary")||"").trim(),status:Object(W.get)(this.props,"match.status")||"Encerrada",video:Object(W.get)(e,"video"),chapeuLabel:Object(W.get)(e,"chapeu.label"),imageSizes:Object(W.get)(e,"images.sizes"),imageUrl:String(Object(W.get)(e,"image.url")||"").trim(),videoKind:Object(W.get)(e,"video.kind"),highlights:Object(W.get)(this.props,"match.highlights")}}getItemPosition(){return this.props.index+1}}const Oe=e=>Boolean(we(e.srcElement,"bstn-hl-video")),we=(e,t)=>{for(const n of function*(e){yield e
for(;e&&(e=e.parentElement);)yield e}(e))if(Se(n,t))return n},Se=(e,t)=>y()(e)&&e.classList.contains(t)
function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class Ce extends h.Engine.Component{getChildContext(){return{sharedHeadlineData:{reporter:new v.FeedReporter({area:f.DESKTOP_AREAS.HEADLINE})}}}render(){const{items:e}=this.props,t=c.At.screen(c.LARGE_SCREEN)?u.Configs.get("headlineVariation"):""
return h.Engine.createElement(g.ElementViewTrigger,{on:"partial",chain:"headlines",checkInterval:1e3},h.Engine.createElement("div",{className:p()("bstn-hls","xlarge-22","xlarge-offset-1","theme","model-"+e.length,{["variation-"+t]:t}),ref:Te},h.Engine.createElement(m.ElementViewGroup,{id:"headlines",radius:2},e.map((n,r)=>h.Engine.createElement(ye,Ie({index:r,key:r,isHalfSize:3===e.length&&r>=1,headlineVariation:t},n))))))}}const Te=e=>{const t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
if(e&&t){const t=e.offsetHeight
let n;(n=function(e,t){if(e instanceof t)return e}(e.firstElementChild,HTMLDivElement))&&t>400?n.style.height=t+"px":setTimeout(()=>Te(e),100)}}
function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Ae=({items:e})=>h.Engine.createElement(g.ElementViewTrigger,{on:"partial",checkInterval:1e3},h.Engine.createElement("div",{className:"bstn-uhl xlarge-22 xlarge-offset-1 theme"},h.Engine.createElement(Ne,e[0])))
var je=h.Engine.createElement(U.BadgeAoVivo,null)
class Ne extends C.SeenTimeTelemetry{constructor(e){super(e),this.handleClick=e=>{if(this.reportClick(),!e.defaultPrevented){const e=this._refs.node.querySelector(".bstn-uhl-picture .bstn-uhl-link")
e&&(e.addEventListener("click",e=>{e.stopPropagation()},!1),setTimeout(()=>{e.click()},0))}},this.state={title:this.isMabEnabled()?"":Object(W.get)(e,"content.title")},this.features=Re(e)}render(){const e=this.props,t=this.features
return h.Engine.createElement("div",{className:p()("bstn-uber-hl type-"+e.type,Pe(t))},h.Engine.createElement("div",{className:"bstn-uhl-picture",ref:Object(T.as)(this),onClick:this.handleClick},h.Engine.createElement("div",{className:"bstn-uhl-overlay"},Object(j.insertIf)(t.hasHat||t.isLive,()=>h.Engine.createElement("div",{className:"bstn-uhl-hatslot"},Object(j.insertIf)(t.isLive,()=>je,()=>Object(j.insertIf)(t.hasHat,()=>h.Engine.createElement("span",{className:"bstn-uhl-hat"},Object(W.get)(e,"content.chapeu.label")))))),h.Engine.createElement("a",{className:"bstn-uhl-link",href:e.content.url},h.Engine.createElement(g.ElementViewTrigger,{on:"fitInScreen",tagName:"span"},h.Engine.createElement("span",{className:"bstn-uhl-title"},e.content.title))))),Object(j.insertIf)(t.hasSummary,()=>h.Engine.createElement("div",{className:"bstn-uhl-summary"},e.content.summary)),Object(j.insertIf)(t.hasRelated,()=>h.Engine.createElement("ul",{className:"bstn-uhl-relateds"},this.getRelateds().map((e,t)=>h.Engine.createElement(ke,xe({},e,{key:t}))))))}componentDidMount(){if(this.cdmSeenTimeTelemetry(),this.setBackground(),!this.state.backgroundImage&&this.features.hasPhoto){const e=Object(A.choosePicture)(Object(W.get)(this,"props.content.image"),1,{height:1,width:1})
e&&this.setState({backgroundImage:'url("'+e+'")'})}this.isMabEnabled()&&this.installMab()}componentDidUpdate(){this.setBackground()}componentWillUnmount(){this.cwuSeenTimeTelemetry()}setBackground(){this._refs.node.style.setProperty("--bstn-uhl-cover",this.state.backgroundImage)}isMabEnabled(){if(c.At.server)return!1
const e=Object(W.get)(this,"props.content.mab.experiment")
return Object(W.get)(this,"props.content.mab")&&Object(B.isMabAvailiable)(e)}async installMab(){const e=Object(W.get)(this,"props.content.mab.experiment")
if(e)try{const t=await Object(B.requestMabExperiment)({experimentName:e})
this.setState({title:this.props.content.mab.metadata[t.arm]}),this.mabRewardHandler=()=>t.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(a.error)(t)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getRelateds(){return this.features.hasRelated&&this.props.aggregatedPosts?this.props.aggregatedPosts:[]}reportClick(){const e=Object(q.cloneJSON)(this.props)
e.bstn$source="headline",Object(X.triggerDomEvent)(O.ITEM_CLICK,document,t=>{t.data=e}),this.reportEvent(),this.reportToRealtime()}reportEvent(){const e={origin:this.props.type,action:"clique",label:"headline",hasVideo:!1,hasPhoto:this.features.hasPhoto,hasSummary:this.features.hasSummary,position:"posicao 0001"}
Object(M.default)(e,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const e=this.props
let t='tipo desconhecido "'+Object(W.get)(e,"key")+'"'
const n=Object(W.get)(e,"content.url")
if(n)t=n
else{const n=Object(W.get)(e,"content.video.id")
n&&(t="video "+n)}Object(Y.reportToRealtime)("headlines",t)}}const Re=e=>{const{content:t}=e
return{hasHat:Boolean(Object(W.get)(t,"chapeu.label")),hasPhoto:Boolean(Object(W.get)(t,"images.sizes")||String(Object(W.get)(t,"image.url")||"").trim()),hasRelated:!Z()(e.aggregatedPosts),hasSummary:Boolean(String(Object(W.get)(t,"summary")||"").trim()),isLive:Object(W.get)(e,"cobertura.isLive")||Object(J.isLiveVideo)(Object(W.get)(t,"video.kind"))}},Pe=e=>({"with-hat":e.hasHat,"with-summary":e.hasSummary,"with-related":e.hasRelated,"is-live":e.isLive}),ke=e=>{const t=Object(W.get)(e.content,"image.sizes.S.url"),n=Object(W.get)(e.content,"image.rightsHolder"),r={}
return t&&n&&(r.alt=n,r.title=n),h.Engine.createElement("li",{className:"bstn-uhl-relateditem"},h.Engine.createElement("a",{className:"bstn-uhl-relatedlink",href:e.content.url},h.Engine.createElement("span",{className:"bstn-uhl-related gui-color-primary gui-color-hover"},e.content.title),Object(j.insertIf)(t,()=>h.Engine.createElement("span",{className:"bstn-uhl-relatedthumb",style:'background-image:url("'+String(t)+'")'},h.Engine.createElement("img",xe({className:"bstn-uhl-relatedimage",src:t},r))))))}
n.d(t,"Headlines",(function(){return Ve})),n.d(t,"getHeadlinesQuantity",(function(){return He}))
let Le,De=0
const Me={}
class Ve{static getInstance(){return Le||(Le=new Ve(Me)),Le}static getConsumed(){return De}constructor(e){e!==Me&&Object(a.warn)("Class Headlines is a singleton and shouldn't be called directly.")
const t=this.getPosts()
if(t.length>0){const e="uber"===u.Configs.get("headlineVariation")&&c.At.screen(c.SMALL_SCREEN)?Ae:Ce
this.virtualElement=h.Engine.createElement(e,{items:t})}}getPosts(){let e=He(u.Configs.get("forePosts",0))
const t=[]
if(e>0){const n=l.$Falkor.getInstance(),r=n.stream.subscribe({next(e){t.push(e),De+=1},error:a.error,complete(){}})
for(;e>0;)e--,n.request({preventFetch:!0})
r.unsubscribe(),u.Configs.decr("recommendationStart",De)}return t}}const He=e=>e=e>0?c.At.screen(c.SMALL_SCREEN)?Number("uber"===u.Configs.get("headlineVariation")):o()(...i()({INPUT:e,MIN:1,MAX:3})):0},function(e,t,n){"use strict"
n.r(t)
var r=n(16),i=n.n(r),s=n(106),o=n.n(s),a=n(75),c=n(20),l=n(28),u=n(30),h=n(29),d=n(53),p=n(191),f=n(73),m=n(55),g=n(25),v=n(178),b=n(54),E=n(179),_=n(193),y=n(183),O=n(184),w=n(92),S=n(71),I=n(140),C=n(129),T=n(138),x=n(196),A=n(168),j=n(139),N=n(87)
n(130)
let R
function P(e){const t=[...e],n=[[1,2],[Number.POSITIVE_INFINITY,3]]
if(h.Globals.document.querySelector(a.BS_HOME))for(const[r,i]of n)t.splice(r,0,{id:"banner_rm"+i,type:"advertise"})
return t}R=class extends j.SeenTimeTelemetry{constructor(){super(),this.state={items:P(this.getItems())},this.itemIndex=new A.ItemIndex}getChildContext(){return{root:this,areaId:"right-column",itemIndex:this.itemIndex,sharedFeedData:{reporter:new T.FeedReporter({area:S.DESKTOP_AREAS.RIGHT})}}}render(){return this.itemIndex.clear(),f.Engine.createElement(C.ElementViewTrigger,{on:"partial",chain:"rightColumn",checkInterval:1e3},f.Engine.createElement("div",{ref:Object(N.as)(this),id:"bstn-rtcl"},f.Engine.createElement(I.ElementViewGroup,{id:"rightColumn",radius:2},this.state.items.map((e,t)=>f.Engine.createElement(x.Item,{key:t,data:e,index:t+1})))))}componentDidMount(){this._refs.node.addEventListener("element-view",e=>e.stopPropagation())}getItems(){const e=[],t=w.$DistributedComponents.getInstance(),n=t.stream.subscribe({next:t=>{e.push(t)},error:()=>{},complete:()=>{}})
for(;!t.isEmpty();)t.request()
return n.unsubscribe(),t.stream.addListener({next:e=>this.setState({items:[...this.state.items,e]}),error:c.error,complete:()=>{}}),e}}
const k=R
let L
const D={}
class M{static getInstance(){return L||(L=new M(D)),L}constructor(e){e!==D&&Object(c.warn)("Class RightColumn is a singleton and shouldn't be called directly."),this.virtualElement=f.Engine.createElement(k)}}var V=n(23),H=n(22),F=n(15)
function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const U=e=>{let t=Object(g.get)(e,"content.url")
return t||(Object(g.get)(e,"content.video.id")?t=e.content.video.id:e.id&&(t=e.id),t)},B=({items:e})=>e.filter((e,t,n)=>t===n.findIndex(t=>U(t)===U(e))),z=e=>{const{embedData:t,recommendationFirstFetch:n,displayedContentURLs:r}=e
r&&F.PostIndex.loadInitialURLs(r),V.Configs.absorbConfigs(t)
const{items:i,rest:s}=function(e){e.items=B(e)
const t=V.Configs.get("recommendationStart")
let n=[],r=e.items
return t>0&&(n=e.items.slice(0,t-1),r=e.items.slice(t-1)),{items:n,rest:r}}(t),o=((e,t)=>()=>{Array.isArray(t)&&t.length>0&&e.store(t)})(H.$Falkor.getInstance(G({},t,{items:i})),s)
if(w.$DistributedComponents.getInstance(t),n){V.Configs.set("recommendationTag",n.tag)
p.$Recommendation.getInstance(n).stream.addListener({next:()=>{},error:()=>{},complete:o})}else o()}
n.d(t,"moveForePostsUp",(function(){return Z})),n.d(t,"setupPostABs",(function(){return ne})),n.d(t,"launch",(function(){return re}))
const q=/[#?].*$/,W=/^https?:\/\//,$=h.Globals.location.href.replace(q,"").replace(W,""),K=e=>{let t=e.items.length
for(;t--;){String(Object(g.get)(e.items[t],"content.url")).trim().replace(W,"").replace(q,"")===$&&e.items.splice(t,1)}},Z=e=>{const t=Object(g.get)(e,"config.forePosts")||0
if(l.At.largeScreen&&t>1){let n=t-1,r=1
const i=Object(g.get)(e,"forePosts")
if(i)for(let t=0;t<i.length&&n>0;t++)e.items.splice(r,0,i[t]),r+=1,U(i[t])!==U(e.items[0])&&(n-=1)}},J=(e,t)=>{Object(b.triggerDomEvent)(d.LAUNCH_FAILED,h.Globals.document,t=>{t.component=e})
const n=['Impossible to initialize Bastian "'+e+'".',t]
t.stack&&n.push(t.stack),Object(c.error)(...n)},Y=()=>{const e='There is no such placeholder with selector "',t=[[a.HEADLINES_PLACEHOLDER,"headlines",()=>Object(c.info)(""+e+a.HEADLINES_PLACEHOLDER+'"')],[a.PLACEHOLDER,"feed",()=>J("Feed",""+e+a.PLACEHOLDER+'"')]]
l.At.largeScreen&&t.push([a.AREATEMPLATE_DIREITA,"rightColumn",()=>Object(c.info)(""+e+a.AREATEMPLATE_DIREITA+'"')])
const n={}
return t.forEach(([e,t,r])=>{const i=(e=>h.Globals.document.querySelector(e))(e)
i?n[t]=i:r()}),n},X=h.Globals.document,{showSLBMeio:Q=!1}=window,ee=e=>X.querySelector(e),te=async()=>{await Object(v.isCustomLazyAvailable)()&&h.Globals.bannerLazyLoading("banner_slb_meio")},ne=async()=>{const e={device:l.At.smallScreen?"mobile":"web",tenant:u.Settings.get("PORTAL")},t={postVideo:{name:"feed-"+e.tenant+"-post-video-v1",tenants:[],globalsName:"postVideoAB"},postVideoFull:{name:"feed-post-video-unico-v2",tenants:["ge"],devices:["mobile"],globalsName:"postVideoFull"},postVideoFullG1:{name:"feed-post-video-unico-g1-v2",tenants:["g1"],devices:["mobile"],globalsName:"postVideoFull"},postVideoPreviewAB:{name:"feed-"+e.tenant+"-video-preview-v1",tenants:["g1","ge","gshow","dev-beta"],globalsName:"postVideoPreviewAB",run:()=>Object(_.hasVideoPreviewSupport)()},gptNativeLazyLoad:{name:"feed-redeglobo-lazyload-gpt-v2",tenants:["redeglobo"],globalsName:"adsLazyLoad"}},n=t=>(!t.devices||t.devices.includes(e.device))&&(!t.run||t.run())&&(!t.tenants||t.tenants.includes(e.tenant)),r=async e=>{let n
try{n=await i.choose(e)}catch(s){n=null}if(!n||n.experiment!==e)return Object(c.warn)("[feed::chooseExperiment] - FAIL choose "+e),!1
const r=(e=>{const n=Object.keys(t).find(n=>t[n].name===e)
return n?t[n]:void 0})(n.experiment)
return h.Globals[r.globalsName]=n,r}
if(!Object.keys(t).find(e=>n(t[e])))return!1
const i=await Object(m.getClient)()
i.options().skipImpression()
const s=Object.keys(t).map(async e=>{const i=t[e]
n(i)&&await r(i.name)})
return await Promise.all(s),!0},re=i()(e=>{(e=>{const{launchExperiments:t}=e
if(t)for(const n in t)m.GloboAB.save(t[n])})(e),(e=>{const{recommendationFirstFetch:t,embedData:n}=e
t&&(t.items=t.items.map(p.prepare),K(t)),n&&(Z(n),K(n))})(e),z(e)
const t=(e=>{const t="bstn-rtcl-placeholder"
if("rightColumn"in e&&null===X.getElementById(t)){const n=X.createElement("div")
n.id=t
const r=e.rightColumn
o()(r)&&(r.firstElementChild?r.insertBefore(n,r.firstElementChild):r.appendChild(n)),e.rightColumn=n}return e})(Y()),n=function(e){const t={}
if(e&&e.headlines){const e=O.Headlines.getInstance()
O.Headlines.getConsumed()>0&&e.virtualElement&&(t.headlines=e.virtualElement)}return y.Feed.getInstance().virtualElement&&(t.feed=y.Feed.getInstance().virtualElement),M.getInstance().virtualElement&&(t.rightColumn=M.getInstance().virtualElement),t}(t)
ne().finally(()=>((e,t)=>{for(const r in e){const i=e[r],s=t[r]
if(i&&o()(s))try{s.innerHTML="",f.Engine.render(i,s)}catch(n){J(r,n)}}})(n,t)),Object(E.setupVideoPreviewViewportObserver)(),(e=>{const t=ee(a.BANNER_SLB_MEIO),n=ee(a.SHOWTIME_INITIALIZED)
if(l.At.largeScreen&&!t&&(e||n||Q)){const e=ee(a.AREATEMPLATE_ESQUERDA)
if(e){const t=e.parentNode,n=X.createElement("div")
n.setAttribute("class","row show-for-medium-up"),n.innerHTML='<div class="column medium-24 large-24 large-offset-0 xlarge-22 xlarge-offset-1"><div class="publicidade publicidade-banner_slb_meio"><div id="banner_slb_meio"></div></div></div>',t.parentNode.insertBefore(n,t),te()}}})(n.headlines)})},function(e,t,n){"use strict"
n.r(t)
var r=n(16),i=n.n(r),s=n(106),o=n.n(s),a=n(123),c=n.n(a),l=n(20),u=n(114),h=n(28),d=n(132),p=n(73),f=n(29),m=n(71),g=n(30),v=n(87),b=n(1),E=n.n(b),_=n(6),y=n.n(_),O=n(169),w=n.n(O)
const S={SSR_HEADLINES:!0,AB_SUMMARY_VISIBILITY:null,FORCE_STICKY:!1}
function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(e=>{if(y()(e)&&!w()(e))for(const t of Object.keys(S))t in e&&(S[t]=e[t])})((e=>{if(E()(e)&&e.length>0)try{const t=decodeURIComponent(escape(atob(e)))
return JSON.parse(t)}catch(t){Object(l.error)(t)}})((()=>{const e=f.Globals.location.hash
if(e.includes("bstnflags=")){const t=e.indexOf("bstnflags=")+"bstnflags=".length,n=e.indexOf("&",t),r=[t]
n>=0&&r.push(n)
return e.slice(...r)}})()))
const C=e=>{let t=null
e.experimentName&&f.Globals&&f.Globals[e.experimentName]&&(t=f.Globals[e.experimentName])
return e.render({convert:()=>{t&&t.conversion&&t.conversion()},imprint:()=>{t&&t.impression&&t.impression()},getAlternative:()=>t?t.alternative:null})}
var T=n(178),x=n(55)
class A{constructor(e){this._experimentName=e,this.experiment=null}async init(){if(!this._experimentName)throw new Error
const e=(await Object(x.getClient)()).mab()
try{this.experiment=await e.choose(this._experimentName)}catch(t){}}increment(){this.experiment&&this.experiment.increment()}reward(){this.experiment&&this.experiment.reward()}getArm(){return this.experiment?this.experiment.arm:null}getAlternative(){return this.experiment?this.experiment.alternative:null}getAbAlternative(){return this.experiment?this.experiment.abAlternative:null}}n.d(t,"isRelativeWidth",(function(){return D}))
class j extends p.Engine.Component{constructor(e){super(e),this.renderAds=e=>this.lazyGPTNative?p.Engine.createElement("div",{className:e,ref:Object(v.as)(this,"placeholder")},p.Engine.createElement("div",{className:"bstn-ad-rail"},p.Engine.createElement("div",{ref:Object(v.as)(this)}))):p.Engine.createElement(u.PreemptVisibility,{onNearToBeVisible:this.triggerBanner,threshold:this.state.threshold,awaitScroll:!0},p.Engine.createElement("div",{className:e,ref:Object(v.as)(this,"placeholder")},p.Engine.createElement("div",{className:"bstn-ad-rail"},p.Engine.createElement("div",{ref:Object(v.as)(this)})))),this.sendABImpression=Object(T.filterEvents)(this,async()=>{this.props.convert()}),this.checkMABImpression=Object(T.filterEvents)(this,async()=>{U(this.props.id)&&this.mab.reward(),this.props.convert(),this.configureTimeoutBannerStick()}),this.configureTimeoutBannerStick=()=>{this.isBannerStickable()&&setTimeout(()=>{!1===Object(d.getVisibility)(this._refs.placeholder).isVisible&&this._refs.node.classList.remove("bstn-ad-visible"),setTimeout(()=>{this.setState({isSticky:!1})},1e3)},3e3)},this.triggerBanner=async()=>{if(this._refs.node){await Object(T.isCustomLazyAvailable)()&&this.initBanner()}},this.setAsLoaded=Object(T.filterEvents)(this,e=>{if("banner_mobile1"===this.props.id&&this._refs.node.classList.add("bstn-ad-visible"),this.isBannerStickable()){const e=50===this.adHeight?50:100
this.setState({isLoaded:!0,isSticky:!0,stickySize:"bstn-sticky-"+e+"px"})}else this.setState({isLoaded:!0})
this.props.imprint()}),this.onSlotRenderEnded=Object(T.filterEvents)(this,e=>{this.adHeight=e.size?e.size[1]:0,k()||M(this._refs.container,D(this._refs.node))}),this.isBannerStickable=()=>h.At.smallScreen&&"banner_mobile1"===this.props.id&&(S.FORCE_STICKY||this.adHeight>=50&&this.adHeight<=100),this.lazyGPTNative=this.props.getAlternative&&"lazyload-nativo-google"===this.props.getAlternative(),this.state={isLoaded:!1,isSticky:!1,stickySize:"",threshold:u.DEFAULT_THRESHOLD}}render(){const e=c()(this.state.stickySize,{"bstn-ad-sticky":this.state.isSticky})
return p.Engine.createElement("div",{className:"bstn-feed-ad",ref:Object(v.as)(this,"container")}," ",this.renderAds(e)," ")}async componentDidMount(){const e=V(this.props.id)
this.mab=new A(e),"right-column"!==this.context.areaId&&await this.mab.init(),this.setState({threshold:this.mab.getArm()||u.DEFAULT_THRESHOLD})
if(await Object(T.isGooglePubadsAvailable)()){const e=Object(T.getPubads)()
e.addEventListener("slotRenderEnded",this.onSlotRenderEnded),e.addEventListener("slotOnload",this.setAsLoaded),this.lazyGPTNative?(await this.triggerBanner(),e.addEventListener("impressionViewable",this.sendABImpression)):e.addEventListener("impressionViewable",this.checkMABImpression)}}async initBanner(){const e=this.props
try{let t={abAlternative:"control",feed:1,gptLazyload:!1}
this.mab.increment(),t.abAlternative=this.mab.getAlternative(),this.lazyGPTNative&&(t.gptLazyload=!0),Object(T.defineBanner)(this._refs.node,e.id,t)}catch(t){Object(l.warn)('Soft error: could not create banner "'+e.id+'"'),Object(l.error)(t)}}}j.FACE="publicidade",j.SIZE=m.POST_SIZES.MEDIUM
const N=(R="adsLazyLoad",P=j,e=>p.Engine.createElement(C,{experimentName:R,render:({convert:t,imprint:n,getAlternative:r})=>p.Engine.createElement(P,I({},e,{convert:t,imprint:n,getAlternative:r}))}))
var R,P
N.FACE=j.FACE,N.SIZE=j.SIZE
t.default=N
const k=i()(()=>f.Globals.document.getElementsByClassName("areatemplate-direita").length>0),L=/^([^0]\d*%|auto)$/,D=e=>{const t=e.querySelector("iframe"),n=e.parentElement,r=e=>L.test(e.width)||L.test(e.minWidth)
return!!t&&(o()(n)?r(t.style)||r(n.style):r(t.style))},M=(e,t)=>{e&&(t?e.classList.add("bstn-fd-elastic-banner"):e.classList.remove("bstn-fd-elastic-banner"))},V=e=>"bastian-advwblt-r5:"+g.Settings.get("PORTAL")+":"+(h.At.smallScreen?"mobile":"desktop")+":"+Y+":"+(G(e)||""),H={banner_mobile1:"mobile1",banner_feed_especial:"ep",banner_rm2_feed:"banner2",banner_rm3_feed:"banner3"},F={banner_feed__:"dinamico",banner_middle_feed__:"middle"},G=e=>{const t=Object.keys(F).find(t=>e.startsWith(t))
return t?F[t]:H[e]},U=e=>Boolean(G(e)),B=e=>f.Globals.document.body.classList.contains(e),z=B("bs-home"),q=B("multicontent"),W=B("poll-container"),$=B("cb-live"),K=B("bs-tabela"),Z="/"===f.Globals.location.pathname,J={homeprincipal:z&&Z,home:z&&!Z,multicontent:q,votacao:W,cobertura:$,tabela:K},Y=(Object.entries(J).filter(([,e])=>e)[0]||[""])[0];["g1","ge","gshow"].some(e=>g.Settings.get("PORTAL")===e)},function(e,t,n){"use strict"
n.r(t)
var r=n(10),i=n.n(r),s=n(5),o=n.n(s),a=n(73),c=n(71),l=a.Engine.createElement("div",null)
class u extends a.Engine.Component{componentDidMount(){o()(this.props.onPlaceholderMount)&&this.props.onPlaceholderMount(this.context.item)}render(){return l}}u.FACE="placeholder",u.SIZE=c.POST_SIZES.MEDIUM
var h=n(20),d=n(75),p=n(53),f=n(28),m=n(59),g=n(29),v=n(76),b=n(87)
let E
const _=()=>["interactive","complete"].includes(g.Globals.document.readyState),y=new Promise(e=>{_()?e():document.addEventListener("readystatechange",()=>{_()&&e()})})
E=()=>y
const O=E
var w=n(25),S=n(51),I=n(54)
n.d(t,"exposable",(function(){return N})),n.d(t,"$Cards",(function(){return k}))
class C extends a.Engine.Component{answerInvitation(){return!0}shouldComponentUpdate(){return!1}componentDidMount(){this.customComponentDidMount&&Object(S.safeCall)(this.customComponentDidMount,this)
const e=Object(w.get)(this,"_refs.node.firstElementChild.firstElementChild")
e&&Object(I.triggerDomEvent)(p.CARD_RENDERED,e),T.upgrade(this.context.sharedItemData,{face:"card",size:c.POST_SIZES.MEDIUM})}render(){return null}}class T extends v.ItemReporter{get postId(){return this.itemReference._refs.item.textContent.split("\n")[0].trim().toLowerCase()}}function x(e){e.componentDidMount&&(e.customComponentDidMount=e.componentDidMount,delete e.componentDidMount)
class t extends C{}return Object.assign(t.prototype,e),e.klass=t,e}function A(e){return function(){return a.Engine.createElement("div",{ref:Object(b.as)(this),dangerouslySetInnerHTML:{__html:e}})}}function j(e){return e.parentNode&&e.parentNode.removeChild&&e.parentNode.removeChild(e),x({rawHTML:e.outerHTML,render:A(e.outerHTML)})}const N={BaseCard:C,create:x,rawHTMLRender:A,embededHTMLCardFactory:j,defaultCardFactory:j}
let R
const P={}
class k{static getInstance(){return R||(R=new k(P)),R}constructor(e){this.buffer=[],this.placeholders=[],this.emitter=new m.EventEmitter,this.pageScanned=!1,e!==P&&Object(h.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=i.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}}),f.At.largeScreen||this.performCollect()}async performCollect(){await O(),this.collect()}collect(){const e=Array.from(g.Globals.document.querySelectorAll(d.CARD)).map(e=>Object(w.get)(e,"firstElementChild.cardComponent")||j(e))
e.slice().forEach(t=>{const n=this.placeholders.shift()
if(n&&n.placeInfo){const t=this.doInvitations(e,n.placeInfo)
if(t)return void this.assignCardToPlaceholder(n,t)}this.buffer.push(t)}),this.pageScanned=!0}doInvitations(e,t){let n,r=!1
const i=[]
for(;!1===r&&(n=e.shift());){try{r=Object(w.get)(n,"klass.prototype.answerInvitation")(t)}catch(s){Object(h.warn)("Soft error: failed to invite card",n),Object(h.error)(s)}!1===r&&i.push(n)}if(e.push(...i),!0===r)return n}assignCardToPlaceholder(e,t){e.card=t,e.klass=t.klass,null!==e.item&&e.item.forceUpdate()}request(e){if(!f.At.smallScreen||!this.listener)return!1
{const t=this.listener,n={id:"card-"+String(Math.random()).substr(2,6),type:"card",card:null,item:null,klass:u,placeInfo:e,onPlaceholderMount:e=>{n.item=e},source:k.staticName},r=this.doInvitations(this.buffer,e)
if(!r&&this.pageScanned)return!1
r?this.assignCardToPlaceholder(n,r):this.pageScanned||this.placeholders.push(n),t.next(n)}}}k.staticName="$Cards"},function(e,t,n){"use strict"
n.r(t)
var r=n(5),i=n.n(r),s=n(20),o=n(29),a=n(43),c=n(25)
let l
const u=["_trackEvent","feed"]
let h=[]
l=e=>{h.push(u.slice().concat(e))},(async()=>{await Object(a.availabilityOf)("_gaq",()=>[o.Globals.GoogleAnalyticsObject,"_gaq.push","ga"].every(d),"30s"),o.Globals._gaq&&i()(o.Globals._gaq.push)&&(h.forEach(e=>o.Globals._gaq.push(...e)),h=o.Globals._gaq)})()
const d=e=>i()(Object(c.get)(o.Globals,String(e))),p=l
var f=n(1),m=n.n(f),g=n(57),v=n(58),b=n.n(v),E=n(10),_=n.n(E),y=n(59),O=n(30),w=n(23)
let S,I=null
class C extends y.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==w.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){o.Globals.location.hostname.includes(".qa.")&&g.Settings.useQAConfiguration()
const e=O.Settings.get("PORTAL"),t=O.Settings.get("DEVICE_GROUP")
m()(e)&&m()(t)?I=new g.HorizonClient(e.toLowerCase(),t.toLowerCase(),"feed"):Object(s.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const e=_.a.periodic(1e4).filter(()=>"visible"===o.Globals.document.visibilityState),t=_.a.periodic(6e4)
_.a.merge(e,t).compose(b()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report([e,t]){const n={id:"common-event",version:"0.1",contentType:"common",properties:{eventCategory:"feed",eventAction:e,eventLabel:t}}
I&&I.send(n)}}S=new C
const T=S,x=(e,t)=>t?"com video":e?"com foto":"sem midia"
t.default=(e,t,n)=>{const r={GA:p,CommonEvents:T.report}
let i
i=n&&n.generateLabel?(({action:e,label:t,hasVideo:n,hasPhoto:r,hasSummary:i,position:s})=>e&&t&&s?[e,t,x(r,n),(i?"com":"sem")+" resumo",s].join(" | "):null)(e):e.label
const{origin:s}=e
s&&null!==i&&t.forEach(e=>r[e]([s,i]))}},function(e,t,n){"use strict"
n.r(t)
var r=n(106),i=n.n(r),s=n(19),o=n.n(s),a=n(109),c=n(20),l=n(73),u=n(29),h=n(110),d=n(192),p=n(122),f=n(23),m=n(124)
const g=e=>l.Engine.createElement("div",{className:"feed-post-metadata"},Object(m.insertIf)(!1===f.Configs.get("disableDateTime"),()=>e.date),e.section)
var v=n(125),b=n(126),E=n(127),_=n(128),y=n(133),O=n(137)
function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let S
function I(e,t={}){const n=(S&&i()(S)||(S=u.Globals.document.createElement("div")),S.innerHTML="",S)
if(n.innerHTML=Object(a.default)(l.Engine.createElement(e,t)),i()(n.firstChild))return n.removeChild(n.firstChild)}n.d(t,"Relateds",(function(){return C})),n.d(t,"Relacionados",(function(){return T})),n.d(t,"Cover",(function(){return x})),n.d(t,"Foto",(function(){return A})),n.d(t,"Datetime",(function(){return j})),n.d(t,"Datahora",(function(){return N})),n.d(t,"Header",(function(){return R})),n.d(t,"Chapeu",(function(){return P})),n.d(t,"Metadata",(function(){return k})),n.d(t,"Metadados",(function(){return L})),n.d(t,"Section",(function(){return D})),n.d(t,"Secao",(function(){return M})),n.d(t,"Summary",(function(){return V})),n.d(t,"Sumario",(function(){return H})),n.d(t,"Title",(function(){return F})),n.d(t,"Titulo",(function(){return G})),n.d(t,"Video",(function(){return U})),n.d(t,"PlayIcon",(function(){return B})),n.d(t,"IconePlay",(function(){return z}))
const C=({showThumbs:e=!1,showDate:t=!0,items:n})=>{const r={}
return t&&(r.dateFactory=({age:e})=>e?l.Engine.createElement(d.Datetime,{ageInSeconds:e}):null),I(()=>l.Engine.createElement(v.Relateds,w({showThumbs:e,items:n},r)))},T=C,x=e=>{const{imagesCollection:t,alt:n}=e
return I(h.Cover,{alt:n,images:t})},A=x,j=({ageInSeconds:e,time:t})=>(!e&&t&&(e=t,Object(c.warn)('Use of "time" attribute is deprecated on "toolkit.ui.Datetime". Use "ageInSeconds" instead.')),I(d.Datetime,{ageInSeconds:e})),N=j,R=e=>I(p.Header,{content:{chapeu:{label:e.label}}}),P=R,k=(...e)=>{const t=I(g)
if(t)return o()(e).forEach(e=>t.appendChild(e)),t},L=k,D=({text:e})=>I(b.Section,{text:e}),M=D,V=({text:e})=>I(E.Summary,{text:e}),H=V,F=({text:e})=>I(_.Title,{text:e}),G=F,U=e=>{const{alt:t,image:n,url:r}=e,i=e.video
return I(y.Video,{title:t,image:n,video:i,url:r})},B=()=>I(O.VideoPlay),z=B},function(e,t,n){"use strict"
n.r(t)
var r=n(77),i=n.n(r),s=n(5),o=n.n(s),a=n(10),c=n.n(a),l=n(20),u=n(23),h=n(79),d=n(29),p=n(15),f=n(59)
let m
m=class extends f.EventEmitter{constructor(e,t){super()
try{const n=new d.Globals.PushStream({host:e,port:80,longPollingInterval:6e4,reconnectOnChannelUnavailableInterval:6e4,modes:"websocket|eventsource|stream|longpolling"})
n.onmessage=({method:e,resourceId:t,resource:n})=>{this.trigger(e,{resourceId:t,resource:n})},n.removeAllChannels(),n.addChannel(t),n.connect(),this.pushStream=n}catch(n){Object(l.error)(n)}}}
const g=m
var v=n(30),b=n(43),E=n(80)
function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let y
n.d(t,"$PushStream",(function(){return w}))
const O={}
class w{static getInstance(){return y||(y=new w(O)),y}constructor(e){this.buffer=[],this.initPushStreamClient=()=>{const e=new g(v.Settings.get("PUSHSTREAM_HOST"),"p.bastian-posts-"+u.Configs.get("feedId"))
e.on("create",e=>{if(e){const{resourceId:t,resource:n}=e
n.key=n.id||t,n.arrived=Object(E.now)(),n.source=w.staticName,p.PostIndex.has(n)||(p.PostIndex.register(n),this.buffer.push(n),this.counterListener&&this.counterListener.next(this.buffer.length))}}),e.on("error",()=>{Object(l.error)("Couldn't connect Bastian on PushStream channel")}),e.on("disconnect",()=>{Object(l.warn)("Disconnected from the PushStream channel")})},e!==O&&Object(l.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=c.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}}),this.counterStream=c.a.create({start:e=>{this.counterListener=e},stop:()=>{this.counterListener=null}})
const t=h.DEVICES[v.Settings.get("DEVICE_GROUP","desktop")]
v.Settings.has("PUSHSTREAM_HOST")&&t<=h.DEVICES.smart&&i()(async()=>{const e=()=>o()(d.Globals.PushStream)
await Object(b.availabilityOf)("PushStream client",e,"20s"),e()&&this.initPushStreamClient()},1e4)}request(){const e=this.buffer
if(this.listener&&e.length>0){const t=this.listener,n=Object(E.now)()
e.map(e=>e.arrived?_({},e,{age:parseInt((n-e.arrived)/1e3)}):e),t.next(e.splice(0,e.length)),this.counterListener&&this.counterListener.next(0)}}}w.staticName="$PushStream"},function(e,t,n){"use strict"
n.r(t)
var r=n(93),i=n.n(r),s=n(1),o=n.n(s),a=n(9),c=n.n(a),l=n(20),u=n(23),h=n(29),d=n(30),p=n(40),f=n(16),m=n.n(f),g=n(80)
let v
const b=m()(()=>h.Globals.document.getElementsByTagName("head")[0]),E=e=>b().removeChild(e)
function _(e,t){try{delete h.Globals[e]}catch(n){h.Globals[e]=t}}v=({url:e,_timeout:t,_callbackName:n})=>{let r
const i=t||1e4,s=n||"bastian_jsonp_"+Object(g.now)()
return new Promise((t,n)=>{const o=h.Globals.document.createElement("script")
h.Globals[s]=e=>{setTimeout(()=>{t(e)},0),r&&clearTimeout(r),E(o),_(s)},e+=-1===e.indexOf("?")?"?":"&",o.setAttribute("src",e+"callback="+s),b().appendChild(o),r=setTimeout(()=>{!function(e,t){h.Globals[e]=()=>{Object(l.warn)('"'+e+'" was invoked by "'+t+'", however the request time were out. Response discarted.'),_(e)}}(s,e),E(o),n(new Error("JSONP request to "+e+" timed out"))},i)})}
const y=v
var O=n(8)
let w
n.d(t,"prepare",(function(){return x})),n.d(t,"$Recommendation",(function(){return A}))
const S={},I={S:"540x304_top_smart",M:"810x456_top_smart",L:"1080x608_top_smart"},C=({tag:e})=>{o()(e)&&u.Configs.set("recommendationTag",e)},T=/#.*$/,x=e=>(Object(p.has)(e,"content.url")&&(e.key=e.content.url.replace(T,"")),e.source="$Recommendation",e)
class A extends O.$OnDemandSource{static getInstance(e){if(e&&!w&&(w=new A(e,S)),w)return w
throw new Error("Couldn't return a $Recommendation instance")}constructor(e,t){t!==S&&Object(l.warn)("Class $Recommendation is a singleton and shouldn't be called directly."),super(e.items),this.receivedZeroItems=j(e.items),this.nextFetch=2,this.nextPage=2,C(e)}whenToFetch(){return 0===this.buffer.length}static buildRequestUrl(e){const t=-1!==["smart","feature"].indexOf(d.Settings.get("DEVICE_GROUP","desktop")),n=d.Settings.get("RECOMMENDATION.URL",d.Settings.get("RECOMMENDATION_URL"))||"",r=(u.Configs.get("recommendationContentId")||"feed")+(t?"-smart":""),s=/client_id=/.test(n)?"&content_id="+r:"/"+r+"?type=bastian",o=i()(I).join(",").replace(/_/g,"/"),a=h.Globals.location.hash.match(/(?:^#|&)alternative=([^&]+)/)
return""+n+s+"&page="+e+"&limit=10&photo_size="+o+(a?"&alternative="+a[1]:"")}howToFetch(){const e=this.nextFetch
if(c()(e))return y({url:A.buildRequestUrl(e),timeout:8e3}).then(this.unlock).then(e=>{this.setNextFetch(this.nextFetch+1),C(e),Array.isArray(e)?this.saveAndResumeStream(e.map(x),e=>{this.receivedZeroItems=j(e)}):this.receivedZeroItems=!0}).catch(e=>{u.Configs.unset("recommendationTag"),this.listener&&this.listener.error(e)})}whenToComplete(){return this.receivedZeroItems}}A.staticName="$Recommendation"
const j=e=>0===e.length},function(e,t,n){"use strict"
n.r(t)
var r=n(73)
const i=86400,s=365*i,o=[[60,"Agora",1],[90,"Há 1 minuto",1],[3600,"minutos",60],[5400,"Há 1 hora",1],[i,"horas",3600],[129600,"Ontem",1],[7*i,"dias",i],[907200,"Há 1 semana",1],[2628e3,"semanas",604800],[3942e3,"Há 1 mês",1],[s,"meses",2628e3],[1.5*s,"Há 1 ano",1],[Number.POSITIVE_INFINITY,"anos",s]]
function a(e){if(!e.publication&&!e.ageInSeconds)return null
if(e.isRecommended)return null
return r.Engine.createElement("span",{className:"feed-post-datetime"},(()=>{if(e.publication){const t={hour:"numeric",minute:"numeric"}
return new Date(e.publication).toLocaleDateString("pt-BR",t)}return function(e){if(void 0===e)return""
for(const[t,n,r]of o)if(e<t)return 1===r?n:"Há "+Math.round(e/r)+" "+n
return""}(e.ageInSeconds)})())}n.d(t,"Datetime",(function(){return a}))},function(e,t,n){"use strict"
n.r(t)
var r=n(28),i=n(180),s=n(29)
let o,a
a=()=>!!navigator||!!navigator.connection,o=()=>{const e=s.Globals.navigator
if(!e||!e.connection)return!1
const{connection:t}=e
return t.rtt<=200&&!t.saveData&&!["slow-2g","2g","3g"].includes(t.effectiveType)},n.d(t,"hasVideoPreviewSupport",(function(){return c}))
const c=()=>o()&&(Object(i.hasIntersectionObserverSupport)()||!r.At.smallScreen)},function(e,t,n){"use strict"
n.r(t)
var r,i,s,o=n(74),a=[],c=o.options.__r,l=o.options.diffed,u=o.options.__c,h=o.options.unmount
function d(e){o.options.__h&&o.options.__h(i)
var t=i.__H||(i.__H={__:[],__h:[]})
return e>=t.__.length&&t.__.push({}),t.__[e]}function p(e,t){var n=d(r++)
return v(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function f(){a.some((function(e){if(e.__P)try{e.__H.__h.forEach(m),e.__H.__h.forEach(g),e.__H.__h=[]}catch(t){return o.options.__e(t,e.__v),!0}})),a=[]}function m(e){e.t&&e.t()}function g(e){var t=e.__()
"function"==typeof t&&(e.t=t)}function v(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}o.options.__r=function(e){c&&c(e),r=0,(i=e.__c).__H&&(i.__H.__h.forEach(m),i.__H.__h.forEach(g),i.__H.__h=[])},o.options.diffed=function(e){l&&l(e)
var t=e.__c
if(t){var n=t.__H
n&&n.__h.length&&(1!==a.push(t)&&s===o.options.requestAnimationFrame||((s=o.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100)
"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(f))}},o.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(m),e.__h=e.__h.filter((function(e){return!e.__||g(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],o.options.__e(n,e.__v)}})),u&&u(e,t)},o.options.unmount=function(e){h&&h(e)
var t=e.__c
if(t){var n=t.__H
if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){o.options.__e(e,t.__v)}}}
var b=n(73)
n.d(t,"LabelEvent",(function(){return E}))
const E=e=>{let t
const n=(s=null,p((function(){return{current:s}}),[]))
var s
return function(e,t){var n=d(r++)
v(n.__H,t)&&(n.__=e,n.__H=t,i.__H.__h.push(n))}(()=>{n&&n.current&&n.current.addEventListener(e.type,t=>{t.label=e.label})},[]),t=b.Engine.cloneElement(e.children,{ref:n}),t}},function(e,t,n){"use strict"
n.r(t)
var r=n(123),i=n.n(r),s=n(73),o=n(162),a=n.n(o)
n.d(t,"Highlight",(function(){return c}))
class c extends s.Engine.Component{render(){let e
const{content:t,headline:n}=this.props,r=i()("highlight-bastian-feed",{headline:n}),o=t.half
t.time>0&&"Pós Jogo"!==o&&(e=t.time+"’ -"+o),"1º tempo"!==o&&"2º tempo"!==o&&(e=o)
const c=a()(t.text,85,"...",!0),l=n?s.Engine.createElement("p",null,s.Engine.createElement("strong",null,t.title)):s.Engine.createElement("span",{className:"title"},t.title)
return s.Engine.createElement("div",{className:r},s.Engine.createElement("div",{className:"time"},e),s.Engine.createElement("div",{className:"text"},l,c))}}},function(e,t,n){"use strict"
n.r(t)
var r=n(5),i=n.n(r),s=n(53),o=n(60),a=n(190),c=n(186),l=n(129),u=n(73),h=n(56),d=n(188),p=n(76),f=n(141),m=n(139),g=n(87),v=n(153),b=n(25),E=n(40),_=n(42),y=n(88),O=n(54),w=n(109),S=n(28),I=n(20)
class C extends u.Engine.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return Object(I.error)("ErrorBoundary:",e),{hasError:!0}}getSSRElement(){let e,t
try{e=Object(w.default)(this.props.children),t="bstn-err-container"}catch(n){e=this.getFallbackElement(),t="bstn-error-boundary",Object(I.error)("ErrorBoundary:",n)}return u.Engine.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:e}})}getFallbackElement(){let e=this.props.fallback
return e=S.At.server?Object(w.default)(e):u.Engine.createElement("div",{className:"bstn-error-boundary"},e),e}render(){if(this.state.hasError)return this.getFallbackElement()
let e
return S.At.client?e=this.props.children:S.At.server&&(e=this.getSSRElement()),e}}var T=n(182)
function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let A
n.d(t,"ItemC",(function(){return j})),n.d(t,"Item",(function(){return N}))
class j extends m.SeenTimeTelemetry{constructor(e){super(e),this.reportPostView=()=>{this.reportSeenTime(()=>this.reportToHorizon(o.PostView))},this.onView=()=>{if(!this.viewed){this.viewed=!0
const e=this._refs.child
e&&e.onView&&e.onView()}},this.onClick=e=>{const t=this._refs.child
e.label&&t&&t.onClick&&t.onClick(),this.reportPostClick(e)},this.reportPostClick=e=>{if((e.label||e.target.classList.contains("bstn-trk-click"))&&this.reportToHorizon(o.PostClick),e.label){const t=Object(v.cloneJSON)(this.state.data)
Object(y.set)(t,"bstn$source","feed"),Object(O.triggerDomEvent)(s.ITEM_CLICK,document,e=>{e.data=t}),this.reportEvent(e),this.reportToRealtime()}},this.state={data:Object(T.assignFactory)(e.data)},this.sharedItemData={},this.viewed=!1}getChildContext(){return{item:this,sharedItemData:this.sharedItemData}}render(){const e=this.state.data.klass||(()=>null),t=String(this.state.data.type||e.name||e.displayName||"unamed").toLowerCase()
return this.state.data.source!==a.$PushStream.staticName&&this.context.itemIndex&&this.context.itemIndex.register(this),u.Engine.createElement(C,null,u.Engine.createElement(l.ElementViewTrigger,{on:"middle",redirectToChildTriggerIfExists:!0,logar:!1},u.Engine.createElement("div",{ref:Object(g.as)(this,"item"),className:"bastian-feed-item","data-type":t,"data-index":this.props.index},u.Engine.createElement(e,x({ref:Object(g.as)(this,"child")},this.state.data)))))}componentWillMount(){this.sharedItemData.reporter=new p.ItemReporter({telemetry:this,data:this.state.data,itemReference:this,positionIndex:this.context.itemIndex,areaId:this.context.areaId})}componentDidMount(){this._refs.node=this._refs.item,this.cdmSeenTimeTelemetry(),this.lastReportedSeenTime=this.telemetry.seenTime,h.Horizon.on("collect-metrics",this.reportPostView),this._refs.item.addEventListener("click",this.onClick),T.emitter.on(T.NEW_POST_TYPE+this.props.data.type,()=>{this.setState({data:Object(T.assignFactory)(this.props.data)})})}componentWillUnmount(){this.cwuSeenTimeTelemetry(),h.Horizon.off("collect-metrics",this.reportPostView),this._refs.item&&this._refs.item.removeEventListener("click",this.onClick)}reportToHorizon(e){this.sharedItemData.reporter&&h.Horizon.report(e,new f.ReporterCascadeAggregator(this.sharedItemData.reporter,this.context.sharedFeedData.reporter))}reportEvent(e){const t=this._refs.child||{},n=this.context.itemIndex.getPosition(this)
if(e.label){const r={origin:Object(b.get)(this.props,"data.type")||"post basico",action:e.action||"clique",label:e.label,hasVideo:Object(E.has)(t,"_refs.video"),hasPhoto:Object(E.has)(t,"_refs.photo"),hasSummary:i()(t.hasSummary)&&t.hasSummary(),position:"posicao "+String(n).padStart(4,"0")}
Object(d.default)(r,["GA","CommonEvents"],{generateLabel:!0})}else this.state.data.klass===c.default?Object(d.default)({origin:"publicidade"},["GA","CommonEvents"]):"card"===this.state.data.type&&Object(d.default)({origin:"card"},["GA","CommonEvents"])}reportToRealtime(){const e=this.state.data
let t='tipo desconhecido "'+Object(b.get)(e,"key")+'"'
const n=Object(b.get)(e,"content.url")
if(n)t=n
else{const n=Object(b.get)(e,"content.video.id")
n&&(t="video "+n)}Object(_.reportToRealtime)({feed:"feed","right-column":"coluna da direita"}[this.context.areaId],t)}}A=j
const N=A}]).default
