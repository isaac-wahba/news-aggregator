import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
interface AutoCompleteProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  label: string;
  selectedValue: string | undefined;
}

function AutoComplete(props: AutoCompleteProps) {
  const { options, label, onSelect, selectedValue } = props;
  console.log(selectedValue);

  return (
    <div>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 300 }}
        onChange={(event: any, newValue: string | null) => {
          onSelect(newValue as string);
        }}
        value={selectedValue ?? null}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}

export default AutoComplete;
