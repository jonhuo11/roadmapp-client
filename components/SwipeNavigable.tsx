//TODO: this is a bit of a hack. we will make own wrapper like react navigator eventually

import * as React from "react";
import { PanGesture, Gesture, Directions, GestureStateChangeEvent, PanGestureHandlerEventPayload, GestureDetector } from "react-native-gesture-handler";
import SwipeDirectionCalculator from "../api/SwipeDirectionCalculator";

export default abstract class SwipeNavigable extends React.Component
<
    {
        goRight: ()=>any;
        goLeft: ()=>any;
        goUp: ()=>any;
        goDown: ()=>any;
    },
    {}
>
{
    pan: PanGesture;
    swipeStart = {x: 0, y: 0};

    constructor(props: any) {
        super(props);

        // swipe gesture
        this.pan = Gesture.Pan();
        this.pan.config = {
            maxPointers: 1
        };

        this.pan.onBegin((e)=>{
            this.onSwipeStart(e);
        });
        this.pan.onEnd((e)=>{
            this.onSwipeEnd(e);
        });
    }

    onSwipeStart(e: GestureStateChangeEvent<PanGestureHandlerEventPayload>){
        this.swipeStart = {
            x: e.x,
            y: e.y
        };  
    }

    onSwipeEnd(e: GestureStateChangeEvent<PanGestureHandlerEventPayload>){
        this.navigateTo(SwipeDirectionCalculator(this.swipeStart, e));
    }

    navigateTo(d: string)
    {
        console.log(d);
        if (d == "r") {
            this.props.goRight();
        } else if (d == "l") {
            this.props.goLeft();
        }
    }

    render(){return(
        <GestureDetector gesture={this.pan}>
            {this.props.children}
        </GestureDetector>
    );}


};