// safe area view, keyboard avoiding view, hideable keyboard

import * as React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform } from "react-native";
import HideableKeyboard from "../keyboard/HideableKeyboardArea";

class StandardScreenContainer extends React.Component {
    render() {
        return(
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={{flex: 1}}
                    >
                        <HideableKeyboard
                            style={{
                                flex: 1
                            }}
                        >
                            {this.props.children}
                        </HideableKeyboard>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
}

export default StandardScreenContainer;