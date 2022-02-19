// little bubble that scales in color according to time

import * as React from "react";

import {
    View,
    Text,
    ColorValue
} from "react-native";
import ColorGradient from "../../util/ColorGradient";

interface ITimeBubbleProps {
    time: number; // in mins
    maxTime: number; // in mins, this is basically the max color value for the gradient
    fontSize: number;
}

export default class TimeBubble extends React.Component <ITimeBubbleProps, {}> {

    toHrsMinsDisplayTime(): string {
        var hrs = Math.floor(this.props.time / 60);
        var mins = this.props.time % 60;
        return (hrs > 0 ? (hrs + "h"): "") + mins + "m";
    }

    computeColor():ColorValue{
        return ColorGradient(this.props.time, this.props.maxTime);
    }

    render() {
        return(
            <View
                style={{
                    backgroundColor: this.computeColor(),
                    borderRadius:15,
                    flexDirection: "row",
                    justifyContent:"center",
                    paddingHorizontal: 7.5,
                    paddingVertical: 2.5
                }}
            >
                <Text
                    style={{fontSize: this.props.fontSize}}
                >{this.toHrsMinsDisplayTime()}</Text>
            </View>
        );
    }

};