// proof of concept to see if I can get a email style list
// you can scroll up/down the list but also swipe left/right on each element to
// open a side menu for that element

// the idea is to use this as a way to mark tasks as done
// you can scroll down a list of tasks, and then swipe that task off the list

import * as React from 'react';

import {
    StyleSheet,
    FlatList,
    View,
    Text
} from 'react-native';

// some test data for the list
const TEST_DATA = [
    {
        id: "0",
        name: "mohamed",
        age: 4
    },
    {
        id: "1",
        name: "jeffrey",
        age: 48
    }
];

interface IShiftableListTestProps {

}

interface IShiftableListTestState {

}

class ShiftableListTest extends React.Component
<IShiftableListTestProps, IShiftableListTestState> {

    renderItem(itemObj: any) {
        const item = itemObj.item;
        return(
            <ShiftableListItemTest
                name={item.name}
                age={item.age}
            ></ShiftableListItemTest>
        );
    }

    render() {return(
        <FlatList
            data={TEST_DATA}
            renderItem={(item) => {return this.renderItem(item)}} // takes one element from TEST_DATA
            keyExtractor={item => item.id}
        ></FlatList>
    );}

}

class ShiftableListItemTest extends React.Component
<{
    name: string,
    age: number
},{}> {
    render() {return(
        <View
            style={styles.shiftableItem}
        >
            <Text>
                Name: {this.props.name}
            </Text>
            <Text>
                Age: {this.props.age}
            </Text>
        </View>
    );}
}

const styles = StyleSheet.create({
    shiftableItem : {
        borderWidth: 1,
        margin: 5,
        flexDirection: 'column'
    }
});

export default ShiftableListTest;