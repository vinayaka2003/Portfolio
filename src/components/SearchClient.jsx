"use client";

import dynamic from "next/dynamic";

const SearchModal = dynamic(() => import("./SearchModal"), { ssr: false });

export default function SearchClient() {
  return <SearchModal />;
}
