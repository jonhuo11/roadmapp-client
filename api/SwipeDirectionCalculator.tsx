import { Directions, GestureStateChangeEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";

/*
export enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT
};*/

export default function (
    initialXY : {
        x: number,
        y: number
    },
    e: GestureStateChangeEvent<PanGestureHandlerEventPayload>
) {

    var dX = e.x - initialXY.x;
    var dY = e.y - initialXY.y;

    if (Math.abs(dX) > Math.abs(dY))
    {
        return dX > 0 ? Directions.RIGHT : Directions.LEFT;
    }
    else
    {
        return dY > 0 ? Directions.DOWN : Directions.UP;
    }
};