import { useState } from 'react'
import styles from './Welcome.module.css'
import { SelectLanguage, AllowPi, FingerPrint } from '../../components'
import { slideUp } from '../../animations';
import { motion } from "framer-motion"

export const WelcomeScreen = () => {
  const [closeFingerPrint, setCloseFingerPrint] = useState(true)
  return (
    <div id={styles.wrapper}>
      <SelectLanguage />
      <AllowPi setCloseFingerPrint={setCloseFingerPrint} />
      {closeFingerPrint && <motion.div
        animate={slideUp}
        // initial={{ y: 100 }}
        //   animate={{ y: 0 }}
        transition={{ duration: 0.3 }} ><FingerPrint setCloseFingerPrint={setCloseFingerPrint} /> </motion.div>}
    </div>
  )
}
