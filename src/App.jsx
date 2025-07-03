// src/App.jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCE2Q4UXC9rzWjtmWIy3aa6e56sWk80TqY",
      authDomain: "mostraki-8dc92.firebaseapp.com",
      projectId: "mostraki-8dc92",
      storageBucket: "mostraki-8dc92.appspot.com",
      messagingSenderId: "932409459380",
      appId: "1:932409459380:web:1ec374091f4498d692cde1",
      measurementId: "G-PRPG5CLE5W"
    };

    import('firebase/app').then(({ initializeApp }) => {
      import('firebase/auth').then((firebaseAuth) => {
        const app = initializeApp(firebaseConfig);
        const auth = firebaseAuth.getAuth(app);

        firebaseAuth.onAuthStateChanged(auth, (user) => {
          const authText = document.getElementById("authText");
          const userCircle = document.getElementById("userCircle");
          if (user) {
            const nome = user.displayName || user.email;
            const iniciais = nome.trim().charAt(0).toUpperCase();
            if (userCircle) userCircle.textContent = iniciais;
            if (authText) {
              authText.textContent = "Sair";
              authText.onclick = () => firebaseAuth.signOut(auth);
            }
          } else {
            if (authText) {
              authText.textContent = "Entrar";
              authText.onclick = () => {
                const email = prompt("Email:");
                const senha = prompt("Senha:");
                firebaseAuth.signInWithEmailAndPassword(auth, email, senha).catch(e => alert("Erro: " + e.message));
              };
            }
          }
        });
      });
    });
  }, []);

  return (
    <div>
      {/* Cabeçalho */}
      <header className="bg-white h-[60px] flex justify-between items-center px-6 shadow z-10">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold text-[#008182]">
            Mostra<span className="text-[#ec2c4a]">Ki</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span id="authText" className="font-bold text-[#15b0af] cursor-pointer"></span>
          <div id="userCircle" className="hidden w-8 h-8 rounded-full bg-[#15b0af] text-white flex items-center justify-center text-sm font-bold" />
        </div>
      </header>

      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="banner-desktop.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default App;
{/* Seções centrais */}
<main className="flex flex-col gap-12 px-4 py-12 bg-gray-50 text-center">
  <section className="max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-[#ec2c4a] mb-2">Como Funciona?</h2>
    <p className="text-gray-700 mb-4">
      Explicamos de forma clara como usar o MostraKi para divulgar seus produtos e ideias.
    </p>
    <a href="#" className="inline-block bg-[#15b0af] text-white px-4 py-2 rounded hover:bg-[#129090] transition">
      Veja Mais
    </a>
  </section>

  <section className="max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-[#ec2c4a] mb-2">Redes Sociais</h2>
    <p className="text-gray-700 mb-4">
      Conecte-se com o público nas redes sociais por meio do MostraKi.
    </p>
    <a href="#" className="inline-block bg-[#15b0af] text-white px-4 py-2 rounded hover:bg-[#129090] transition">
      Veja Mais
    </a>
  </section>

  <section className="max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-[#ec2c4a] mb-2">Serviços Adicionais</h2>
    <p className="text-gray-700 mb-4">
      Descubra como potencializar sua presença com nossos serviços extras.
    </p>
    <a href="#" className="inline-block bg-[#15b0af] text-white px-4 py-2 rounded hover:bg-[#129090] transition">
      Veja Mais
    </a>
  </section>
</main>
{/* Rodapé */}
<footer className="bg-[#ffe3c6] py-6 text-center text-[#555] text-sm">
  &copy; 2025 MostraKi. Todos os direitos reservados.
</footer>
