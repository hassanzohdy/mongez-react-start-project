import React from 'react';
import { FormContext } from 'mongez/form';
import { styled } from '@material-ui/core';
import { trans } from 'mongez/localization';
import { CircleProgress } from 'mongez/components';
import { MAIN_COLOR } from 'shared/style-settings';

const SubmitButton = styled('button')({
    width: '100%',
    height: '55px',
    lineHeight: '55px',
    background: MAIN_COLOR,
    color: '#FFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '1.4rem',
    '&:focus': {
        outline: 'none',
    }
});

export default function LoginButton() {
    const { form } = React.useContext(FormContext);

    return (
        <SubmitButton type="submit">
            {form.isSubmitting ? <CircleProgress color="#FFF" /> : trans('login')}
        </SubmitButton>
    )
}
