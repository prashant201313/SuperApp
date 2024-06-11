import { HashRouter, Routes, Route } from "react-router-dom"
import Form from "./pages/Form"
import Genre from "./pages/Genre"
import Info from "./pages/Info"
import Movies from "./pages/Movies"
import NotFound from "./pages/404"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/info" element={<Info />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}

export default App
