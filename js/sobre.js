import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ alpha: true });
const initialWidth = window.innerWidth;
const initialHeight = window.innerHeight;
renderer.setSize(initialWidth, initialHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const loader = new GLTFLoader();

let object;

loader.load('./3d/CARINHA.glb', function (gltf) {
    object = gltf.scene;
    scene.add(object);
}, undefined, function (error) {
    console.error(error);
});


// const texture = new THREE.TextureLoader().load("./3d/textura.mtl");
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set(4, 4);

const topLight = new THREE.DirectionalLight(0xdcff3c, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xdcff3c, 2);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);

    // Adicione aqui a lógica de animação
    if (object) {
        object.rotation.y += 0.008;
        object.rotation.z += 0.005;
    }

    renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Comece a renderizar a cena após o carregamento do modelo
loader.load('./3d/CARINHA.glb', function () {
    animate();
}, undefined, function (error) {
    console.error(error);
});
