// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconHome } from '@tabler/icons';

// constant
const icons = {
  IconHome,
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const items = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    {
      id: 'default',
      title: <FormattedMessage id="default" />,
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconHome,
      breadcrumbs: false,
    },
  ],
};

export default items;
