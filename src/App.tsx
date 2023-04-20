import { Component, Match, Switch } from 'solid-js';
import { createSignal } from 'solid-js';

import Register from './Register';
import Login from './Login';
import Events  from './Events';

import { user, setUser } from './userState';

const App: Component = () => {
    const [registerToggle, setRegisterToggle] = createSignal(true);

    return (
    <div class="grid justify-center items-center">
        <Switch fallback= {
        <Switch fallback=
                {
                    <>
                        <Login />
                        <button class="object-none object-center" onClick={ () => setRegisterToggle(!registerToggle())}>
                            Don't have an account?
                        </button>
                    </>
                }>
            <Match when={!registerToggle()}>
                <Register />
                <button class="object-none object-center" onClick={ () => setRegisterToggle(!registerToggle())}>
                    Already have an account?
                </button>
            </Match>
        </Switch>
        }>
        <Match when={user().id != 'empty'}>
        <Events />
        </Match>
        </Switch>
    </div>
    );
};

export default App;
