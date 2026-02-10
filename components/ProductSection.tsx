'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Palette, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface Product {
    id: number;
    name: string;
    category: 'Adhesives' | 'Grouts';
    description: string;
    specs: string[];
    shades: string[];
}

const products: Product[] = [
    // Tile Adhesives (4 Variants)
    {
        id: 1,
        name: 'AstoreaFix Standard',
        category: 'Adhesives',
        description: 'A high-performance, polymer-modified cementitious adhesive designed for fixing ceramic tiles and small format stones on internal walls and floors. Ensures strong bonding and durability.',
        specs: ['Type 1 Adhesive', 'Internal Use', 'Slip Resistant'],
        shades: ['#808080', '#FFFFFF'] // Grey, White
    },
    {
        id: 2,
        name: 'AstoreaFix Premium',
        category: 'Adhesives',
        description: 'Superior grab adhesive ideal for vitrified tiles, natural stones, and large format tiles. Enhanced flexibility accommodates thermal expansion.',
        specs: ['Type 2 Adhesive', 'Internal & External', 'Extended Open Time'],
        shades: ['#808080', '#FFFFFF']
    },
    {
        id: 3,
        name: 'AstoreaFix Ultra',
        category: 'Adhesives',
        description: 'Deformable adhesive perfect for large format tiles, swimming pools, and exterior cladding. Offers exceptional flexibility and bond strength.',
        specs: ['Type 3 Adhesive', 'Deformable', 'Water Resistant'],
        shades: ['#808080', '#FFFFFF']
    },
    {
        id: 4,
        name: 'AstoreaFix Flex',
        category: 'Adhesives',
        description: 'Highly flexible adhesive specifically formulated for drywall substrates like plywood, gypsum board, and cement fiber board.',
        specs: ['Type 4 Adhesive', 'Highly Flexible', 'Vibration Resistant'],
        shades: ['#808080', '#FFFFFF']
    },

    // Epoxy Grout (1 Variant)
    {
        id: 5,
        name: 'AstoreaGuard Epoxy',
        category: 'Grouts',
        description: 'A three-component, stain-free epoxy grout. Chemical resistant, waterproof, and hygienic - perfect for hospitals, kitchens, and bathrooms.',
        specs: ['Stain Free', 'Chemical Resistant', 'Anti-Bungal'],
        shades: ['#000000', '#FFFFFF', '#FFFFF0', '#A52A2A', '#708090', '#E5E4E2', '#FFD700', '#C0C0C0']
    },

    // Premium Grout (1 Variant)
    {
        id: 6,
        name: 'AstoreaFine Grout',
        category: 'Grouts',
        description: 'Smooth finish, polymer-modified cementitious grout for tile joints up to 5mm. Water-repellent and resistant to cracking and powdering.',
        specs: ['Smooth Finish', 'Water Repellent', 'Crack Free'],
        shades: ['#000000', '#FFFFFF', '#FFFFF0', '#A52A2A', '#708090', '#E5E4E2']
    },
];

const shadeNames: Record<string, string> = {
    '#000000': 'Black',
    '#FFFFFF': 'White',
    '#FFFFF0': 'Ivory',
    '#A52A2A': 'Brown',
    '#708090': 'Slate Grey',
    '#E5E4E2': 'Platinum Grey',
    '#FFD700': 'Golden Sparkle',
    '#C0C0C0': 'Silver Sparkle',
    '#808080': 'Grey'
};

const ProductCard = ({ product }: { product: Product }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className="relative group rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-200/50 hover:shadow-xl transition-all duration-500 border-[0.5px] border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Soft Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-50 opacity-50 pointer-events-none"></div>

            <div className="relative p-8 flex flex-col h-full z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-xs font-bold text-brand-teal uppercase tracking-widest">{product.category}</span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mt-2">{product.name}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shadow-sm text-gray-400 group-hover:text-brand-teal transition-colors border border-gray-100">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                {/* Floating Image Placeholder */}
                <motion.div
                    className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 shadow-inner flex items-center justify-center relative overflow-hidden"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="text-gray-400 font-light tracking-widest uppercase text-sm">Product Visual</div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                </motion.div>

                {/* Specs Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-600 uppercase tracking-wide border border-gray-200">
                            {spec}
                        </span>
                    ))}
                </div>

                {/* Expandable Description */}
                <div className="mt-auto">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 pt-2 border-t border-gray-100">
                                    {product.description}
                                </p>

                                {/* Shade Swatches */}
                                <div className="mb-6">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Palette size={12} /> Shades Available
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.shades.map((shade, i) => (
                                            <div key={i} className="group/shade relative">
                                                <div
                                                    className="w-6 h-6 rounded-full border border-gray-200 shadow-sm cursor-help hover:scale-110 transition-transform"
                                                    style={{ backgroundColor: shade }}
                                                ></div>
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover/shade:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                                    {shadeNames[shade] || shade}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full py-3 flex items-center justify-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-teal transition-colors border-t border-gray-100 group-hover:border-brand-teal/20"
                    >
                        {isOpen ? 'Show Less' : 'Read More & Shades'}
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProductSection() {
    return (
        <section id="products" className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#E5E4E2] font-sans selection:bg-brand-teal selection:text-white relative overflow-hidden">
            {/* Specular Studio Light Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff,_transparent)] opacity-60 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                {/* Section Header */}
                <div className="mb-24 text-center relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter mb-6 drop-shadow-sm"
                    >
                        ENGINEERED <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">EXCELLENCE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg font-light"
                    >
                        Professional-grade adhesives and grouts designed for precision, durability, and aesthetic perfection.
                    </motion.p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Grout Visualizer Link (Kept Dark for Contrast/CTA) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-teal to-blue-600 p-[1px] shadow-2xl"
                >
                    <div className="bg-[#1A1A1A] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/blueprint_bg.svg')] opacity-10 bg-repeat bg-center"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Visualize Your Space</h2>
                            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
                                Not sure which grout color matches your tiles? Use our interactive visualizer tool to experiment with different combinations.
                            </p>
                            <Link href="/#grout-visualizer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 duration-300">
                                <Palette size={20} />
                                Open Grout Visualizer
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
