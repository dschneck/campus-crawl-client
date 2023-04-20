import { Component } from 'solid-js';
import { User } from './scripts/CampusCrawlWebApiClient';
import { user, setUser } from './userState';

const Logout : Component = () =>
{
    return (
        <button
            onClick={() => setUser({ id: "empty" } as User)}
            class="hover:bg-xanthous  px-3 mb-6 md:mb-0 inline block bg-white rounded font-bold align-baseline text-center">
                Logout
        </button>
    );
}

export default Logout;
