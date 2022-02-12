import * as React from "react";
import {NavigationContainer, StackActions} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import StartScreen from "./screens/StartScreen";
import TaskListScreen from "./screens/TaskListScreen";
import LoginScreen from "./screens/LoginScreen";
import TestScreen from "./screens/TestScreen";
import TaskCreationScreenManager from "./screens/task_creation/TaskCreationScreenManager";
import SignupScreen from "./screens/SignupScreen";

const Stack = createNativeStackNavigator();

class App extends React.Component{

    render() {return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="StartScreen"
                screenOptions={{
                    gestureEnabled: false,
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="TestScreen"
                    component={TestScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name="StartScreen"
                    component={StartScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name="TaskListScreen"
                    component={TaskListScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                ></Stack.Screen>

                <Stack.Screen
                    name="TaskCreationScreenManager"
                    component={TaskCreationScreenManager}
                ></Stack.Screen>
                
            </Stack.Navigator>
        </NavigationContainer>
    )};
}

export default App;