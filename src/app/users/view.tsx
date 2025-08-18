'use client';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';

import { FbUser } from '@/lib/firebase/init';

import { LayoutWrapper } from '@/app/comps/layoutWrapper';
import { Tr, Th, Td } from "@/app/components/table";


export default function UsersView() {
  return (
    <LayoutWrapper>
      <UsersTable />
    </LayoutWrapper>
  );
}


async function fetchUsers(): Promise<FbUser[]> {
  try {
    const res = await axios.get("/api/users");
    return res.data.users;
  } catch (error) {
    console.log("Oops, could not get users");
    return [];
  }
}


export function UsersTable() {
  const { data: users, isLoading, isError, error } = useQuery<FbUser[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p className="p-4">Loading users...</p>;
  if (isError) return <p className="p-4 text-red-500">Error: {(error as Error).message}</p>;

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">{users && users.length} Users </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <Tr >
              <Th>Email</Th>
              <Th>Name</Th>
              <Th>Created At</Th>
              <Th>Last SignIn</Th>
              <Th>UID</Th>
            </Tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, i) => (
                <Tr key={i} isOdd={i % 2 == 0}>
                  <Td>{user.email || "—"}</Td>
                  <Td>{user.displayName || "—"}</Td>
                  <Td>{user.creationTime || "—"}</Td>
                  <Td>{user.lastSignInTime || "—"}</Td>
                  <Td>{user.uid}</Td>
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
        </table>
      </div>
    </div>
  );
}

