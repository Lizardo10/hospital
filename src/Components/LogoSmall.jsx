import * as React from "react"
import {motion} from 'framer-motion'
const SvgComponent = (props) => (
  <motion.svg
    whileHover={{ rotateY: 180}}
    transition={{duration: 1}}
    width={45}
    height={45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={22.5}
      cy={22.5}
      r={20.5}
      fill="#00FFD1"
      stroke="#0500F1"
      strokeWidth={4}
    />
    <rect x={6} y={18} width={32.684} height={9} rx={4.5} fill="#006895" />
    <rect
      x={17}
      y={38.684}
      width={32.684}
      height={10}
      rx={5}
      transform="rotate(-90 17 38.684)"
      fill="#00B2FF"
    />
  </motion.svg>
)

export default SvgComponent
