<script>
  import {fireInput} from '../../models/Experimental/store.js'
</script>

<div class="card">
  <h4 class="card-title">Current Input Store
    <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse"
      data-bs-target="#inputCurrentCollapse" aria-expanded="false" aria-controls="inputCurrentCollapse">
      +/-
    </button>
  </h4>
  <div class="collapse" id="inputCurrentCollapse">
    <div id='inputCurrent' class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-striped table-bordered border-primary">
          <thead>
            <tr><th>Parameter</th><th>Value</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>Cured Herb Fraction</td>
            <td>{Math.round(100 * $fireInput.curedHerb)} %</td>
          </tr>
          <tr>
            <td>Live Herb Moisture</td>
            <td>{Math.round(100 * $fireInput.herbMois)} %</td>
          </tr>
          <tr>
            <td>Live Stem Moisture</td>
            <td>{Math.round(100 * $fireInput.stemMois)} %</td>
          </tr>
          <tr>
            <td>Wind Speed Adj</td>
            <td>{Math.round(100 * $fireInput.windAdj)} %</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
