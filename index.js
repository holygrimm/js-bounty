class BankAccount {
    constructor(accountHolderName, accountType) {
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Invalid deposit amount");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || isNaN(amount)) {
            throw new Error("Invalid withdrawal amount");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }

    checkBalance() {
        return this.balance;
    }
}

let currentAccount;

window.onload = function () {
    currentAccount = new BankAccount("John Doe", "Savings");

    document.getElementById("depositBtn").addEventListener("click", function () {
        try {
            const depositAmount = parseFloat(document.getElementById("depositAmount").value);
            currentAccount.deposit(depositAmount);
            document.getElementById("balance").textContent = currentAccount.checkBalance().toFixed(2);
            document.getElementById("message").textContent = "Deposit successful.";
            document.getElementById("message").classList.remove("error");
        } catch (error) {
            document.getElementById("message").textContent = "Error: " + error.message;
            document.getElementById("message").classList.add("error");
        } finally {
            document.getElementById("depositAmount").value = "";
        }
    });

    document.getElementById("withdrawBtn").addEventListener("click", function () {
        try {
            const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
            currentAccount.withdraw(withdrawAmount);
            document.getElementById("balance").textContent = currentAccount.checkBalance().toFixed(2);
            document.getElementById("message").textContent = "Withdrawal successful.";
            document.getElementById("message").classList.remove("error");
        } catch (error) {
            document.getElementById("message").textContent = "Error: " + error.message;
            document.getElementById("message").classList.add("error");
        } finally {
            document.getElementById("withdrawAmount").value = "";
        }
    });

    document.getElementById("checkBalanceBtn").addEventListener("click", function () {
        const balance = currentAccount.checkBalance();
        document.getElementById("balance").textContent = balance.toFixed(2);
        document.getElementById("message").textContent = "Balance checked.";
        document.getElementById("message").classList.remove("error");
    });
};
