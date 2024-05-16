"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SendEmailButton from "~/components/send-email-button.component";
import { Trip } from "~/types/trip";

export default function ConfirmQuotation() {
  const searchParams = useSearchParams();
  const [trip, setTrip] = useState<Trip>({
    firstName: searchParams.get("firstName"),
    lastName: searchParams.get("lastName"),
    phone: searchParams.get("phone"),
    email: searchParams.get("email"),
    pickupAddress: searchParams.get("pickupAddress"),
  });

  const params: Record<string, string | null> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log(params);

  return (
    <div>
      {Object.entries(trip).map(([key, value], index: number) => (
        <p key={index}>
          <strong>{key}: </strong>
          {value}
        </p>
      ))}
      <SendEmailButton trip={trip} />
    </div>
  );
}
