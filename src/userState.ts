import { User } from './scripts/CampusCrawlWebApiClient';
import { createSignal } from 'solid-js';

export const [user, setUser] = createSignal( {
    id: 'stempty'
} as User);
