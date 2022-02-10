import * as React from "react";
import {StyleSheet, View} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TaskListElement from "./TaskListElement";

interface ITask {
    taskName : string;
    time : string;
    icon : string;
}
interface ITasks extends Array<ITask>{};

interface ITaskListProps{
    tasks : ITasks;
}

class TaskList extends React.Component <ITaskListProps, any> {

    fillList() {
        return (<>{
            this.props.tasks.map((task) => {
                return (
                    <TaskListElement
                        taskName={task.taskName}
                        icon={task.icon}
                        time={task.time}
                        hasMargin
                    ></TaskListElement>
                );
            })
        }</>);
    }

    render() {
        console.log(this.props.tasks[0].taskName);
        return (
            <View style={styles.taskListContainer}>
                <View style={styles.innerContainer}>
                    {/*TODO: make flat list*/}
                    {this.fillList()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    taskListContainer : {
        borderWidth: 1,
        borderColor: Colors.black,
        width: "95%",
        aspectRatio: 0.5,
        flexDirection: "column",
        alignItems: "center"
    },
    // adds padding to inside
    innerContainer : {
        padding: 10,
        flexGrow: 1,
        flexDirection: "column"
    }
});

export default TaskList;