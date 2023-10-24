import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.z = 8;
camera.position.y = 2;

const renderer = new THREE.WebGLRenderer({ alpha: true });
const initialWidth = 800;
const initialHeight = 800;
renderer.setSize(initialWidth, initialHeight);
document.getElementById("3Dcontato").appendChild(renderer.domElement);

const loader = new GLTFLoader();

let object;

loader.load('./3d/plvrChair.glb', function (gltf) {
    object = gltf.scene;
    scene.add(object);
}, undefined, function (error) {
    console.error(error);
});

const topLight = new THREE.DirectionalLight(0xffffff, 2);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);

    // Adicione aqui a lógica de animação
    if (object) {
        object.rotation.y += 0.008;
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
loader.load('./3d/plvrChair.glb', function () {
    animate();
}, undefined, function (error) {
    console.error(error);
});