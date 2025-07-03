// src/App.jsx
function App() {
  return (
    <div className="min-h-screen bg-white text-center text-gray-800">
      <header className="mb-10 py-6 bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
        <h1 className="text-4xl font-bold">MostraKi</h1>
        <p className="mt-2 text-lg">
          Início | Sobre | Contato
        </p>
      </header>

      <main>
        <section className="bg-blue-100 p-6 rounded shadow mx-4">
          <h2 className="text-2xl font-semibold mb-2">Bem-vindo</h2>
          <p>Aqui começa sua jornada com o MostraKi!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
