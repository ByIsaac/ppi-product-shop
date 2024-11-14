import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </>
  );
}

export default App;
