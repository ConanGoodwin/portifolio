/* eslint-disable react/no-unknown-property */
// import React from 'react'
// import PropTypes from 'prop-types'
import { Model } from "../objects3D/Portifolio";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Bio() {
  return (
    <div style={{position:'absolute', top:'-125px'}}> 
      <Canvas camera={{ fov: 64, position: [4.2, 0, 0] }} style={{height:'500px',width:'500px'}}>
        <ambientLight intensity={5} position={[4.2, 3, 3]}/>
        <OrbitControls enableZoom={true} />
        <Model />
      </Canvas>
    </div>
  )
}

// Bio.propTypes = {}

export default Bio
