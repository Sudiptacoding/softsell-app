// components/WhyChooseUs.tsx
import { FaShieldAlt, FaRocket, FaDollarSign, FaHandsHelping } from 'react-icons/fa'

const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Secure Transactions",
    desc: "Your license data is handled with full confidentiality."
  },
  {
    icon: <FaRocket className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Fast Process",
    desc: "Valuation and payment within 48 hours."
  },
  {
    icon: <FaDollarSign className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Best Market Prices",
    desc: "We offer the most competitive prices."
  },
  {
    icon: <FaHandsHelping className="text-3xl text-blue-600 dark:text-yellow-400" />,
    title: "Dedicated Support",
    desc: "We help you at every step of the process."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
