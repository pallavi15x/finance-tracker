function TransactionList({ transactions, deleteTransaction }) {
  if (transactions.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No transactions yet
      </p>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
        📋 Transactions
      </h2>

      <div className="space-y-3">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border dark:border-gray-700 p-3 rounded-lg"
          >
            {/* Left Side */}
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {item.category} ({item.type})
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.date}
              </p>

              {item.note && (
                <p className="text-xs text-gray-400">
                  {item.note}
                </p>
              )}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <p
                className={`font-semibold text-lg ${
                  item.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ₹{item.amount}
              </p>

              <button
                onClick={() => deleteTransaction(item.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;