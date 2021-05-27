export const FuelModelKey = [{
  label: '1',
  type: 'series',
  series: 'Grass',
  desc: 'Nearly pure grass and/or forb type',
  more: [{
    label: 'a',
    desc: 'Arid to semiarid climate (rainfall deficient in summer). Extinction moisture content is 15 percent.',
    more: [{
      label: 'i',
      desc: 'Grass is short, patchy, and possibly heavily grazed.',
      model: 'gr1',
      ros: 'moderate',
      fl: 'low',
    }, {
      label: 'ii',
      desc: 'GR2 Moderately coarse continuous grass, average depth about 1 foot. Spread rate high; flame length moderate.',
    }, {
      label: 'iii',
      desc: 'GR4 Moderately coarse continuous grass, average depth about 2 feet. Spread rate very high; flame length high.',
    }, {
      label: 'iv',
      desc: 'GR7 Moderately coarse continuous grass, average depth about 3 feet. Spread rate very high; flame length very high.',
    }],
  }, // Arid Grass
  {
    label: 'b',
    desc: 'Subhumid to humid climate (rainfall adequate in all seasons). Extinction moisture content is 30 to 40 percent.',
    more: [{
      label: 'i',
      desc: 'GR1 Grass is short, patchy, and possibly heavily grazed. Spread rate moderate; flame length low.',
    }, {
      label: 'ii',
      desc: 'GR3 Very coarse grass, average depth about 2 feet. Spread rate high; flame length moderate.',
    }, {
      label: 'iii',
      desc: 'GR5 Dense, coarse grass, average depth about 1 to 2 feet. Spread rate very high; flame length high.',
    }, {
      label: 'iv',
      desc: 'GR6 Dryland grass about 1 to 2 feet tall. Spread rate very high; flame length very high.',
    }, {
      label: 'v',
      desc: 'GR8 Heavy, coarse, continuous grass 3 to 5 feet tall. Spread rate very high; flame length very high.',
    }, {
      label: 'vi',
      desc: 'GR9 Very heavy, coarse, continuous grass 5 to 8 feet tall. Spread rate extreme; flame length extreme.',
    }],
  }], // Humid Grass
}, {
  label: '2',
  type: 'series',
  series: 'Grass-Shrub',
  desc: 'Mixture of grass and shrub, up to about 50 percent shrub coverage',
  more: [{
    label: 'a',
    desc: 'Arid to semiarid climate (rainfall deficient in summer). Extinction moisture content is 15 percent.',
    more: [{
      label: 'i',
      desc: 'GS1 Shrubs are about 1 foot high, low grass load. Spread rate moderate; flame length low.',
    }, {
      label: 'ii',
      desc: 'GS2 Shrubs are 1 to 3 feet high, moderate grass load. Spread rate high; flame length moderate.',
    }],
  }, {
    label: 'b',
    desc: 'Subhumid to humid climate (rainfall adequate in all seasons). Extinction moisture content is 30 to 40 percent.',
    more: [{
      label: 'i',
      desc: 'GS3 Moderate grass/shrub load, average grass/shrub depth less than 2 feet. Spread rate high; flame length moderate.',
    }, {
      label: 'ii',
      desc: 'GS4 Heavy grass/shrub load, depth greater than 2 feet. Spread rate high; flame length very high.',
    }],
  }],
}, {
  label: '3',
  type: 'series',
  series: 'Shrub',
  desc: 'Shrubs cover at least 50 percent of the site; grass sparse to nonexistent (Shrub)',
  more: [{
    label: 'a',
    desc: 'Arid to semiarid climate (rainfall deficient in summer). Extinction moisture content is 15 percent.',
    more: [{
      label: 'i',
      desc: 'SH1 Low shrub fuel load, fuelbed depth about 1 foot; some grass may be present. Spread rate very low; flame length very low.',
    }, {
      label: 'ii',
      desc: 'SH2 Moderate fuel load (higher than SH1), depth about 1 foot, no grass fuel present. Spread rate low; flame length low.',
    }, {
      label: 'iii',
      desc: 'SH5 Heavy shrub load, depth 4 to 6 feet. Spread rate very high; flame length very high.',
    }, {
      label: 'iv',
      desc: 'SH7 Very heavy shrub load, depth 4 to 6 feet. Spread rate lower than SH5, but flame length similar. Spread rate high; flame length very high.',
    }]
  }, {
    label: 'b',
    desc: 'Subhumid to humid climate (rainfall adequate in all seasons). Extinction moisture content is 30 to 40 percent.',
    more: [{
      label: 'i',
      desc: 'SH3 Moderate shrub load, possibly with pine overstory or herbaceous fuel, fuel bed depth 2 to 3 feet. Spread rate low; flame length low.',
    }, {
      label: 'ii',
      desc: 'SH4 Low to moderate shrub and litter load, possibly with pine overstory, fuel bed depth about 3 feet. Spread rate high; flame length moderate.',
    }, {
      label: 'iii',
      desc: 'SH6 Dense shrubs, little or no herb fuel, depth about 2 feet. Spread rate high; flame length high.',
    }, {
      label: 'iv',
      desc: 'SH8 Dense shrubs, little or no herb fuel, depth about 3 feet. Spread rates high; flame length high.',
    }, {
      label: 'v',
      desc: 'SH9 Dense, finely branched shrubs with significant fine dead fuel, about 4 to 6 feet tall; some herbaceous fuel may be present. Spread rate high, flame length very high.',
    }],
  }],
}, {
  label: '4',
  desc: 'Timber-Understory: Grass or shrubs mixed with litter from forest canopy (Timber-Understory)',
  more: [{
    label: 'a',
    desc: 'Semiarid to subhumid climate. Extinction moisture content is 20 percent.',
    more: [{
      label:  'i',
      desc: 'TU1 Fuelbed is low load of grass and/or shrub with litter. Spread rate low; flame length low.',
    }, {
      label: 'ii',
      desc: 'TU4 Fuelbed is short conifer trees with grass or moss understory. Spread rate moderate; flame length moderate.',
    }, {
      label: 'iii',
      desc: 'TU5 Fuelbed is high load conifer litter with shrub understory. Spread rate moderate; flame length moderate.',
    }]
  }, {
    label: 'b',
    desc: 'Humid climate. Extinction moisture content is 30 percent.',
    more: [{
      label: 'i',
      desc: 'TU2 Fuelbed is moderate litter load with shrub component. Spread rate moderate; flame length low.',
    }, {
      label: 'ii',
      desc: 'TU3 Fuelbed is moderate litter load with grass and shrub components. Spread rate high; flame length moderate.',
    }]
  }],
}, {
  label: '5',
  desc: 'Dead and down woody fuel (litter) beneath a forest canopy (Timber Litter)',
  more: [{
    label: 'a',
    desc: 'Fuelbed is recently burned but able to carry wildland fire.',
    more: [{
      label: 'i',
      desc: 'TL1 Light to moderate load, fuels 1 to 2 inches deep. Spread rate very low; flame length very low.',
    }]
  }, {
    label: 'b',
    desc: 'Fuelbed not recently burned.',
    more: [{
      label: 'i',
      desc: 'Fuelbed composed of broadleaf (hardwood) litter.',
      more: [{
        label: '1',
        desc: 'TL2 Low load, compact. Spread rate very low; flame length very low.',
      }, {
        label: '2',
        desc: 'TL6 Moderate load, less compact. Spread rate moderate; flame length low.',
      }, {
        label: '3',
        desc: 'TL9 Very high load, fluffy. Spread rate moderate; flame length moderate.',
      }]
    }, {
      label: 'ii',
      desc: 'Fuelbed composed of long-needle pine litter.',
      more: [{
        label: '1',
        desc: 'TL8 moderate load and compactness may include small amount of herbaceous load. Spread rate moderate; flame length low.',
      }]
    }, {
      label: 'iii',
      desc: 'Fuelbed not composed broadleaf or long-needle pine litter.',
      more: [{
        label: '1',
        desc: 'Fuelbed includes both fine and coarse fuels.',
        more: [{
          label: 'a',
          desc: 'TL4 Moderate load, includes small diameter downed logs. Spread rate low; flame length low.',
        }, {
          label: 'b',
          desc: 'TL7 Heavy load, includes larger diameter downed logs. Spread rate low; flame length low.',
        }]
      }, {
        label: '2',
        desc: 'Fuelbed does not include coarse fuels.',
        more: [{
          label: 'a',
          desc: 'TL3 Moderate load conifer litter. Spread rate very low; flame length low.',
        }, {
          label: 'b',
          desc: 'TL5 High load conifer litter; light slash or mortality fuel. Spread rate low; flame length low.',
        }, {
          label: 'c',
          desc: 'TL9 Very high load broadleaf litter; heavy needle-drape in otherwise sparse shrub layer. Spread rate moderate; flame length moderate.',
        }]
      }],
    }],
  }],
}, {
  label: '6',
  desc: 'Activity fuel (slash) or debris from wind damage (blowdown) (Slash-Blowdown)',
  more: [{
    label: 'a',
    desc: 'Fuelbed is activity fuel.',
    more: [{
      label: 'i',
      desc: 'SB1 Fine fuel load is 10 to 20 tons/acre, weighted toward fuels 1 to 3 inches diameter class, depth is less than 1 foot. Spread rate moderate; flame length low.',
    }, {
      label: 'ii',
      desc: 'Fine fuel load is 7 to 12 tons/acre, evenly distributed across 0 to 0.25, 0.25 to 1, and 1 to 3 inch diameter classes, depth is about 1 foot. Spread rate moderate; flame length moderate.',
    }, {
      label: 'iii',
      desc: 'SB3 Fine fuel load is 7 to 12 tons/acre, weighted toward 0 to 0.25 inch diameter class, depth is more than 1 foot. Spread rate high; flame length high.',
    }],
  }, {
    label: 'b',
    desc: 'Fuelbed is blowdown.',
    more: [{
      label: 'i',
      desc: 'SB2 Blowdown is scattered, with many trees still standing. Spread rate moderate; flame length moderate.',
    }, {
      label: 'ii',
      desc: 'SB3 Blowdown is moderate, trees compacted to near the ground. Spread rate high; flame length high.',
    }, {
      label: 'iii',
      desc: 'SB4 Blowdown is total, fuelbed not compacted, foliage still attached. Spread rate very high; flame length very high.'
    }]
  }]
}, {
  label: '7',
  desc: 'Insufficient wildland fuel to carry wildland fire under any condition (Nonburnable)',
  more: [{
    label: 'a',
    desc: 'NB1 Urban or suburban development; insufficient wildland fuel to carry wildland fire.',
  }, {
    label: 'b',
    desc: 'NB2 Snow/ice',
  }, {
    label: 'c',
    desc: 'NB3 Agricultural field, maintained in nonburnable condition.',
  }, {
    label: 'd',
    desc: 'NB8 Open water.',
  }, {
    label: 'e',
    desc: 'NB9 Bare ground.'
  }]
}]

