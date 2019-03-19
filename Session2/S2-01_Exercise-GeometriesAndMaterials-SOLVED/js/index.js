// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();
var camera, theta = 0
// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 300, 1500 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.CubeGeometry(40, 40, 40);
var geometry1, material2, mesh30;
// MATERIAL 1:
//var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//MATERIAL 2:
var material1 = new THREE.MeshNormalMaterial();

//MATERIAL 3:
/*
var material = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});
*/

//MATERIAL 4:
//var material = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 5 (non-shiny material):

var material = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});


/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
*/

/*
//MATERIAL 6 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
*/

/*
//MATERIAL 7 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
*/

//var texture1 = new THREE.TextureLoader().load( "texture/1.jpg" );

//var material1 = new THREE.MeshBasicMaterial( { map: texture1} );



var mesh1 = new THREE.Mesh( geometry, material1 );
mesh1.position.z = 100;

var mesh2 = new THREE.Mesh( geometry, material1 );
mesh2.position.z = 100;
mesh2.position.x = 100;

var mesh3 = new THREE.Mesh( geometry, material1 );
mesh3.position.z = 100;
mesh3.position.x = -100;

var mesh4 = new THREE.Mesh( geometry, material1 );
mesh4.position.z = 100;
mesh4.position.y = 100;

var mesh5 = new THREE.Mesh( geometry, material1 );
mesh5.position.z = 100;
mesh5.position.y = -100;

var mesh6 = new THREE.Mesh( geometry, material1 );
mesh6.position.z = 100;
mesh6.position.x = 100;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry, material1 );
mesh7.position.z = 100;
mesh7.position.x = 100;
mesh7.position.y = 100;

var mesh8 = new THREE.Mesh( geometry, material1 );
mesh8.position.z = 100;
mesh8.position.x = -100;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material1 );
mesh9.position.z = 100;
mesh9.position.x = -100;
mesh9.position.y = 100;

var mesh11 = new THREE.Mesh( geometry, material1 );
mesh11.position.z = 0;

var mesh12 = new THREE.Mesh( geometry, material1 );
mesh12.position.z = 0;
mesh12.position.x = 100;

var mesh13 = new THREE.Mesh( geometry, material1 );
mesh13.position.z = 0;
mesh13.position.x = -100;

var mesh14 = new THREE.Mesh( geometry, material1 );
mesh14.position.z = 0;
mesh14.position.y = 100;

var mesh15 = new THREE.Mesh( geometry, material1 );
mesh15.position.z = 0;
mesh15.position.y = -100;

var mesh16 = new THREE.Mesh( geometry, material1 );
mesh16.position.z = 0;
mesh16.position.x = 100;
mesh16.position.y = -100;

var mesh17 = new THREE.Mesh( geometry, material1 );
mesh17.position.z = 0;
mesh17.position.x = 100;
mesh17.position.y = 100;

var mesh18 = new THREE.Mesh( geometry, material1 );
mesh18.position.z = 0;
mesh18.position.x = -100;
mesh18.position.y = -100;

var mesh19 = new THREE.Mesh( geometry, material1 );
mesh19.position.z = 0;
mesh19.position.x = -100;
mesh19.position.y = 100;

var mesh21 = new THREE.Mesh( geometry, material1 );
mesh21.position.z = 200;

var mesh22 = new THREE.Mesh( geometry, material1 );
mesh22.position.z = 200;
mesh22.position.x = 100;

var mesh23 = new THREE.Mesh( geometry, material1 );
mesh23.position.z = 200;
mesh23.position.x = -100;

var mesh24 = new THREE.Mesh( geometry, material1 );
mesh24.position.z = 200;
mesh24.position.y = 100;

var mesh25 = new THREE.Mesh( geometry, material1 );
mesh25.position.z = 200;
mesh25.position.y = -100;

var mesh26 = new THREE.Mesh( geometry, material1 );
mesh26.position.z = 200;
mesh26.position.x = 100;
mesh26.position.y = -100;

var mesh27 = new THREE.Mesh( geometry, material1 );
mesh27.position.z = 200;
mesh27.position.x = 100;
mesh27.position.y = 100;

var mesh28 = new THREE.Mesh( geometry, material1 );
mesh28.position.z = 200;
mesh28.position.x = -100;
mesh28.position.y = -100;

var mesh29 = new THREE.Mesh( geometry, material1 );
mesh29.position.z = 200;
mesh29.position.x = -100;
mesh29.position.y = 100;

var geometry1 = new THREE.TorusGeometry( 250, 5, 16, 100 );
var material2 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus1 = new THREE.Mesh( geometry1, material1 );
torus1.position.z = 100;
scene.add( torus1 );

