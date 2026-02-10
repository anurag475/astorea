import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white py-20 border-t border-white/5 relative z-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-black tracking-widest mb-6 text-white">ASTOREA</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
                            Engineered for perfection. The gold standard in tile adhesives, grouts, and construction chemicals. Building the future, one bond at a time.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-pink hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={18} /></Link>
                        </div>
                    </div>

                    {/* Contact - Gurgaon */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-teal">Contact Us</h4>
                        <ul className="space-y-6 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-brand-orange mt-1 shrink-0" />
                                <span>
                                    Plot No. 123, Udyog Vihar Phase IV,<br />
                                    Gurgaon, Haryana 122015,<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-orange shrink-0" />
                                <span>+91 124 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-orange shrink-0" />
                                <span>contact@astorea.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-teal">Products</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/products" className="hover:text-white hover:translate-x-1 inline-block transition-all">Tile Adhesives</Link></li>
                            <li><Link href="/products" className="hover:text-white hover:translate-x-1 inline-block transition-all">Epoxy Grouts</Link></li>
                            <li><Link href="/products" className="hover:text-white hover:translate-x-1 inline-block transition-all">Stone Care</Link></li>
                            <li><Link href="/products" className="hover:text-white hover:translate-x-1 inline-block transition-all">Waterproofing</Link></li>
                            <li><Link href="/products" className="hover:text-white hover:translate-x-1 inline-block transition-all">Wall Putty</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-brand-teal">Legal</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>
                        © {new Date().getFullYear()} Astorea Construction Chemicals Pvt. Ltd. All rights reserved.
                    </p>
                    <p>
                        Designed with precision in India.
                    </p>
                </div>
            </div>
        </footer>
    );
}
