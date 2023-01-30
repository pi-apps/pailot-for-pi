import { Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Deliveries } from './Deliveries';
import { User } from './User';

@Entity()
export class Payment {
	@PrimaryColumn()
	tracking_Number_id: number;

	@OneToOne(() => User)
	@JoinColumn()
	tracking_number: User;

	@OneToOne(() => User)
	@JoinColumn()
	sender_user_id: User;

	@OneToOne(() => User)
	@JoinColumn()
	courier_user_id: User;

	@Column({
		type: 'varchar',
		length: 255,
	})
	sender_payment_id: string;

	@Column({
		type: 'varchar',
		length: 255,
	})
	carrier_payment_id: string;

	@Column({
		type: 'bigint',
	})
	amount: number;

	@Column({
		type: 'varchar',
		length: 255,
	})
	payment_status: string;

	@Column({
		type: 'date',
	})
	payment_date_success: string;

	@Column({
		type: 'bigint',
	})
	sender_payment_txid: number;

	@Column({
		type: 'bigint',
	})
	courier_payment_txid: number;
}
