import { FaUpload, FaSearch, FaHandshake, FaMoneyBillWave } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload className="text-indigo-600 dark:text-indigo-400 text-3xl" />,
      title: 'Submit Details',
      description: 'Upload your software information securely.',
    },
    {
      icon: <FaSearch className="text-teal-600 dark:text-teal-400 text-3xl" />,
      title: 'Get Evaluation',
      description: 'We assess the resale value of your license.',
    },
    {
      icon: <FaHandshake className="text-orange-600 dark:text-orange-400 text-3xl" />,
      title: 'Accept Offer',
      description: 'Agree to our best market-based offer.',
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 dark:text-green-400 text-3xl" />,
      title: 'Get Paid',
      description: 'Receive fast and secure payment.',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">How It Works</h2>
        <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
          Just four easy steps to sell your unused software licenses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 shadow-sm dark:shadow-md rounded-xl p-6 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
