/*
    a vertical box defining a left, right, up, down direction of slider
    sliding finger from bottom to top moves slider
    color gradient depending on location
*/

import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { 
    Gesture, 
    Directions, 
    GestureDetector, 
    GestureStateChangeEvent, 
    PanGestureHandlerEventPayload,
    GestureUpdateEvent
} from 'react-native-gesture-handler';
import { PanGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';


interface IVerticalCurveSliderSelectProps {
    width: string | number; // percentage of the hitbox size
    height: string | number;
    hboxWidth: string | number;
    scalerFunction: (x: number)=>number;
    scalerMaxInput: number;
    textComputeFunction: (value: number)=>string;
    onSelect: (currentValue: number)=>any; // once the user lifts their finger, having selected a time
}

interface IVerticalCurveSliderSelectState {
    barY: number
}

class VerticalCurveSliderSelect extends React.Component <IVerticalCurveSliderSelectProps, IVerticalCurveSliderSelectState> {
    pan: PanGesture;

    dynMaxHeight: number; // max height of the bar
    barstartpt: number;
    fingerstartpt: number;

    state = {
        barY: 0
    };

    constructor(props: IVerticalCurveSliderSelectProps)
    {
        super(props);

        this.dynMaxHeight = 0;
        // bar state
        this.barstartpt = 0;
        this.fingerstartpt = 0;

        // BIND FIRST
        this.onFirstContact = this.onFirstContact.bind(this);
        this.onChangeFingerPos = this.onChangeFingerPos.bind(this);

        // panning stuff
        this.pan = Gesture.Pan();
        this.pan.config = {
            maxPointers: 1
        };
        this.pan.onStart(this.onFirstContact);
        this.pan.onUpdate(this.onChangeFingerPos)
    }

    onFirstContact(e: GestureStateChangeEvent<PanGestureHandlerEventPayload>)
    {
        //console.log(this.state);
        //console.log(this);
        this.barstartpt = this.state.barY;
        this.fingerstartpt = e.y;
        //console.log("test");
    }

    onChangeFingerPos(e: GestureUpdateEvent<PanGestureHandlerEventPayload>)
    {
        
        const touchy = e.y;
        const delta = touchy - this.fingerstartpt;
        var newRealY = this.barstartpt - delta;
        if (newRealY < 0)
        {
            newRealY = 0;
        } else if (newRealY > this.dynMaxHeight)
        {
            newRealY = this.dynMaxHeight;
        }
        //console.log(newRealY);
        this.setState({
            barY: newRealY
        });
        //console.log(newRealY);
    }

    // reads state.y
    computeRealValue():number
    {
        const percentOfDynMaxY: number = this.dynMaxHeight == 0 ? 0 : this.state.barY / (this.dynMaxHeight);
        const scalerOut = this.props.scalerFunction(percentOfDynMaxY * this.props.scalerMaxInput);
        return scalerOut;
    }

    render() {
        return (
            // the hitbox
            <GestureDetector
                gesture={this.pan}
            >
                <View
                    style={{
                        //borderWidth:1,
                        width: this.props.hboxWidth,
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 28,
                            flexShrink: 1
                        }}
                    >
                        {this.props.textComputeFunction(this.computeRealValue())}
                    </Text>
                    
                    {/* the actual slider itself */}
                    <View
                        style={[styles.sliderbox, {
                            width: this.props.width,
                            height: this.props.height,
                            flexDirection: "column-reverse",
                            flexShrink: 9
                        }]}

                        onLayout={(e)=>{
                            // upon loading the page, set the max height
                            this.dynMaxHeight = e.nativeEvent.layout.height;
                        }}
                    >
                        <View
                            style={[styles.sliderbar, {
                                height: this.state.barY,
                            }]}
                        ></View>
                    </View>
                </View>
            </GestureDetector>
        );
    }
}

const styles = StyleSheet.create({
    sliderbox : {
        borderWidth: 1
    },
    sliderbar: {
        width: "100%",
        borderTopWidth: 1,
        backgroundColor: "#FF00FF"
    }
});

export default VerticalCurveSliderSelect;