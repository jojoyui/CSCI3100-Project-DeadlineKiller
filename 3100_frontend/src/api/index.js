import {service} from '@/plugins/request_service'

export function saveIndex(data){
    return service({
        url: '/index/save',
        method: 'post',
        data: data
    })
}