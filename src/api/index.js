import request from '@/utils/request'

// GET TEST
export function getklWarning(query) {
  return request({
    url: '/cityScenicSpotFlow/passengerFlowWarning',
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