export const Grass = {
  label: 'Grass',
  options: [{
    label: 'Arid to semi-arid climate, 15% extinction moisture',
    options: [{
      label: 'Grass is short, patchy, and possibly heavily grazed.',
      fuel: 'gr1'
    }, {
      label: 'Moderately coarse continuous grass, average depth about 1 foot.',
      fuel: 'gr2'
    }, {
      label: 'Moderately coarse continuous grass, average depth about 2 feet.',
      fuel: 'gr4'
    }, {
      label: 'Moderately coarse continuous grass, average depth about 3 feet.',
      fuel: 'gr7'
    }]
  }, {
    label: 'Subhumid to humid climate, 30-40% extinction moisture',
    options: [{
      label: 'Grass is short, patchy, and possibly heavily grazed.',
      fuel: 'gr1',
    }, {
      label: 'Very coarse grass, average depth about 2 feet.',
      fuel: 'gr3'
    }, {
      label: 'Dense, coarse grass, average depth about 1 to 2 feet.',
      fuel: 'gr5'
    }, {
      label: 'Dryland grass about 1 to 2 feet tall.',
      fuel: 'gr6'
    }, {
      label: 'Heavy, coarse, continuous grass 3 to 5 feet tall.',
      fuel: 'gr8'
    }, {
      label: 'Very heavy, coarse, continuous grass 5 to 8 feet tall.',
      fuel: 'gr9'
    }]
  }]
}

