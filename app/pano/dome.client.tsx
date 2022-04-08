import {BackSide} from 'three';
import {Html} from '@react-three/drei';
import {Popconfirm} from 'antd';

export default function DomeClient({ name, position, texture, onClick }) {
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
