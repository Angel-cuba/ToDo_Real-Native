import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const TaskItem = ({ task, handleDelete }) => {
     const navigation = useNavigation()
     return (
          <View style={styles.itemContainer}>
               <View style={styles.texto}>
                     <TouchableOpacity 
                         onPress={() => navigation.navigate('TaskFormScreen', { id: task.id })}
                          >
                    <Text style={styles.itemTitle, { color: "#000000"}}>{task.title}</Text>
                    <Text style={styles.itemTitle}>{task.description}</Text>  
               
     
               </TouchableOpacity>
               </View>
          <View style={styles.buttons}>   
               <TouchableOpacity 
               style={{backgroundColor: "#a40606", borderRadius: 3, marginLeft: 10}}
               onPress={() => handleDelete(task.id)}
               >
                    <Text style={styles.smallText}>Delete</Text>
               </TouchableOpacity>
                </View>
          </View>
               )
}
const styles = StyleSheet.create({
     itemContainer: {
          backgroundColor: "#166d3b",
          padding: 20,
          marginVertical: 8,
          borderRadius: 5,
          flexDirection: "row",
          justifyContent: "space-between"

     }, 
     itemTitle: {
          color: "#d3d3d3",
          fontWeight: "800",
     },
     texto: {
          backgroundColor: "rgba(0,0,0,.023451)",
          padding: 20,
          borderRadius: 8,
          maxWidth: "60%"
     },
     buttons:{
          flexDirection: "row",
          alignItems: "center"   
     },
     smallText: {
          color: "#d3d3d3",
          padding: 6,
          fontWeight: "700",
     }
})

export default TaskItem
