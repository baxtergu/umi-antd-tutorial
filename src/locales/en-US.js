import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import settings from './en-US/settings';
import messages from './en-US/messages';
import sample from './en-US/sample';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.home.introduce': 'introduce',
  ...globalHeader,
  ...menu,
  ...settings,
  ...sample,
  ...messages,
};
