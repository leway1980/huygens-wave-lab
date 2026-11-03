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
vm.runInContext(script.slice(script.indexOf('function filmReflectance('),script.indexOf('// Equal-energy'))+';this.daily={filmReflectance,arrayIntensity,gratingAngle,newtonThickness,moirePeriod,dopplerFrequency};',ctx);
const d=ctx.daily;
near(d.filmReflectance(532,0,1,1.33,1),0,1e-12);near(d.filmReflectance(532,0,1.52,1,1.52),0,1e-12);near(d.filmReflectance(532,0,1,1.46,1.33),((1-1.33)/(1+1.33))**2,1e-12);
for(const stack of [[1,1.33,1],[1,1.46,1.33],[1.52,1,1.52]])for(const nm of [400,532,700])for(const h of [0,67,100,400,1000])for(const angle of [0,15,35]){const R=d.filmReflectance(nm,h,...stack,angle);assert(R>=-1e-12&&R<=1+1e-12);checked++}
for(const order of [0,1,2,3,8]){const r=Math.sqrt(order*.532);near(d.filmReflectance(532,d.newtonThickness(r,1),1.52,1,1.52),0,1e-10)}
for(const [nm,expected] of [[400,14.477512],[550,20.10551],[700,25.94448]]){near(d.gratingAngle(nm,1600),expected,.0001);near(d.arrayIntensity(nm,1600,d.gratingAngle(nm,1600)),1,1e-12)}
assert.equal(d.gratingAngle(700,600),null);
assert.equal(d.moirePeriod(12,12,0),Infinity);near(d.moirePeriod(12,12.12,0),1212,1e-7);near(d.moirePeriod(12,12,3),12/(2*Math.sin(1.5*Math.PI/180)),1e-10);
near(d.dopplerFrequency(440,0,true),440);near(d.dopplerFrequency(440,0,false),440);near(d.dopplerFrequency(440,.25,true),586.666666667,1e-7);near(d.dopplerFrequency(440,.25,false),352);
console.log(JSON.stringify({result:'PASS',assertions:checked,maxComplexConvergence:maxConvergence,centralYAtT0:first,centralYAtT05:later,thinFilm:'zero-thickness, bounds, Newton radii',daily:'grating angles, moire periods, Doppler'},null,2));
