import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { UserRole } from '../../interfaces/user';
import { Payout } from './Payout';
import { Transaction } from './Transaction';

@Entity({ name: 'users' })
export class User {
	@PrimaryColumn('uuid', { name: 'user_uid' })
	userUid: string;

	@Column({ type: 'varchar', length: 255 })
	username: string;

	@Column({ name: 'wallet_address', type: 'varchar', length: 255, nullable: true })
	walletAddress: string;

	@Column({ name: 'user_role', enum: UserRole, type: 'enum', default: UserRole.USER })
	userRole: UserRole;

	@Column({ name: 'image_public_id', type: 'varchar', nullable: true })
	imagePublicId: string;

	@Column({ name: 'profile_img', type: 'varchar', nullable: true })
	profileImg: string;

	@Column({ name: 'access_token', type: 'varchar', length: 255, unique: true })
	accessToken: string;

	@OneToMany(() => Transaction, (transaction) => transaction.senderUserId)
	senderUserId: Transaction;

	@OneToMany(() => Transaction, (transaction) => transaction.receiverUserId)
	receiverUserId: Transaction;

	@OneToMany(() => Payout, (payout) => payout.courierUserId)
	courierUserId: Payout;
}
