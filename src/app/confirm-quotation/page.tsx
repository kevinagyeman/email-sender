"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SendEmailButton from "~/components/send-email-button.component";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Trip } from "~/types/trip";

export default function ConfirmQuotation() {
  const searchParams = useSearchParams();
  const [trip, setTrip] = useState<Trip>({
    firstName: searchParams.get("firstName"),
    lastName: searchParams.get("lastName"),
    phone: searchParams.get("phone"),
    email: searchParams.get("email"),
    pickupAddress: searchParams.get("pickupAddress"),
    serviceType: "only arrival",
    cost: "",
    isTheCostForEachWay: true,
    isTheCostForChildSeatIncluded: true,
    additionalServiceInfo: "",
    transferType: "Private",
  });

  const params: Record<string, string | null> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log(params);

  return (
    <form>
      <Card className="flex flex-col gap-y-3 border p-6">
        {Object.entries(trip).map(([key, value], index: number) => (
          <div key={index}>
            <Label>{key}</Label>
            <Input value={value || ""} placeholder={key} readOnly />
          </div>
        ))}
        <SendEmailButton trip={trip} />
      </Card>
    </form>
  );
}
