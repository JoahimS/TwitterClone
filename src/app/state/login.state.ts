import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Login} from './../models/login.model';
import {AddLogin} from './../actions/login.actions';


export class LoginStateModel {
    logins: Login[];
}

@State<LoginStateModel> ({
    name: 'login',
    defaults: {
        logins: []
    }
})

export class LoginState {
    @Selector()
    static getTutorials(state: LoginStateModel) {
        return state.logins;
    }

    @Action(AddLogin)
    add({getState, patchState}: StateContext<LoginStateModel>, {payload}: AddLogin) {
        const state = getState();
        patchState({
            logins: [...state.logins, payload]
        });
    }
}
