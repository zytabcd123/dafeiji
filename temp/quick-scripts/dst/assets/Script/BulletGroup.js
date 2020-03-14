
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BulletGroup.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fe8eGs7JNKAYvskfkNt5Wn', 'BulletGroup');
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
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9CdWxsZXRHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQkFBMEI7QUFFMUIsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQURyRDtRQUFBLHFFQTJDQztRQXhDbUIsVUFBSSxHQUFTLElBQUksQ0FBQTtRQUNaLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBQzVCLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBQzVCLGdCQUFVLEdBQWMsSUFBSSxDQUFBO1FBRWpELGdCQUFVLEdBQVcsQ0FBQyxDQUFBOztJQW1DMUIsQ0FBQztJQWhDRyw0QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELGtDQUFZLEdBQVo7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRWpCLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDdEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUN6QzthQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUN6QztRQUNELE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdEMsNkJBQTZCO1FBQzdCLHFEQUFxRDtRQUNyRCxxREFBcUQ7UUFDckQscURBQXFEO1FBQ3JELHNEQUFzRDtRQUN0RCxJQUFJO0lBQ1IsQ0FBQztJQUVELHdDQUFrQixHQUFsQjtRQUVJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQXZDZTtRQUFmLFFBQVEsQ0FBQyxjQUFJLENBQUM7NkNBQWtCO0lBQ1o7UUFBcEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQTZCO0lBQzVCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO21EQUE2QjtJQUM1QjtRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFBNkI7SUFMaEMsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTBDL0I7SUFBRCxrQkFBQztDQTFDRCxBQTBDQyxDQTFDd0MsRUFBRSxDQUFDLFNBQVMsR0EwQ3BEO2tCQTFDb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vYXNzZXRzL1NjcmlwdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSBcIi4vQnVsbGV0XCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi9IZXJvXCI7XG5cbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0R3JvdXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEhlcm8pIGhlcm86IEhlcm8gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgcHJlQnVsbGV0MTogY2MuUHJlZmFiID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHByZUJ1bGxldDI6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKSBwcmVCdWxsZXQzOiBjYy5QcmVmYWIgPSBudWxsXG5cbiAgICBidWxsZXRUeXBlOiBudW1iZXIgPSAxXG5cbiAgICBcbiAgICBvbkxvYWQgKCkge1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQnVsbGV0ICgpIHtcbiAgICAgICAgdmFyIGJ1ID0gdGhpcy5nZXRCdWxsZXRQcmVmYWIoKVxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lmluc2VydENoaWxkKGJ1LCAwKVxuICAgICAgICBsZXQgcCA9IHRoaXMuZ2V0SW5pdGlhbFBvc2l0aW9uKClcbiAgICAgICAgYnUuc2V0UG9zaXRpb24ocClcblxuICAgICAgICAvLyBjYy5sb2coJ+WtkOW8ueWIneWni+S9jee9ru+8micsIHAueCwgcC55KVxuICAgIH1cblxuICAgIGdldEJ1bGxldFByZWZhYigpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKHRoaXMuYnVsbGV0VHlwZSA9PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVCdWxsZXQzKVxuICAgICAgICB9ZWxzZSBpZiAodGhpcy5idWxsZXRUeXBlID09IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJ1bGxldDIpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQnVsbGV0MSlcbiAgICAgICAgLy8gc3dpdGNoICh0aGlzLmJ1bGxldFR5cGUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgMTogcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQnVsbGV0MSlcbiAgICAgICAgLy8gICAgIGNhc2UgMjogcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQnVsbGV0MilcbiAgICAgICAgLy8gICAgIGNhc2UgMzogcmV0dXJuIGNjLmluc3RhbnRpYXRlKHRoaXMucHJlQnVsbGV0MylcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IHJldHVybiBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZUJ1bGxldDEpXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXRJbml0aWFsUG9zaXRpb24oKTogY2MuVmVjMiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVyby5ub2RlLmdldFBvc2l0aW9uKCk7XG4gICAgfVxufVxuIl19