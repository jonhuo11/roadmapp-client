import * as React from "react";
import {AntDesign} from "@expo/vector-icons";

import {
    View,
    Text,
    StyleSheet,
    Pressable
} from "react-native";
import RateLimitedPressable from "../buttonlike/RateLimitedPressable";

interface INavFunction {
    ():void;
}

interface ITaskCreationBottomGestureLabelsProps {
    leftText: string;
    midText: string;
    rightText: string;
    areaFlexProportion: number;
    wrapAt? : number;
    leftNav? : INavFunction;
    rightNav? : INavFunction;
    upNav? : INavFunction;
}

class TaskCreationBottomGestureLabels extends React.Component 
<ITaskCreationBottomGestureLabelsProps, {}>
{
    static defaultProps = {
        wrapAt: 40,
        leftNav: ():void=>{},
        rightNav: ():void=>{},
        upNav: ():void=>{},
    };

    render() {
        return(
            <View style={[styles.bottomArea, {flex: this.props.areaFlexProportion}]}>       
                {/*
                    three columns, left mid right
                    each column contains instruction indicators for which swipe direction
                    does what command (next step, back, etc)
                */}

                <View style={styles.lcol}>
                    <View style={styles.dirContainer}>
                        <View style={styles.dirIconContainer}>
                            <RateLimitedPressable interval={350} cb={this.props.leftNav}>
                                <AntDesign
                                    name="left"
                                    style={styles.dirIcon}
                                />
                            </RateLimitedPressable>
                        </View>
                        
                        <View style={[styles.descTextContainer, {width: this.props.wrapAt}]}>
                            <RateLimitedPressable interval={350} cb={this.props.leftNav}>
                            <Text style={styles.descText}>{this.props.leftText}</Text>
                            </RateLimitedPressable>
                        </View>
                    </View>

                    <View style={styles.dirFiller}></View>
                </View>

                <View style={styles.mcol}>
                    <View>
                        <View style={
                            [
                                styles.descTextContainer,
                                {
                                    width: (this.props.wrapAt?this.props.wrapAt:0) + 20,
                                    marginBottom: 5
                                }
                            ]}>
                            <RateLimitedPressable interval={350} cb={this.props.upNav}>
                            <Text style={styles.descText}>{this.props.midText}</Text>
                            </RateLimitedPressable>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                            <RateLimitedPressable interval={350} cb={this.props.upNav}>
                            <AntDesign
                                name="up"
                                style={styles.dirIcon}
                            />
                            </RateLimitedPressable>
                        </View>
                    </View>
                </View>

                <View style={styles.rcol}>
                    <View style={[styles.dirContainer,
                        {
                            flexDirection: "row-reverse"
                        }
                    ]}>
                        <View style={styles.dirIconContainer}>
                            <RateLimitedPressable interval={350} cb={this.props.rightNav}>
                            <AntDesign
                                name="right"
                                style={styles.dirIcon}
                            />
                            </RateLimitedPressable>
                        </View>

                        <View style={[styles.descTextContainer, {width: this.props.wrapAt}]}>
                            <RateLimitedPressable interval={350} cb={this.props.rightNav}>
                            <Text style={styles.descText}>{this.props.rightText}</Text>
                            </RateLimitedPressable>
                        </View>
                    </View>

                    <View style={styles.dirFiller}></View>
                </View>

            </View>
        );
    }
}

// default styles
const styles = StyleSheet.create({
    bottomArea: {
        flex: 1,
        flexDirection: "row"
    },
    lcol : {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
        //borderWidth: 1
    },
    mcol : {
        //borderWidth: 1,
        flex: 1,
        flexDirection: "column-reverse",
        alignItems: "center"
    },
    rcol: {
        //borderWidth: 1,
        flex: 1,
        flexDirection: "column"
    },

    descTextContainer : {
        flexDirection: "column",
        justifyContent: "center",
        width: 40
    },
    descText: {
        //borderWidth: 1,
        flexWrap: "wrap",
        fontSize: 14,
        textAlign: "center" 
    },
    dirIcon : {
        fontSize: 25,
        color: "rgb(200,200,200)"
    },
    dirIconContainer : {
        flexDirection: "column",
        justifyContent: "center"
    },
    dirContainer: {
        flexDirection: "row",
        alignContent: "center",
        flex: 1
        //borderWidth: 1
    },
    dirFiller : {
        flex: 2
    }
});

export default TaskCreationBottomGestureLabels;