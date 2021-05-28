import { writable } from 'svelte/store';
import { FireInput } from '../FireInput.js';

export const fireInput = writable(new FireInput())
