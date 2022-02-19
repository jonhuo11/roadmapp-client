import { ColorValue } from "react-native";

// License: MIT - https://opensource.org/licenses/MIT
// Author: Michele Locati <michele@locati.it>
// Source: https://gist.github.com/mlocati/7210513
function perc2color(perc: number) { // 0 = red, 100 = green
	var r, g, b = 0;
	if(perc < 50) {
		r = 255;
		g = Math.round(5.1 * perc);
	}
	else {
		g = 255;
		r = Math.round(510 - 5.10 * perc);
	}
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
	return '#' + ('000000' + h.toString(16)).slice(-6);
}

export default function (value:number, max:number):ColorValue {
    if (value > max) {
        value = max;
    }
    if (value < 0) {
        value = 0;
    }

    return perc2color(100 - ((value/max) * 100));
};