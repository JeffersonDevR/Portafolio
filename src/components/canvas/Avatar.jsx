import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import the THREE library
import * as random from "maath/random/dist/maath-random.esm";
import CanvasLoader from "../Loader";

const Avatar = () => {
    const avatar = useGLTF("./avatar/avatar.glb");
    const { size } = useThree();
    const materialsRef = useRef([]);

    materialsRef.current.forEach((material) => material.dispose());
    materialsRef.current = [];

    // This will iterate through all children (objects) in the loaded scene.
    avatar.scene.traverse((object) => {
        // We only want to apply the material change to actual Meshes
        if (object.isMesh) {
            // Apply a new MeshStandardMaterial for metallic look
            object.material = new THREE.MeshStandardMaterial({
                color: "#008bf8",   // Base tertiary blue
                metalness: 1.0,     // Fully metallic
                roughness: 0.2,
                wireframe: true,  // Shiny look
            });
            // Ensure the geometry casts and receives shadows
            object.castShadow = true;
            object.receiveShadow = true;
            materialsRef.current.push(object.material);
        }
    });
    // 🌟 END OF TRAVERSE 🌟

    const [colors] = useState(() => ({
        base: new THREE.Color("#008bf8"),
        pulse: new THREE.Color("#8b5cf6"),
    }));

    // Gentle color breathing between the base blue and a violet accent.
    useFrame(({ clock }) => {
        const mix = (Math.sin(clock.getElapsedTime() * 1.2) + 1) / 2;
        materialsRef.current.forEach((material) => {
            material.color.copy(colors.base).lerp(colors.pulse, mix * 0.6);
        });
    });

    const avatarScale = size.width < 640 ? 1.9 : 2.5;

    return <primitive object={avatar.scene} scale={avatarScale} position-y={0} rotation-y={0} />;
};

// Pull the camera closer on narrow screens so the model fills the viewport.
const ResponsiveCamera = () => {
    const { camera, size, controls } = useThree();

    useEffect(() => {
        let position;
        if (size.width < 640) {
            position = [-2.4, 2.2, 3.8];
        } else if (size.width < 1024) {
            position = [-3.2, 2.6, 4.8];
        } else {
            position = [-4, 3, 6];
        }
        camera.position.set(...position);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
        // Let OrbitControls re-sync its internal state so autoRotate keeps working.
        if (controls) {
            controls.target.set(0, 0, 0);
            controls.update();
        }
    }, [camera, size.width, controls]);

    return null;
};

// Small, tertiary-colored particles orbiting around the avatar in a fuzzy shell.
const AvatarFX = () => {
    const { scene } = useThree();

    const [fx] = useState(() => {
        const points = new THREE.Points(
            buildParticleShell(),
            new THREE.PointsMaterial({
                color: "#008bf8",
                size: 0.035,
                transparent: true,
                opacity: 0.55,
                depthWrite: false,
                sizeAttenuation: true,
            })
        );

        const ringAHolder = new THREE.Group();
        ringAHolder.rotation.set(Math.PI / 2.4, 0, 0.4);
        const ringA = new THREE.Mesh(
            new THREE.TorusGeometry(2.3, 0.015, 16, 128),
            new THREE.MeshBasicMaterial({
                color: "#8b5cf6",
                transparent: true,
                opacity: 0.35,
                depthWrite: false,
            })
        );
        ringAHolder.add(ringA);

        const ringBHolder = new THREE.Group();
        ringBHolder.rotation.set(-Math.PI / 2.8, 0, -0.5);
        const ringB = new THREE.Mesh(
            new THREE.TorusGeometry(2.9, 0.018, 16, 128),
            new THREE.MeshBasicMaterial({
                color: "#008bf8",
                transparent: true,
                opacity: 0.28,
                depthWrite: false,
            })
        );
        ringBHolder.add(ringB);

        const group = new THREE.Group();
        group.add(points, ringAHolder, ringBHolder);

        return { group, points, ringAHolder, ringBHolder };
    });

    useEffect(() => {
        scene.add(fx.group);
        return () => {
            scene.remove(fx.group);
            fx.group.traverse((child) => {
                if (child.geometry) child.geometry.dispose();
                const materials = child.material;
                if (materials) {
                    if (Array.isArray(materials)) {
                        materials.forEach((material) => material.dispose());
                    } else {
                        materials.dispose();
                    }
                }
            });
        };
    }, [fx, scene]);

    useFrame((_, delta) => {
        // Slow orbit of the particle shell
        fx.points.rotation.y += delta * 0.08;
        fx.points.rotation.x += delta * 0.02;
        // Precession of the orbital rings on their own plane
        fx.ringAHolder.rotation.y += delta * 0.1;
        fx.ringBHolder.rotation.y -= delta * 0.07;
    });

    return null;
};

// Build a shell of particle positions between the avatar body and the rings.
const buildParticleShell = () => {
    const count = 500;
    const raw = random.inSphere(new Float32Array(count * 3), { radius: 3.6 });
    const kept = [];
    for (let i = 0; i < raw.length; i += 3) {
        const r = Math.hypot(raw[i], raw[i + 1], raw[i + 2]);
        if (r > 2.3) {
            kept.push(raw[i], raw[i + 1], raw[i + 2]);
        }
    }
    return new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(new Float32Array(kept), 3));
};

const AvatarCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="always"
            dpr={[1, 1.5]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
            className="canvas"
        >
            <Suspense fallback={<CanvasLoader />}>
                <ResponsiveCamera />
                <OrbitControls makeDefault autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                {/* Add an ambient light and directional light for better visibility of the metallic surface */}
                {/* <ambientLight intensity={0.001} /> */}
                <directionalLight position={[2, 2, 2]} intensity={4} color="#d7dbdf" />
                <Avatar />
                <AvatarFX />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default AvatarCanvas;
