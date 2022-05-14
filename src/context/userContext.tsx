import React from 'react'

type User = {
    display_name?: string;
    email: string;
    setUser?: () => void;
}

const defaultState = {
    display_name: '',
    email: '',
    setUser: () => { }
};

export const UserContext = React.createContext<User>(defaultState);