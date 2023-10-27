export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='shadow-soft-2xl relative w-full bg-white before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-gradient-to-r before:from-transparent before:via-gray-200 before:to-transparent before:content-[""] dark:bg-black/50 dark:before:via-gray-800/75 print:hidden'>
      <div className='relative mx-auto flex w-full max-w-screen-lg flex-col items-start justify-between gap-16 px-5 pb-48 pt-14 sm:flex-row sm:px-10 sm:pt-16 lg:px-5'>
        <small className='absolute bottom-5 left-5 flex items-center gap-5'>
          <span className='opacity-75'>© {currentYear} - gerenyitamas.dev</span>
          <a className='opacity-75 transition hover:opacity-100' href='/privacy'>
            Terms &amp; Conditions
          </a>
        </small>
      </div>
    </footer>
  )
}