export const GrassShrub = {
  label: 'Grass-Shrub',
  options: [{
    label: 'Arid to semi-arid climate, 15% extinction moisture',
    options: [{
      label: 'Shrubs are about 1 foot high, low grass load.',
      fuel: 'gs1',
    }, {
      label: 'Shrubs are 1 to 3 feet high, moderate grass load.',
      fuel: 'gs2'
    }]
  }, {
    label: 'Subhumid to humid climate, 30-40% extinction moisture',
    options: [{
      label: 'Moderate grass/shrub load, average grass/shrub depth less than 2 feet.',
      fuel: 'gs3'
    }, {
      label: 'Heavy grass/shrub load, depth greater than 2 feet.',
      fuel: 'gs4'
    }]
  }]
}

export const Shrub = {
    label: 'Shrub',
    options: [{
      label: 'Arid to semi-arid climate, 15% extinction moisture',
      options: [{
        label: 'Low shrub fuel load, fuelbed depth about 1 foot; some grass may be present.',
        fuels: 'sh1'
      }, {
        label: 'Moderate fuel load (higher than SH1), depth about 1 foot, no grass fuel present.',
        fuels: 'sh2'
      }, {
        label: 'Heavy shrub load, depth 4 to 6 feet.',
        fuel: 'sh5'
      }, {
        label: 'SH7 Very heavy shrub load, depth 4 to 6 feet.',
        fuel: 'sh7'
      }]
    }, {
      label: 'Subhumid to humid climate, 30-40% extinction moisture',
      options: [{
        label: 'Moderate shrub load, possibly with pine overstory or herbaceous fuel, fuel bed depth 2 to 3 feet.',
        fuel: 'sh3'
      }, {
        label: 'Low to moderate shrub and litter load, possibly with pine overstory, fuel bed depth about 3 feet.',
        fuel: 'sh4'
      }, {
        label: 'Dense shrubs, little or no herb fuel, depth about 2 feet.',
        fuel: 'sh6'
      }, {
        label: 'Dense shrubs, little or no herb fuel, depth about 3 feet.',
        fuel: 'sh8'
      }, {
        label: 'Dense, finely branched shrubs with significant fine dead fuel, about 4 to 6 feet tall; some herbaceous fuel may be present',
        fuel: 'sh9'
      }]
    }]
}

