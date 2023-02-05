import React from 'react'
import { BsCheckLg, BsInfoLg, GrStatusWarning, BiError } from '../../../assets/icons';
import Styles from './AlertModal.module.css'
import { motion } from 'framer-motion';
import useAlertModal from './useAlertModal';

interface Props {
    title: string,
    type: string;
    message?: string;
    duration?: number;
    setOnClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertModal = ({ title, type, message, duration, setOnClose }: Props) => {
    const { handleClose} = useAlertModal(setOnClose)
    return (
        <div>
            <div>
                <h3 className={Styles.title}>
                    {title}
                </h3>
                <p className={Styles.message}>{message}</p>

                {type == 'success' && <div>
                    <div>
                        <BsCheckLg />
                    </div>
                </div>}

                {type == 'info' && <div>
                    <div>
                        <BsInfoLg />
                    </div>
                </div>}

                {type == 'warning' && <div>
                    <div>
                        <GrStatusWarning />
                    </div>
                </div>}

                {type == 'error' && <div>
                    <div>
                        <BiError />
                    </div>
                </div>}
               {duration && <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: duration }}
                    onAnimationComplete={() => handleClose}
                    className={Styles.progress_bar}
                >
                    </motion.div>}
            </div>
        </div>
    )
}
