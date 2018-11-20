function include(file) {
  let script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.acync = true;
  script.id = 'script_' + file.split('.')[0];
  document.getElementsByTagName('head').item(0).appendChild(script);
}

let widgetContainer = document.getElementById('widget');
let filesArray = ['createjs.min.js', '300x250.js', 'draw.js'];

function inner() {
	return widgetContainer.innerHTML = `
		<div style="margin:0px;">
			<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:300px; height:250px">
				<a href="javascript:window.open(window.clickTag)">
					<canvas id="canvas" width="300" height="250" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
				</a>
				<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:300px; height:250px; position: absolute; left: 0px; top: 0px; display: block;">
				</div>
			</div>
		</div>
	`	
}

let p1 = Promise.resolve(inner());
let p2 = new Promise((resolve, reject) => {
	setTimeout(()=>{
	resolve(filesArray.map((e)=>{
		include(e)
	}))
}, 1000)
});

Promise.all([p1, p2]).then(values => {
	if (document.getElementById('script_createjs')) {
		if (document.getElementById('script_300x250')) {
			if (document.getElementById('script_draw')) {
				setTimeout(()=>{
		  			init();
		  		}, 150)
			}
		}		
	}
});