(this["webpackJsonpreact-qrscanners"]=this["webpackJsonpreact-qrscanners"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(17),n(4)),s=n(2),l=n(9),u=n(8),d=n(11),p=(n(18),n(19),n(10)),m=n(5);m.a.WORKER_PATH="./qr-scanner-worker.min.js";var f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={page:1},n.createScanner=function(){n.videoElem&&(n.qrScanner=new m.a(n.videoElem,(function(e){return n.setState({code:e})})),n.qrScanner.start())},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.page!=this.state.page&&3!==this.state.page&&this.qrScanner&&(this.qrScanner.destroy(),this.qrScanner=null)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:function(){return window.location.href="/index.html"}},"Back To Index"),r.a.createElement("button",{onClick:function(){return e.setState({page:2,code:""})}},"reactive-qr"),r.a.createElement("button",{onClick:function(){return e.setState({page:3,code:""})}},"QrScanner"),2==this.state.page&&r.a.createElement("div",null,r.a.createElement(p.a,{onCode:function(t){return e.setState({code:t})}}),r.a.createElement("span",null,"QrCode : ",this.state.code)),3==this.state.page&&r.a.createElement("div",null,r.a.createElement("video",{ref:function(t){e.videoElem=t,e.createScanner()}}),r.a.createElement("span",null,"QrCode : ",this.state.code)))}}]),t}(r.a.Component);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1f980b40.chunk.js.map