import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    const { min, max } = props;
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <Text style={Estilo.bigFont}>O Valor é : {result}</Text>
    )
}