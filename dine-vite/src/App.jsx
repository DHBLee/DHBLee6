import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import BookingPage from "./components/BookingPage";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />} />

        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
