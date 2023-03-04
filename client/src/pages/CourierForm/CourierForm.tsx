import { useState, useRef } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import styles from './CourierForm.module.css';
import { useNavigate } from 'react-router-dom';
import { GiCancel } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { userCourierDetailsActions, userDetailsActions } from '../../store/store';

export const CourierForm = () => {
	const [validated, setValidated] = useState<boolean>(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const modRef = useRef<HTMLSelectElement>(null);
	const startTimeRef = useRef<HTMLInputElement>(null);
	const endTimeRef = useRef<HTMLInputElement>(null);
	const regionRef = useRef<HTMLSelectElement>(null);
	const amountRef = useRef<HTMLInputElement>(null);
	const validityChecker = () => {
		// console.log(startTimeRef.current?.value);
		if (
			!modRef.current?.value ||
			regionRef.current?.value === '' ||
			amountRef.current?.value === '0' ||
			amountRef.current?.value === '' ||
			startTimeRef.current?.value === '' ||
			endTimeRef.current?.value === ''
		) {
			setValidated(false);
		}
		if (
			modRef.current?.value &&
			regionRef.current?.value !== '' &&
			amountRef.current?.value !== '0' &&
			amountRef.current?.value !== '' &&
			startTimeRef.current?.value !== '' &&
			endTimeRef.current?.value !== ''
		) {
			setValidated(true);
		}
	};

	const onSubmitHandler = () => {
		// if (!validated) return;

		dispatch(
			userCourierDetailsActions.setUserCourierDetails({
				modeOfTransportation: modRef.current?.value,
				regionOfOperation: regionRef.current?.value,
				startTime: startTimeRef.current?.value,
				endTime: endTimeRef.current?.value,
				amount: amountRef.current?.value,
			})
		);
		dispatch(userDetailsActions.setIsCourier());
		navigate('/home');
	};
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<HiOutlineArrowLeft onClick={() => [navigate('/home')]} />
				<span>BECOME A COURIER</span>
			</div>
			<form className={styles.form}>
				<p>Fill in your Courier data</p>
				<label htmlFor="Mode Of Transportation" className={styles.label}>
					<p>Mode of Transportation</p>
					<select
						name="Mode Of Transportation"
						className={styles.select}
						ref={modRef}
						onChange={() => {
							validityChecker();
						}}
					>
						<option value="Foot">Foot</option>
						<option value="Bicycle">Bicycle</option>
						<option value="Drone">Drone</option>
						<option value="Motorbike">Motorbike</option>
						<option value="Tricycle">Tricycle</option>
						<option value="Car">Car</option>
						<option value="Truck">Truck</option>
					</select>
				</label>
				<label htmlFor="Region Of Operation" className={styles.label}>
					<p>Region Of Operation</p>
					<div>
						<select
							className={styles.select}
							ref={regionRef}
							onChange={() => {
								validityChecker();
							}}
						>
							<option value="Local">Local</option>
							<option value="Interstate">Interstate</option>
						</select>
					</div>
				</label>

				<div className={styles.time__of__service}>
					<label htmlFor="Start Time" className={styles.label}>
						<p>Start Time</p>
						<input
							type="time"
							name="Start Time"
							className={styles.input}
							ref={startTimeRef}
							onChange={validityChecker}
						/>
					</label>
					<label htmlFor="End Time" className={styles.label}>
						<p>End Time</p>
						<input
							type="time"
							name="End Time"
							className={styles.input}
							ref={endTimeRef}
							onChange={validityChecker}
						/>
					</label>
				</div>
				<label htmlFor="Amount In Pi" className={styles.label}>
					<p>Amount In Pi</p>
					<div>
						<input
							type="number"
							className={styles.input}
							ref={amountRef}
							placeholder="8"
							onChange={() => {
								validityChecker();
							}}
						/>
						<GiCancel
							onClick={() => {
								if (amountRef.current) {
									amountRef.current.value = '0';
								}
							}}
						/>
					</div>
				</label>
				{!validated && <button className={styles.disabled__cta}>CONFIRM</button>}
				{validated && (
					<button
						type="button"
						className={styles.cta}
						onClick={() => {
							onSubmitHandler();
						}}
					>
						CONFIRM
					</button>
				)}
			</form>
		</div>
	);
};
