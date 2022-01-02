import React from 'react';
import { Obj } from 'reinforcements';
import { trans } from 'mongez/localization';
import { TextInput, PasswordInput, EmailInput, SelectInput } from 'mongez/form';
import usersGroupsService from 'apps/admin/users/services/users-groups-service';

export default function UserForm(props) {
    const { record } = props;

    return (
        <>
            <TextInput name="name" required autoFocus defaultValue={record.name} placeholder={trans('name')} />
            <EmailInput required defaultValue={record.email} placeholder={trans('email')} />
            <PasswordInput minLength={8} required={!record.id} placeholder={trans('password')} />
            <SelectInput
                name="group"
                label="Administrator Group"
                lazyLoading
                required
                value={Obj.get(record, 'group.id')}
                request={e => usersGroupsService.list()}
            />
        </>
    )
}