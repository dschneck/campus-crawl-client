import { Component, For } from "solid-js";
import {user, setUser } from './userState';

const Events : Component = () =>
{
    const RsoEvent = () => <li class="bg-rsoColor">Rso</li>;
    const PublicEvent = () => <li class="bg-publicColor">Public</li>;
    const PrivateEvent = () => <li class="bg-privateColor">Private</li>;

    const eventOptions = {
        public: PublicEvent ,
        private: PrivateEvent,
        rso: RsoEvent
    }

    return (
        <div class="bg-white p-10">
            <h1 class="text-xl mx-auto p-2 border-b-4 text-center">Events</h1>
            <ul class="overflow-auto list-none divide-y divide-white md:divide-y-8">
                <For
                each={Object.keys(eventOptions)}>
                    {option => eventOptions[option]}
                </For>
            </ul>
        </div>
    )
}

export default Events;
