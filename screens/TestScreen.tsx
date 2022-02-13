// just a screen from which i can run test code


import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ShiftableListTest from "../components/testing/ShiftableListTest";
import AnimationTests from "../components/testing/AnimationTests";
import SwipeableTest from "../components/testing/SwipeableTest";

class TestScreen extends React.Component <any, any> {
    render () {return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.body}>

                    <Text>
                        testing screen!
                    </Text>

                    {/* ===== Put component tests below ===== */}

                    <SwipeableTest></SwipeableTest>

                    <ShiftableListTest></ShiftableListTest>

                    <AnimationTests></AnimationTests>

                    <View
                        style={{
                            borderWidth: 1,
                            height: 300
                        }}

                        onStartShouldSetResponder={()=>{
                            return true;
                        }}
                        onResponderStart={(e)=>{
                            console.log("pressed view" + e.nativeEvent.locationX);
                        }}
                        onResponderMove={(e)=>{
                            console.log(e.nativeEvent.locationX + ", " + e.nativeEvent.locationY);
                        }}
                    >
                        <Button
                            title="test"
                            onPress={(e)=>{console.log("pressed button");}}
                        ></Button>
                    </View>

                    {/* ===== End component tests area ===== */}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )}
}

const styles = StyleSheet.create({
    body : {
        margin : 10
    }
});

export default TestScreen;