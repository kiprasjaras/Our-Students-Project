module.exports = {
  output: {
    publicPath: "/"
  },
  entry: { 
    validationTest: './src/form_validation_test_env/main.js',
    main: './src/index.js', 
    home: './src/js/pages/home.js',
    sidebar: './src/js/pages/sidebar.js',
    test: './src/js/pages/animations.js',
    testimonials: './src/js/pages/testimonials.js',
    routing: './src/js/assets/routing.js',
    routingTest: './src/js/pages/routingTest.js',
    commodities: './src/js/pages/commodities.js'
},
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets',
            esModule: false
          }
        }
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'url-loader',
        }
      }
    ]
  }
}
