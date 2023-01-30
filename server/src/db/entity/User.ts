import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
	@PrimaryColumn('uuid', { name: 'user_uid' })
	userUid: string;

	@Column({ type: 'varchar', length: 255 })
	username: string;

	@Column({ name: 'first_name', type: 'varchar', length: 255 })
	firstName: string;

	@Column({ name: 'last_name', type: 'varchar', length: 255 })
	lastName: string;

	@Column({ name: 'wallet_address', type: 'varchar', length: 255 })
	walletAddress: string;

	@Column({ name: 'user_role', type: 'int' })
	userRole: number;

	@Column({ name: 'profile_img', type: 'json' })
	profileImg: string;

	@Column({ name: 'phone_number', type: 'int', unique: true })
	phoneNumber: number;

	@Column({ type: 'varchar', length: 255 })
	address: string;

	@Column({ name: 'access_token', type: 'varchar', length: 255, unique: true })
	accessToken: string;
}
