// third-party
import { FormattedMessage } from 'react-intl';

// Assets
import { IconArrowBack, IconClipboard } from '@tabler/icons';

// constant
const icons = {
  IconArrowBack,
  IconClipboard,
};

// ==============================|| SIDEBAR MENU ITEMS ||============================== //

const sidebar = {
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
      breadcrumbs: true,
    },
  ],
};

export default sidebar;
