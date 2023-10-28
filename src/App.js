import Lab from "pages/lab/Lab";
import Main from "pages/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";

// import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/lab/*" element={<Lab />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
