import request from '@/utils/request'

// 人员分析
export function getTest(query) {
  return request({
    url: '/get/test',
    method: 'get',
    params: query
  })
}
//POST TEST
export function postTest(data) {
  return request({
    url: '/post/test',
    method: 'post',
    data: data
  })
}
