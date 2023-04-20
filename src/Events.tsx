import { Component } from "solid-js";
import {user, setUser } from './userState';

const Events : Component = () =>
{
    return (
        <div>
            <h1>Events</h1>
            <p>{`Hello there, ${user().firstName}. We've been expecting you...`}</p>
        </div>
    )
}

export default Events;
