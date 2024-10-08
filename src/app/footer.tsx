import Image from "next/image";
import Link from "next/link";


function Footer() {
    return (<>
  <footer className="bg-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-8">
  <div>
    <Image src="/logo.png" alt="image" width={150} height={150} className="mx-auto md:mx-0 mt-7"></Image>
    <Image src="/store.png" alt="image" width={150} height={150} className="mx-auto md:mx-0 m-7"></Image>
    <p className="m-7 text-center md:text-left">Company# 434390-656, registered with House of companies.</p>
  </div>

  <div>
    <p className="mt-7 font-bold text-center md:text-left">Get Exclusive Deals in your Inbox</p>
    <form action="#" className="mt-6">
      <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
        <div className="relative w-full">
          <label className="email hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" />
        </div>
        <div>
          <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg bg-amber-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-amber-400 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
    </form>

    <Image src="/icons.png" alt="image" width={250} height={150} className="mx-auto md:mx-0"></Image>
  </div>

  <div>
    <h1 className="mt-8 font-bold text-center md:text-left">Quick Links</h1>
    <ul className="flex flex-col items-center md:items-start">
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Home</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Browse Menu</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Special Offers</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Restaurants</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Track Order</Link></li>
    </ul>
  </div>

  <div>
    <h1 className="mt-8 font-bold text-center md:text-left">Important Links</h1>
    <ul className="flex flex-col items-center md:items-start">
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Add your restaurant</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Track your order</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Special Offers</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Create a business account</Link></li>
      <li><Link href="/" className="hover:text-white text-black rounded-2xl px-4 underline">Terms & Conditions</Link></li>
    </ul>
  </div>
</footer>

<div className="bg-gray-900 text-white text-sm p-4 text-center">
  <ul className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-9 justify-center">
    <li>Food.pk Copyright 2024, All Rights Reserved.</li>
    <li>Privacy Policy</li>
    <li>Terms</li>
    <li>Pricing</li>
    <li>Do not sell or share my personal information</li>
  </ul>
</div>

   </>
   
   
   
   
    )
}

export default Footer;