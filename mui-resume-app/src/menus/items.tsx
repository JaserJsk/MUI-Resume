// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconArrowBack, IconClipboard } from '@tabler/icons';

// constant
const icons = {
  IconArrowBack,
  IconClipboard,
};

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const items = {
  id: 'dashboard',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  children: [
    {
      id: 'main',
      title: <FormattedMessage id="to_frontpage" />,
      type: 'item',
      url: '/',
      icon: icons.IconArrowBack,
      breadcrumbs: false,
    },
    {
      id: 'account',
      title: <FormattedMessage id="account" />,
      type: 'item',
      url: '/dashboard/account',
      icon: icons.IconClipboard,
      breadcrumbs: false,
    },
  ],
};

export default items;
