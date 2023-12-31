import Alert from '@mui/material/Alert';
import { AlertEnum } from '../../../enums/AlertEnum';

interface AlertViewProps {
  alertType: AlertEnum;
  message: string;
}

export default function AlertView({ alertType, message }: AlertViewProps) {
  return (
    <Alert
      style={{
        fontSize: '2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
      severity={alertType}
    >
      {message}
    </Alert>
  );
}
