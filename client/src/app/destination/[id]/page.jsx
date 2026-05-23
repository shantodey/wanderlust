

import { ArrowLeft, Star, Calendar, Check, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { EditModel } from '@/app/components/EditModel';
import DeleteDestination from '@/app/components/DeleteDestination';
import BookingCard from '@/app/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DestinationDetailPage = async ({params}) => {
    const {id}=await params;
    const {token}=await auth.api.getToken({
        headers:await headers()
    })
    
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    const destinations=await res.json()
    const {imageUrl, destinationName, country, duration }=destinations
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-6 font-sans text-gray-800">
            <div className="flex justify-between items-center mb-6">
                <Link href={'/destination'} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
                    <ArrowLeft size={16} /> Back to Destinations
                </Link>
                <div className="flex gap-3">
                    <EditModel destinations={destinations}></EditModel>
                    <DeleteDestination destinations={destinations}/>
                </div>
            </div>
            <div className="w-full h-100 rounded-xl overflow-hidden mb-8">
                <Image width={1280} height={580} src={imageUrl} loading="eager"
                    alt={destinationName} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                        <MapPin size={16} className="text-gray-400" /> {country}
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{destinationName}</h1>
                    <div className="flex items-center gap-6 mb-8 text-sm">
                        <div className="flex items-center gap-1">
                            <Star className="fill-emerald-500 text-emerald-500" size={18} />
                            <span className="font-semibold">4.9</span>
                            <span className="text-gray-500">(234 reviews)</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-600">
                            <Calendar size={18} />
                            <span className="font-medium">{duration}</span>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-3">Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-sm">Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-3">Highlights</h2>
                        <p className="text-gray-600 leading-relaxed text-sm mb-6">Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                            {[
                                "Luxury beachfront accommodation",
                                "Traditional Balinese spa treatment",
                                "Sunrise trek to Mount Batur",
                                "Visit Uluwatu Temple at sunset",
                                "Private beach dinner experience"
                            ].map((highlight, index) => (
                                <div key={index} className="flex items-center gap-2.5 text-sm text-gray-700">
                                    <Check size={16} className="text-emerald-500 shrink-0" />
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <BookingCard destinations={destinations}/>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailPage;