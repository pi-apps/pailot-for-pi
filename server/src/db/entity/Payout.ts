import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { PaymentStatus } from '../../interfaces/payment';
import { Courier } from './Courier';

@Entity({ name: 'payouts' })
export class Payout {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ManyToOne(() => Courier)
	@JoinColumn({ name: 'courier_user_id' })
	courierUserId: Courier;

	@Column({ type: 'varchar', length: 255, name: 'payment_id', nullable: true })
	PaymentId: string;

	@Column({ type: 'bigint' })
	amount: number;

	@Column({
		type: 'enum',
		enum: PaymentStatus,
		name: 'payment_status',
		default: PaymentStatus.CREATED,
	})
	paymentStatus: PaymentStatus;

	@Column({ type: 'varchar', name: 'transaction_id', nullable: true })
	transactionId: string;
}
