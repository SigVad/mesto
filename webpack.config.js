const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// подключите к проекту mini-css-extract-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

// module.exports — это синтаксис экспорта в Node.js 
module.exports = {
  //точка входа
  entry: { main: './src/pages/index.js' },
  //точка выхода - итоговый файл
  output: {
	  //путь к точке выхода 
    path: path.resolve(__dirname, 'dist'),
	//имя файла, куда «Вебпак» положит код
    filename: 'main.js',
	//свойство для обновления путей внутри CSS- и HTML-файлов.
      publicPath: ''
  },
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

    open: true // сайт будет открываться сам при запуске npm run dev
  },
    module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
	  // добавили правило для обработки файлов
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource' //оставить в том же формате
      },
	  {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать
        // MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          // добавьте объект options для css,  использующих import
          options: { importLoaders: 1 }
        },
		  // Добавьте postcss-loader
          'postcss-loader'		]
      },
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html' // путь к файлу index.html
  }),
  new CleanWebpackPlugin(), // использовали плагин 
  new MiniCssExtractPlugin(), // подключение плагина для объединения файлов
  ],
};