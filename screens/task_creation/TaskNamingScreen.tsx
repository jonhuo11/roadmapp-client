/*
    TODO: make the text placeholders and page titles randomized
*/

import * as React from "react";

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Keyboard
} from "react-native";
import { Directions, Gesture, GestureDetector, GestureStateChangeEvent, PanGesture, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import SwipeDirectionCalculator from "../../api/SwipeDirectionCalculator";
import {StackActions} from "@react-navigation/native"

import StandardScreenContainer from "../../components/StandardScreenContainer";
import SwipeNavigable from "../../components/SwipeNavigable";
import TaskCreationBottomGestureLabels from "../../components/TaskCreationBottomGestureLabels";

export const TaskCreationStyles = StyleSheet.create({
    body: {
        marginHorizontal: 12.5,

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
        //borderWidth: 1
    },
    namingScreenDescContainer : {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    namingScreenDesc: {
        fontSize: 32,
        textAlign: "center"
    },
    nameInputContainer : {
        flex: 5,
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 0
    },
    nameInput: {
        borderBottomWidth: 1,
        fontSize: 26
        //top: "32.5%"
    }
});
const styles = TaskCreationStyles;

export default class TaskNamingScreen extends React.Component<any,{}>
{
    
    render() {
        return (
            <SwipeNavigable
                goRight={()=>{
                    this.props.navigation.dispatch(StackActions.push("TaskTimingScreen"));
                }}
                goLeft={()=>{
                
                }}
                goUp={()=>{}}
                goDown={()=>{}}
            >
                <StandardScreenContainer>
                    <View style={styles.body}>

                        <View style={styles.namingScreenDescContainer}>
                            <Text style={styles.namingScreenDesc}>
                                Captain, what's our next task?
                            </Text>
                        </View>

                        <View style={styles.nameInputContainer}>
                            <TextInput
                                hitSlop={{top: 25, left: 25, right: 25, bottom: 25}}
                                style={styles.nameInput}
                                placeholder="ex: Take notes on new math lectures"
                                multiline={true}
                                blurOnSubmit={true}
                                maxLength={256}
                                onSubmitEditing={
                                    (e) => {
                                        // on submission auto navigate to the next page
                                        // small delay for visual grepping
                                        Keyboard.dismiss();
                                        setTimeout(() => {
                                            this.props.navigation.dispatch(StackActions.push("TaskTimingScreen"));
                                        }, 250);
                                    }
                                }
                            />
                        </View>

                        <TaskCreationBottomGestureLabels
                            leftText="Task list"
                            midText="Add this task to list"
                            rightText="Task duration"
                            areaFlexProportion={2}
                            wrapAt={65}

                            rightNav={()=>{
                                this.props.navigation.dispatch(StackActions.push("TaskTimingScreen"));
                            }}
                        />
                    </View>
                </StandardScreenContainer>
            </SwipeNavigable>
        );
    }
}