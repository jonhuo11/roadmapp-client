// horizontal flatlist of emojis

import React from "react";
import { View, Text } from "react-native";

interface IEmojiPickerProps {
    temp: string
}

interface IEmojiPickerState {

}

class EmojiList extends React.Component<IEmojiPickerProps, IEmojiPickerState> {
    constructor(props: IEmojiPickerProps) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <View>
                <Text>{this.props.temp}</Text>
            </View>
        );
    }
}

export default EmojiList;