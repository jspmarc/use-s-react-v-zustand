import {useStore} from "./store.ts";

export function UserComponent() {
    const {addUser, setCounter, counter} = useStore()

    return (
        <form onSubmit={(formContent) => {
            formContent.preventDefault();
            const formData = new FormData(formContent.currentTarget)
            const data = Object.fromEntries(formData.entries());
            // @ts-expect-error asd
            addUser(data)
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