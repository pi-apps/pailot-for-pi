import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from './Transaction';

@Entity({ name: 'couriers' })
export class Courier {
	@PrimaryColumn('uuid', { name: 'courier_user_id' })
	courierUserId: string;

	@OneToMany(() => Transaction, (transaction) => transaction.courierUserId)
	deliveries: Transaction[];

	@Column({ type: 'int', name: 'number_of_likes', default: 0 })
	numberOfLikes: number;

	@Column({ type: 'float4', name: 'rating', default: 0.0 })
	rating: number;

	@Column({ type: 'varchar', length: 255, name: 'mode_of_transportation' })
	modeOfTransportation: string;

	@Column({ type: 'varchar', length: 255, name: 'active_address1' })
	activeAddress1: string;

	@Column({ type: 'varchar', length: 255, name: 'xactive_address2' })
	activeAddress2: string;

	@Column({ type: 'float64', name: 'earnings', default: 0.0 })
	earnings: number;
}
