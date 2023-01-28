import { useState } from 'react'
import styles from './Welcome.module.css'
import { SelectLanguage, AllowPi, FingerPrint } from '../../components'
import { slideUp } from '../../animations';
import { motion } from "framer-motion"

export const WelcomeScreen = () => {
  const [closeFingerPrint, setCloseFingerPrint] = useState(false)
  return (
    <motion.div
      id={styles.wrapper}
      // animate={slideLeft}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
    >
      <SelectLanguage />
      <AllowPi setCloseFingerPrint={setCloseFingerPrint} />
      {closeFingerPrint &&
        <motion.div
          animate={slideUp}
          transition={{ duration: 0.3 }} ><FingerPrint setCloseFingerPrint={setCloseFingerPrint} />
        </motion.div>}
    </motion.div>
  )
}
