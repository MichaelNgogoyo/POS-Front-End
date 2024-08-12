import { createDirectus, rest, readItem, readItems } from '@directus/sdk';

const directus = createDirectus('https://directus.example.com').with(rest());

export default defineNuxtPlugin(() => {
    return {
        provide: { directus, readItem, readItems },
    };
});