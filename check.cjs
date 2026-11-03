const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8'),script=html.match(/<script>([\s\S]*)<\/script>/)[1];new vm.Script(script);
function extract(name,next){return script.slice(script.indexOf('function '+name+'('),script.indexOf('function '+next+'('))}
const ctx={PI:Math.PI,Math};vm.createContext(ctx);vm.runInContext(extract('waterPhaseAt','drawInterference')+extract('spectrumModes','diffractionField')+';this.api={waterPhaseAt,waterHeight,centralRoots,propagatedPhasor};',ctx);const {waterPhaseAt,waterHeight,centralRoots,propagatedPhasor}=ctx.api;
let checked=0;function near(a,b,tol=1e-7){assert(Math.abs(a-b)<tol,`${a} != ${b} tol ${tol}`);checked++}
for(const time of [0,.5,5,21])for(const x of [400,760,970])near(centralRoots(x,time,.625,.625,140)[0],280);
for(const time of [0,.5,3]){const a=centralRoots(760,time,.625,.675,140),b=centralRoots(760,time,.675,.625,140);assert(a.length===b.length);for(let i=0;i<a.length;i++)near(a[i]+b.at(-1-i),560,1e-5)}
const first=centralRoots(760,0,.625,.675,140)[0],later=centralRoots(760,.5,.625,.675,140)[0];assert(Math.abs(first-later)>1);checked++;
near(waterHeight(400,200,2,.625,.675,140),.5*(waterHeight(400,200,2,.625,.675,140,'a')+waterHeight(400,200,2,.625,.675,140,'b')));
let maxConvergence=0;
for(const L of [45,80,120])for(const ratio of [.125,1,8])for(const [x,y] of [[5,0],[20,80],[80,-200],[400,80],[600,200]]){
 const a=L*ratio,slit=propagatedPhasor(x,y,a,L),block=propagatedPhasor(x,y,a,L,'obstacle');near(slit[0]+block[0],Math.cos(2*Math.PI*x/L),1e-12);near(slit[1]+block[1],Math.sin(2*Math.PI*x/L),1e-12);
 if(ratio===.125){const fine=propagatedPhasor(x,y,a,L,'slit',16384);maxConvergence=Math.max(maxConvergence,Math.hypot(slit[0]-fine[0],slit[1]-fine[1]));}
}
assert(maxConvergence<.005,`P convergence ${maxConvergence}`);checked++;
for(const L of [45,80,120])for(const [x,y] of [[20,80],[80,-200],[400,80],[600,200]]){const a=propagatedPhasor(x,y,80,L,'edge'),b=propagatedPhasor(x,y,80,L,'edge',16384);assert(Math.hypot(a[0]-b[0],a[1]-b[1])<.012);checked++}
vm.runInContext(script.slice(script.indexOf('function filmReflectance('),script.indexOf('// Equal-energy'))+';this.daily={filmReflectance,filmPhasors,arrayIntensity,gratingAngle,newtonThickness,dopplerFrequency,acousticObserved,relativisticRatio};',ctx);
const d=ctx.daily;
near(d.filmReflectance(532,0,1,1.33,1),0,1e-12);near(d.filmReflectance(532,0,1.52,1,1.52),0,1e-12);near(d.filmReflectance(532,0,1,1.46,1.33),((1-1.33)/(1+1.33))**2,1e-12);
for(const stack of [[1,1.33,1],[1,1.46,1.33],[1.52,1,1.52]])for(const nm of [400,532,700])for(const h of [0,67,100,400,1000])for(const angle of [0,15,35]){const R=d.filmReflectance(nm,h,...stack,angle);assert(R>=-1e-12&&R<=1+1e-12);checked++}
for(const order of [0,1,2,3,8]){const r=Math.sqrt(order*.532);near(d.filmReflectance(532,d.newtonThickness(r,1),1.52,1,1.52),0,1e-10)}
for(const [nm,expected] of [[400,14.477512],[550,20.10551],[700,25.94448]]){near(d.gratingAngle(nm,1600),expected,.0001);near(d.arrayIntensity(nm,1600,d.gratingAngle(nm,1600)),1,1e-12)}
assert.equal(d.gratingAngle(700,600),null);
near(d.dopplerFrequency(440,0,true),440);near(d.dopplerFrequency(440,0,false),440);near(d.dopplerFrequency(440,.25,true),586.666666667,1e-7);near(d.dopplerFrequency(440,.25,false),352);
near(d.acousticObserved(440,0,-34.3),484);near(d.acousticObserved(440,0,34.3),396);near(d.acousticObserved(440,85.75,0),586.6666667,1e-6);near(d.acousticObserved(440,0,-85.75),550);near(d.acousticObserved(440,34.3,34.3),440);
near(d.relativisticRatio(-.6),.5);near(d.relativisticRatio(.6),2);near(d.relativisticRatio(0),1);
for(const stack of [[1,1.33,1],[1,1.46,1.33],[1.52,1,1.52]])for(const nm of [450,532,650])for(const h of [0,111.3,450,900]){const q=d.filmPhasors(nm,h,stack);near((q.a+q.bRe)**2+q.bIm**2,d.filmReflectance(nm,h,...stack),1e-12)}
vm.runInContext(extract('freshAcoustic','syncAcoustic')+extract('acousticReception','stepAcoustic')+';this.sound={freshAcoustic,acousticReception};',ctx);
for(const f of [150,440,700])for(const speed of [-200,0,80,200]){const s=ctx.sound.freshAcoustic({f,carSpeed:speed,observerSpeed:0,side:'front'}),period=352/f;near(s.waves.at(-1).time,0);for(let j=1;j<s.waves.length;j++)near(s.waves[j].time-s.waves[j-1].time,period,1e-10)}
for(const [vs,vo,expected]of [[0,-34.3,484],[0,34.3,396],[85.75,0,586.66666667],[34.3,34.3,440]]){const s=ctx.sound.freshAcoustic({f:440,carSpeed:vs,observerSpeed:vo,side:'front'});near(ctx.sound.acousticReception(s).frequency,expected,1e-6)}
const transition=ctx.sound.freshAcoustic({f:440,carSpeed:0,observerSpeed:0,side:'front'});transition.clock=1;transition.vs=80/343*110;transition.segments.push({t:1,x:transition.xs,vs:transition.vs,f:440});near(ctx.sound.acousticReception(transition).frequency,440);transition.clock=10;transition.xs=190+9*transition.vs;near(ctx.sound.acousticReception(transition).frequency,440*343/(343-80));
vm.runInContext(script.slice(script.indexOf('const WARP_SCALE='),script.indexOf('function hullGradient('))+';this.warp={warpMultiple,propulsionState};',ctx);
for(const [w,v]of [[1,1],[2,10],[3,39],[6,392],[8,1024],[9.6,1909],[9.9,3053]])near(ctx.warp.warpMultiple(w),v);assert.equal(ctx.warp.warpMultiple(10),null);checked++;
const warp=ctx.warp.propulsionState('warp6','approach',.25);assert.equal(warp.warp,true);assert.equal(warp.multiple,392);assert.equal(warp.beta,0);near(ctx.warp.propulsionState('impulse','approach',0).beta,-.25);near(ctx.warp.propulsionState('impulse','recede',0).beta,.25);checked+=3;
console.log(JSON.stringify({result:'PASS',assertions:checked,maxComplexConvergence:maxConvergence,centralYAtT0:first,centralYAtT05:later,thinFilm:'complex phase waves equal Airy reflectance; zero-thickness, bounds, Newton radii',daily:'grating angles, independent source/observer acoustic motion, relativistic red/blue shifts; fictional warp kept separate'},null,2));
