// components/Testimonials.tsx
const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "IT Manager",
    company: "TechNova Inc.",
    quote: "SoftSell made it so easy to get value from our unused software licenses. Fast and reliable!"
  },
  {
    name: "Michael Chowdhury",
    role: "Procurement Officer",
    company: "DigitalCore BD",
    quote: "Highly recommend SoftSell — we recovered costs quickly with their help."
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="testimonials">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <p className="text-gray-700 dark:text-gray-200 mb-4 italic">"{t.quote}"</p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                — {t.name}, {t.role}, {t.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
