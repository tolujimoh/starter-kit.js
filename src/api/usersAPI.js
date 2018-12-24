import 'whatwg-fetch';
import {BASE_URL} from './urls';

export const getUsers = () => get('users');

export const deleteUsers = (id) => remove(`users/${id}`);

const get = url => fetch(BASE_URL + url).then(onSuccess, onError);

const remove = url => fetch(new Request(BASE_URL + url, {method:'DELETE'})).then(onSuccess, onError);

const onSuccess = response => response.json();

const onError = error => {
    console.log(error); // eslint-disable-line no-console
}