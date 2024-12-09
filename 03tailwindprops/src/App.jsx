import Card from "./components/Card"
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card  username="Eunice" />
      <Card username="Json" post="Staff Engg."/>
      <Card />
    </>
  )
}

export default App
