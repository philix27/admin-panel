import { ReactNode } from "react";

export function Tr(props: { isOdd?: boolean; children: ReactNode[] }) {
  return <tr className={"hover:bg-gray-50 ".concat(props.isOdd ? "bg-gray-100" : "bg-gray-200")}>{...props.children}</tr>
}
export function Td(props: { children: ReactNode }) {
  return <td className="px-4 py-2 border-none text-[14px]">{props.children}</td>
}
export function Th(props: { children: ReactNode }) {
  return <th className="px-4 py-2 text-left border-none text-semibold text-[14px]">{props.children}</th>
}