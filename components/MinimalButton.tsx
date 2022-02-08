import * as React from "react";

import {
    TouchableOpacity,
    StyleSheet,
    Text,
    GestureResponderEvent
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

class MinimalButton extends React.Component 
<
    { // props
        text: string,
        onPress: (event?: GestureResponderEvent) => void,
        activeOpacity?: number,
        outerStyle?: object,
        textStyle?: object,
    },
    {}
>
{
    render() {
        return(
            <TouchableOpacity
                style={[styles.outerStyleDefault, this.props.outerStyle]}
                activeOpacity={this.props.activeOpacity}
                onPress={(e: GestureResponderEvent) => {
                    e.preventDefault();
                    this.props.onPress(e);
                }}
            >
                <Text
                    style={[styles.textStyleDefault, this.props.textStyle]}
                >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    outerStyleDefault : {
        borderColor: Colors.black,
        borderWidth: 1,
        padding: 5,
        margin: 5,
    },
    textStyleDefault : {
        fontSize: 14,
        textAlign: "center"
    }
});

export default MinimalButton;