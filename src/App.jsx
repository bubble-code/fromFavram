import { useFetchData } from "./hook/fetchhook";
import { Head } from "./components/Head/Head";
import { FormQuestion } from "./components/FormQuestion/FormQuestion";
import { ResultadosConsulta } from "./components/ResultConsulta/ResultadosConsulta";

function App() {
  const { data, error, loading, setQuery } = useFetchData(" ");

  return (
    <div className="flex flex-col max-w-full mx-8">
      <div className="mx-auto text-center">
        <Head />
      </div>
      <div className="max-w-3xl">
        <FormQuestion fun={setQuery} />
      </div>
      {loading && <div>Cargando...</div>}
      {error && <div>Error: {error}</div>}
      <ResultadosConsulta data={data} />
    </div>
  );
}

export default App;
