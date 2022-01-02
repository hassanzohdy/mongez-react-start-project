import React from 'react';
import Setting from './Setting';
import { trans } from 'mongez/localization';
import { styled } from '@material-ui/core';
import pagesService from '../../../pages/services/service';
import { AutoComplete, TextAreaInput } from 'mongez/form';

const InputWrapper = styled('div')({
    marginBottom: '1rem'
});

export default function GeneralSettingsTab({ groupBy }) {
    const getSetting = groupBy('general');

    return (
        <>
            <InputWrapper>
                <Setting
                    component={TextAreaInput}
                    type="string"
                    name="general.metaDescription"
                    value={getSetting('metaDescription')}
                    label={trans('siteDescription')}
                    required
                />
            </InputWrapper>
            <InputWrapper>
                <Setting
                    component={AutoComplete}
                    type="intArray"
                    name="general.footerPages"
                    multiple
                    request={() => pagesService.list({ paginate: false })}
                    value={getSetting('footerPages')}
                    label={trans('footerPages')}
                    required
                />
            </InputWrapper>
        </>
    );
}