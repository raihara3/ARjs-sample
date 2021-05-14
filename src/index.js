AFRAME.registerComponent('door-on-touch', {
  schema: {
    url: {default: ''}
  },

  init: function () {
    this.el.addEventListener('click', function() {
      // location.href = data.url
      const camera = document.getElementById('camera')
      // camera.setAttribute('position', {x: 5, y: 0, z: 0})

      // animation="property:position; easing: linear;"
      camera.setAttribute('animation', {
        property: 'position',
        easing: 'linear',
        to: '10 0 0',
        dur: 1000
      })
    })
  }
})