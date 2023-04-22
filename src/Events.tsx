import { Component, For, createResource} from "solid-js";
import { getEvents, Event, eventArgs} from "./scripts/CampusCrawlWebApiClient";
import { user } from './userState';

const Events : Component = () =>
{
    const [publicEvents] = createResource({id: user().universityId, type:"public"} as eventArgs, getEvents);
    const [privateEvents] = createResource({id: user().id, type:"private"} as eventArgs, getEvents);
    const [rsoEvents] = createResource({id: user().id, type:"rso"} as eventArgs, getEvents);

    const RsoEvent = (event: Event) => {
        return (<li class="bg-rsoColor">
                    <h1 class="text-center text-xanthous">{event.name}</h1>
                    <p>{`Description: ${event.description}`}</p>
                    <p>{`Time: ${event.startTime} to ${event.endTime}`}</p>
                </li>);
        }

    const PublicEvent = (event: Event) => {
        return (<li class="bg-publicColor">
                    <h1 class="text-center text-xanthous">{event.name}</h1>
                    <p>{`Description: ${event.description}`}</p>
                    <p>{`Time: ${event.startTime} to ${event.endTime}`}</p>
                </li>);
        }

    const PrivateEvent = (event: Event) => {
        return (<li class="bg-privateColor">
                    <h1 class="text-center text-xanthous">{event.name}</h1>
                    <p>{`Description: ${event.description}`}</p>
                    <p>{`Time: ${event.startTime} to ${event.endTime}`}</p>
                </li>);
        }
    return (
        <div class="bg-white p-10">
            <h1 class="text-chestnut text-xl mx-auto p-2 text-center">Events</h1>
            <ul class="overflow-auto list-none divide-y divide-white md:divide-y-8">
                <h1 class="text-center">Public Events</h1>
                <For
                each={publicEvents()}>
                    {(event) => PublicEvent(event)}
                </For>

                <h1 class="text-center">Private Events</h1>
                <For
                each={privateEvents()}>
                    {(event) => PrivateEvent(event)}
                </For>

                <h1 class="text-center">RSO Events</h1>
                <For
                each={rsoEvents()}>
                    {(event) => RsoEvent(event)}
                </For>
            </ul>
        </div>
    )
}

export default Events;
