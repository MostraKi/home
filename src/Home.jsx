// Home.jsx import LoginModal from './components/LoginModal'; import { useAuth } from './AuthContext';
function Home() { const { user } = useAuth();
return ( 
Mostra Ki 
Início Sobre Contato <main className="container mx-auto px-4 py-8"> <div className="text-center"> <h1 className="text-4xl font-extrabold text-titulo mb-4">Seu Catálogo, Seu Jeito</h1> <p className="text-lg text-gray-700 mb-6">A vitrine ideal para quem está começando ou quer mostrar com estilo.</p> {!user && <LoginModal />} {user && <p className="text-green-600">Olá, {user.displayName}! Você está logado.</p>} </div> </main> <footer className="bg-yellow-100 text-center text-sm text-gray-600 py-4"> &copy; 2025 MostraKi. Todos os direitos reservados. </footer> </div> 
); }
export default Home;