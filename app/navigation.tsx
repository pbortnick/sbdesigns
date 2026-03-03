"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
	{ label: "About", href: "/about" },
	{ label: "Portfolio", href: "/portfolio" },
	{ label: "Testimonials", href: "/testimonials" },
];

export default function Navigation() {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!isHome) return;
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isHome]);

	const solid = !isHome || scrolled;

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				solid ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
				{/* Logo */}
				<Link
					href="/"
					className={`text-xl tracking-[0.25em] uppercase transition-colors ${
						solid ? "text-gray-900" : "text-white"
					}`}
					style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
				>
					SB Designs
				</Link>

				{/* Desktop nav */}
				<nav className="hidden sm:flex items-center gap-10">
					{links.map(({ label, href }) => {
						const active = pathname === href;
						return (
							<Link
								key={href}
								href={href}
								className={`text-xs tracking-[0.25em] uppercase transition-colors ${
									active
										? solid
											? "text-teal-600"
											: "text-teal-300"
										: solid
										? "text-gray-500 hover:text-gray-900"
										: "text-white/70 hover:text-white"
								}`}
							>
								{label}
							</Link>
						);
					})}
				</nav>

				{/* Mobile hamburger */}
				<button
					className={`sm:hidden flex flex-col gap-1.5 p-1 transition-colors ${
						solid ? "text-gray-900" : "text-white"
					}`}
					onClick={() => setMenuOpen((v) => !v)}
					aria-label="Toggle menu"
				>
					<span
						className={`block w-5 h-px bg-current transition-all duration-300 origin-center ${
							menuOpen ? "translate-y-[7px] rotate-45" : ""
						}`}
					/>
					<span
						className={`block w-5 h-px bg-current transition-all duration-300 ${
							menuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`block w-5 h-px bg-current transition-all duration-300 origin-center ${
							menuOpen ? "-translate-y-[7px] -rotate-45" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile menu */}
			<div
				className={`sm:hidden overflow-hidden transition-all duration-300 bg-white ${
					menuOpen ? "max-h-48" : "max-h-0"
				}`}
			>
				<nav className="flex flex-col px-6 py-4 gap-5 border-t border-gray-100">
					{links.map(({ label, href }) => (
						<Link
							key={href}
							href={href}
							onClick={() => setMenuOpen(false)}
							className={`text-xs tracking-[0.25em] uppercase transition-colors ${
								pathname === href ? "text-teal-600" : "text-gray-500 hover:text-gray-900"
							}`}
						>
							{label}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
