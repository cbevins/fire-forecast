<script>
  import { fireForecast } from '../../models/store.js'
</script>

<div class="card">
  <h4 class="card-title">Dead Fuel Moisture Outputs
    <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse"
      data-bs-target="#moistureOutputCollapse" aria-expanded="false" aria-controls="moistureOutputCollapse">
      +/-
    </button>
  </h4>
  <div class="collapse" id="moistureOutputCollapse">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-striped table-bordered border-primary">
          <thead>
            <tr><th>1-h Ref</th><th>1-h Cor</th><th>1-h</th><th>10-h</th><th>100-h</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>{Math.round(100 * $fireForecast.wind.fosberg.reference)}</td>
              <td>{Math.round(100 * $fireForecast.wind.fosberg.correction)}</td>
              <td>{Math.round(100 * $fireForecast.wind.fosberg.tl1h)}</td>
              <td>{Math.round(100 * $fireForecast.wind.fosberg.tl10h)}</td>
              <td>{Math.round(100 * $fireForecast.wind.fosberg.tl100h)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
