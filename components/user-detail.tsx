import React, { useEffect, useState } from 'react';
import { auth } from '../auth'; // Adjust the import path according to your project structure

export const UserDetail = async () => {

    const session = await auth()
    return (
        <div>
            <h2>User Details</h2>
            {session ? (
                <div>
                    <p>Name: {session.user?.name}</p>
                    <p>Email: {session.user?.email}</p>
                    {session.user?.image && <img src={session.user.image} alt="User Image" />}
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserDetail;