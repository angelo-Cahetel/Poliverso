import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 5000);
camera.position.z = 8;


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight); // Ajuste o tamanho do canvas
document.getElementById("container3D").appendChild(renderer.domElement);

const loader = new GLTFLoader();

let object;

loader.load('./3d/chair.glb', function (gltf) {
    object = gltf.scene;
    scene.add(object);
}, undefined, function (error) {
    console.error(error);
});

const topLight = new THREE.DirectionalLight(0xffffff, 1);
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
    camera.aspect = window.innerWidth / window.innerHeight; // Atualize a proporção da câmera
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight); // Atualize o tamanho do canvas
});

// Comece a renderizar a cena após o carregamento do modelo
loader.load('./3d/chair.glb', function () {
    animate();
}, undefined, function (error) {
    console.error(error);
});
