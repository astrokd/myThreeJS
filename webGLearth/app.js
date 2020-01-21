// ------- setup --------------------------------------
// Create the Three.js Scene
var scene = new THREE.Scene();

// Create a new Perspective Camera
var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.01,1000);
camera.position.z = 1.5;

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


var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0;
material.map = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
scene.add(mesh);


// var light = new THREE.PointLight(0xFFFFFF, 2, 1000);
// light.position.set(0,2,2);
// scene.add(light);

var render = function() {
  renderer.render(scene, camera);
};

render();
