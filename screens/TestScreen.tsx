// just a screen from which i can run test code


import * as React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import ShiftableListTest from "../components/testing/ShiftableListTest";
import SwipeawayTest from "../components/testing/SwipeawayTest";

class TestScreen extends React.Component <any, any> {
    render () {return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.body}>

                    <Text>
                        testing screen!
                    </Text>

                    {/* ===== Put component tests below ===== */}

                    <ShiftableListTest></ShiftableListTest>

                    <SwipeawayTest></SwipeawayTest>

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