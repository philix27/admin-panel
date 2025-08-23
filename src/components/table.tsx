import { ReactNode } from "react";

export function Tr(props: { isOdd?: boolean; children: ReactNode[] }) {
  return <tr className={"hover:bg-gray-50 text-gray-500 ".concat(props.isOdd ? "bg-slate-700" : "bg-gray-800")}>{...props.children}</tr>
}
export function Td(props: { children: ReactNode }) {
  return <td className="px-4 py-1 border-none text-[14px]">{props.children}</td>
}
export function Th(props: { children: ReactNode }) {
  return <th className="px-4 py-2 text-left border-none text-semibold text-[14px]">{props.children}</th>
}
export function Table(props: { children: ReactNode }) {
  return (<div className="overflow-x-auto rounded-lg border border-gray-700">
    <table className="min-w-full border-none rounded-lg shadow-sm rounded-lg">
      {props.children}
    </table>
  </div>)
}

