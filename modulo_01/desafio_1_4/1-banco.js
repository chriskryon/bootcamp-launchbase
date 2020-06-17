const user = {
    name: '',
    transactions: [],
    balance: 0,
};

const createTransaction = transaction => {
    if (transaction.type === 'credit') {
        user.balance += transaction.value;
    } else {
        user.balance -= transaction.value;
    }
    
    user.transactions.push(transaction);
};

const filterTypeTransactions = type => {
    let filter = user.transactions.filter(
        function(typeToFilter) {
            return typeToFilter.type === type;
        }
    );
    return filter;
}

const getHigherTransactionByType = type => {
    filteredTransactions = filterTypeTransactions(type);

    let highest = -Infinity;
    let highestTransaction = {};

    for (transaction of filteredTransactions) {
        if (transaction.value > highest) {
            highest = transaction.value;
            highestTransaction = transaction;
        }
    }

    return highestTransaction;
};

const getAverageTransactionValue = transactions => {
    let sum = 0;

    for (transaction of transactions) {
        sum += transaction.value;
    }

    return sum / transactions.length;
};

const getTransactionsCount = () => {
    creditTransactions = filterTypeTransactions('credit').length;
    debitTransactions = filterTypeTransactions('debit').length;

    return {
        credit: creditTransactions,
        debit: debitTransactions,
    };
};

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue(user.transactions)); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }