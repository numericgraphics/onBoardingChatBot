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
                    '~/providers': './src/providers',
                    '~/reducers': './src/reducers',
                    '~/tools': './src/tools',
                    '~/factories': './src/factories'
                }
            }
        ]
    ]

    return {
        presets: ['babel-preset-expo'],
        plugins
    }
}
