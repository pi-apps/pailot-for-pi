/* eslint-disable no-unused-vars */
import styles from './DeliveryPayment.module.css';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fetchWithCredentials } from '../../hooks/useApi';
import {
	APPROVE_PAYMENT_URL,
	CANCELLED_PAYMENT_URL,
	COMPLETE_PAYMENT_URL,
	CREATE_TRANSACTION_URL,
	INCOMPLETE_PAYMENT_URL,
} from '../../constants/url.constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deliveryDetailsActions, RootState } from '../../store/store';
import axios from 'axios';
import { convertStringToNumber } from '../../utils/utils';
import { PaymentDTO } from '../../types/payment';

interface Props {
	setProgress: Dispatch<SetStateAction<number>>;
	uploadedImage: File | undefined;
}

// const NETWORK_FEE = 0.003;
const PLATFORM_FEE = 0.001;

export const DeliveryPayment: React.FC<Props> = ({ setProgress, uploadedImage }) => {
	const [transactionAmount, setTransactionAmount] = useState<number>(0);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const deliveryDetails = useSelector((state: RootState) => state.deliveryDetails);

	const handlePayment = async () => {
    try {
      const transaction = await handleSubmitTransaction();

      const onIncompletePaymentFound = async (payment: PaymentDTO) => {
        console.log('onIncompletePaymentFound', payment);
        return await fetchWithCredentials(INCOMPLETE_PAYMENT_URL, {
          method: 'POST',
          data: { payment },
        });
      };

      const onReadyForServerApproval = async (paymentId: string) => {
        console.log('onReadyForServerApproval', paymentId);
        return await fetchWithCredentials(APPROVE_PAYMENT_URL, {
          method: 'POST',
          data: { paymentId, deliveryId: transaction.id },
        });
      };

      const onReadyForServerCompletion = async (paymentId: string, txid: string) => {
        console.log('onReadyForServerCompletion', paymentId, txid);
        return await fetchWithCredentials(COMPLETE_PAYMENT_URL, {
          method: 'POST',
          data: { paymentId, txid },
        });
      };

      const onCancel = async (paymentId: string) => {
        console.log('onCancel', paymentId);
        return await fetchWithCredentials(CANCELLED_PAYMENT_URL, {
          method: 'POST',
          data: { paymentId },
        });
      };

      const onError = (error: Error, payment?: PaymentDTO) => {
        console.log('onError', error);
        if (payment) {
          console.log(payment);
          // handle the error accordingly
        }
      };

      const paymentData = {
        amount: transaction.transactionAmount,
        memo: transaction.itemName,
        metadata: {
          deliveryId: transaction.id,
        },
      };
      const callbacks = {
        onReadyForServerApproval,
        onReadyForServerCompletion,
        onCancel,
        onError,
      };
      console.log(window);
      const payment = await window.Pi.createPayment(paymentData, callbacks);
      console.log(payment);
      setProgress(8);
    } catch (error) {
      console.log(error);
    }

	};

	const handleSubmitTransaction = async () => {
		const formData = new FormData();
		const transactionData = {
			senderUserId: '64f51653-6e50-40db-80bf-087461a130bf',
			courierUserId: deliveryDetails.deliveryDetails.courierDetails.courierUserId,
			receiverUserId: deliveryDetails.deliveryDetails.receiverDetails.receiverUserId,
			preferredModeOfDelivery: deliveryDetails.deliveryDetails.modeOfDelivery.join(','),
			fromAddress: deliveryDetails.deliveryDetails.pickupLocation,
			toAddress: deliveryDetails.deliveryDetails.dropLocation,
			itemImage: uploadedImage ? uploadedImage : '',
			itemName: deliveryDetails.deliveryDetails.productName,
			itemDescription: deliveryDetails.deliveryDetails.description,
			itemWeight: convertStringToNumber(deliveryDetails.deliveryDetails.weight),
			itemSize: convertStringToNumber(deliveryDetails.deliveryDetails.size),
			transactionAmount: transactionAmount,
			itemCategory: deliveryDetails.deliveryDetails.category,
			deliveryRange: deliveryDetails.deliveryDetails.deliveryRegion,
		};
		formData.append('senderUserId', transactionData.senderUserId);
		formData.append('courierUserId', transactionData.courierUserId);
		formData.append('receiverUserId', transactionData.receiverUserId);
		formData.append('preferredModeOfDelivery', transactionData.preferredModeOfDelivery);
		formData.append('fromAddress', transactionData.fromAddress);
		formData.append('toAddress', transactionData.toAddress);
		formData.append('image', transactionData.itemImage);
		formData.append('itemName', transactionData.itemName);
		formData.append('itemDescription', transactionData.itemDescription);
		formData.append('itemWeight', `${transactionData.itemWeight}`);
		formData.append('itemSize', `${transactionData.itemSize}`);
		formData.append('transactionAmount', `${transactionData.transactionAmount}`);
		formData.append('itemCategory', transactionData.itemCategory);
		formData.append('deliveryRange', transactionData.deliveryRange);
    console.log(formData);
		try {
			const transaction = await fetchWithCredentials(CREATE_TRANSACTION_URL, {
				method: 'POST',
				data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        }
			});
			console.log(transaction);
			return transaction.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 401) {
					navigate('/welcome');
				}
				throw error;
			}
			throw error;
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							setProgress(6);
						}}
					/>
				</div>
				<span>Payment</span>
			</div>
			<div className={styles.body}>
				<p className={styles.description}>
					Final stop! Tell Pailot how much Pi you are willing to pay
				</p>
				<h4 className={styles.header}>Pay with Pi</h4>

				<label htmlFor="Amount" className={styles.label}>
					<p>Amount</p>
					<div>
						<motion.div
							initial={{ x: '-100vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								duration: 0.5,
								type: 'tween',
							}}
							className={styles.input__container}
						>
							<input
								value={transactionAmount}
								type="number"
								name="Amount"
								placeholder="0.00000"
								onChange={(e) => {
									setTransactionAmount(Number(e.target.value));
									dispatch(deliveryDetailsActions.setTransactionAmount(Number(e.target.value)));
								}}
							/>
						</motion.div>
					</div>
					<span>Amount should not be less than 0.006</span>
				</label>
				<div className={styles.charges}>
					<div className={styles.fees}>
						{/* <div>
							<p>Network fee:</p>
							<span>{NETWORK_FEE}</span>
						</div> */}
						<div>
							<p>Platform fee:</p>
							<span>{PLATFORM_FEE}</span>
						</div>
					</div>
					<div className={styles.total}>
						<p>Total</p>
						<span>{transactionAmount + PLATFORM_FEE}</span>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.5,
					duration: 0.3,
				}}
				className={styles.cta__container}
			>
				<button
					type="button"
					className={styles.cta}
					onClick={handlePayment}
				>
					Pay with Pi
				</button>
			</motion.div>
		</div>
	);
};
