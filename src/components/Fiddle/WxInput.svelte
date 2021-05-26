<script>
  import { fireInput } from '../../models/store.js'
</script>

<div class="card">
  <h4 class="card-title">Weather Service Inputs
    <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse"
      data-bs-target="#wxInputCollapse" aria-expanded="false" aria-controls="wxInputCollapse">
      +/-
    </button>
  </h4>
  <div class="collapse" id="wxInputCollapse">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-striped table-bordered border-primary">
          <thead>
            <tr><th>Parameter</th><th>Value</th><th>Selector</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>Month</td>
            <td>{$fireInput.month}</td>
            <td>
              <input id='month-range' type=range bind:value={$fireInput.month} min=1 max=12>
            </td>
          </tr>
          <tr>
            <td>Hour</td>
            <td>{$fireInput.hour}</td>
            <td>
              <input id='hour-range' type=range bind:value={$fireInput.hour} min=0 max=23>
            </td>
          </tr>
          <tr>
            <td>Dry Bulb</td>
            <td>{Math.round($fireInput.dryBulb)} oF</td>
            <td>
              <input id='dryBulb-range' type=range bind:value={$fireInput.dryBulb} min=0 max=120 step=1>
            </td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{Math.round(100 * $fireInput.humidity)} %</td>
            <td>
              <input id='humidity-range' type=range bind:value={$fireInput.humidity} min=0 max=1 step={0.01}>
            </td>
          </tr>
          <tr>
            <td>Wind at 10-m</td>
            <td>{Math.round($fireInput.windAt10m / 88)} mph</td>
            <td>
              <input id='windAt10m-range' type=range bind:value={$fireInput.windAt10m} min=0 max={88*40}>
            </td>
          </tr>
          <tr>
            <td>Wind Gusting to</td>
            <td>{Math.round($fireInput.windGust / 88)} mph</td>
            <td>
              <input id='windGust-range' type=range bind:value={$fireInput.windGust} min=0 max={88*40}>
            </td>
          </tr>
          <tr>
            <td>Wind From</td>
            <td>{Math.round($fireInput.windFrom)} deg</td>
            <td>
              <input id='windFrom-range' type=range bind:value={$fireInput.windFrom} min=0 max=360>
            </td>
          </tr>
          <tr>
            <td>Shading</td>
            <td>{Math.round(100 * $fireInput.shading)} %</td>
            <td>
              <input id='shading-range' type=range bind:value={$fireInput.shading} min=0 max=1 step={0.01}>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
