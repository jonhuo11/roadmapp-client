import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import TaskList from "../components/TaskList";

class TaskListScreen extends React.Component <any, any> {
    render () {return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.body}>

                    <View>
                        <Text>Put a label on it!</Text>
                    </View>

                    <TaskList
                    // just some filler for now
                    tasks={[
                        {
                            taskName : "walk the dog",
                            time: "1h",
                            icon: "picture"
                        },
                        {
                            taskName : "watch some lectures and take notes",
                            time: "2h30m",
                            icon: "find"
                        },
                        {
                            taskName : "Send Child to daycare",
                            time: "30m",
                            icon: "customerservice"
                        }
                    ]}
                    ></TaskList>

                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )}
}

const styles = StyleSheet.create({
    body : {
        padding:10
    }
});

export default TaskListScreen;