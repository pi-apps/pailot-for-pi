import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './User';

export enum paymentStatus {
	CREATED = 'created',
	SUBMITTED = 'submitted',
	COMPLETED = 'completed',
}

@Entity()
export class Payout {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'courier_user_id' })
	courierUserId: User;

	@Column({ type: 'varchar', length: 255, name: 'payment_id', nullable: true })
	PaymentId: string;

	@Column({ type: 'bigint' })
	amount: number;

	@Column({ type: 'enum', length: 255, name: 'payment_status', default: paymentStatus.CREATED })
	paymentStatus: paymentStatus;

	@Column({ type: 'varchar', name: 'transaction_id', nullable: true })
	transactionId: string;
}
