module.exports = {
  // Indica que el entorno de ejecución es Node.js
  testEnvironment: 'node',

  // Indica que queremos reportes de cobertura de código
  collectCoverage: true,

  // Directorio donde se guardarán los reportes
  coverageDirectory: 'coverage',

  // Archivos de los que queremos recolectar cobertura
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/server.js', // Excluimos el servidor para no sesgar el reporte
  ],

  // Umbrales de calidad (el test falla si no se alcanzan estos % )
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },

  // Mostrar cada test individualmente en la consola
  verbose: true,
};