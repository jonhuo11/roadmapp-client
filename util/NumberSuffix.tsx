export default function (n:number):string {
    const lastDigit = n % 10;
    switch(lastDigit) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    };
};