"use client";

import { Button } from "~/components/ui/button";
import { POST } from "./api/emails/route";

export default function HomePage() {
  return (
    <main>
      <Button
        onClick={async () => {
          await fetch("/api/emails", { method: "POST" });
        }}
      >
        Send Email
      </Button>
    </main>
  );
}
