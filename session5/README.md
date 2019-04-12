# DAT505-Code session5 #

* In this session I need to simply create a large number of squares, and then make them each rotate at random speed，they need random colours.

### Usage ###
```javascript
var renderer, scene, camera;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];


function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

```

* Fundemental settings, including camera, renderer, scene.

```javascript
for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
  for (var y = -35; y < 40; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    //The color of the material is assigned a random color
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  }
}
}
    ```

    * This piece of code can create cubes simply, the range of X and Y are -35 and 40.The cubes will be generated according to the coordinates.

    ```javascript
    mesh.position.x = x;
    mesh.position.z = y;
    mesh.rotation.x += 360*Math.random();
    var randomValueX = (Math.random()*0.1) - 0.05;
    var randomValueY = (Math.random()*0.1) - 0.05;
    randomRotationX.push(randomValueX);
    randomRotationY.push(randomValueY);

    scene.add(mesh);
    cubes.push(mesh);
    
    ```

    * limit the speed of rotation,is -0.05 to 0.05 ,all the speed the cubes rotated should be in this range.
