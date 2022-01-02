import './login.scss';
import React from 'react';
import user from 'shared/user';
import { Layout } from 'mongez/layout';
import LoginButton from './LoginButton';
import { trans } from 'mongez/localization';
import { navigateBack } from 'mongez/router';
import { InputAdornment } from '@material-ui/core';
import { login } from 'apps/admin/users/services/auth';
import { Email, RemoveRedEye } from '@material-ui/icons';
import { Form, PasswordInput, EmailInput, FormError } from 'mongez/form';
import { GridContainer, GridItem, Helmet, TextCenter } from 'mongez/components';

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

            let { errors } = error.response.data;

            setError(errors.map(error => error.value));
        }
    };

    const title = trans('login');

    return (
        <Layout>
            <Helmet title={title} id="login-page-body" />
            <div id="login-page">
                <h1>{trans('welcome')}</h1>
                <GridContainer justify="center" spacing={0}>
                    <GridItem xs={11} sm={6} md={4}>
                        <Form onSubmit={submitForm}>
                            <FormError error={error} />
                            <EmailInput
                                autoFocus
                                className="form-control"
                                name="email"
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <PasswordInput
                                required
                                minLength={8}
                                name="password"
                                className="form-control"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RemoveRedEye />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextCenter>
                                <LoginButton />
                            </TextCenter>
                        </Form>
                    </GridItem>
                </GridContainer>
            </div>
        </Layout>
    );
}