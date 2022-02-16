/*

TODO features

- color gradient on the slider from green to red
- in slider control area, slideX > (1.5 * slideX) should switch pages

*/
import { StackActions } from "@react-navigation/native";
import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import VerticalCurveSliderSelect from "../../components/VerticalCurveSliderSelect";
import StandardScreenContainer from "../../components/StandardScreenContainer";
import SwipeNavigable from "../../components/SwipeNavigable";
import TaskCreationBottomGestureLabels from "../../components/TaskCreationBottomGestureLabels";
import { TaskCreationStyles } from "./TaskNamingScreen";

const styles = StyleSheet.create({

});

class TaskTimingScreen extends React.Component <any, {}>{

    render() {
        return(
            <SwipeNavigable
                goRight={()=>{
                    this.props.navigation.dispatch(StackActions.push("TaskIconScreen"));
                }}
                goLeft={()=>{
                    this.props.navigation.dispatch(StackActions.pop());
                }}
                goUp={()=>{}}
                goDown={()=>{}}
            >
                <StandardScreenContainer>
                    <View style={TaskCreationStyles.body}>
                        <View style={TaskCreationStyles.namingScreenDescContainer}>
                            <Text style={TaskCreationStyles.namingScreenDesc}>
                                How long will it take?
                            </Text>
                        </View>

                        {/* contains the main slider feature */}
                        <View
                            style={[TaskCreationStyles.nameInputContainer, {
                                //borderWidth: 1,
                                flexDirection: "column",
                                alignItems: "center",
                                width: "100%"
                            }]}
                        >

                            {/*
                                A number with a color displaying time in hrs and secs
                                
                                rectangle with color from green to red
                            */}

                            <VerticalCurveSliderSelect
                                hboxWidth="100%"
                                width="30%"
                                height="80%"
                                scalerFunction={(x)=>{return x**2}}

                                scalerMaxInput={128} // will need to base this off user stuff
                                textComputeFunction={(value)=>{
                                    //TODO will need to compute this based on user settings and stuff once redux is added

                                    var v = Math.round(value);

                                    var max = 128**2;
                                    var tempTimeMax = 360;
                                    var p = v/max;
                                    var ptime = Math.round(p * tempTimeMax);
                                    var quotient = Math.floor(ptime/60);
                                    var remainder = ptime % 60;

                                    return quotient + "h" + remainder + "m";
                                }}

                                onSelect={()=>{}} // set the value as this
                            ></VerticalCurveSliderSelect>

                        </View>

                        <TaskCreationBottomGestureLabels
                            leftText="Rename task"
                            rightText="Select an icon"
                            midText="Add this task to list"
                            areaFlexProportion={2}
                            wrapAt={65}

                            leftNav={()=>{
                                this.props.navigation.dispatch(StackActions.pop())
                            }}
                            rightNav={()=>{
                                this.props.navigation.dispatch(StackActions.push("TaskIconScreen"));
                            }}
                        />
                    </View>
                </StandardScreenContainer>
            </SwipeNavigable>
        )
    }

}

export default TaskTimingScreen