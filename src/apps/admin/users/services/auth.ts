import endpoint from 'mongez/http';

export function login(form) {
    return endpoint.post('/login', form);
}

export function logout() {
    return endpoint.get('/logout');
}