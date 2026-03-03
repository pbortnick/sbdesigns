import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
	{
		name: "Downtown NYC",
		slug: "downtown-nyc",
		image: "/portfolio/downtown-nyc/living.jpeg",
		category: "Urban Residential",
	},
	{
		name: "Fort Lauderdale",
		slug: "ftl",
		image: "/portfolio/ftl/living-room.jpeg",
		category: "Coastal Living",
	},
	{
		name: "Funky NYC",
		slug: "funky-nyc",
		image: "/portfolio/funky-nyc/living.jpeg",
		category: "Modern Eclectic",
	},
	{
		name: "Jericho",
		slug: "jericho",
		image: "/portfolio/jericho/den.jpeg",
		category: "Suburban Luxury",
	},
	{
		name: "Lakehouse",
		slug: "lakehouse",
		image: "/portfolio/lakehouse/living.jpeg",
		category: "Lakeside Retreat",
	},
	{
		name: "Manhattan",
		slug: "manhattan",
		image: "/portfolio/manhattan/living.jpeg",
		category: "Urban Chic",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
			{/* Hero */}
			<section className="relative h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/hero.jpg"
						alt="Interior Design"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/75"></div>
				</div>

				<div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col gap-3">
					<p className="text-teal-300 text-xs tracking-[0.4em] uppercase mb-8">
						Interior Design
					</p>
					<h1
						className="text-7xl sm:text-8xl lg:text-9xl font-light mb-8 leading-none"
						style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
					>
						SB Designs
					</h1>
					<div className="w-16 h-px bg-teal-400/70 mx-auto mb-8"></div>
					<p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed font-light mb-12 tracking-wide">
						Spaces crafted around how you live — beautiful, intentional, and entirely your own.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="#portfolio"
							className="bg-teal-700 hover:bg-teal-600 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
						>
							View Portfolio
						</a>
						<a
							href="#contact"
							className="border border-white/40 hover:border-white/80 text-white/80 hover:text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
						>
							Get in Touch
						</a>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
					<span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
					<div className="w-px h-12 bg-linear-to-b from-white/40 to-transparent"></div>
				</div>
			</section>

			{/* About / Services */}
			<section id="about" className="bg-white py-28 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-20">
						<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-5">About</p>
						<h2
							className="text-5xl sm:text-6xl font-light text-gray-900 mb-6"
							style={{ fontFamily: "var(--font-cormorant), serif" }}
						>
							Sherry Bortnick
						</h2>
						<div className="w-12 h-px bg-teal-400 mx-auto mb-8"></div>
						<p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
							I&apos;m a passionate and attentive interior designer who takes the time to truly understand my clients&apos; style preferences — creating environments where they feel happy, comfortable, and most importantly, at home.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
						{[
							{
								title: "Personalized Service",
								desc: "Every project begins with listening. I tailor my approach to your unique style, lifestyle, and vision.",
								icon: (
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
									</svg>
								),
							},
							{
								title: "Attention to Detail",
								desc: "From grand architectural gestures to the smallest finishing touches, every element is considered with care.",
								icon: (
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
								),
							},
							{
								title: "Exceptional Results",
								desc: "Spaces that exceed expectations — beautiful, functional, and deeply personal to you.",
								icon: (
									<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
									</svg>
								),
							},
						].map((item) => (
							<div key={item.title}>
								<div className="w-12 h-12 border border-teal-200 rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600">
									{item.icon}
								</div>
								<h3 className="text-base font-medium text-gray-800 mb-3 tracking-wide">{item.title}</h3>
								<p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Portfolio */}
			<section id="portfolio" className="bg-gray-50 py-28 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-5">Portfolio</p>
						<h2
							className="text-5xl sm:text-6xl font-light text-gray-900 mb-6"
							style={{ fontFamily: "var(--font-cormorant), serif" }}
						>
							Projects
						</h2>
						<div className="w-12 h-px bg-teal-400 mx-auto"></div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{portfolioProjects.map((project) => (
							<Link key={project.name} href={`/portfolio/${project.slug}`} className="group relative overflow-hidden bg-gray-200 block" style={{ aspectRatio: "4/3" }}>
								<Image
									src={project.image}
									alt={project.name}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500"></div>
								<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 gap-2">
									<p className="text-teal-300 text-xs tracking-[0.3em] uppercase">{project.category}</p>
									<p
										className="text-white text-2xl font-light"
										style={{ fontFamily: "var(--font-cormorant), serif" }}
									>
										{project.name}
									</p>
								</div>
							</Link>
						))}
					</div>

					<div className="text-center mt-12">
						<Link
							href="/portfolio"
							className="inline-block border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
						>
							View All Projects
						</Link>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id="testimonials" className="bg-white py-28 px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-5">Reviews</p>
						<h2
							className="text-5xl sm:text-6xl font-light text-gray-900 mb-6"
							style={{ fontFamily: "var(--font-cormorant), serif" }}
						>
							What Clients Say
						</h2>
						<div className="w-12 h-px bg-teal-400 mx-auto"></div>
					</div>
					<div className="max-w-3xl mx-auto text-center">
						<svg className="w-8 h-8 text-teal-300 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
							<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
						</svg>
						<p className="text-gray-600 text-lg leading-relaxed font-light italic mb-10">
							Sherry did an AMAZING job helping me renovate my kitchen, den, living room and bedroom. She has the unique ability to really work within your budget, take what you already have and make it look new and refreshed. She listens and understands what you are looking for and finds unique ways to make it your own.
						</p>
						<div className="w-8 h-px bg-teal-400 mx-auto mb-6"></div>
						<p className="text-gray-800 text-sm tracking-[0.2em] uppercase font-medium">Karyn Greenblatt</p>
						<p className="text-gray-400 text-sm mt-1">Manhattan, NY</p>
					</div>
					<div className="text-center mt-14">
						<a
							href="/testimonials"
							className="inline-block border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
						>
							Read All Reviews
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
