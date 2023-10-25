import AutoComplete from '../../atoms/AutoComplete/AutoComplete';
import './Filters.css';
import DatePickerField from '../../atoms/DatePickerField/DatePickerField';

interface FiltersProps {
  onSelectCategory: (category: string) => void;
  onChangeDate: (date: any) => void;
  categoriesOptions: string[];
}
function Filters(props: FiltersProps) {
  const { onSelectCategory, onChangeDate, categoriesOptions } = props;

  const onCategorySelect = (category: string) => {
    onSelectCategory(category);
  };

  return (
    <div className="filters-conainer">
      <AutoComplete
        label="Select Category"
        onSelect={onCategorySelect}
        options={categoriesOptions}
      />
      <DatePickerField onDateChange={onChangeDate} />
    </div>
  );
}

export default Filters;
