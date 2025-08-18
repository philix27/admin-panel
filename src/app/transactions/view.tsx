'use client';
import React from 'react';

import { LayoutWrapper } from '@/app/comps/layoutWrapper';
import { cn } from '@/lib/utils';
import { AppStores } from '@/lib/zustand';

export default function TransactionsView() {

  const store = AppStores.useTxn();

  const tabItem = (props: { title: string; tab: typeof store.tab }) => {
    const isActive = store.tab === props.tab
    return <div
      onClick={() => {
        store.update({ tab: props.tab })
      }}
      className={cn('py-2 px-8 cursor-pointer hover:bg-gray-100 rounded-t-lg',
        isActive ? "border-orange-500 border-b border-b-2" : "border-gray-background")}>
      <p>{props.title} </p>
    </div>
  }
  return (
    <LayoutWrapper>
      <div className="p-6 w-full">
        <div className='w-full space-x-5 flex border-b'>
          {tabItem({
            title: "Airtime",
            tab: 'Airtime'
          })}
          {tabItem({
            title: "Betting",
            tab: 'Betting'
          })}
          {tabItem({
            title: "Electricity",
            tab: 'Electricity'
          })}
          {tabItem({
            title: "TV",
            tab: 'TV'
          })}
        </div>
      </div>
    </LayoutWrapper>
  );
}
