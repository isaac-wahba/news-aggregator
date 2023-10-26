import Stack from '@mui/material/Stack';
import ChipItem from '../../atoms/ChipItem/ChipItem';
import { NewsResource } from '../../../types/Types';
import { NewsResourcesEnum } from '../../../enums/NewsResourcesEnum';

export interface NewsSourceTabsProps {
  newsResources: NewsResource[];
  onSelectResource: (src: NewsResourcesEnum, isSelected: boolean) => void;
}
function NewsSourceTabs(props: NewsSourceTabsProps) {
  const { newsResources, onSelectResource } = props;

  return (
    <Stack direction="row" spacing={1}>
      {newsResources.map((newsResource) => {
        return (
          <ChipItem
            label={newsResource.label}
            onChipClick={(isClicked: boolean) => {
              onSelectResource(newsResource.id, isClicked);
            }}
            key={newsResource.id}
          />
        );
      })}
    </Stack>
  );
}

export default NewsSourceTabs;
