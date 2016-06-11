import {Dispatcher} from "flux";

class AppDispatcherClass extends Dispatcher {

    send(action, payload) {
        this.dispatch({
            action:action,
            payload:payload
        });
    }

}

const AppDispatcher = new AppDispatcherClass();

export default AppDispatcher;