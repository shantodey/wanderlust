"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from "@heroui/react";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const user = session?.user;
    const handleSingOut=async()=>{
        await authClient.signOut();
    }
    return (
        <div className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <input type="checkbox" id="menu-toggle" className="peer hidden" />
                <nav className="flex items-center justify-between py-4 relative">
                    <label htmlFor="menu-toggle" className="sm:hidden block cursor-pointer p-2 order-first select-none">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul className="hidden sm:flex gap-8 font-medium text-gray-600">
                        <li><Link href={'/'} className="hover:text-black transition-colors">Home</Link></li>
                        <li><Link href={"/destination"} className="hover:text-black transition-colors">Destinations</Link></li>
                        <li><Link href="/" className="hover:text-black transition-colors">My Bookings</Link></li>
                        <li><Link href={"/add-destination"} className="hover:text-black transition-colors">ADD Destinations</Link></li>
                    </ul>
                    <div className="shrink-0 mx-auto sm:mx-0">
                        <Link href="/">
                            <Image src="/assets/mainlogo.png" width={162} height={24} alt="Website Logo" priority />
                        </Link>
                    </div>
                    <ul className="hidden sm:flex items-center gap-8 font-medium text-gray-600">
                        <li><Link href={'/'} className="hover:text-black transition-colors">Profile</Link></li>
                        {user ?
                            <>
                                <li>
                                    <Avatar>
                                        <Avatar.Image alt="John Doe" src={user?.image}/>
                                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                </li>
                                <li>< Button onClick={handleSingOut} variant="outline">Sing Out</Button></li>
                            </>
                            :
                            <>
                                <li><Link href={"/login"} className="hover:text-black transition-colors">Login</Link></li>
                                <li><Link href={"/singup"} className="hover:text-black transition-colors">Singup</Link></li>
                            </>
                        }
                        <li><Link href="/" className="hover:text-black transition-colors">Admin</Link></li>
                    </ul>

                    {/* Mobile Dropdown Menu (Toggled via pure CSS peer-checked mechanism) */}
                    <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 hidden peer-checked:block sm:hidden z-40 transition-all">
                        <ul className="flex flex-col p-6 gap-4 font-medium text-gray-600">
                            <li><Link href="/" className="hover:text-black block py-2 border-b border-gray-50">Home</Link></li>
                            <li><Link href="/destination" className="hover:text-black block py-2 border-b border-gray-50">Destinations</Link></li>
                            <li><Link href="/" className="hover:text-black block py-2 border-b border-gray-50">My Bookings</Link></li>
                            <li><Link href="/add-destination" className="hover:text-black block py-2 border-b border-gray-50">ADD Destinations</Link></li>
                            <li><Link href="/" className="hover:text-black block py-2 border-b border-gray-50">Profile</Link></li>
                            <li><Link href="/" className="hover:text-black block py-2 border-b border-gray-50">Login</Link></li>
                            <li><Link href="/" className="hover:text-black block py-2 border-b border-gray-50">Singup</Link></li>
                            <li><Link href="/" className="hover:text-black block py-2">Admin</Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
