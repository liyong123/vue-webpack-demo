import request from '@/config/request'

const postTest = (item) => {
    return request({
        url: '/api/postTest',
        data: item,
        method: 'post'
    })
}

export {
    postTest
}
