/**
 * @file FireForecaster.js provides forecasted dead fuel moisture and fire behavior
 * using a pre-configured @cbevins/fire-behavior-simulator
 * @copyright 2021 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license MIT
*/
import { Sim } from './fire-behavior-simulator.js'
import { FireOutput } from './FireOutput.js'

export class FireForecaster {
  constructor () {
    this.sim = new Sim()
    this.dag = this.sim.createDag('FireForecast')
    this.dag.configure([
      ['configure.fuel.primary', 'catalog'], // The primary fuel is specified by a fuel model catalog key
      ['configure.fuel.secondary', 'none'], // There are no secondary fuels
      ['configure.fuel.moisture', 'fosberg'], // 3 dead moisture classes and a singe live category moisture
      ['configure.fuel.curedHerbFraction', 'input'],
      ['configure.wind.speed', 'at10m'],
      ['configure.wind.direction', 'sourceFromNorth'],
      ['configure.slope.steepness', 'ratio'],
      ['configure.fuel.windSpeedAdjustmentFactor', 'input'],
      ['configure.fire.vector', 'fromHead'],
      ['configure.temperature.humidity', 'humidity'], // enter dry bulb and humidity
      ['configure.fuel.chaparralTotalLoad', 'input'], // unimportant
      ['configure.fire.weightingMethod', 'arithmetic'], // unimportant
      ['configure.fire.effectiveWindSpeedLimit', 'ignored'],
      ['configure.fire.firelineIntensity', 'flameLength'],
      ['configure.fire.lengthToWidthRatio', 'lengthToWidthRatio']
    ])

    this.dag.select([
      'surface.primary.fuel.model.behave.parms.cured.herb.fraction', // ratio
      'surface.primary.fuel.fire.effectiveWindSpeed', // ft/min
      'surface.primary.fuel.fire.flameResidenceTime', // min
      'surface.primary.fuel.fire.heading.fromUpslope', // degrees
      'surface.primary.fuel.fire.heading.fromNorth', // degrees
      'surface.primary.fuel.fire.heatPerUnitArea', // btu/ft2 |
      'surface.primary.fuel.fire.reactionIntensity', // btu/ft2/min
      'surface.fire.ellipse.axis.lengthToWidthRatio', // ratio
      'surface.fire.ellipse.back.firelineIntensity', // Btu/ft/s
      'surface.fire.ellipse.back.flameLength', // ft
      'surface.fire.ellipse.back.scorchHeight', // ft
      'surface.fire.ellipse.back.spreadDistance', // ft
      'surface.fire.ellipse.back.spreadRate', // ft/min
      'surface.fire.ellipse.flank.firelineIntensity',
      'surface.fire.ellipse.flank.flameLength',
      'surface.fire.ellipse.flank.scorchHeight',
      'surface.fire.ellipse.flank.spreadDistance',
      'surface.fire.ellipse.flank.spreadRate',
      'surface.fire.ellipse.head.firelineIntensity',
      'surface.fire.ellipse.head.flameLength',
      'surface.fire.ellipse.head.scorchHeight',
      'surface.fire.ellipse.head.spreadDistance',
      'surface.fire.ellipse.head.spreadRate',
      'surface.fire.ellipse.size.area', // ft2
      'surface.fire.ellipse.size.length', // ft
      'surface.fire.ellipse.size.perimeter', // ft
      'surface.fire.ellipse.size.width', // ft
      'site.moisture.dead.tl1h', // ratio
      'site.moisture.dead.tl10h',
      'site.moisture.dead.tl100h'
    ])
  }

  /**
   * Gets fire behavior for the supplied inputs
   * @param {FireInput} inp
   * @returns {wind: <FireOutput>, gust: <FireOutput>} Fire behavior output object
   */
  forecast (inp) {
    this.dag.input([
      ['surface.primary.fuel.model.catalogKey', [inp.fuel]],
      ['surface.primary.fuel.model.behave.parms.cured.herb.fraction', [inp.curedHerb]], // fraction
      ['site.date.month', [inp.month]],
      ['site.time.hour', [inp.hour]],
      ['site.location.elevation.diff', [inp.elevDiff]],
      ['site.slope.direction.aspect', [inp.aspect]], // degrees clockwise from north
      ['site.slope.steepness.ratio', [inp.slope]], // vertical rise / horizontal reach
      ['site.temperature.air', [inp.dryBulb]], // oF
      ['site.temperature.relativeHumidity', [inp.humidity]], // oF
      ['site.temperature.shading', [inp.shading]], // oF
      ['site.moisture.live.herb', [inp.herbMois]], // fraction of fuel ovendry weight
      ['site.moisture.live.stem', [inp.stemMois]], // fraction of fuel ovendry weight
      ['site.wind.speed.at10m', [inp.windAt10m]], // feet per minute (1 mph = 88 ft/min)
      ['site.windSpeedAdjustmentFactor', [inp.windAdj]], // fraction of 10m wind speed
      ['site.wind.direction.source.fromNorth', [inp.windFrom]], // direction of wind origin, degrees clockwise from north
      ['site.fire.time.sinceIgnition', [inp.elapsed]] // minutes
    ]).run()
    const result = {}
    result.wind = new FireOutput(this.dag)
    this.dag.input([['site.wind.speed.at10m', [inp.windGust]]]).run()
    result.gust = new FireOutput(this.dag)
    return result
  }

  /**
   * Display the required configuration nodes
   */
  showConfigs () {
    const activeConfigs = this.dag.requiredConfigNodes() // returns an array of DagNode references
    console.log('ACTIVE CONFIGS:')
    activeConfigs.forEach(cfg => { console.log(cfg.key(), cfg.value()) })
  }

  /**
   * Display the required input nodes
   */
  showInputs () {
    const requiredInputs = this.dag.requiredInputNodes() // returns an array of DagNode references
    console.log('REQUIRED INPUTS:')
    requiredInputs.forEach(node => { console.log(node.key()) })
  }
}
