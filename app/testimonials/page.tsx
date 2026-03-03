import Image from "next/image";
import testimonialData from "./testimonials.json";

export const metadata = {
	title: "Testimonials — SB Designs",
	description:
		"What clients say about working with Sherry Bortnick of SB Designs.",
};

export default function TestimonialsPage() {
	const { testimonials } = testimonialData;

	return (
		<div
			className="min-h-screen"
			style={{ fontFamily: "var(--font-jost), sans-serif" }}
		>


			{/* Hero */}
			<section className="relative h-80 flex items-end justify-center overflow-hidden">
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, #0f3d3a 0%, #134e4a 60%, #1a5c51 100%)",
					}}
				></div>
				<div className="relative z-10 text-center text-white px-6 pb-12">
					<p className="text-teal-400 text-xs tracking-[0.4em] uppercase mb-4">
						Reviews
					</p>
					<h1
						className="text-6xl sm:text-7xl font-light leading-none"
						style={{
							fontFamily: "var(--font-cormorant), serif",
							fontWeight: 300,
						}}
					>
						What Clients Say
					</h1>
					<div className="w-12 h-px bg-teal-400/70 m-0 mx-auto mt-6"></div>
				</div>
			</section>

			{/* Testimonials */}
			<section
				className="py-32 px-6"
				style={{
					background:
						"linear-gradient(160deg, #f8fafa 0%, #eef5f5 40%, #f5f0ee 100%)",
				}}
			>
				<div className="max-w-5xl mx-auto space-y-36">
					{testimonials.map((t, i) => (
						<article
							key={t.name}
							className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-20 items-center`}
						>
							{/* Image */}
							<div className="w-full lg:w-1/2 shrink-0">
								<div
									className="relative overflow-hidden shadow-lg"
									style={{ aspectRatio: `${t.image.width}/${t.image.height}` }}
								>
									<Image
										src={t.image.src}
										alt={t.image.alt}
										width={t.image.width}
										height={t.image.height}
										className="object-cover w-full h-full"
									/>
								</div>
							</div>

							{/* Content */}
							<div className="w-full lg:w-1/2 py-6">
								{/* Quote mark */}
								<div
									className="text-teal-300/60 mb-2 leading-none select-none"
									style={{
										fontFamily: "var(--font-cormorant), serif",
										fontSize: "8rem",
										lineHeight: 1,
									}}
									aria-hidden="true"
								>
									&ldquo;
								</div>
								<p className="text-gray-600 text-base leading-[1.9] mb-10 -mt-8">
									{t.quote}
								</p>
								<div className="flex items-center gap-5">
									<div className="w-12 h-px bg-teal-400"></div>
									<div>
										<p
											className="text-gray-800 text-xl font-light tracking-wide"
											style={{ fontFamily: "var(--font-cormorant), serif" }}
										>
											{t.name}
										</p>
										<p className="text-teal-600 text-xs tracking-[0.25em] uppercase mt-1">
											{t.location}
										</p>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
