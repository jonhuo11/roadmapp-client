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
    Text
} from 'react-native';

class SwipeawayTest extends React.Component {

    // why is fingerX a property and not stored in state?
    // any updates to state trigger a re-render of the component
    // ideally we dont render every time fingerX changes
    fingerX = new Animated.Value(0);

    state = {
        dimensions: {
            window
        }
    };

    onDimensionsChange(window: any) {
        this.setState({dimensions: {window}})
    }

    componentDidMount() {
        Dimensions.addEventListener("change", this.onDimensionsChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onDimensionsChange);
    }

    render() {
        const windowWidth = (this.state.dimensions.window as any).width;

        return(
            <View>
                <Text>Swipe me to the right and away!</Text>
            </View>
        );
    }

}

export default SwipeawayTest;