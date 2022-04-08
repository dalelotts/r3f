import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useState } from "react";
import {BackSide, TextureLoader} from 'three';
import { ClientOnly } from "remix-utils";
import { Html } from "@react-three/drei";
import { Popconfirm } from "antd";

const store = [
  {
    name: "outside",
    color: "lightpink",
    position: [10, 0, -15],
    url: "/_static/00021.jpeg",
    link: 1,
  },
  {
    name: "inside",
    color: "lightblue",
    position: [15, 0, 0],
    url: "/_static/00096.jpeg",
    link: 0,
  },
  // ...
];

function Dome({ name, position, texture, onClick }) {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        {/*add the following to see "Cannot read properties of undefined (reading 'root')"*/}
        {/*<Html center>*/}
        {/*  <Popconfirm*/}
        {/*    title="Are you sure you want to leave?"*/}
        {/*    onConfirm={onClick}*/}
        {/*    okText="Yes"*/}
        {/*    cancelText="No"*/}
        {/*  >*/}
        {/*    <a href="#">{name}</a>*/}
        {/*  </Popconfirm>*/}
        {/*</Html>*/}
      </mesh>
    </group>
  );
}

function Portals() {
  const [which, set] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
  return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />;
}

export function CanvasWrapper() {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
      {/*add the following to see "Cannot read properties of undefined (reading 'root')"*/}
      {/*<OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />*/}
      <Suspense fallback={null}>
        <Portals />
      </Suspense>
    </Canvas>
  );
}

export default function R3fPage() {
  return (
    <main className="flex h-full bg-white">
      <ClientOnly fallback={null} children={CanvasWrapper} />
    </main>
  );
}
