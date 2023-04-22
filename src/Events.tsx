import { Component, For, createResource} from "solid-js";
import { getEvents, Event, eventArgs} from "./scripts/CampusCrawlWebApiClient";
import { user } from './userState';

const Events : Component = () =>
{
    const [publicEvents] = createResource({id: user().universityId, type:"public"} as eventArgs, getEvents);
    const [privateEvents] = createResource({id: user().id, type:"private"} as eventArgs, getEvents);
    const [rsoEvents] = createResource({id: user().id, type:"rso"} as eventArgs, getEvents);

    const RsoEvent = (event: Event) => <li class="bg-rsoColor">{event.name}</li>;
    const PublicEvent = (event: Event) => <li class="bg-publicColor">{event.name}</li>;
    const PrivateEvent = (event: Event) => <li class="bg-privateColor">{event.name}</li>;

    return (
        <div class="bg-white p-10">
            <h1 class="text-chestnut text-xl mx-auto p-2 text-center">Events</h1>
            <ul class="overflow-auto list-none divide-y divide-white md:divide-y-8">
                <For
                each={publicEvents()}>
                    {(event) => PublicEvent(event)}
                </For>

                <For
                each={privateEvents()}>
                    {(event) => PrivateEvent(event)}
                </For>

                <For
                each={rsoEvents()}>
                    {(event) => RsoEvent(event)}
                </For>
            </ul>
        </div>
    )
}

export default Events;
