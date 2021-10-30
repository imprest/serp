<script>
  import { onMount } from 'svelte';

  export let handleEvent, pushEvent;

  let name = "Bar"

  function get_data() { pushEvent('get_data') };

  handleEvent('get_data', payload => name = payload.data );
</script>


<h1 class="text-5xl mx-auto">Hi {name}</h1>
<button class="btn is-primary" on:click={get_data}>Change Name</button>

<style>
  h1 { background-color: green; }
</style>