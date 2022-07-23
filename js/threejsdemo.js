// Initial three.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

scene.background = new THREE.Color( 0x99ccff );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 100;



function createCube() {
    // Create a Cube
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    return cube;
}

function createTorusKnot() {
    // Create a Torus Knot
    const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );
    const torusKnot = new THREE.Mesh( geometry, material );
    scene.add( torusKnot );
    return torusKnot;
}

let knot = createTorusKnot();
let cube = createCube();

function rotateShape(shape) {
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
}

// Animate the Cube
function animate() {
    requestAnimationFrame( animate );
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;    
    rotateShape(knot);
    rotateShape(cube);
    renderer.render( scene, camera );
}
animate();