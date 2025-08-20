import {useStore} from "./store.ts";

export function CounterComponent() {
    const counter = useStore((state) => state.counter)

    return (
        <span>The save button has been clicked {counter} times</span>
    )
}