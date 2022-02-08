import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {AntDesign} from '@expo/vector-icons';

interface ITaskListElementProps {
    taskName : string;
    icon : string;
    time : string;
    hasMargin? : boolean;
}

interface ITaskListElementState {

}

class TaskListElement extends Component
<ITaskListElementProps, ITaskListElementState>
{
    render() {
        return (
            <View style={[styles.outerContainer, this.props.hasMargin ? styles.hasMargin : {}]}>
                <View style={styles.innerContainer}>
                    <View style={styles.taskIconContainer}>
                        {/* @ts-ignore */}
                        <AntDesign name={this.props.icon} color="black" style={{fontSize: "77.5%", alignSelf:"flex-start"}}></AntDesign>
                    </View>
                    <View style={styles.taskDataContainer}>
                        <View
                            style={{
                                flexGrow: 1,
                                flexDirection: 'row'
                            }}
                        >
                            <Text 
                                style={{
                                    fontSize:16,
                                    flex: 1,
                                    width: 1
                                }}
                            >{this.props.taskName}</Text>
                        </View>

                        <Text >{this.props.time}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // each element is a single tile in a scrollable list of tasks
    // the list should be basically the whole TaskList page
    outerContainer : {
        borderWidth: 1,
        borderColor : Colors.black,

        // width should take up most of tasklist container
        width: "90%",
        /*
        height should be dependent on width, it should try to be a fixed ratio
        with the width
        */
        aspectRatio: 3.1415,
        flexDirection: "row"
    },
    /*
        task icon on the left
        in another view, task name on the right and time underneath
    */
    innerContainer : {
        padding: 10,
        flexDirection : 'row',
        flexWrap: 'nowrap',
        alignSelf: 'center'
    },
    taskIconContainer : {
        flexBasis: "33%",
        flexDirection : "column",
        paddingRight: 10
    },
    taskDataContainer : {
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    hasMargin : {
        marginTop: 5,
        marginBottom: 5
    }
});

export default TaskListElement;