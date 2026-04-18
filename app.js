// uLife AIA - app.js
(function() {
var root = document.getElementById(‘root’);
if (!root) { console.error(‘no #root’); return; }

if (!window.React) {
root.innerHTML = ‘<div style="padding:20px;color:red">React ไม่โหลด</div>’;
return;
}
if (!window.ReactDOM) {
root.innerHTML = ‘<div style="padding:20px;color:red">ReactDOM ไม่โหลด</div>’;
return;
}

var h = React.createElement;
var useState = React.useState;

function App() {
var s = useState(0);
var count = s[0];
var setCount = s[1];
return h(‘div’, {style:{padding:20,fontFamily:‘sans-serif’}},
h(‘div’, {style:{background:’#E8175D’,color:’#fff’,padding:‘14px 16px’,borderRadius:12,marginBottom:16,display:‘flex’,alignItems:‘center’,gap:10}},
h(‘div’, {style:{width:32,height:32,background:‘rgba(255,255,255,0.3)’,borderRadius:8,display:‘flex’,alignItems:‘center’,justifyContent:‘center’,fontWeight:700,fontSize:18}}, ‘u’),
h(‘div’, null,
h(‘div’, {style:{fontSize:16,fontWeight:700}}, ‘uLife AIA’),
h(‘div’, {style:{fontSize:11,opacity:0.8}}, ‘Insurance Premium Calculator’)
)
),
h(‘div’, {style:{background:’#fff’,borderRadius:12,padding:16,boxShadow:‘0 1px 4px rgba(0,0,0,.1)’}},
h(‘p’, {style:{color:’#555’,marginBottom:12}}, ‘\u0e41\u0e2d\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27! \u0e01\u0e33\u0e25\u0e31\u0e07\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e15\u0e48\u0e2d…’),
h(‘button’, {
onClick: function(){ setCount(count+1); },
style:{background:’#E8175D’,color:’#fff’,border:‘none’,borderRadius:8,padding:‘10px 20px’,fontSize:14,cursor:‘pointer’}
}, ’Test Click: ’ + count)
)
);
}

try {
ReactDOM.createRoot(root).render(h(App));
console.log(‘uLife AIA loaded OK’);
} catch(e) {
root.innerHTML = ’<div style="padding:20px;color:red;font-size:13px">Error: ’ + e.message + ‘</div>’;
}
})();
