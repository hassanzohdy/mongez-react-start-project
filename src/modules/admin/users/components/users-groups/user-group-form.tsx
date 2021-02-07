import React from 'react';
import { Obj } from 'reinforcements';
import { trans } from 'mongez/localization';
import { makeStyles } from '@material-ui/core';
import { Checkbox, TextInput } from 'mongez/form';
import {For, GridItem, GridContainer} from 'mongez/components';
import {permissionsObserver as permissions} from 'mongez/admin';

const useClasses = makeStyles({
    label: {
        fontWeight: 'bold'
    },
});

export default function UserGroupForm(props) {
    const { record } = props;
    const classes = useClasses();

    const [groupPermissions, setPermissions] = React.useState(record.permissions || {});

    const changePermissionGroup = (checked, permissionsGroup) => {
        let group = groupPermissions[permissionsGroup.name] || {};

        for (let permission of permissionsGroup.roles) {
            group[permission.name] = checked;
        }

        groupPermissions[permissionsGroup.name] = group;

        setPermissions({
            ...groupPermissions
        });
    };

    return (
        <>
            <TextInput name="name" required autoFocus defaultValue={record.name} placeholder={trans('name')} />

            <GridContainer>
                <For array={permissions.list()} render={(permissionGroup) => (
                    <GridItem xs={6}>
                        <Checkbox onChange={e => changePermissionGroup(e, permissionGroup)} labelClasses={classes} label={permissionGroup.text} />
                        <For array={permissionGroup.roles} render={(permission) => (
                            <div>
                                <Checkbox checked={Boolean(Obj.get(groupPermissions, `${permissionGroup.name}.${permission.name}`))} name={`permissions.${permissionGroup.name}.${permission.name}`} label={permission.text} />
                            </div>
                        )} />
                    </GridItem>
                )} />
            </GridContainer>
        </>
    )
}