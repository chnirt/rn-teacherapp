import {instance} from './base'

export const getClassList = async () => {
    const data = await instance.get('classes')
    return data
}

export const getClass = async (id: string) => {
    const data = await instance.get(`classes/${id}`)
    return data
}

export const postClass = async (params: Object) => {
    const data = await instance.post('classes', params)
}

export const putClass = async (id: string, params: Object) => {
    const data = await instance.put(`classes/${id}`, params)
}

export const deleteClass = async (id: string) => {
    const data = await instance.delete(`classes/${id}`)
}