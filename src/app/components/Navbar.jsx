import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className="container mx-auto">

            <nav className='flex justify-between p-4'>
                <ul className='flex gap-8'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Destinations</Link></li>
                    <li><Link href={'/'}>My Bookings</Link></li>
                    <li><Link href={'/'}>Admin</Link></li>
                </ul>
                <div>
                    <Image src={'/assets/mainlogo.png'} width={162} height={24} alt='Website Logo'></Image>
                </div>
                <ul className='flex gap-8'>
                    <li><Link href={'/'}>Profile</Link></li>
                    <li><Link href={'/'}>Login</Link></li>
                    <li><Link href={'/'}>Singup</Link></li>
                    <li><Link href={'/'}>Admin</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;