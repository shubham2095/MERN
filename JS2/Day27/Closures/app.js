// function counter() {
//  let count = 2850
 
//  return {
//     inc : () => {
//         count++
//         console.log(count);
//     },
//     dec : () => {
//         count--
//         console.log(count);
//     },
//     res : () => {
//         count = 0
//         console.log(count);
//     }
//   }
// }

// const counterobj = counter()

// counterobj.inc()
// counterobj.inc()
// counterobj.inc()
// counterobj.inc()
// counterobj.inc()
// counterobj.inc()



// counterobj.dec()
// counterobj.dec()
// counterobj.dec()


// counterobj.res()


// counterobj.inc()



function bankAccount(bal, userPin)
{
    let balance = bal
    const pin = userPin

    return {
        checkBalance : () => {
            console.log(balance)
        },
        deposit : (amount) => {
            balance += amount
            console.log(`Total Balance : ${balance}`)
        },
        withdraw : (enteredPin, amount) => {
            if(pin != enteredPin)
            {
                console.log("Invalid PIN")
                return
            }

            if(amount > balance)
            {
                console.log("Invalid amount, balance is", balance)
                return
            }

            balance -= amount
            console.log(balance)
        }
    }
}



const bankAccObj = bankAccount(999, 1234)

bankAccObj.checkBalance()
bankAccObj.deposit(1000)
bankAccObj.withdraw(1234, 1000)