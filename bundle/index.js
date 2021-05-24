/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let markerVisible = {\n  m0: false,\n  m1: false\n}\n\nAFRAME.registerComponent('registerevents', {\n  init: function() {\n    let marker = this.el\n\n    marker.addEventListener('markerFound', function() {\n      markerVisible[ marker.id ] = true\n    })\n\n    marker.addEventListener('markerLost', function() {\n      markerVisible[ marker.id ] = false\n    })\n  }\n})\n\nAFRAME.registerComponent('run', {\n  init: function() {\n    this.m0 = document.querySelector(\"#m0\")\n    this.m1 = document.querySelector(\"#m1\")\n    this.p0 = new THREE.Vector3()\n    this.p1 = new THREE.Vector3()\n\n    let geometry = new THREE.CylinderGeometry( 0.05, 0.05, 1, 12 )\n    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 0.5, 0 ) )\n    geometry.applyMatrix( new THREE.Matrix4().makeRotationX( THREE.Math.degToRad( 90 ) ) )\n    let material = new THREE.MeshLambertMaterial( {color: 0xFF0000} )\n    this.cylinder = new THREE.Mesh( geometry, material )\n    this.cylinderGroup = document.querySelector('#cylinderGroup').object3D\n    this.cylinderGroup.add( this.cylinder )\n  },\n\n  tick: function(time, deltaTime) {\n    if(markerVisible[\"m0\"] && markerVisible[\"m1\"]) {\n      this.m0.object3D.getWorldPosition(this.p0)\n      this.m1.object3D.getWorldPosition(this.p1)\n\n      let distance = this.p0.distanceTo(this.p1)\n      console.log(distance)\n      this.cylinderGroup.lookAt(this.p1)\n      this.cylinder.scale.set(1,1,distance)\n      // this.cylinder.visible = true\n    } else {\n      // this.cylinder.visible = false\n    }\n  }\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });