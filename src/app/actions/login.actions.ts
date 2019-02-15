import {Login} from './../models/login.model';

export class AddLogin {
    static readonly type = '[LOGIN] Add';
    constructor(public payload: Login) {}
}
