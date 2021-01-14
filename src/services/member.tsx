import {instance} from './base'

export const getMemberList = async (id: number) => {
    const data = await instance.get(`classes/${id}/members`)
    return data
}

export const postMember = async (id: number, params: Object) => {
    const data = await instance.post(`classes/${id}/members`, params)
}

export const putMember = async (id: number, member: string, params: Object) => {
    const data = await instance.put(`classes/${id}/members/${member}`, params)
}

export const deleteMember = async (id: number, member: string) => {
    const data = await instance.delete(`classes/${id}/members/${member}`)
}