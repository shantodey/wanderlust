import { auth } from "@/lib/auth";
import { CalendarDays, MapPin, Eye, Trash2, } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import DeleteBooking from "../components/DeleteBooking";

const BookingCard = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const user = session?.user;


  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
  const booking = await res.json();

  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-tight text-black"> My Bookings</h1>
          <p className="mt-2 text-sm text-gray-500"> Manage and view your upcoming travel plans</p>
        </div>

        <div className="flex flex-col gap-4">
          {booking.map(e =>
            <div key={e._id} className="overflow-hidden rounded-sm border border-gray-200 bg-white">

              <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-[260px_1fr]">
                <div className="relative h-50 overflow-hidden rounded-sm">
                  <Image src={e.imageUrl} alt={e.destinationName} fill className="object-cover"/>
                </div>

                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>Confirmed
                    </div>

                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black">{e.destinationName}</h2>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CalendarDays size={15} />
                        <span>{new Date(e.departureDat).toLocaleDateString('en-US',{
                          year:"numeric",
                          month:"long",
                          day:"numeric"
                        }) }</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={15} />
                        <span>Booking ID: b1</span>
                      </div>

                    </div>
                    <h3 className="mt-5 text-3xl font-bold text-cyan-500"> ${e.price} </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <DeleteBooking e={e}/>
                    <button className="flex items-center gap-2 rounded-sm bg-cyan-500 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-600" >
                      <Eye size={16} /> View
                    </button>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BookingCard;