import React from 'react';
import { IconType } from 'react-icons';
import { ImUserPlus } from 'react-icons/im';
import {
  RiAppsFill,
  RiAppStoreFill,
  RiDashboard2Line,
  RiGroup2Line,
  RiListOrdered,
} from 'react-icons/ri';

type IDrawerItem = { title: string; icon: IconType; children?: IDrawerItem[] };
const items: IDrawerItem[] = [
  { title: 'Overview', icon: RiAppsFill },
  {
    title: 'Orders',
    icon: RiListOrdered,
    children: [
      { title: 'Buy', icon: RiListOrdered },
      { title: 'Sell', icon: RiListOrdered },
    ],
  },
  { title: 'Transactions', icon: ImUserPlus },
  { title: 'Users', icon: ImUserPlus },
  { title: 'Partners', icon: RiGroup2Line },
  { title: 'Apps', icon: RiAppStoreFill },
  { title: 'Settings', icon: RiDashboard2Line },
];
export default function Drawer() {
  return (
    <div className='w-[250px] h-full bg-slate-800'>
      <div className='h-[50px] w-full flex items-center justify-center'>
        <h3>Mobarter</h3>
      </div>
      <div className='px-5 py-4'>
        {items.map((val, i) => {
          const IIcon = val.icon;
          return (
            <div
              key={i}
              className='py-3 px-3 rounded-md text-slate-400 flex items-center space-x-2 hover:bg-slate-900'
            >
              <IIcon size={20} />
              <p>{val.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
