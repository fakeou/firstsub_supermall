import {request} from "./request"

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}


export class Goods {
    // 构造函数，创建一个goods对象
    constructor(itemInfo, columns ,services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
        
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}

//构造函数的应用
// const goods = new Goods(...)
// 此时goods就有了这些goods.title
// ......
