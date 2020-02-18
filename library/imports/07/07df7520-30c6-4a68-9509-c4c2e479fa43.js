"use strict";
cc._RF.push(module, '07df7UgMMZKaJUJxMLkefpD', 'Bullet');
// Script/Bullet.ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xSpeed = 0;
        _this.ySpeed = 0;
        _this.hpDrop = 0;
        //子弹发射声音
        _this.audio = null;
        return _this;
    }
    Bullet.prototype.onLoad = function () {
        // cc.log('@@@@@@@@@@', this.name, this.node.name)
        cc.director.getCollisionManager().enabled = true;
        // cc.log('子弹创建成功')
        cc.audioEngine.playEffect(this.audio, false);
    };
    Bullet.prototype.onCollisionEnter = function (other, self) {
        var en = other.node.getComponent('Enemy');
        if (en.isDeid) {
            return;
        }
        this.node.removeFromParent();
        this.destroy();
    };
    //dt = 0.016
    Bullet.prototype.update = function (dt) {
        // this.node.x += dt * this.xSpeed
        this.node.y += dt * this.ySpeed;
        // cc.log(dt, dt * this.ySpeed, this.node.y, this.node.parent.height)
        if (this.node.y > this.node.parent.height) {
            this.destroy();
        }
    };
    __decorate([
        property
    ], Bullet.prototype, "xSpeed", void 0);
    __decorate([
        property
    ], Bullet.prototype, "ySpeed", void 0);
    __decorate([
        property
    ], Bullet.prototype, "hpDrop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bullet.prototype, "audio", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();