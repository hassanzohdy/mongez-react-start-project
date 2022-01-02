import endpoint from "mongez/http";

function list() {
    return endpoint.get('/settings');
}


function update(form) {
    return endpoint.post('/settings', form);
}

export default {
    list,
    update
};