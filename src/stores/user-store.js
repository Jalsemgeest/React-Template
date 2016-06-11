
import AppDispatcher from "../dispatcher/dispatcher";
import LoginEnums from "../enums/login-enums";
import BaseStore from "./base-store";

const _store = {
    user:""
};

class UserStoreClass extends BaseStore {
    getStore() {
        return _store;
    }

    getUser() {
        return _store.user;
    }
}

const UserStore = new UserStoreClass();

function setUser(name) {
    _store.user = name;
}

AppDispatcher.register((payload) => {
    let action = payload.action;
    let data = payload.payload;

    switch (action) {
        case LoginEnums.LOGIN_SUCCESS:
            setUser(data.username);
            UserStore.emitChange();
            break;
    }
});

export default UserStore;