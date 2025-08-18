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

type IDrawerItem = { title: string; icon: IconType; href?: string; children?: IDrawerItem[] };
const items: IDrawerItem[] = [
  { title: 'Overview', icon: RiAppsFill, href: "/dashboard" },
  {
    title: 'Orders',
    icon: RiListOrdered,
    children: [
      { title: 'Buy', icon: RiListOrdered, href: "/dashboard" },
      { title: 'Sell', icon: RiListOrdered, href: "/dashboard" },
    ],
  },
  { title: 'Transactions', icon: ImUserPlus, href: "/transactions" },
  { title: 'Users', icon: ImUserPlus, href: "/users" },
  { title: 'Partners', icon: RiGroup2Line, href: "/partners" },
  { title: 'Apps', icon: RiAppStoreFill, href: "/apps" },
  { title: 'Settings', icon: RiDashboard2Line, href: "/settings" },
];
export default function Drawer() {
  return (
    <div className='w-full h-full bg-slate-800'>
      <div className='h-[50px] w-full flex items-center justify-center'>
        <h3>Mobarter</h3>
      </div>
      <div className='px-5 py-4'>
        {items.map((val, i) => {
          const IIcon = val.icon;
          return (
            <a
              href={val.href ? val.href : "#"}
              key={i}
              className='py-3 px-3 rounded-md text-slate-400 flex items-center space-x-2 hover:bg-slate-900'
            >
              <IIcon size={20} />
              <p>{val.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
