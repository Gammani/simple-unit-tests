import React from "react";

export const userArray = ['Leha', 'Susan', 'Mary', 'Kassy']

export const usersObj = {
    '0': 'Leha',
    '1': 'Susan',
    '2': 'Mary',
    '3': 'Kassy'
}

export type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Leha'},
    '1034': {id: 1034, name: 'Susan'},
    '124523': {id: 124523, name: 'Mary'},
    '1': {id: 1, name: 'Kassy'}
}

let user = { id: 100500, name: 'Sara' }
users[user.id] = user;
delete users[user.id];

export const usersArray = [
    {id: 101, name: 'Leha'},
    {id: 1034, name: 'Susan'},
    {id: 124523, name: 'Mary'},
    {id: 1, name: 'Kassy'} 
]
//usersArray.find(u => u.id === 1)
//let usersCopy = [...usersArray.filter(), user]       usersArray.push(user)