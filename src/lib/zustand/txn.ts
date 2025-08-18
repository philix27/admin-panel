import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type IViews = 'Airtime' | 'TV' | "Betting" | "Electricity"

export interface ISlice {
  tab?: IViews

}

export const defaultValues: Required<ISlice> = {
  tab: "Airtime",
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void
  clear: () => void
}

export const useTxn = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,
      update: (data) =>
        set((state) => {
          return { ...state, ...data }
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues }
        }),
    }),
    {
      name: 'txn',
    }
  )
)
