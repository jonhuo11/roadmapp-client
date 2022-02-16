import { StackActions } from "@react-navigation/native";
import * as React from "react";
import { View , Text, TextInput} from "react-native";
import StandardScreenContainer from "../../components/container/StandardScreenContainer";
import SwipeNavigable from "../../components/container/SwipeNavigable";
import EmojiList from "../../components/emoji_picker/EmojiPicker";
import TaskCreationBottomGestureLabels from "../../components/task_list/TaskCreationBottomGestureLabels";
import { SearchEmojis } from "../../util/EmojiHelpers";
import { TaskCreationStyles } from "./TaskNamingScreen";

// left: TaskTiming
// right: submit task


class TaskIconScreen extends React.Component <any, {
    emojiTemp: string
}> {

    state = {
        emojiTemp : "joy"
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
                            style={TaskCreationStyles.centerContainer}
                        >
                            <EmojiList
                                temp={this.state.emojiTemp}
                            ></EmojiList>

                            <TextInput
                                style={TaskCreationStyles.inputField}
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
                                            this.setState({emojiTemp:res[0]})
                                        }
                                    });
                                }}
                            ></TextInput>
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