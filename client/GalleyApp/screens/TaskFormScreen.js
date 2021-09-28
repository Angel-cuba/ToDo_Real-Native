import React, {useState, useEffect, useLayoutEffect} from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Layout from '../components/Layout'

import { saveTask, getTask, updateTask } from '../api'

const TaskFormScreen= ({ navigation, route })=> {
     const [task, setTask] = useState({
          title: '',
          description: ''
     })
     const [edit, setEdit] = useState(false)

// console.log(route.params.id)
     const handleChange= (name, value) => setTask({ ...task, [name] : value })
   
    const handleSubmit = async () => {
        try {
            if(!edit) {
                    await saveTask(task)
                }
               else{
                    await updateTask(route.params.id, task)
               }
           
         navigation.navigate('HomeScreen')
        } catch (error) {
          console.error(error)   
        }
    } 

     // useLayoutEffect(() => {
     //      if(route.params){
             
     //           navigation.setOptions({ headerTitle: 'Updating task'})
     //           setEdit(true)
     //           }
              
     // }, [])
    

    useEffect( () => {
           if(route.params){
             
               navigation.setOptions({ headerTitle: 'Updating task'})
               setEdit(true)
               setTimeout(() => readOne(), 500)
               }
                    },
                     [])

    const readOne = async () => {
               try {
              if(route.params){ 
              const Onetask = await getTask(route.params.id)
                setTask({ title: Onetask[0].title, description: Onetask[0].description})}
         } catch (error) {
              console.error(error)
         }
    }
     return (

          <Layout>
               <TextInput 
               style={styles.input} 
               placeholder="Write a title..."
               placeholderTextColor= "#546574"
               onChangeText={(text) => handleChange('title', text)}
               value={task.title}/>
               <TextInput 
               style={styles.input} 
               placeholder="Give a small description..."
               placeholderTextColor= "#546574"
               onChangeText={(text) => handleChange('description', text)}
               value={task.description}/>

               { 
                    !edit ? (
                 
                       
               <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Save new Task</Text>
               </TouchableOpacity>
                     
                    
               ) : (

                        
                         <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Update Task</Text>
               </TouchableOpacity>               
               )
               }

          </Layout>
       
     )
}

const styles = StyleSheet.create({
     input: {
          width: '90%',
          height: 35,
          textAlign: 'center',
          backgroundColor: 'silver',
          fontSize: 16,
          marginVertical: 10,
          borderRadius: 5,
          paddingLeft: 8,
          color: "#44000b", 
          letterSpacing: 1,
     },
     buttonSave: {
          backgroundColor: '#37d5d6',
          padding: 10,
          marginTop: 20, 
          borderRadius: 8,
          width: '80%',
     },
     buttonUpdate: {
          backgroundColor: '#5d4257',
          padding: 10,
          marginTop: 20, 
          borderRadius: 8,
          width: '80%',
     },
     buttonText: {
          textAlign: 'center',
          fontSize: 20, 
          fontWeight: 'bold',
          color: "#09203f", 

     }
})


export default TaskFormScreen