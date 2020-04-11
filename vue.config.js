module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assest': 'src/assets', 
                'common': 'src/common',
                'components': 'src/components',
                'network': 'src/network',
            }
        }

    }
}