import { derived, writable } from 'svelte/store';
import { FireForecaster } from './FireForecaster.js'
import { FireInput } from './FireInput.js';

export const fireForecaster = new FireForecaster()

export const fireInput = writable(new FireInput())

export const fireForecast = derived(fireInput, $fireInput => fireForecaster.forecast($fireInput))
