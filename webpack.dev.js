const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Įdeda ... <style> ... CSS ... </style></head>
          'css-loader', // Paverčia css į tekstą
          'postcss-loader', // Uždeda papildomus prefix pagal anršyklę
          'sass-loader' // Paverčia scss į css
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      chunks: ['main', 'home'],
    }),
    new HtmlWebpackPlugin({

      filename: 'dev/btn.html',
      template: './src/html/dev/btn.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/cards.html',
      template: './src/html/dev/cards.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/bg-img.html',
      template: './src/html/dev/bg-img.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/scrollAnimation.html',
      template: './src/html/dev/scrollAnimation.html',
      chunks: ['main', 'test'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/sandraM.html',
      template: './src/html/dev/sandraM.html',
      chunks: ['main', 'testimonials'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/erika.html',
      template: './src/html/dev/erika.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/sidebarView.html',
      filename: 'homepage.html',
      template: './src/html/dev/homepage.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/routingEnv.html',
      template: './src/html/dev/routingEnv.html',
      chunks: ['main', 'routingTest'],
    }),
    new HtmlWebpackPlugin({
      filename: 'validtest.html',
      template: './src/form_validation_test_env/index.html',
      chunks: ['validationTest']
    }),
    new HtmlWebpackPlugin({
      filename: 'sidebarView.html',
      template: './src/html/dev/sidebarView.html',
      chunks: ['main', 'sidebar'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/sidebarExp.html',
      template: './src/html/dev/sidebarExpansion.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'servicesPage.html',
      template: './src/html/dev/servicesPage.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/html/dev/news.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/forms.html',
      template: './src/html/dev/formImputs.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dev/careers-inputs.html',
      template: './src/html/dev/careers-inputs.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'commodities.html',
      template: './src/html/dev/commodities.html',
      chunks: ['main', 'commodities']
    }),
    new HtmlWebpackPlugin({
      filename: 'shipingFormPage.html',
      template: './src/html/dev/shipingFormPage.html',
      chunks: ['main']
    })
  ],
});
