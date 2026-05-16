"use client";
import { Card, Button } from "@heroui/react";
import { MapPin, CalendarDays, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TravelCard = ({ trip }) => {
    const { _id, imageUrl, destinationName, country, price, duration } = trip
    return (
        <Card className="w-full rounded-xl overflow-hidden shadow-none border-0 bg-white">

            <div className="relative w-full h-60 overflow-hidden">
                <Image
                    fill
                    src={imageUrl}
                    alt={destinationName}
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />

                <div className="absolute top-4 right-4 bg-white px-4 py-3 flex items-center gap-2">
                    <span className="text-[20px] font-semibold leading-none">
                        4.5
                    </span>

                    <Star size={18}
                        fill="black"
                        className="text-black"
                    />
                </div>
            </div>

            <div className="pt-5">
                <div className="flex items-center gap-2 text-[#7B7B7B] mb-3">
                    <MapPin size={15} />
                    <span className="text-base">
                        {country}
                    </span>
                </div>

                <div className="flex justify-between items-start gap-4 mb-4">
                    <h2 className="text-2xl leading-[1.15] font-normal ">{destinationName}</h2>

                    <div className="text-right shrink-0">
                        <h3 className="text-2xl leading-none font-semibold">
                            ${price}
                            <span className="text-base text-[#7B7B7B]">/Person </span>
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-[#7B7B7B] mb-8">
                    <CalendarDays size={17} />

                    <span className="text-[18px]">
                        {duration}</span>
                </div>
                <Link href={`/destination/${_id}`}>

                    <Button
                        radius="none"
                        variant="light"
                        className="p-0 h-auto min-w-fit bg-transparent hover:bg-transparent text-[#08A9F8] text-2xl font-medium"
                    >
                        BOOK NOW<ArrowUpRight size={24} />
                    </Button>
                </Link>
            </div>
        </Card>
    );
};

export default TravelCard;