(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-629724b9"],{"2e26":function(e,r,t){},"73cf":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register-root"},[t("div",[t("div",{staticClass:"logo-font"}),t("div",[t("form",{on:{submit:function(r){return r.preventDefault(),e.register(r)}}},[t("div",[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input-default",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(r){r.target.composing||(e.email=r.target.value)}}})]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"username",staticClass:"input-default",attrs:{type:"text",placeholder:"玩家名稱"},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}})]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input-default",attrs:{type:"password",placeholder:"密碼"},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkpassword,expression:"checkpassword"}],staticClass:"input-default",attrs:{type:"password",placeholder:"密碼確認"},domProps:{value:e.checkpassword},on:{input:function(r){r.target.composing||(e.checkpassword=r.target.value)}}})]),t("p",[e._v("密碼請使用多於 6 個字的英文字母或數字")]),t("button",{staticClass:"button-default",attrs:{type:"submit"}},[e._v("註冊")]),e._m(0)])]),t("div",[t("div",[t("router-link",{attrs:{tag:"span",to:"/login"}},[e._v("已經有帳號了？點我登入")])],1),t("span",{ref:"usernameCopy",attrs:{id:"usernameCopy"}})])]),e.isError?t("error-message",{attrs:{errorMsg:e.errorMsg}}):e._e()],1)])},a=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("點擊註冊的同時，代表您同意 Kyronus "),t("br"),e._v("的"),t("a",{attrs:{href:"#"}},[e._v("資料使用政策與使用條款")])])}],n=(t("96cf"),t("3b8d")),i=t("cebc"),o=t("8e27"),u=t("2f62"),p={components:{ErrorMessage:o["a"]},data:function(){return{email:"",username:"",password:"",checkpassword:"",isError:!1,errorMsg:"",message:{400:"輸入含不合法字元",406:"信箱已註冊過，請選擇新的信箱"}}},methods:Object(i["a"])({},Object(u["d"])("user",["SET_ISLOADING"]),{register:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!(this.textSize(this.$refs.username.value)>84)){e.next=4;break}return this.displayError("玩家名稱過長，請縮減字數"),e.abrupt("return");case 4:if(""!==this.email){e.next=7;break}return this.displayError("請輸入信箱"),e.abrupt("return");case 7:if(""!==this.username){e.next=10;break}return this.displayError("請輸入使用者名稱"),e.abrupt("return");case 10:if(""!==this.password){e.next=13;break}return this.displayError("請輸入密碼"),e.abrupt("return");case 13:if(!(this.password.length<6)){e.next=16;break}return this.displayError("密碼請設置至少6個字母或數字"),e.abrupt("return");case 16:if(this.password===this.checkpassword){e.next=19;break}return this.displayError("密碼與確認密碼不一致！"),e.abrupt("return");case 19:return e.next=21,this.$store.dispatch("user/register",{email:this.email,password:this.password,username:this.username});case 21:this.$router.push("/home"),e.next=29;break;case 24:e.prev=24,e.t0=e["catch"](0),logger.info(e.t0.response),logger.info("進入catch"),this.displayError(this.message[e.t0.response.status]);case 29:case"end":return e.stop()}},e,this,[[0,24]])}));function r(){return e.apply(this,arguments)}return r}(),textSize:function(e){var r;return"undefined"!==typeof this.$refs.usernameCopy.textContent?this.$refs.usernameCopy.textContent=e:this.$refs.usernameCopy.innerText=e,logger.info(window.getComputedStyle(this.$refs.usernameCopy).width),r=parseFloat(window.getComputedStyle(this.$refs.usernameCopy).width),r},displayError:function(e){var r=this;r.errorMsg=e,r.isError=!0,setTimeout(function(){r.isError=!1},2e3)}})},c=p,l=(t("8f6ea"),t("2877")),d=Object(l["a"])(c,s,a,!1,null,"385e27da",null);r["default"]=d.exports},"8f6ea":function(e,r,t){"use strict";var s=t("2e26"),a=t.n(s);a.a}}]);
//# sourceMappingURL=chunk-629724b9.3cca0c61.js.map