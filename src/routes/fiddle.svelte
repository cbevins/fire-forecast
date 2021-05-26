<script>
  import { fireInput, fireForecast, fireForecaster } from '../models/store.js'
  import EsaInput from '../components/Fiddle/EsaInput.svelte'
  import FireOutput from '../components/Fiddle/FireOutput.svelte'
  import MoistureOutput from '../components/Fiddle/MoistureOutput.svelte'
  import UserInput from '../components/Fiddle/UserInput.svelte'
  import WxInput from '../components/Fiddle/WxInput.svelte'
</script>

<svelte:head><title>Fire Forecast Fiddle</title></svelte:head>

<h1>Fiddle with Fire Behavior</h1>

<UserInput/>
<WxInput/>
<EsaInput/>
<MoistureOutput/>
<FireOutput/>
