import Bullet from "./Bullet";
import Hero from "./Hero";

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
export default class BulletGroup extends cc.Component {

    @property(Hero) hero: Hero = null
    @property(cc.Prefab) preBullet1: cc.Prefab = null
    @property(cc.Prefab) preBullet2: cc.Prefab = null
    @property(cc.Prefab) preBullet3: cc.Prefab = null

    bulletType: number = 1

    
    onLoad () {

    }

    createBullet () {
        var bu = this.getBulletPrefab()
        this.node.parent.insertChild(bu, 0)
        let p = this.getInitialPosition()
        bu.setPosition(p)

        // cc.log('子弹初始位置：', p.x, p.y)
    }

    getBulletPrefab(): cc.Node {
        if (this.bulletType == 3) {
            return cc.instantiate(this.preBullet3)
        }else if (this.bulletType == 2) {
            return cc.instantiate(this.preBullet2)
        }
        return cc.instantiate(this.preBullet1)
        // switch (this.bulletType) {
        //     case 1: return cc.instantiate(this.preBullet1)
        //     case 2: return cc.instantiate(this.preBullet2)
        //     case 3: return cc.instantiate(this.preBullet3)
        //     default: return cc.instantiate(this.preBullet1)
        // }
    }

    getInitialPosition(): cc.Vec2 {

        return this.hero.node.getPosition();
    }
}
