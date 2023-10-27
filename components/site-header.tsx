import Image from 'next/image'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className='fixed left-0 top-0 z-50 flex w-full flex-col items-center justify-center border-b border-foreground/5 bg-white/95 shadow shadow-gray-300/20 backdrop-blur-md dark:bg-background/90 dark:shadow-xl dark:shadow-black/20 print:hidden'>
      <nav className='h-20px relative mx-auto flex w-full max-w-screen-lg items-center justify-between px-3 text-sm'>
        <Link href='/' className='flex h-20 items-center gap-2 sm:gap-4'>
          <Image src='/next.svg' alt='Next.js Logo' width={90} height={18} priority />
        </Link>
        <ul className='hidden items-center justify-start gap-2 font-medium md:flex lg:pl-2'>
          <li>
            <Link href='#about' className='group flex items-center gap-1 rounded-md px-1.5 py-1 transition lg:px-2.5'>
              About
            </Link>
          </li>
          <li>
            <Link href='#work' className='group flex items-center gap-1 rounded-md px-1.5 py-1 transition lg:px-2.5'>
              Work
            </Link>
          </li>
          <li>
            <Link
              href='#testimonials'
              className='group flex items-center gap-1 rounded-md px-1.5 py-1 transition lg:px-2.5'
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href='#experience'
              className='group flex items-center gap-1 rounded-md px-1.5 py-1 transition lg:px-2.5'
            >
              Experience
            </Link>
          </li>
          <li>
            <Link href='#contact' className='group flex items-center gap-1 rounded-md px-1.5 py-1 transition lg:px-2.5'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
