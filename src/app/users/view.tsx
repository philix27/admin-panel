'use client';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';

import { FbUser } from '@/lib/firebase/init';

import { LayoutWrapper } from '@/app/comps/layoutWrapper';


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
            <tr>
              <th className="px-4 py-2 text-left border-none">Email</th>
              <th className="px-4 py-2 text-left border-none">Name</th>
              <th className="px-4 py-2 text-left border-none">CreatedAt</th>
              <th className="px-4 py-2 text-left border-none">LastSignIn</th>
              <th className="px-4 py-2 text-left border-none">UID</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, i) => (
                <tr key={user.uid} className={"hover:bg-gray-50 ".concat(i % 2 == 0 ? "bg-gray-100" : "bg-gray-200")}>
                  <td className="px-4 py-2 border-none">{user.email || "—"}</td>
                  <td className="px-4 py-2 border-none">{user.displayName || "—"}</td>
                  <td className="px-4 py-2 border-none">{user.creationTime || "—"}</td>
                  <td className="px-4 py-2 border-none">{user.lastSignInTime || "—"}</td>
                  <td className="px-4 py-2 border-none">{user.uid}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 border text-center" colSpan={4}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
