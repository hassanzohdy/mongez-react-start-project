import React from 'react';
import Setting from './Setting';
import { TextInput } from 'mongez/form';
import { trans } from 'mongez/localization';

export default function SocialSettingsTab({ groupBy, settings }) {
    const getSetting = groupBy('social');

    return (
        <>
            <Setting
                type="string"
                name="social.facebook"
                component={TextInput}
                defaultValue={getSetting('facebook')}
                label={trans('facebookUrl')}
            />
            <Setting
                type="string"
                name="social.twitter"
                component={TextInput}
                defaultValue={getSetting('twitter')}
                label={trans('twitterUrl')}
            />
            <Setting
                type="string"
                name="social.linkedIn"
                component={TextInput}
                defaultValue={getSetting('linkedIn')}
                label={trans('linkedInUrl')}
            />
            <Setting
                type="string"
                name="social.instagram"
                component={TextInput}
                defaultValue={getSetting('instagram')}
                label={trans('instagramUrl')}
            />
            <Setting
                type="string"
                name="social.snapchat"
                component={TextInput}
                defaultValue={getSetting('snapchat')}
                label={trans('snapchatUrl')}
            />
            <Setting
                type="string"
                name="social.youtube"
                component={TextInput}
                defaultValue={getSetting('youtube')}
                label={trans('youtubeUrl')}
            />
        </>
    );
}