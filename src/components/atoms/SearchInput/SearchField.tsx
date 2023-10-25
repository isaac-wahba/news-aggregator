import TextField from '@mui/material/TextField';
import { ChangeEvent, useRef } from 'react';
import { DebouncedFunc, debounce } from 'lodash';
import './SearchField.css';

interface SearchFieldProps {
  onSearch: (searchQuery: string) => void;
}
function SearchField({ onSearch }: SearchFieldProps) {
  const debouncedSearch: DebouncedFunc<(value: string) => any> = useRef(
    debounce((value: string) => {
      // setSearchQuery(value);
      onSearch(value);
    }, 500)
  ).current;

  const handleSearchInputChange: (value: string) => void = (value: string) => {
    // setSearchQuery(value);
    debouncedSearch(value);
  };

  return (
    <TextField
      className="search-field"
      id="filled-search"
      label="Search Articles"
      type="search"
      // variant="filled"
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        handleSearchInputChange(e.target.value)
      }
    />
  );
}

export default SearchField;