export const TimberUnderstory = {
  label: 'Timber-Understory',
  options: [{
    label: 'Arid to subhumid, 20% extinction moisture',
    options: [{
      label: 'Fuelbed is low load of grass and/or shrub with litter.',
      fuel: 'tu1'
    }, {
      label: 'Fuelbed is short conifer trees with grass or moss understory.',
      fuel: 'tu4'
    }, {
      label: 'Fuelbed is high load conifer litter with shrub understory.',
      fuel: 'tu5'
    }]
  }, {
    label: 'Humid climate, 30% extinction moisture',
    options: [{
      label: 'Fuelbed is moderate litter load with shrub component.',
      fuel: 'tu2'
    }, {
      label: 'Fuelbed is moderate litter load with grass and shrub components.',
      fuel: 'tu3'
    }]
  }]
}

export const TimberLitter = {
  label: 'Timber-Litter',
  options: [{
    label: 'Recently burned, able to carry fire',
    options: [{
      label: 'Light to moderate load, fuels 1 to 2 inches deep',
      fuel: 'tl1',
    }]
  }, {
    label: 'Not recently burned',
    options: [{
      label: 'Broadleaf (hardwood) litter',
      options: [{
        label: 'Low load, compact.',
        fuel: 'tl2'
      }, {
        label: 'Moderate load, less compact.',
        fuel: 'tl6'
      }, {
        label: 'Very high load, fluffy.',
        fuel: 'tl9'
      }]
    }, {
      label: 'Long-needle pine litter',
      options: [{
        label: 'moderate load and compactness may include small amount of herbaceous load.',
        fuel: 'tl8',
      }]
    }, {
      label: 'Other',
      options: [{
        label: 'Both fine and coarse fuels',
        options: [{
          label: 'Moderate load, includes small diameter downed logs',
          fuel: 'tl4'
        }, {
          label: 'Heavy load, includes larger diameter downed logs',
          fuel: 'tl7'
        }]
      }, {
        label: 'No coarse fuels',
        options: [{
          label: 'Moderate load conifer litter',
          fuel: 'tl3'
        }, {
          label: 'High load conifer litter; light slash or mortality fuel.',
          fuel: 'tl5'
        }, {
          label: 'Very high load broadleaf litter; heavy needle-drape in otherwise sparse shrub layer',
          fuel: 'tl9'
        }]
      }]
    }]
  }]
}

export const SlashBlowdown = {
  label: 'Slash-Blowdown',
  options: [{
    label: 'Activity fuel',
    options: [{
      label: '1 Fine fuel load is 10 to 20 tons/acre, weighted toward fuels 1 to 3 inches diameter class, depth is less than 1 foot',
      fuel: 'sb1'
    }, {
      label: 'Fine fuel load is 7 to 12 tons/acre, evenly distributed across 0 to 0.25, 0.25 to 1, and 1 to 3 inch diameter classes, depth is about 1 foot.',
      fuel: 'sb2'
    }, {
      label: 'Fine fuel load is 7 to 12 tons/acre, weighted toward 0 to 0.25 inch diameter class, depth is more than 1 foot.',
      fuel: 'sb3'
    }],
  }, {
    label: 'Blowdown',
    options: [{
      label: 'Blowdown is scattered, with many trees still standing.',
      fuel: 'sb2'
    }, {
      label: 'Blowdown is moderate, trees compacted to near the ground.',
      fuel: 'sb3'
    }, {
      label: 'Blowdown is total, fuelbed not compacted, foliage still attached.',
      fuel: 'sb4'
    }]
  }]
}

export const ShortKey = {
  label: 'The fire-carrying fuel type is:',
  options: [
    Grass,
    GrassShrub,
    Shrub,
    TimberUnderstory,
    TimberLitter,
    SlashBlowdown
  ]
}