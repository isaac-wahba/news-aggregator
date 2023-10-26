import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
interface MultiSelectProps {
  options: string[];
  id: string;
  label: string;
  placehloder: string;
  onChangeSelectedOptions: (selectedOptions: string[]) => void;
  selectedOptions: string[];
}
function MultiSelect(props: MultiSelectProps) {
  const {
    options,
    label,
    placehloder,
    id,
    onChangeSelectedOptions,
    selectedOptions,
  } = props;
  return (
    <Autocomplete
      multiple
      id={id}
      options={options}
      onChange={(event, value: string[]) => {
        onChangeSelectedOptions(value);
      }}
      value={selectedOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={placehloder}
        />
      )}
    />
  );
}

export default MultiSelect;
