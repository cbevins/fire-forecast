/**
 * Example of Esa class usage under node.js.
 * To run with node.js, you must:
 * 1 - uncomment EsaMapQuest.js line 1: 'import { fetch} from 'node-fetch'
 * 2 - have a local package.json with "type": "modules"
 */

import { EsaMapQuest } from './EsaMapQuest.js'
import { EsaUsgs } from './EsaUsgs.js'

const M = { name: 'The "M"', lat: 46.859340, lon: -113.975528 }
const mapq = new EsaMapQuest()
const usgs = new EsaUsgs()

function report (esa) {
  let name = `${esa.name()}`
  // console.log(source, 'lat', esa._lat, 'lon', esa._lon, 'deg', esa._deg, 'rad', esa._rad)
  const e = esa._grid.map(cell => Math.round(3.2808 * cell.elev))
  const elev = `elev  : ${Math.round(esa.elevFt())} ft`
  const slope = `slope : ${Math.round(100 * esa.slopeRatio())}% (${Math.round(esa.slopeDegrees())}\u00B0)`
  const aspect = `aspect: ${Math.round(esa.aspect())} (${esa.aspectCompass()})`
  const r1 = `${e[0]} ${e[1]} ${e[2]}`
  const r2 = `${e[3]} ${e[4]} ${e[5]}`
  const r3 = `${e[6]} ${e[7]} ${e[8]}`
  const str = `\n${name}\n    ${r1}    ${elev}\n    ${r2}    ${slope}\n    ${r3}    ${aspect}\n`
  console.log(str)
}

async function runParallel () {
  // First schedule ...
  const pending = Promise.all([
    mapq.load(M.lat, M.lon),
    usgs.load(M.lat, M.lon)
  ])
  // ... then `await` all the responses ...
  const [mqEsa, usEsa] = await pending
  // .. then do something with the responses
  report(mqEsa)
  report(usEsa)
}

function runSerial () {
  // First do one ...
  mapq.load(M.lat, M.lon).then(esa => report(esa))
  // ... then do the other
  usgs.load(M.lat, M.lon).then(esa => report(esa))
}

runParallel()
// runSerial()
