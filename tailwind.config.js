const extendedSpacing = {
	spacing: {},
};

for (let i = 1; i <= 200; i++) {
	extendedSpacing.spacing[i] = `${i * 0.25}rem`;
}

for (let i = 1; i <= 11; i++) {
	const fraction = i / 12;
	extendedSpacing.spacing[`${i}/12`] = `${fraction * 100}%`;
}

const extendedBorder = {
	borderWidth: {},
};

for (let i = 1; i <= 8; i++) {
	extendedBorder.borderWidth[i] = `${i}px`;
}

const zIndexValues = {};
for (let i = 0; i <= 100; i += 1) {
	zIndexValues[i] = i;
}

module.exports = {
	darkMode: "class",

	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			iransans: ["IRANSansX"],
		},
		extend: {
			borderRadius: {
				"var-20": "var(--large-radius)",
				"var-16": "var(--regular-radius)",
				"var-12": "var(--medium-radius)",
				"var-8": "var(--small-radius)",
			},

			...extendedSpacing,
			...extendedBorder,
			zIndex: zIndexValues,
		},
	},
	plugins: [],
};
