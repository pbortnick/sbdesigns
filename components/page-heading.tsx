import React from 'react';

export default function PageHeading({ pageTitle }: {pageTitle: string}) {
	return (
		<>
			<h1 className="mx-auto text-center font-k2d text-6xl tracking-wider">
			{pageTitle}
		</h1>
	<hr className="mx-auto h-1 w-3/4 bg-gold" />
	</>
	)
}