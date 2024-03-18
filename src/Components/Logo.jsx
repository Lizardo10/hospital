import * as React from "react"
import { motion } from 'framer-motion'
import './Styles/svg.css'
import { variantsimage } from './Variants'
const Logo = (props) => (
  <motion.svg
    whileHover={{ rotateY: 180, scaleY: 1.3 }}
    initial="hidden"
    animate="visible" variants={variantsimage}
    transition={{ duration: 3 }}
    width={190}
    height={190}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={95}
      cy={95}
      r={88}
      fill="#00FFD1"
      stroke="#0500F1"
      strokeWidth={14}
    />
    <rect x={26} y={73} width={138} height={48} rx={24} fill="#006895" />
    <rect
      x={71}
      y={164}
      width={138}
      height={48}
      rx={24}
      transform="rotate(-90 71 164)"
      fill="#00B2FF"
    />
  </motion.svg>
)

export default Logo