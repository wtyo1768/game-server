(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba14b1a"],{"0e95":function(e,n,t){},"4f31":function(e,n,t){"use strict";var s=t("d472"),i=t.n(s);i.a},"5ecf":function(e,n,t){e.exports=t.p+"img/story-12.67462d5f.png"},bfbd:function(e,n,t){e.exports=t.p+"img/story-13.99b2e7d4.png"},d472:function(e,n,t){},d477:function(e,n,t){"use strict";var s=t("0e95"),i=t.n(s);i.a},ea83:function(e,n,t){e.exports=t.p+"img/story-10.b53da642.png"},f812:function(e,n,t){e.exports=t.p+"img/story-11.e7aa9ee6.png"},fb0d:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"game-root"}},[e.isOnBuildMode?e._e():t("user-panel",{attrs:{user:e.user,planet:e.planet,mode:"Game"},on:{openModal:e.openModal}}),e.isOnBuildMode||e.isSelectBuilding?e.isSelectBuilding?t("building-info",{attrs:{building:e.selectedBuilding},on:{openModal:e.openModal,close:e.close}}):e._e():t("feature-menu",{staticClass:"feature-menu",attrs:{isModalOpen:!e.isModalOpen},on:{openModal:e.openModal}}),t("transition",{attrs:{name:"modal"}},[e.isModalOpen?t("modal-card",{on:{close:e.close}},["user-profile"===e.currentOpen?t("user-profile",{attrs:{slot:"card",user:e.user},slot:"card"}):e._e(),"星球資訊"===e.currentOpen?t("planet-info",{attrs:{slot:"card",user:e.user,planet:e.planet},slot:"card"}):e._e(),"建築升級"===e.currentOpen?t("building-upgrade",{attrs:{slot:"card",building:e.selectedBuilding},slot:"card"}):e._e(),"建築功能"===e.currentOpen?t("building-feature",{attrs:{slot:"card",building:e.selectedBuilding,user:e.user,planet:e.planet},on:{nextScenes:e.nextScenes},slot:"card"}):e._e(),"建造頁面"===e.currentOpen?t("building",{attrs:{slot:"card",user:e.user,planet:e.planet},on:{onBuildMode:e.onBuildMode},slot:"card"}):e._e(),"資源頁面"===e.currentOpen?t("warehouse",{attrs:{slot:"card",user:e.user},slot:"card"}):e._e(),"任務頁面"===e.currentOpen?t("mission",{attrs:{slot:"card",user:e.user,planet:e.planet},slot:"card"}):e._e()],1):e._e()],1),e.isOnBuildMode?t("build-mode",{attrs:{building:e.chooseBuilding},on:{build:e.close}}):e._e(),"故事"===e.actions[e.currentScenes]?t("Story",{attrs:{currentScenes:e.currentScenes},on:{nextScenes:e.nextScenes}}):t("Dialog",{attrs:{planet:e.planet,currentScenes:e.currentScenes},on:{nextScenes:e.nextScenes}})],1)},i=[],r=t("cebc"),c=(t("96cf"),t("3b8d")),o=t("5683"),u=t("2a61"),a=t("fabc"),l=t("fde0"),d=t("c3bb"),p=t("2995"),f=t("cd0a"),h=t("ea8d"),g=t("9f25"),b=t("a3eb"),S=t("8e2c"),m=t("1dbd"),B=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"beginner-guide-root"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[41===e.currentScenes?s("div",{key:"scene40",style:{"background-image":"url("+t("ea83")+")"},on:{click:e.nextScenes}},[s("p",[e._v("人類開始定居於各星球中，"),s("br"),e._v("然而過了數年之後，"),s("br"),e._v("發現外太空資源匱乏")])]):e._e(),42===e.currentScenes?s("div",{key:"scene41",style:{"background-image":"url("+t("f812")+")"},on:{click:e.nextScenes}},[s("p",{style:{color:"#EEEEEE"}},[e._v("此時科學家透過望遠鏡觀測到"),s("br"),e._v("地球上的波波拉漸漸消退...")])]):e._e(),43===e.currentScenes?s("div",{key:"scene42",style:{"background-image":"url("+t("5ecf")+")"},on:{click:e.nextScenes}},[s("p",{style:{color:"#EEEEEE"}},[e._v("走投無路的人類，"),s("br"),e._v("決定鋌而走險，回到地球採集資源")])]):e._e(),44===e.currentScenes?s("div",{key:"scene43",style:{"background-image":"url("+t("bfbd")+")"},on:{click:e.nextScenes}},[s("p",[e._v("慶幸的是，波波拉狀態趨於穩定，"),s("br"),e._v("雖然有些地區的波波拉仍然失控，"),s("br"),e._v("但只要是波波拉穩定的區域，"),s("br"),e._v("人類皆可採集資源")])]):e._e()])],1)},_=[],O=(t("c5f6"),{props:{currentScenes:Number},methods:{nextScenes:function(){this.$emit("nextScenes","故事")}},computed:{}}),M=O,x=(t("d477"),t("2877")),v=Object(x["a"])(M,B,_,!1,null,"6d7a54f9",null),E=v.exports,y=t("fb32"),$=t("2f62"),k=t("e264"),w={name:"Game",components:{FeatureMenu:u["a"],UserPanel:o["a"],ModalCard:a["a"],UserProfile:l["a"],Building:d["b"],BuildMode:p["a"],BuildingInfo:f["a"],BuildingUpgrade:h["a"],Warehouse:g["a"],Mission:b["a"],BuildingFeature:S["a"],Dialog:m["a"],Story:E,PlanetInfo:y["a"]},data:function(){return{isModalOpen:!1,currentOpen:"",downloaded:!1,isOnBuildMode:!1,module:null,module_2:null,isSelectBuilding:!1,selectedBuilding:"",chooseBuilding:"",actions:k.actions}},mounted:function(){var e=this;this.$store.watch(function(e,n){return n},function(n,t){e.isSelectBuilding=n["planet/getIsSelectBuilding"],e.selectedBuilding=n["planet/getBuildElement"],e.actions[e.currentScenes]!==e.selectedBuilding.status?e.actions[e.currentScenes]==="點擊"+e.selectedBuilding.name_zh&&e.nextScenes("點擊"+e.selectedBuilding.name_zh):e.nextScenes(e.selectedBuilding.status)},{deep:!0})},created:function(){var e=this;Promise.resolve().then(t.bind(null,"3fa0")).then(function(){var n=Object(c["a"])(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:e.module=t;case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()),t.e("chunk-2d0c20e8").then(t.bind(null,"494a")).then(function(){var n=Object(c["a"])(regeneratorRuntime.mark(function n(t){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:e.module_2=t;case 1:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()),this.$bus.$on("openModal",this.openModal),this.$bus.$on("nextScenes",this.nextScenes),this.$bus.$on("close",this.close)},computed:Object(r["a"])({},Object($["e"])("user",{user:function(e){return e}}),Object($["e"])("planet",{planet:function(e){return e.planet}}),Object($["c"])("user",{currentScenes:"getCurrentBeginnerGuideScenes"})),methods:Object(r["a"])({},Object($["d"])("user",["NEXT_SCENES"]),Object($["b"])("user",["completeBeginner"]),{nextScenes:function(e){var n=this;return console.log(e,this.actions[this.currentScenes]),this.actions[this.currentScenes]===e?"儲存"===this.actions[this.currentScenes+1]?(console.log("儲存",this.currentScenes),this.NEXT_SCENES(),this.$store.dispatch("user/nextScenes"),!0):(this.NEXT_SCENES(),!0):("完成"===this.actions[this.currentScenes]&&this.completeBeginner().then(function(){n.$router.push("/game")}),!1)},openModal:function(e){this.nextScenes(e)&&(this.isModalOpen=!0,this.isOnBuildMode=!1,this.currentOpen=e)},close:function(){this.isModalOpen=!1,this.isOnBuildMode=!1,this.module.gameFunction.setIsOnBuildMode(!1),this.$store.commit("planet/SET_ISSELECTBUILDING",!1),this.nextScenes("離開")},onBuildMode:function(e){this.nextScenes("建造該建築")&&(this.chooseBuilding=e,this.isModalOpen=!1,this.isOnBuildMode=!0)}}),watch:{isModalOpen:function(){this.module.gameFunction.scene.input.manager.enabled=!this.isModalOpen}},beforeDestroy:function(){this.$bus.$off("openModal",this.openModal),this.$bus.$off("nextScenes",this.nextScenes),this.$bus.$off("close",this.close)}},j=w,C=(t("4f31"),Object(x["a"])(j,s,i,!1,null,"51010cd8",null));n["default"]=C.exports}}]);
//# sourceMappingURL=chunk-7ba14b1a.4a9c32c8.js.map