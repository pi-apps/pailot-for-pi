import { Entity, PrimaryColumn, Column, OneToOne,OneToMany,ManyToOne,JoinColumn, } from "typeorm"
import { Deliveries } from "./Deliveries"

@Entity()
export class Courier_Data {

    @PrimaryColumn()
    courier_user_id:string
     
    @OneToOne(() => Deliveries)
    @JoinColumn()
    receiver_user_id: Deliveries

    @Column({
        type: "int",
    }) 
    number_of_likes: number

    @Column({
        type: "int",
    })
    rating: number

    @Column({
        type: "varchar",
        length: 255,
    })
    mode_of_transportation: string

    @Column({
        type: "varchar",
        length: 255,
    })
    active_address1: string

    @Column({
        type: "varchar",
        length: 255,
    })
    active_address2: string

    @Column({
        type: "bigint",
    })
    earnings: number


}