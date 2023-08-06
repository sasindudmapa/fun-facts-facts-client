import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Funcs
import Home from "./Components/Home";
import SearchFact from "./Components/Facts/SearchFact";
import AddLink from "./Components/Links/AddLink";
import GetLink from "./Components/Links/GetLink";

//styles
import "./Components/Facts/factshome.css";
import "./Components/Facts/fact.css";
import "./Components/Ad/adbar.css";
import "./Components/footer.css";
import "./Components/Facts/searchfact.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<a href="/explore/home">explore</a>} />
          <Route exact path="/explore/:name" element={<Home />} />
          <Route exact path="/search/:name" element={<SearchFact />} />
          <Route path="/add/ZXCV1919/link" element={<AddLink />} />
          <Route path="/get/link/:name" element={<GetLink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
