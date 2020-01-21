// ------- setup --------------------------------------
// Create the Three.js Scene
var scene = new THREE.Scene();

// Create a new Perspective Camera
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 1;

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
var geometry = new THREE.SphereGeometry(0.5, 32, 32);

var material = new THREE.MeshPhongMaterial();

// https://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74218/world.200412.3x5400x2700.jpg
// https://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74092/world.200407.3x5400x2700.jpg

var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0;
scene.add(mesh);
material.map = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');

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
