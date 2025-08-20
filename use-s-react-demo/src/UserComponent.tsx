import {useS} from "use-s-react";
import {store} from "./store";

export function UserComponent() {
    const [users, setUsers] = useS(store.globalUsers)
    const [counter, setCounter] = useS(store.globalCounter)

    return (
        <form onSubmit={(formContent) => {
            formContent.preventDefault();
            const formData = new FormData(formContent.currentTarget)
            const data = Object.fromEntries(formData.entries());
            // @ts-expect-error asd
            users.push(data)
            setUsers(users)
            setCounter(counter + 1)
        }}>
            <label>
                Name:
                <input name="name" type="text"/>
            </label>
            <br/>
            <label>
                Age:
                <input name="age" type="number"/>
            </label>
            <br/>
            <button type="submit">Save</button>
        </form>
    )
}