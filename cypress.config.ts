import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    supportFile: false,
    'baseUrl': 'http://localhost:4200'
  },
  
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
  
})