'use client';
import React from 'react';

import { LayoutWrapper } from '@/components/layoutWrapper';
import { IconBaseProps, IconType } from 'react-icons';
import { RiBarChart2Line } from 'react-icons/ri';

export default function DashboardView() {
  return (
    <LayoutWrapper>

      <div className='w-full py-5 px-20'>
        <CardSection />
      </div>
    </LayoutWrapper>
  );
}



export function CardSection() {
  const cards: { title: string; icon: IconType; desc: string; info: string }[] = [
    {
      title: 'Ethereum',
      icon: RiBarChart2Line,
      desc: 'Price',
      info: '$4000'
    },
    {
      title: 'Ethereum',
      icon: RiBarChart2Line,
      desc: 'Price',
      info: '$4000'
    },
    {
      title: 'Ethereum',
      icon: RiBarChart2Line,
      desc: 'Price',
      info: '$4000'
    },
    {
      title: 'Ethereum',
      icon: RiBarChart2Line,
      desc: 'Price',
      info: '$4000'
    },
    {
      title: 'Ethereum',
      icon: RiBarChart2Line,
      desc: 'Price',
      info: '$4000'
    },
    {
      title: 'Ethereum',
      icon: RiBarChart2Line,
      desc: 'Price',
      info: '$4000'
    },
  ]
  return (
    <div className='grid grid-cols-5 w-full gap-10'>
      {cards.map((item, i) => (
        <div key={i} className='bg-gray-900 rounded-lg p-4 shadow-sm '>
          <div>
            <p className='text-white'>{item.title}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))
      }
    </div >
  )
}
