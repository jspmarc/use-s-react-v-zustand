import './App.css'
import {useStore} from "./store.ts";
import {CounterComponent} from "./CounterComponent.tsx";
import {UserComponent} from "./UserComponent.tsx";

function App() {
  const users = useStore((state) => state.users)

  return (
    <>
        <h1>Hi, welcome to the <span style={{
            fontWeight: 'bold',
            fontSize: '1.5em',
        }}>Zustand</span> demo</h1>
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
