"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, Input, DateField, Label } from '@heroui/react';
import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
const BookingCard = ({ destinations }) => {
    const { price, _id, country,destinationName,imageUrl } = destinations;
    const [departureDate, setDeuprtureDate] = useState(null);
     if (!destinations) return <div>Loading...</div>;
    const { data: session } = authClient.useSession()
    const user = session?.user;

    const handelBooking = async () => {
        // collecting data 
        const bookingData = {
            userId: user?.id,
            userImg: user?.image,
            userName: user?.name,
            destinationsId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDat: new Date(departureDate)
        }
        const {data:tokenData}=await authClient.token()
        
        
        const res= await fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body:JSON.stringify(bookingData)
        })
        const data= await res.json()
        toast.success("You Sucessfully Booked ",destinationName)
        
    }

    return (
        <Card className="border border-gray-100 shadow-sm p-2 rounded-xl bg-white">
            <Card.Content className="flex flex-col gap-5">
                <div>
                    <span className="text-xs text-gray-500 block mb-1">Starting from</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-sky-500">${price}</span>
                        <span className="text-xs text-gray-400">per person</span>
                    </div>
                </div>
                <DateField onChange={setDeuprtureDate} className="w-[256px]" name="date">
                    <Label> Departure date </Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                {/* <Input type="text" defaultValue="05/15/2026" variant="bordered" radius="sm" className="w-full font-medium" /> */}
                <Button onClick={handelBooking} color="primary" size="lg" className="w-full bg-sky-500 text-white font-medium rounded-md py-6 text-sm">
                    Book Now  <ArrowRight size={18} />
                </Button>
                <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
                    {[
                        "Free cancellation up to 7 days",
                        "Travel insurance included",
                        "24/7 customer support"
                    ].map((policy, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs  font-medium">
                            <Check size={14} className='text-emerald-600' />
                            <span>{policy}</span>
                        </div>
                    ))}
                </div>
            </Card.Content>
        </Card>
    );
};

export default BookingCard;