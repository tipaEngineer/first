import React, { useEffect, useState } from 'react';
import './Users.css';

interface UserDto {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    geo: {
        lat: string;
        lng: string;
    };
    phone: string;
    website: string;
    company: string;
}

export const Users: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Array<UserDto>>();
    const [error, setError] = useState<any>();

    useEffect(() => {
        setIsLoading(true);

        const getUsersFromPlaceHolder = async () => {
            try {
                const url = 'https://jsonplaceholder.typicode.com/users';
                let response = await fetch(url);
                let users = await response.json();
                setIsLoading(false);

                setData(users);
            } catch (e: any) {
                setIsLoading(false);

                setError(e);
            }
        };

        getUsersFromPlaceHolder();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {JSON.stringify(data)}</h1>;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#8aaab3',
                borderRadius: '20px',
                padding: '20px',
            }}
        >
            {data?.map((e, index) => {
                return (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                    <div
                        key={index}
                        className="Row"
                        onClick={() => {
                            alert(`Selected user id is ${e.id}`);
                        }}
                    >
                        <div>
                            <strong>Id: </strong>
                            <span>{e.id}</span>
                        </div>
                        <div>
                            <strong>Name: </strong>
                            <span>{e.name}</span>
                        </div>
                        <div>
                            <strong>Email: </strong>
                            <span>{e.email}</span>
                        </div>
                        <div>
                            <strong>Website: </strong>
                            <span>{e.website}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
