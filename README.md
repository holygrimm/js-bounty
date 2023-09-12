# Bank Account Management Website

This simple website allows users to manage their bank accounts, including making deposits, withdrawals, and checking their account balance. It demonstrates the use of JavaScript classes, switch statements, and try-catch-finally statements for handling various banking operations.

## Instructions

1. **Account Information:** When you load the page, you'll see information about your bank account, including the account holder's name, account type, and the current balance.

2. **Deposit:** To make a deposit, enter the amount you want to deposit in the "Deposit Amount" input field and click the "Deposit" button.

3. **Withdraw:** To make a withdrawal, enter the amount you want to withdraw in the "Withdraw Amount" input field and click the "Withdraw" button.

4. **Check Balance:** To check your account balance, simply click the "Check Balance" button.

5. **Error Handling:** The website includes error handling using try-catch-finally statements. If you enter an invalid amount, attempt to withdraw more than your balance, or encounter any other issues, an error message will be displayed, and the transaction will be rolled back.

### JavaScript Class

The website incorporates a JavaScript class named `BankAccount` to manage bank account operations. The class has the following properties:

- `accountHolderName`: Stores the account holder's name.
- `accountType`: Stores the type of the account (e.g., Savings, Checking).
- `balance`: Tracks the current account balance.

### Switch Statements

A `switch` statement is used to determine the action to be performed based on user input. It handles three main actions:

- **Deposit:** The switch case for deposit updates the account balance by adding the deposited amount.

- **Withdraw:** The switch case for withdrawal validates the withdrawal amount, checks for sufficient funds, and updates the account balance accordingly.

- **Check Balance:** The switch case for checking the balance simply returns the current balance.

### Try-Catch-Finally Statements

- Error handling is implemented using `try-catch` blocks to capture and handle exceptions that may occur during deposit and withdrawal operations. For example, attempting to withdraw more than the available balance or entering an invalid amount will trigger errors.

- The `finally` block is used to perform any necessary cleanup actions and ensure that the input fields are cleared after a transaction, whether it was successful or not.

### Walkthrough Example

Let's walk through an example:

1. **Initial State:** When you load the page, you'll see the account holder's name as "John Doe," the account type as "Savings," and the current balance as "$0.00."

2. **Deposit:** Enter an amount (e.g., $100) in the "Deposit Amount" input field and click the "Deposit" button. The balance will be updated to "$100.00," and a success message will be displayed.

3. **Withdraw:** Enter an amount (e.g., $50) in the "Withdraw Amount" input field and click the "Withdraw" button. The balance will be updated to "$50.00," and a success message will be displayed.

4. **Check Balance:** Click the "Check Balance" button to verify that the balance is "$50.00."

5. **Error Handling:** Try withdrawing more money than the available balance, or entering an invalid amount (e.g., a negative value). You'll see error messages indicating the issues, and the transaction won't be processed.

The website provides a user-friendly interface to manage bank accounts while ensuring that errors are gracefully handled and user feedback is provided.

Feel free to use and explore this website to simulate bank account operations while learning about the use of classes, switch statements, and error handling in JavaScript.
