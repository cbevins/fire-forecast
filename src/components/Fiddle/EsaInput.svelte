<script>
  import { fireInput } from '../../models/store.js'
</script>

<div class="card">
  <h4 class="card-title">Elevation Service Inputs
    <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse"
      data-bs-target="#esaInputCollapse" aria-expanded="false" aria-controls="esaInputCollapse">
      +/-
    </button>
  </h4>
  <div class="collapse" id="esaInputCollapse">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-striped table-bordered border-primary">
          <thead>
            <tr><th>Parameter</th><th>Value</th><th>Selector</th></tr>
          </thead>
          <tbody>
          <tr>
            <td>Slope</td>
            <td>{Math.round(100 * $fireInput.slope)} %</td>
            <td>
              <input id='slope-range' type=range bind:value={$fireInput.slope} min=0 max={8} step={0.01}>
            </td>
          </tr>
          <tr>
            <td>Aspect</td>
            <td>{Math.round($fireInput.aspect)} deg</td>
            <td>
              <input id='aspect-range' type=range bind:value={$fireInput.aspect} min=0 max={360} step={15}>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
