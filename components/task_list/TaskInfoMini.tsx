import * as React from "react";
import { View, Text } from "react-native";
import { TaskCreationStyles } from "../../screens/task_creation/TaskNamingScreen";

interface ITaskInfoMiniProps {
    emoji: string;
    name: string;
    time: string;
}

class TaskInfoMini extends React.Component <
    ITaskInfoMiniProps,
    {}
> {
    render() {
        return(
            <View
                style={{
                    //borderWidth: 1,
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <Text style={TaskCreationStyles.miniDescText}>
                    {this.props.emoji} {this.props.name}
                </Text>
                <Text style={TaskCreationStyles.miniDescText}>
                    {this.props.time}
                </Text>
            </View>
        );
    }
}

export default TaskInfoMini;