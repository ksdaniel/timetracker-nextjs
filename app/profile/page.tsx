import SignIn from '@/components/sign-in';
import { TimeEntryListComponent } from '@/components/time-entry-list';
import UserDetail from '@/components/user-detail';
import React from 'react';

const ProfilePage = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software developer with a passion for open-source projects.',
    };

    return (
        <div className="p-5">
                        <TimeEntryListComponent/>
        </div>
    );
};

export default ProfilePage;