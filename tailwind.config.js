module.exports = {
    purge: {
        mode: 'all',
        content: ['./**/**/*.html', './**/**/*.svelte'],

        options: {
            whitelistPatterns: [/svelte-/],
            defaultExtractor: (content) =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
        },
    },

    theme: {
        fontFamily: {
            ibm: 'IBM Plex Mono, monospace',
        },
        extend: {},
    },
    variants: {},
    plugins: [],
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
};
