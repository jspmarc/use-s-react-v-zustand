// store.ts
export const store: {
    globalCounter: {
        key: string,
        value: number,
    },
    globalUsers: {
        key: string,
        value: {
            name: string,
            age: number
        }[]
    }
} = {
    globalCounter: {
        value: 0,
        key: 'global-counter',
    },
    globalUsers: {
        key: 'global-users',
        value: []
    }
};
