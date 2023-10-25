import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
interface MultiSelectProps {
  options: string[];
  id: string;
  label: string;
  placehloder: string;
}
function MultiSelect(props: MultiSelectProps) {
  const { options, label, placehloder, id } = props;
  return (
    <Autocomplete
      multiple
      id={id}
      options={options}
      // options={['dsad', 'djqwod']}
      // getOptionLabel={(option) => option.title}
      defaultValue={undefined}
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
