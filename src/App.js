import './App.css';
import { auth } from "./firebase/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { useState } from 'react';

function App() {
  // const [user, setUser] = useState(false)
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (<Welcome />) : (<ChatBox />)}
    </div>
  );
}

export default App;
