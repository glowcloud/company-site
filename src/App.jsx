import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import FAQ from "./pages/FAQ";

function App() {
  const theme = createTheme({
    palette: {
      // type: "dark",
      // primary: {
      //   main: "#647dee",
      // },
      // secondary: {
      //   main: "#f4c430",
      // },
      // text: {
      //   primary: "rgba(255, 255, 255, 0.87)",
      // },
      // background: {
      //   default: "#282c35",
      //   paper: "#323d49",
      // },
    },
  });

  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
