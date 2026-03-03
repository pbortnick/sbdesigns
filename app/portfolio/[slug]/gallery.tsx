"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export default function Gallery({
	images,
	projectName,
}: {
	images: GalleryImage[];
	projectName: string;
}) {
	const [open, setOpen] = useState<number | null>(null);

	const close = () => setOpen(null);
	const prev = () => setOpen((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
	const next = () => setOpen((i) => (i !== null ? (i + 1) % images.length : null));

	useEffect(() => {
		if (open === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);

	const active = open !== null ? images[open] : null;

	return (
		<>
			{/* Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{images.map((img, i) => (
					<button
						key={i}
						onClick={() => setOpen(i)}
						className="group relative overflow-hidden bg-gray-100 block w-full cursor-zoom-in"
						style={{ aspectRatio: `${img.width}/${img.height}` }}
						aria-label={`Open photo ${i + 1}`}
					>
						<Image
							src={img.src}
							alt={img.alt || `${projectName} photo ${i + 1}`}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
							<svg
								className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803zM10.5 7.5v6m3-3h-6"
								/>
							</svg>
						</div>
					</button>
				))}
			</div>

			{/* Lightbox */}
			{active && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
					onClick={close}
				>
					{/* Image — use explicit width/height so Next.js doesn't need a sized container */}
					<div onClick={(e) => e.stopPropagation()}>
						<Image
							src={active.src}
							alt={active.alt || `${projectName} photo ${(open ?? 0) + 1}`}
							width={active.width}
							height={active.height}
							style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto" }}
						/>
					</div>

					{/* Close */}
					<button
						onClick={close}
						className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
						aria-label="Close"
					>
						<svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					{/* Prev */}
					{images.length > 1 && (
						<button
							onClick={(e) => { e.stopPropagation(); prev(); }}
							className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
							aria-label="Previous"
						>
							<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
							</svg>
						</button>
					)}

					{/* Next */}
					{images.length > 1 && (
						<button
							onClick={(e) => { e.stopPropagation(); next(); }}
							className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
							aria-label="Next"
						>
							<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						</button>
					)}

					{/* Counter */}
					<p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.2em]">
						{(open ?? 0) + 1} / {images.length}
					</p>
				</div>
			)}
		</>
	);
}
