(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Hero.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f9ccaT5Rq5Ewoowm9NAk5EZ', 'Hero', __filename);
// Script/Hero.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diedAudio = null;
        _this.gm = null;
        _this.isDeid = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Hero.prototype.onLoad = function () {
        cc.log('~~~~~~~~~~英雄加载');
        cc.director.getCollisionManager().enabled = true;
        this.onDrag();
    };
    Hero.prototype.start = function () {
    };
    // update (dt) {}
    //添加拖动监听
    Hero.prototype.onDrag = function () {
        this.node.on('touchmove', this.dragMove, this);
    };
    //去掉拖动监听
    Hero.prototype.offDrag = function () {
        this.node.off('touchmove', this.dragMove, this);
    };
    //拖动
    Hero.prototype.dragMove = function (event) {
        var locationv = event.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        //飞机不移出屏幕 
        var minX = -this.node.parent.width / 2;
        var maxX = -minX;
        var minY = -this.node.parent.height / 2;
        var maxY = -minY;
        if (location.x < minX) {
            location.x = minX;
        }
        if (location.x > maxX) {
            location.x = maxX;
        }
        if (location.y < minY) {
            location.y = minY;
        }
        if (location.y > maxY) {
            location.y = maxY;
        }
        // cc.log('飞机', location.x, location.y)
        this.node.setPosition(location);
    };
    Hero.prototype.onCollisionEnter = function (other, self) {
        if (this.isDeid) {
            return;
        }
        this.isDeid = true;
        this.heroDeidEffect();
        this.gm.pregameOver();
    };
    Hero.prototype.heroDeidEffect = function () {
        var a = this.getComponent(cc.Animation);
        a.playAdditive('hero_blowup_ani');
        a.on('finished', this.heroDeidEffectFinished, this);
        cc.audioEngine.playEffect(this.diedAudio, false);
    };
    Hero.prototype.heroDeidEffectFinished = function () {
        // this.node.removeFromParent()
        // this.destroy()
        this.gm.gameOver();
        this.offDrag();
    };
    __decorate([
        property(cc.AudioClip)
    ], Hero.prototype, "diedAudio", void 0);
    __decorate([
        property(Game_1.default)
    ], Hero.prototype, "gm", void 0);
    Hero = __decorate([
        ccclass
    ], Hero);
    return Hero;
}(cc.Component));
exports.default = Hero;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Hero.js.map
        