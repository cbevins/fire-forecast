export class FireInput {
  constructor () {
    // Provided by the user
    this.fuel = 'gs1'
    this.herbMois = 2 // ratio
    this.stemMois = 2 // ratio
    this.curedHerb = 0 // ratio
    this.windAdj = 1 // ratio of wind speed at midflame to wind speed at 10-m

    // Provided by elevation service
    this.slope = 0 // ratio
    this.aspect = 180 // degrees clockwise from north

    // Provided by weather forecast service
    this.month = 7 // 1=Jan, 12=Dec
    this.hour = 16 // hour since midnight
    this.dryBulb = 95 // oF
    this.humidity = 0.1 // ratio
    this.shading = 0 // ratio (usually the cloud cover)
    this.windAt10m = 0 // ft/min
    this.windGust = 0 // ft/min
    this.windFrom = 0 // wind source, degrees clockwise from north

    // These are usually constant
    this.elevDiff = 0 // ft
    this.elapsed = 60 // min
  }
}
