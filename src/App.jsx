import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import Blank from "./components/Blank";
const App = ()=> {
  return (
    <main className="bg-black">
      <Navbar />
      <Blank />
      <Hero />
      <Highlights />
      <Model />

    </main>
  )
}
export default App
