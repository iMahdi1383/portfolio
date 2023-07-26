import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = (props) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight
        intensity={0.7}
        groundColor="black"
      />
      <spotLight
        position={[-1000, 0, -1000]}
        angle={0.12}
        penumbra={1}
        intensity={0.7}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.7} />
      <primitive
        object={computer.scene}
        scale={props.isMobile ? 0.5 : 0.75}
        position={[0, -1.8, -1.5]}
        rotation={[-0.01, 0.3, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 450px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);


  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className={isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
