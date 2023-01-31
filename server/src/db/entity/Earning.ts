import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Transaction } from './Transaction';

export enum paymentStatus {
	CREATED = 'created',
	SUBMITTED = 'submitted',
	COMPLETED = 'completed',
}

@Entity()
export class Earning {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@OneToOne(() => Transaction)
	@JoinColumn()
	delivery: Transaction;

	@Column({ type: 'varchar', length: 255, name: 'payment_id', nullable: true })
	PaymentId: string;

	@Column({ type: 'bigint' })
	amount: number;

	@Column({ type: 'enum', length: 255, name: 'payment_status', default: paymentStatus.CREATED })
	paymentStatus: paymentStatus;

	@Column({ type: 'varchar', name: 'transaction_id', nullable: true })
	transactionId: string;
}
