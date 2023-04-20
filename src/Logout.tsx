import { Component } from 'solid-js';
import { User } from './scripts/CampusCrawlWebApiClient';
import { user, setUser } from './userState';

const Logout : Component = () =>
{
    return (
        <div>
            <button
                onClick={() => setUser({ id: "empty" } as User)}
                class="hover:bg-xanthous md:w-2/3 px-3 mb-6 md:mb-0 inline block bg-white rounded font-bold align-baseline ">
                    Logout
            </button>
        </div>
    );
}

export default Logout;
