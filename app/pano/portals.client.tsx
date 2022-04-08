import {useState} from 'react';
import {useLoader} from '@react-three/fiber';
import {TextureLoader} from 'three';
import DomeClient from '~/pano/dome.client';


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

export default function PortalsClient() {
    const [which, set] = useState(0);
    const { link, ...props } = store[which];
    const maps = useLoader(TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <DomeClient onClick={() => set(link)} {...props} texture={maps[which]} />;
}
