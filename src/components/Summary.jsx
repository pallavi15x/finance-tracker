function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">

      {/* Balance */}
      <div className="p-5 rounded-xl bg-indigo-500 text-white">
        <h3>Total Balance</h3>
        <p>₹{balance}</p>
      </div>

      {/* Income */}
      <div className="p-5 rounded-xl bg-green-500 text-white">
        <h3>Income</h3>
        <p>₹{income}</p>
      </div>

      {/* Expense */}
      <div className="p-5 rounded-xl bg-red-500 text-white">
        <h3>Expense</h3>
        <p>₹{expense}</p>
      </div>

    </div>
  );
}

export default Summary;