import {useS} from "use-s-react";
import {store} from "./store.ts";

export function CounterComponent() {
    const [counter,] = useS(store.globalCounter)

    return (
        <span>The save button has been clicked {counter} times</span>
    )
}