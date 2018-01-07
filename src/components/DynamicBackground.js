/**
 * Dynamic background built in P5.js
 * Ported and modified from the BouncyBubbles Processing demo
 */

import p5 from 'p5'
import React, { Component } from 'react'

class DynamicBackground extends Component {
  constructor(props) {
    super(props)
    this.numBalls = 40
    this.spring = 0.05
    this.gravity = 0
    this.friction = -0.9
    this.instantiate = this.instantiate.bind(this)
  }

  instantiate(reinit = false) {
    if (reinit) this.p5.remove()
    this.p5 = new p5(this.sketch.bind(this), this.canvas)
  }

  sketch(p) {
    let numBalls = this.numBalls
    let spring = this.spring
    let gravity = this.gravity
    let friction = this.friction
    let width = this.width
    let height = this.height

    p.setup = () => {
      p.createCanvas(width, height)
      this.balls = Array(numBalls)
        .fill(null)
        .map(
          (d, i, a) =>
            new Ball(
              p.random(width),
              p.random(height),
              p.random(30, 70),
              i,
              0.01
            )
        )
      p.noStroke()
      p.fill(0, 10)
    }

    p.draw = () => {
      p.background(255)
      for (let ball of this.balls) {
        ball.collide(this.balls)
        ball.move(this.balls)
        ball.display()
      }
    }

    class Ball {
      constructor(xin, yin, din, idin, iv = 0) {
        this.vx = iv
        this.vy = iv
        this.x = xin
        this.y = yin
        this.diameter = din
        this.id = idin
      }

      collide(balls) {
        for (let i = this.id + 1; i < numBalls; i++) {
          let dx = balls[i].x - this.x
          let dy = balls[i].y - this.y
          let distance = p.sqrt(dx * dx + dy * dy)
          let minDist = balls[i].diameter / 2 + this.diameter / 2
          if (distance < minDist) {
            let angle = p.atan2(dy, dx)
            let targetX = this.x + p.cos(angle) * minDist
            let targetY = this.y + p.sin(angle) * minDist
            let ax = (targetX - balls[i].x) * spring
            let ay = (targetY - balls[i].y) * spring
            this.vx -= ax
            this.vy -= ay
            balls[i].vx += ax
            balls[i].vy += ay
          }
        }
      }

      move(balls) {
        this.vy += gravity
        this.x += this.vx
        this.y += this.vy
        if (this.x + this.diameter / 2 > width) {
          this.x = width - this.diameter / 2
          this.vx *= friction
        } else if (this.x - this.diameter / 2 < 0) {
          this.x = this.diameter / 2
          this.vx *= friction
        }

        if (this.y + this.diameter / 2 > height) {
          this.y = height - this.diameter / 2
          this.vy *= friction
        } else if (this.y - this.diameter / 2 < 0) {
          this.y = this.diameter / 2
          this.vy *= friction
        }
      }

      display() {
        p.ellipse(this.x, this.y, this.diameter, this.diameter)
      }
    }
  }

  componentDidMount() {
    this.height = window.innerHeight
    this.width = window.innerWidth
    this.instantiate()
  }

  componentDidUpdate() {
    this.instantiate(true)
  }

  render() {
    return (
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: -99,
          height: 0,
          width: 0,
        }}
        ref={canvas => (this.canvas = canvas)}
      />
    )
  }
}

export default DynamicBackground
