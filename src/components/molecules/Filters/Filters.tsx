import AutoComplete from '../../atoms/AutoComplete/AutoComplete';
import './Filters.css';
import DatePickerField from '../../atoms/DatePickerField/DatePickerField';

interface FiltersProps {
  onSelectCategory: (category: string) => void;
  onChangeDate: (date: any) => void;
  categoriesOptions: string[];
  selectedCategory: string | undefined;
}
function Filters(props: FiltersProps) {
  const {
    onSelectCategory,
    onChangeDate,
    categoriesOptions,
    selectedCategory,
  } = props;

  const onCategorySelect = (category: string) => {
    onSelectCategory(category);
  };

  return (
    <div className="filters-conainer">
      <AutoComplete
        label="Select Category"
        onSelect={onCategorySelect}
        options={categoriesOptions}
        selectedValue={selectedCategory}
      />
      <DatePickerField onDateChange={onChangeDate} />
    </div>
  );
}

export default Filters;
