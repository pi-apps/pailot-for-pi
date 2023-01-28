import "reflect-metadata"
import { DataSource } from "typeorm"
import env from "./constants/environments"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: "Pailot",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
