import AutoComplete from '../../atoms/AutoComplete/AutoComplete';
import './Filters.css';
import DatePickerField from '../../atoms/DatePickerField/DatePickerField';

interface FiltersProps {
  onSelectCategory: (category: string) => void;
  onChangeDate: (date: any) => void;
}
function Filters(props: FiltersProps) {
  const { onSelectCategory, onChangeDate } = props;

  const onCategorySelect = (category: string) => {
    onSelectCategory(category);
  };
  return (
    <div className="filters-conainer">
      <AutoComplete
        label="Select Category"
        onSelect={onCategorySelect}
        options={['a', 'b', 'c']}
      />
      <DatePickerField onDateChange={onChangeDate} />
    </div>
  );
}

export default Filters;
