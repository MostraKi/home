import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function LoginModal() {
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h2 className="text-lg font-bold mb-4">Entrar</h2>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">
        Entrar com Google
      </button>
    </div>
  );
}

export default LoginModal;