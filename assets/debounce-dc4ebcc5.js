var v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function F(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var G=F,B=typeof v=="object"&&v&&v.Object===Object&&v,D=B,U=D,H=typeof self=="object"&&self&&self.Object===Object&&self,X=U||H||Function("return this")(),L=X,q=L,z=function(){return q.Date.now()},J=z,K=/\s/;function Q(e){for(var t=e.length;t--&&K.test(e.charAt(t)););return t}var V=Q,Y=V,Z=/^\s+/;function ee(e){return e&&e.slice(0,Y(e)+1).replace(Z,"")}var te=ee,re=L,ne=re.Symbol,N=ne,h=N,P=Object.prototype,ie=P.hasOwnProperty,oe=P.toString,m=h?h.toStringTag:void 0;function ae(e){var t=ie.call(e,m),i=e[m];try{e[m]=void 0;var o=!0}catch{}var f=oe.call(e);return o&&(t?e[m]=i:delete e[m]),f}var fe=ae,ce=Object.prototype,ue=ce.toString;function se(e){return ue.call(e)}var de=se,I=N,le=fe,be=de,me="[object Null]",ge="[object Undefined]",x=I?I.toStringTag:void 0;function ve(e){return e==null?e===void 0?ge:me:x&&x in Object(e)?le(e):be(e)}var ye=ve;function Te(e){return e!=null&&typeof e=="object"}var je=Te,pe=ye,Se=je,Oe="[object Symbol]";function $e(e){return typeof e=="symbol"||Se(e)&&pe(e)==Oe}var _e=$e,he=te,w=G,Ie=_e,E=0/0,xe=/^[-+]0x[0-9a-f]+$/i,we=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,ke=parseInt;function Ge(e){if(typeof e=="number")return e;if(Ie(e))return E;if(w(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=w(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=he(e);var i=we.test(e);return i||Ee.test(e)?ke(e.slice(2),i?2:8):xe.test(e)?E:+e}var Le=Ge,Ne=G,p=J,k=Le,Pe="Expected a function",Re=Math.max,We=Math.min;function Ce(e,t,i){var o,f,s,u,n,c,d=0,S=!1,l=!1,y=!0;if(typeof e!="function")throw new TypeError(Pe);t=k(t)||0,Ne(i)&&(S=!!i.leading,l="maxWait"in i,s=l?Re(k(i.maxWait)||0,t):s,y="trailing"in i?!!i.trailing:y);function T(r){var a=o,b=f;return o=f=void 0,d=r,u=e.apply(b,a),u}function R(r){return d=r,n=setTimeout(g,t),S?T(r):u}function W(r){var a=r-c,b=r-d,_=t-a;return l?We(_,s-b):_}function O(r){var a=r-c,b=r-d;return c===void 0||a>=t||a<0||l&&b>=s}function g(){var r=p();if(O(r))return $(r);n=setTimeout(g,W(r))}function $(r){return n=void 0,y&&o?T(r):(o=f=void 0,u)}function C(){n!==void 0&&clearTimeout(n),d=0,o=c=f=n=void 0}function M(){return n===void 0?u:$(p())}function j(){var r=p(),a=O(r);if(o=arguments,f=this,c=r,a){if(n===void 0)return R(c);if(l)return clearTimeout(n),n=setTimeout(g,t),T(c)}return n===void 0&&(n=setTimeout(g,t)),u}return j.cancel=C,j.flush=M,j}var Me=Ce;const Ae=A(Me);export{Ae as _};
