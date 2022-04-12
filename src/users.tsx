import React from 'react';

export const Users: React.FunctionComponent = () => {
    const getUsersFromPlaceHolder = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        let res = await fetch(url);
        let user = await res.json();
        console.log(user);
        return user;
    };
    return <div>{getUsersFromPlaceHolder()}</div>;
};
