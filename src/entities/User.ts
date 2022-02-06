import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  name!: string;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  isAdm!: boolean;

  @Column()
  createdOn!: Date;
  @BeforeInsert()
  createdDate() {
    let date = new Date();
    this.createdOn = date;
  }

  @Column({ nullable: true })
  updatedOn!: Date;
}
