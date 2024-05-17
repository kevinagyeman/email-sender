export interface Trip extends Departure, Arrival, User, Service {
  numberOfChilds?: number | null; //[bambini]
  numberOfAdults?: number | null; //[adulti]
  additionalInfo?: string | null; //[info]
  numberOfChildSeats?: number | null; //[seggiolini]
}

interface Departure {
  //[sp]
  pickupAddress?: string | null; //[incontro]
  departureAirport?: string | null; //[aeroporto-partenza-p]
  dateDeparture?: any;
  timeDeparture?: any;
}

interface Arrival {
  //[sa]
  arrivalAirport?: string | null; //[aeroporto-arrivo-a]
  destinationAddress?: string | null; //[destinazione-a]
  arrivalFlightNumber?: string | null;
  dateArrival?: any;
  timeArrival?: any;
}

interface User {
  firstName: string | null; //[nome]
  lastName: string | null; // [cognome]
  email: string | null; //[email]
  phone: string | null; //[telefono]
}

interface Service {
  serviceType?: "only arrival" | "only departure" | "arrival and departure";
  cost?: string;
  isTheCostForEachWay?: boolean;
  isTheCostForChildSeatIncluded?: boolean;
  additionalServiceInfo?: string;
  transferType?: "Private";
}

/*[bamb][privacy]*/
