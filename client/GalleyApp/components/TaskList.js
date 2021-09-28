import React, { useEffect, useState } from 'react'
import { FlatList, RefreshControl} from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import TaskItem from './TaskItem'

import { getTasks, deleteTask } from '../api'

const TaskList = () => {

       const [ tasks, setTasks ] = useState([])
       const [ refreshing, setRefreshing ] = useState(false)

       const isFocused = useIsFocused()

const LoadTasks = async () => {
   const data= await getTasks()
   console.log(data)
   setTasks(data)
      }     
useEffect(() => {
      if(isFocused){
            LoadTasks()
      }     
}, [isFocused])

const handleDelete = async (id) => {
      // console.log(id)
      await  deleteTask(id)
      await LoadTasks()
}

const renderItem= ({item}) => {
            return   <TaskItem task={item} handleDelete={handleDelete}/>
}
//Usando Callback de React
const onRefresh = React.useCallback(
      async() => {
             setRefreshing(true)
             await LoadTasks()
            setRefreshing(false)
      
      }
)
return (
           <FlatList 
           style={{width: '100%'}}
               data={tasks}
               keyExtractor={(item) => item.id + ''}
               renderItem={ renderItem }
               refreshControl={
                     <RefreshControl
                     refreshing={refreshing}
                      progressBackgroundColor= "#2a2a72"
                      progressTextColor= "#ffffff"
                        onRefresh={onRefresh}
                      />
                   }  
                      
                 /> 
                 )
                              
                     
                                  
     
  }    
export default TaskList