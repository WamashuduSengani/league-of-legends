import { useState } from "react";
import './index.css'

type SearchBarProps = {
    onSearch: (searchQuery: string) => void;
  };
  
  function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState("");
  
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setSearchQuery(event.target.value);
      onSearch(event.target.value);
    }
  
    return (
      <div>
        <input type="text" placeholder="Search Champion" value={searchQuery} onChange={handleChange} />
      </div>
    );
  }
export default SearchBar;
  
