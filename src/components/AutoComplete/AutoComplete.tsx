import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
interface AutoCompleteProps {
  options: string[];
  onSelect: (value: string) => void;
  label: string;
}

function AutoComplete({ options, label, onSelect }: AutoCompleteProps) {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box"
        options={options}
        sx={{ width: 300 }}
        onChange={(event: any, newValue: string | null) => {
          console.log(newValue);
          onSelect(newValue as string);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}

export default AutoComplete;
