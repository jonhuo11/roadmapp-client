import * as React from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";

interface IBigEmojiProps {
    code:string
    size:number
}

export default class BigEmoji extends React.Component<IBigEmojiProps, {}> {
    render() {return(
        <TouchableWithoutFeedback
            style={{
                //flex: 1,
                //flexDirection:"column",
                //justifyContent:"center"
            }}
        >
            <Text
                style={{
                    fontSize:this.props.size
                    //borderWidth:1
                }}
            >
                {this.props.code}
            </Text>
        </TouchableWithoutFeedback>
    );}
}