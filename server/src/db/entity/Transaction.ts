import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Courier } from './Courier';
import { Earning } from './Earning';
import { User } from './User';

export enum DeliveryStatus {
	CREATED = 'Created',
	PENDING = 'Pending',
	ACCEPTED = 'Accepted',
	REJECTED = 'Rejected',
	PICKED_UP = 'Picked up',
	IN_TRANSIT = 'In Transit',
	DELIVERED = 'Delivered',
}

@Entity({ name: 'transactions' })
export class Transaction {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ type: 'bigint', name: 'tracking_number', nullable: true })
	trackingNumber: number; // Generate a tracking number when the delivery is accepted.

	@ManyToOne(() => User, (user) => user.userUid)
	@JoinColumn({ name: 'sender_user_id' })
	senderUserId: User;

	@ManyToOne(() => Courier, (courierData) => courierData.deliveries, {
		nullable: true,
	})
	@JoinColumn({ name: 'courier_user_id' })
	courierUserId: Courier;

	@ManyToOne(() => User, (user) => user.userUid)
	@JoinColumn({ name: 'receiver_user_id' })
	receiverUserId: User;

	@Column({ type: 'varchar', length: 255, name: 'from_address' })
	fromAddress: string;

	@Column({ type: 'varchar', length: 255, name: 'to_address' })
	toAddress: string;

	@Column({ type: 'varchar', length: 255, name: 'item_description' })
	itemDescription: string;

	@Column({ type: 'float', name: 'item_weight' })
	itemWeight: number;

	@Column({ type: 'bigint', name: 'amount' })
	amount: number;

	@Column({
		type: 'enum',
		enum: DeliveryStatus,
		name: 'delivery_status',
		default: DeliveryStatus.CREATED,
	})
	deliveryStatus: DeliveryStatus;

	@Column({ type: 'date', nullable: true, name: 'pickup_date' })
	pickupDate: Date;

	@Column({ type: 'date', name: 'delivery_date', nullable: true })
	deliveryDate: Date;

	@Column({ type: 'int', name: 'delivery_code', unique: true, nullable: true })
	deliveryCode: number;

	@ManyToOne(() => Earning, (earning) => earning.delivery, {
		nullable: true,
	})
	@JoinColumn({ name: 'payment_id' })
	paymentId: Earning;
}
