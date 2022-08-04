import { Navigate, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <Header />
      <main>
      <Route path="/products" element={<Home />} />
      </main>
    </>
  )
}

export default App
