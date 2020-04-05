import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>날씨 정보를 불러오는 중입니다...</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor: "#004680",
    },
    text: {
        color: "white",
        fontSize:30,
        textAlign:"center",
        lineHeight: 50,
    }
})