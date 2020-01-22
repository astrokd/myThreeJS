// from http://planetpixelemporium.com/
// from http://learningthreejs.com//

// ------- setup --------------------------------------
// Create the Three.js Scene
var scene = new THREE.Scene();

// Create a new Perspective Camera
var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.01,1000);
camera.position.z = 1.5;

// Create a Full Screen WebGL Renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

// Make sure the project is responsive based on window resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// ------- end setup -------------------------------------------

var geometry	= new THREE.SphereGeometry(0.5, 32, 32);
// var textureMap = new THREE.TextureLoader().load( 'earthmap1k.jpg' );
var material	= new THREE.MeshPhongMaterial({
//   map		: textureMap,
  //   bumpMap		: THREE.TextureLoader('images/earthbump1k.jpg'),
  bumpScale	: 0.02,
  //   specularMap	: THREE.TextureLoader('images/earthspec1k.jpg'),
  specular	: new THREE.Color('grey')
});
// var texture = THREE.TextureLoader('images/earthmap1k.jpg');
// material.map = textureMap;

var mesh = new THREE.Mesh(geometry, material);

// var mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0;
// mesh.position.y = 0;
// mesh.position.z = 0;
// material.map = THREE.ImageUtils.loadTexture('images/earthmap1k.jpg');
scene.add(mesh);

var light	= new THREE.AmbientLight( 0x888888 );
scene.add( light );

var light2	= new THREE.DirectionalLight( 0xcccccc, 1 );
light2.position.set(5,3,5);
scene.add( light2 );

// var light = new THREE.PointLight(0xFFFFFF, 2, 1000);
// light.position.set(0,2,2);
// scene.add(light);

var render = function() {
  renderer.render(scene, camera);
};

render();
