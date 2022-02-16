// horizontal flatlist of emojis

import React from "react";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import BigEmoji from "./BigEmoji";

interface IEmojiListProps {
    emojisize: number;
    ordered: string[];
}

interface IEmojiListState {

}

class EmojiList extends React.Component<IEmojiListProps, IEmojiListState> {
    constructor(props: IEmojiListProps) {
        super(props);

        this.getEmojiComponent = this.getEmojiComponent.bind(this);
    }

    componentDidMount() {
        
    }

    getEmojiComponent (itemObj:any):any { 
        //console.log(itemObj.item);
        return <BigEmoji
            size={this.props.emojisize}
            code={itemObj.item}
        ></BigEmoji>;
    }

    render() {
        //console.log(this.props);
        return(
            <FlatList
                style={{
                    //borderWidth:1,
                    flexGrow:0
                }}
                horizontal={true}
                renderItem={this.getEmojiComponent}
                data={this.props.ordered}
            />
        );
    }
}

export default EmojiList;