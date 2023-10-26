import ChipItem from '../../atoms/ChipItem/ChipItem';
import { NewsResource } from '../../../types/Types';
import { NewsResourcesEnum } from '../../../enums/NewsResourcesEnum';
import './NewsSourceTabs.css';

export interface NewsSourceTabsProps {
  newsResources: NewsResource[];
  onSelectResource: (src: NewsResourcesEnum, isSelected: boolean) => void;
}
function NewsSourceTabs(props: NewsSourceTabsProps) {
  const { newsResources, onSelectResource } = props;

  return (
    <div className="sources-chips-container">
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
    </div>
  );
}

export default NewsSourceTabs;
