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
    title: 'Orders - Buy',
    icon: RiListOrdered,
    children: [
      { title: 'Buy', icon: RiListOrdered, href: "/dashboard" },
      { title: 'Sell', icon: RiListOrdered, href: "/dashboard" },
    ],
  },
  {
    title: 'Orders - Sell',
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
  { title: 'Rates', icon: RiAppStoreFill, href: "/apps" },
  { title: 'Logs & Events', icon: RiAppStoreFill, href: "/apps" },
  { title: 'Social Media', icon: RiAppStoreFill, href: "/apps" },
  { title: 'P2P', icon: RiAppStoreFill, href: "/apps" },
  { title: 'Settings', icon: RiDashboard2Line, href: "/settings" },
];

export default function Drawer() {
  return (
    <div className='w-full h-full bg-gray-900'>
      <div className='h-[50px] w-full flex items-center justify-center'>
        <h3>Mobarter</h3>
      </div>
      <div className='px-3 py-4'>
        {items.map((val, i) => {
          const IIcon = val.icon;
          return (
            <a
              href={val.href ? val.href : "#"}
              key={i}
              className='py-1 px-3 mb-1 rounded-sm text-slate-400 flex items-center space-x-2 hover:bg-gray-800'
            >
              <IIcon size={15} className='mr-4' />
              <p className='text-[14px]'>{val.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
