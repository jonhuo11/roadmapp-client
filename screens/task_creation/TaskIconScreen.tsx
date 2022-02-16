import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { View , Text } from "react-native";
import { Directions, GestureDetector, GestureStateChangeEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import SwipeDirectionCalculator from "../../api/SwipeDirectionCalculator";
import StandardScreenContainer from "../../components/StandardScreenContainer";
import SwipeNavigable from "../../components/SwipeNavigable";
import TaskCreationBottomGestureLabels from "../../components/TaskCreationBottomGestureLabels";

class TaskIconScreen extends React.Component <any, {}> {
    
    render() {
        return (
            <SwipeNavigable
                goRight={()=>{
                
                }}
                goLeft={()=>{
                    this.props.navigation.dispatch(StackActions.pop());
                }}
                goUp={()=>{}}
                goDown={()=>{}}
            >
                <StandardScreenContainer>
                    <View>
                        <View>
                            <Text>
                                hello test swipe here
                            </Text>
                        </View>

                        <TaskCreationBottomGestureLabels
                            leftText="Task Duration"
                            rightText="Add this task to list"
                            midText="Add this task to list"
                            areaFlexProportion={2}
                            wrapAt={65}

                            leftNav={()=>{
                                this.props.navigation.dispatch(StackActions.pop());
                            }}
                            rightNav={()=>{
                            }}
                        />
                    </View>
                </StandardScreenContainer>
            </SwipeNavigable>
        );
    }
}

export default TaskIconScreen;