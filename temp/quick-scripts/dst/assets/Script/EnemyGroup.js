
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac6b7uV4TNG2KNAGNRtyUyc', 'EnemyGroup');
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
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9FbmVteUdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtCQUEwQjtBQUUxQixvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBb0NDO1FBakN3QixjQUFRLEdBQWMsSUFBSSxDQUFBO1FBQzNCLGVBQVMsR0FBVyxDQUFDLENBQUEsQ0FBQSxtQkFBbUI7UUFDNUMsUUFBRSxHQUFTLElBQUksQ0FBQTs7SUErQm5DLENBQUM7SUE3QkcsMkJBQU0sR0FBTjtRQUNJLElBQUksWUFBWSxHQUFHO1lBQ2YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RCLENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0NBQVcsR0FBWDtRQUVJLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3RDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2pCLDJFQUEyRTtRQUUzRSxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFBO1FBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQTtRQUN2QixrQ0FBa0M7SUFDdEMsQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixLQUFjO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQzFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDM0Msc0JBQXNCO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQ3BELE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQWhDb0I7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQTJCO0lBQzNCO1FBQW5CLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUFzQjtJQUN6QjtRQUFmLFFBQVEsQ0FBQyxjQUFJLENBQUM7MENBQWdCO0lBSmQsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW1DOUI7SUFBRCxpQkFBQztDQW5DRCxBQW1DQyxDQW5DdUMsRUFBRSxDQUFDLFNBQVMsR0FtQ25EO2tCQW5Db0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vYXNzZXRzL1NjcmlwdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmVteSBmcm9tIFwiLi9FbmVteVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xuXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15R3JvdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJlRW5lbXk6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpIGVuZW15UmF0ZTogbnVtYmVyID0gMS8v5pWM5py655Sf5oiQ6aKR546H77yM6buY6K6k6Ze06ZqUMeenkueUn+aIkDHkuKpcbiAgICBAcHJvcGVydHkoR2FtZSkgZ206IEdhbWUgPSBudWxsXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB2YXIgdGltZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aW1lQ2FsbGJhY2ssIHRoaXMuZW5lbXlSYXRlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbmVteSgpIHtcblxuICAgICAgICB2YXIgZW4gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUVuZW15KVxuICAgICAgICBlbi5wYXJlbnQgPSB0aGlzLm5vZGVcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5pbnNlcnRDaGlsZChlbiwgMClcbiAgICAgICAgbGV0IHAgPSB0aGlzLmdldEVuZW15UG9zaXRpb24oZW4pXG4gICAgICAgIGVuLnNldFBvc2l0aW9uKHApXG4gICAgICAgIC8vIGNjLmxvZygn5pWM5py65Yid5aeL5L2N572u77yaJywgcC54LCBwLnksIHRoaXMuZ20ubmFtZSwgZW4uZ2V0Q29tcG9uZW50KCdFbmVteScpLm5hbWUpXG5cbiAgICAgICAgZW4uZ2V0Q29tcG9uZW50KCdFbmVteScpLmdtID0gdGhpcy5nbVxuICAgICAgICB0aGlzLmdtLnRvdGFsRW5lbXkgKz0gMVxuICAgICAgICAvLyB0aGlzLm5vZGUuZW1pdCgnZXZuX3Njb3JlX2FkZCcpXG4gICAgfVxuXG4gICAgZ2V0RW5lbXlQb3NpdGlvbihlbmVteTogY2MuTm9kZSk6IGNjLlZlYzIge1xuICAgICAgICBsZXQgZXcgPSBlbmVteS53aWR0aCAvIDJcbiAgICAgICAgbGV0IG1heHcgPSB0aGlzLm5vZGUucGFyZW50LndpZHRoIC8gMiAtIGV3XG4gICAgICAgIGxldCBtaW53ID0gLXRoaXMubm9kZS5wYXJlbnQud2lkdGggLyAyICsgZXdcbiAgICAgICAgLy9ldy4uLihzdyAtIGV3KeiMg+WbtOeahOmaj+acuuaVsFxuICAgICAgICBsZXQgcmFuZHggPSBNYXRoLnJhbmRvbSgpICogKG1heHcgLSAyICogbWludykgKyBtaW53XG4gICAgICAgIHJldHVybiBjYy52MihyYW5keCwgdGhpcy5ub2RlLnBhcmVudC5oZWlnaHQpXG4gICAgfVxufVxuIl19