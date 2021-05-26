<script>
  import {FuelModelProps} from '../models/fuelModelProps.js'

  let pad = 5
  let leg = {x0: 300, y0: 600, w: 200, h: 200, p:5}
  leg.x1 = leg.x0 + leg.w
  leg.y1 = leg.y0 + leg.h
  leg.xm = leg.x0 + 0.5 * leg.w
  leg.ym = leg.y0 + 0.5 * leg.h
  let pt = {x0: 0, y0: 0, bw: 100, bh: 100, p: 5}

  let rectStyle = "fill:blue;stroke:pink;stroke-width:5;fill-opacity:0.1;stroke-opacity:0.9"
  const deadx = f => f.pos[1] * pt.bw - 25 + pt.p
  const deady = f => f.pos[0] * pt.bh - pt.p
  const deadv = f => (21.78 * f.deadLoad).toFixed(2)
  const livex = f => f.pos[1] * pt.bw + 75 - pt.p
  const livey = f => f.pos[0] * pt.bh - pt.p
  const livev = f => (21.78 * f.liveLoad).toFixed(2)
  const depthx = f => f.pos[1] * pt.bw + 25
  const depthy = f => f.pos[0] * pt.bh + 20 -pt.p
  const depthv = f => f.depth.toFixed(1)
  const fuelx = f => f.pos[1] * pt.bw + 25
  const fuely = f => f.pos[0] * pt.bh + 40
  const fuelv = f => f.fuel.toUpperCase()
  const hpuax = f => f.pos[1] * pt.bw + 25
  const hpuay = f => f.pos[0] * pt.bh + 60 - pt.p
  const hpuav = f => Math.round(f.hpua)
  const rosx = f => f.pos[1] * pt.bw - 25 + pt.p
  const rosy = f => f.pos[0] * pt.bh + 75 - pt.p
  const rosv = f => f.ros2.toFixed(0)
  const flmx = f => f.pos[1] * pt.bw + 75 - pt.p
  const flmy = f => f.pos[0] * pt.bh + 75 - pt.p
  const flmv = f => f.flame2.toFixed(0)
</script>

<svelte:head><title>Fuel Periodic Table</title></svelte:head>

<h1>Periodic Table of Fuel Models</h1>

<svg class="defs-only" xmlns="http://www.w3.org/2000/svg"
    width="0" height="0" style="display: block;">
  <style>
    .small { font: italic 13px sans-serif; }
    .heavy { font: bold 30px sans-serif; }
    .legend { font: bold 60px sans-serif; }
    /* Note that the f.pos[1]or of the text is set with the fill property, the f.pos[1]or property is for HTML only */
    .Rrrrr { font: italic 40px serif; fill: red; }
  </style>
</svg>

<svg viewbox="-40 -40 940 900" xmlns="http://www.w3.org/2000/svg">
  {#each FuelModelProps as f}
    <rect width='100' height='100' style={rectStyle} x={f.pos[1]*100 - 25} y={f.pos[0]*100 - 25}/>


    <text text-anchor='start' x={deadx(f)} y={deady(f)}>{deadv(f)}</text>
    <text text-anchor='end' x={livex(f)} y={livey(f)}>{livev(f)}</text>
    <text text-anchor='middle' x={depthx(f)} y={depthy(f)}>{depthv(f)}</text>
    <text text-anchor="middle" x={fuelx(f)} y={fuely(f)} class="heavy">{fuelv(f)}</text>
    <text text-anchor='middle' x={hpuax(f)} y={hpuay(f)}>{hpuav(f)}</text>
    <text text-anchor='start' x={rosx(f)} y={rosy(f)}>{rosv(f)}</text>
    <text text-anchor='end' x={flmx(f)} y={flmy(f)}>{flmv(f)}</text>
  {/each}

  <rect  x={leg.x0} y={leg.y0} width={leg.w} height={leg.h} style={rectStyle}/>
  <text text-anchor='start' x={leg.x0+leg.p} y={leg.y0+20-leg.p}>Dead t/ac</text>
  <text text-anchor='end' x={leg.x1-leg.p} y={leg.y0+20-leg.p}>Live t/ac</text>
  <text text-anchor='middle' x={leg.xm} y={leg.ym-20-leg.p}>Depth ft</text>
  <text text-anchor="middle" x={leg.xm} y={leg.ym} class="legend">FM#</text>
  <text text-anchor='middle' x={leg.xm} y={leg.ym+20}>HPUA Btu/ft2</text>
  <text text-anchor='start' x={leg.x0+leg.p} y={leg.y1-40-leg.p}>RoS ft/min</text>
  <text text-anchor='end' x={leg.x1-leg.p} y={leg.y1-40-leg.p}>Flame ft</text>
</svg>
