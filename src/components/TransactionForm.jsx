import { useState } from "react";


    function TransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    amount: "",
    type: "expense",
    category: "",
    date: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  addTransaction(formData); // 🔥 send data to App

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
      className="bg-white p-6 rounded-2xl shadow-lg mb-6 border"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        ➕ Add Transaction
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        
        {/* Amount */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="income">💰 Income</option>
            <option value="expense">💸 Expense</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Food, Salary, Travel..."
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

      </div>

      {/* Note */}
      <div className="mt-4">
        <label className="block text-sm text-gray-600 mb-1">
          Note
        </label>
        <input
          type="text"
          name="note"
          placeholder="Optional note..."
          value={formData.note}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;