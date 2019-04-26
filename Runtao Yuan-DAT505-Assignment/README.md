# DAT505-Code Final Work

* B161006104 Runtao Yuan

* In the final work, I decide to use the knowledge I learned,including  OrbitControl, model loading, music loading, GUI, random drop and generation, texture loading.

* So I finally create a scene of raining randomly with a sound of raining and a BGM, so you can enjoy the music when open my final work. The camera ca move to the place you like. A skybox is also necessary.


* My Github Link : https://github.com/Atair123/DAT505-Code
### USAGE ###

```javascript
var camera, scene, renderer, geometry, material, mesh1;
var texture;
var cubesNum = 500;

var cubes = [];
var speed = [];
```
* This is some base setting.Define the scene and build  the base scenario. I wanted to let the raindrops fall randomly, so `cubesNum` is necessary.

```javascript
function init() {
	// Create a scene
	scene = new THREE.Scene();
}
```

* Generate the base scene.

```javascript
var path = "textures/cube/skybox1/";//设置路径
var directions  = ["px", "nx", "py", "ny", "pz", "nz"];//获取对象
var format = ".jpg";//格式
//创建盒子，并设置盒子的大小为( 5000, 5000, 5000 )
var skyGeometry = new THREE.BoxGeometry( 1200, 1200, 1200 );
//设置盒子材质
var materialArray = [];
for (var i = 0; i < 6; i++)
materialArray.push( new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture( path + directions[i] + format ),//将图片纹理贴上
  side: THREE.BackSide/*镜像翻转，如果设置镜像翻转，那么只会看到黑漆漆的一片，因为你身处在盒子的内部，所以一定要设置镜像翻转。*/
}));
var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );//创建一个完整的天空盒，填入几何模型和材质的参数
scene.add( skyBox );//在场景中加入天空盒
```

* this code this to create a skybox, and set the path for it ,first I create a cube named skybox and load pictures I prepare, the picture will set out of the cube, but what I need is to let the texture go inside the cube, so `Backside` is very important. The whole progress is like creating the special large cube.

```javascript
var light = new THREE.DirectionalLight( 0xaabbff, 1.5 );
light.position.x = 300;
light.position.y = 550;
light.position.z = - 500;
scene.add( light );
```

* Set the light in the scene, I cannot see the texture without the light.

```javascript
geometry = new THREE.CubeGeometry( 0.1, 10, 0.1 );


for(let i=0; i<cubesNum; i++){
  var randomValue = Math.random() * 5;
  speed.push(randomValue);
  // Load a texture
  texture = new THREE.TextureLoader().load( "textures/texture1.jpg");

  // Create a MeshBasicMaterial with a loaded texture
  material = new THREE.MeshBasicMaterial( { map: texture} );

  // Combine the geometry and material into a mesh
  mesh1 = new THREE.Mesh( geometry, material );
  // Add the mesh to the scene
  mesh1.position.y = -50;

  scene.add( mesh1 );
  cubes.push( mesh1 );
}
  ```
  * Create a cube with the texture loaded.

  ```javascript
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 40;
	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );
	controls = new THREE.OrbitControls(camera, renderer.domElement);

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
```

* Set the camera ,the renderer, I also load the `OrbitControl` to make the camera move after the mousemoving.

```javascript
var mtlLoader = new THREE.MTLLoader();
//mtlLoader.setPath("Final work/")
mtlLoader.load("san1.mtl", function(materials){

  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("san1.obj", function(object){

    mesh = object

    mesh.position.y = -85;
    mesh.scale.set(0.7,0.7,0.7)
    //mesh.rotation.x = 5
    //mesh.rotation.x = -15;

    scene.add( mesh );
  });
});
```

* Use the mtlLoader and objLoader to load the models i need, this code  appear in the session9.I set the position and scale for it

```javascript
var mtlLoader = new THREE.MTLLoader();
//mtlLoader.setPath("Final work/")
mtlLoader.load("yahaha.mtl", function(materials){

  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("yahaha.obj", function(object2){

    mesh2 = object2

    mesh2.position.y = 80;
    mesh2.position.x = -5;
    mesh2.position.z = -100;

    mesh2.rotation.x = -4.8;
    //mesh2.position.x = -10;
    mesh2.scale.set(0.1,0.1,0.1)
    //mesh.rotation.x = 5
    //mesh.rotation.x = -15;

    scene.add( mesh2 );
  });
});
```

* Same with the code i just printed.

```javascript
/*var controller1 = new function() {
		this.scale = 0.8;
	}

	var gui = new dat.GUI();
	var f1 = gui.addFolder('Scale');
	f1.add(controller1,'scale', 0.8,2).onChange( function(){
		object.scale = (controller1.scale);
	});

};*/
```

* This code is about the `GUI`, I want to control the scale of the model I loaded, but I dont know how to define the model, there is alway a problem in it.

```javascript
function animate() {
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );

	for(var i=0; i<cubesNum; i++){

		// Rotate the x position of the mesh by 0.03
		//cubes[i].rotation.x += speed[i] / 100;
		// Rotate the y position of the mesh by 0.02
		//cubes[i].rotation.y += speed[i] / 80;
		//Move the mesh towards the bottom of the screen
		cubes[i].position.y -= speed[i];
		//If the mesh passes the bottom of the screen,
		//make it appear on the top. Also x position is randomized
		if (cubes[i].position.y <- 30){
			cubes[i].position.y = 35;
			cubes[i].position.x = (Math.random()*-100) +50;
			cubes[i].position.z = (Math.random()*-100) +50;
			cubes[i].scale.x = Math.random();
			cubes[i].scale.y = Math.random();
			cubes[i].scale.z = Math.random();
		}
	}

	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}
```
* This code is to let the cube drop randomly and refresh randomly, if the `position.y <-30`, the position.y will be 35 and the `position.x` and `position.z` are random.

```javascript
function swap_music() {
  var oAudio = document.getElementById('myaudio');
  if (oAudio.paused) {
    oAudio.play();
  }
  else {
    oAudio.pause();
  }
}
```

* this code is to c`ontrol the music` i load.

```javascript
<audio id="my" src="music/Rain.mp3" controls="false" autoplay = "autoplay" loop="true">
<audio id="my" src="music/BGM.mp3" controls="false" autoplay = "autoplay" loop="true">
```
* This code is to load the music and make them `autoplay`.This code is in the `index.html`
