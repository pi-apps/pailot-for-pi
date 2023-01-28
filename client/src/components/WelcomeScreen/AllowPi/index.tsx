import React from 'react'
import { useState } from 'react'
import styles from './AllowPi.module.css'
import { logo } from '../../../assets/images'

type Props = {
  setCloseFingerPrint: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AllowPi = ({ setCloseFingerPrint }: Props) => {
  const [toggleActive, setToggleActive] = useState(false)
  const handleCheckbox = () => {
    setToggleActive(!toggleActive)
  }

  const handleAllowPi = () => {
    if (toggleActive == true) {
      setCloseFingerPrint(true)
    }
  }
  return (
    <div className={styles.allowPi}>
      <img src={logo} />
      <h3>Welcome to Pailot!</h3>
      <p>Pailot connect your Pi Network account to experience the best web 3 delivery service</p>
      <div className={styles.tick}>
        <input type="checkbox" onChange={handleCheckbox} /><p>I agree to allow Pailot connect to my Pi account </p>
      </div>
      <button onClick={handleAllowPi} className={`${styles.allowBtn} ${toggleActive ? styles.allowBtnActive : styles.allowBtnInactive}`}>Allow Pi Network</button>
      <p className={styles.terms}>Learn more about Pailot <a href="#terms">terms and conditions</a></p>
    </div>
  )
}
