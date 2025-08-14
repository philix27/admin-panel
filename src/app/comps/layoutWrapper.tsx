import { ReactNode } from 'react';

import Drawer from '@/app/comps/Drawer';

export function LayoutWrapper(props: { children: ReactNode }) {
  return (
    <div className='w-screen h-screen flex'>
      <Drawer />
      <div className='h-full'>{props.children}</div>
    </div>
  );
}
