import { expect } from "chai";
import argon2 from "@node-rs/argon2";
import pg from "pg";
import { PasswordService, PostgresUserDao } from "../src/testable4.mjs";

// The basic connection setup and close are tested implicitly

{
  let dao = PostgresUserDao.getInstance();
  await dao.db.query(`delete from users;`);
  await dao.db.query(
    `insert into users (user_id, password_hash)
      values ($1, $2);`,
    [313, argon2.hashSync("AkuAnkka")]
  );
}

await describe("Testable 4: enterprise application", async () => {
  let service;
  let dao;
  before(() => {
    service = new PasswordService();
    dao = service.users;
  });

  after(async ()  => {
    await PostgresUserDao.getInstance().close();
  });

  it("read user", async () => {
    let result = await dao.getById(313);
    expect(result).to.be.an("object");
    expect(result).to.have.property("passwordHash");
    expect(/^\$argon2id\$/.test(result.passwordHash)).to.be.true;
  });

  it("save user", async () => {
    await dao.save({userId: 666, passwordHash: "Kukkuu"})
    let result = await dao.getById(666);
    expect(result).to.be.an("object");
    expect(result).to.have.property("passwordHash");
    expect(result.passwordHash).to.equal("Kukkuu");
  });

  it("change password", async () => {
    let original = await dao.getById(313);
    await service.changePassword(313, "AkuAnkka", "Aku-setä");
    let result = await dao.getById(313);
    expect(result).to.be.an("object");
    expect(result).to.have.property("passwordHash");
    expect(/^\$argon2id\$/.test(result.passwordHash)).to.be.true;
    expect(result.passwordHash).to.not.equal(original.passwordHash);
  });
});
