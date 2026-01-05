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
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  // Mostrar cada test individualmente en la consola
  verbose: true,
};