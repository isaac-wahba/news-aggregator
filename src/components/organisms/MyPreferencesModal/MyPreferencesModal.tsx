import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import MultiSelect from '../../atoms/MultiSelect/MultiSelect';
import { MyPreferences } from '../../../types/Types';

interface MyPreferencesModalProps {
  categoriesOptions: string[];
  authorsOptions: string[];
  newsSourcesOptions: string[];
  onSavePreferences: (myPreferences: MyPreferences) => void;
  selectedPreferences: MyPreferences;
}
export default function MyPreferencesModal(props: MyPreferencesModalProps) {
  const {
    categoriesOptions,
    authorsOptions,
    newsSourcesOptions,
    onSavePreferences,
    selectedPreferences,
  } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [myPreferences, setMyPreferences] =
    useState<MyPreferences>(selectedPreferences);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const onChangeCategories = (selectedOptions: string[]) => {
    setMyPreferences({
      ...myPreferences,
      categories: selectedOptions,
    });
  };
  const onChangeAuthors = (selectedOptions: string[]) => {
    setMyPreferences({
      ...myPreferences,
      authors: selectedOptions,
    });
  };
  const onChangeNewsSources = (selectedOptions: string[]) => {
    setMyPreferences({
      ...myPreferences,
      sources: selectedOptions,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onSavePreferences(myPreferences);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        My Preferences
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {'My Preferences'}
        </DialogTitle>
        <DialogContent>
          <MultiSelect
            id="categories"
            label="Categories"
            placehloder="Select Categories"
            options={categoriesOptions}
            onChangeSelectedOptions={onChangeCategories}
            selectedOptions={myPreferences?.categories || []}
          />
          <MultiSelect
            id="authors"
            label="Authors"
            placehloder="Select Authors"
            options={authorsOptions}
            onChangeSelectedOptions={onChangeAuthors}
            selectedOptions={myPreferences?.authors || []}
          />
          <MultiSelect
            id="news-sources"
            label="News Source"
            placehloder="Select News Source"
            options={newsSourcesOptions}
            onChangeSelectedOptions={onChangeNewsSources}
            selectedOptions={myPreferences?.sources || []}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            Set Preferences
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
