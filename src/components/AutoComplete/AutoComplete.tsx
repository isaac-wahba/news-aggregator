import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
interface AutoCompleteProps {
  options: string[];
  label: string;
}

function AutoComplete({ options, label }: AutoCompleteProps) {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}

export default AutoComplete;
