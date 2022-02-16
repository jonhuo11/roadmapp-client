import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { View , Text, TextInput} from "react-native";
import StandardScreenContainer from "../../components/container/StandardScreenContainer";
import SwipeNavigable from "../../components/container/SwipeNavigable";
import EmojiList from "../../components/emoji_list/EmojiList";
import TaskCreationBottomGestureLabels from "../../components/task_list/TaskCreationBottomGestureLabels";
import { SearchEmojis } from "../../util/EmojiHelpers";
import { TaskCreationStyles } from "./TaskNamingScreen";

// left: TaskTiming
// right: submit task


class TaskIconScreen extends React.Component <any, {
    emojis: string[]
}> {

    state = {
        emojis : []
    }

    constructor(props:any) {
        super(props)
    }
    
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
                    <View
                        style={TaskCreationStyles.body}
                    >
                        <View
                            style={TaskCreationStyles.screenDescContainer}
                        >
                            <Text
                                style={TaskCreationStyles.screenDesc}
                            >
                                What does it look like?
                            </Text>
                        </View>

                        <View
                            style={[TaskCreationStyles.centerContainer, {
                                justifyContent:"space-evenly"
                            }]}
                        >
                            <EmojiList
                                emojisize={128}
                                ordered={this.state.emojis}
                            ></EmojiList>

                            <View
                                style={{
                                    //borderWidth:1,
                                    alignSelf:"center"
                                }}
                            >
                                <TextInput
                                    style={[TaskCreationStyles.inputField, {
                                        //borderWidth:1,
                                        //flexGrow:0
                                    }]}
                                    placeholder="Start describing the task..."
                                    multiline={false}
                                    blurOnSubmit={true}
                                    hitSlop={{top: 25, left: 25, right: 25, bottom: 25}}
                                    onChangeText={(txt)=>{
                                        SearchEmojis(txt, 10, (res, err)=>{
                                            //console.log("searching for emojis");
                                            if (err != null) {
                                                console.log(err);
                                            } else {
                                                //console.log(res);
                                                this.setState({emojis:res})
                                            }
                                        });
                                    }}
                                ></TextInput>
                            </View>
                        </View>

                        <TaskCreationBottomGestureLabels
                            leftText="Task Duration"
                            rightText="Finish editing"
                            midText="Finish editing"
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