import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./routes/Home";
import { Signin } from "./routes/Signin";
import { Signup } from "./routes/Signup";
import { Kurikulum } from "./routes/Kurikulum";
import { Materi } from "./routes/Materi";
import { Info } from "./routes/Info";


function App() {
  return <ThemeProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/kurikulum' element={<Kurikulum />} />
      <Route path='/materi' element={<Materi />} />
      <Route path='/info' element={<Info />} />
    </Routes>
  </ThemeProvider>
}

export default App;
