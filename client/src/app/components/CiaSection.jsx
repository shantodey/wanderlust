import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CiaSection = () => {
    return (
        <div className="relative bg-[url('/assets/CTA.png')] bg-cover bg-center text-white text-center">
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black" />
            <div className="relative z-10 flex flex-col items-center gap-3 py-50">
                <h2 className="text-4xl font-semibold">Ready To Start Your Journey?</h2>
                <p className="text-sm text-white/80">Join thousands of travelers who have discovered the world with us</p>
                <Link
                    href={'/destination'}
                    className="mt-2 flex items-center gap-2 border border-white px-6 py-2.5 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
                >
                    Book Your Trip Today <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export default CiaSection;