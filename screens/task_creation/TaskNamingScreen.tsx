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

export default class TaskNamingScreen extends SwipeNavigable <any, any>
{
    /*
    pan: PanGesture;
    swipeStart = {x: 0, y: 0};

    constructor(props: any) {
        super(props);

        // swipe gesture
        this.pan = Gesture.Pan();
        this.pan.config = {
            maxPointers: 1
        };

        this.pan.onBegin((e)=>{
            this.swipeStart = {
                x: e.x,
                y: e.y
            };
        });
        this.pan.onEnd((e)=>{
            console.log("swipe");
            // bigger difference is direction
            this.navigateTo(SwipeDirectionCalculator(this.swipeStart, e));
        });
    }*/

    onSwipeEnd(e: GestureStateChangeEvent<PanGestureHandlerEventPayload>): void {
        this.navigateTo(SwipeDirectionCalculator(this.swipeStart, e));
    }

    navigateTo(d: Directions)
    {
        switch(d)
        {
            case Directions.LEFT:
                this.props.navigation.navigate("TaskTimingScreen");
        }
    }
    
    render() {
        return (
            <GestureDetector gesture={this.pan}>
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
                                            console.log(this.context);
                                            this.navigateTo(Directions.LEFT); // left is right
                                        }, 0);
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
                                //console.log("hi");
                                this.navigateTo(Directions.LEFT);
                            }}
                        />
                    </View>
                </StandardScreenContainer>
            </GestureDetector>
        );
    }
}