import{R as me,c as or,j as P,T as sr,B as ur}from"./ButtomBar-JWc2WyRa.js";function cr(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function fr(e,n,t){return n&&cr(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var un="(prefers-reduced-motion: reduce)",Pe=1,lr=2,Me=3,ke=4,Ze=5,ot=6,ft=7,vr={CREATED:Pe,MOUNTED:lr,IDLE:Me,MOVING:ke,SCROLLING:Ze,DRAGGING:ot,DESTROYED:ft};function he(e){e.length=0}function pe(e,n,t){return Array.prototype.slice.call(e,n,t)}function G(e){return e.bind.apply(e,[null].concat(pe(arguments,1)))}var Tn=setTimeout,Dt=function(){};function cn(e){return requestAnimationFrame(e)}function gt(e,n){return typeof n===e}function We(e){return!Bt(e)&&gt("object",e)}var Ut=Array.isArray,Sn=G(gt,"function"),_e=G(gt,"string"),Je=G(gt,"undefined");function Bt(e){return e===null}function Nn(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Qe(e){return Ut(e)?e:[e]}function re(e,n){Qe(e).forEach(n)}function Gt(e,n){return e.indexOf(n)>-1}function st(e,n){return e.push.apply(e,Qe(n)),e}function le(e,n,t){e&&re(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function se(e,n){le(e,_e(n)?n.split(" "):n,!0)}function et(e,n){re(n,e.appendChild.bind(e))}function zt(e,n){re(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function Ye(e,n){return Nn(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function In(e,n){var t=e?pe(e.children):[];return n?t.filter(function(r){return Ye(r,n)}):t}function tt(e,n){return n?In(e,n)[0]:e.firstElementChild}var He=Object.keys;function Le(e,n,t){return e&&(t?He(e).reverse():He(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function Xe(e){return pe(arguments,1).forEach(function(n){Le(n,function(t,r){e[r]=n[r]})}),e}function Ae(e){return pe(arguments,1).forEach(function(n){Le(n,function(t,r){Ut(t)?e[r]=t.slice():We(t)?e[r]=Ae({},We(e[r])?e[r]:{},t):e[r]=t})}),e}function fn(e,n){re(n||He(e),function(t){delete e[t]})}function ue(e,n){re(e,function(t){re(n,function(r){t&&t.removeAttribute(r)})})}function j(e,n,t){We(n)?Le(n,function(r,i){j(e,i,r)}):re(e,function(r){Bt(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function be(e,n,t){var r=document.createElement(e);return n&&(_e(n)?se(r,n):j(r,n)),t&&et(t,r),r}function ie(e,n,t){if(Je(t))return getComputedStyle(e)[n];Bt(t)||(e.style[n]=""+t)}function qe(e,n){ie(e,"display",n)}function Ln(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ae(e,n){return e.getAttribute(n)}function ln(e,n){return e&&e.classList.contains(n)}function te(e){return e.getBoundingClientRect()}function Re(e){re(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function Rn(e){return tt(new DOMParser().parseFromString(e,"text/html").body)}function fe(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function On(e,n){return e&&e.querySelector(n)}function Wt(e,n){return n?pe(e.querySelectorAll(n)):[]}function ve(e,n){le(e,n,!1)}function Pt(e){return e.timeStamp}function Ie(e){return _e(e)?e:e?e+"px":""}var nt="splide",Yt="data-"+nt;function Ge(e,n){if(!e)throw new Error("["+nt+"] "+(n||""))}var ye=Math.min,lt=Math.max,vt=Math.floor,Ke=Math.ceil,ee=Math.abs;function wn(e,n,t){return ee(e-n)<t}function ut(e,n,t,r){var i=ye(n,t),v=lt(n,t);return r?i<e&&e<v:i<=e&&e<=v}function Ce(e,n,t){var r=ye(n,t),i=lt(n,t);return ye(lt(r,e),i)}function bt(e){return+(e>0)-+(e<0)}function xt(e,n){return re(n,function(t){e=e.replace("%s",""+t)}),e}function Ht(e){return e<10?"0"+e:""+e}var vn={};function dr(e){return""+e+Ht(vn[e]=(vn[e]||0)+1)}function Cn(){var e=[];function n(a,u,c,l){i(a,u,function(o,m,d){var h="addEventListener"in o,s=h?o.removeEventListener.bind(o,m,c,l):o.removeListener.bind(o,c);h?o.addEventListener(m,c,l):o.addListener(c),e.push([o,m,d,c,s])})}function t(a,u,c){i(a,u,function(l,o,m){e=e.filter(function(d){return d[0]===l&&d[1]===o&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function r(a,u,c){var l,o=!0;return typeof CustomEvent=="function"?l=new CustomEvent(u,{bubbles:o,detail:c}):(l=document.createEvent("CustomEvent"),l.initCustomEvent(u,o,!1,c)),a.dispatchEvent(l),l}function i(a,u,c){re(a,function(l){l&&re(u,function(o){o.split(" ").forEach(function(m){var d=m.split(".");c(l,d[0],d[1])})})})}function v(){e.forEach(function(a){a[4]()}),he(e)}return{bind:n,unbind:t,dispatch:r,destroy:v}}var Te="mounted",Mt="ready",ge="move",Fe="moved",Xt="click",Dn="active",Pn="inactive",bn="visible",xn="hidden",q="refresh",J="updated",Ve="resize",Et="resized",Mn="drag",Vn="dragging",jn="dragged",mt="scroll",we="scrolled",hr="overflow",qt="destroy",kn="arrows:mounted",Fn="arrows:updated",Un="pagination:mounted",Bn="pagination:updated",Kt="navigation:mounted",$t="autoplay:play",Gn="autoplay:playing",Zt="autoplay:pause",Jt="lazyload:loaded",zn="sk",Wn="sh",dt="ei";function Y(e){var n=e?e.event.bus:document.createDocumentFragment(),t=Cn();function r(v,a){t.bind(n,Qe(v).join(" "),function(u){a.apply(a,Ut(u.detail)?u.detail:[])})}function i(v){t.dispatch(n,v,pe(arguments,1))}return e&&e.event.on(qt,t.destroy),Xe(t,{bus:n,on:r,off:G(t.unbind,n),emit:i})}function At(e,n,t,r){var i=Date.now,v,a=0,u,c=!0,l=0;function o(){if(!c){if(a=e?ye((i()-v)/e,1):1,t&&t(a),a>=1&&(n(),v=i(),r&&++l>=r))return d();u=cn(o)}}function m(A){A||s(),v=i()-(A?a*e:0),c=!1,u=cn(o)}function d(){c=!0}function h(){v=i(),a=0,t&&t(a)}function s(){u&&cancelAnimationFrame(u),a=0,u=0,c=!0}function f(A){e=A}function _(){return c}return{start:m,rewind:h,pause:d,cancel:s,set:f,isPaused:_}}function gr(e){var n=e;function t(i){n=i}function r(i){return Gt(Qe(i),n)}return{set:t,is:r}}function Er(e,n){var t=At(0,e,null,1);return function(){t.isPaused()&&t.start()}}function mr(e,n,t){var r=e.state,i=t.breakpoints||{},v=t.reducedMotion||{},a=Cn(),u=[];function c(){var s=t.mediaQuery==="min";He(i).sort(function(f,_){return s?+f-+_:+_-+f}).forEach(function(f){o(i[f],"("+(s?"min":"max")+"-width:"+f+"px)")}),o(v,un),m()}function l(s){s&&a.destroy()}function o(s,f){var _=matchMedia(f);a.bind(_,"change",m),u.push([s,_])}function m(){var s=r.is(ft),f=t.direction,_=u.reduce(function(A,E){return Ae(A,E[1].matches?E[0]:{})},{});fn(t),h(_),t.destroy?e.destroy(t.destroy==="completely"):s?(l(!0),e.mount()):f!==t.direction&&e.refresh()}function d(s){matchMedia(un).matches&&(s?Ae(t,v):fn(t,He(v)))}function h(s,f,_){Ae(t,s),f&&Ae(Object.getPrototypeOf(t),s),(_||!r.is(Pe))&&e.emit(J,t)}return{setup:c,destroy:l,reduce:d,set:h}}var _t="Arrow",yt=_t+"Left",pt=_t+"Right",Yn=_t+"Up",Hn=_t+"Down",dn="rtl",Tt="ttb",Lt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Yn,pt],ArrowRight:[Hn,yt]};function Ar(e,n,t){function r(v,a,u){u=u||t.direction;var c=u===dn&&!a?1:u===Tt?0:-1;return Lt[v]&&Lt[v][c]||v.replace(/width|left|right/i,function(l,o){var m=Lt[l.toLowerCase()][c]||l;return o>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function i(v){return v*(t.direction===dn?1:-1)}return{resolve:r,orient:i}}var de="role",xe="tabindex",_r="disabled",oe="aria-",rt=oe+"controls",Xn=oe+"current",hn=oe+"selected",ne=oe+"label",Qt=oe+"labelledby",qn=oe+"hidden",en=oe+"orientation",$e=oe+"roledescription",gn=oe+"live",En=oe+"busy",mn=oe+"atomic",tn=[de,xe,_r,rt,Xn,ne,Qt,qn,en,$e],ce=nt+"__",Se="is-",Rt=nt,An=ce+"track",yr=ce+"list",St=ce+"slide",Kn=St+"--clone",pr=St+"__container",nn=ce+"arrows",Nt=ce+"arrow",$n=Nt+"--prev",Zn=Nt+"--next",It=ce+"pagination",Jn=It+"__page",Tr=ce+"progress",Sr=Tr+"__bar",Nr=ce+"toggle",Ir=ce+"spinner",Lr=ce+"sr",Rr=Se+"initialized",Oe=Se+"active",Qn=Se+"prev",er=Se+"next",Vt=Se+"visible",jt=Se+"loading",tr=Se+"focus-in",nr=Se+"overflow",Or=[Oe,Vt,Qn,er,jt,tr,nr],wr={slide:St,clone:Kn,arrows:nn,arrow:Nt,prev:$n,next:Zn,pagination:It,page:Jn,spinner:Ir};function Cr(e,n){if(Sn(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!Ye(t,n);)t=t.parentElement;return t}var Dr=5,_n=200,rr="touchstart mousedown",Ot="touchmove mousemove",wt="touchend touchcancel mouseup click";function Pr(e,n,t){var r=Y(e),i=r.on,v=r.bind,a=e.root,u=t.i18n,c={},l=[],o=[],m=[],d,h,s;function f(){g(),b(),E()}function _(){i(q,A),i(q,f),i(J,E),v(document,rr+" keydown",function(p){s=p.type==="keydown"},{capture:!0}),v(a,"focusin",function(){le(a,tr,!!s)})}function A(p){var O=tn.concat("style");he(l),ve(a,o),ve(d,m),ue([d,h],O),ue(a,p?O:["style",$e])}function E(){ve(a,o),ve(d,m),o=M(Rt),m=M(An),se(a,o),se(d,m),j(a,ne,t.label),j(a,Qt,t.labelledby)}function g(){d=R("."+An),h=tt(d,"."+yr),Ge(d&&h,"A track/list element is missing."),st(l,In(h,"."+St+":not(."+Kn+")")),Le({arrows:nn,pagination:It,prev:$n,next:Zn,bar:Sr,toggle:Nr},function(p,O){c[O]=R("."+p)}),Xe(c,{root:a,track:d,list:h,slides:l})}function b(){var p=a.id||dr(nt),O=t.role;a.id=p,d.id=d.id||p+"-track",h.id=h.id||p+"-list",!ae(a,de)&&a.tagName!=="SECTION"&&O&&j(a,de,O),j(a,$e,u.carousel),j(h,de,"presentation")}function R(p){var O=On(a,p);return O&&Cr(O,"."+Rt)===a?O:void 0}function M(p){return[p+"--"+t.type,p+"--"+t.direction,t.drag&&p+"--draggable",t.isNavigation&&p+"--nav",p===Rt&&Oe]}return Xe(c,{setup:f,mount:_,destroy:A})}var je="slide",Ue="loop",it="fade";function br(e,n,t,r){var i=Y(e),v=i.on,a=i.emit,u=i.bind,c=e.Components,l=e.root,o=e.options,m=o.isNavigation,d=o.updateOnMove,h=o.i18n,s=o.pagination,f=o.slideFocus,_=c.Direction.resolve,A=ae(r,"style"),E=ae(r,ne),g=t>-1,b=tt(r,"."+pr),R;function M(){g||(r.id=l.id+"-slide"+Ht(n+1),j(r,de,s?"tabpanel":"group"),j(r,$e,h.slide),j(r,ne,E||xt(h.slideLabel,[n+1,e.length]))),p()}function p(){u(r,"click",G(a,Xt,x)),u(r,"keydown",G(a,zn,x)),v([Fe,Wn,we],S),v(Kt,F),d&&v(ge,D)}function O(){R=!0,i.destroy(),ve(r,Or),ue(r,tn),j(r,"style",A),j(r,ne,E||"")}function F(){var C=e.splides.map(function(T){var w=T.splide.Components.Slides.getAt(n);return w?w.slide.id:""}).join(" ");j(r,ne,xt(h.slideX,(g?t:n)+1)),j(r,rt,C),j(r,de,f?"button":""),f&&ue(r,$e)}function D(){R||S()}function S(){if(!R){var C=e.index;N(),I(),le(r,Qn,n===C-1),le(r,er,n===C+1)}}function N(){var C=k();C!==ln(r,Oe)&&(le(r,Oe,C),j(r,Xn,m&&C||""),a(C?Dn:Pn,x))}function I(){var C=H(),T=!C&&(!k()||g);if(e.state.is([ke,Ze])||j(r,qn,T||""),j(Wt(r,o.focusableNodes||""),xe,T?-1:""),f&&j(r,xe,T?-1:0),C!==ln(r,Vt)&&(le(r,Vt,C),a(C?bn:xn,x)),!C&&document.activeElement===r){var w=c.Slides.getAt(e.index);w&&Ln(w.slide)}}function V(C,T,w){ie(w&&b||r,C,T)}function k(){var C=e.index;return C===n||o.cloneStatus&&C===t}function H(){if(e.is(it))return k();var C=te(c.Elements.track),T=te(r),w=_("left",!0),U=_("right",!0);return vt(C[w])<=Ke(T[w])&&vt(T[U])<=Ke(C[U])}function W(C,T){var w=ee(C-n);return!g&&(o.rewind||e.is(Ue))&&(w=ye(w,e.length-w)),w<=T}var x={index:n,slideIndex:t,slide:r,container:b,isClone:g,mount:M,destroy:O,update:S,style:V,isWithin:W};return x}function xr(e,n,t){var r=Y(e),i=r.on,v=r.emit,a=r.bind,u=n.Elements,c=u.slides,l=u.list,o=[];function m(){d(),i(q,h),i(q,d)}function d(){c.forEach(function(S,N){f(S,N,-1)})}function h(){R(function(S){S.destroy()}),he(o)}function s(){R(function(S){S.update()})}function f(S,N,I){var V=br(e,N,I,S);V.mount(),o.push(V),o.sort(function(k,H){return k.index-H.index})}function _(S){return S?M(function(N){return!N.isClone}):o}function A(S){var N=n.Controller,I=N.toIndex(S),V=N.hasFocus()?1:t.perPage;return M(function(k){return ut(k.index,I,I+V-1)})}function E(S){return M(S)[0]}function g(S,N){re(S,function(I){if(_e(I)&&(I=Rn(I)),Nn(I)){var V=c[N];V?zt(I,V):et(l,I),se(I,t.classes.slide),O(I,G(v,Ve))}}),v(q)}function b(S){Re(M(S).map(function(N){return N.slide})),v(q)}function R(S,N){_(N).forEach(S)}function M(S){return o.filter(Sn(S)?S:function(N){return _e(S)?Ye(N.slide,S):Gt(Qe(S),N.index)})}function p(S,N,I){R(function(V){V.style(S,N,I)})}function O(S,N){var I=Wt(S,"img"),V=I.length;V?I.forEach(function(k){a(k,"load error",function(){--V||N()})}):N()}function F(S){return S?c.length:o.length}function D(){return o.length>t.perPage}return{mount:m,destroy:h,update:s,register:f,get:_,getIn:A,getAt:E,add:g,remove:b,forEach:R,filter:M,style:p,getLength:F,isEnough:D}}function Mr(e,n,t){var r=Y(e),i=r.on,v=r.bind,a=r.emit,u=n.Slides,c=n.Direction.resolve,l=n.Elements,o=l.root,m=l.track,d=l.list,h=u.getAt,s=u.style,f,_,A;function E(){g(),v(window,"resize load",Er(G(a,Ve))),i([J,q],g),i(Ve,b)}function g(){f=t.direction===Tt,ie(o,"maxWidth",Ie(t.width)),ie(m,c("paddingLeft"),R(!1)),ie(m,c("paddingRight"),R(!0)),b(!0)}function b(x){var C=te(o);(x||_.width!==C.width||_.height!==C.height)&&(ie(m,"height",M()),s(c("marginRight"),Ie(t.gap)),s("width",O()),s("height",F(),!0),_=C,a(Et),A!==(A=W())&&(le(o,nr,A),a(hr,A)))}function R(x){var C=t.padding,T=c(x?"right":"left");return C&&Ie(C[T]||(We(C)?0:C))||"0px"}function M(){var x="";return f&&(x=p(),Ge(x,"height or heightRatio is missing."),x="calc("+x+" - "+R(!1)+" - "+R(!0)+")"),x}function p(){return Ie(t.height||te(d).width*t.heightRatio)}function O(){return t.autoWidth?null:Ie(t.fixedWidth)||(f?"":D())}function F(){return Ie(t.fixedHeight)||(f?t.autoHeight?null:D():p())}function D(){var x=Ie(t.gap);return"calc((100%"+(x&&" + "+x)+")/"+(t.perPage||1)+(x&&" - "+x)+")"}function S(){return te(d)[c("width")]}function N(x,C){var T=h(x||0);return T?te(T.slide)[c("width")]+(C?0:k()):0}function I(x,C){var T=h(x);if(T){var w=te(T.slide)[c("right")],U=te(d)[c("left")];return ee(w-U)+(C?0:k())}return 0}function V(x){return I(e.length-1)-I(0)+N(0,x)}function k(){var x=h(0);return x&&parseFloat(ie(x.slide,c("marginRight")))||0}function H(x){return parseFloat(ie(m,c("padding"+(x?"Right":"Left"))))||0}function W(){return e.is(it)||V(!0)>S()}return{mount:E,resize:b,listSize:S,slideSize:N,sliderSize:V,totalSize:I,getPadding:H,isOverflow:W}}var Vr=2;function jr(e,n,t){var r=Y(e),i=r.on,v=n.Elements,a=n.Slides,u=n.Direction.resolve,c=[],l;function o(){i(q,m),i([J,Ve],h),(l=_())&&(s(l),n.Layout.resize(!0))}function m(){d(),o()}function d(){Re(c),he(c),r.destroy()}function h(){var A=_();l!==A&&(l<A||!A)&&r.emit(q)}function s(A){var E=a.get().slice(),g=E.length;if(g){for(;E.length<A;)st(E,E);st(E.slice(-A),E.slice(0,A)).forEach(function(b,R){var M=R<A,p=f(b.slide,R);M?zt(p,E[0].slide):et(v.list,p),st(c,p),a.register(p,R-A+(M?0:g),b.index)})}}function f(A,E){var g=A.cloneNode(!0);return se(g,t.classes.clone),g.id=e.root.id+"-clone"+Ht(E+1),g}function _(){var A=t.clones;if(!e.is(Ue))A=0;else if(Je(A)){var E=t[u("fixedWidth")]&&n.Layout.slideSize(0),g=E&&Ke(te(v.track)[u("width")]/E);A=g||t[u("autoWidth")]&&e.length||t.perPage*Vr}return A}return{mount:o,destroy:d}}function kr(e,n,t){var r=Y(e),i=r.on,v=r.emit,a=e.state.set,u=n.Layout,c=u.slideSize,l=u.getPadding,o=u.totalSize,m=u.listSize,d=u.sliderSize,h=n.Direction,s=h.resolve,f=h.orient,_=n.Elements,A=_.list,E=_.track,g;function b(){g=n.Transition,i([Te,Et,J,q],R)}function R(){n.Controller.isBusy()||(n.Scroll.cancel(),p(e.index),n.Slides.update())}function M(T,w,U,$){T!==w&&x(T>U)&&(S(),O(D(V(),T>U),!0)),a(ke),v(ge,w,U,T),g.start(w,function(){a(Me),v(Fe,w,U,T),$&&$()})}function p(T){O(I(T,!0))}function O(T,w){if(!e.is(it)){var U=w?T:F(T);ie(A,"transform","translate"+s("X")+"("+U+"px)"),T!==U&&v(Wn)}}function F(T){if(e.is(Ue)){var w=N(T),U=w>n.Controller.getEnd(),$=w<0;($||U)&&(T=D(T,U))}return T}function D(T,w){var U=T-W(w),$=d();return T-=f($*(Ke(ee(U)/$)||1))*(w?1:-1),T}function S(){O(V(),!0),g.cancel()}function N(T){for(var w=n.Slides.get(),U=0,$=1/0,K=0;K<w.length;K++){var Ee=w[K].index,y=ee(I(Ee,!0)-T);if(y<=$)$=y,U=Ee;else break}return U}function I(T,w){var U=f(o(T-1)-H(T));return w?k(U):U}function V(){var T=s("left");return te(A)[T]-te(E)[T]+f(l(!1))}function k(T){return t.trimSpace&&e.is(je)&&(T=Ce(T,0,f(d(!0)-m()))),T}function H(T){var w=t.focus;return w==="center"?(m()-c(T,!0))/2:+w*c(T)||0}function W(T){return I(T?n.Controller.getEnd():0,!!t.trimSpace)}function x(T){var w=f(D(V(),T));return T?w>=0:w<=A[s("scrollWidth")]-te(E)[s("width")]}function C(T,w){w=Je(w)?V():w;var U=T!==!0&&f(w)<f(W(!1)),$=T!==!1&&f(w)>f(W(!0));return U||$}return{mount:b,move:M,jump:p,translate:O,shift:D,cancel:S,toIndex:N,toPosition:I,getPosition:V,getLimit:W,exceededLimit:C,reposition:R}}function Fr(e,n,t){var r=Y(e),i=r.on,v=r.emit,a=n.Move,u=a.getPosition,c=a.getLimit,l=a.toPosition,o=n.Slides,m=o.isEnough,d=o.getLength,h=t.omitEnd,s=e.is(Ue),f=e.is(je),_=G(V,!1),A=G(V,!0),E=t.start||0,g,b=E,R,M,p;function O(){F(),i([J,q,dt],F),i(Et,D)}function F(){R=d(!0),M=t.perMove,p=t.perPage,g=x();var y=Ce(E,0,h?g:R-1);y!==E&&(E=y,a.reposition())}function D(){g!==x()&&v(dt)}function S(y,B,Q){if(!Ee()){var X=I(y),Z=W(X);Z>-1&&(B||Z!==E)&&(U(Z),a.move(X,Z,b,Q))}}function N(y,B,Q,X){n.Scroll.scroll(y,B,Q,function(){var Z=W(a.toIndex(u()));U(h?ye(Z,g):Z),X&&X()})}function I(y){var B=E;if(_e(y)){var Q=y.match(/([+\-<>])(\d+)?/)||[],X=Q[1],Z=Q[2];X==="+"||X==="-"?B=k(E+ +(""+X+(+Z||1)),E):X===">"?B=Z?C(+Z):_(!0):X==="<"&&(B=A(!0))}else B=s?y:Ce(y,0,g);return B}function V(y,B){var Q=M||(K()?1:p),X=k(E+Q*(y?-1:1),E,!(M||K()));return X===-1&&f&&!wn(u(),c(!y),1)?y?0:g:B?X:W(X)}function k(y,B,Q){if(m()||K()){var X=H(y);X!==y&&(B=y,y=X,Q=!1),y<0||y>g?!M&&(ut(0,y,B,!0)||ut(g,B,y,!0))?y=C(T(y)):s?y=Q?y<0?-(R%p||p):R:y:t.rewind?y=y<0?g:0:y=-1:Q&&y!==B&&(y=C(T(B)+(y<B?-1:1)))}else y=-1;return y}function H(y){if(f&&t.trimSpace==="move"&&y!==E)for(var B=u();B===l(y,!0)&&ut(y,0,e.length-1,!t.rewind);)y<E?--y:++y;return y}function W(y){return s?(y+R)%R||0:y}function x(){for(var y=R-(K()||s&&M?1:p);h&&y-- >0;)if(l(R-1,!0)!==l(y,!0)){y++;break}return Ce(y,0,R-1)}function C(y){return Ce(K()?y:p*y,0,g)}function T(y){return K()?ye(y,g):vt((y>=g?R-1:y)/p)}function w(y){var B=a.toIndex(y);return f?Ce(B,0,g):B}function U(y){y!==E&&(b=E,E=y)}function $(y){return y?b:E}function K(){return!Je(t.focus)||t.isNavigation}function Ee(){return e.state.is([ke,Ze])&&!!t.waitForTransition}return{mount:O,go:S,scroll:N,getNext:_,getPrev:A,getAdjacent:V,getEnd:x,setIndex:U,getIndex:$,toIndex:C,toPage:T,toDest:w,hasFocus:K,isBusy:Ee}}var Ur="http://www.w3.org/2000/svg",Br="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",at=40;function Gr(e,n,t){var r=Y(e),i=r.on,v=r.bind,a=r.emit,u=t.classes,c=t.i18n,l=n.Elements,o=n.Controller,m=l.arrows,d=l.track,h=m,s=l.prev,f=l.next,_,A,E={};function g(){R(),i(J,b)}function b(){M(),g()}function R(){var N=t.arrows;N&&!(s&&f)&&F(),s&&f&&(Xe(E,{prev:s,next:f}),qe(h,N?"":"none"),se(h,A=nn+"--"+t.direction),N&&(p(),S(),j([s,f],rt,d.id),a(kn,s,f)))}function M(){r.destroy(),ve(h,A),_?(Re(m?[s,f]:h),s=f=null):ue([s,f],tn)}function p(){i([Te,Fe,q,we,dt],S),v(f,"click",G(O,">")),v(s,"click",G(O,"<"))}function O(N){o.go(N,!0)}function F(){h=m||be("div",u.arrows),s=D(!0),f=D(!1),_=!0,et(h,[s,f]),!m&&zt(h,d)}function D(N){var I='<button class="'+u.arrow+" "+(N?u.prev:u.next)+'" type="button"><svg xmlns="'+Ur+'" viewBox="0 0 '+at+" "+at+'" width="'+at+'" height="'+at+'" focusable="false"><path d="'+(t.arrowPath||Br)+'" />';return Rn(I)}function S(){if(s&&f){var N=e.index,I=o.getPrev(),V=o.getNext(),k=I>-1&&N<I?c.last:c.prev,H=V>-1&&N>V?c.first:c.next;s.disabled=I<0,f.disabled=V<0,j(s,ne,k),j(f,ne,H),a(Fn,s,f,I,V)}}return{arrows:E,mount:g,destroy:M,update:S}}var zr=Yt+"-interval";function Wr(e,n,t){var r=Y(e),i=r.on,v=r.bind,a=r.emit,u=At(t.interval,e.go.bind(e,">"),p),c=u.isPaused,l=n.Elements,o=n.Elements,m=o.root,d=o.toggle,h=t.autoplay,s,f,_=h==="pause";function A(){h&&(E(),d&&j(d,rt,l.track.id),_||g(),M())}function E(){t.pauseOnHover&&v(m,"mouseenter mouseleave",function(F){s=F.type==="mouseenter",R()}),t.pauseOnFocus&&v(m,"focusin focusout",function(F){f=F.type==="focusin",R()}),d&&v(d,"click",function(){_?g():b(!0)}),i([ge,mt,q],u.rewind),i(ge,O)}function g(){c()&&n.Slides.isEnough()&&(u.start(!t.resetProgress),f=s=_=!1,M(),a($t))}function b(F){F===void 0&&(F=!0),_=!!F,M(),c()||(u.pause(),a(Zt))}function R(){_||(s||f?b(!1):g())}function M(){d&&(le(d,Oe,!_),j(d,ne,t.i18n[_?"play":"pause"]))}function p(F){var D=l.bar;D&&ie(D,"width",F*100+"%"),a(Gn,F)}function O(F){var D=n.Slides.getAt(F);u.set(D&&+ae(D.slide,zr)||t.interval)}return{mount:A,destroy:u.cancel,play:g,pause:b,isPaused:c}}function Yr(e,n,t){var r=Y(e),i=r.on;function v(){t.cover&&(i(Jt,G(u,!0)),i([Te,J,q],G(a,!0)))}function a(c){n.Slides.forEach(function(l){var o=tt(l.container||l.slide,"img");o&&o.src&&u(c,o,l)})}function u(c,l,o){o.style("background",c?'center/cover no-repeat url("'+l.src+'")':"",!0),qe(l,c?"none":"")}return{mount:v,destroy:G(a,!1)}}var Hr=10,Xr=600,qr=.6,Kr=1.5,$r=800;function Zr(e,n,t){var r=Y(e),i=r.on,v=r.emit,a=e.state.set,u=n.Move,c=u.getPosition,l=u.getLimit,o=u.exceededLimit,m=u.translate,d=e.is(je),h,s,f=1;function _(){i(ge,b),i([J,q],R)}function A(p,O,F,D,S){var N=c();if(b(),F&&(!d||!o())){var I=n.Layout.sliderSize(),V=bt(p)*I*vt(ee(p)/I)||0;p=u.toPosition(n.Controller.toDest(p%I))+V}var k=wn(N,p,1);f=1,O=k?0:O||lt(ee(p-N)/Kr,$r),s=D,h=At(O,E,G(g,N,p,S),1),a(Ze),v(mt),h.start()}function E(){a(Me),s&&s(),v(we)}function g(p,O,F,D){var S=c(),N=p+(O-p)*M(D),I=(N-S)*f;m(S+I),d&&!F&&o()&&(f*=qr,ee(I)<Hr&&A(l(o(!0)),Xr,!1,s,!0))}function b(){h&&h.cancel()}function R(){h&&!h.isPaused()&&(b(),E())}function M(p){var O=t.easingFunc;return O?O(p):1-Math.pow(1-p,4)}return{mount:_,destroy:b,scroll:A,cancel:R}}var De={passive:!1,capture:!0};function Jr(e,n,t){var r=Y(e),i=r.on,v=r.emit,a=r.bind,u=r.unbind,c=e.state,l=n.Move,o=n.Scroll,m=n.Controller,d=n.Elements.track,h=n.Media.reduce,s=n.Direction,f=s.resolve,_=s.orient,A=l.getPosition,E=l.exceededLimit,g,b,R,M,p,O=!1,F,D,S;function N(){a(d,Ot,Dt,De),a(d,wt,Dt,De),a(d,rr,V,De),a(d,"click",W,{capture:!0}),a(d,"dragstart",fe),i([Te,J],I)}function I(){var L=t.drag;sn(!L),M=L==="free"}function V(L){if(F=!1,!D){var z=Z(L);X(L.target)&&(z||!L.button)&&(m.isBusy()?fe(L,!0):(S=z?d:window,p=c.is([ke,Ze]),R=null,a(S,Ot,k,De),a(S,wt,H,De),l.cancel(),o.cancel(),x(L)))}}function k(L){if(c.is(ot)||(c.set(ot),v(Mn)),L.cancelable)if(p){l.translate(g+Q(K(L)));var z=Ee(L)>_n,Ne=O!==(O=E());(z||Ne)&&x(L),F=!0,v(Vn),fe(L)}else w(L)&&(p=T(L),fe(L))}function H(L){c.is(ot)&&(c.set(Me),v(jn)),p&&(C(L),fe(L)),u(S,Ot,k),u(S,wt,H),p=!1}function W(L){!D&&F&&fe(L,!0)}function x(L){R=b,b=L,g=A()}function C(L){var z=U(L),Ne=$(z),Be=t.rewind&&t.rewindByDrag;h(!1),M?m.scroll(Ne,0,t.snap):e.is(it)?m.go(_(bt(z))<0?Be?"<":"-":Be?">":"+"):e.is(je)&&O&&Be?m.go(E(!0)?">":"<"):m.go(m.toDest(Ne),!0),h(!0)}function T(L){var z=t.dragMinThreshold,Ne=We(z),Be=Ne&&z.mouse||0,ar=(Ne?z.touch:+z)||10;return ee(K(L))>(Z(L)?ar:Be)}function w(L){return ee(K(L))>ee(K(L,!0))}function U(L){if(e.is(Ue)||!O){var z=Ee(L);if(z&&z<_n)return K(L)/z}return 0}function $(L){return A()+bt(L)*ye(ee(L)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function K(L,z){return B(L,z)-B(y(L),z)}function Ee(L){return Pt(L)-Pt(y(L))}function y(L){return b===L&&R||b}function B(L,z){return(Z(L)?L.changedTouches[0]:L)["page"+f(z?"Y":"X")]}function Q(L){return L/(O&&e.is(je)?Dr:1)}function X(L){var z=t.noDrag;return!Ye(L,"."+Jn+", ."+Nt)&&(!z||!Ye(L,z))}function Z(L){return typeof TouchEvent<"u"&&L instanceof TouchEvent}function ir(){return p}function sn(L){D=L}return{mount:N,disable:sn,isDragging:ir}}var Qr={Spacebar:" ",Right:pt,Left:yt,Up:Yn,Down:Hn};function rn(e){return e=_e(e)?e:e.key,Qr[e]||e}var yn="keydown";function ei(e,n,t){var r=Y(e),i=r.on,v=r.bind,a=r.unbind,u=e.root,c=n.Direction.resolve,l,o;function m(){d(),i(J,h),i(J,d),i(ge,f)}function d(){var A=t.keyboard;A&&(l=A==="global"?window:u,v(l,yn,_))}function h(){a(l,yn)}function s(A){o=A}function f(){var A=o;o=!0,Tn(function(){o=A})}function _(A){if(!o){var E=rn(A);E===c(yt)?e.go("<"):E===c(pt)&&e.go(">")}}return{mount:m,destroy:h,disable:s}}var ze=Yt+"-lazy",ct=ze+"-srcset",ti="["+ze+"], ["+ct+"]";function ni(e,n,t){var r=Y(e),i=r.on,v=r.off,a=r.bind,u=r.emit,c=t.lazyLoad==="sequential",l=[Fe,we],o=[];function m(){t.lazyLoad&&(d(),i(q,d))}function d(){he(o),h(),c?A():(v(l),i(l,s),s())}function h(){n.Slides.forEach(function(E){Wt(E.slide,ti).forEach(function(g){var b=ae(g,ze),R=ae(g,ct);if(b!==g.src||R!==g.srcset){var M=t.classes.spinner,p=g.parentElement,O=tt(p,"."+M)||be("span",M,p);o.push([g,E,O]),g.src||qe(g,"none")}})})}function s(){o=o.filter(function(E){var g=t.perPage*((t.preloadPages||1)+1)-1;return E[1].isWithin(e.index,g)?f(E):!0}),o.length||v(l)}function f(E){var g=E[0];se(E[1].slide,jt),a(g,"load error",G(_,E)),j(g,"src",ae(g,ze)),j(g,"srcset",ae(g,ct)),ue(g,ze),ue(g,ct)}function _(E,g){var b=E[0],R=E[1];ve(R.slide,jt),g.type!=="error"&&(Re(E[2]),qe(b,""),u(Jt,b,R),u(Ve)),c&&A()}function A(){o.length&&f(o.shift())}return{mount:m,destroy:G(he,o),check:s}}function ri(e,n,t){var r=Y(e),i=r.on,v=r.emit,a=r.bind,u=n.Slides,c=n.Elements,l=n.Controller,o=l.hasFocus,m=l.getIndex,d=l.go,h=n.Direction.resolve,s=c.pagination,f=[],_,A;function E(){g(),i([J,q,dt],E);var D=t.pagination;s&&qe(s,D?"":"none"),D&&(i([ge,mt,we],F),b(),F(),v(Un,{list:_,items:f},O(e.index)))}function g(){_&&(Re(s?pe(_.children):_),ve(_,A),he(f),_=null),r.destroy()}function b(){var D=e.length,S=t.classes,N=t.i18n,I=t.perPage,V=o()?l.getEnd()+1:Ke(D/I);_=s||be("ul",S.pagination,c.track.parentElement),se(_,A=It+"--"+p()),j(_,de,"tablist"),j(_,ne,N.select),j(_,en,p()===Tt?"vertical":"");for(var k=0;k<V;k++){var H=be("li",null,_),W=be("button",{class:S.page,type:"button"},H),x=u.getIn(k).map(function(T){return T.slide.id}),C=!o()&&I>1?N.pageX:N.slideX;a(W,"click",G(R,k)),t.paginationKeyboard&&a(W,"keydown",G(M,k)),j(H,de,"presentation"),j(W,de,"tab"),j(W,rt,x.join(" ")),j(W,ne,xt(C,k+1)),j(W,xe,-1),f.push({li:H,button:W,page:k})}}function R(D){d(">"+D,!0)}function M(D,S){var N=f.length,I=rn(S),V=p(),k=-1;I===h(pt,!1,V)?k=++D%N:I===h(yt,!1,V)?k=(--D+N)%N:I==="Home"?k=0:I==="End"&&(k=N-1);var H=f[k];H&&(Ln(H.button),d(">"+k),fe(S,!0))}function p(){return t.paginationDirection||t.direction}function O(D){return f[l.toPage(D)]}function F(){var D=O(m(!0)),S=O(m());if(D){var N=D.button;ve(N,Oe),ue(N,hn),j(N,xe,-1)}if(S){var I=S.button;se(I,Oe),j(I,hn,!0),j(I,xe,"")}v(Bn,{list:_,items:f},D,S)}return{items:f,mount:E,destroy:g,getAt:O,update:F}}var ii=[" ","Enter"];function ai(e,n,t){var r=t.isNavigation,i=t.slideFocus,v=[];function a(){e.splides.forEach(function(s){s.isParent||(l(e,s.splide),l(s.splide,e))}),r&&o()}function u(){v.forEach(function(s){s.destroy()}),he(v)}function c(){u(),a()}function l(s,f){var _=Y(s);_.on(ge,function(A,E,g){f.go(f.is(Ue)?g:A)}),v.push(_)}function o(){var s=Y(e),f=s.on;f(Xt,d),f(zn,h),f([Te,J],m),v.push(s),s.emit(Kt,e.splides)}function m(){j(n.Elements.list,en,t.direction===Tt?"vertical":"")}function d(s){e.go(s.index)}function h(s,f){Gt(ii,rn(f))&&(d(s),fe(f))}return{setup:G(n.Media.set,{slideFocus:Je(i)?r:i},!0),mount:a,destroy:u,remount:c}}function oi(e,n,t){var r=Y(e),i=r.bind,v=0;function a(){t.wheel&&i(n.Elements.track,"wheel",u,De)}function u(l){if(l.cancelable){var o=l.deltaY,m=o<0,d=Pt(l),h=t.wheelMinThreshold||0,s=t.wheelSleep||0;ee(o)>h&&d-v>s&&(e.go(m?"<":">"),v=d),c(m)&&fe(l)}}function c(l){return!t.releaseWheel||e.state.is(ke)||n.Controller.getAdjacent(l)!==-1}return{mount:a}}var si=90;function ui(e,n,t){var r=Y(e),i=r.on,v=n.Elements.track,a=t.live&&!t.isNavigation,u=be("span",Lr),c=At(si,G(o,!1));function l(){a&&(d(!n.Autoplay.isPaused()),j(v,mn,!0),u.textContent="…",i($t,G(d,!0)),i(Zt,G(d,!1)),i([Fe,we],G(o,!0)))}function o(h){j(v,En,h),h?(et(v,u),c.start()):(Re(u),c.cancel())}function m(){ue(v,[gn,mn,En]),Re(u)}function d(h){a&&j(v,gn,h?"off":"polite")}return{mount:l,disable:d,destroy:m}}var ci=Object.freeze({__proto__:null,Media:mr,Direction:Ar,Elements:Pr,Slides:xr,Layout:Mr,Clones:jr,Move:kr,Controller:Fr,Arrows:Gr,Autoplay:Wr,Cover:Yr,Scroll:Zr,Drag:Jr,Keyboard:ei,LazyLoad:ni,Pagination:ri,Sync:ai,Wheel:oi,Live:ui}),fi={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},li={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:wr,i18n:fi,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function vi(e,n,t){var r=n.Slides;function i(){Y(e).on([Te,q],v)}function v(){r.forEach(function(u){u.style("transform","translateX(-"+100*u.index+"%)")})}function a(u,c){r.style("transition","opacity "+t.speed+"ms "+t.easing),Tn(c)}return{mount:i,start:a,cancel:Dt}}function di(e,n,t){var r=n.Move,i=n.Controller,v=n.Scroll,a=n.Elements.list,u=G(ie,a,"transition"),c;function l(){Y(e).bind(a,"transitionend",function(h){h.target===a&&c&&(m(),c())})}function o(h,s){var f=r.toPosition(h,!0),_=r.getPosition(),A=d(h);ee(f-_)>=1&&A>=1?t.useScroll?v.scroll(f,A,!1,s):(u("transform "+A+"ms "+t.easing),r.translate(f,!0),c=s):(r.jump(h),s())}function m(){u(""),v.cancel()}function d(h){var s=t.rewindSpeed;if(e.is(je)&&s){var f=i.getIndex(!0),_=i.getEnd();if(f===0&&h>=_||f>=_&&h===0)return s}return t.speed}return{mount:l,start:o,cancel:m}}var hi=function(){function e(t,r){this.event=Y(),this.Components={},this.state=gr(Pe),this.splides=[],this._o={},this._E={};var i=_e(t)?On(document,t):t;Ge(i,i+" is invalid."),this.root=i,r=Ae({label:ae(i,ne)||"",labelledby:ae(i,Qt)||""},li,e.defaults,r||{});try{Ae(r,JSON.parse(ae(i,Yt)))}catch{Ge(!1,"Invalid JSON")}this._o=Object.create(Ae({},r))}var n=e.prototype;return n.mount=function(r,i){var v=this,a=this.state,u=this.Components;Ge(a.is([Pe,ft]),"Already mounted!"),a.set(Pe),this._C=u,this._T=i||this._T||(this.is(it)?vi:di),this._E=r||this._E;var c=Xe({},ci,this._E,{Transition:this._T});return Le(c,function(l,o){var m=l(v,u,v._o);u[o]=m,m.setup&&m.setup()}),Le(u,function(l){l.mount&&l.mount()}),this.emit(Te),se(this.root,Rr),a.set(Me),this.emit(Mt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Me)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,i){return this.event.on(r,i),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(pe(arguments,1))),this},n.add=function(r,i){return this._C.Slides.add(r,i),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(q),this},n.destroy=function(r){r===void 0&&(r=!0);var i=this.event,v=this.state;return v.is(Pe)?Y(this).on(Mt,this.destroy.bind(this,r)):(Le(this._C,function(a){a.destroy&&a.destroy(r)},!0),i.emit(qt),i.destroy(),r&&he(this.splides),v.set(ft)),this},fr(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),an=hi;an.defaults={};an.STATES=vr;var pn=[[Te,"onMounted"],[Mt,"onReady"],[ge,"onMove"],[Fe,"onMoved"],[Xt,"onClick"],[Dn,"onActive"],[Pn,"onInactive"],[bn,"onVisible"],[xn,"onHidden"],[q,"onRefresh"],[J,"onUpdated"],[Ve,"onResize"],[Et,"onResized"],[Mn,"onDrag"],[Vn,"onDragging"],[jn,"onDragged"],[mt,"onScroll"],[we,"onScrolled"],[qt,"onDestroy"],[kn,"onArrowsMounted"],[Fn,"onArrowsUpdated"],[Un,"onPaginationMounted"],[Bn,"onPaginationUpdated"],[Kt,"onNavigationMounted"],[$t,"onAutoplayPlay"],[Gn,"onAutoplayPlaying"],[Zt,"onAutoplayPause"],[Jt,"onLazyLoadLoaded"]];function on(...e){return e.filter(Boolean).join(" ")}function ht(e){return e!==null&&typeof e=="object"}function kt(e,n){if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&!e.some((t,r)=>!kt(t,n[r]));if(ht(e)&&ht(n)){const t=Object.keys(e),r=Object.keys(n);return t.length===r.length&&!t.some(i=>!Object.prototype.hasOwnProperty.call(n,i)||!kt(e[i],n[i]))}return e===n}function gi(e,n){return e.length===n.length&&!e.some((t,r)=>t!==n[r])}function Ei(e,n){if(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const i=t[r];if(i!=="__proto__"&&n(e[i],i)===!1)break}}return e}function Ft(e,n){const t=e;return Ei(n,(r,i)=>{Array.isArray(r)?t[i]=r.slice():ht(r)?t[i]=Ft(ht(t[i])?t[i]:{},r):t[i]=r}),t}var mi=({children:e,className:n,...t})=>me.createElement("div",{className:on("splide__track",n),...t},me.createElement("ul",{className:"splide__list"},e)),Ai=class extends me.Component{constructor(){super(...arguments),this.splideRef=me.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:n,transition:t}=this.props,{current:r}=this.splideRef;r&&(this.splide=new an(r,e),this.bind(this.splide),this.splide.mount(n,t),this.options=Ft({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!kt(this.options,e)&&(this.splide.options=e,this.options=Ft({},e));const n=this.getSlides();gi(this.slides,n)||(this.splide.refresh(),this.slides=n)}sync(e){var n;(n=this.splide)==null||n.sync(e)}go(e){var n;(n=this.splide)==null||n.go(e)}getSlides(){var e;if(this.splide){const n=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return n&&Array.prototype.slice.call(n)||[]}return[]}bind(e){pn.forEach(([n,t])=>{const r=this.props[t];typeof r=="function"&&e.on(n,(...i)=>{r(e,...i)})})}omit(e,n){return n.forEach(t=>{Object.prototype.hasOwnProperty.call(e,t)&&delete e[t]}),e}render(){const{className:e,tag:n="div",hasTrack:t=!0,children:r,...i}=this.props;return me.createElement(n,{className:on("splide",e),ref:this.splideRef,...this.omit(i,["options",...pn.map(v=>v[1])])},t?me.createElement(mi,null,r):r)}},Ct=({children:e,className:n,...t})=>me.createElement("li",{className:on("splide__slide",n),...t},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */or.createRoot(document.getElementById("root")).render(P.jsxs(me.StrictMode,{children:[P.jsx(sr,{}),P.jsxs("main",{children:[P.jsxs(Ai,{options:{rewind:!0,width:"100%",gap:"1px",type:"loop",autoplay:!0,perPage:2,focus:"center",arrows:!1,pagination:!1},children:[P.jsx(Ct,{children:P.jsx("img",{className:"carrusel",src:"src/assets/colectivo.png",alt:"Image 1"})}),P.jsx(Ct,{children:P.jsx("img",{className:"carrusel",src:"src/assets/auto.png",alt:"Image 2"})}),P.jsx(Ct,{children:P.jsx("img",{className:"carrusel",src:"src/assets/direc2.jpg",alt:"Image 3"})})]}),P.jsxs("div",{className:"sitios",children:[P.jsxs("div",{className:"sitio1",children:[P.jsx("a",{href:"https://www.tucuman.gov.ar/",children:P.jsx("img",{src:"src/assets/hnzthxf9.png",alt:"Gobierno de Tucuman"})}),P.jsx("a",{href:"http://mininteriortucuman.gob.ar/",children:P.jsx("img",{src:"src/assets/q1mp2h4e.png",alt:"Ministerio"})})]}),P.jsxs("div",{className:"sitio2",children:[P.jsx("a",{href:"https://www.argentina.gob.ar/transporte/cnrt",children:P.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Logo_CNRT.png",alt:"CNRT"})}),P.jsx("a",{href:"https://smt.gob.ar/",children:P.jsx("img",{src:"https://media.licdn.com/dms/image/D4D0BAQGqBTLENcU6MA/company-logo_200_200/0/1713455769855/munismtucuman_logo?e=2147483647&v=beta&t=YvO0OxnY9kGjiXvVW2EFPkXlKBfYbfYsoaeXbUb-Im4",alt:"Ministerio"})})]})]}),P.jsx("h2",{children:"TELÉFONOS ÚTILES"}),P.jsxs("div",{className:"telefonos",children:[P.jsxs("div",{children:[P.jsx("h1",{children:"911"}),P.jsx("p",{children:"EMERGENCIA POLICIAL"})]}),P.jsxs("div",{children:[P.jsx("h1",{children:"100"}),P.jsx("p",{children:"BOMBEROS"})]}),P.jsxs("div",{children:[P.jsx("h1",{children:"102"}),P.jsx("p",{children:"AYUDA AL NIÑO"})]}),P.jsxs("div",{children:[P.jsx("h1",{children:"103"}),P.jsx("p",{children:"DEFENSA CIVIL"})]}),P.jsxs("div",{children:[P.jsx("h1",{children:"105"}),P.jsx("p",{children:"EMERGENCIA AMBIENTAL"})]}),P.jsxs("div",{children:[P.jsx("h1",{children:"106"}),P.jsx("p",{children:"EMERGENCIA NÁUTICA"})]}),P.jsxs("div",{children:[P.jsx("h1",{children:"107"}),P.jsx("p",{children:"EMERGENCIA SALUD"})]})]})]}),P.jsx(ur,{})]}));
