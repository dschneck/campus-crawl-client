import { Component, Match, Switch } from 'solid-js';
import { createSignal } from 'solid-js';

import Register from './Register';
import Login from './Login';
import { user, setUser } from './userState';

const App: Component = () => {
    const [registerToggle, setRegisterToggle] = createSignal(false);

    return (
    <div class="grid justify-center items-center">
        <Switch fallback={<Login />}>
            <Match when={registerToggle()}>
                <Register />
            </Match>
        </Switch>
        <button class="object-none object-center bg-white hover:bg-xanthous text-chestnut py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={ () => setRegisterToggle(!registerToggle())}>Don't have an account?</button>
    </div>
    );
};

export default App;
