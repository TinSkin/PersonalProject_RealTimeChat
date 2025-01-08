import './App.css';
import { auth } from "./firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

//Components
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function App() {
  // const [user, setUser] = useState(false)
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (<Welcome />) : (<><ChatBox /></>)}
    </div>
  );
}

export default App;
