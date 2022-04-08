import { ClientOnly } from "remix-utils";
import CanvasWrapperClient from '~/pano/canvas-wrapper.client';


export default function R3fPage() {
  return (
    <main className="flex h-full bg-white">
      <ClientOnly fallback={null} children={CanvasWrapperClient} />
    </main>
  );
}
