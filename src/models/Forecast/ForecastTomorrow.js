import fetch from 'node-fetch'
import moment from 'moment'
import queryString from 'query-string'
import { ForecastAbstract } from './ForecastAbstract.js'

const sowTextMap = new Map([
  [1000, 'Clear, Sunny'],
  [1001, 'Cloudy'],
  [1102, 'Mostly Cloudy'],
  [1100, 'Mostly Clear'],
  [1101, 'Partly Cloudy'],
  [2000, 'Fog'],
  [2100, 'Light Fog'],
  [4000, 'Drizzle'],
  [4001, 'Rain'],
  [4200, 'Light Rain'],
  [4201, 'Heavy Rain'],
  [5000, 'Snow'],
  [5001, 'Flurries'],
  [5100, 'Light Snow'],
  [5101, 'Heavy Snow'],
  [6000, 'Freezing Drizzle'],
  [6001, 'Freezing Rain'],
  [6200, 'Light Freezing Rain'],
  [6201, 'Heavy Freezing Rain'],
  [7000, 'Ice Pellets'],
  [7101, 'Heavy Ice Pellets'],
  [7102, 'Light Ice Pellets'],
  [8000, 'Thunderstorm'],
])

export class ForecastTomorrow extends ForecastAbstract {
  constructor () {
    super('Tomorrow.io')
    this._key = 'Vp91CwZKe0rPFd8ZDry5hKyVyOp2I4aC',
    this._url = 'https://api.tomorrow.io/v4/timelines'
  }

  // Returns a reconstituted key
  key () { return this._key }

  sowText (sowCode) {
    return sowTextMap.has(sowCode) ? sowTextMap.get(sowCode) : 'Unknown'
  }

  async _loadForecast () {
    // set the Timelines GET endpoint as the target URL
    const timesteps = ['1h'] // set the timesteps, like "current", "1h" and "1d"
    // requested fields
    const fields = [
      'temperature', // dry bulb temperature at 2-m (oF)
      'temperatureApparent', // apparent temperature at 2-m (oF)
      'humidity', // relative humidity (%)
      'dewPoint', // dewpoint temperature at 2-m (oF)
      'windSpeed', // wind speed at 10-m (mi/h)
      'windGust', // maximum brief increase in wind speed at 10-m, usually less than 20 seconds (mi/h)
      'windDirection', // direction from which the wind originates, degrees clockwise from north
      'precipitationIntensity', // in/hr
      'precipitationProbability', // %
      'precipitationType', // 0=N/A 1=Rain 2=Snow 3=Freezing Rain 4=Ice Pellets
      'pressureSurfaceLevel', // weight of the air above the surface (at the surface level) (in/Hg)
      'pressureSeaLevel', // weight of the air above the surface (at mean sea level) (in/Hg)
      'cloudCover', // %
      'visibility', // mi
      'cloudBase', // mi
      'cloudCeiling', // mi
      'weatherCode', // code
      'fireIndex', // Fosberg Fire Weather Index
      'snowAccumulation', // The trailing amount of new snowfall that has or will have occurred over the last hour of the requested time (in)
      'iceAccumulation', // The trailing amount of ice that has or will have occurred over the last hour of the requested time (in)
      'soilMoistureVolumetric0To10', // % at 0-10 cm
      'soilTemperature0To10', // oF
      'solarGHI', // Btu/ft2  (total amount of shortwave radiation received from above by a surface horizontal to the ground)
      'solarDNI', // Btu/ft2 (diffuse (i.e., scattered) component of GHI reaching the surface of the earth at each point)
      'solarDHI' // Btu/ft2 (direct component of GHI reaching the surface of the earth at each point)
      // 'moonPhase', // not allowed for 1-h timelines
      // 'sunriseTime', // not allowed for 1-h timelines
      // 'sunsetTime' // not allowed for 1-h timelines
    ]

    // request the timelines with all the query string parameters as options
    // DON'T CHANGE THE NAMES OF THESE!!!
    const now = moment.utc()
    const parms = queryString.stringify({
      apikey: this.key(), // reconstitute the key
      location: [this._lat, this._lon],
      fields: fields,
      units: 'imperial', // choose the unit system, either 'metric' or 'imperial'
      timesteps: ['1h'], // set the timesteps, like "current", "1h" and "1d"
      startTime: moment.utc(now).startOf('hour').toISOString(), // "2019-03-20T14:09:50Z"
      endTime: moment.utc(now).add(this._period, 'hours').toISOString(), // 3 days allowed under free plan
      timezone: this._timezone
    }, { arrayFormat: 'comma' })

    const query = this._url + '?' + parms
    console.log(query)
    try {
      const response = await fetch(query, { method: 'GET' })
        .catch((error) => {
          this._msg = `${this._name} fetch() error: ${error}`
          console.error(this._msg)
          return false
        })
      console.log(`${this.name()} response status ${response.status}: ${response.statusText}`)
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
    // timeline[0] is the '1h' timeline
    this._response.data.timelines[0].intervals.forEach(h => {
      const wx = h.values
      this._wthrForecast.push({
        date: h.startTime.substr(0, 10), // looks like "2021-05-30T17:00:00-06:00"
        time: h.startTime.substr(11, 5),
        dryBulb: wx.temperature, // dry bulb temperature at 2-m (oF)
        humidity: wx.humidity, // relative humidity (%)
        dewPoint: wx.dewPoint, // dewpoint temperature at 2-m (oF)
        feelsLike: wx.temperatureApparent, // apparent temperature at 2-m (oF)
        sowCode: wx.weatherCode, // code
        sowText: this.sowText(wx.weatherCode),
        sowIcon: null,
        windSpeed: wx.windSpeed, // wind speed at 10-m (mi/h)
        windGust: wx.windGust, // maximum brief increase in wind speed at 10-m, usually less than 20 seconds (mi/h)
        windFrom: wx.windDirection, // direction from which the wind originates, degrees clockwise from north
        precipProb: wx.precipitationProbability, // %
        precipAmt: wx.precipitationIntensity, // in/hr
        cloudCover: wx.cloudCover, // %
        visibility: wx.visibility, // mi
        surfacePress: wx.pressureSurfaceLevel, // weight of the air above the surface (at the surface level) (in/Hg)
      })
    }) // hour interval
  }
}
