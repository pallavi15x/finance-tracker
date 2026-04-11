import { useState, useEffect } from "react";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";

function App() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (data) => {
    const newTransaction = {
      id: Date.now(),
      ...data,
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((item) => item.id !== id)
    );
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

        {/* HEADER */}
        <div className="flex justify-between items-center p-4 max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            💰 Finance Tracker
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="max-w-5xl mx-auto p-4">

          <Summary transactions={transactions} />

          <TransactionForm addTransaction={addTransaction} />

          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />

          <Charts transactions={transactions} />

        </div>
      </div>
    </div>
  );
}

export default App;