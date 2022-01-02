import user from 'shared/user';
import React from 'react';
import { AccessDenied } from 'mongez/layout';

export default function PermissionGranted(route) {
    if (route.permission && !user.can(route.permission)) return <AccessDenied />;
}