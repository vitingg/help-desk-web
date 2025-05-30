import type { ReactNode } from "react";

type tableProps = {
  children: ReactNode
}

export function Table({children}:tableProps) {
  return (
    <table className="border rounded-md border-gray-500">
      {children}
    </table>
  );
}