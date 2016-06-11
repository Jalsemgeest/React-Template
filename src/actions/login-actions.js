
import LoginEnums from "../enums/login-enums";
import AppDispatcher from "../dispatcher/dispatcher";

export default class LoginActions {
    static login(user) {
        // Just assume the login works...
        AppDispatcher.send(LoginEnums.LOGIN_SUCCESS, {
            username:user.username
        });
    }
}