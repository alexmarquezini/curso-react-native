import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'


export default () => <Text style={Estilo.bigFont}>Comp #Oficial!</Text>

export function Comp1(){
    return <Text style={Estilo.bigFont}>Comp #1</Text>
}

export function Comp2(){
    return <Text style={Estilo.bigFont}>Comp #2</Text>
}
