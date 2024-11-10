"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  console.log("🚀 ~ file: page.ts:11 ~ Home ~ tasks:", tasks);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
  );
}