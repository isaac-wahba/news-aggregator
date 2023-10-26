import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './LoadingIndicator.css';
function LoadingIndicator() {
  return (
    <div className="loading-indicator-container">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default LoadingIndicator;
