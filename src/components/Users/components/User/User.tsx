import React from 'react';
import { UserType } from '../../types';

interface UserProps1 extends Pick<UserType, 'name' | 'username'> {
    imageSrc?: string;
    onClick: () => void;
}

/*
interface UserProps2 extends Pick<UserType, 'email' | 'phone'> {
    id: string;
}

type UserProps3 = Pick<UserType, 'email' | 'phone'> & { id: string };

interface UserProps4 {
    email: UserType['email'];
    phone: UserType['phone'];
}

{imageSrc && (<div>Hello</div>)}
*/

export const User: React.FC<UserProps1> = ({
    name,
    username,
    imageSrc,
    onClick,
}) => {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
        <div
            role="row"
            style={{ display: 'table-row' }}
            onClick={() => onClick()}
        >
            <div
                style={{
                    display: 'table-cell',
                    border: '1px solid #999999',
                    padding: '3px 10px',
                }}
            >
                {name}
            </div>
            {imageSrc && <img src={imageSrc} alt="avatar" />}
            <div
                style={{
                    display: 'table-cell',
                    border: '1px solid #999999',
                    padding: '3px 10px',
                }}
            >
                {username}
            </div>
        </div>
    );
};
