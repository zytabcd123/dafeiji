import Enemy from "./Enemy";
import Game from "./Game";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyGroup extends cc.Component {

    @property(cc.Prefab) preEnemy: cc.Prefab = null
    @property(cc.Float) enemyRate: number = 1//敌机生成频率，默认间隔1秒生成1个
    @property(Game) gm: Game = null

    onLoad () {
        var timeCallback = function () {
            this.createEnemy()
        }
        this.schedule(timeCallback, this.enemyRate);
    }

    createEnemy() {

        var en = cc.instantiate(this.preEnemy)
        en.parent = this.node
        this.node.parent.insertChild(en, 0)
        let p = this.getEnemyPosition(en)
        en.setPosition(p)
        // cc.log('敌机初始位置：', p.x, p.y, this.gm.name, en.getComponent('Enemy').name)

        en.getComponent('Enemy').gm = this.gm
        this.gm.totalEnemy += 1
        // this.node.emit('evn_score_add')
    }

    getEnemyPosition(enemy: cc.Node): cc.Vec2 {
        let ew = enemy.width / 2
        let maxw = this.node.parent.width / 2 - ew
        let minw = -this.node.parent.width / 2 + ew
        //ew...(sw - ew)范围的随机数
        let randx = Math.random() * (maxw - 2 * minw) + minw
        return cc.v2(randx, this.node.parent.height)
    }
}
