import React from 'react';
import TravelCard from '../components/TravelCard';

const DestinationPage = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error(`Failed: ${res.status}`);
    }

    const destination = await res.json();


    return (
        <section>
            <div className="container mx-auto">
                <div>

                    <h1>Explore All Destinations</h1>
                    <p>Find your perfect travel experience from our curated collection</p>
                </div>
                <div>

                </div>
                <div className='grid grid-cols-3'>
                    {destination.map(trip =>
                        <TravelCard key={trip._id} trip={trip} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default DestinationPage;