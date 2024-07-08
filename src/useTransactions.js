import { useContext } from "react";
import { TransactionTrackerContext } from './context/context';
import { receiptsCategories, payablesCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(TransactionTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Receipts' ? receiptsCategories : payablesCategories;

    console.log({ transactionsPerType, total, categories });

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)

        if(category) category.amount += t.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0);    //remove the categories whose amount is 0 because we dont need them in chart

    const chartData = {
        datasets : [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }

    return { total, chartData };
}

export default useTransactions;

  //Adding to the total amount for each type (receipts, payables) as well as adding it to the categories from categories.js in which the initial amount is 0 to know which type of buisness amount is being totaled. 
  //{ type: 'Air Ticket', amount: 0, color: receiptsColors[0] }