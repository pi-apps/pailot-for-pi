import {useState} from 'react'
import styles from './Welcome.module.css'
import { SelectLanguage, AllowPi, FingerPrint } from '../../components'

export const WelcomeScreen = () => {
  const [closeFingerPrint, setCloseFingerPrint] = useState(false)
  return (
    <div id={styles.wrapper}>
        <SelectLanguage/>
        <AllowPi setCloseFingerPrint={setCloseFingerPrint}/>
        {closeFingerPrint && <FingerPrint setCloseFingerPrint={setCloseFingerPrint}/>}
    </div>
  )
}
