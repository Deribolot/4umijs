import { Link, Outlet  } from 'umi';
import 'antd/dist/antd.min.css';
//import 'antd/es/style/themes/default.less';

import styles from './index.less';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
    theme: {
        primaryColor: '#25b864',
    },
});

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
