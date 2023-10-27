import Alert from '@mui/material/Alert';
import { AlertEnum } from '../../../enums/AlertEnum';

interface AlertViewProps {
  alertType: AlertEnum;
  message: string;
}

export default function AlertView({ alertType, message }: AlertViewProps) {
  return <Alert severity={alertType}>{message}</Alert>;
}
