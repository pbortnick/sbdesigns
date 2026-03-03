function Footer() {
	return (
		<>
			<div className="bg-teal-900 py-24 px-6 text-center">
				<p className="text-teal-400 text-xs tracking-[0.4em] uppercase mb-6">
					Let&apos;s Connect
				</p>
				<h2
					className="text-5xl sm:text-6xl font-light text-white mb-6"
					style={{ fontFamily: "var(--font-cormorant), serif" }}
				>
					Ready to Transform Your Space?
				</h2>
				<p className="text-teal-100/60 text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
					Let&apos;s start a conversation about your vision. I&apos;d love to
					hear about your project.
				</p>
				<a
					href="mailto:sbdesigns516@gmail.com"
					className="inline-block bg-white text-teal-900 px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-teal-50 transition-colors font-medium"
				>
					Get in Touch
				</a>
			</div>
			{/* Footer */}
			<footer className="bg-gray-950 py-8 px-6">
				<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
					<span
						className="text-white/30 text-sm tracking-[0.3em] uppercase"
						style={{ fontFamily: "var(--font-cormorant), serif" }}
					>
						SB Designs
					</span>
					<span className="text-white/20 text-xs tracking-wide">
						© 2026 Sherry Bortnick. All rights reserved.
					</span>
				</div>
			</footer>
		</>
	);
}

export default Footer;
