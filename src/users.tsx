import React, { useState } from 'react';

interface UsersData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export const Users: React.FunctionComponent = () => {
    const [data, setData] = useState<Array<UsersData>>();
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then((r) => r.json())
        .then((j) => setData(j));
    // eslint-disable-next-line no-undef
    const aray: Array<JSX.Element> = [];
    data?.forEach((e) => {
        aray.push(<div>{e.name}</div>);
    });
    return <div>{aray}</div>;
};
