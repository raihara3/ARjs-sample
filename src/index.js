AFRAME.registerComponent('door-on-touch', {
  schema: {
    room: {default: ''}
  },

  init: function () {
    const data = this.data
    this.el.addEventListener('click', function() {
      console.log(data.room)
      const camera = document.getElementById('camera')
      camera.setAttribute('animation', {
        property: 'position',
        easing: 'linear',
        to: '10 0 0',
        dur: 1000
      })
    })
  }
})