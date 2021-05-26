<script>
  import { fireInput } from '../../models/store.js'
</script>

<div class="card">
  <h4 class="card-title">User Inputs
    <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse"
      data-bs-target="#userInputCollapse" aria-expanded="false" aria-controls="userInputCollapse">
      +/-
    </button>
  </h4>
  <div class="collapse" id="userInputCollapse">
    <div id='userInput' class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-striped table-bordered border-primary">
          <thead>
            <tr><th>Parameter</th><th>Value</th><th>Selector</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>Cured Herb Fraction</td>
            <td>{Math.round(100 * $fireInput.curedHerb)} %</td>
            <td>
              <input id='cured-range' type=range bind:value={$fireInput.curedHerb} min=0 max=1 step={0.01}>
            </td>
          </tr>
          <tr>
            <td>Live Herb Moisture</td>
            <td>{Math.round(100 * $fireInput.herbMois)} %</td>
            <td>
              <input id='herb-range' type=range bind:value={$fireInput.herbMois} min=0.5 max=4 step={0.1}>
            </td>
          </tr>
          <tr>
            <td>Live Stem Moisture</td>
            <td>{Math.round(100 * $fireInput.stemMois)} %</td>
            <td>
              <input id='stem-range' type=range bind:value={$fireInput.stemMois} min=0.5 max=4 step={0.1}>
            </td>
          </tr>
          <tr>
            <td>Wind Speed Adj</td>
            <td>{Math.round(100 * $fireInput.windAdj)} %</td>
            <td>
              <input id='waf-range' type=range bind:value={$fireInput.herbMois} min=0.5 max=4 step={0.1}>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
