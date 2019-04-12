# DAT505-Code session8

* In this session, Ineed to generate the 3d model randomly on the screen, the model should be loaded by myself, and sound effects are emitted when the mouse moves to model.

```javascript
var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var object;

var objects = [];

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();

init();
animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  //Audio - Settings
  camera.add( listener );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );

  var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
}
  ```

* This code is base setting ,different from the past, in this session we need to load the voice.

```javascript
for (var i=0; i<100; i++){
// Model/material loading!
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("XX.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("XX.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 2;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh); //Add to the array so that we can access for raycasting
    });
  });
}
```

* This code can allow me to load my own models, but it can just distinguish the format `obj and mtl`
