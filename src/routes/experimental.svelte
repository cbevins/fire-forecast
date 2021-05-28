<script>
  import {fireInput} from '../models/Experimental/store.js'
  import InputFormUsingProps from '../components/Experimental/InputFormUsingProps.svelte'
  import InputFormUsingStore from '../components/Experimental/InputFormUsingStore.svelte'
  import InputTable from '../components/Experimental/InputTable.svelte'
</script>

<svelte:head><title>Experimental</title></svelte:head>
<h3>Experimental Page</h3>
<InputTable/>
<InputFormUsingStore/>
<InputFormUsingProps fireInput={fireInput}/>
