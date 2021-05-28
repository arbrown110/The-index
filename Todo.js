import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Todo = ({ title='I need something' }) => {
    return (
        <View>
            <Text style={StyleSheet.row}>
            {title}
            </Text>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },

    row: {
        padding: 4,
        borderBottomColor: " green",
        
    }
})







//rnfes = template with styles