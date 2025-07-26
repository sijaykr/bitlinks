import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-purple-100">
      
      <section className="grid  grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col items-start justify-center">
<p className=" text-5xl font-bold">The best url shortener in the world</p>
          
          <h1 className="text-3xl font-bold mb-4">Welcome to Bitlinks</h1>
          <p className="text-lg mb-6">
            Bitlinks is a URL shortener that allows you to shorten long URLs for easy sharing and
            management. With Bitlinks, you can create custom short links, track clicks, and manage
            your links efficiently.
          </p>
         
          
          <div className="flex space-x-4 ">
  <Link href="/Shorten">
    <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-purple-700 transition duration-300 ease-in-out hover:cursor-pointer">
      Try Now
    </button>
  </Link>
  
  <Link href="/github">
    <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-gray-900 transition duration-300 ease-in-out hover:cursor-pointer">
      GitHub
    </button>
  </Link>
</div>
          <p className="text-sm text-gray-500 mt-4">
            Bitlinks is designed to make your link management simple and effective. Start shortening
            your URLs today!
          </p>
          

        </div>
        <div className="flex items-center justify-center bg-red-60">
          <Image
          
            src="/vector.jpg"
            alt="Bitlinks Logo"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
            
          />

        </div>
        

 </section>

  </main>
  );
}
