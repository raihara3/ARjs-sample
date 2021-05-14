AFRAME.registerComponent('door-on-touch', {
  schema: {
    url: {default: ''}
  },

  init: function () {
    this.el.addEventListener('click', function() {
      location.href = data.url
    })
  }
})