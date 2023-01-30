import { Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Deliveries } from './Deliveries';
import { User } from './User';

@Entity()
export class Transaction_Request {
	@PrimaryColumn()
	trans_request_id: number;

	@OneToOne(() => Deliveries)
	@JoinColumn()
	transaction_request_id: Deliveries;

	@Column()
	sender_user_id: string;

	@OneToOne(() => User)
	@JoinColumn()
	receiver_user_id: User;

	@Column({
		type: 'varchar',
		length: 255,
	})
	address_from: string;

	@Column({
		type: 'varchar',
		length: 255,
	})
	address_to: string;

	@Column({
		type: 'varchar',
		length: 255,
	})
	item_description: string;

	@Column({
		type: 'float',
	})
	item_weight: number;

	@Column({
		type: 'bigint',
	})
	payment_amount: number;
}
