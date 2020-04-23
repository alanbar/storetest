<script>
import { store } from './store.js'
import { get } from 'svelte/store';
// get should be used sparingly

const storedValue = get(store);	
console.log('value: ', storedValue)

function increment() {
	$store.value++
}
</script>

{$store.value} 
{$store.name}

<button on:click={increment}>increment</button>