"use client";

import React from "react";
import { Button } from "./ui/button";
import { Trip } from "~/types/trip";

export default function SendEmailButton({ trip }: { trip: Trip }) {
  return (
    <Button
      type="button"
      size={"lg"}
      onClick={async () => {
        await fetch("/api/emails", {
          method: "POST",
          body: JSON.stringify({
            email: trip.email,
          }),
        });
      }}
    >
      Send Email
    </Button>
  );
}
