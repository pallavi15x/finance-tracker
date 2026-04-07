import { useState } from "react";

function TransactionForm() {
  const [formData, setFormData] = useState({
    amount: "",
    type: "expense",
    category: "",
    date: "",
    note: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction:", formData);

    // Reset form
    setFormData({
      amount: "",
      type: "expense",
      category: "",
      date: "",
      note: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Add Transaction
      </h2>

      {/* Amount */}
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      {/* Type */}
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Category */}
      <input
        type="text"
        name="category"
        placeholder="Category (e.g. Food, Salary)"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      {/* Date */}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
        required
      />

      {/* Note */}
      <input
        type="text"
        name="note"
        placeholder="Note (optional)"
        value={formData.note}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;