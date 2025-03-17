import React from 'react';
import { Coffee, Leaf, ShoppingBag, Store, Users, ChevronDown, Instagram, Facebook, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#FAF7F2]/90 backdrop-blur-sm z-50 border-b border-[#8B7355]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-[#8B7355]" />
              <span className="ml-2 text-xl font-semibold text-[#2C2420]">Nauty Elixirs</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#shop" className="text-[#2C2420] hover:text-[#8B7355]">Shop</a>
              <a href="#about" className="text-[#2C2420] hover:text-[#8B7355]">About</a>
              <a href="#wholesale" className="text-[#2C2420] hover:text-[#8B7355]">Wholesale</a>
              <a href="#benefits" className="text-[#2C2420] hover:text-[#8B7355]">Benefits</a>
              <a href="#contact" className="text-[#2C2420] hover:text-[#8B7355]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Feel Naughty, Stay Grounded</h1>
            <p className="text-xl md:text-2xl mb-8">Herbal, organic, and crafted for wellness</p>
            <a
              href="#shop"
              className="inline-block bg-[#C65D45] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#A84935] transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="shop" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2C2420] mb-16">Our Signature Blend</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800"
                alt="Herbal Dark Roast"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2C2420] mb-4">Herbal Dark Roast</h3>
              <p className="text-lg text-[#2C2420]/80 mb-6">
                A rich, full-bodied blend of roasted chicory root, dandelion, and chaga mushroom. 
                Experience the depth of flavor without the caffeine.
              </p>
              <div className="bg-[#FAF7F2] p-6 rounded-lg mb-8">
                <h4 className="font-semibold mb-4">How to Prepare:</h4>
                <ol className="space-y-2">
                  <li>1. Heat water to 205°F (96°C)</li>
                  <li>2. Add 2 tablespoons per 8 oz of water</li>
                  <li>3. Steep for 4-5 minutes</li>
                  <li>4. Strain and enjoy</li>
                </ol>
              </div>
              <button className="bg-[#8B7355] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6A573F] transition-colors">
                Shop Herbal Dark Roast
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2C2420] mb-16">Nature's Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Prebiotic Support",
                description: "Rich in inulin from chicory root, supporting gut health and digestion"
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Liver Support",
                description: "Dandelion root helps detoxify and support healthy liver function"
              },
              {
                icon: <Store className="h-8 w-8" />,
                title: "Antioxidant Rich",
                description: "Packed with powerful antioxidants from wild-harvested chaga mushroom"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-[#C65D45] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#2C2420] mb-2">{benefit.title}</h3>
                <p className="text-[#2C2420]/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2C2420] mb-6">Our Story</h2>
              <p className="text-lg text-[#2C2420]/80 mb-6">
                Born on the pristine shores of Salt Spring Island, Nauty Elixirs began with a simple mission: 
                to create a coffee alternative that doesn't compromise on taste or wellness benefits.
              </p>
              <p className="text-lg text-[#2C2420]/80 mb-6">
                Our founder's journey led to discovering the perfect blend of organic herbs and mushrooms, 
                creating a ritual that grounds you while letting you feel a little naughty about skipping your coffee.
              </p>
              <p className="text-lg text-[#2C2420]/80">
                Every ingredient is thoughtfully sourced and carefully crafted to deliver a premium experience 
                that honors both tradition and innovation.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=800"
                alt="Founder Story"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 bg-[#2C2420] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl text-white/80">Bring wellness to your business</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Cafés</h3>
              <ul className="space-y-4">
                <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2" />Premium coffee alternative</li>
                <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2" />Competitive margins</li>
                <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2" />Training support</li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">For Wellness Businesses</h3>
              <ul className="space-y-4">
                <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2" />Bulk ordering options</li>
                <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2" />Custom packaging available</li>
                <li className="flex items-center"><ChevronDown className="h-5 w-5 mr-2" />Marketing support</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-[#C65D45] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#A84935] transition-colors">
              Request Wholesale Information
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2C2420] mb-16">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Finally, a coffee alternative that actually tastes amazing! The ritual of preparing it has become my favorite part of the morning.",
                author: "Sarah M."
              },
              {
                text: "As a café owner, our customers love having this option. The wholesale support has been incredible.",
                author: "James L."
              },
              {
                text: "The perfect blend of wellness and indulgence. I don't even miss coffee anymore!",
                author: "Emily R."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#FAF7F2] p-8 rounded-lg">
                <p className="text-[#2C2420]/80 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-[#2C2420]">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C2420] mb-4">Get in Touch</h2>
            <p className="text-xl text-[#2C2420]/80">We'd love to hear from you</p>
          </div>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2C2420]">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-[#8B7355]/20 shadow-sm focus:border-[#8B7355] focus:ring focus:ring-[#8B7355]/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2420]">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-[#8B7355]/20 shadow-sm focus:border-[#8B7355] focus:ring focus:ring-[#8B7355]/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2420]">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-[#8B7355]/20 shadow-sm focus:border-[#8B7355] focus:ring focus:ring-[#8B7355]/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B7355] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#6A573F] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2420] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Coffee className="h-8 w-8" />
                <span className="ml-2 text-xl font-semibold">Nauty Elixirs</span>
              </div>
              <p className="text-white/80">Feel Naughty, Stay Grounded</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#shop" className="text-white/80 hover:text-white">Shop</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
                <li><a href="#wholesale" className="text-white/80 hover:text-white">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-white/80 hover:text-white cursor-pointer" />
                <Facebook className="h-6 w-6 text-white/80 hover:text-white cursor-pointer" />
                <Mail className="h-6 w-6 text-white/80 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border-0 focus:ring-2 focus:ring-[#C65D45]"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#C65D45] rounded-r-full hover:bg-[#A84935] transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2025 Nauty Elixirs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;