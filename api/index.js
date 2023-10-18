import request from '@/utils/request.js'

// 解决方案-列表
export function caseListApi(data) {
  return request({
    url: '/solution/list',
    method: 'get',
    data
  })
}
