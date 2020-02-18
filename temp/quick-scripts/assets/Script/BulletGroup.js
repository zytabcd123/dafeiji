(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/BulletGroup.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4fe8eGs7JNKAYvskfkNt5Wn', 'BulletGroup', __filename);
// Script/BulletGroup.ts

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
var Hero_1 = require("./Hero");
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
var BulletGroup = /** @class */ (function (_super) {
    __extends(BulletGroup, _super);
    function BulletGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hero = null;
        _this.preBullet1 = null;
        _this.preBullet2 = null;
        _this.preBullet3 = null;
        _this.bulletType = 1;
        return _this;
    }
    BulletGroup.prototype.onLoad = function () {
    };
    BulletGroup.prototype.createBullet = function () {
        var bu = this.getBulletPrefab();
        this.node.parent.insertChild(bu, 0);
        var p = this.getInitialPosition();
        bu.setPosition(p);
        // cc.log('子弹初始位置：', p.x, p.y)
    };
    BulletGroup.prototype.getBulletPrefab = function () {
        if (this.bulletType == 3) {
            return cc.instantiate(this.preBullet3);
        }
        else if (this.bulletType == 2) {
            return cc.instantiate(this.preBullet2);
        }
        return cc.instantiate(this.preBullet1);
        // switch (this.bulletType) {
        //     case 1: return cc.instantiate(this.preBullet1)
        //     case 2: return cc.instantiate(this.preBullet2)
        //     case 3: return cc.instantiate(this.preBullet3)
        //     default: return cc.instantiate(this.preBullet1)
        // }
    };
    BulletGroup.prototype.getInitialPosition = function () {
        return this.hero.node.getPosition();
    };
    __decorate([
        property(Hero_1.default)
    ], BulletGroup.prototype, "hero", void 0);
    __decorate([
        property(cc.Prefab)
    ], BulletGroup.prototype, "preBullet1", void 0);
    __decorate([
        property(cc.Prefab)
    ], BulletGroup.prototype, "preBullet2", void 0);
    __decorate([
        property(cc.Prefab)
    ], BulletGroup.prototype, "preBullet3", void 0);
    BulletGroup = __decorate([
        ccclass
    ], BulletGroup);
    return BulletGroup;
}(cc.Component));
exports.default = BulletGroup;

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
        //# sourceMappingURL=BulletGroup.js.map
        