<script>
  import { fireInput, fireForecast } from '../../models/store.js'
</script>

<div class="card">
  <h4 class="card-title">Fire Behavior Results
    <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse"
      data-bs-target="#fireOutputCollapse" aria-expanded="false" aria-controls="fireOututCollapse">
      +/-
    </button>
  </h4>
  <div class="collapse" id="fireOutputCollapse">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-sm table-striped table-bordered border-primary">
          <thead>
            <tr><th>Behavior</th><th>Units</th>
              <th>Wind {Math.round($fireInput.windAt10m / 88)}</th>
              <th>Gusts to {Math.round($fireInput.windGust / 88)}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Head Spread Rate</td><td>ft/min</td>
              <td>{$fireForecast.wind.head.spreadRate.toFixed(2)}</td>
              <td>{$fireForecast.gust.head.spreadRate.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Head Flame Length</td><td>ft</td>
              <td>{$fireForecast.wind.head.flameLength.toFixed(2)}</td>
              <td>{$fireForecast.gust.head.flameLength.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Area after 1 Hour</td><td>ac</td>
              <td>{($fireForecast.wind.ellipse.area / (66 * 660)).toFixed(2)}</td>
              <td>{($fireForecast.gust.ellipse.area / (66 * 660)).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Perimeter after 1 Hour</td><td>ft</td>
              <td>{Math.round($fireForecast.wind.ellipse.perimeter)}</td>
              <td>{Math.round($fireForecast.gust.ellipse.perimeter)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
