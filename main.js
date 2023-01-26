const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
console.log(THREE);
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = '';
const texture = textureLoader.load('./texture1.webp');

const geometry = new THREE.TorusKnotGeometry( 0.5, 0.2, 100, 22 );
const material = new THREE.MeshMatcapMaterial( { matcap: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 3;
camera.position.x = -1;

document.body.append(renderer.domElement)

const cursor = { x: 0, y: 0 }

window.addEventListener('mousemove', (_event) => {
    cursor.x = _event.clientX / window.innerWidth - 0.5
    cursor.y = _event.clientY / window.innerHeight - 0.5
})

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.0111;
    cube.rotation.y += 0.0111;

    const cameraX = cursor.x -1
    const cameraY = - cursor.y

    camera.position.x += (cameraX - camera.position.x) / 30
    camera.position.y += (cameraY - camera.position.y) / 30

    renderer.render( scene, camera );
};

animate();