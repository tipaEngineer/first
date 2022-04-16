import React, { useEffect, useState } from 'react';

interface UsersData {
    id: string;
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
    const [user, setUser] = useState<UsersData>();
    const [userId, setUserID] = useState('');

    const url = 'https://jsonplaceholder.typicode.com/users/';

    //if changing userId => url also changing;

    useEffect(() => {
        let newUrl = url;
        fetch(!userId ? newUrl : newUrl.concat(userId))
            .then((r) => r.json())
            .then((j) => (!userId ? setData(j) : setUser(j)))
            .catch((e) => alert(e));
    }, [userId]);
    // eslint-disable-next-line no-undef
    const renderingArray: Array<JSX.Element> = [];
    console.log(user ? true : false);
    data?.forEach((e, index) => {
        renderingArray.push(
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
                style={{ display: 'table-row' }}
                onClick={() => {
                    setUserID(e.id);
                }}
            >
                <div style={{ display: 'table-cell' }}>
                    <td>{e.name}</td>
                </div>
                <div style={{ display: 'table-cell' }}>
                    <td>{e.username}</td>
                </div>
            </div>,
        );
        // adding users data to render
        if (user?.id == e.id) {
            renderingArray.push(
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                <div
                    style={{ display: 'table-row', background: 'gray' }}
                    onClick={() => setUser(undefined)}
                >
                    <div style={{ display: 'table-cell' }}>
                        <td>{user.email}</td>
                    </div>
                    <div style={{ display: 'table-cell' }}>
                        <td>{user.phone}</td>
                    </div>
                </div>,
            );
        }
    });
    return (
        <div>
            <table>
                <caption>Users</caption>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>username</th>
                    </tr>
                </thead>
                <tbody>{renderingArray}</tbody>
            </table>
        </div>
    );
};
