import 'docsify';
import './styles/docs.scss';

window.$docsify = {
  homepage: 'home.md',
  loadSidebar: true,
  themeColor: '#FF3D16',
  name: 'SaralSMS API',
  requestHeaders: {
    'cache-control': 'max-age=0',
  },
};
