(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8223be60"],{a55b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-root"},[r("div",[r("div",{staticClass:"logo-font"}),r("div",[r("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("div",[r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input-default",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-default",attrs:{type:"password",placeholder:"密碼"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"button-default",attrs:{type:"submit"}},[t._v("登入")]),r("div",[r("router-link",{attrs:{tag:"span",to:"/register"}},[t._v("尚未擁有帳號？註冊新帳號")])],1)])]),t._m(0)]),t.isError?r("error-message",{attrs:{errorMsg:t.errorMsg}}):t._e()],1)])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("- 其他方式 -")]),r("button",{attrs:{type:"button"}},[t._v("以 Facebook 帳號繼續")]),r("button",{attrs:{type:"button"}},[t._v("以 Google 帳號繼")])])}],i=(r("96cf"),r("3b8d")),n=r("cebc"),o=r("8e27"),u=r("2f62"),l={components:{ErrorMessage:o["a"]},data:function(){return{email:"",password:"",isError:!1,errorMsg:"",message:{401:"帳號或密碼錯誤",403:"Email沒有經過認證",404:"帳號不存在"}}},methods:Object(n["a"])({},Object(u["d"])("user",["SET_ISLOADING"]),{login:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,""!==this.email){t.next=4;break}return this.displayError("請輸入信箱"),t.abrupt("return");case 4:if(""!==this.password){t.next=7;break}return this.displayError("請輸入密碼"),t.abrupt("return");case 7:return t.next=9,this.$store.dispatch("user/login",{email:this.email,password:this.password});case 9:this.$router.push("/home"),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),this.displayError(this.message[t.t0.response.status]);case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}(),displayError:function(t){var e=this;e.errorMsg=t,e.isError=!0,setTimeout(function(){e.isError=!1},2e3)}})},c=l,p=(r("f06e"),r("2877")),d=Object(p["a"])(c,s,a,!1,null,"2adeb486",null);e["default"]=d.exports},bb694:function(t,e,r){},f06e:function(t,e,r){"use strict";var s=r("bb694"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-8223be60.e9be0963.js.map