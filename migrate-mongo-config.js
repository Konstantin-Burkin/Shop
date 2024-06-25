require('dotenv').config()

const config = {
  mongodb: {
    url: process.env.NEXT_PUBLIC_DB_URL,
    databaseName: process.env.NEXT_PUBLIC_DB_NAME,
    options: {
      // Убираем устаревшие опции
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // connectTimeoutMS: 3600000, // можно использовать при необходимости
      // socketTimeoutMS: 3600000, // можно использовать при необходимости
    },
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.js',
  useFileHash: false,
  moduleSystem: 'commonjs',
}

module.exports = config
