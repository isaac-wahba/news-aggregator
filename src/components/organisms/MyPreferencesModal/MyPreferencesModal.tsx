import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import MultiSelect from '../../atoms/MultiSelect/MultiSelect';

export default function MyPreferencesModal() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
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
            options={['dsad', 'djqwod']}
          />
          <MultiSelect
            id="authors"
            label="Authors"
            placehloder="Select Authors"
            options={['dsad', 'djqwod']}
          />
          <MultiSelect
            id="news-sources"
            label="News Source"
            placehloder="Select News Source"
            options={['dsad', 'djqwod']}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Set Preferences
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
