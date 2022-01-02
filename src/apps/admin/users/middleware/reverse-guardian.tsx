import user from 'shared/user';
import React from 'react';
import { Redirect } from 'mongez/components';

export default function alreadyLoggedIn(route, history) {
    if (user.isLoggedIn()) {
        return <Redirect to="/" />
    }
}