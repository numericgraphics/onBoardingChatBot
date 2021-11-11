module.exports = function (api) {
    api.cache(true)

    const plugins = [
        [
            'module-resolver',
            {
                alias: {
                    '~/assets': './assets',
                    '~/components': './src/components',
                    '~/screens': './src/screens',
                    '~/providers': './src/providers'
                }
            }
        ]
    ]

    return {
        presets: ['babel-preset-expo'],
        plugins
    }
}
