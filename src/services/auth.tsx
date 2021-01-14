import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from './base'

export const postSignIn = async (params: Object) => {
    const data = await instance.post('signin', params)
    if(data) {
        const tokenTypePair = ['@token_type', data?.token_type];
        const tokenPair = ['@token', data?.access_token];
        const refreshTokenPair = ['@refresh_token', data?.refresh_token];
        await AsyncStorage.multiSet([
            tokenTypePair,
            tokenPair,
            refreshTokenPair,
        ]);
        return true;
    } else {
        return false;
    }
}

export const postSignUp = async (params: Object) => {
    const data = await instance.post('signup', params)
}

export const getSignOut = async () => {
    const data = await instance.get('signout')
    data && await AsyncStorage.clear();
}