var geometry2 = new THREE.TorusGeometry( 250, 5, 16, 100 );
var material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus2 = new THREE.Mesh( geometry2, material1 );
torus2.position.z = 100;
scene.add( torus2 );

var geometry3 = new THREE.TorusGeometry( 250, 5, 16, 100 );
var material4 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
var torus3 = new THREE.Mesh( geometry3, material1 );
torus3.position.z = 100;
scene.add( torus3 );

// create a new group includes all the meshes and torus.
var newgroup = new THREE.Group();
newgroup.position.z = -1000;
newgroup.position.x = 0;
newgroup.position.y = 0;
newgroup.add(mesh1);
newgroup.add(mesh2);
newgroup.add(mesh3);
newgroup.add(mesh4);
newgroup.add(mesh5);
newgroup.add(mesh6);
newgroup.add(mesh7);
newgroup.add(mesh8);
newgroup.add(mesh9);
newgroup.add(mesh11);
newgroup.add(mesh12);
newgroup.add(mesh13);
newgroup.add(mesh14);
newgroup.add(mesh15);
newgroup.add(mesh16);
newgroup.add(mesh17);
newgroup.add(mesh18);
newgroup.add(mesh19);
newgroup.add(mesh21);
newgroup.add(mesh22);
newgroup.add(mesh23);
newgroup.add(mesh24);
newgroup.add(mesh25);
newgroup.add(mesh26);
newgroup.add(mesh27);
newgroup.add(mesh28);
newgroup.add(mesh29);
newgroup.add(torus1);
newgroup.add(torus2);
newgroup.add(torus3);
scene.add( newgroup );

// ------------------------------------------------

// Add newgroup to scene



var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot; //Continuously rotate the mesh
  mesh1.rotation.y = rot;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot; //Continuously rotate the mesh
  mesh3.rotation.y = rot;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot; //Continuously rotate the mesh
  mesh5.rotation.y = rot;

  mesh6.rotation.x = rot; //Continuously rotate the mesh
  mesh6.rotation.y = rot;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot; //Continuously rotate the mesh
  mesh8.rotation.y = rot;

  mesh9.rotation.x = rot; //Continuously rotate the mesh
  mesh9.rotation.y = rot;

  mesh11.rotation.x = rot; //Continuously rotate the mesh
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot; //Continuously rotate the mesh
  mesh12.rotation.y = rot;

  mesh13.rotation.x = rot; //Continuously rotate the mesh
  mesh13.rotation.y = rot;

  mesh14.rotation.x = rot; //Continuously rotate the mesh
  mesh14.rotation.y = rot;

  mesh15.rotation.x = rot; //Continuously rotate the mesh
  mesh15.rotation.y = rot;

  mesh16.rotation.x = rot; //Continuously rotate the mesh
  mesh16.rotation.y = rot;

  mesh17.rotation.x = rot; //Continuously rotate the mesh
  mesh17.rotation.y = rot;

  mesh18.rotation.x = rot; //Continuously rotate the mesh
  mesh18.rotation.y = rot;

  mesh19.rotation.x = rot; //Continuously rotate the mesh
  mesh19.rotation.y = rot;

  mesh21.rotation.x = rot; //Continuously rotate the mesh
  mesh21.rotation.y = rot;

  mesh22.rotation.x = rot; //Continuously rotate the mesh
  mesh22.rotation.y = rot;

  mesh23.rotation.x = rot; //Continuously rotate the mesh
  mesh23.rotation.y = rot;

  mesh24.rotation.x = rot; //Continuously rotate the mesh
  mesh24.rotation.y = rot;

  mesh25.rotation.x = rot; //Continuously rotate the mesh
  mesh25.rotation.y = rot;

  mesh26.rotation.x = rot; //Continuously rotate the mesh
  mesh26.rotation.y = rot;

  mesh27.rotation.x = rot; //Continuously rotate the mesh
  mesh27.rotation.y = rot;

  mesh28.rotation.x = rot; //Continuously rotate the mesh
  mesh28.rotation.y = rot;

  mesh29.rotation.x = rot; //Continuously rotate the mesh
  mesh29.rotation.y = rot;

  newgroup.rotation.x = rot;//Continuously rotate the mesh
  newgroup.rotation.y = rot;

  torus1.rotation.x = rot;//Continuously rotate the mesh

  torus2.rotation.y = rot;//Continuously rotate the mesh

  torus3.rotation.z = rot;//Continuously rotate the mesh

  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
