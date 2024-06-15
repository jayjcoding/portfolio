import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { Suspense } from 'react';
import { Model } from './Model'; // Ensure this points to the correct path of your model file
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <video autoPlay muted loop className="background-video">
                <source src="./tech.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="model-container">
                <Canvas camera={{ position: [-1, 2.5, 3] }} >
                    <Suspense fallback={null}>
                        {/* <Environment preset="city" background /> */}
                        <Model />
                        <OrbitControls autoRotate autoRotateSpeed={1} />
                        <ambientLight intensity={0.5} position={[5, 5, 5]} />
                        <ambientLight intensity={0.5} position={[-5, -5, -5]} />
                        <ambientLight intensity={0.5} position={[-5, 0, -5]} />
                        <ambientLight intensity={0.5} position={[5, 0, 5]} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="info-container">
                <h2>Hello! This is Jay Jashnani</h2>
                <p>I am an aspiring Software Developer.</p>
            </div>
        </div>
    );
}

export default Home;