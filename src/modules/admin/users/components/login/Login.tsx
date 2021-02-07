import './login.scss';
import user from 'shared/user';
import React from 'react';
import { Layout } from 'mongez/layout';
import { styled } from '@material-ui/core';
import { trans } from 'mongez/localization';
import { navigateBack } from 'mongez/router';
import { Helmet, TextCenter } from 'mongez/components';
import { login } from 'modules/admin/users/services/auth';
import { Form, PasswordInput, EmailInput, SubmitButton as FormButtonSubmission, FormError } from 'mongez/form';

const SubmitButton = styled(FormButtonSubmission)({
    background: '#333',
    color: '#FFF',
});

export default function Login() {
    const [error, setError] = React.useState(null);

    /**
     * Submit login form
     */
    const submitForm = async (e, form) => {
        setError(null); // make sure to clear previous errors

        try {
            let { data } = await login(e.target);

            if (data.error) {
                setError(data.error);
            }

            if (data.user) {
                user.login(data.user);

                navigateBack('/');
            }
        } catch (error) {
            form.isSubmitting = false;
            if (!error.response) return;

            let { errors, error: errorText } = error.response.data;

            if (errorText) {
                setError(errorText);
            } else if (errors) {
                setError(errors);
            }
        }
    };

    const title = trans('login');

    return (
        <Layout>
            <Helmet title={title} />
            <div id="login-page">
                <h1>{trans('welcome')}</h1>

                <Form onSubmit={submitForm}>
                    {form => {
                        return (
                            <>
                                <FormError error={error} />

                                <EmailInput
                                    autoFocus
                                    className="form-control"
                                    name="email"
                                    required
                                />

                                <PasswordInput
                                    required
                                    minLength={8}
                                    name="password"
                                    className="form-control"
                                />

                                <TextCenter>
                                    <SubmitButton fullWidth={form.isSubmitting !== true} theme="dark">{title}</SubmitButton>
                                </TextCenter>
                            </>
                        )
                    }}
                </Form>
            </div>
        </Layout>
    );
}