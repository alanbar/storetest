import { writable } from 'svelte/store'

export const store = writable({
    value: 0,
    name: 'cool store'
})