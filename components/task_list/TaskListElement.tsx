import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TimeBubble from '../misc/TimeBubble';

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
                        <Text>insert icon</Text>
                    </View>

                    <View style={styles.taskDataContainer}>
                        
                        <View
                            style={{
                                //borderWidth:1,
                                width: "100%",
                                flexDirection:"row"
                            }}
                        >
                            <Text
                                style={{
                                    flex: 1,
                                    //width: 1,
                                    flexWrap: "wrap"
                                }}
                            >{this.props.taskName}</Text>
                        </View>

                        <View
                        >
                            <TimeBubble
                                time={69}
                                maxTime={120}
                                fontSize={14}
                            />
                        </View>
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
        flex: 1,
        flexDirection : 'row'
    },
    taskIconContainer : { // TODO: center the icon better
        flex: 1,
        flexDirection : "column",
        paddingRight: 5
    },
    taskDataContainer : {
        //borderWidth: 1,
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    hasMargin : {
        marginTop: 5,
        marginBottom: 5
    }
});

export default TaskListElement;