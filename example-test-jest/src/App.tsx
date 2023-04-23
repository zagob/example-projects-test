import { Menu } from "./components/Menu";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { authenticate, signIn, signOut } = useAuth();
  return (
    <div>
      <Menu />

      <button onClick={authenticate ? signOut : signIn} type="button">
        {authenticate ? "Sair" : "Entrar"}
      </button>
    </div>
  );
}

export default App;
