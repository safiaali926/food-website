import Image from "next/image";
import Link from "next/link";


 function Home() {
  return (<main>
   <div className="relative w-full">
      {/* Hero Image */}
      <Image
        src="/hero.png"
        width={1200}
        height={500}
        alt="hero food banner"
        className="mx-auto"
        priority
      />

      {/* Heading Text for Desktop/Tablet */}
      <h1 className="absolute top-1/3 left-10 text-left text-white text-5xl font-bold hidden px-6 md:block">
        Feast Your Senses,
      </h1>

      <h1 className="absolute top-1/2 left-10 text-left text-amber-400 text-5xl px-6 font-semibold hidden md:block">
        Fast and Fresh!
      </h1>

      {/* Heading Text for Mobile */}
      <div className="block md:hidden px-4">
        <h1 className="absolute top-1/4 left-10 text-white text-2xl font-bold mt-1 text-left">
          Feast Your Senses,
        </h1>
        <h1 className=" absolute top-2/4 left-10 text-amber-400 text-2xl font-semibold  text-left">
          Fast and Fresh!
        </h1>
      </div>

      
{/*<form className="max-w-md mx-auto absolute insent-0 top-2/3 px-9 mx-9">   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-400 focus:border-amber-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-400 dark:focus:border-amber-400" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-black absolute end-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-400 dark:hover:bg-amber-400 dark:focus:ring-amber-400">Search</button>
    </div>
</form>*/}

    </div>
  <section>
    <div className="flex  py-6 items-center justify-center">
        <h2 className="text-2xl font-bold px-3 ">Up to - 40% OFF | Food.pk Exclusive Deals</h2>
 {/* <nav className="hidden md:block">
            <ul className="flex gap-x-7 pl-9">
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Desi</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Sushi</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Pizza & Fast Food</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Dessert</Link></li>
              <li><Link href="/" className="hover:bg-amber-400 rounded-2xl px-2">Cold Drinks</Link></li>
            </ul>
          </nav>
          </div>


          <div className="w-full overflow-x-auto ml-8 scrollbar-hide whitespace-nowrap">
          <div className="flex space-x-4 w-max ">
          <div className="relative w-80 mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg ">
          <Image src="/burger.png" width={480} height={640} alt="burgers" className=" "></Image>

  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3">
    Your Text Here
  </div>
</div>

<div className="relative w-80 mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image src="/burger.png" width={480} height={640} alt="burgers" className=" "></Image>

  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3">
    Your Text Here
  </div>
</div>


<div className="relative w-80 mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image src="/burger.png" width={480} height={640} alt="burgers" className=" "></Image>

  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3">
    Your Text Here
  </div>
</div>

<div className="relative w-80 mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image src="/burger.png" width={480} height={640} alt="burgers" className=" "></Image>

  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3">
    Your Text Here
  </div>
</div>

<div className="relative w-80 mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
          <Image src="/burger.png" width={480} height={640} alt="burgers" className=" "></Image>

  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-3">
    Your Text Here
  </div>
</div>


</div>*/}

</div>


<div className="container w-full mx-auto px-4">
 {/* <!-- Navbar Section -->*/}
  <nav className="flex space-x-4 p-4 bg-gray-900 rounded text-white shadow-md justify-center">
    <a href="#section1" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Deals</a>
    <a href="#section2" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Burgers</a>
    <a href="#section3" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Pizza</a>
    <a href="#section4" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Cold Drinks</a>
  </nav>

 {/* <!-- Section Boxes -->*/}
  <div className="mt-6">
    <div id="section1" className="mb-8">
      <h2 className="text-xl font-bold mb-2">Hot Deals - Food.pk Exclusive Deals </h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4 w-max">
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/3burgers.jpg" alt="Example 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">3 Person Burger Deal</p>
            </div>
          </div>
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/pizza1.jpg" alt="Example 2" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">2 Pizza Deal</p>
            </div>
          </div>

          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/3pizza.webp" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">3 Pizza Deal</p>
            </div>
          </div>


          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/fambug.webp" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Family Burger Deal</p>
            </div>
          </div>

          
         {/* <!-- Add more boxes as needed -->*/}
        </div>
      </div>
    </div>

    <div id="section2" className="mb-8">
      <h2 className="text-xl font-bold mb-2">Burgers</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4 w-max">
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/doubleduck.jpg" alt="Example 3" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Double Decker Patty Burger</p>
            </div>
          </div>
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/zinger.webp" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Zinger Burger</p>
            </div>
          </div>
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/beef.avif" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Beef Burger</p>
            </div>
          </div>

          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/cheesebug.jpg" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Cheese Burger</p>
            </div>
          </div>
          {/*<!-- Add more boxes as needed -->*/}
        </div>
      </div>
    </div>

    <div id="section3" className="mb-8">
      <h2 className="text-xl font-bold mb-2">Pizza</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4 w-max">
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/pizza2.jpg" alt="Example 5" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Large Pizza</p>
            </div>
          </div>
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/medium.webp" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Medium Pizza</p>
            </div>
          </div>

          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/zinger.webp" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Zinger Burger</p>
            </div>
          </div>

          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/zinger.webp" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Zinger Burger</p>
            </div>
          </div>

          {/*<!-- Add more boxes as needed -->*/}
        </div>
      </div>
    </div>

    <div id="section4" className="mb-8">
      <h2 className="text-xl font-bold mb-2">Cold Drinks</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex space-x-4 w-max">
          <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
            <img src="/example-image6.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p className="text-center font-semibold">Box 6</p>
            </div>
          </div>
          {/*<!-- Add more boxes as needed -->*/}
        </div>
      </div>
    </div>
  </div>
</div>


  </section>
  
  
  
  </main>
  )}
  export default Home 

    

