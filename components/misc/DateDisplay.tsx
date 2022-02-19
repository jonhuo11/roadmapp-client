import * as React from "react";
import {
    View,
    Text,
    TextStyle
} from "react-native";
import NumberSuffix from "../../util/NumberSuffix";


/*
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];*/

export default class DateDisplay extends React.Component<{
    date:Date; 
    tstyle: TextStyle
},{
      
}> {

    dateToString():{
        weekday: string, // mon, tues, ...
        day: number, // 1-31
        month: string, // jan, feb, ...
        year: number, // 2000, 2001, ....
    } {
        const wd = new Intl.DateTimeFormat("en-US", {weekday:"long"}).format();
        const mo = new Intl.DateTimeFormat("en-US", {month:"long"}).format();
        const d = this.props.date.getDate();
        const yr = this.props.date.getFullYear();

        return {
            weekday: wd,
            day: d,
            month: mo,
            year: yr
        };
    }

    render() {
        const d = this.dateToString();
        return(
            <Text style={this.props.tstyle}>
                {d.weekday}, {d.month} {d.day}{NumberSuffix(d.day)}
            </Text>
        )
    }
};