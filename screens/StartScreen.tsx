// just a testing screen with links

import * as React from "react";
import {View, Text, Button} from "react-native";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";


class StartScreen extends React.Component <any, any> {
    render () {return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>

                <View>
                    <Text>Whats up</Text>

                    <Button
                        title="Home screen"
                        onPress={()=>{
                            this.props.navigation.navigate("HomeScreen");
                        }}
                    ></Button>

                    <Button
                        title="Go to tasks"
                        onPress={() => {
                            this.props.navigation.navigate("TaskListScreen");
                        }}
                    ></Button>

                    <Button
                        title="Go to login"
                        onPress={()=>{
                            this.props.navigation.navigate("LoginScreen");
                        }}
                    ></Button>

                    <Button
                        title="signup"
                        onPress={()=>{
                            this.props.navigation.navigate("SignupScreen");
                        }}
                    ></Button>

                    <Button
                        title="Go to testing screen"
                        onPress={()=>{
                            this.props.navigation.navigate("TestScreen");
                        }}
                    ></Button>

                    <Button
                        title="task creation"
                        onPress={()=>{
                            this.props.navigation.navigate("TaskCreationScreenManager");
                        }}
                    ></Button>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )}
}

export default StartScreen;