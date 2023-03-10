import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoggedNavigation } from "./routes";
import { Auth } from "./pages/Auth";
import { PlayerProvider } from "./context/PlayerContext";

export default function App() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  if (user === undefined) return null;
  return user ? (
    <PlayerProvider>
      <LoggedNavigation />
    </PlayerProvider>
  ) : (
    <Auth />
  );
}
