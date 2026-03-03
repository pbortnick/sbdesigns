import Image from "next/image";

export default function About() {
	return (
		<div className="pt-10 min-h-screen bg-teal-50" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
			<section className="pt-24 pb-28 px-6">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-0 items-stretch">
					{/* Image */}
					<div className="relative w-full min-h-135 md:min-h-0">
						<Image
							src="/img/about.jpeg"
							alt="Sherry Bortnick"
							fill
							className="object-cover object-top"
							priority
						/>
					</div>

					{/* Text */}
					<div className="bg-gray-50 flex flex-col justify-center px-12 py-16 gap-7">
						<div>
							<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-5">About</p>
							<h1
								className="text-5xl sm:text-6xl font-light text-gray-900 mb-6"
								style={{ fontFamily: "var(--font-cormorant), serif" }}
							>
								Sherry Bortnick
							</h1>
							<div className="w-12 h-px bg-teal-400"></div>
						</div>

						<p className="text-gray-500 text-base leading-relaxed">
							Sherry attended Metropolitan School of Design in Long Island, NY. After being involved
							with Real Estate for years, she decided to pursue her passion of becoming a decorator.
							She has years of experience working on a variety of projects, from Manhattan apartments
							to lavish Hamptons homes.
						</p>
						<p className="text-gray-500 text-base leading-relaxed">
							Whether your home needs updating, full renovation, or just a finishing touch, she
							handles any size of home or scope of design. Sherry experiments with space, color, and
							styles and takes a personal interest in creating a happy home for her clients.
						</p>
						<p className="text-gray-500 text-base leading-relaxed">
							Sherry is located in Fort Lauderdale, FL, but offers both in-person and virtual
							consultations. Feel free to reach out and learn more!
						</p>

						<div className="pt-2">
							<a
								href="mailto:sbdesigns516@gmail.com"
								className="inline-block bg-teal-700 hover:bg-teal-600 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
							>
								Get in Touch
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
