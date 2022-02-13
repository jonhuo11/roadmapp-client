import * as React from 'react';
import {
    View,
    Animated,
    Dimensions,
    Text,
    Easing
} from 'react-native';

export default class SwipeableTest extends React.Component {
    state = {
        startpt: 0, // where box was when finger first touched
        touchpt: 0, // where finger touched
        x: 0 // real pos
    };

    render() {
        return (
            <View
                style={{
                    borderWidth: 1,
                    width: 376,
                    height: 50
                }}
                onStartShouldSetResponder={()=>{return true}}
                
                onResponderStart={(e)=>{ // WTF? why is this prop not documented???
                    this.setState({
                        startpt: this.state.x, // current pos
                        touchpt: e.nativeEvent.locationX // where finger touched
                    })
                }}
                onResponderMove={(e)=>{
                    var touchX = e.nativeEvent.locationX;
                    var delta = touchX - this.state.touchpt;
                    var newRealX = this.state.startpt + delta;
                    this.setState({
                        x: newRealX
                    });
                }}
                // on release, go back to 0
                onResponderRelease={(e)=>{
                    this.setState({
                        x: 0
                    })
                }}
            >
                <View
                    style={{
                        position: "absolute",
                        left: this.state.x
                    }}
                >
                    <Text>Swipe me left</Text>
                </View>
            </View>
        );
    }
};