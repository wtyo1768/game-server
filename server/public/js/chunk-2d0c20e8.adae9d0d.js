(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c20e8"],{"494a":function(e,i,t){"use strict";t.r(i),t.d(i,"default",function(){return Y}),t.d(i,"gameFunction",function(){return o});var n,a,s,o,d=t("d225"),r=t("b0b4"),c=t("308d"),h=t("6bb5"),u=t("4e2b"),m=t("64b8"),l=t("3fa0"),f=t("e22e"),p=t("5a62"),T=(t("282c"),[]),k={scale:8,buildingMap:[{id:"k0",name:"stonePortal",coordinateX:0,coordinateY:0,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:1,coordinateY:0,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:0,coordinateY:1,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:1,coordinateY:1,status:"done",finishTime:null},{id:"k4",name:"farm",coordinateX:2,coordinateY:1,status:"done",finishTime:null},{id:"k1",name:"hadesTemple",coordinateX:2,coordinateY:2,status:"done",finishTime:null},{id:"c0",name:"researchCenter",coordinateX:1,coordinateY:3,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:2,coordinateY:3,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:0,coordinateY:4,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:0,coordinateY:5,status:"done",finishTime:null},{id:"k7",name:"stadium",coordinateX:2,coordinateY:5,status:"done",finishTime:null},{id:"k4",name:"farm",coordinateX:1,coordinateY:7,status:"done",finishTime:null},{id:"k4",name:"farm",coordinateX:2,coordinateY:7,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:0,coordinateY:6,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:0,coordinateY:7,status:"done",finishTime:null},{id:"c2",name:"resourceTransfer",coordinateX:4,coordinateY:1,status:"done",finishTime:null},{id:"k8",name:"houseB",coordinateX:5,coordinateY:0,status:"done",finishTime:null},{id:"e0",name:"houseA",coordinateX:5,coordinateY:1,status:"done",finishTime:null},{id:"k2",name:"babylon",coordinateX:5,coordinateY:3,status:"done",finishTime:null},{id:"m0",name:"government",coordinateX:4,coordinateY:5,status:"done",finishTime:null},{id:"c1",name:"warehouse",coordinateX:5,coordinateY:4,status:"done",finishTime:null},{id:"k6",name:"ncku",coordinateX:5,coordinateY:5,status:"done",finishTime:null},{id:"k3",name:"church",coordinateX:4,coordinateY:6,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:4,coordinateY:7,status:"done",finishTime:null},{id:"c2",name:"resourceTransfer",coordinateX:5,coordinateY:7,status:"done",finishTime:null},{id:"k8",name:"houseB",coordinateX:6,coordinateY:7,status:"done",finishTime:null},{id:"e0",name:"houseA",coordinateX:6,coordinateY:6,status:"done",finishTime:null},{id:"k5",name:"forest",coordinateX:6,coordinateY:5,status:"done",finishTime:null},{id:"k3",name:"church",coordinateX:6,coordinateY:4,status:"done",finishTime:null},{id:"k6",name:"ncku",coordinateX:6,coordinateY:3,status:"done",finishTime:null},{id:"k8",name:"houseB",coordinateX:6,coordinateY:2,status:"done",finishTime:null},{id:"k4",name:"farm",coordinateX:6,coordinateY:1,status:"done",finishTime:null},{id:"k10",name:"MRTshadow",coordinateX:7,coordinateY:7,status:"done",finishTime:null},{id:"k11",name:"MRT1",coordinateX:7,coordinateY:7,status:"done",finishTime:null},{id:"k9",name:"MRT",coordinateX:7,coordinateY:7,status:"done",finishTime:null}]},g={southEast:{offset:0,x:2,y:1,opposite:"northWest"},northWest:{offset:20,x:-2,y:-1,opposite:"southEast"},southWest:{offset:224,x:-2,y:1,opposite:"northEast"},northEast:{offset:96,x:2,y:-1,opposite:"southWest"}},X={drive:{startFrame:0,endFrame:19,speed:.02}},Y=function(e){function i(){return Object(d["a"])(this,i),Object(c["a"])(this,Object(h["a"])(i).call(this,{key:"HumanMainScene"}))}return Object(u["a"])(i,e),Object(r["a"])(i,[{key:"init",value:function(){logger.info("HumanMainScene init"),o=new f["a"](this),n=this,n.buildingGroup=this.add.group(),a=n.input.activePointer,n.add.image(l["w"]/2,l["h"]/2,"bg").setDisplaySize(2*l["w"],2*l["h"]).setScrollFactor(0),n.input.on("pointerdown",function(){p["default"].mutations.setBuildingElement(null,!1),o.cancelJump()}),setInterval(function(){"CANVAS"!==a.downElement.tagName&&(a.isDown=!1)},100),s=n.add.image(l["w"]/2,l["h"]/2,"kyronusDisplayText").setScrollFactor(0),s.depth=1e4,s.alpha=0}},{key:"preload",value:function(){}},{key:"create",value:function(){logger.info("HumanMainScene create"),n.events.on("transitioncomplete",function(e,i){l["Obj"].nowScene="HumanMainScene",logger.info(l["Obj"]);var t=k.scale;n.cameras.main.setSize(l["w"],l["h"]).centerOn(l["w"]/2,l["h"]/2+48*(t-3)-1500),n.cameras.main.setZoom(.7),setTimeout(function(){n.cameras.main.pan(l["w"]/2,l["h"]/2+48*(k.scale-3),3e3,"Quart.easeOut"),n.tweens.add({targets:s,alpha:1,duration:1e3,ease:"Linear",onComplete:function(){n.tweens.add({targets:s,alpha:0,duration:1e3,ease:"Linear",delay:800})}})},250)});var e=new Phaser.Class({Extends:Phaser.GameObjects.Image,initialize:function(e,i,t,n,a,s){this.startX=i,this.startY=t,this.distance=s,this.motion=n,this.anim=X[n],this.direction=g[a],this.speed=.5,this.f=this.anim.startFrame,Phaser.GameObjects.Image.call(this,e,i,t,"car",this.direction.offset+this.f),this.depth=t+192,e.time.delayedCall(1e3*this.anim.speed,this.changeFrame,[],this)},changeFrame:function(){this.f++;var e=this.anim.speed;if(this.f===this.anim.endFrame)switch(this.motion){case"drive":this.f=this.anim.startFrame,this.frame=this.texture.get(this.direction.offset+this.f),n.time.delayedCall(1e3*e,this.changeFrame,[],this);break;default:break}else this.frame=this.texture.get(this.direction.offset+this.f),n.time.delayedCall(1e3*e,this.changeFrame,[],this)},resetAnimation:function(){this.f=this.anim.startFrame,this.frame=this.texture.get(this.direction.offset+this.f),n.time.delayedCall(1e3*this.anim.speed,this.changeFrame,[],this)},update:function(){"drive"===this.motion&&(this.x+=this.direction.x*this.speed,0!==this.direction.y&&(this.y+=this.direction.y*this.speed,this.depth=this.y+192),Phaser.Math.Distance.Between(this.startX,this.startY,this.x,this.y)>=this.distance&&(this.direction=g[this.direction.opposite],this.f,this.anim.startFrame,this.frame=this.texture.get(this.direction.offset+this.f),this.startX=this.x,this.startY=this.y))}});T.push(this.add.existing(new e(this,l["w"]/2-96,l["h"]/2-48-32,"drive","southEast",150).setOrigin(.5,1))),T.push(this.add.existing(new e(this,l["w"]/2+96-16,l["h"]/2+144-32-8,"drive","northWest",300).setOrigin(.5,1))),o.buildMap("tilesKyronus",k.scale),b()}},{key:"update",value:function(){if(T.forEach(function(e){e.update()}),a=n.input.activePointer,a.isDown&&a.getDistance()>10){var e=n.cameras.main.midPoint.x-a.x+a.prevPosition.x,i=n.cameras.main.midPoint.y-a.y+a.prevPosition.y;n.cameras.main.centerOn(e,i)}}}]),i}(m["Scene"]);function b(){k.buildingMap.map(function(e){switch("ing"===e.status&&e.finishTime<=Date.now()&&(logger.info("ing改completed"),e.status="completed",delete e.finishTime),e.status){case"done":o.createBuilding(e.id,e,!1);break;case"completed":o.createBuilding("b1",e,!1);break;case"ing":o.createBuilding("b0",e,!1);break}})}}}]);
//# sourceMappingURL=chunk-2d0c20e8.adae9d0d.js.map