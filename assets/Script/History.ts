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
export default class History extends cc.Component {

    @property(cc.Node) scrollView: cc.Node = null
    @property(cc.Prefab) scoreCell: cc.Prefab = null

    onLoad() {

        cc.log('历史记录')
        // let s = [0, 1, 2, 3, 4, 5]
        // for (let i in s) {
        //     cc.log(i)
        //     var cell = cc.instantiate(this.scoreCell)
        //     this.scrollView.addChild(cell)
        // }

        this.reloadData()
    }

    reloadData() {
        let cd = JSON.parse(cc.sys.localStorage.getItem('currentScore'))
        if (cd == null) {return}
        // cc.sys.localStorage.removeItem('currentScore')

        for (var i = 0; i < cd.idx + 1; i ++) {
            let key = 'score_' + i
            // cc.log(key)
            // cc.sys.localStorage.removeItem(key)
            let sd = JSON.parse(cc.sys.localStorage.getItem(key))
            
            var cell = cc.instantiate(this.scoreCell)
            this.scrollView.addChild(cell)
            cell.getComponent('ScoreCell').reloadData(sd.score, sd.ctime)
        }
    }

    backAction() {
        cc.director.loadScene('endScene');
    }
}
