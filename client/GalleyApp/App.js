import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'
import EditScreen from './screens/EditScreen'

const Stack = createNativeStackNavigator()

const App = ()=> {
  return (
   <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="HomeScreen" component={HomeScreen} options={
             ({navigation}) => ({ 
                                headerStyle: { backgroundColor: "#1d2951"}, 
                                headerTitleStyle: { color: "#ffffff"}, 
                                headerRight: () => (
                                  <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen")}>
                                    <Text style={{
                                              color: "#d3d3d3", 
                                              marginRight: 20, 
                                              fontSize: 20
                                              }}>
                                                New
                                    </Text>
                                  </TouchableOpacity>
                                        
                                      )
                              } )
           }
           />
           {/* <Stack.Screen name="EditScreen" component={EditScreen} options={{
             title: 'Edit sidebar', 
             headerStyle: { 
               backgroundColor: "#1d2951"
               },
                headerTitleStyle: { color: "silver"},
               headerTintColor: 'crimson',
           }}/> */}
           <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} options={{
             title: 'Creating a new task',
             headerStyle: {
               backgroundColor: "#1d2951"
               },
               headerTitleStyle: { color: "silver"},
               headerTintColor: 'crimson',

           }}/>
   
        </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
