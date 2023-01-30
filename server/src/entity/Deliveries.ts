import { Entity, PrimaryColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Courier_Data } from './Courier_Data';
import { User } from './User';

@Entity()
export class Deliveries {
	@PrimaryColumn({
		type: 'bigint',
	})
	tracking_number: number;

	@OneToOne(() => User)
	@JoinColumn()
	sender_user_id: User;

	@OneToOne(() => User)
	@JoinColumn()
	courier_user_id: User;

	@OneToOne(() => User)
	@JoinColumn()
	receiver_user_id: User;

	@Column({
		type: 'varchar',
		length: 255,
	})
	from_address: string;

	@Column({
		type: 'varchar',
		length: 255,
	})
	to_address: string;

	@Column({
		type: 'varchar',
		length: 255,
	})
	item_description: string;

	@Column({
		type: 'float',
	})
	item_weight: number;

	@Column()
	receiver_payment_id: boolean;

	@Column({
		type: 'varchar',
		length: 255,
	})
	delivery_status: string;

	@Column({
		type: 'date',
	})
	pickup_date: string;

	@Column({
		type: 'date',
	})
	delivery_date: string;

	@Column({
		type: 'int',
	})
	delivery_code: number;
}
