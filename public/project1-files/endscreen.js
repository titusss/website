(function(g){var window=this;var p4=function(a,b,c){var d=b.ua();g.L(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.kc(c?c:"mqdefault.jpg");var f=b instanceof g.$B&&b.lengthSeconds?g.NL(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.RD(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.$B?b.ra:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.fj||g.xM("$TITLE ansehen",{TITLE:b.title}),duration:f,url:b.Yh(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.TD&&(d.playlist_length=b.getLength());a.update(d)},q4=function(a,b){g.Qu.call(this,{F:"div",
X:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},r4=function(a){g.W.call(this,{F:"div",
X:["ytp-upnext","ytp-player-content"],N:{"aria-label":"{{aria_label}}"},L:[{F:"div",I:"ytp-cued-thumbnail-overlay-image",N:{style:"{{background}}"}},{F:"span",I:"ytp-upnext-top",L:[{F:"span",I:"ytp-upnext-header",W:"N\u00e4chstes Video"},{F:"span",I:"ytp-upnext-title",W:"{{title}}"},{F:"span",I:"ytp-upnext-author",W:"{{author}}"}]},{F:"a",I:"ytp-upnext-autoplay-icon",N:{role:"button",href:"{{url}}","aria-label":"N\u00e4chstes Video starten"},L:[{F:"svg",N:{height:"100%",version:"1.1",viewBox:"0 0 72 72",
width:"100%"},L:[{F:"circle",I:"ytp-svg-autoplay-circle",N:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{F:"circle",I:"ytp-svg-autoplay-ring",N:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{F:"path",I:"ytp-svg-fill",N:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{F:"span",I:"ytp-upnext-bottom",L:[{F:"span",I:"ytp-upnext-cancel"},{F:"span",I:"ytp-upnext-paused",
W:"Autoplay ist pausiert"}]}]});this.C=null;var b=this.u["ytp-upnext-cancel"];this.C=new g.W({F:"button",X:["ytp-upnext-cancel-button","ytp-button"],N:{tabindex:"0","aria-label":"Autoplay abbrechen"},W:"Abbrechen"});g.H(this,this.C);this.C.ga("click",this.OH,this);this.C.o(b);this.w=a;this.K=this.u["ytp-svg-autoplay-ring"];this.G=this.D=this.A=this.B=null;this.H=new g.J(this.Il,5E3,this);g.H(this,this.H);this.J=0;this.M(this.u["ytp-upnext-autoplay-icon"],"click",this.AJ);this.Qx();this.M(a,"autonavvisibility",
this.Qx);this.M(a,"mdxnowautoplaying",this.TI);this.M(a,"mdxautoplaycanceled",this.UI);this.M(a,"mdxautoplayupnext",this.fA);3==this.w.getPresentingPlayerType()&&(a=(a=g.HK(g.AK(this.w)))?a.xC():null)&&this.fA(a)},s4=function(a,b){if(!a.A){g.Lo("a11y-announce","N\u00e4chstes Video "+a.B.title);
a.J=(0,g.Kq)();a.A=new g.J((0,g.x)(a.Ko,a,b),25);a.Ko(b);var c=b||g.S(a.w.O().experiments,"autoplay_time")||1E4;a.w.ka("onAutonavCoundownStarted",c)}g.kn(a.element,"ytp-upnext-autoplay-paused")},u4=function(a){t4(a);
a.J=(0,g.Kq)();a.Ko();g.K(a.element,"ytp-upnext-autoplay-paused")},t4=function(a){a.A&&(a.A.dispose(),a.A=null)},v4=function(a,b){b=void 0===b?!1:b;
if(g.R(a.w.O().experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.B.ua(),a.Il(),a.D=new Notification("N\u00e4chstes Video",{body:c.title,icon:c.kc()}),a.G=a.M(a.D,"click",a.rJ),a.H.start())}t4(a);a.w.nextVideo(!1,b)},w4=function(a){q4.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.w=new g.W({F:"div",I:"ytp-subscribe-card",L:[{F:"img",I:"ytp-author-image",N:{src:b.Md}},{F:"div",I:"ytp-subscribe-card-right",L:[{F:"div",I:"ytp-author-name",W:b.author},{F:"div",I:"html5-subscribe-button-container"}]}]});g.H(this,this.w);this.w.o(this.element);this.A=new g.OQ("Abonnieren",null,"Abo beenden",null,!0,!1,b.Kf,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.A);this.A.o(this.w.u["html5-subscribe-button-container"]);this.hide()},x4=function(a){var b=
a.O(),c=g.Xs||g.dg?{style:"will-change: opacity"}:void 0,d=b.u,e=["ytp-videowall-still"];
b.o&&e.push("ytp-videowall-show-text");g.W.call(this,{F:"a",X:e,N:{href:"{{url}}",target:d?b.A:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},L:[{F:"div",I:"ytp-videowall-still-image",N:{style:"{{background}}"}},{F:"span",I:"ytp-videowall-still-info",L:[{F:"span",I:"ytp-videowall-still-info-bg",L:[{F:"span",I:"ytp-videowall-still-info-content",N:c,L:[{F:"span",I:"ytp-videowall-still-info-title",W:"{{title}}"},{F:"span",I:"ytp-videowall-still-info-author",
W:"{{author_and_views}}"},{F:"span",I:"ytp-videowall-still-info-live",W:"Live"},{F:"span",I:"ytp-videowall-still-info-duration",W:"{{duration}}"}]}]}]},{F:"span",X:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],L:[{F:"span",I:"ytp-videowall-still-listlabel-icon"},"Playlist",{F:"span",I:"ytp-videowall-still-listlabel-length",L:[" (",{F:"span",W:"{{playlist_length}}"},")"]}]},{F:"span",X:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],L:[{F:"span",I:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{F:"span",I:"ytp-videowall-still-listlabel-length",W:" (50+)"}]}]});this.C=d;this.w=a;this.A=null;this.B=new g.Q(this);g.H(this,this.B);this.ga("click",this.G);this.ga("keypress",this.H);this.B.M(a,"videodatachange",this.D);g.aL(a,this.element,this);this.D()},y4=function(a){g.cL(a.w,a.element);
var b=a.A.ua().videoId,c=a.A.getPlaylistId();g.mT(a.w.app,b,a.A.Fb,c,void 0,void 0)},z4=function(a){q4.call(this,a,"videowall-endscreen");
this.G=a;this.D=0;this.A=[];this.H=this.S=this.C=null;this.J=this.V=!1;this.T=null;this.B=new g.Q(this);g.H(this,this.B);this.K=new g.J(g.Na(g.K,this.element,"ytp-show-tiles"),0);g.H(this,this.K);var b=new g.W({F:"button",X:["ytp-button","ytp-endscreen-previous"],N:{"aria-label":"Vorheriges"},L:[g.VL()]});g.H(this,b);b.o(this.element);b.ga("click",this.dF,this);this.P=new g.Ku({F:"div",I:"ytp-endscreen-content"});g.H(this,this.P);this.P.o(this.element);b=new g.W({F:"button",X:["ytp-button","ytp-endscreen-next"],
N:{"aria-label":"Weiter"},L:[g.WL()]});g.H(this,b);b.o(this.element);b.ga("click",this.cF,this);this.w=new r4(a);g.H(this,this.w);g.YK(this.player,this.w.element,4);this.hide()},A4=function(a){return g.ZK(a.player)&&a.Tt()&&!a.H},B4=function(a,b){return(0,g.ee)(b.suggestions,function(c){c=g.yM(a.G.O(),c);
g.H(a,c);return c})},C4=function(a){var b=a.Hq();
b!=a.V&&(a.V=b,a.player.R("autonavvisibility"))},E4=function(a){g.CP.call(this,a);
this.o=null;this.u=new g.Q(this);g.H(this,this.u);this.w=a.O();D4(a)?this.o=new z4(this.player):this.w.Ga?this.o=new w4(this.player):this.o=new q4(this.player);g.H(this,this.o);g.YK(this.player,this.o.element,4);this.kz();this.u.M(a,"videodatachange",this.kz,this);this.u.M(a,g.QD("endscreen"),this.jE,this);this.u.M(a,"crx_endscreen",this.kE,this)},D4=function(a){a=a.O();
return a.Ba&&!a.Ga};
g.r(q4,g.Qu);q4.prototype.create=function(){this.created=!0};
q4.prototype.destroy=function(){this.created=!1};
q4.prototype.Tt=function(){return!1};
q4.prototype.Hq=function(){return!1};g.r(r4,g.W);g.h=r4.prototype;g.h.Il=function(){this.D&&(this.H.stop(),this.Ta(this.G),this.G=null,this.D.close(),this.D=null)};
g.h.Qx=function(){g.Pu(this,g.BK(this.w))};
g.h.rJ=function(){window.focus();this.Il()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Ko=function(a){a=a||g.S(this.w.O().experiments,"autoplay_time")||1E4;var b=Math.min((0,g.Kq)()-this.J,a);a=Math.min(b/a,1);this.K.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.w.getPresentingPlayerType()?v4(this,!0):this.A&&this.A.start()};
g.h.AJ=function(a){!g.Wd(this.C.element,g.$q(a))&&g.FM(a,this.w)&&v4(this)};
g.h.OH=function(){g.DK(this.w,!0)};
g.h.TI=function(a){this.w.getPresentingPlayerType();this.show();s4(this,a)};
g.h.fA=function(a){this.w.getPresentingPlayerType();this.B&&this.B.ua().videoId==a.ua().videoId||(this.B=a,p4(this,a,"hqdefault.jpg"))};
g.h.UI=function(){this.w.getPresentingPlayerType();t4(this);this.hide()};
g.h.Y=function(){t4(this);this.Il();g.W.prototype.Y.call(this)};g.r(w4,q4);g.r(x4,g.W);x4.prototype.G=function(a){g.FM(a,this.w,this.C,this.A.Fb||void 0)&&y4(this)};
x4.prototype.H=function(a){switch(a.keyCode){case 13:case 32:g.er(a)||(y4(this),g.dr(a))}};
x4.prototype.D=function(){var a=this.w.getVideoData(),b=this.w.O();this.C=a.ac?!1:b.u};g.r(z4,q4);g.h=z4.prototype;g.h.create=function(){q4.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.C=B4(this,a),this.S=a);this.If();this.B.M(this.player,"appresize",this.If);this.B.M(this.player,"onVideoAreaChange",this.If);this.B.M(this.player,"videodatachange",this.eF);this.B.M(this.player,"autonavchange",this.Iq);this.B.M(this.player,"autonavcancel",this.bF);a=this.S.autonavState;a!=this.T&&this.Iq(a);this.B.M(this.element,"transitionend",this.QK)};
g.h.destroy=function(){g.et(this.B);g.Bi(this.A);this.A=[];this.C=null;q4.prototype.destroy.call(this);g.kn(this.element,"ytp-show-tiles");this.K.stop();this.T=this.S.autonavState};
g.h.Tt=function(){return 1!=this.S.autonavState};
g.h.show=function(){q4.prototype.show.call(this);g.kn(this.element,"ytp-show-tiles");this.player.O().o?g.$m(this.K):this.K.start();(this.J||this.H&&this.H!=this.S.clientPlaybackNonce)&&g.DK(this.player,!1);A4(this)?(C4(this),2==this.S.autonavState?g.R(this.player.O().experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?v4(this.w,!0):s4(this.w):3==this.S.autonavState&&u4(this.w)):(g.DK(this.player,!0),C4(this))};
g.h.hide=function(){q4.prototype.hide.call(this);u4(this.w);C4(this)};
g.h.QK=function(a){g.$q(a)==this.element&&this.If()};
g.h.If=function(){if(this.C&&this.C.length){g.K(this.element,"ytp-endscreen-paginate");var a=g.PK(this.G,!0,this.G.isFullscreen()),b=g.gD(this.G);b&&(b=b.Zb()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,t=e/2,v=b<=f-2&&n>=t*m,y=e<=k-2&&n>=q*m;if((q+1)/t*d/c>c/(q/(t+1)*d)&&y)n-=q*m,e+=2;else if(v)n-=t*m,b+=2;else if(y)n-=
q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.ld(a.width/m||1,1,1.21);n*=g.ld(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.P.element;g.sg(a,m,n);g.ag(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.w;f=this.C[0];c.B=f;p4(c,f,"hqdefault.jpg");g.L(this.element,"ytp-endscreen-takeover",A4(this));C4(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=
c,t=0,d&&f>=b-2&&k>=e-2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),q=g.md(q+this.D,l),0!=t){v=this.A[c];v||(v=new x4(this.player),this.A[c]=v,a.appendChild(v.element));y=Math.floor(n*k/e);var C=Math.floor(m*f/b),B=Math.floor(n*(k+t)/e)-y-4,G=Math.floor(m*(f+t)/b)-C-4;g.ig(v.element,C,y);g.sg(v.element,G,B);g.ag(v.element,"transitionDelay",(k+f)/20+"s");g.L(v.element,"ytp-videowall-still-mini",1==t);g.L(v.element,"ytp-videowall-still-large",2<t);t=v;q=this.C[q];t.A!=q&&(t.A=q,p4(t,q,g.hn(t.element,
"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg"),(q=(q=q.Fb)&&q.itct)&&g.bL(t.w,t.element,q));c++}g.L(this.element,"ytp-endscreen-paginate",c<l);for(b=this.A.length-1;b>=c;b--)e=this.A[b],g.Sd(e.element),g.yi(e);this.A.length=c}};
g.h.eF=function(){var a=this.player.getVideoData();this.S!=a&&(this.D=0,this.C=B4(this,a),this.S=a,this.If())};
g.h.cF=function(){this.D+=this.A.length;this.If()};
g.h.dF=function(){this.D-=this.A.length;this.If()};
g.h.AD=function(){return!!this.w.A};
g.h.Iq=function(a){1==a?(this.J=!1,this.H=this.S.clientPlaybackNonce,t4(this.w),this.Ha()&&this.If()):(this.J=!0,this.Ha()&&A4(this)&&(2==a?s4(this.w):3==a&&u4(this.w)))};
g.h.bF=function(a){if(a){for(a=0;a<this.A.length;a++)g.dL(this.G,this.A[a].element,!0);this.Iq(1)}else this.H=null,this.J=!1;this.If()};
g.h.Hq=function(){return this.Ha()&&A4(this)};g.r(E4,g.CP);g.h=E4.prototype;g.h.Ew=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!D4(this.player)||b;a=a.Ih||g.hz(a.Oa);var c=g.IS(this.player.app);return b&&!a&&!c};
g.h.Dw=function(){return this.o.Hq()};
g.h.sD=function(){return this.Dw()?this.o.AD():!1};
g.h.Y=function(){g.IQ(this.player.app,"endscreen",void 0);g.CP.prototype.Y.call(this)};
g.h.load=function(){g.CP.prototype.load.call(this);this.o.show()};
g.h.unload=function(){g.CP.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.jE=function(a){this.Ew()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.kE=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.kz=function(){g.IQ(this.player.app,"endscreen",void 0);var a=this.player.getVideoData();a=new g.ND(Math.max(1E3*(a.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});g.H(this,a);var b=new g.ND(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.H(this,b);g.UK(this.player,[a,b])};g.RP.endscreen=E4;})(_yt_player);
