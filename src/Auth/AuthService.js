import {from} from "rxjs";
import {ignoreElements} from "rxjs/operators";

const dummyEndPointUrl = 'https://reqres.in/api/login';

export default class AuthService {
    static async login(email, password) {
        const res = await fetch(dummyEndPointUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        return res.ok ? from(res.json()) : ignoreElements()
    };
}