import express from 'express'
import { SVG } from '@svgdotjs/svg.js'
import { join } from 'path'

const app = express()

app.get('/', (req, res) => {
  try {
    // Create SVG using svg.js
    const svg = SVG().size(200, 100)
    svg.rect(100, 50).move(10, 10).fill('blue')

    // Set the content type to SVG
    res.setHeader('Content-Type', 'image/svg+xml')
    // Send the SVG as the response
    res.send(svg.svg())
  } catch (error) {
    console.error('Error creating SVG:', error)
    res.status(500)
    res.sendFile(join(__dirname, '..', 'templates/misc', 'error.svg'))
  }
})

// Export the express app for AWS Lambda
export const handler = app
