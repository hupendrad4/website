// "use client";
//
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";
//
// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//
//   const toggleMenu = () => setMenuOpen(!menuOpen);
//
//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//     { label: "Blogs", href: "/blogs" },
//     { label: "Career At Quorium", href: "/career" },
//     { label: "Contact", href: "/contact" },
//   ];
//
//   return (
//     <header className="bg-[#00004d] text-white shadow z-50 relative">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src="/quorium-logo.png" alt="Quorium Logo" width={48} height={48} />
//           <span className="text-xl font-bold tracking-wide">Quorium Technologies</span>
//         </div>
//
//         {/* Desktop Links */}
//         <nav className="hidden md:flex gap-6">
//           {navLinks.map(link => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="hover:text-yellow-400 transition font-medium"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>
//
//         {/* Mobile Hamburger Icon */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white text-2xl"
//           aria-label="Toggle Menu"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//
//       {/* Mobile Menu Overlay */}
//       {menuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white text-[#00004d] py-6 px-4 shadow-md rounded-b-xl z-40">
//           <nav className="flex flex-col gap-5">
//             {navLinks.map(link => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="font-semibold text-lg hover:text-accent transition"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
