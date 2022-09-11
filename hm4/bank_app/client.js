import { Ivan } from "./human/ivan.js";
import { BankFactory } from "./factory.js";

const dataFactory = new BankFactory();
let human1 = new Ivan();
const { bank, bankomat } = dataFactory.getData();

//ассоциация
bankomat.setBank(bank);
human1.setBankomat(bankomat);

//добавление новых клиентов
bank.addUser(human1.getName(), 500);
// business logic
//операции
human1.seeBalance();
human1.addBalanceX(300);
human1.seeBalance();
human1.withdrawMoney(1000);
human1.withdrawMoney(500);
human1.seeBalance();