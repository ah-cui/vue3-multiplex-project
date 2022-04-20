/**
     * Makes a nice constellation on canvas
     * @constructor Constellation
     */
function Constellation (canvas, options) {
  const $canvas = canvas
  const context = canvas.getContext('2d')
  const config = options

  function Star () {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height

    this.vx = (config.velocity - (Math.random() * 0.5))
    this.vy = (config.velocity - (Math.random() * 0.5))

    this.radius = config.star.randomWidth ? (Math.random() * config.star.width) : config.star.width
  }

  Star.prototype = {
    create: function () {
      context.beginPath()
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      context.fill()
    },

    animate: function () {
      let i
      for (i = 0; i < config.length; i++) {
        const star = config.stars[i]

        if (star.y < 0 || star.y > canvas.height) {
          star.vx = star.vx
          star.vy = -star.vy
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = -star.vx
          star.vy = star.vy
        }

        star.x += star.vx
        star.y += star.vy
      }
    },

    line: function () {
      const length = config.length
      let iStar
      let jStar
      let i
      let j

      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          iStar = config.stars[i]
          jStar = config.stars[j]

          if (
            (iStar.x - jStar.x) < config.distance &&
                            (iStar.y - jStar.y) < config.distance &&
                            (iStar.x - jStar.x) > -config.distance &&
                            (iStar.y - jStar.y) > -config.distance
          ) {
            if (
              (iStar.x - config.position.x) < config.radius &&
                                (iStar.y - config.position.y) < config.radius &&
                                (iStar.x - config.position.x) > -config.radius &&
                                (iStar.y - config.position.y) > -config.radius
            ) {
              context.beginPath()
              context.moveTo(iStar.x, iStar.y)
              context.lineTo(jStar.x, jStar.y)
              context.stroke()
              context.closePath()
            }
          }
        }
      }
    }
  }

  this.createStars = function () {
    const length = config.length
    let star = {}
    let i = 0

    context.clearRect(0, 0, canvas.width, canvas.height)

    for (i = 0; i < length; i++) {
      config.stars.push(new Star())
      star = config.stars[i]

      star.create()
    }

    star.line()
    star.animate()
  }

  this.setCanvas = function () {
    canvas.width = config.width
    canvas.height = config.height
  }

  this.setContext = function () {
    context.fillStyle = config.star.color
    context.strokeStyle = config.line.color
    context.lineWidth = config.line.width
  }

  this.setInitialPosition = function () {
    if (!options || !options.hasOwnProperty('position')) {
      config.position = {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5
      }
    }
  }

  this.loop = function (callback) {
    callback()

    window.requestAnimationFrame(function () {
      this.loop(callback)
    }.bind(this))
  }

  this.bind = function () {
    $canvas.addEventListener('mousemove', function (e) {
      const rect = $canvas.getBoundingClientRect()
      const offset = {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      }

      config.position.x = e.pageX - offset.left
      config.position.y = e.pageY - offset.top
    })
  }

  this.init = function () {
    this.setCanvas()
    this.setContext()
    this.setInitialPosition()
    this.loop(this.createStars)
    this.bind()
  }
}

export default Constellation
