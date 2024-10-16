import Image from "next/image";
import Link from "next/link";



function Restaurants() {
    return(<main>
        <div className="relative w-full">
      {/* Hero Image */}
      <Image
        src="/34.png"
        width={1200}
        height={500}
        alt="hero food banner"
        className="mx-auto rounded-2xl"
        priority
      /></div>
      <div className="flex ">
      <h1 className="font-bold text-black text-2xl p-8">All Offers from Kababjees Fried Chicken</h1>
     <div className="justify-items-end	py-8 space-x-9">
     <input type="search" placeholder="Search.." className="border-2 border-gray-500 rounded-full px-3"></input>
     </div>
     
     </div>
      <div className="w-full mx-auto px-4">
        {/* <!-- Navbar Section -->*/}
        <nav className="flex space-x-4 p-4 bg-amber-400 rounded text-white shadow-md justify-center font-bold">
          <Link href="#section1" className="hover:bg-black   rounded-2xl px-2">Offers</Link>
          <Link href="#section2" className="hover:bg-black rounded-2xl px-2">Burgers</Link>
          <Link href="#section3" className="hover:bg-black  rounded-2xl px-2">Fries</Link>
          <Link href="#section4" className="hover:bg-black  rounded-2xl px-2">Snacks</Link>
          <Link href="#section4" className="hover:bg-black  rounded-2xl px-2">Cold Drinks</Link>


        </nav>
        </div>

        <div className="mt-6">
          <div id="section1" className="mb-8">
            <h2 className="text-xl font-bold mb-2">Hot Deals - Offers </h2>
           <div className="grid grid-cols-3 px-9">
            <div className="w-64 h-48 ">
              <Image src="/burger.png" width={400} height={300} alt=""></Image>
            </div>
            <div className="w-64 h-48 ">
              <Image src="/burger.png" width={400} height={300} alt="" ></Image>
            </div>

            <div className="w-64 h-48 ">
              <Image src="/burger.png" width={400} height={300} alt="" ></Image>
            </div>
           </div>
                </div>  </div>

      
   
        



     
    </main>

)}

export default Restaurants