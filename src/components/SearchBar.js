import {useState} from 'react'
import './Searchbar.css'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')

    const handleOnChange = (e) => {
        setTerm(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term)
    }
    return (
      <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Search:</label>
            <input value={term} onChange={handleOnChange}/>
        </form>
      </div>
    )
  }
  
  export default SearchBar;