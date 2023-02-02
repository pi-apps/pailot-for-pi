import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Courier } from './Courier';
import { User } from './User';

@Entity({ name: 'user_couriers' })
export class UserCourier {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@OneToOne(() => User, (user) => user.userUid, {
		eager: true,
		cascade: true,
		nullable: true,
	})
	@JoinColumn({ name: 'user' })
	user: User;

	@OneToOne(() => Courier, (courier) => courier.courierUserId, {
		eager: true,
		cascade: true,
		nullable: true,
	})
	@JoinColumn({ name: 'courier' })
	courier: Courier;
}
