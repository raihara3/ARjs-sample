const lobbyPos = document.getElementById('lobby').getAttribute('position')
const room1Pos = document.getElementById('room1').getAttribute('position')

AFRAME.registerComponent('door-on-touch', {
  schema: {
    room: {default: ''}
  },

  init: function () {
    const data = this.data
    this.el.addEventListener('click', function() {
      const camera = document.getElementById('camera')
      const animation = camera.getAttribute('animation')

      let toPos = '0 0 0'
      if(data.room === 'room1') {
        toPos = animation.to === `${lobbyPos.x} 0 ${lobbyPos.z}`
          ? `${room1Pos.x} 0 ${room1Pos.z}`
          : `${lobbyPos.x} 0 ${lobbyPos.z}`
      }

      camera.setAttribute('animation', {
        to: toPos,
      })
    })
  }
})