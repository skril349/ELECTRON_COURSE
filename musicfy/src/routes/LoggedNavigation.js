import React from "react";
import { Button } from "semantic-ui-react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Artists, Artist, Albums, Album, Profile } from "../pages";
import { LoggedLayout } from "../layouts/LoggedLayout/LoggedLayout";
export function LoggedNavigation() {
  return (
    <HashRouter>
      <LoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </HashRouter>
  );
}
