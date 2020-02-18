(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/EnemyGroup.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ac6b7uV4TNG2KNAGNRtyUyc', 'EnemyGroup', __filename);
// Script/EnemyGroup.ts

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
var EnemyGroup = /** @class */ (function (_super) {
    __extends(EnemyGroup, _super);
    function EnemyGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preEnemy = null;
        _this.enemyRate = 1; //敌机生成频率，默认间隔1秒生成1个
        _this.gm = null;
        return _this;
    }
    EnemyGroup.prototype.onLoad = function () {
        var timeCallback = function () {
            this.createEnemy();
        };
        this.schedule(timeCallback, this.enemyRate);
    };
    EnemyGroup.prototype.createEnemy = function () {
        var en = cc.instantiate(this.preEnemy);
        en.parent = this.node;
        this.node.parent.insertChild(en, 0);
        var p = this.getEnemyPosition(en);
        en.setPosition(p);
        // cc.log('敌机初始位置：', p.x, p.y, this.gm.name, en.getComponent('Enemy').name)
        en.getComponent('Enemy').gm = this.gm;
        this.gm.totalEnemy += 1;
        // this.node.emit('evn_score_add')
    };
    EnemyGroup.prototype.getEnemyPosition = function (enemy) {
        var ew = enemy.width / 2;
        var maxw = this.node.parent.width / 2 - ew;
        var minw = -this.node.parent.width / 2 + ew;
        //ew...(sw - ew)范围的随机数
        var randx = Math.random() * (maxw - 2 * minw) + minw;
        return cc.v2(randx, this.node.parent.height);
    };
    __decorate([
        property(cc.Prefab)
    ], EnemyGroup.prototype, "preEnemy", void 0);
    __decorate([
        property(cc.Float)
    ], EnemyGroup.prototype, "enemyRate", void 0);
    __decorate([
        property(Game_1.default)
    ], EnemyGroup.prototype, "gm", void 0);
    EnemyGroup = __decorate([
        ccclass
    ], EnemyGroup);
    return EnemyGroup;
}(cc.Component));
exports.default = EnemyGroup;

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
        //# sourceMappingURL=EnemyGroup.js.map
        