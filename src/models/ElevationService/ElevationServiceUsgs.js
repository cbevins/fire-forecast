import axios from 'axios'
import { ElevationServiceAbstract } from './ElevationServiceAbstract.js'

export class ElevationServiceUsgs extends ElevationServiceAbstract {
  constructor () {
    super('ElevationServiceUsgs')
    this._url = 'https://nationalmap.gov/epqs/pqs.php'
  }

  /**
   * Fills the 3x3 grid with elevations (m) provided by this service.
   * @returns {bool} TRUE on success (this._msg==='OK') or FALSE on failure (this._msg === 'Error...')
   */
  async _loadGrid () {
    try {
      // Make the request and await the response
      const requests = []
      // console.log(`Loading from ${this._name} ...`)
      const query = this._url + '?units=Meters&output=json&'
      this._grid.forEach(pt => { requests.push(axios.get(query + `x=${pt.lon}&y=${pt.lat}`)) })
      const responses = await axios.all(requests)
      // console.log(`... finished loading from ${this._name}`)

      // Store results in the grid and return
      responses.forEach((res, idx) => {
        this._status = res.status
        this._statusText = res.statusText
        if (res.status < 200 || res.status >= 300) {
          this._msg = `Response status ${res.status}: ${res.statusText}`
          console.error(this._msg)
          return false
        }
        this._grid[idx].elev = res.data.USGS_Elevation_Point_Query_Service.Elevation_Query.Elevation
      })
      this._msg = this._okText
      return true
    } catch (error) {
      this._msg = `${this._name} try{} block error: ${error}`
      console.error(this._msg)
      return false
    }
  }
}
