// ------- setup --------------------------------------
// Create the Three.js Scene
var scene = new THREE.Scene();

// Create a new Perspective Camera
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 5;

// Create a Full Screen WebGL Renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

// Make sure the project is responsive based on window resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// ------- end setup -------------------------------------------


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var geometry = new THREE.SphereGeometry(1, 10, 10);

var material = new THREE.MeshLambertMaterial({color: 0xF7F7F7});
// var mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);


var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0;
scene.add(mesh);


var light = new THREE.PointLight(0xFFFFFF, 2, 1000);
light.position.set(0,2,2);
scene.add(light);

var render = function() {
  requestAnimationFrame(render);
  // mesh.rotation.x += 0.01;
  renderer.render(scene, camera);
};

function onMouseMove(event) {
  event.preventDefault();

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children, true);
  for (var i = 0; i < intersects.length; i++) {

    this.tl = new TimelineMax();
    this.tl.to(intersects[i].object.position, .5, {x: 1, ease: Expo.easeOut});
  }
}

render();

window.addEventListener('mousemove', onMouseMove);

