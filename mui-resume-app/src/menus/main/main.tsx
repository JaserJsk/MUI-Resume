// third-party
import { FormattedMessage } from 'react-intl';

// Assets
import { IconArrowBack, IconHome } from '@tabler/icons';

// constant
const icons = {
  IconArrowBack,
  IconHome,
};

// ==============================|| MAIN MENU ITEMS ||============================== //

const main = {
  id: 'main',
  title: <FormattedMessage id="main" />,
  type: 'group',
  children: [
    {
      id: 'resume',
      title: <FormattedMessage id="resume" />,
      type: 'item',
      url: '/resume',
      icon: icons.IconHome,
      breadcrumbs: false,
    },
  ],
};

export default main;
