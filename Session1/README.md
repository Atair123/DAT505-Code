# DAT505-Code session1 #


* In the session1, I create four fundemental cubes to make a logo of healing, I let them rotate in different angles, at that moment I wanted to change the colour for them but I failed even through now i know how to do that.

### Usage ###
```javascript
function geometry(){
geometry1 = new THREE.CubeGeometry(25, 25, 200);
material1 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.position.z = -1000;

scene.add( mesh1 );
geometry2 = new THREE.CubeGeometry(25, 25, 200);
material2 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
mesh2 = new THREE.Mesh( geometry2, material2 );
mesh2.position.z = -1000;

scene.add( mesh2 );
geometry3 = new THREE.CubeGeometry(25, 25, 200);
material3 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
mesh3 = new THREE.Mesh( geometry3, material3 );
mesh3.position.z = -1000;

scene.add( mesh3 );
geometry4 = new THREE.CubeGeometry(25, 200, 25);
material4 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
mesh4 = new THREE.Mesh( geometry4, material4 );
mesh4.position.z = -1000;
}
```

  * Create four cubes, and define their size colour position.

```javascript
mesh1.rotation.x += 0.03;
mesh1.rotation.y += 0.03;
mesh2.rotation.x += 0.03;
mesh2.rotation.z += 0.03;
mesh3.rotation.y += 0.03;
mesh3.rotation.z += 0.03;
mesh4.rotation.y += 0.03;
mesh4.rotation.x += 0.03;
```

  * Define the rotation.
