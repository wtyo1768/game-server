(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41a2c06e"],{"0515":function(e,t,i){e.exports=i.p+"img/windmill-spawn.b8123b04.png"},"0964":function(e,t,i){e.exports=i.p+"img/resource-transfer-work.5befd76a.png"},1389:function(e,t,i){e.exports=i.p+"img/resource-transfer-spawn.f78490e0.png"},"2b48":function(e,t,i){e.exports=i.p+"img/blue.431b99d2.png"},"34c0":function(e,t,i){e.exports=i.p+"img/stone-portal-work.b00ccee9.png"},"3db3":function(e,t,i){e.exports=i.p+"img/windmill-work.e6921780.png"},4374:function(e,t,i){e.exports=i.p+"img/build-process-1x1.64933f14.png"},"541d":function(e,t,i){e.exports=i.p+"img/power-plant-spawn.c5de4421.png"},"5fc1":function(e,t,i){e.exports=i.p+"media/bgm.51d81465.mp3"},6766:function(e,t,i){e.exports=i.p+"img/green-house-work.414783c3.png"},6836:function(e,t,i){e.exports=i.p+"img/planet-1-light.0f685b57.png"},"684d":function(e,t,i){e.exports=i.p+"img/warehouse-spawn.e101b33a.png"},"68cf":function(e,t,i){e.exports=i.p+"img/green-house-spawn.4943af6f.png"},"6c37":function(e,t,i){e.exports=i.p+"img/tile-1.855ebb9a.png"},"8fd0":function(e,t,i){"use strict";i.r(t);var a,n,s,o=i("64b8"),r=i.n(o),h=i("d225"),c=i("b0b4"),m=i("308d"),d=i("6bb5"),p=i("4e2b"),l=i("9b7f"),u=i.n(l),f=i("edcf"),g=i.n(f),b=i("6836"),w=i.n(b),x=i("697a"),y=i.n(x),v=i("2b48"),k=i.n(v),O=i("5fc1"),H=i.n(O),W=i("b1c3"),F=i.n(W),P=i("6c37"),T=i.n(P),j=i("4374"),z=i.n(j),S=i("c4e6"),X=i.n(S),Y=i("f1e5"),E=i.n(Y),M=i("34c0"),C=i.n(M),B=i("0515"),G=i.n(B),I=i("3db3"),D=i.n(I),J=i("541d"),A=i.n(J),Q=i("ae41"),Z=i.n(Q),U=i("68cf"),V=i.n(U),q=i("6766"),K=i.n(q),L=i("1389"),N=i.n(L),R=i("0964"),$=i.n(R),_=i("684d"),ee=i.n(_),te=i("97cf"),ie=i.n(te),ae=i("a0ea"),ne=i.n(ae),se=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(d["a"])(t).call(this,{key:"BootScene"}))}return Object(p["a"])(t,e),Object(c["a"])(t,[{key:"preload",value:function(){this.load.audio("bgm",H.a),this.load.image("Star",k.a),this.load.image("bg",u.a),this.load.image("planet-1",g.a),this.load.image("planet-2",y.a),this.load.image("planet-1-light",w.a),this.load.spritesheet("car",F.a,{frameWidth:72,frameHeight:72}),this.load.image("tiles",T.a),this.load.spritesheet("buildProcess1x1ing",z.a,{frameWidth:192,frameHeight:300}),this.load.spritesheet("buildCompleted1x1ing",X.a,{frameWidth:192,frameHeight:300}),this.load.spritesheet("stonePortal",E.a,{frameWidth:192,frameHeight:192}),this.load.spritesheet("stonePortaling",C.a,{frameWidth:192,frameHeight:192}),this.load.spritesheet("windmill",G.a,{frameWidth:192,frameHeight:220}),this.load.spritesheet("windmilling",D.a,{frameWidth:192,frameHeight:222.5}),this.load.spritesheet("powerPlant",A.a,{frameWidth:192,frameHeight:220,startFrame:0,endFrame:22}),this.load.spritesheet("powerPlanting",Z.a,{frameWidth:192,frameHeight:220,startFrame:0,endFrame:65}),this.load.spritesheet("greenHouse",V.a,{frameWidth:288,frameHeight:240}),this.load.spritesheet("greenHouseing",K.a,{frameWidth:288,frameHeight:240}),this.load.spritesheet("resourceTransfer",N.a,{frameWidth:288,frameHeight:300}),this.load.spritesheet("resourceTransfering",$.a,{frameWidth:288,frameHeight:300}),this.load.spritesheet("warehouse",ee.a,{frameWidth:192,frameHeight:192}),this.load.spritesheet("warehouseing",ie.a,{frameWidth:192,frameHeight:192}),this.load.image("hadesTemple",ne.a)}},{key:"create",value:function(){this.scene.start("PlanetScene")}}]),t}(o["Scene"]),oe=i("3fa0"),re=i("80cd"),he=i("e22e"),ce=[],me={scale:8,buildingMap:[{id:"c0",name:"windmill",coordinateX:0,coordinateY:3,status:"done",finishTime:null},{id:"c1",name:"resourceTransfer",coordinateX:0,coordinateY:1,status:"done",finishTime:null},{id:"c5",name:"warehouse",coordinateX:1,coordinateY:1,status:"done",finishTime:null},{id:"c3",name:"powerPlant",coordinateX:2,coordinateY:1,status:"done",finishTime:null},{id:"c6",name:"hadesTemple",coordinateX:2,coordinateY:2,status:"done",finishTime:null}]},de={southEast:{offset:0,x:2,y:1,opposite:"northWest"},northWest:{offset:20,x:-2,y:-1,opposite:"southEast"},southWest:{offset:224,x:-2,y:1,opposite:"northEast"},northEast:{offset:96,x:2,y:-1,opposite:"southWest"}},pe={drive:{startFrame:0,endFrame:19,speed:.02}},le=function(e){function t(){return Object(h["a"])(this,t),Object(m["a"])(this,Object(d["a"])(t).call(this,{key:"HumanMainScene"}))}return Object(p["a"])(t,e),Object(c["a"])(t,[{key:"init",value:function(){console.log("HumanMainScene init"),s=new he["a"](this),a=this,a.buildingGroup=this.add.group(),n=a.input.activePointer,a.add.image(oe["w"]/2,oe["h"]/2,"bg").setDisplaySize(2*oe["w"],2*oe["h"]).setScrollFactor(0),a.input.on("pointerdown",function(){Promise.resolve().then(i.bind(null,"5a62")).then(function(e){e.default.mutations.setBuildingElement(null,!1)}),s.cancelJump()})}},{key:"preload",value:function(){var e;e="https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexpinchplugin.min.js",this.load.plugin("rexpinchplugin",e,!0)}},{key:"create",value:function(){console.log("HumanMainScene create"),a.events.on("transitioncomplete",function(e,t){var i=me.scale;a.cameras.main.setSize(oe["w"],oe["h"]).centerOn(oe["w"]/2,oe["h"]/2+48*(i-3)),a.cameras.main.setZoom(.5),setTimeout(function(){s.zoomInOut(1,1e3,"Quart.easeOut")},250)});var e=a.plugins.get("rexpinchplugin").add(a);e.on("drag1",function(e){var t=e.drag1Vector;a.cameras.main.scrollX-=t.x/a.cameras.main.zoom,a.cameras.main.scrollY-=t.y/a.cameras.main.zoom}).on("pinch",function(e){var t=e.scaleFactor;a.cameras.main.zoom*=t,a.cameras.main.zoom<=.5?a.cameras.main.zoom=.5:a.cameras.main.zoom>=2&&(a.cameras.main.zoom=2)},a);var t=new Phaser.Class({Extends:Phaser.GameObjects.Image,initialize:function(e,t,i,a,n,s){this.startX=t,this.startY=i,this.distance=s,this.motion=a,this.anim=pe[a],this.direction=de[n],this.speed=.5,this.f=this.anim.startFrame,Phaser.GameObjects.Image.call(this,e,t,i,"car",this.direction.offset+this.f),this.depth=i+192,e.time.delayedCall(1e3*this.anim.speed,this.changeFrame,[],this)},changeFrame:function(){this.f++;var e=this.anim.speed;if(this.f===this.anim.endFrame)switch(this.motion){case"drive":this.f=this.anim.startFrame,this.frame=this.texture.get(this.direction.offset+this.f),a.time.delayedCall(1e3*e,this.changeFrame,[],this);break;default:break}else this.frame=this.texture.get(this.direction.offset+this.f),a.time.delayedCall(1e3*e,this.changeFrame,[],this)},resetAnimation:function(){this.f=this.anim.startFrame,this.frame=this.texture.get(this.direction.offset+this.f),a.time.delayedCall(1e3*this.anim.speed,this.changeFrame,[],this)},update:function(){"drive"===this.motion&&(this.x+=this.direction.x*this.speed,0!==this.direction.y&&(this.y+=this.direction.y*this.speed,this.depth=this.y+192),Phaser.Math.Distance.Between(this.startX,this.startY,this.x,this.y)>=this.distance&&(this.direction=de[this.direction.opposite],this.f,this.anim.startFrame,this.frame=this.texture.get(this.direction.offset+this.f),this.startX=this.x,this.startY=this.y))}});ce.push(this.add.existing(new t(this,oe["w"]/2-96,oe["h"]/2-48-32,"drive","southEast",150).setOrigin(.5,1))),ce.push(this.add.existing(new t(this,oe["w"]/2+96-16,oe["h"]/2+144-32-8,"drive","northWest",300).setOrigin(.5,1))),s.buildMap(me.scale),ue();var i=me.scale;a.cameras.main.setSize(oe["w"],oe["h"]).centerOn(oe["w"]/2,oe["h"]/2+48*(i-3)),a.cameras.main.setZoom(.5),setTimeout(function(){s.zoomInOut(1,1e3,"Quart.easeOut")},250)}},{key:"update",value:function(){if(ce.forEach(function(e){e.update()}),n.justMoved){var e=a.cameras.main.midPoint.x-n.x+n.prevPosition.x,t=a.cameras.main.midPoint.y-n.y+n.prevPosition.y;a.cameras.main.centerOn(e,t)}}}]),t}(o["Scene"]);function ue(){me.buildingMap.map(function(e){switch("ing"===e.status&&e.finishTime<=Date.now()&&(console.log("ing改completed"),e.status="completed",delete e.finishTime),e.status){case"done":s.createBuilding(e.id,e,!1);break;case"completed":s.createBuilding("b1",e,!1);break;case"ing":s.createBuilding("b0",e,!1);break}})}function fe(){var e=new r.a.Game({type:r.a.AUTO,width:document.body.clientWidth,height:document.body.clientHeight,backgroundColor:"#000000",parent:"game-container",scene:[se,re["b"],oe["default"],le]});console.log(e)}i.d(t,"launch",function(){return fe})},"97cf":function(e,t,i){e.exports=i.p+"img/warehouse-work.ac212dcb.png"},"9b7f":function(e,t,i){e.exports=i.p+"img/bg.78b4de10.png"},a0ea:function(e,t,i){e.exports=i.p+"img/hades-temple-work.b976bfaf.png"},ae41:function(e,t,i){e.exports=i.p+"img/power-plant-work.71795b25.png"},b1c3:function(e,t,i){e.exports=i.p+"img/car40.fcd2ad38.png"},c4e6:function(e,t,i){e.exports=i.p+"img/build-completed-1x1.ae05812c.png"},f1e5:function(e,t,i){e.exports=i.p+"img/stone-portal-spawn.b1b62221.png"}}]);
//# sourceMappingURL=chunk-41a2c06e.1a7794f8.js.map