export class ForecastAbstract {
  constructor (name) {
    this._name = name // Forecast service name, i.e., 'WeatherApi' or 'Tomorrow'
    this._lat = 0
    this._lon = 0
    this._timezone = 'America/Denver'
    this._period = 1 // days for WeatherApi, hours for Tomorrow.io
    this._response = null // Raw forecast service's JSON response
    this._okText = 'OK'
    this._status = 0
    this._statusText = ''
    this._msg = 'Uninitialized' // Message may be 'Uninitialized', 'Loading', 'OK', or an error message
    this._wthrForecast = [] // Array of hourly forecast props common to all services
    this._fireParams = [] // Array of hourly FireForecaster inputs
    this._fireForecast = [] // Array of hourly FireForecaster outputs
  }

  lat () { return this._lat }
  lon () { return this._lon }
  name () { return this._name }
  message () { return this._msg }
  ok () { return this._msg === this._okText }

  async load (lat, lon, period) {
    this._lat = lat
    this._lon = lon
    this._period = period // days for WeatherApi, hours for Tomorrow.io
    this._response = null
    this._msg = 'Loading'
    const success =  await this._loadForecast()
    if (success) {
      this._genHourlyWthrForecast() // MUST BE OVERRIDDEN BY DERIVED CLASSES
      // this.genHourlyFireForecast()
    }
    return this
  }

  // Adds fire behavior input values to each hourly forecast
  genHourlyFireForecast () {
    this._wthrForecast.forEach(h => {
      const inp = {
        month: +(h.date).substr(5, 2),
        hour: +(h.time).substr(0, 2),
        dryBulb: h.dryBulb,
        humidity: 0.01 * h.humidity,
        shading: 0.01 * h.cloudCover,
        windAt10m: 88 * h.windSpeed,
        windGust: 88 * h.gustGust,
        windFrom: h.windFrom
      }
      // const out = this._fireForecaster.run(inp)
    })
  }

  showWthrForecast () {
    const rec = []
    this._wthrForecast.forEach(h => {
      const date = `${h.date} ${h.time} `
      const temps = `${Math.round(h.dryBulb)} ${Math.round(h.humidity)} ${Math.round(h.dewPoint)} ${Math.round(h.feelsLike)} `
      const sow = `${h.sowCode} ${(h.sowText).padEnd(24)}` // sowIcon: h.condition.icon,
      const wind = `${Math.round(h.windSpeed)} ${Math.round(h.windGust)} ${Math.round(h.windFrom)}`
      const precip = `${Math.round(h.precipProb)} ${h.precipAmt.toFixed(2)}`
      const cloud = `${Math.round(h.cloudCover)} ${Math.round(h.visibility)}`
      const press =  `${h.surfacePress.toFixed(2)}`
      console.log(`| ${date}| ${temps} | ${wind} | ${sow} | ${precip} | ${cloud} | ${press} |`)
    })
  }

  _genHourlyWthrForecast () {
    throw new Error('Forecast.genHourlyWthrForecast() must be reimplemented by a derived class')
  }

  async _loadForecast () {
    throw new Error('Forecast.loadForecast() must be reimplemented by a derived class')
  }
}