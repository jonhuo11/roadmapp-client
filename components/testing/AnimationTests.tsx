// a single element which you can swipe off the side of the screen
/*
 *
 * basically tracks gesture, putting the position of the view underneath the user finger
 * once finger crosses certain boundary, element falls off screen
 * 
 */

import * as React from 'react';
import {
    View,
    Animated,
    Dimensions,
    Text,
    Easing
} from 'react-native';

class AnimationTests extends React.Component {

    // why is fingerX a property and not stored in state?
    // any updates to state trigger a re-render of the component
    // ideally we dont render every time fingerX changes
    //fingerX = new Animated.Value(0);

    state = {
        dimensions: {
            window
        },
        testWidth: new Animated.Value(0),
        touchPos: new Animated.ValueXY({x: 0, y: 0})
    };

    // animate width test
    animWidth() {
        this.state.testWidth.setValue(0);
        Animated.timing(this.state.testWidth, {
            toValue: 300,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(() => {this.animWidth()}); // once done, run again
    }

    onDimensionsChange(window: any) {
        this.setState({dimensions: {window}})
    }

    componentDidMount() {
        Dimensions.addEventListener("change", this.onDimensionsChange);

        // test animation
        this.animWidth();
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onDimensionsChange);
    }

    render() {
        const windowWidth = (this.state.dimensions.window as any).width;


        return(
            <View>
                {/* simple width animation */}
                <Animated.View
                style={{
                    borderWidth: 1,
                    width: this.state.testWidth
                }}
                >
                <Text>Hello</Text>
                </Animated.View>

                {/* track finger position */}
                <View
                    onStartShouldSetResponderCapture={()=>true}
                    onResponderMove={
                        (e) => {
                            this.state.touchPos.setValue({
                                x: e.nativeEvent.locationX,
                                y: e.nativeEvent.locationY
                            })
                        }
                    }
                    style={{
                        width: "60%",
                        aspectRatio: 1,
                        borderWidth: 1
                    }}
                >
                    <Animated.Text
                        style={{
                            position: "absolute",
                            left: this.state.touchPos.x,
                            top: this.state.touchPos.y
                        }}
                    >
                        hi i will go under your finger
                    </Animated.Text>
                </View>
            </View>
        );
    }

}

export default AnimationTests;