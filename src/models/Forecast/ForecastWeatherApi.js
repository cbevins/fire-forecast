import fetch from 'node-fetch'
import { ForecastAbstract } from './ForecastAbstract.js'

export class ForecastWeatherApi extends ForecastAbstract {
  constructor () {
    super('WeatherApi.com')
    this._key = '43956b1f6760417db1d182743212704'
    this._url = 'https://api.weatherapi.com/v1/forecast.json'
  }

  // Returns a reconstituted key
  key () { return this._key }

  async _loadForecast () {
    const query = `${this._url}?key=${this.key()}&days=${this._period}&q=${this._lat},${this._lon}&aqi=no&alerts=no`
    // console.log(query)
    try {
      const response = await fetch(query, { method: 'GET' })
        .catch((error) => {
          this._msg = `${this._name} fetch() error: ${error}`
          console.error(this._msg)
          return false
        })
      // console.log(`${this.name()} response status ${response.status}: ${response.statusText}`)
      this._status = response.status
      this._statusText = response.statusText
      if (response.status < 200 || response.status >= 300) {
        this._msg = `Response status ${response.status}: ${response.statusText}`
        console.error(this._msg)
        return false
      }
      this._response = await response.json()
      // console.log(${this.name()} JSON Response: ${this._response})`
      this._msg = this._okText
      return true
    } catch (error) {
        this._msg = `${this._name} try{} error: ${error}`
        console.error(this._msg)
        return false
    }
  }

  _genHourlyWthrForecast () {
    this._wthrForecast = []
    this._response.forecast.forecastday.forEach(day => {
      day.hour.forEach(h => {
        this._wthrForecast.push({
          date: h.time.substr(0, 10), // h.time looks like '2021-06-01 17:00'
          time: h.time.substr(10),
          dryBulb: h.temp_f,
          humidity: h.humidity,
          dewPoint: h.dewpoint_f,
          feelsLike: h.feelslike_f,
          sowCode: h.condition.code,
          sowText: h.condition.text,
          sowIcon: h.condition.icon,
          windSpeed: h.wind_mph,
          windGust: h.gust_mph,
          windFrom: h.wind_degree,
          precipProb: h.chance_of_rain,
          precipAmt: h.precip_in,
          cloudCover: h.cloud,
          visibility: h.vis_miles,
          surfacePress: h.pressure_in
          // uvIndex: h.uv
        })
      }) // hour
    }) // day
  }
}

export class LocationWeatherApi {
/**
 * Fetches location info from WeatherAPI.com timezone
 *
 * @param {any} q Query parameter based on which data is sent back. It could be following:
 * - Latitude and Longitude (Decimal degree) e.g: q=48.8567,2.3508
 * - city name e.g.: q=Paris
 * - US zip e.g.: q=10001
 * - UK postcode e.g: q=SW1
 * - Canada postal code e.g: q=G2J
 * - metar: <metar code> e.g: q=metar:EGLL
 * - iata: <3 digit airport code> e.g: q=iata:DXB
 * - auto:ip IP lookup e.g: q=auto:ip
 * - IP address (IPv4 and IPv6 supported) e.g: q=100.0.0.1
 * @returns {object} {
    "name": "Missoula",
    "region": "Montana",
    "country": "USA",
    "lat": 46.86,
    "lon": -114.04,
    "tz_id": "America/Denver",
    "localtime_epoch": 1621784749,
    "localtime": "2021-05-23 9:45",
    "query": "search query",
    "error": { code: 0, message: 'Ok'}
  }
 */
  async _loadLocation (q) {
    const query = `${this._url}?key=${this.key()}&q=${q}`
    try {
      const response = await fetch(query, { method: 'GET' })
        .catch((error) => console.error('weatherap.com fetch error: ' + error))
      const json = await response.json()
      json.location.query = q
      json.location.error = (json.error !== undefined) ? json.error : {code: 0, message: 'OK'}
      if (q.includes(',')) { // is this a lat,lon query
        const [lat, lon] = q.split(',')
        json.location.lat = parseFloat(lat)
        json.location.lon = parseFloat(lon)
      }
      return json.location
    } catch (error) {
      console.log('ERROR _weatherApi.js timezone(): ', error)
    }
  }
}
