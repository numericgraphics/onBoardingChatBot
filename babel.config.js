module.exports = function (api) {
    api.cache(true)

    const plugins = [
        [
            'module-resolver',
            {
                alias: {
                    '~/assets': './assets'
                }
            }
        ]
    ]

    return {
        presets: ['babel-preset-expo'],
        plugins
    }
}
