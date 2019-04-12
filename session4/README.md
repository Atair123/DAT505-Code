# DAT505-Code session4 #


* In this session, we need to create 25 cubes and make two different， like the colour, the rotation. The else of them should be stopped, only the two cubes we choose can move. It is a challenge that i need to contact new code.

### Usage ###
```javascript
var renderer, scene, camera;
var cubes = [];
var rot = 0;
var controls;
var randomSpeedX = [];
var randomRotationX = [];
var randomRotationY = [];
```

* I define the `rot` means the rotation of the two cubes, because the speed of the two cubes should be random, so define the `randon speed` is necessary.

```javascript
function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0,55 , 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(100, 0, 100);
  scene.add(spotLight);

  var ambLight = new THREE.AmbientLight(0xffffff);
  ambLight.position.set(0, 1000, 0);
  ambLight.add(spotLight);

  scene.add(ambLight);
  scene.add(ambLight);

  //spotLight.castShadow = true;
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x000000);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
}
  ```

  * This are some fundemental settings, camera, renderer, the differents is that i use anther two kinds of lights.

  ```javascript
  for (var x = -10; x <= 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  for (var y = -10; y <= 10; y += 5){
  //for (var z = -40; z < 40; z += 5){

  //console.log("x:" +x+",y:"+y+",z:" +z);
  var boxGeometry = new THREE.BoxGeometry(3, 6, 3);

   if (x == -5  && y == -5 ){
   var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
  }
  else if (x == 5 && y == 5){
   var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
  } else {
  var boxMaterial = new THREE.MeshLambertMaterial({color: 0x6c6c6c});

  }
  var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  }
}
  ```

  * This is a very important piece of code. With this i can choose that two cubes, the first is when X=5 and Y=5, and the next is when X=-5 and Y=-5, the colour of them can be `random`, in the other situation, the colour should be `0x6c6c6c`.

  ```javascript
  mesh.position.x = x ;
  mesh.position.z = y ;
  //mesh.position.y = y ;
  mesh.scale.y = 0.5;

  mesh.rotation.x = Math.random() * 2 * Math.PI;
  mesh.rotation.y = Math.random() * 2 * Math.PI;
  mesh.rotation.z = Math.random() * 2 * Math.PI;

  var randomValueX = (Math.random() * 0.1) - 0.05;
  var randomValueY = (Math.random() * 0.1) - 0.05;

  randomRotationX.push(randomValueY);
  randomRotationY.push(randomValueX);
  randomSpeedX.push(randomValueX);
  //mesh.scale.y = 0.5;
  scene.add(mesh);
  cubes.push(mesh);
}
  ```
  * This code is to push a random speed of rotation onto the two cube I chose, the range is from -0.05 to 0.05.

  ```javascript
  function drawFrame(){
    requestAnimationFrame(drawFrame);
   //cubes.forEach(function(c,i){

  for (var i = 0; i < 5; i++){
     //c.rotation.x += randomRotationX[i];
     //c.rotation.y += randomRotationY[i];
     //c.rotation.z += randomRotationY[i];

    cubes[6].rotation.x  +=  randomSpeedX[6];
    cubes[18].rotation.x +=  randomSpeedX[18];
  }
}
  ```
  * 6 and 18 is to locate the cubes I want to let them rotate
