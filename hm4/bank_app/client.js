import { Ivan } from "./human/ivan.js";
import { Petrovich } from "./human/petrovich.js";
import { BankFactory } from "./factory.js";

const dataFactory = new BankFactory();
let human1 = new Ivan();
let human2 = new Petrovich();
const { bank, bankomat } = dataFactory.getData();

//ассоциация
bankomat.setBank(bank);
human1.setBankomat(bankomat);
human2.setBankomat(bankomat);
//добавление новых клиентов
bank.addUser(human1.getName(), 500);
bank.addUser(human2.getName(), 333);
// business logic
//операции
async function human1Start() {
    try {
        await human1.seeBalance()
      //  await human1.addBalanceX(300);
       // await human1.seeBalance();
      //  await human1.withdrawMoney(1000);
        await human1.withdrawMoney(350);
      //  await human1.seeBalance();
    }
    catch (error) { console.log(error); }
};

async function human2Start() {
    try {
        await human2.seeBalance();
        await human2.addBalanceX(17);
      //  await human2.seeBalance();
      //  await human2.withdrawMoney(1000);
        await human2.withdrawMoney(350);
       // await human2.seeBalance();
    }
    catch (err) { console.log(err); }
};

human1Start();
human2Start();

/* 
паттерн адаптер применить.
*/