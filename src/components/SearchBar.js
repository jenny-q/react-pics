import {useState} from 'react'

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
      <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleOnChange}/>
        </form>
      </div>
    )
  }
  
  export default SearchBar;