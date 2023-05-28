import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Form from "./components/form"
import Table from "./components/table";
import { useState } from "react";

const client = new QueryClient();

function App() {
  
  const [formData, setFormData] = useState({
    id:"",
    nome:"",
    matricula:"",
    curso:"",
    bimestre:"",
});

  function clearState(){
    setFormData({
      id:"",
      nome:"",
      matricula:"",
      curso:"",
      bimestre:"",
  });
  }

  return (
    <>
    <QueryClientProvider client={client}>
      <h1>Diário Eletrônico</h1>
      <Form formData={formData} setFormData={setFormData} clearState={clearState} />
      <Table formData={formData} setFormData={setFormData} />
    </QueryClientProvider>
    </>
  )
}

export default App
