import AddContractor from "./components/AddContractor"
import ContractorsTable from "./components/ContractorsTable"
import Header from "./components/Header"
import ProvidersTable from "./components/ProvidersTable"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12">
      
        <AddContractor />
        <ContractorsTable />
        {/* <ProvidersTable /> */}
      </div>
    </div>
  )
}

export default App
