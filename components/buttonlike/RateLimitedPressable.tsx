// Pressable that prevents spam pressing

import React from "react";
import { Pressable } from "react-native";

interface IRateLimitedPressableProps {
    interval: number;
    cb: Function | undefined;
}

export default class RateLimitedPressable extends React.Component 
<
    IRateLimitedPressableProps,
    {
        lastPress: number
    }
>
{
    state = {
        lastPress: 0
    }

    constructor(props: IRateLimitedPressableProps) {
        super(props)
    }

    render() {
        return(
            <Pressable
                onPress={()=>{
                    var t = Date.now();
                    if (t - this.state.lastPress > this.props.interval) {
                        this.setState({lastPress: t});
                        if (this.props.cb != undefined) {
                            this.props.cb();
                        }
                    }
                    else {
                        console.log("too quick!!");
                    }
                }}
            >
                {this.props.children}
            </Pressable>
        );
    }
}