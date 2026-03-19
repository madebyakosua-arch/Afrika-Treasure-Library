
import React from 'react';

const EmailSignup = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for signing up! Please check your email for the starter pack.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="free-book-resources" className="bg-brand-green text-white">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black font-heading">Get Your FREE Book Resources</h2>
            <p className="mt-4 text-lg text-green-100 max-w-xl">
              Join our community and get a free pack of printables designed to introduce your child to the richness of African heritage.
            </p>
            <div className="mt-8 text-left bg-green-900/20 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4 text-brand-gold">What&apos;s inside:</h4>
              <ul className="space-y-2 text-green-100">
                  <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">✔</span><span><span className="font-bold">Engaging Coloring Sheets</span> featuring inspiring themes.</span></li>
                  <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">✔</span><span>A <span className="font-bold">Helpful Parent&apos;s Guide</span> with easy discussion prompts.</span></li>
                  <li className="flex items-start"><span className="text-brand-gold mr-3 mt-1">✔</span><span>A fun, printable <span className="font-bold">Fact Sheet</span> to spark curiosity.</span></li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Best Email"
                required
                className="w-full px-5 py-4 rounded-full text-brand-charcoal placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-brand-gold"
                aria-label="Email for FREE Book Resources"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-gold text-brand-charcoal font-bold py-4 px-8 rounded-full hover:bg-brand-gold/90 transition-colors shrink-0"
              >
                Send My FREE Resources!
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://placehold.co/600x500/166534/FEFCE8?text=Freebie+Mockup&font=nunito" 
              alt="A mockup of the free printable worksheets and coloring pages." 
              className="rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;