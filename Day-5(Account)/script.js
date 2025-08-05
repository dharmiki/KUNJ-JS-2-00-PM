 class account{
 constructor(   accountNumber, accountHol,balance)
 {

    this.accountNumber= accountNumber,
    this.accountHol=accountHol,
    this.balance=balance
 } 

 checkBalance(){
    return `current balance the ${this.balance}`

 }


deposit(amount){
    return this.balance+=amount;

 }

 withdraw(amount){
    if(amount >this.balance){
        return `Deducts money from the balance if there are sufficient funds.`
    }
    else{
        return `suddicient funds`
    }


 }
}


 const acc=new account("98765","unnati",10000);
 console.log(acc.checkBalance())

 console.log(`Adds money to the balance `+ acc.deposit(200))
 console.log(acc.withdraw(2000));

