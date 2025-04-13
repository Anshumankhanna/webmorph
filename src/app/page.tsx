"use client";

import requestBot from "@/actions/request-bot";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);

    const botOutput = await requestBot(input);

    setLoading(false);

    if (botOutput.error !== null) {
      return;
    }

    setData(botOutput.data);
  }

  return (
    <div className="flex gap-2 p-2">
      <input className="border rounded-lg" value={input} onChange={(event) => setInput(event.target.value)} />
      <button className="rounded-lg bg-blue-500 p-2 text-white disabled:bg-gray-500" onClick={request} disabled={loading}>Click to process</button>
      <span className="border rounded-lg flex-grow">{data}</span>
    </div>
  );
}
