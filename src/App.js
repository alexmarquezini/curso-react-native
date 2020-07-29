import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'

import Primeiro from './components/Primeiro'
import Oficial, {Comp1, Comp2} from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'

export default() =>(
    <SafeAreaView style={style.App}>
        <Aleatorio min={10} max={30}/>
        <MinMax min={20} max={100}/>
        <Oficial />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})

 