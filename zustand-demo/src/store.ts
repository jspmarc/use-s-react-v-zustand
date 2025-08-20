import {create} from "zustand/react";
import {createJSONStorage, persist} from "zustand/middleware";
import type {StateCreator} from "zustand/vanilla";

type CounterSlice = {
    counter: number,
    setCounter: (counter: number) => void,
}

type User = {
    name: string,
    age: number
}

type UsersSlice = {
    users: Array<User>,
    addUser: (user: User) => void,
}

const createCounterSlice: StateCreator<CounterSlice, [], []> = (set) => ({
    counter: 0,
    setCounter: (counter) =>
        set({counter})
})

const createUserSlice: StateCreator<UsersSlice, [], []> = (set) => ({
    users: [],
    addUser: (user) =>
        set(state => ({
            users: [...state.users, user]
        }))
})

export const useStore = create<CounterSlice & UsersSlice>()(
    persist(
        (...args) => ({
            ...createCounterSlice(...args),
            ...createUserSlice(...args),
        }),
        {
            name: "global-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)