// import fetch from 'node-fetch'
import { EsaAbstract } from './EsaAbstract.js'

export class EsaMapQuest extends EsaAbstract {
  constructor () {
    super('MapQuest')
    this._a = 'd7ghMP8O'
    this._b = 'tMz17Dub'
    this._c = 'WO3qsTPZ'
    this._d = 'TzXKfbY1'
    this._url = 'https://open.mapquestapi.com/elevation/v1/profile'
  }

  // Returns a reconstituted key
  key () { return this._a+this._b+this._c+this._d }

  /**
   * Fills the 3x3 grid with elevations (m) provided by this service.
   * @returns {bool} TRUE on success (this._msg==='OK') or FALSE on failure (this._msg === 'Error...')
   */
  async _loadGrid () {
    try {
      // Create query string of elevation grid cell center [lat,lon] pairs
      let points = 'latLngCollection='
      this._grid.forEach(pt => { points += `${pt.lat},${pt.lon},` })
      const query = this._url + `?key=${this.key()}&shapeFormat=raw&unit=m&` + points

      // Make the request and await the response
      // console.log(`Loading from ${this._name} ...`)
      const response = await fetch(query, { method: 'GET' })
        .catch((error) => {
          this._msg = `${this._name} fetch error: ${error}`
          console.error(this._msg)
          return false
        })
      this._status = response.status
      this._statusText = response.statusText
      if (response.status < 200 || response.status >= 300) {
        this._msg = `Response status ${response.status}: ${response.statusText}`
        console.error(this._msg)
        return false
      }
      // Store results in the grid and return
      const json = await response.json()
      json.elevationProfile.forEach((e, idx) => { this._grid[idx].elev = e.height })
      // console.log(`... finished loading from ${this._name}`)
      this._msg = this._okText
      return true
    } catch (error) {
      this._msg = `${this._name} try{} block error: ${error}`
      console.error(this._msg)
      return false
    }
  }
}
