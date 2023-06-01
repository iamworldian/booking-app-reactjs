import { Outlet } from 'react-router-dom';

import { Navbar } from '../../Components/Navbar/Navbar';
import { classJoiner } from '../../utils/utils';
import Styles from './MainLayout.module.css';

export default function Main() {
  return (
    <>
      <div className={classJoiner(Styles, ['container'])}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
