import { request } from "./request";


// 左侧导航
export function getCategory() {
    return request({
        url: '/category',
    })
}

// 右侧上部图片
export function getSubcategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

// 右侧下半部商品列表
export function getCategoryDetail(miniWallkey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey,
            type
        }
    })
}
