import Head from "next/head";
function Homepage() {
  return (
    <div className="py-10 px-4">
      <Head>
        <title>Single Price Grid Component</title>
      </Head>
      <div className=" overflow-hidden rounded-lg">
        <section className="p-8 bg-white ">
          <h1 className="text-green-600 text-xl font-semibold">
            Join our community
          </h1>
          <h2 className="text-yellow-600 font-semibold pt-4">
            30-day, hassle-free money back guarantee
          </h2>
          <p className="pt-2 text-gray-500">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </section>
        <section className="text-white">
          <div className="bg-green-500 p-8">
            <h2 className="text-lg font-semibold">Monthly Subscription</h2>
            <div className="flex items-center pt-2">
              <p className="text-2xl font-semibold">$29 </p>
              <p className="text-sm  font-hairline ml-2">per month</p>
            </div>
            <p className="font-light text-sm">
              Full access for less than $1 a day
            </p>
            <button class="shadow-md bg-yellow-500 w-full text-white font-bold py-2 px-4 rounded mt-6">
              Sign Up
            </button>
          </div>
          <div className="bg-green-400 p-8">
            <h2 className="text-lg font-semibold">Why us</h2>
            <div className="text-xs font-light pt-2">
              <p>Tutorials by industry experts</p>
              <p>Peer & expert code review</p>
              <p>Coding exercises</p>
              <p>Access to our GitHub repos</p>
              <p>Community forum</p>
              <p>Flashcard decks</p>
              <p>New videos every week</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
