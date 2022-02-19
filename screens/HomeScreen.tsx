/*

    Dynamic home screen that changes based on time of day TODO add day/night cycling

    concept
        top of screen shows date and time

        swipe left --> show past days lists


        current date is stored in global state (redux)

        if current date has a list:
            homescreen header will display
            - you have XX hours worth of tasks left to complete
            - end day button?
            bottom gesture label
            - swipe up to view the existing list
        else:
            homescreen header will display
            - swipe up to start roadmapping
            - no end day button
            bottom gesture label
            - swipe up to create todays list

    swipe up --> go to todays list / create new days list (depends on time)

    Basic features (minimum for release):
    - Go to todays task lists
    - View previous day lists (uneditable)
    - Start a new day

    Planned features:
    - Screen depends on time of day
    - Morning: start a new day
    - Night: review task completion rate for the day (productivity), view past productivity
    - Charts??
*/

import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import StandardScreenContainer from "../components/container/StandardScreenContainer";
import SwipeNavigable from "../components/container/SwipeNavigable";

const style = StyleSheet.create({

});

interface IHomeScreenState {
    date: Date
}

interface IHomeScreenProps {

}

class HomeScreen extends React.Component <IHomeScreenProps, IHomeScreenState> {

    state: IHomeScreenState = {
        date: new Date()
    };

    constructor(props:IHomeScreenProps) {
        super(props)
    }
    
    render() {
        return (
            <SwipeNavigable
                goLeft={()=>{}}
                goRight={()=>{}}
                goUp={()=>{}}
                goDown={()=>{}}
            >
                <StandardScreenContainer>
                    
                    {/* settings cog top right*/}
                    <View>

                    </View>

                    {/* time and status? */}
                    <View>
                        <Text>

                        </Text>
                    </View>

                </StandardScreenContainer>
            </SwipeNavigable>
        );
    }
}

export default HomeScreen;