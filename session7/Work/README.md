# DAT505-Code session7

* In this session, I need to Create the cubes that drop randomly from the top of the screen, and make sure that each cube can have a random material.

```javascript
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubesNum = 10;

var cubes = [];
var speed = [];

function init() {
	// Create a scene
	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry( 10, 10, 10 );

	for(let i=0; i<cubesNum; i++){
		var randomValue = Math.random() * 0.5;
		speed.push(randomValue);

		//Generate a random number from 1 to 4(according to image files)
		var randomSelection = Math.round(Math.random()*4) + 1;
		// Load a texture
		texture = new THREE.TextureLoader().load( "textures/texture" + randomSelection+".jpg");

		// Create a MeshBasicMaterial with a loaded texture
		material = new THREE.MeshBasicMaterial( { map: texture} );

		// Combine the geometry and material into a mesh
		mesh = new THREE.Mesh( geometry, material );
		// Add the mesh to the scene
		mesh.position.y = -50;


		scene.add( mesh );
		cubes.push( mesh );
	}

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 30;

	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
}
```

* Some base settings, define the `texture and material` of the mesh, set the `camera`, `renderer`.

```javascript
function animate() {

	requestAnimationFrame( animate );

	for(var i=0; i<cubesNum; i++){

		// Rotate the x position of the mesh by 0.03
		cubes[i].rotation.x += speed[i] / 100;
		// Rotate the y position of the mesh by 0.02
		cubes[i].rotation.y += speed[i] / 80;



		//Move the mesh towards the bottom of the screen
		cubes[i].position.y -= speed[i];

		//If the mesh passes the bottom of the screen,
		//make it appear on the top. Also x position is randomized
		if (cubes[i].position.y <- 30){
			cubes[i].position.y = 35;
			cubes[i].position.x = (Math.random()*-20) +10;
			cubes[i].scale.x = Math.random();
			cubes[i].scale.y = Math.random();
			cubes[i].scale.z = Math.random();
		}
	}
}
  ```

  * This code makes that if the cube fall under the screen, just like the positionY < -30. It will appear on the top of the screen.