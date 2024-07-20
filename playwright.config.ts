import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch:["tests/*.test.ts" ],
  use:{
    headless:false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    }, 
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },*/
  ],
  retries: 0,
  reporter:[
    ['dot'],
    ['json', {
      outputFile: 'jsonReports/jsonReports.json'
    }],
    ['html', {
      open:'never'
    }]
  ]
});
