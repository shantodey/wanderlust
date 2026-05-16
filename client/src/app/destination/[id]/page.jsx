
import { Button, Card, Input } from '@heroui/react';
import { ArrowLeft, Edit2, Trash2, Star, Calendar, Check, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { EditModel } from '@/app/components/EditModel';

const DestinationDetailPage = async ({params}) => {
    const {id}=await params
    const res=await fetch(`http://localhost:5000/destination/${id}`);
    const destinations=await res.json()
    const {imageUrl, destinationName, country, price, duration }=destinations
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-6 font-sans text-gray-800">
            <div className="flex justify-between items-center mb-6">
                <Link href={'/destination'} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm">
                    <ArrowLeft size={16} /> Back to Destinations
                </Link>
                <div className="flex gap-3">
                    <EditModel destinations={destinations}></EditModel>
                    <Button variant="bordered"  className="border border-red-500 text-red-500 hover:bg-red-50 rounded-md text-sm font-medium">
                       <Trash2 size={16} /> Cancel
                    </Button>
                </div>
            </div>
            <div className="w-full h-100 rounded-xl overflow-hidden mb-8">
                <Image width={1280} height={580} src={imageUrl}
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
                    <Card className="border border-gray-100 shadow-sm p-2 rounded-xl bg-white">
                        <Card.Content className="flex flex-col gap-5">
                            <div>
                                <span className="text-xs text-gray-500 block mb-1">Starting from</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-sky-500">${price}</span>
                                    <span className="text-xs text-gray-400">per person</span>
                                </div>
                            </div>
                            <Input type="text" defaultValue="05/15/2026" variant="bordered" radius="sm" className="w-full font-medium" />
                            <Button color="primary" size="lg" className="w-full bg-sky-500 text-white font-medium rounded-md py-6 text-sm">
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
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailPage;