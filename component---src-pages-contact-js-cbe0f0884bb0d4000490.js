(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),s=a("Bl7J"),i=a("vrFN");var o=a("dI71"),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}Object(o.a)(t,e);var a=t.prototype;return a.render=function(){var e=this.state.status;return r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/mpzyybaz",method:"POST"},r.a.createElement("label",null,"Your email:"),r.a.createElement("input",{type:"email",name:"email",required:!0,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"Message:"),r.a.createElement("textarea",{name:"message",required:!0,style:{width:"100%",height:"300px",verticalAlign:"text-top"}}),"SUCCESS"===e?r.a.createElement("p",null,"Thanks!"):r.a.createElement("button",null,"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error."))},a.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)},t}(r.a.Component);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"contact"}),r.a.createElement("h1",null,"Contact me"),r.a.createElement(u,null),r.a.createElement(l.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-cbe0f0884bb0d4000490.js.map