import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Charts({ transactions }) {
  // Filter only expenses
  const expenses = transactions.filter((t) => t.type === "expense");

  // Category-wise data (Pie)
  const categoryData = Object.values(
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = {
          name: curr.category,
          value: 0,
        };
      }
      acc[curr.category].value += Number(curr.amount);
      return acc;
    }, {})
  );

  // Monthly data (Bar)
  const monthlyData = Object.values(
    expenses.reduce((acc, curr) => {
      const month = new Date(curr.date).toLocaleString("default", {
        month: "short",
      });

      if (!acc[month]) {
        acc[month] = {
          month,
          amount: 0,
        };
      }

      acc[month].amount += Number(curr.amount);
      return acc;
    }, {})
  );

  const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b", "#06b6d4"];

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          🥧 Expense by Category
        </h2>

        <PieChart width={300} height={300}>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {categoryData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">
          📊 Monthly Expenses
        </h2>

        <BarChart width={350} height={300} data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#6366f1" />
        </BarChart>
      </div>

    </div>
  );
}

export default Charts;