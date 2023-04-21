import { Component, Match, Switch } from 'solid-js';
import { createSignal } from 'solid-js';
import title from './assets/campus-crawl-title.png'

import Register from './Register';
import Login from './Login';
import Events  from './Events';
import RSO from './RSO';

import { user, setUser } from './userState';
import Logout from './Logout';

const App: Component = () => {
    const [registerToggle, setRegisterToggle] = createSignal(true);

    return (
    <div class="grid justify-center items-center">
        <img class="place-self-center max-h-60 max-width-50" src={`${title}`} alt="Campus Crawl Title"/>
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
            <div class="mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-1 divide-y-4 divide-slate-400">
                <h1>{`Hello there, ${user().firstName}`}</h1>
                <Events />
                <RSO />
                <Logout />
            </div>
        </Match>
        </Switch>
    </div>
    );
};

export default App;
