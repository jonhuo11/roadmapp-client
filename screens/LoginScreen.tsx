import * as React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import Logo from "../assets/roadmapp-logo.svg";
import MinimalButton from '../components/buttonlike/MinimalButton';
import StandardScreenContainer from '../components/container/StandardScreenContainer';

class LoginScreen extends React.Component  {

    render() {
        // use https://github.com/kristerkari/react-native-svg-transformer to turn logo into svg
        // display logo under login

        return (
            <StandardScreenContainer>
                <View style={styles.body}>
                    <View style={styles.loginInterface}>
                        <Text style={styles.appName}>roadmapp</Text>

                        <Logo width={128} height={128}></Logo>

                        <Text style={{marginBottom: 10, fontSize: 16}}>Plan your day better</Text>

                        <View style={styles.fieldsContainer}>
                            
                            <TextInput
                                style={styles.field}
                                placeholder='Email'
                                textContentType='emailAddress'
                                keyboardType='email-address'
                                maxLength={32}
                            ></TextInput>
                        </View>

                        <View style={styles.fieldsContainer}>
                            <TextInput
                                style={styles.field}
                                placeholder='Password'
                                textContentType='password'
                                secureTextEntry={true}
                                maxLength={32}
                            ></TextInput>
                        </View>

                        <View
                            style={styles.fieldsContainer}
                        >
                            <MinimalButton
                                text='Log in'
                                onPress={(e)=>{return;}}
                                outerStyle={{
                                    flex: 1,
                                    borderWidth: 0,
                                    padding: 0
                                }}
                                textStyle={{
                                    fontSize: 18,
                                    color: '#00f'
                                }}
                            ></MinimalButton>
                        </View>

                        <View
                            style={styles.fieldsContainer}
                        >
                            <MinimalButton
                                text='Sign up'
                                onPress={(e)=>{return;}}
                                outerStyle={{
                                    flex: 1,
                                    borderWidth: 0,
                                    padding: 0,
                                    marginBottom: 0
                                }}
                                textStyle={{
                                    fontSize: 18,
                                    color: '#00f'
                                }}
                            ></MinimalButton>
                        </View>
                    </View>
                </View>
            </StandardScreenContainer>
        );
    }
}

const styles = StyleSheet.create({
    body : {
        padding: 10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    loginInterface : {
        borderWidth: 1,
        padding: 20,
        flexDirection: "column",
        alignItems: "center",

        // set a max width and height
        maxWidth : "60%"
    },
    appName : {
        fontSize: 36,
        textAlign: 'center'
    },

    fieldsContainer : {
        flexDirection: 'row',
    },
    field : {
        flex: 1,
        borderWidth: 1,
        padding: 5,
        margin: 5,
        fontSize: 16
    }
});

export default LoginScreen;