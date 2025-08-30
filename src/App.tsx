import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
import TablePage from "./components/TablePage";
import useData from "./hooks/useData";

function App() {
  const [data, error, loading] = useData();

  return <>{loading ? <LoadingPage /> : error ? <ErrorPage /> : <TablePage data={data} />}</>;
}

export default App;
