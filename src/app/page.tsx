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

    </div>
    <section>
      <div className="flex  py-6 items-center justify-center">
        <h2 className="text-2xl font-bold px-3 ">Up to - 40% OFF | Food.pk Exclusive Deals</h2>


      </div>


      <div className="container w-full mx-auto px-4">
        {/* <!-- Navbar Section -->*/}
        <nav className="flex space-x-4 p-4 bg-gray-900 rounded text-white shadow-md justify-center">
          <Link href="#section1" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Deals</Link>
          <Link href="#section2" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Burgers</Link>
          <Link href="#section3" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Pizza</Link>
          <Link href="#section4" className="hover:bg-amber-400 hover:text-black rounded-2xl px-2">Cold Drinks</Link>
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
                  <img src="/minipizza.jfif" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <p className="text-center font-semibold">Mini Pizza</p>
                  </div>
                </div>

                <div className="w-80 h-64 bg-white border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                  <img src="/slice.avif" alt="Example 4" className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <p className="text-center font-semibold">Pizza Slice </p>
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
                  <img src="/cold.png" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <p className="text-center font-semibold ">Soft Drinks</p>
                  </div>
                </div>
                {/*<!-- Add more boxes as needed -->*/}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section>
      <div className="container w-full mx-auto px-4">
        <div className="flex  py-6  justify-center">
          <h2 className="text-2xl font-bold px-3 ">Food.pk | Popular Categories</h2>
        </div>

        <div id="section4" className="mb-8">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-4 w-max">
              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/zinger.webp" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Burger & Fast Foods</p>
                </div>
              </div>

              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/salad.jfif" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Salads</p>
                </div>
              </div>

              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/pasta.avif" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Pasta & Casuals</p>
                </div>
              </div>

              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/pizza1.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Pizza</p>
                </div>
              </div>


              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/breakfast.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Break Fasts</p>
                </div>
              </div>


              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/soup.png" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Soups</p>
                </div>
              </div>


              <div className="w-48 h-64 bg-gray-300 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
                <img src="/cold.png" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-4">
                  <p className="text-center font-semibold ">Soft Drinks</p>
                </div>
              </div>


            </div>
          </div>

        </div>

      </div>
    </section>

    <section>
      <div className="container w-full mx-auto px-4">
        <div className="flex  py-6  justify-center">
          <h2 className="text-2xl font-bold px-3 "> Popular Restaurants</h2>
        </div>

        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex space-x-4 w-max">

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/kababjees.png" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-2 pt-4">
                <p className="text-center font-semibold ">Kababjees Fried Chicken</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/optp.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-center font-semibold ">OPTP</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/lab.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-center font-semibold ">Burger Lab</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/bd.png" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg " />
              <div className="p-4">
                <p className="text-center font-semibold ">Broadway Pizza</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/kolachi.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-center font-semibold ">Kolachi</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/cola.png" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-center font-semibold ">Cola Next</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/lalqila.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-center font-semibold ">Lal Qila</p>
              </div>
            </div>

            <div className="w-48 h-64 bg-amber-400 border-2 border-gray-300 rounded-lg shadow-lg inline-block">
              <img src="/pakola.jpg" alt="Example 6" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <p className="text-center font-semibold ">Pakola</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <div className="relative w-full">
      {/* Download App Banner */}
      <Image
        src="/appB.png"
        width={1200}
        height={500}
        alt="download app banner"
        className="mx-auto"
        priority
      />
    </div>



<div className="grid grid-cols-2 gap-4 m-8 ">
<div className="bg-[url('/chef.jpg')] bg-cover bg-center h-80 w-full text-black text-2xl  p-4 border-1 border-black rounded-2xl hover:drop-shadow-xl">
 Partner with us
 <button className="text-lg flex bg-black rounded-2xl p-1 px-2 text-amber-400">Get Started</button>
 </div>


<div className="bg-[url('/rider.jpg')] bg-cover bg-center h-80 w-full text-black text-2xl p-4 border-1 border-black rounded-2xl hover:drop-shadow-xl">
 Ride with us
 <button className="text-lg flex bg-black rounded-2xl p-1 px-2 text-amber-400">Get Started</button>
</div>

</div>

<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 bg-amber-400 text-gray-900 justify-center items-center p-4">
  <div className="text-5xl p-4 md:p-6 lg:p-9 text-center">
    546+
    <div className="text-2xl mt-2">Registered Riders</div>
  </div>

  <div className="text-5xl p-4 md:p-6 lg:p-9 text-center">
    789,900+
    <div className="text-2xl mt-2">Orders Delivered</div>
  </div>

  <div className="text-5xl p-4 md:p-6 lg:p-9 text-center">
    690+
    <div className="text-2xl mt-2">Restaurants Partnered</div>
  </div>

  <div className="text-5xl p-4 md:p-6 lg:p-9 text-center">
    17,547+
    <div className="text-2xl mt-2">Food Items</div>
  </div>
</div>


  </main>
  )
}
export default Home



