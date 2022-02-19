/*
    for creating a new task
    subscreens:
    1. naming
       lets you name the task
    2. select time
       time needed picker
    3. icon
       select an icon to represent the task

    will need a subnavigator
    should be able to swipe back and forth between each subscreen
    final swipe right exits this task creation subscreens and goes to task list, highlighting task

    TODO: make screen split follow finger when going back and forth

    TODO: android back button might break this, need to disable 
*/

import * as React from "react";
import {

} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TaskNamingScreen from "./TaskNamingScreen";
import TaskTimingScreen from "./TaskTimingScreen";
import TaskIconScreen from "./TaskIconScreen";

const Stack = createNativeStackNavigator();

// no actual screen here just hold a navigator
class TaskCreationScreenManager extends React.Component {

   render() {
      return (
         <Stack.Navigator
            initialRouteName="TaskNamingScreen"
            screenOptions={{
               headerShown: false,
               gestureEnabled: false
            }}
         >

            <Stack.Screen
               name="TaskNamingScreen"
               component={TaskNamingScreen}
            />

            <Stack.Screen
               name="TaskTimingScreen"
               component={TaskTimingScreen}
            />

            <Stack.Screen
               name="TaskIconScreen"
               component={TaskIconScreen}
            />

         </Stack.Navigator>
      );
   }
}

export default TaskCreationScreenManager;
