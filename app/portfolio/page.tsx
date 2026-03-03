import Image from "next/image";
import Link from "next/link";
import portfolioData from "./portfolio.json";

export default function PortfolioPage() {
	const { projects } = portfolioData;

	return (
		<div className="min-h-screen" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
			{/* Page Header */}
			<section className="bg-gray-50 pt-32 pb-20 px-6 text-center">
				<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-5">Work</p>
				<h1
					className="text-5xl sm:text-6xl font-light text-gray-900 mb-6"
					style={{ fontFamily: "var(--font-cormorant), serif" }}
				>
					Portfolio
				</h1>
				<div className="w-12 h-px bg-teal-400 mx-auto mb-6"></div>
				<p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed font-light">
					A curated selection of spaces designed with intention and care.
				</p>
			</section>

			{/* Projects Grid */}
			<section className="bg-white py-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
						{projects.map((project) => (
							<Link key={project.slug} href={`/portfolio/${project.slug}`} className="group block">
								<div
									className="relative overflow-hidden bg-gray-100"
									style={{ aspectRatio: "4/3" }}
								>
									<Image
										src={project.coverImage.src}
										alt={project.coverImage.alt || project.name}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
								</div>
								<div className="pt-5 pb-2">
									<h2
										className="text-2xl font-light text-gray-900 mb-2"
										style={{ fontFamily: "var(--font-cormorant), serif" }}
									>
										{project.name}
									</h2>
									<p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
									<p className="text-teal-600 text-xs tracking-[0.2em] uppercase mt-4 group-hover:text-teal-800 transition-colors">
										View Project →
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
