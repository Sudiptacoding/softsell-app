// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-gray-400">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
