export interface Trip extends Departure, Arrival, User {
  typeOfTrip?: "only arrival" | "only departure" | "arrival and departure";
  numberOfChilds?: number | null; //[bambini]
  numberOfAdults?: number | null; //[adulti]
  additionalInfo?: string | null; //[info]
  childSeats?: string | null; //[seggiolini]
}

interface Departure {
  //[sp]
  pickupAddress?: string | null;
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

/*[incontro][aep][aeroporto-arrivo-aep-a][destinazione-aep][aeroporto-aep-p][bamb][privacy]*/
