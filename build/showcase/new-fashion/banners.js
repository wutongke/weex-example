/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(272)
	var __weex_template__ = __webpack_require__(273)
	var __weex_script__ = __webpack_require__(274)

	__weex_define__('@weex-component/a29a28169794adc0c69ea3ddb07ed6a2', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/a29a28169794adc0c69ea3ddb07ed6a2',undefined,undefined)

/***/ },

/***/ 270:
/***/ function(module, exports) {

	module.exports = {
	  "type": "image",
	  "style": {
	    "width": function () {return this.width},
	    "height": function () {return this.height}
	  },
	  "attr": {
	    "src": function () {return this.src},
	    "imageQuality": function () {return this.quality}
	  },
	  "events": {
	    "click": "_clickHandler"
	  }
	}

/***/ },

/***/ 271:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    quality: 'normal',
	    width: 0,
	    height: 0,
	    src: '',
	    href: '',
	    spmc: 0,
	    spmd: 0
	  }},
	  methods: {
	    ready: function ready() {},
	    _clickHandler: function _clickHandler() {
	      this.$call('modal', 'toast', {
	        message: 'click',
	        duration: 1
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(270)
	var __weex_script__ = __webpack_require__(271)

	__weex_define__('@weex-component/banner', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})


/***/ },

/***/ 273:
/***/ function(module, exports) {

	module.exports = {
	  "type": "container",
	  "children": [
	    {
	      "type": "container",
	      "shown": function () {return this.direction==='row'},
	      "style": {
	        "flexDirection": "row"
	      },
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.ds},
	          "style": {
	            "width": function () {return this.width},
	            "height": function () {return this.height},
	            "marginLeft": function () {return this.space}
	          },
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "width": function () {return this.width},
	                "height": function () {return this.height},
	                "src": function () {return this.img},
	                "href": function () {return this.url}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "container",
	      "shown": function () {return this.direction==='column'},
	      "children": [
	        {
	          "type": "container",
	          "repeat": function () {return this.ds},
	          "style": {
	            "width": function () {return this.width},
	            "height": function () {return this.height},
	            "marginTop": function () {return this.space}
	          },
	          "children": [
	            {
	              "type": "banner",
	              "attr": {
	                "width": function () {return this.width},
	                "height": function () {return this.height},
	                "src": function () {return this.img},
	                "href": function () {return this.url}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 274:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    space: 0,
	    width: 0,
	    height: 0,
	    spmc: 0,
	    spmdprefix: '',
	    ds: []
	  }},
	  methods: {
	    ready: function ready() {
	      var self = this;
	      var ds = self.ds;
	      var length = ds.length;
	      for (var i = 0; i < length; i++) {
	        var item = ds[i];
	        item.index = i;
	        item.space = i % length === 0 ? 0 : self.space;
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });