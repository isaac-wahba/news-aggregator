import Chip from '@mui/material/Chip';
import { useState } from 'react';
interface ChipItemProps {
  label: string;
  onChipClick?: (isClicked: boolean) => void;
}

function ChipItem(props: ChipItemProps) {
  const { label, onChipClick } = props;
  const [isSelected, setIsSelected] = useState(true);

  const handleChipClick = (isSelectedChipItem: boolean) => {
    setIsSelected((prev: boolean) => !prev);
    onChipClick && onChipClick(isSelectedChipItem);
  };

  return (
    <div>
      <Chip
        label={label}
        variant={isSelected ? undefined : 'outlined'}
        color="primary"
        onClick={() => handleChipClick(!isSelected)}
        size="medium"
        style={{
          fontSize: '1.3rem',
        }}
      />
    </div>
  );
}

export default ChipItem;
