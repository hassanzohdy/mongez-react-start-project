import React from 'react';
import Setting from './Setting';
import { trans } from 'mongez/localization';
import { TextInput, EmailInput } from 'mongez/form';

export default function ContactSettingsTab({ groupBy, settings }) {
    const getSetting = groupBy('contact');

    return (
        <>
            <Setting
                type="string"
                name="contact.address"
                component={TextInput}
                defaultValue={getSetting('address')}
                label={trans('address')}
                required
            />
            <Setting
                type="string"
                name="contact.phoneNumber"
                component={TextInput}
                defaultValue={getSetting('phoneNumber')}
                label={trans('phoneNumber')}
                required
            />
            <Setting
                type="string"
                name="contact.whatsappNumber"
                component={TextInput}
                defaultValue={getSetting('whatsappNumber')}
                label={trans('whatsappNumber')}
                required
            />
            <Setting
                type="string"
                name="contact.fax"
                component={TextInput}
                defaultValue={getSetting('fax')}
                label={trans('fax')}
                required
            />
            <Setting
                type="string"
                name="contact.email"
                component={EmailInput}
                defaultValue={getSetting('email')}
                label={trans('email')}
                required
            />
        </>
    );
}