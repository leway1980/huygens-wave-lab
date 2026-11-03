const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8'),source=html.match(/<script>([\s\S]*)<\/script>/)[1],els={};
const classes={toggle(){},add(){},remove(){}};let canvasCalls=0;
const ctx=new Proxy({measureText:s=>({width:s.length*10})},{get:(target,key)=>key in target?target[key]:(...args)=>{canvasCalls++},set:(target,key,value)=>{target[key]=value;return true}});
function element(id){let value='';return {id,classList:classes,style:{},dataset:{},checked:true,open:false,parentElement:{classList:classes},firstChild:{textContent:''},textContent:'',innerHTML:'',get value(){return value},set value(v){value=String(v)},events:{},addEventListener(type,cb){this.events[type]=cb},getContext(){return ctx},append(){},insertBefore(){},querySelector(){return element('label')},closest(){return element('closest')},setAttribute(){},getBoundingClientRect(){return {left:0,top:0,width:1000,height:560}},showModal(){this.open=true},close(){this.open=false}}}
for(const m of html.matchAll(/\bid="([^"]+)"/g))els[m[1]]=element(m[1]);
for(const m of html.matchAll(/<input\b([^>]+)>/g)){const id=m[1].match(/id="([^"]+)"/)?.[1];if(!id)continue;els[id].value=m[1].match(/value="([^"]*)"/)?.[1]||'';els[id].checked=/\bchecked\b/.test(m[1]);}
for(const m of html.matchAll(/<select\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)){const options=[...m[2].matchAll(/<option value="([^"]+)"[^>]*>([^<]+)<\/option>/g)].map(v=>({value:v[1],textContent:v[2]}));els[m[1]].value=options[0]?.value;Object.defineProperty(els[m[1]],'selectedOptions',{get(){return [options.find(o=>o.value===this.value)]}})}
let frame;const scope={document:{getElementById:id=>{if(!els[id])throw Error('Missing DOM '+id);return els[id]},querySelector:()=>element('query'),querySelectorAll:()=>[],createElement:()=>element('new'),title:''},location:{hash:'#plane'},history:{pushState(a,b,hash){scope.location.hash=hash}},requestAnimationFrame:cb=>{frame=cb},console,Math,Float32Array,Float64Array,window:{addEventListener(){}}};
vm.createContext(scope);vm.runInContext(source,scope);
const modes=['plane','circle','refraction','reflection','interference','diffraction','sound','laser','spider','cd','newton','moire','oil','bubble','doppler'];let time=1000,checks=0;
function fire(id,type='input'){els[id].events[type]?.({preventDefault(){}});checks++}
function tick(){for(let j=0;j<3;j++){time+=50;frame(time)}}
for(const mode of modes){els.modeSelect.value=mode;fire('modeSelect','change');tick();assert.equal(els.wave.dataset.mode,mode);checks++;
 if(mode==='diffraction')for(const scene of ['slit','obstacle','edge']){els.diffractionScene.value=scene;fire('diffractionScene');tick();assert.equal(els.wave.dataset.diffractionScene,scene);checks++}
 if(mode==='spider'){els.spiderModel.value='film';fire('spiderModel');tick();assert.equal(JSON.parse(els.wave.dataset.film).mode,'spider');checks++}
 if(mode==='laser')for(const dual of [true,false])for(const overlap of [0,50,100]){els.laserCompare.checked=dual;els.laserOverlay.value=overlap;fire('laserOverlay');tick();assert.equal(JSON.parse(els.wave.dataset.laser).overlay,overlap);checks++}
 if(mode==='doppler'){els.carSpeed.value=85;fire('carSpeed');tick();assert(JSON.parse(els.wave.dataset.doppler).frequency>440);els.observerSide.value='back';fire('observerSide');tick();assert(JSON.parse(els.wave.dataset.doppler).frequency<440);checks+=2}
}
console.log(JSON.stringify({result:'PASS',modes:modes.length,checks,canvasCalls,animationFrames:'advances after every mode',boundary:'actual full inline script with stubbed DOM/canvas; browser separately verified'},null,2));
