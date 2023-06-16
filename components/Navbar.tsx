import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
    return (
        <header className='absolute z-10 w-full'>
            <nav className='flex items-center justify-between py-4 px-6 max-w-[1440px] mx-auto sm:px-16'>
                <Link href='/' className='flex items-center justify-center'>
                    <Image src='/logo.svg' alt='logo' width={150} height={50} className='object-contain' />
                </Link>

                <CustomButton
                    title='Sign In'
                    btnType='button'
                    containerStyles='text-primary-blue bg-white rounded-full min-w-[130px]'
                />
            </nav>
        </header>
    )
}

export default Navbar