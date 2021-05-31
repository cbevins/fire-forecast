/**
 * Example of Forecast class usage under node.js.
 * To run with node.js, you must:
 * 1 - uncomment ForecastWeatherApi.js line 1: 'import { fetch} from 'node-fetch'
 * 2 - have a local package.json with "type": "modules"
 */
import {ForecastTomorrow} from './ForecastTomorrow.js'
import {ForecastWeatherApi} from './ForecastWeatherApi.js'

console.log('Forecast example with node.js')
const M = { name: 'The "M"', lat: 46.859340, lon: -113.975528 }
const wapiPeriod = 3
const tomoPeriod = wapiPeriod * 24

// const tomo = new ForecastTomorrow()
const wapi = new ForecastWeatherApi()
const tomo = new ForecastTomorrow()

function report (forecast) {
  console.log(forecast.name(), ' completed')
}

async function runParallel () {
  // First schedule ...
  const pending = Promise.all([
    tomo.load(M.lat, M.lon, tomoPeriod),
    wapi.load(M.lat, M.lon, wapiPeriod)
  ])
  // ... then `await` all the responses ...
  const [tomo, wapi] = await pending
  // .. then do something with the responses
  report(tomo)
  report(wapi)
}

function runSerial () {
  // First do one ...
  tomo.load(M.lat, M.lon, tomoPeriod).then(t => t.showWthrForecast())
  // ... then do the other
  // wapi.load(M.lat, M.lon, wapiPeriod).then(w => w.showWthrForecast())
}

// runParallel()
runSerial()
