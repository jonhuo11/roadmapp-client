import * as React from "react";
import {
    Keyboard,
    Pressable
} from "react-native";

// enclose the screen with this if u want tapping to hide any active keyboard

export default class HideableKeyboardArea extends React.Component <{style?: object},{}> {
    render() { return (
        <Pressable
            onPress={
                () => {
                    Keyboard.dismiss();
                }
            }
            style={this.props.style}
        >
            {this.props.children}
        </Pressable>
    );}
}