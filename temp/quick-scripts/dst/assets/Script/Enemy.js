
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eca2bKuyDtBybB0W+zlF6kY', 'Enemy');
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
        if (other.node.group != '子弹') {
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
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9FbmVteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBRC9DO1FBQUEscUVBNERDO1FBekR5QixlQUFTLEdBQVcsR0FBRyxDQUFBO1FBQ3ZCLGVBQVMsR0FBVyxHQUFHLENBQUE7UUFDdkIsZUFBUyxHQUFXLEdBQUcsQ0FBQTtRQUN2QixlQUFTLEdBQVcsR0FBRyxDQUFBO1FBQ3ZCLFFBQUUsR0FBVyxHQUFHLENBQUE7UUFFZCxlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUN0RCxZQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFDbEIsWUFBTSxHQUFZLEtBQUssQ0FBQTs7SUFnRDNCLENBQUM7SUE3Q0csc0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUNoRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUE7UUFFaEYsd0NBQXdDO0lBRTVDLENBQUM7SUFFRCxnQ0FBZ0IsR0FBaEIsVUFBa0IsS0FBa0IsRUFBRSxJQUFpQjtRQUNuRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBQyxPQUFNO1NBQUM7UUFDekIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFBQyxPQUFNO1NBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwRCxPQUFNO1NBQ1Q7UUFDRCw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUVELCtCQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVwRCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCx1Q0FBdUIsR0FBdkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFDRCxZQUFZO0lBQ1osc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBQyxPQUFNO1NBQUM7UUFDekIsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQy9CLHFFQUFxRTtRQUVyRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBRXhDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUNqQjtJQUNMLENBQUM7SUF4RHFCO1FBQXJCLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzRDQUF3QjtJQUN2QjtRQUFyQixRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0Q0FBd0I7SUFDdkI7UUFBckIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQXdCO0lBQ3ZCO1FBQXJCLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzRDQUF3QjtJQUN2QjtRQUFyQixRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztxQ0FBaUI7SUFFZDtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs0Q0FBK0I7SUFSckMsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQTJEekI7SUFBRCxZQUFDO0NBM0RELEFBMkRDLENBM0RrQyxFQUFFLENBQUMsU0FBUyxHQTJEOUM7a0JBM0RvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9hc3NldHMvU2NyaXB0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZW15R3JvdXAgZnJvbSBcIi4vRW5lbXlHcm91cFwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xuXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKSB4TWluU3BlZWQ6IG51bWJlciA9IDEwMFxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKSB4TWF4U3BlZWQ6IG51bWJlciA9IDUwMFxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKSB5TWluU3BlZWQ6IG51bWJlciA9IDEwMFxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKSB5TWF4U3BlZWQ6IG51bWJlciA9IDUwMFxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKSBIUDogbnVtYmVyID0gMTAwXG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBkaWVkQXVkaW86IGNjLlRleHR1cmUyRCA9IG51bGxcbiAgICB4U3BlZWQ6IG51bWJlciA9IDBcbiAgICB5U3BlZWQ6IG51bWJlciA9IDBcbiAgICBpc0RlaWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGdtOiBHYW1lO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMueFNwZWVkID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLnhNYXhTcGVlZCAtIHRoaXMueE1pblNwZWVkKSArIHRoaXMueE1pblNwZWVkXG4gICAgICAgIHRoaXMueVNwZWVkID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLnlNYXhTcGVlZCAtIHRoaXMueU1pblNwZWVkKSArIHRoaXMueU1pblNwZWVkXG4gICAgICAgIFxuICAgICAgICAvLyBjYy5sb2coJ35+fn5+fn5+fn5+fn4nLCB0aGlzLmdtLm5hbWUpXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBvbkNvbGxpc2lvbkVudGVyIChvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVpZCkge3JldHVybn1cbiAgICAgICAgaWYgKG90aGVyLm5vZGUuZ3JvdXAgIT0gJ+WtkOW8uScpIHtyZXR1cm59XG4gICAgICAgIGlmIChzZWxmLm5vZGUucG9zaXRpb24ueSA+IHRoaXMubm9kZS5wYXJlbnQuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MubG9nKCfmlYzmnLrooqvmtojnga0nLCBzZWxmLm5vZGUucG9zaXRpb24ueCwgc2VsZi5ub2RlLnBvc2l0aW9uLnksIHRoaXMuZ20ubmFtZSlcbiAgICAgICAgdGhpcy5nbS51cGRhdGVTY29yZSgpXG4gICAgICAgIHRoaXMuaXNEZWlkID0gdHJ1ZVxuICAgICAgICB0aGlzLmVuZW15RGVpZEVmZmVjdCgpXG4gICAgfVxuXG4gICAgZW5lbXlEZWlkRWZmZWN0ICgpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pXG4gICAgICAgIGEucGxheUFkZGl0aXZlKCdlbmVteTFhbmknKVxuICAgICAgICBhLm9uKCdmaW5pc2hlZCcsIHRoaXMuZW5lbXlEZWlkRWZmZWN0RmluaXNoZWQsIHRoaXMpXG5cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZWRBdWRpbywgZmFsc2UpXG4gICAgfVxuICAgIFxuICAgIGVuZW15RGVpZEVmZmVjdEZpbmlzaGVkKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXG4gICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgfVxuICAgIC8vZHQgPSAwLjAxNlxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5pc0RlaWQpIHtyZXR1cm59XG4gICAgICAgIC8vIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy54U3BlZWRcbiAgICAgICAgdGhpcy5ub2RlLnkgLT0gZHQgKiB0aGlzLnlTcGVlZFxuICAgICAgICAvLyBjYy5sb2coZHQsIGR0ICogdGhpcy55U3BlZWQsIHRoaXMubm9kZS55LCB0aGlzLm5vZGUucGFyZW50LmhlaWdodClcblxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtdGhpcy5ub2RlLnBhcmVudC5oZWlnaHQpIHtcblxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==