import theme from '../utils/theme';

export const statusIconUtil = (status: any) => {
  let nameStatus = '';
  let nameIcon = '';
  let nameColor = '';
  let backgroundColor = '';
  switch (status) {
    case 'approved':
      nameIcon = 'check-circle-o';
      nameColor = theme.colors.greenLightText;
      backgroundColor = theme.colors.orderGreen;
      nameStatus = 'Approved';
      break;
    case 'canceled':
      nameIcon = 'times-circle-o';
      nameColor = theme.colors.dangerRed;
      backgroundColor = theme.colors.orderRed;
      nameStatus = 'Canceled';
      break;

    case 'completed':
      nameIcon = 'check-circle-o';
      nameColor = theme.colors.greenLightText;
      backgroundColor = theme.colors.orderGreen;
      nameStatus = 'Completed';
      break;

    case 'pending_approval':
      nameIcon = 'clock-o';
      nameColor = theme.colors.primaryBlue;
      backgroundColor = theme.colors.orderSkyBlue;
      nameStatus = 'Pending Approval';
      break;
    case 'pending_quote':
      nameIcon = 'clock-o';
      nameColor = theme.colors.primaryBlue;
      backgroundColor = theme.colors.orderSkyBlue;
      nameStatus = 'Pending Quote';
      break;

    case 'pending':
      nameIcon = 'clock-o';
      nameColor = theme.colors.primaryBlue;
      backgroundColor = theme.colors.orderSkyBlue;
      nameStatus = 'Pending';
      break;

    default:
      nameIcon = 'clock-o';
      nameColor = theme.colors.primaryBlue;
      backgroundColor = theme.colors.orderSkyBlue;
      nameStatus = 'Pending Approval';
      break;
  }

  return {
    nameIcon,
    nameColor,
    nameStatus,
    backgroundColor,
  };
};
