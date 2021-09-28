import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout'

import { saveTask, getTask, updateTask } from '../api'


const EditScreen = ({ navigation, route }) => {
        const [task, setTask] = useState({
          title: '',
          description: ''
     })

     const handleChange= (name, value) => setTask({ ...task, [name] : value })


     const handleSubmit = async () => {
        try {
          //     if(!edit) {
               //     await saveTask(task)
               //     clearTimeout(Interval) 
               // }

           await updateTask(route.params.id, task)
        
         navigation.navigate('HomeScreen')
        } catch (error) {
          console.error(error)   
        }
    } 

    useEffect( () => {
         setTimeout(() => readOne(), 500)                  
                    },
                     [])

    const readOne = async () => {
         try {
              if(route.params)
              console.log('routesparams',route.params)
              { const Onetask = await getTask(route.params.id)
              console.log('ontask-----', Onetask)
                setTask({ title: Onetask[0].title, description: Onetask[0].description})}
         } catch (error) {
              console.error(error)
         }
              
    }


     return (
          <Layout>
                <Text></Text>
          </Layout>
          
            
     
     )
}

const styles = StyleSheet.create({})


export default EditScreen