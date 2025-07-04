import { useEffect } from 'react'; import './index.css';

function App() { useEffect(() => { const firebaseConfig = { apiKey: "AIzaSyCE2Q4UXC9rzWjtmWIy3aa6e56sWk80TqY", authDomain: "mostraki-8dc92.firebaseapp.com", projectId: "mostraki-8dc92", storageBucket: "mostraki-8dc92.appspot.com", messagingSenderId: "932409459380", appId: "1:932409459380:web:1ec374091f4498d692cde1", measurementId: "G-PRPG5CLE5W" };

import('firebase/app').then(({ initializeApp }) => {
  import('firebase/auth').then((firebaseAuth) => {
    const app = initializeApp(firebaseConfig);
    const auth = firebaseAuth.getAuth(app);
    const provider = new firebaseAuth.GoogleAuthProvider();

    firebaseAuth.onAuthStateChanged(auth, (user) => {
      const authText = document.getElementById("authText");
      const userCircle = document.getElementById("userCircle");
      if (user) {
        const nome = user.displayName || user.email;
        const iniciais = nome.trim().charAt(0).toUpperCase();
        if (userCircle) {
          userCircle.textContent = iniciais;
          userCircle.classList.remove('hidden');
        }
        if (authText) {
          authText.textContent = "Sair";
          authText.onclick = () => firebaseAuth.signOut(auth);
        }
      } else {
        if (authText) {
          authText.textContent = "Entrar";
          authText.onclick = () => {
            firebaseAuth.signInWithPopup(auth, provider).catch(e => alert("Erro: " + e.message));
          };
        }
      }
    });
  });
});

}, []);

const toggleMenu = () => { const menu = document.getElementById("menu"); menu.classList.toggle("hidden"); };

return ( <div className="min-h-screen bg-[#fff6ed] text-gray-800 font-sans"> {/* Cabeçalho com menu responsivo */} <header className="bg-white h-[60px] flex justify-between items-center px-6 shadow z-10 relative"> <div className="flex items-center gap-2"> <img src="logo.png" alt="Logo" className="h-8" /> <h1 className="text-xl font-bold text-[#008182]"> Mostra<span className="text-[#ec2c4a]">Ki</span> </h1> </div> <div className="flex items-center gap-3"> <span id="authText" className="font-bold text-[#15b0af] cursor-pointer hidden"></span> <div id="userCircle" className="hidden w-8 h-8 rounded-full bg-[#15b0af] text-white flex items-center justify-center text-sm font-bold" /> <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}> ☰ </div> </div>

{/* Menu suspenso */}
    <div
      id="menu"
      className="menu-list hidden absolute top-[60px] right-4 bg-[#ffe3c6] border border-black rounded-lg flex flex-col p-4 z-50 space-y-2 md:hidden w-60 shadow-lg"
    >
      <a className="bg-[#d73e45] text-white px-4 py-2 rounded-md font-bold text-center hover:bg-[#b8313b]" href="/">
        Página Inicial
      </a>
      <a className="bg-[#d73e45] text-white px-4 py-2 rounded-md font-bold text-center hover:bg-[#b8313b]" href="/sobre">
        Sobre
      </a>
      <a className="bg-[#d73e45] text-white px-4 py-2 rounded-md font-bold text-center hover:bg-[#b8313b]" href="/planos">
        Planos
      </a>
      <a className="bg-[#d73e45] text-white px-4 py-2 rounded-md font-bold text-center hover:bg-[#b8313b]" href="/servicos-adicionais">
        Serviços Adicionais
      </a>
      <a className="bg-[#d73e45] text-white px-4 py-2 rounded-md font-bold text-center hover:bg-[#b8313b]" href="/meusiteaki">
        Meu SiteAki
      </a>
      <a className="bg-[#d73e45] text-white px-4 py-2 rounded-md font-bold text-center hover:bg-[#b8313b]" href="/contato">
        Contato
      </a>
    </div>
  </header>

  {/* Banner adaptado para web e mobile com altura proporcional */}
  <div className="relative w-full overflow-hidden">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-[300px] md:h-[512px] object-cover"
    >
      <source src="banner-mobile.webm" type="video/webm" media="(max-width: 768px)" />
      <source src="banner-desktop.webm" type="video/webm" media="(min-width: 769px)" />
      Seu navegador não suporta vídeo HTML5.
    </video>
  </div>

  {/* Seções centrais */}
  <main className="flex flex-col gap-12 px-4 py-12 bg-gray-50 text-center">
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#ec2c4a] mb-2">Como Funciona?</h2>
      <p className="text-gray-700 mb-4">
        O MostraKi foi criado para você que quer mostrar seu trabalho de forma simples, bonita e profissional.
      </p>
      <a
        href="#"
        className="inline-block bg-[#15b0af] text-white px-4 py-2 rounded hover:bg-[#129090] transition"
      >
        Veja Mais
      </a>
    </section>

    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#ec2c4a] mb-2">Redes Sociais</h2>
      <p className="text-gray-700 mb-4">
        Conecte-se com o público nas redes sociais por meio do MostraKi e amplie seu alcance.
      </p>
      <a
        href="#"
        className="inline-block bg-[#15b0af] text-white px-4 py-2 rounded hover:bg-[#129090] transition"
      >
        Veja Mais
      </a>
    </section>

    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#ec2c4a] mb-2">Serviços Adicionais</h2>
      <p className="text-gray-700 mb-4">
        Descubra como potencializar sua presença com nossos serviços extras e opções personalizadas.
      </p>
      <a
        href="#"
        className="inline-block bg-[#15b0af] text-white px-4 py-2 rounded hover:bg-[#129090] transition"
      >
        Veja Mais
      </a>
    </section>
  </main>

  {/* Rodapé */}
  <footer className="bg-[#ffe3c6] py-6 text-center text-[#555] text-sm">
    &copy; {new Date().getFullYear()} MostraKi. Todos os direitos reservados.
  </footer>
</div>

); }

export default App;

