import './App.css'
import {UserComponent} from "./UserComponent.tsx";
import {CounterComponent} from "./CounterComponent.tsx";
import {store} from './store.ts';
import {useS} from "use-s-react";

function App() {
    const [users,] = useS(store.globalUsers)

    return (
        <>
            <h1>Hi, welcome to the <span style={{
                fontWeight: 'bold',
                fontSize: '1.5em',
            }}>use-s-react</span> demo</h1>
            <UserComponent/>
            <CounterComponent/>

            <div style={{
                marginTop: '2em',
            }}>
                Inserted users
            </div>
            <ul>
                {users.map((user, idx) => <li key={idx}>name: {user.name} - age: {user.age}</li>)}
            </ul>
        </>
    )
}

export default App
