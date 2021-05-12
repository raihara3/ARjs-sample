const Index = () => {
  return (
    <>
      <head>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
      </head>

      <a-scene>
        <a-assets>
          <a-asset-item id="model" src="model.gltf"></a-asset-item>
          <img id="symbol" src="symbol.png"></img>
        </a-assets>

        <a-gltf-model src="#model" position="3 0 -10"></a-gltf-model>
        <a-entity gltf-model="#model" scale="0.001 0.001 0.001" material="color: red"></a-entity>

        <a-box position="5 0 -7" rotation="0 45 0" color="#4CC3D9" material="src: #symbol"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      </a-scene>
    </>
  )
}

export default Index
