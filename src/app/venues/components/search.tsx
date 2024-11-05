"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function ClientSearch({ posts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPosts.map((item) => (
        <Link href={`/venues/${item.id}`} key={item.id} className="block m-3">
          {item.name}
        </Link>
      ))}
    </>
  );
}
