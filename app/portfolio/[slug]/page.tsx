import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import portfolioData from "../portfolio.json";
import Gallery from "./gallery";

export function generateStaticParams() {
	return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const project = portfolioData.projects.find((p) => p.slug === slug);
	if (!project) notFound();

	return (
		<div className="min-h-screen" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
			{/* Hero */}
			<div className="relative h-[70vh] w-full">
				<Image
					src={project.coverImage.src}
					alt={project.coverImage.alt || project.name}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-black/55" />
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
					<p className="text-teal-300 text-xs tracking-[0.4em] uppercase mb-5">Portfolio</p>
					<h1
						className="text-6xl sm:text-7xl font-light text-white mb-5"
						style={{ fontFamily: "var(--font-cormorant), serif" }}
					>
						{project.name}
					</h1>
					<div className="w-12 h-px bg-teal-400/70 mx-auto"></div>
				</div>
			</div>

			{/* Content */}
			<section className="bg-white py-20 px-6">
				<div className="max-w-5xl mx-auto">
					{/* Description + Details */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
						<div>
							<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-4">About</p>
							<p className="text-gray-600 text-lg leading-relaxed font-light">
								{project.description}
							</p>
						</div>
						<div>
							<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-4">Details</p>
							<ul className="space-y-4">
								{project.details.map((detail) => (
									<li
										key={detail.heading}
										className="flex flex-col gap-1 border-b border-gray-100 py-4"
									>
										<span className="text-xs text-gray-400 tracking-[0.15em] uppercase">
											{detail.heading}
										</span>
										<span className="text-gray-700 text-sm">{detail.content}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Gallery */}
					<div className="mb-16">
						<p className="text-teal-600 text-xs tracking-[0.35em] uppercase mb-8 text-center">
							Gallery
						</p>
						<Gallery images={project.images} projectName={project.name} />
					</div>

					{/* Back */}
					<div className="text-center">
						<Link
							href="/portfolio"
							className="inline-block border border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors"
						>
							← Back to Portfolio
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
