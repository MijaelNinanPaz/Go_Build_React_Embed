import AddContractor from "./components/AddContractor"
import ContractorsTable from "./components/ContractorsTable"
import Header from "./components/Header"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12">
        <AddContractor />
        <ContractorsTable/>
      </div>
    </div>
  )
}

export default App
