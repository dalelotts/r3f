import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import PortalsClient from '~/pano/portals.client';
import {OrbitControls} from '@react-three/drei';

export default function CanvasWrapperClient() {
    return (
        <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
            {/*add the following to see "Cannot read properties of undefined (reading 'root')"*/}
            {/*<OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />*/}
            <Suspense fallback={null}>
                <PortalsClient />
            </Suspense>
        </Canvas>
    );
}
