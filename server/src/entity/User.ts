import { Entity, PrimaryColumn,OneToMany, Column } from "typeorm"
import { Transaction_Request } from "./Transaction_Requests"

@Entity()
export class User {

    @PrimaryColumn({
        type: "uuid"
    })
    user_uid: string

    @Column()
    sender_user_id: string


    @Column({
        type: "varchar",
        length: 255,
    })
    username: string

     @Column({
        type: "varchar",
        length: 255,
    })
    first_name: string

     @Column({
        type: "varchar",
        length: 255,
    })
    last_name: string

     @Column({
        type: "varchar",
        length: 255,
    })
    wallet_address: string

     @Column({
        type: "int",
    })
    user_role: number

     @Column({
        type: "json",
    })
    profile_img: string

     @Column({
        type: "int",
    })
    phone_number: number

     @Column({
        type: "varchar",
        length: 255,
    })
    address: string

     @Column({
        type: "varchar",
        length: 255,
    })
    access_token: string

   

}
