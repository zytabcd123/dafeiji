(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Enemy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'eca2bKuyDtBybB0W+zlF6kY', 'Enemy', __filename);
// Script/Enemy.ts

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
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xMinSpeed = 100;
        _this.xMaxSpeed = 500;
        _this.yMinSpeed = 100;
        _this.yMaxSpeed = 500;
        _this.HP = 100;
        _this.diedAudio = null;
        _this.xSpeed = 0;
        _this.ySpeed = 0;
        _this.isDeid = false;
        return _this;
    }
    Enemy.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        this.xSpeed = Math.random() * (this.xMaxSpeed - this.xMinSpeed) + this.xMinSpeed;
        this.ySpeed = Math.random() * (this.yMaxSpeed - this.yMinSpeed) + this.yMinSpeed;
        // cc.log('~~~~~~~~~~~~~', this.gm.name)
    };
    Enemy.prototype.onCollisionEnter = function (other, self) {
        if (this.isDeid) {
            return;
        }
        if (self.node.position.y > this.node.parent.height / 2) {
            return;
        }
        // cc.log('敌机被消灭', self.node.position.x, self.node.position.y, this.gm.name)
        this.gm.updateScore();
        this.isDeid = true;
        this.enemyDeidEffect();
    };
    Enemy.prototype.enemyDeidEffect = function () {
        var a = this.getComponent(cc.Animation);
        a.playAdditive('enemy1ani');
        a.on('finished', this.enemyDeidEffectFinished, this);
        cc.audioEngine.playEffect(this.diedAudio, false);
    };
    Enemy.prototype.enemyDeidEffectFinished = function () {
        this.node.removeFromParent();
        this.destroy();
    };
    //dt = 0.016
    Enemy.prototype.update = function (dt) {
        if (this.isDeid) {
            return;
        }
        // this.node.x += dt * this.xSpeed
        this.node.y -= dt * this.ySpeed;
        // cc.log(dt, dt * this.ySpeed, this.node.y, this.node.parent.height)
        if (this.node.y < -this.node.parent.height) {
            this.destroy();
        }
    };
    __decorate([
        property(cc.Integer)
    ], Enemy.prototype, "xMinSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], Enemy.prototype, "xMaxSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], Enemy.prototype, "yMinSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], Enemy.prototype, "yMaxSpeed", void 0);
    __decorate([
        property(cc.Integer)
    ], Enemy.prototype, "HP", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Enemy.prototype, "diedAudio", void 0);
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

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
        //# sourceMappingURL=Enemy.js.map
        