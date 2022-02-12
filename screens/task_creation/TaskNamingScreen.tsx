import * as React from "react";

import {
    View,
    Text,
    TextInput,
    StyleSheet
} from "react-native";

import StandardScreenContainer from "../../components/StandardScreenContainer";
import TaskCreationBottomGestureLabels from "../../components/TaskCreationBottomGestureLabels";

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 10,

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
        //borderWidth: 1
    },
    namingScreenDescContainer : {
        flex: 2,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    namingScreenDesc: {
        fontSize: 26
    },
    nameInputContainer : {
        flex: 5,
        flexDirection: "column"
    },
    nameInput: {
        borderBottomWidth: 1,
        fontSize: 20,
        top: "40%"
    }
});

export default class TaskNamingScreen extends React.Component {
    render() {
        return (
            <StandardScreenContainer>
                <View style={styles.body}>

                    <View style={styles.namingScreenDescContainer}>
                        <Text style={styles.namingScreenDesc}>
                            Captain, what's the task ahead?
                        </Text>
                    </View>

                    <View style={styles.nameInputContainer}>
                        <TextInput
                            style={styles.nameInput}
                            placeholder="ex: Take notes on new math lectures"
                            multiline={true}
                            maxLength={128}
                        />
                    </View>

                    <TaskCreationBottomGestureLabels
                        leftText="Task list"
                        midText="Add it to the list"
                        rightText="Next"
                        areaFlexProportion={2}
                        wrapAt={40}
                    />
                </View>
            </StandardScreenContainer>
        );
    }
}