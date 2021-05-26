<script>
  import {FuelModelProps} from '../models/fuelModelProps.js'

  let pt = {x0: 0, y0: 260, bw: 100, bh: 100, p: 5}
  let leg = {x0: 300, y0: 20, w: 200, h: 200, p:5}
  leg.x1 = leg.x0 + leg.w
  leg.y1 = leg.y0 + leg.h
  leg.xm = leg.x0 + 0.5 * leg.w
  leg.ym = leg.y0 + 0.5 * leg.h

  const colors = [
    '236,203,92', // gr
    '198,236,92', // gs
    '121,236,92', // sh
    '92,236,224', // tu
    '196,92,236', // tl
    '236,92,92' // sb
  ]
  // let rectStyle = "fill:url(#grad1);stroke:black;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9"
  let rectStyle = "fill:url(#gr);stroke:black;stroke-width:2"
  const boxv = f => `fill:url(#grad${f.pos[0]});stroke:black;stroke-width:2`
  const boxx = f => pt.x0 + f.pos[1] * pt.bw - 25
  const boxy = f => pt.y0 + f.pos[0] * pt.bh - 25
  const deadx = f => pt.x0 + (f.pos[1] * pt.bw) - 25 + pt.p
  const deady = f => pt.y0 + (f.pos[0] * pt.bh) - pt.p
  const deadv = f => (21.78 * f.deadLoad).toFixed(2)
  const livex = f => f.pos[1] * pt.bw + 75 - pt.p
  const livey = f => pt.y0 + f.pos[0] * pt.bh - pt.p
  const livev = f => (21.78 * f.liveLoad).toFixed(2)
  const depthx = f => pt.x0 + f.pos[1] * pt.bw + 25
  const depthy = f => pt.y0 + f.pos[0] * pt.bh + 20 -pt.p
  const depthv = f => f.depth.toFixed(1)
  const fuelx = f => pt.x0 + f.pos[1] * pt.bw + 25
  const fuely = f => pt.y0 + f.pos[0] * pt.bh + 40
  const fuelv = f => f.fuel.toUpperCase()
  const hpuax = f => pt.x0 + f.pos[1] * pt.bw + 25
  const hpuay = f => pt.y0 + f.pos[0] * pt.bh + 60 - pt.p
  const hpuav = f => Math.round(f.hpua)
  const rosx = f => pt.x0 + f.pos[1] * pt.bw - 25 + pt.p
  const rosy = f => pt.y0 + f.pos[0] * pt.bh + 75 - pt.p
  const rosv = f => f.ros2.toFixed(0)
  const flmx = f => pt.x0 + f.pos[1] * pt.bw + 75 - pt.p
  const flmy = f => pt.y0 + f.pos[0] * pt.bh + 75 - pt.p
  const flmv = f => f.flame2.toFixed(0)
</script>

<svelte:head><title>Fuel Periodic Table</title></svelte:head>

<svg class="defs-only" xmlns="http://www.w3.org/2000/svg"
    width="0" height="0" style="display: block;">
  <style>
    .small { font: italic 13px sans-serif; }
    .heavy { font: bold 30px sans-serif; }
    .legend { font: bold 60px sans-serif; }
    .Rrrrr { font: italic 40px serif; fill: red; }
  </style>
  <defs>
    {#each [0,1,2,3,4,5] as series}
    <linearGradient id={`grad${series}`} x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" style={`stop-color:rgb(${colors[series]});stop-opacity:0.5`} />
      <stop offset="100%" style={`stop-color:rgb(${colors[series]});stop-opacity:1`} />
    </linearGradient>
    {/each}
  </defs>
</svg>

<svg viewbox="-40 -40 940 900" xmlns="http://www.w3.org/2000/svg">
  <text class='legend' x='0' y='10'>Period Table of Fuel Models</text>
  {#each FuelModelProps as f}
    <rect width='100' height='100' style={boxv(f)} x={boxx(f)} y={boxy(f)}/>
    <text text-anchor='start' x={deadx(f)} y={deady(f)}>{deadv(f)}</text>
    <text text-anchor='end' x={livex(f)} y={livey(f)}>{livev(f)}</text>
    <text text-anchor='middle' x={depthx(f)} y={depthy(f)}>{depthv(f)}</text>
    <text text-anchor="middle" x={fuelx(f)} y={fuely(f)} class="heavy">{fuelv(f)}</text>
    <text text-anchor='middle' x={hpuax(f)} y={hpuay(f)}>{hpuav(f)}</text>
    <text text-anchor='start' x={rosx(f)} y={rosy(f)}>{rosv(f)}</text>
    <text text-anchor='end' x={flmx(f)} y={flmy(f)}>{flmv(f)}</text>
  {/each}

  <rect  x={leg.x0} y={leg.y0} width={leg.w} height={leg.h} style={rectStyle}/>
  <text text-anchor='start' x={leg.x0+leg.p} y={leg.y0+20-leg.p}>Dead Load</text>
  <text text-anchor='start' x={leg.x0+leg.p} y={leg.y0+35-leg.p}>(t/ac)</text>
  <text text-anchor='end' x={leg.x1-leg.p} y={leg.y0+20-leg.p}>Live Load</text>
  <text text-anchor='end' x={leg.x1-leg.p} y={leg.y0+35-leg.p}>(t/ac)</text>
  <text text-anchor='middle' x={leg.xm} y={leg.ym-40-leg.p}>Depth</text>
  <text text-anchor='middle' x={leg.xm} y={leg.ym-25-leg.p}>(ft)</text>
  <text text-anchor="middle" x={leg.xm} y={leg.ym+20} class="legend">FM#</text>
  <text text-anchor='middle' x={leg.xm} y={leg.ym+40}>HPUA</text>
  <text text-anchor='middle' x={leg.xm} y={leg.ym+55}>(Btu/ft2)</text>
  <text text-anchor='start' x={leg.x0+leg.p} y={leg.y1-20-leg.p}>  RoS</text>
  <text text-anchor='end' x={leg.x1-leg.p} y={leg.y1-20-leg.p}>Flame</text>
  <text text-anchor='start' x={leg.x0+leg.p} y={leg.y1-5-leg.p}>(ft/min)</text>
  <text text-anchor='end' x={leg.x1-leg.p} y={leg.y1-5-leg.p}>(ft)</text>
</svg>

<p>NOTE: Fire behavior is based on:</p>
  <ul>
    <li>Dead moisture: 1-h: 6%, 10-h: 7%, 100-h: 8%</li>
    <li>Live herb moisture 60%, cured herb fraction: 67%, live stem moisture: 90%</li>
    <li>Midflame wind speed 5 mi/h with no slope</li>
  </ul>
