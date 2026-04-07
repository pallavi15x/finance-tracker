import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-6">
          💰 Finance Tracker
        </h1>

        <TransactionForm />

      </div>
    </div>
  );
}

export default App;