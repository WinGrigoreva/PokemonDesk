const path = require('path'); // для преобразования относительных путей в абсолютные
const NODE_ENV = process.env.NODE_ENV;
const HTMLWebpackPlugins = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // какие файлы будем обрабатывать
  },
  // webpack по умолчанию собирает файлы в преобразованном (минимализимрованном) продакшен режиме
  mode: NODE_ENV ? NODE_ENV : 'development', // указываем собирать конечный файл в девелопмент режиме или продакшен режиме в зависимости от значения NODE_ENV в process.env
  entry: path.resolve(__dirname, 'src/index.ts'), // откуда брать файл - точку входа в приложение
  // куда ложить конечный файл и как его назвать:
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  watchOptions: {
    ignored: /node_modules/, // не просматривать файлы в папке
    poll: 1000, // пробегаться по файлам для отслеживания изменений каждую мсекунду
  },
  // в разделе описываются какими loaders обрабатывать исходные файлы (по умолчанию вебпак работает с js & json):
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/, // файлы '.js', '.jsx', '.ts', '.tsx'
        exclude: [/node_modules/, path.resolve(__dirname, 'src/server/server.js')],
        use: ['ts-loader'], // преобразуем с помощью ts-loader. Использует tsconfig, который указывает как работать с файлами
      },
      // выносим отдельно css файлы из-за css-modules-typescript-loader?modules, чтобы css файлы повторно не генерировались:
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // файлы css
        // преобразуем следующими loaders:
        use: [
          'style-loader',
          'css-modules-typescript-loader?modules',
          // 'css-loader' //подойдет для обработки css файлов
          // для обработки css модулей описываем объект, в котором указываем какой loader использовать и опции для него:
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]', // указываем как должны выглядеть имена css модулей
                auto: /\.module\.\w+$/i, // проверяет есть ли в названии css файла слово module чтобы использовать и модульные файлы и общие
              },
            },
          },
          'sass-loader', // преобразует sass и css файлы в css
        ],
      },
      // обработка статических файлов (шрифты, картинки,...)
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'images/[name].[ext]',
      //   },
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   loader: 'file-loader',
      //   options: {
      //     name: 'fonts/[name].[ext]',
      //   },
      // },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  // плагины не преобразают файлы, только копируют исходные файлы в папку с конеными файлами:
  plugins: [
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  // используем devServer для запуска локального сервера нашего приложения:
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // что бы роутинг работал корректно
  },
  // указываем необходимость создавать map-файл для связи исходного кода и конечного:
  devtool: 'source-map',
};
