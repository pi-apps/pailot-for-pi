import React from 'react';
import styles from './FingerPrint.module.css'
import { RiFingerprintFill, GrFormClose, BiError } from '../../../assets/icons'


type Props = {
  setCloseFingerPrint: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FingerPrint = ({ setCloseFingerPrint }: Props) => {
  const handleClose = () => {
    setCloseFingerPrint(false)
  }
  return (
    <div className={styles.finger_print_wrapper}>
      <div className={styles.closeWrapper}>
        <GrFormClose className={styles.closeIcon} onClick={handleClose} />
      </div>

      <h3>Device Protection</h3>
      <p>We want to make sure your account is protected by confirming your  device fingerprints, patterns, or pincode</p>
      <h4>Scan your fingerprint</h4>
      <RiFingerprintFill className={styles.fingerPrintIcon} />
      <div className={styles.error}>
        <BiError className={styles.errorIcon} />
        <span>Try again! Place your finger properly in the sensor</span></div>
    </div>
  )
}


