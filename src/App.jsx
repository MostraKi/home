import { useEffect } from 'react';
import './index.css';

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
    <div className="min-h-screen bg-[#fff6ed] text-gray-800 font-sans">
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

      {/* Seções */}
      <main className="max-w-4xl mx-auto p-4 space-y-8">
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-2">Cadastre sua arte</h2>
          <p className="text-gray-700">Suba suas imagens e compartilhe com a comunidade.</p>
        </section>
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-2">Veja o que está em alta</h2>
          <p className="text-gray-700">Explore os trabalhos mais recentes e mais votados.</p>
        </section>
        <section className="bg-white shadow rounded p-6">
          <h2 className="text-2xl font-bold mb-2">Crie sua conta</h2>
          <p className="text-gray-700">Conecte-se com outros artistas e receba feedback.</p>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#ffe3c6] py-6 text-center text-[#555] text-sm">
        &copy; {new Date().getFullYear()} MostraKi. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
