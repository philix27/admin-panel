

'use client';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';


import { Tr, Th, Td, Table } from "@/components/table";
import { TransactionAirtime } from "@/app/api/transactions/airtime/route";

async function fetchUsers(): Promise<TransactionAirtime[]> {
  try {
    const res = await axios.get("/api/transactions/airtime");
    return res.data.content;
  } catch (error) {
    console.log("Oops, could not get users");
    return [];
  }
}


export default function AirtimeTxn() {
  const { data: txns, isLoading, isError, error } = useQuery<TransactionAirtime[]>({
    queryKey: ["airtimeTxn"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p className="p-4">Loading transactions...</p>;
  if (isError) return <p className="p-4 text-red-500">Error: {(error as Error).message}</p>;

  return (
    <div className="p-6 w-full overflow-y-scroll h-[calc(100vh-100px)]">
      <h1 className="text-2xl font-bold mb-4">{txns && txns.length} Transactions </h1>
      <div className="overflow-x-auto">
        <Table>
          <thead className="bg-gray-100">
            <Tr >
              <Th>Operator</Th>
              <Th>Phone</Th>
              <Th>Amount</Th>
              <Th>Country</Th>
              <Th>Sender Phone</Th>
              <Th>Date</Th>
              <Th>Status</Th>
              {/* <Th>Balance</Th> */}
            </Tr>
          </thead>
          <tbody>
            {txns && txns.length > 0 ? (
              txns.map((item, i) => (
                <Tr key={i} isOdd={i % 2 == 0}>
                  <Td>{item.operatorName || "—"}</Td>
                  <Td>{item.recipientPhone || "—"}</Td>
                  <Td>{item.requestedAmount || "—"}</Td>
                  <Td>{item.countryCode || "—"}</Td>
                  <Td>{item.senderPhone}</Td>
                  <Td>{item.transactionDate}</Td>
                  <Td>{item.status}</Td>
                  {/* <Td>{JSON.stringify(item.balanceInfo) || "_"}</Td> */}
                </Tr>
              ))
            ) : (
              <Tr >
                <td className="px-4 py-2 border text-center" colSpan={4}>
                  No users found
                </td>
                <></>
              </Tr >
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

