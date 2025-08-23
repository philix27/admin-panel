import { ReactNode } from 'react';

import Drawer from '@/components/Drawer';

export function LayoutWrapper(props: { children: ReactNode }) {
  return (
    <div className='w-screen h-screen flex bg-gray-800'>
      <div className='w-[300px]'>
        <Drawer />
      </div>
      <div className='h-screen w-full'>{props.children}</div>
    </div>
  );
}
