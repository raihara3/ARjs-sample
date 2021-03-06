let markerVisible = {
  m0: false,
  m1: false
}

AFRAME.registerComponent('registerevents', {
  init: function() {
    let marker = this.el

    marker.addEventListener('markerFound', function() {
      markerVisible[ marker.id ] = true
    })

    marker.addEventListener('markerLost', function() {
      markerVisible[ marker.id ] = false
    })
  }
})

AFRAME.registerComponent('run', {
  init: function() {
    this.m0 = document.querySelector("#m0")
    this.m1 = document.querySelector("#m1")
    this.p0 = new THREE.Vector3()
    this.p1 = new THREE.Vector3()

    let geometry = new THREE.CylinderGeometry( 0.05, 0.05, 1, 12 )
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) )
    geometry.applyMatrix( new THREE.Matrix4().makeRotationX( THREE.Math.degToRad( 90 ) ) )
    let material = new THREE.MeshLambertMaterial( {color: 0xFF0000} )
    this.cylinder = new THREE.Mesh( geometry, material )
    this.cylinderGroup = document.querySelector('#cylinderGroup').object3D
    this.cylinderGroup.add( this.cylinder )
  },

  tick: function(time, deltaTime) {
    if(markerVisible["m0"] && markerVisible["m1"]) {
      this.m0.object3D.getWorldPosition(this.p0)
      this.m1.object3D.getWorldPosition(this.p1)

      let distance = this.p0.distanceTo(this.p1)
      console.log(distance)
      this.cylinderGroup.lookAt(this.p1)
      this.cylinder.scale.set(1,1,distance)
      // this.cylinder.visible = true
    } else {
      // this.cylinder.visible = false
    }
  }
})