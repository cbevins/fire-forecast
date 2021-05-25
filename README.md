# ![](static/favicon.png) fire-forecast

A web application to display site-specific hourly weather forecasts with potential fire spread rate, intensity, and size.

*fire-forecast* demonstrates use of the [@cbevins/fire-behavior-simulator](https://github.com/cbevins/fire-behavior-simulator).

## ![](static/favicon.png) How It Works

The user first selects a location by specifiying a latitude, longtude pair, a place name, or a postal, airport, or metar code. Once a selection is made:

  - Global weather forecast data are then acquired from two sources:
    - WeatherAPI.com provides weather from stations around the world
    - Tomorrow.io provides site-specific weather forecasts at 500 m resolution

  - Elevation, slope, and aspect are acquired from two sources:
    - MapQuest.com
    - USGS Elevation Point Query Service

The user then selects a site-appropriate
  - fuel model,
  - live fuel moisture,
  - cured herb fraction, and
  - midflame wind speed adjustment factor

*fire-forecast* then adds the following forecast properties for both the prevailing wind speed and the forecast wind gusts:
  - fire spread rate
  - fire flame length
  - fire perimeter and size at 1 hour after ignition
