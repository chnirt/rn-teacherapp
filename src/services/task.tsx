import {instance} from './base'

export const getTaskList = async (id: number) => {
    const data = await instance.get(`classes/${id}/session-attendances`)
    return data
}

export const postTask = async (id: number, params: Object) => {
    const data = await instance.post(`classes/${id}/session-attendances`, params)
}

export const putTask = async (id: number, session: string, params: Object) => {
    const data = await instance.put(`classes/${id}/${session}/session-attendances`, params)
}

export const deleteTask = async (id: number, session: string) => {
    const data = await instance.delete(`classes/${id}/${session}/session-attendances`)
}

export const getTaskMemberList = async (id: number, session: string) => {
    const data = await instance.get(`classes/${id}/session-attendances/${session}/members`)
    return data
}

export const putTaskMember = async (id: number, session: string, params: Object) => {
    const data = await instance.put(`classes/${id}/session-attendances/${session}/attendance`, params)
    return data
}