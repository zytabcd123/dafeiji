
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/History.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24230OQbvpEsIOFGFO1Rogi', 'History');
// Script/History.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var History = /** @class */ (function (_super) {
    __extends(History, _super);
    function History() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.scoreCell = null;
        return _this;
    }
    History.prototype.onLoad = function () {
        cc.log('历史记录');
        // let s = [0, 1, 2, 3, 4, 5]
        // for (let i in s) {
        //     cc.log(i)
        //     var cell = cc.instantiate(this.scoreCell)
        //     this.scrollView.addChild(cell)
        // }
        this.reloadData();
    };
    History.prototype.reloadData = function () {
        var cd = JSON.parse(cc.sys.localStorage.getItem('currentScore'));
        if (cd == null) {
            return;
        }
        // cc.sys.localStorage.removeItem('currentScore')
        for (var i = 0; i < cd.idx + 1; i++) {
            var key = 'score_' + i;
            // cc.log(key)
            // cc.sys.localStorage.removeItem(key)
            var sd = JSON.parse(cc.sys.localStorage.getItem(key));
            var cell = cc.instantiate(this.scoreCell);
            this.scrollView.addChild(cell);
            cell.getComponent('ScoreCell').reloadData(sd.score, sd.ctime);
        }
    };
    History.prototype.backAction = function () {
        cc.director.loadScene('endScene');
    };
    __decorate([
        property(cc.Node)
    ], History.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Prefab)
    ], History.prototype, "scoreCell", void 0);
    History = __decorate([
        ccclass
    ], History);
    return History;
}(cc.Component));
exports.default = History;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9IaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdGLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUF1Q0M7UUFwQ3NCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGVBQVMsR0FBYyxJQUFJLENBQUE7O0lBbUNwRCxDQUFDO0lBakNHLHdCQUFNLEdBQU47UUFFSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2QsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsZ0RBQWdEO1FBQ2hELHFDQUFxQztRQUNyQyxJQUFJO1FBRUosSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtRQUNoRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBQyxPQUFNO1NBQUM7UUFDeEIsaURBQWlEO1FBRWpELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUcsRUFBRTtZQUNsQyxJQUFJLEdBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1lBQ3RCLGNBQWM7WUFDZCxzQ0FBc0M7WUFDdEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUVyRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNoRTtJQUNMLENBQUM7SUFFRCw0QkFBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQW5Da0I7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQTJCO0lBQ3hCO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUE0QjtJQUgvQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBc0MzQjtJQUFELGNBQUM7Q0F0Q0QsQUFzQ0MsQ0F0Q29DLEVBQUUsQ0FBQyxTQUFTLEdBc0NoRDtrQkF0Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3RvcnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHNjcm9sbFZpZXc6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgc2NvcmVDZWxsOiBjYy5QcmVmYWIgPSBudWxsXG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgY2MubG9nKCfljoblj7LorrDlvZUnKVxuICAgICAgICAvLyBsZXQgcyA9IFswLCAxLCAyLCAzLCA0LCA1XVxuICAgICAgICAvLyBmb3IgKGxldCBpIGluIHMpIHtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhpKVxuICAgICAgICAvLyAgICAgdmFyIGNlbGwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNjb3JlQ2VsbClcbiAgICAgICAgLy8gICAgIHRoaXMuc2Nyb2xsVmlldy5hZGRDaGlsZChjZWxsKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgdGhpcy5yZWxvYWREYXRhKClcbiAgICB9XG5cbiAgICByZWxvYWREYXRhKCkge1xuICAgICAgICBsZXQgY2QgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFNjb3JlJykpXG4gICAgICAgIGlmIChjZCA9PSBudWxsKSB7cmV0dXJufVxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRTY29yZScpXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjZC5pZHggKyAxOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gJ3Njb3JlXycgKyBpXG4gICAgICAgICAgICAvLyBjYy5sb2coa2V5KVxuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICAgICAgICAgIGxldCBzZCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjZWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5zY29yZUNlbGwpXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuYWRkQ2hpbGQoY2VsbClcbiAgICAgICAgICAgIGNlbGwuZ2V0Q29tcG9uZW50KCdTY29yZUNlbGwnKS5yZWxvYWREYXRhKHNkLnNjb3JlLCBzZC5jdGltZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhY2tBY3Rpb24oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZW5kU2NlbmUnKTtcbiAgICB9XG59XG4iXX0=