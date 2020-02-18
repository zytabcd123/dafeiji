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
export default class Hero extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log('~~~~~~~~~~英雄加载')
        cc.director.getCollisionManager().enabled = true;
        this.onDrag();
    }

    start () {

    }

    // update (dt) {}

    //添加拖动监听
    onDrag(){
        this.node.on('touchmove', this.dragMove, this);
    }
    //去掉拖动监听
    offDrag(){ 
         this.node.off('touchmove', this.dragMove, this);
    }
    //拖动
    dragMove(event){ 
        var locationv = event.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        //飞机不移出屏幕 
        var minX = -this.node.parent.width/2
        var maxX = -minX;
        var minY = -this.node.parent.height/2
        var maxY = -minY;
        if (location.x< minX){
            location.x = minX;
        }
        if (location.x>maxX){
            location.x = maxX;
        }
        if (location.y< minY){
            location.y = minY;
        }
        if (location.y> maxY){
            location.y = maxY;
        }
        // cc.log('飞机', location.x, location.y)
        this.node.setPosition(location);
    }

}
