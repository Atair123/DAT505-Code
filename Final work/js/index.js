//Setup the global variables
var camera, scene, renderer, geometry, material, mesh1;
var texture;
var cubesNum = 500;

var cubes = [];
var speed = [];

/*
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};*/

function init() {
	// Create a scene
	scene = new THREE.Scene();

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

	var light = new THREE.DirectionalLight( 0xaabbff, 1.5 );
	light.position.x = 300;
	light.position.y = 550;
	light.position.z = - 500;
	scene.add( light );

	// Create a geometry
	// 	Create a box (cube) of 10 width, length, and height
	geometry = new THREE.CubeGeometry( 0.1, 10, 0.1 );


	for(let i=0; i<cubesNum; i++){
		var randomValue = Math.random() * 5;
		speed.push(randomValue);

		//Generate a random number from 1 to 4(according to image files)
		//var randomSelection = Math.round(Math.random()*1) +1 ;
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

	// Create a camera
	// 	Set a Field of View (FOV) of 75 degrees
	// 	Set an Apsect Ratio of the inner width divided by the inner height of the window
	//	Set the 'Near' distance at which the camera will start rendering scene objects to 2
	//	Set the 'Far' (draw distance) at which objects will not be rendered to 1000
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



/*var controller1 = new function() {
		this.scale = 0.8;
	}

	var gui = new dat.GUI();
	var f1 = gui.addFolder('Scale');
	f1.add(controller1,'scale', 0.8,2).onChange( function(){
		object.scale = (controller1.scale);
	});

};*/


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

function swap_music() {
	var oAudio = document.getElementById('myaudio');
	if (oAudio.paused) {
		oAudio.play();
	}
	else {
		oAudio.pause();
	}
}

init();
animate();
