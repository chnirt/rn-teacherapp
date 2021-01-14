import React, {ReactNode} from 'react';
import {
    View
} from 'react-native'
import axios from 'axios';
import {useSetRecoilState} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {errorCodeState} from '../atoms';

const baseUrl = 'https://classc.loco-co.com'

export interface AxiosProps {
    children: ReactNode;
}


export const instance = axios.create({
    baseURL: `${baseUrl}/api/v1/`,
    timeout: 5000,
});


export const AxiosProvider = ({children}: AxiosProps) => {
    const errorCode = useSetRecoilState(errorCodeState);
    instance.interceptors.request.use (
        async (config) => {
            const token = await AsyncStorage.getItem('@token');
            const tokenType = await AsyncStorage.getItem('@token_type');
            config.headers.Authorization = token ? `${tokenType} ${token}` : null;
            return config;
        },
        (error) => {
          return Promise.reject (error);
        }
    );

    instance.interceptors.response.use((response) => {
    // console.log(response)
    if (response?.status >= 200 && response?.status <= 299) {
        errorCode(0)
        if (response?.data === '') {
            return true;
        }
        return response?.data ?? true;
    }
    return response;
    }, (error) => {
        // console.log(error.response);
        if (error.response) {
            errorCode(1)
            // console.log(error.response);
        if (error.response.status === 401) {
        }
        } else if (error.request) {
            // console.log(error.request);
        } else {
            // console.log('Error', error.message);
        }
        return Promise.reject(error);
    });

    return (
        <View style={{flex: 1}}>
            {children}
        </View>
    )
}