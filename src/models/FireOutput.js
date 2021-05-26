export class FireOutput {
  constructor (dag) {
    this._store(dag)
  }

  // Stores current values of selected nodes into the returned object
  _store (dag) {
    this.fire = {
      effectiveWindSpeed: dag.node('surface.primary.fuel.fire.effectiveWindSpeed').value(), // ft/min
      flameResidenceTime: dag.node('surface.primary.fuel.fire.flameResidenceTime').value(), // min
      headingFromUpslope: dag.node('surface.primary.fuel.fire.heading.fromUpslope').value(), // degrees
      headingFromNorth: dag.node('surface.primary.fuel.fire.heading.fromNorth').value(), // degrees
      heatPerUnitArea: dag.node('surface.primary.fuel.fire.heatPerUnitArea').value(), // btu/ft2 |
      reactionIntensity: dag.node('surface.primary.fuel.fire.reactionIntensity').value() // btu/ft2/min
    }
    this.moisture = {
      tl1h: dag.node('site.moisture.dead.tl1h').value(),
      tl10h: dag.node('site.moisture.dead.tl10h').value(),
      tl100h: dag.node('site.moisture.dead.tl100h').value()
    }
    this.fosberg = {
      reference: dag.node('site.moisture.dead.fosberg.reference').value(),
      correction: dag.node('site.moisture.dead.fosberg.correction').value(),
      tl1h: dag.node('site.moisture.dead.fosberg.tl1h').value(),
      tl10h: dag.node('site.moisture.dead.fosberg.tl10h').value(),
      tl100h: dag.node('site.moisture.dead.fosberg.tl100h').value()
    }
    this.ellipse = {
      lwRatio: dag.node('surface.fire.ellipse.axis.lengthToWidthRatio').value(), // ratio
      area: dag.node('surface.fire.ellipse.size.area').value(), // ft2
      length: dag.node('surface.fire.ellipse.size.length').value(), // ft
      perimeter: dag.node('surface.fire.ellipse.size.perimeter').value(), // ft
      width: dag.node('surface.fire.ellipse.size.width').value() // ft
    }
    this.head = this.behaviorAt(dag, 'head')
    this.flank = this.behaviorAt(dag, 'flank')
    this.back = this.behaviorAt(dag, 'back')
  }

  behaviorAt (dag, at) {
    return {
      firelineIntensity: dag.node(`surface.fire.ellipse.${at}.firelineIntensity`).value(),
      flameLength: dag.node(`surface.fire.ellipse.${at}.flameLength`).value(),
      scorchHeight: dag.node(`surface.fire.ellipse.${at}.scorchHeight`).value(),
      spreadDistance: dag.node(`surface.fire.ellipse.${at}.spreadDistance`).value(),
      spreadRate: dag.node(`surface.fire.ellipse.${at}.spreadRate`).value()
    }
  }
}