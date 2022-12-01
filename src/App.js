import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    searchImages(term)
  }
  return (
    <SearchBar onSubmit={handleSubmit} />
  )
}

export default App;
