(function(scope) {

  scope.gamePadMappings =

  {"mappings": [
      {
       "type": "hid",
       "driver": "xpad",
       "name": "Wireless 360 Controller",
       "vendor_id": "45e",
       "product_id": "28e",
        "sticks": [
            {
                "x": 0,
                "y": 1,
                "press": 6
            },
            {
                "x": 2,
                "y": 3,
                "press": 7
            }
        ],
        "d-pads": [
            {
                "type": "buttons",
                "left": 13,
                "right": 14,
                "up": 11,
                "down": 12
            }
        ],
        "buttons": {
            "face": [
                {"button": 0},
                {"button": 1},
                {"button": 2},
                {"button": 3}
            ],
            "control": [
                {"button": 9},
                {"button": 8},
                {"button": 10}
            ],
            "left_shoulder": [
                {"button": 4},
                {"axis": 4}
            ],
            "right_shoulder": [
                {"button": 5},
                {"axis": 5}
            ]
        },
        "names": ["A", "B", "X", "Y", "LB", "RB","LT",
                "RT", "Back", "Start", "LS",
                "RS", "Up", "Down", "Left", "Right", "XBox"]
      },
      {
       "type": "linux",
       "driver": "xpad",
       "name": "Xbox 360 Wireless Receiver",
       "vendor_id": "045e",
       "product_id": "0719",
        "sticks": [
            {
                "x": 0,
                "y": 1,
                "press": 9
            },
            {
                "x": 3,
                "y": 4,
                "press": 10
            }
        ],
        "d-pads": [
            {
                "type": "buttons",
                "left": 11,
                "right": 12,
                "up": 13,
                "down": 14
            }
        ],
        "buttons": {
            "face": [
                {"button": 0},
                {"button": 1},
                {"button": 2},
                {"button": 3}
            ],
            "control": [
                {"button": 6},
                {"button": 7},
                {"button": 8}
            ],
            "left_shoulder": [
                {"button": 4},
                {"axis": 2}
            ],
            "right_shoulder": [
                {"button": 5},
                {"axis": 5}
            ]
        }
      },
      {
          "type": "linux",
          "driver": "xpad",
          "name": "Generic X-Box pad",
          "vendor_id": "046d",
          "product_id": "c21d",
          "sticks": [
              {
                  "press": 9,
                  "x": 0,
                  "y": 1
              },
              {
                  "press": 10,
                  "x": 3,
                  "y": 4
              }
          ],
          "d-pads": [
              {
                  "down": {
                      "axis": 7
                  },
                  "right": {
                      "axis": 6
                  },
                  "type": "axes",
                  "up": {
                      "axis": 7
                  },
                  "left": {
                      "axis": 6
                  }
              }
          ],
          "buttons": {
              "face": [
                  {
                      "button": 0
                  },
                  {
                      "button": 1
                  },
                  {
                      "button": 2
                  },
                  {
                      "button": 3
                  }
              ],
              "control": [
                  {
                      "button": 6
                  },
                  {
                      "button": 7
                  },
                  {
                      "button": 8
                  }
              ],
              "left_shoulder": [
                  {
                      "button": 4
                  },
                  {
                      "axis": 2
                  }
              ],
              "right_shoulder": [
                  {
                      "button": 5
                  },
                  {
                      "axis": 5
                  }
              ]
          }
      },
      {
       "type": "linux",
       "driver": "usbhid",
       "name": "PLAYSTATION(R)3 Controller",
       "vendor_id": "054c",
       "product_id": "0268",
        "sticks": [
            {
                "x": 0,
                "y": 1,
                "press": 1
            },
            {
                "x": 2,
                "y": 3,
                "press": 2
            }
        ],
        "d-pads": [
            {
                "type": "buttons",
                "left": {"button": 7, "axis": 11},
                "right": {"button": 5, "axis": 9},
                "up": {"button": 4, "axis": 8},
                "down": {"button": 6, "axis": 10}
            }
        ],
        "buttons": {
            "face": [
                {"button": 14, "axis": 18},
                {"button": 13, "axis": 17},
                {"button": 15, "axis": 19},
                {"button": 12, "axis": 16}
            ],
            "control": [
                {"button": 0},
                {"button": 3},
                {"button": 16}
            ],
            "left_shoulder": [
                {"button": 10, "axis": 14},
                {"button": 8, "axis": 12}
            ],
            "right_shoulder": [
                {"button": 11, "axis": 15},
                {"button": 9, "axis": 13}
            ]
        }
      },
      {
        "type": "linux",
        "driver": "usbhid",
        "name": "Sony Computer Entertainment Wireless Controller",
        "vendor_id": "054c",
        "product_id": "05c4",
        "sticks": [
            {
                "press": 10,
                "x": 0,
                "y": 1
            },
            {
                "press": 11,
                "x": 2,
                "y": 5
            }
        ],
        "d-pads": [
            {
                "type": "axes",
                "down": {
                    "axis": 7
                },
                "right": {
                    "axis": 6
                },
                "up": {
                   "axis": 7
                },
                "left": {
                    "axis": 6
                }
            }
        ],
        "buttons": {
            "face": [
                {
                   "button": 1
                },
                {
                    "button": 2
                },
                {
                    "button": 0
                },
                {
                    "button": 3
                }
           ],
           "control": [
               {
                   "button": 8
               },
               {
                   "button": 9
               },
               {
                   "button": 12
               }
           ],
            "left_shoulder": [
               {
                   "button": 4
               },
               {
                   "button": 6,
                   "axis": 3
               }
            ],
            "right_shoulder": [
               {
                   "button": 5
               },
               {
                   "button": 7,
                   "axis": 4
               }
            ]
        }
      },
      {
       "type": "linux",
       "driver": "usbhid",
       "name": "Microsoft SideWinder Plug & Play Game Pad",
       "vendor_id": "045e",
       "product_id": "0027",
       "sticks": [],
       "d-pads": [
        {
         "down": {
          "axis": 1
         },
         "right": {
          "axis": 0
         },
         "type": "axes",
         "up": {
          "axis": 1
         },
         "left": {
          "axis": 0
         }
        }
       ],
       "buttons": {
        "face": [
         {
          "button": 0
         },
         {
          "button": 1
         },
         {
          "button": 2
         },
         {
          "button": 3
         }
        ],
        "control": [],
        "left_shoulder": [
         {
          "button": 4
         }
        ],
        "right_shoulder": [
         {
          "button": 5
         }
        ]
       }
      },
      {
       "type": "linux",
       "driver": "usbhid",
       "name": "Gravis GamePad Pro USB ",
       "vendor_id": "0428",
       "product_id": "4001",
       "sticks": [],
       "d-pads": [
        {
         "down": {
          "axis": 1
         },
         "right": {
          "axis": 0
         },
         "type": "axes",
         "up": {
          "axis": 1
         },
         "left": {
          "axis": 0
         }
        }
       ],
       "buttons": {
        "face": [
         {
          "button": 1
         },
         {
          "button": 2
         },
         {
          "button": 0
         },
         {
          "button": 3
         }
        ],
        "control": [
         {
          "button": 8
         },
         {
          "button": 9
         }
        ],
        "left_shoulder": [
         {
          "button": 4
         },
         {
          "button": 6
         }
        ],
        "right_shoulder": [
         {
          "button": 5
         },
         {
          "button": 7
         }
        ]
       }
      },
      {
       "type": "linux",
       "driver": "usbhid",
       "name": "Honey Bee AIRFLO",
       "vendor_id": "124b",
       "product_id": "4d01",
       "sticks": [
        {
         "press": 11,
         "x": 0,
         "y": 1
        },
        {
         "press": 12,
         "x": 3,
         "y": 2
        }
       ],
       "d-pads": [
        {
         "down": {
          "axis": 5
         },
         "right": {
          "axis": 4
         },
         "type": "axes",
         "up": {
          "axis": 5
         },
         "left": {
          "axis": 4
         }
        }
       ],
       "buttons": {
        "face": [
         {
          "button": 0
         },
         {
          "button": 1
         },
         {
          "button": 2
         },
         {
          "button": 3
         }
        ],
        "control": [
         {
          "button": 8
         },
         {
          "button": 9
         },
         {
          "button": 10
         }
        ],
        "left_shoulder": [
         {
          "button": 4
         },
         {
          "button": 6
         }
        ],
        "right_shoulder": [
         {
          "button": 5
         },
         {
          "button": 7
         }
        ]
       }
      },
      {
       "type": "linux",
       "driver": "bluetooth",
       "name": "NYKO PLAYPAD PRO",
       "vendor_id": "1d79",
       "product_id": "0009",
       "sticks": [
        {
         "press": 13,
         "x": 0,
         "y": 1
        },
        {
         "press": 14,
         "x": 2,
         "y": 3
        }
       ],
       "d-pads": [
        {
         "down": {
          "axis": 7
         },
         "right": {
          "axis": 6
         },
         "type": "axes",
         "up": {
          "axis": 7
         },
         "left": {
          "axis": 6
         }
        }
       ],
       "buttons": {
        "face": [
         {
          "button": 0
         },
         {
          "button": 1
         },
         {
          "button": 3
         },
         {
          "button": 4
         }
        ],
        "control": [
         {
          "button": -1
         },
         {
          "button": 11
         },
         {
          "button": -1
         }
        ],
        "left_shoulder": [
         {
          "button": 6
         },
         {
          "axis": 5
         }
        ],
        "right_shoulder": [
         {
          "button": 7
         },
         {
          "axis": 4
         }
        ]
       }
      },
      {
       "type": "linux",
       "driver": "xpad",
       "name": "Microsoft X-Box One pad",
       "vendor_id": "045e",
       "product_id": "02d1",
       "sticks": [
        {
         "press": 9,
         "x": 0,
         "y": 1
        },
        {
         "press": 10,
         "x": 3,
         "y": 4
        }
       ],
       "d-pads": [
        {
         "down": {
          "axis": 7
         },
         "right": {
          "axis": 6
         },
         "type": "axes",
         "up": {
          "axis": 7
         },
         "left": {
          "axis": 6
         }
        }
       ],
       "buttons": {
        "face": [
         {
          "button": 0
         },
         {
          "button": 1
         },
         {
          "button": 2
         },
         {
          "button": 3
         }
        ],
        "control": [
         {
          "button": 6
         },
         {
          "button": 7
         },
         {
          "button": 8
         }
        ],
        "left_shoulder": [
         {
          "button": 4
         },
         {
          "axis": 2
         }
        ],
        "right_shoulder": [
         {
          "button": 5
         },
         {
          "axis": 5
         }
        ]
       }
      }
  ]}

})(window);

(function(scope) {
  var buttonOrder = [
    // Yes, this looks dumb.
    [0, ["buttons", "face", 0]],
    [1, ["buttons", "face", 1]],
    [2, ["buttons", "face", 2]],
    [3, ["buttons", "face", 3]],
    [4, ["buttons", "left_shoulder", 0]],
    [5, ["buttons", "right_shoulder", 0]],
    [6, ["buttons", "left_shoulder", 1]],
    [7, ["buttons", "right_shoulder", 1]],
    [8, ["buttons", "control", 0]],
    [9, ["buttons", "control", 1]],
    [10, ["sticks", 0, "press"]],
    [11, ["sticks", 1, "press"]],
    // ... but yeah.
    [16, ["buttons", "control", 2]]
  ];
  // The d-pad needs special handling.
  // For d-pads mapped to buttons.
  var dPadButtons = [
    [12, ["d-pads", 0, "up"]],
    [13, ["d-pads", 0, "down"]],
    [14, ["d-pads", 0, "left"]],
    [15, ["d-pads", 0, "right"]]
  ];
  // For d-pads mapped to axes.
  var dPadAxes = [
    [12, -1, ["d-pads", 0, "up"]],
    [13,  1, ["d-pads", 0, "down"]],
    [14, -1, ["d-pads", 0, "left"]],
    [15,  1, ["d-pads", 0, "right"]]
  ];
  var axisOrder = [
    ["sticks", 0, "x"],
    ["sticks", 0, "y"],
    ["sticks", 1, "x"],
    ["sticks", 1, "y"]
  ];
  // Used to remap already-standard-mapped Gamepads that don't
  // match the latest spec exactly.
  var identityMapping = {
      "sticks": [
          {
              "x": 0,
              "y": 1,
              "press": 10
          },
          {
              "x": 2,
              "y": 3,
              "press": 11
          }
      ],
      "d-pads": [
          {
              "type": "buttons",
              "up": 12,
              "down": 13,
              "left": 14,
              "right": 15
          }
      ],
      "buttons": {
          "face": [
              {"button": 0},
              {"button": 1},
              {"button": 2},
              {"button": 3}
          ],
          "control": [
              {"button": 8},
              {"button": 9} ,
              {"button": 16}
          ],
          "left_shoulder": [
              {"button": 4},
              {"button": 6}
          ],
          "right_shoulder": [
              {"button": 5},
              {"button": 7}
          ]
      }
  };
  var allMappings = null;
  var usedMappings = [];
  var usedPads = [];
  function loadMappings(mappings) {
    var thisType = null;
    if (navigator.platform.match(/^Linux/)) {
      thisType = "linux";
    } else if (navigator.platform.match(/^Mac/)) {
      thisType = "hid";
    } else if (navigator.platform.match(/^Win/)) {
      var m = navigator.userAgent.match("Gecko/(..)");
      if (m && parseInt(m[1]) < 32) {
        thisType = "dinput";
      } else {
        thisType = "hid";
      }
    }
    if (!thisType) {
      return;
    }
    allMappings = {};
    for (var i = 0; i < mappings.length; i++) {
      if (mappings[i].type != thisType) {
        continue;
      }

      if (!(mappings[i].vendor_id in allMappings)) {
        allMappings[mappings[i].vendor_id] = {};
      }
      allMappings[mappings[i].vendor_id][mappings[i].product_id] = mappings[i];
    }
  }

  function getIDs(id) {
    var bits = id.split('-');
    if (bits.length < 2) {
      var match = id.match(/Vendor: (\w+) Product: (\w+)/);
      if (!match) {
        return null;
      }

      return match.slice(1);
    }

    return bits.slice(0, 2);
  }

  function findMapping(pad) {
    if (usedMappings[pad.index] && usedMappings[pad.index].id == pad.id) {
      return usedMappings[pad.index].mapping;
    }
    var mapping = null;
    if (pad.id.match(/STANDARD GAMEPAD/)) {
      // Make older versions of Chrome match the updated spec.
      mapping = identityMapping;
    } else if (allMappings) {
      // Look up a mapping by vendor id, product id
      var ids = getIDs(pad.id);
      if (ids && ids[0] in allMappings && ids[1] in allMappings[ids[0]]) {
        mapping = allMappings[ids[0]][ids[1]];
      }
    }
    if (mapping) {
      usedMappings[pad.index] = {id: pad.id, mapping: mapping};
      return mapping;
    }
    return null;
  }

  function getPad(pad) {
    function button() {
      this.pressed = false;
      this.value = 0.0;
    }
    if (usedPads[pad.index] && usedPads[pad.index].id == pad.id) {
      // Recycle. Should we keep a few objects so we don't return the same
      // object every time?
      return usedPads[pad.index];
    }
    var newpad = {buttons: new Array(17), axes: [0.0, 0.0, 0.0, 0.0],
                 id: pad.id, index: pad.index, mapping: "standard"};
    for (var i = 0; i < newpad.buttons.length; i++) {
      newpad.buttons[i] = new button();
    }
    // Cache it so we don't have to create a new object every time.
    usedPads[pad.index] = newpad;
    return newpad;
  }

  function getprop(thing, props) {
    props = props.slice(0);
    while (props.length) {
      var p = props.shift();
      if (p in thing) {
        thing = thing[p];
      } else {
        return undefined;
      }
    }
    return thing;
  }

  function mapButton(pad, thisButton, map, buttons) {
    var button = buttons[thisButton[0]];
    var p = getprop(map, thisButton[1]);
    if (p != undefined) {
      var b = typeof(p) == "number" ? p : ("button" in p ? p.button : -1);
      var a = (typeof(p) == "object" && "axis" in p) ? p.axis : -1;
      if (a != -1) {
        button.value = (pad.axes[a] + 1.0) / 2.0;
        if (b == -1) {
          button.pressed = button.value > 0.25;
        }
      }
      if (b != -1) {
        button.pressed = typeof(pad.buttons[b]) == "number" ? (pad.buttons[b] == 1.0) : pad.buttons[b].pressed;
        if (a == -1) {
          button.value = typeof(pad.buttons[b]) == "number" ? pad.buttons[b] : pad.buttons[b].value;
        }
      }
      button.name = map.names[thisButton[0]];
    } else {
      button.pressed = false;
      button.value = 0.0;
    }
  }

  function mapAxis(pad, thisAxis, map, axes, i) {
    var a = getprop(map, thisAxis);
    if (a != undefined) {
      axes[i] = pad.axes[a];
    } else {
      axes[i] = 0.0;
    }
  }

  function mapHalfAxisToButton(pad, thisAxis, map, buttons) {
    var button = buttons[thisAxis[0]];
    var direction = thisAxis[1];
    var p = getprop(map, thisAxis[2]);
    var a = typeof(p) == "number" ? p : ("axis" in p ? p.axis : -1);
    if (p != -1) {
      var value = pad.axes[a];
      if (direction < 0 && value < 0) {
        button.value = -value;
        button.pressed = value < -0.25;
      } else if (direction > 0 && value > 0) {
        button.value = value;
        button.pressed = value > 0.25;
      } else {
        button.pressed = false;
        button.value = 0.0;
      }
    } else {
      button.pressed = false;
      button.value = 0.0;
    }
  }

  function applyMapping(pad, map) {
    var newpad = getPad(pad);
    newpad.timestamp = pad.timestamp ? pad.timestamp : performance.now();
    for (var i = 0; i < buttonOrder.length; i++) {
      mapButton(pad, buttonOrder[i], map, newpad.buttons);
    }
    // Handle d-pad.
    var type = getprop(map, ["d-pads", 0, "type"]);
    if (type == "buttons") {
      for (i = 0; i < dPadButtons.length; i++) {
        mapButton(pad, dPadButtons[i], map, newpad.buttons);
      }
    } else if (type == "axes") {
      for (i = 0; i < dPadAxes.length; i++) {
        mapHalfAxisToButton(pad, dPadAxes[i], map, newpad.buttons);
      }
    } else if (type == "dpad") {
      //TODO: for d-pads exposed as hat switches
    }

    for (i = 0; i < newpad.axes.length; i++) {
      mapAxis(pad, axisOrder[i], map, newpad.axes, i);
    }
    return newpad;
  }

  function remapGamepad(pad) {
    if (pad && pad.mapping != "standard") {
      var map = findMapping(pad);
      if (map) {
        return applyMapping(pad, map);
      }
    }
    return pad;
  }

  function getGamepads() {
    var pads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
    var newpads = new Array(pads.length);
    for (var i = 0; i < pads.length; i++) {
      newpads[i] = remapGamepad(pads[i]);
    }
    return newpads;
  };

  scope.getGamepads = getGamepads;
  scope.remapGamepad = remapGamepad;
  loadMappings(scope.gamePadMappings);

})(window);

/**
 * Evt
 *
 * A super lightweight
 * event emitter library.
 *
 * @version 0.3.3
 * @author Wilson Page <wilson.page@me.com>
 */

;(function() {

/**
 * Locals
 */

var proto = Events.prototype;
var slice = [].slice;

/**
 * Creates a new event emitter
 * instance, or if passed an
 * object, mixes the event logic
 * into it.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function Events(obj) {
  if (!(this instanceof Events)) return new Events(obj);
  if (obj) return mixin(obj, proto);
}

/**
 * Registers a callback
 * with an event name.
 *
 * @param  {String}   name
 * @param  {Function} cb
 * @return {Event}
 */
proto.on = function(name, cb) {
  this._cbs = this._cbs || {};
  (this._cbs[name] || (this._cbs[name] = [])).push(cb);
  return this;
};

/**
 * Attach a callback that once
 * called, detaches itself.
 *
 * TODO: Implement `.off()` to work
 * with `once()` callbacks.
 *
 * @param  {String}   name
 * @param  {Function} cb
 * @public
 */
proto.once = function(name, cb) {
  this.on(name, one);
  function one() {
    cb.apply(this, arguments);
    this.off(name, one);
  }
};

/**
 * Removes a single callback,
 * or all callbacks associated
 * with the passed event name.
 *
 * @param  {String}   name
 * @param  {Function} cb
 * @return {Event}
 */
proto.off = function(name, cb) {
  this._cbs = this._cbs || {};

  if (!name) { this._cbs = {}; return; }
  if (!cb) { return delete this._cbs[name]; }

  var cbs = this._cbs[name] || [];
  var i;

  while (cbs && ~(i = cbs.indexOf(cb))) { cbs.splice(i, 1); }
  return this;
};

/**
 * Fires an event, triggering
 * all callbacks registered on this
 * event name.
 *
 * @param  {String} name
 * @return {Event}
 */
proto.fire = proto.emit = function(options) {
  var cbs = this._cbs = this._cbs || {};
  var name = options.name || options;
  var batch = (cbs[name] || []).concat(cbs['*'] || []);
  var ctx = options.ctx || this;

  if (batch.length) {
    this._fireArgs = arguments;
    var args = slice.call(arguments, 1);
    while (batch.length) {
      batch.shift().apply(ctx, args);
    }
  }

  return this;
};

proto.firer = function(name) {
  var self = this;
  return function() {
    var args = slice.call(arguments);
    args.unshift(name);
    self.fire.apply(self, args);
  };
};

/**
 * Util
 */

/**
 * Mixes in the properties
 * of the second object into
 * the first.
 *
 * @param  {Object} a
 * @param  {Object} b
 * @return {Object}
 */
function mixin(a, b) {
  for (var key in b) a[key] = b[key];
  return a;
}

/**
 * Expose 'Event' (UMD)
 */

if (typeof exports === 'object') {
  module.exports = Events;
} else if (typeof define === 'function' && define.amd) {
  define(function(){ return Events; });
} else {
  window.evt = Events;
}

})();

/* jshint devel:true */
'use strict';
(function(define){define(function(require,exports,module){

  var xBoxPad = new evt();
  var interval;
  var buttonMapping =
    ['A', 'B', 'X', 'Y', 'LB', 'RB','LT',
     'RT', 'Back', 'Start', 'LS',
    'RS', 'Up', 'Down', 'Left', 'Right', 'XBox'];
  var buttonStatus = [];
  var pollInterval = 200;
  var pad;

  window.addEventListener('gamepadconnected', connecthandler);
  window.addEventListener('gamepaddisconnected', disconnecthandler);

  function connecthandler(e) {
    pad = navigator.getGamepads()[e.gamepad.index];
    interval = setInterval(pollState, pollInterval)
    xBoxPad.connected = true;
    xBoxPad.fire('connected');
  }

  function pollState() {
    var gp = remapGamepad(pad);
    var pressedButtons = [];
    for (var i = 0; i < gp.buttons.length; i++) {
      var b = gp.buttons[i];
      var pressed = b.pressed;
      if (b.pressed) {
        if (!buttonStatus[i]) {
          pressedButtons.push(buttonMapping[i]);
          //console.log('BUTTON PRESSED ' + i + ' NAME ' + buttonMapping[i]);
        }
      }
      buttonStatus[i] = pressed;
    }
    xBoxPad.fire('pressed', pressedButtons);
  }

  function disconnecthandler(e) {
    clearInterval(interval);
    xBoxPad.connected = false;
    xBoxPad.fire('connected');
  }

  module.exports = xBoxPad;

});})(typeof define=='function'&&define.amd?define
:(function(n,w){return typeof module=='object'?function(c){
c(require,exports,module);}:function(c){var m={exports:{}};c(function(n){
return w[n];},m.exports,m);w[n]=m.exports;};})('xBoxPad',this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcHBpbmdzLmpzIiwiZ2FtZXBhZG1hcHBpbmcuanMiLCJldnQuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoieGJveHBhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihzY29wZSkge1xuXG4gIHNjb3BlLmdhbWVQYWRNYXBwaW5ncyA9XG5cbiAge1wibWFwcGluZ3NcIjogW1xuICAgICAge1xuICAgICAgIFwidHlwZVwiOiBcImhpZFwiLFxuICAgICAgIFwiZHJpdmVyXCI6IFwieHBhZFwiLFxuICAgICAgIFwibmFtZVwiOiBcIldpcmVsZXNzIDM2MCBDb250cm9sbGVyXCIsXG4gICAgICAgXCJ2ZW5kb3JfaWRcIjogXCI0NWVcIixcbiAgICAgICBcInByb2R1Y3RfaWRcIjogXCIyOGVcIixcbiAgICAgICAgXCJzdGlja3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwieFwiOiAwLFxuICAgICAgICAgICAgICAgIFwieVwiOiAxLFxuICAgICAgICAgICAgICAgIFwicHJlc3NcIjogNlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInhcIjogMixcbiAgICAgICAgICAgICAgICBcInlcIjogMyxcbiAgICAgICAgICAgICAgICBcInByZXNzXCI6IDdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJkLXBhZHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvbnNcIixcbiAgICAgICAgICAgICAgICBcImxlZnRcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJyaWdodFwiOiAxNCxcbiAgICAgICAgICAgICAgICBcInVwXCI6IDExLFxuICAgICAgICAgICAgICAgIFwiZG93blwiOiAxMlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImJ1dHRvbnNcIjoge1xuICAgICAgICAgICAgXCJmYWNlXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogMH0sXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDF9LFxuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAyfSxcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogM31cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNvbnRyb2xcIjogW1xuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiA5fSxcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogOH0sXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDEwfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwibGVmdF9zaG91bGRlclwiOiBbXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDR9LFxuICAgICAgICAgICAgICAgIHtcImF4aXNcIjogNH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJpZ2h0X3Nob3VsZGVyXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogNX0sXG4gICAgICAgICAgICAgICAge1wiYXhpc1wiOiA1fVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcIm5hbWVzXCI6IFtcIkFcIiwgXCJCXCIsIFwiWFwiLCBcIllcIiwgXCJMQlwiLCBcIlJCXCIsXCJMVFwiLFxuICAgICAgICAgICAgICAgIFwiUlRcIiwgXCJCYWNrXCIsIFwiU3RhcnRcIiwgXCJMU1wiLFxuICAgICAgICAgICAgICAgIFwiUlNcIiwgXCJVcFwiLCBcIkRvd25cIiwgXCJMZWZ0XCIsIFwiUmlnaHRcIiwgXCJYQm94XCJdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgIFwidHlwZVwiOiBcImxpbnV4XCIsXG4gICAgICAgXCJkcml2ZXJcIjogXCJ4cGFkXCIsXG4gICAgICAgXCJuYW1lXCI6IFwiWGJveCAzNjAgV2lyZWxlc3MgUmVjZWl2ZXJcIixcbiAgICAgICBcInZlbmRvcl9pZFwiOiBcIjA0NWVcIixcbiAgICAgICBcInByb2R1Y3RfaWRcIjogXCIwNzE5XCIsXG4gICAgICAgIFwic3RpY2tzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICAgICAgICBcInlcIjogMSxcbiAgICAgICAgICAgICAgICBcInByZXNzXCI6IDlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ4XCI6IDMsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IDQsXG4gICAgICAgICAgICAgICAgXCJwcmVzc1wiOiAxMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImQtcGFkc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uc1wiLFxuICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMSxcbiAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDEyLFxuICAgICAgICAgICAgICAgIFwidXBcIjogMTMsXG4gICAgICAgICAgICAgICAgXCJkb3duXCI6IDE0XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYnV0dG9uc1wiOiB7XG4gICAgICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAwfSxcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogMX0sXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDJ9LFxuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAzfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY29udHJvbFwiOiBbXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDZ9LFxuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiA3fSxcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogOH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiA0fSxcbiAgICAgICAgICAgICAgICB7XCJheGlzXCI6IDJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyaWdodF9zaG91bGRlclwiOiBbXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDV9LFxuICAgICAgICAgICAgICAgIHtcImF4aXNcIjogNX1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaW51eFwiLFxuICAgICAgICAgIFwiZHJpdmVyXCI6IFwieHBhZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkdlbmVyaWMgWC1Cb3ggcGFkXCIsXG4gICAgICAgICAgXCJ2ZW5kb3JfaWRcIjogXCIwNDZkXCIsXG4gICAgICAgICAgXCJwcm9kdWN0X2lkXCI6IFwiYzIxZFwiLFxuICAgICAgICAgIFwic3RpY2tzXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJwcmVzc1wiOiA5LFxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICAgICAgICAgICBcInlcIjogMVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInByZXNzXCI6IDEwLFxuICAgICAgICAgICAgICAgICAgXCJ4XCI6IDMsXG4gICAgICAgICAgICAgICAgICBcInlcIjogNFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImQtcGFkc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwiZG93blwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJheGlzXCI6IDdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImF4ZXNcIixcbiAgICAgICAgICAgICAgICAgIFwidXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYXhpc1wiOiA3XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJ1dHRvbnNcIjoge1xuICAgICAgICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogMVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiOiAyXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjb250cm9sXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiOiA2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogOFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJheGlzXCI6IDJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyaWdodF9zaG91bGRlclwiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogNVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcImF4aXNcIjogNVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInR5cGVcIjogXCJsaW51eFwiLFxuICAgICAgIFwiZHJpdmVyXCI6IFwidXNiaGlkXCIsXG4gICAgICAgXCJuYW1lXCI6IFwiUExBWVNUQVRJT04oUikzIENvbnRyb2xsZXJcIixcbiAgICAgICBcInZlbmRvcl9pZFwiOiBcIjA1NGNcIixcbiAgICAgICBcInByb2R1Y3RfaWRcIjogXCIwMjY4XCIsXG4gICAgICAgIFwic3RpY2tzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICAgICAgICBcInlcIjogMSxcbiAgICAgICAgICAgICAgICBcInByZXNzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ4XCI6IDIsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IDMsXG4gICAgICAgICAgICAgICAgXCJwcmVzc1wiOiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiZC1wYWRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25zXCIsXG4gICAgICAgICAgICAgICAgXCJsZWZ0XCI6IHtcImJ1dHRvblwiOiA3LCBcImF4aXNcIjogMTF9LFxuICAgICAgICAgICAgICAgIFwicmlnaHRcIjoge1wiYnV0dG9uXCI6IDUsIFwiYXhpc1wiOiA5fSxcbiAgICAgICAgICAgICAgICBcInVwXCI6IHtcImJ1dHRvblwiOiA0LCBcImF4aXNcIjogOH0sXG4gICAgICAgICAgICAgICAgXCJkb3duXCI6IHtcImJ1dHRvblwiOiA2LCBcImF4aXNcIjogMTB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiYnV0dG9uc1wiOiB7XG4gICAgICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAxNCwgXCJheGlzXCI6IDE4fSxcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogMTMsIFwiYXhpc1wiOiAxN30sXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDE1LCBcImF4aXNcIjogMTl9LFxuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAxMiwgXCJheGlzXCI6IDE2fVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY29udHJvbFwiOiBbXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDB9LFxuICAgICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAzfSxcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogMTZ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJsZWZ0X3Nob3VsZGVyXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogMTAsIFwiYXhpc1wiOiAxNH0sXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDgsIFwiYXhpc1wiOiAxMn1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJpZ2h0X3Nob3VsZGVyXCI6IFtcbiAgICAgICAgICAgICAgICB7XCJidXR0b25cIjogMTEsIFwiYXhpc1wiOiAxNX0sXG4gICAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDksIFwiYXhpc1wiOiAxM31cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwibGludXhcIixcbiAgICAgICAgXCJkcml2ZXJcIjogXCJ1c2JoaWRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiU29ueSBDb21wdXRlciBFbnRlcnRhaW5tZW50IFdpcmVsZXNzIENvbnRyb2xsZXJcIixcbiAgICAgICAgXCJ2ZW5kb3JfaWRcIjogXCIwNTRjXCIsXG4gICAgICAgIFwicHJvZHVjdF9pZFwiOiBcIjA1YzRcIixcbiAgICAgICAgXCJzdGlja3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJlc3NcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICAgICAgICAgXCJ5XCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmVzc1wiOiAxMSxcbiAgICAgICAgICAgICAgICBcInhcIjogMixcbiAgICAgICAgICAgICAgICBcInlcIjogNVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImQtcGFkc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYXhlc1wiLFxuICAgICAgICAgICAgICAgIFwiZG93blwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYXhpc1wiOiA3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJheGlzXCI6IDZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwidXBcIjoge1xuICAgICAgICAgICAgICAgICAgIFwiYXhpc1wiOiA3XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxlZnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJidXR0b25zXCI6IHtcbiAgICAgICAgICAgIFwiZmFjZVwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIF0sXG4gICAgICAgICAgIFwiY29udHJvbFwiOiBbXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogOFxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiOiA5XG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDEyXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDRcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogNixcbiAgICAgICAgICAgICAgICAgICBcImF4aXNcIjogM1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicmlnaHRfc2hvdWxkZXJcIjogW1xuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCI6IDVcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogNyxcbiAgICAgICAgICAgICAgICAgICBcImF4aXNcIjogNFxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgIFwidHlwZVwiOiBcImxpbnV4XCIsXG4gICAgICAgXCJkcml2ZXJcIjogXCJ1c2JoaWRcIixcbiAgICAgICBcIm5hbWVcIjogXCJNaWNyb3NvZnQgU2lkZVdpbmRlciBQbHVnICYgUGxheSBHYW1lIFBhZFwiLFxuICAgICAgIFwidmVuZG9yX2lkXCI6IFwiMDQ1ZVwiLFxuICAgICAgIFwicHJvZHVjdF9pZFwiOiBcIjAwMjdcIixcbiAgICAgICBcInN0aWNrc1wiOiBbXSxcbiAgICAgICBcImQtcGFkc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgIFwiZG93blwiOiB7XG4gICAgICAgICAgXCJheGlzXCI6IDFcbiAgICAgICAgIH0sXG4gICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogMFxuICAgICAgICAgfSxcbiAgICAgICAgIFwidHlwZVwiOiBcImF4ZXNcIixcbiAgICAgICAgIFwidXBcIjoge1xuICAgICAgICAgIFwiYXhpc1wiOiAxXG4gICAgICAgICB9LFxuICAgICAgICAgXCJsZWZ0XCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogMFxuICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXSxcbiAgICAgICBcImJ1dHRvbnNcIjoge1xuICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDBcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogMVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAyXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDNcbiAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cm9sXCI6IFtdLFxuICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDRcbiAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJyaWdodF9zaG91bGRlclwiOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogNVxuICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInR5cGVcIjogXCJsaW51eFwiLFxuICAgICAgIFwiZHJpdmVyXCI6IFwidXNiaGlkXCIsXG4gICAgICAgXCJuYW1lXCI6IFwiR3JhdmlzIEdhbWVQYWQgUHJvIFVTQiBcIixcbiAgICAgICBcInZlbmRvcl9pZFwiOiBcIjA0MjhcIixcbiAgICAgICBcInByb2R1Y3RfaWRcIjogXCI0MDAxXCIsXG4gICAgICAgXCJzdGlja3NcIjogW10sXG4gICAgICAgXCJkLXBhZHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICBcImRvd25cIjoge1xuICAgICAgICAgIFwiYXhpc1wiOiAxXG4gICAgICAgICB9LFxuICAgICAgICAgXCJyaWdodFwiOiB7XG4gICAgICAgICAgXCJheGlzXCI6IDBcbiAgICAgICAgIH0sXG4gICAgICAgICBcInR5cGVcIjogXCJheGVzXCIsXG4gICAgICAgICBcInVwXCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogMVxuICAgICAgICAgfSxcbiAgICAgICAgIFwibGVmdFwiOiB7XG4gICAgICAgICAgXCJheGlzXCI6IDBcbiAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIF0sXG4gICAgICAgXCJidXR0b25zXCI6IHtcbiAgICAgICAgXCJmYWNlXCI6IFtcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAxXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDJcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogMFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAzXG4gICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29udHJvbFwiOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogOFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiA5XG4gICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwibGVmdF9zaG91bGRlclwiOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogNFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiA2XG4gICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwicmlnaHRfc2hvdWxkZXJcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDVcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogN1xuICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInR5cGVcIjogXCJsaW51eFwiLFxuICAgICAgIFwiZHJpdmVyXCI6IFwidXNiaGlkXCIsXG4gICAgICAgXCJuYW1lXCI6IFwiSG9uZXkgQmVlIEFJUkZMT1wiLFxuICAgICAgIFwidmVuZG9yX2lkXCI6IFwiMTI0YlwiLFxuICAgICAgIFwicHJvZHVjdF9pZFwiOiBcIjRkMDFcIixcbiAgICAgICBcInN0aWNrc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgIFwicHJlc3NcIjogMTEsXG4gICAgICAgICBcInhcIjogMCxcbiAgICAgICAgIFwieVwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgIFwicHJlc3NcIjogMTIsXG4gICAgICAgICBcInhcIjogMyxcbiAgICAgICAgIFwieVwiOiAyXG4gICAgICAgIH1cbiAgICAgICBdLFxuICAgICAgIFwiZC1wYWRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgXCJkb3duXCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogNVxuICAgICAgICAgfSxcbiAgICAgICAgIFwicmlnaHRcIjoge1xuICAgICAgICAgIFwiYXhpc1wiOiA0XG4gICAgICAgICB9LFxuICAgICAgICAgXCJ0eXBlXCI6IFwiYXhlc1wiLFxuICAgICAgICAgXCJ1cFwiOiB7XG4gICAgICAgICAgXCJheGlzXCI6IDVcbiAgICAgICAgIH0sXG4gICAgICAgICBcImxlZnRcIjoge1xuICAgICAgICAgIFwiYXhpc1wiOiA0XG4gICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBdLFxuICAgICAgIFwiYnV0dG9uc1wiOiB7XG4gICAgICAgIFwiZmFjZVwiOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogMFxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAxXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDJcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogM1xuICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImNvbnRyb2xcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDhcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogOVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAxMFxuICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDRcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogNlxuICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInJpZ2h0X3Nob3VsZGVyXCI6IFtcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiA1XG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDdcbiAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgXCJ0eXBlXCI6IFwibGludXhcIixcbiAgICAgICBcImRyaXZlclwiOiBcImJsdWV0b290aFwiLFxuICAgICAgIFwibmFtZVwiOiBcIk5ZS08gUExBWVBBRCBQUk9cIixcbiAgICAgICBcInZlbmRvcl9pZFwiOiBcIjFkNzlcIixcbiAgICAgICBcInByb2R1Y3RfaWRcIjogXCIwMDA5XCIsXG4gICAgICAgXCJzdGlja3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICBcInByZXNzXCI6IDEzLFxuICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICBcInlcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcInByZXNzXCI6IDE0LFxuICAgICAgICAgXCJ4XCI6IDIsXG4gICAgICAgICBcInlcIjogM1xuICAgICAgICB9XG4gICAgICAgXSxcbiAgICAgICBcImQtcGFkc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgIFwiZG93blwiOiB7XG4gICAgICAgICAgXCJheGlzXCI6IDdcbiAgICAgICAgIH0sXG4gICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgfSxcbiAgICAgICAgIFwidHlwZVwiOiBcImF4ZXNcIixcbiAgICAgICAgIFwidXBcIjoge1xuICAgICAgICAgIFwiYXhpc1wiOiA3XG4gICAgICAgICB9LFxuICAgICAgICAgXCJsZWZ0XCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXSxcbiAgICAgICBcImJ1dHRvbnNcIjoge1xuICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDBcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogMVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAzXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDRcbiAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cm9sXCI6IFtcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAtMVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAxMVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAtMVxuICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDZcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJheGlzXCI6IDVcbiAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJyaWdodF9zaG91bGRlclwiOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogN1xuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImF4aXNcIjogNFxuICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICBcInR5cGVcIjogXCJsaW51eFwiLFxuICAgICAgIFwiZHJpdmVyXCI6IFwieHBhZFwiLFxuICAgICAgIFwibmFtZVwiOiBcIk1pY3Jvc29mdCBYLUJveCBPbmUgcGFkXCIsXG4gICAgICAgXCJ2ZW5kb3JfaWRcIjogXCIwNDVlXCIsXG4gICAgICAgXCJwcm9kdWN0X2lkXCI6IFwiMDJkMVwiLFxuICAgICAgIFwic3RpY2tzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgXCJwcmVzc1wiOiA5LFxuICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICBcInlcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICBcInByZXNzXCI6IDEwLFxuICAgICAgICAgXCJ4XCI6IDMsXG4gICAgICAgICBcInlcIjogNFxuICAgICAgICB9XG4gICAgICAgXSxcbiAgICAgICBcImQtcGFkc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgIFwiZG93blwiOiB7XG4gICAgICAgICAgXCJheGlzXCI6IDdcbiAgICAgICAgIH0sXG4gICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgfSxcbiAgICAgICAgIFwidHlwZVwiOiBcImF4ZXNcIixcbiAgICAgICAgIFwidXBcIjoge1xuICAgICAgICAgIFwiYXhpc1wiOiA3XG4gICAgICAgICB9LFxuICAgICAgICAgXCJsZWZ0XCI6IHtcbiAgICAgICAgICBcImF4aXNcIjogNlxuICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXSxcbiAgICAgICBcImJ1dHRvbnNcIjoge1xuICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDBcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogMVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiAyXG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDNcbiAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJjb250cm9sXCI6IFtcbiAgICAgICAgIHtcbiAgICAgICAgICBcImJ1dHRvblwiOiA2XG4gICAgICAgICB9LFxuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDdcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogOFxuICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImxlZnRfc2hvdWxkZXJcIjogW1xuICAgICAgICAge1xuICAgICAgICAgIFwiYnV0dG9uXCI6IDRcbiAgICAgICAgIH0sXG4gICAgICAgICB7XG4gICAgICAgICAgXCJheGlzXCI6IDJcbiAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJyaWdodF9zaG91bGRlclwiOiBbXG4gICAgICAgICB7XG4gICAgICAgICAgXCJidXR0b25cIjogNVxuICAgICAgICAgfSxcbiAgICAgICAgIHtcbiAgICAgICAgICBcImF4aXNcIjogNVxuICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgfVxuICAgICAgfVxuICBdfVxuXG59KSh3aW5kb3cpO1xuIiwiKGZ1bmN0aW9uKHNjb3BlKSB7XG4gIHZhciBidXR0b25PcmRlciA9IFtcbiAgICAvLyBZZXMsIHRoaXMgbG9va3MgZHVtYi5cbiAgICBbMCwgW1wiYnV0dG9uc1wiLCBcImZhY2VcIiwgMF1dLFxuICAgIFsxLCBbXCJidXR0b25zXCIsIFwiZmFjZVwiLCAxXV0sXG4gICAgWzIsIFtcImJ1dHRvbnNcIiwgXCJmYWNlXCIsIDJdXSxcbiAgICBbMywgW1wiYnV0dG9uc1wiLCBcImZhY2VcIiwgM11dLFxuICAgIFs0LCBbXCJidXR0b25zXCIsIFwibGVmdF9zaG91bGRlclwiLCAwXV0sXG4gICAgWzUsIFtcImJ1dHRvbnNcIiwgXCJyaWdodF9zaG91bGRlclwiLCAwXV0sXG4gICAgWzYsIFtcImJ1dHRvbnNcIiwgXCJsZWZ0X3Nob3VsZGVyXCIsIDFdXSxcbiAgICBbNywgW1wiYnV0dG9uc1wiLCBcInJpZ2h0X3Nob3VsZGVyXCIsIDFdXSxcbiAgICBbOCwgW1wiYnV0dG9uc1wiLCBcImNvbnRyb2xcIiwgMF1dLFxuICAgIFs5LCBbXCJidXR0b25zXCIsIFwiY29udHJvbFwiLCAxXV0sXG4gICAgWzEwLCBbXCJzdGlja3NcIiwgMCwgXCJwcmVzc1wiXV0sXG4gICAgWzExLCBbXCJzdGlja3NcIiwgMSwgXCJwcmVzc1wiXV0sXG4gICAgLy8gLi4uIGJ1dCB5ZWFoLlxuICAgIFsxNiwgW1wiYnV0dG9uc1wiLCBcImNvbnRyb2xcIiwgMl1dXG4gIF07XG4gIC8vIFRoZSBkLXBhZCBuZWVkcyBzcGVjaWFsIGhhbmRsaW5nLlxuICAvLyBGb3IgZC1wYWRzIG1hcHBlZCB0byBidXR0b25zLlxuICB2YXIgZFBhZEJ1dHRvbnMgPSBbXG4gICAgWzEyLCBbXCJkLXBhZHNcIiwgMCwgXCJ1cFwiXV0sXG4gICAgWzEzLCBbXCJkLXBhZHNcIiwgMCwgXCJkb3duXCJdXSxcbiAgICBbMTQsIFtcImQtcGFkc1wiLCAwLCBcImxlZnRcIl1dLFxuICAgIFsxNSwgW1wiZC1wYWRzXCIsIDAsIFwicmlnaHRcIl1dXG4gIF07XG4gIC8vIEZvciBkLXBhZHMgbWFwcGVkIHRvIGF4ZXMuXG4gIHZhciBkUGFkQXhlcyA9IFtcbiAgICBbMTIsIC0xLCBbXCJkLXBhZHNcIiwgMCwgXCJ1cFwiXV0sXG4gICAgWzEzLCAgMSwgW1wiZC1wYWRzXCIsIDAsIFwiZG93blwiXV0sXG4gICAgWzE0LCAtMSwgW1wiZC1wYWRzXCIsIDAsIFwibGVmdFwiXV0sXG4gICAgWzE1LCAgMSwgW1wiZC1wYWRzXCIsIDAsIFwicmlnaHRcIl1dXG4gIF07XG4gIHZhciBheGlzT3JkZXIgPSBbXG4gICAgW1wic3RpY2tzXCIsIDAsIFwieFwiXSxcbiAgICBbXCJzdGlja3NcIiwgMCwgXCJ5XCJdLFxuICAgIFtcInN0aWNrc1wiLCAxLCBcInhcIl0sXG4gICAgW1wic3RpY2tzXCIsIDEsIFwieVwiXVxuICBdO1xuICAvLyBVc2VkIHRvIHJlbWFwIGFscmVhZHktc3RhbmRhcmQtbWFwcGVkIEdhbWVwYWRzIHRoYXQgZG9uJ3RcbiAgLy8gbWF0Y2ggdGhlIGxhdGVzdCBzcGVjIGV4YWN0bHkuXG4gIHZhciBpZGVudGl0eU1hcHBpbmcgPSB7XG4gICAgICBcInN0aWNrc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICAgICAgXCJ5XCI6IDEsXG4gICAgICAgICAgICAgIFwicHJlc3NcIjogMTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ4XCI6IDIsXG4gICAgICAgICAgICAgIFwieVwiOiAzLFxuICAgICAgICAgICAgICBcInByZXNzXCI6IDExXG4gICAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiZC1wYWRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvbnNcIixcbiAgICAgICAgICAgICAgXCJ1cFwiOiAxMixcbiAgICAgICAgICAgICAgXCJkb3duXCI6IDEzLFxuICAgICAgICAgICAgICBcImxlZnRcIjogMTQsXG4gICAgICAgICAgICAgIFwicmlnaHRcIjogMTVcbiAgICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJidXR0b25zXCI6IHtcbiAgICAgICAgICBcImZhY2VcIjogW1xuICAgICAgICAgICAgICB7XCJidXR0b25cIjogMH0sXG4gICAgICAgICAgICAgIHtcImJ1dHRvblwiOiAxfSxcbiAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDJ9LFxuICAgICAgICAgICAgICB7XCJidXR0b25cIjogM31cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY29udHJvbFwiOiBbXG4gICAgICAgICAgICAgIHtcImJ1dHRvblwiOiA4fSxcbiAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDl9ICxcbiAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDE2fVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJsZWZ0X3Nob3VsZGVyXCI6IFtcbiAgICAgICAgICAgICAge1wiYnV0dG9uXCI6IDR9LFxuICAgICAgICAgICAgICB7XCJidXR0b25cIjogNn1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicmlnaHRfc2hvdWxkZXJcIjogW1xuICAgICAgICAgICAgICB7XCJidXR0b25cIjogNX0sXG4gICAgICAgICAgICAgIHtcImJ1dHRvblwiOiA3fVxuICAgICAgICAgIF1cbiAgICAgIH1cbiAgfTtcbiAgdmFyIGFsbE1hcHBpbmdzID0gbnVsbDtcbiAgdmFyIHVzZWRNYXBwaW5ncyA9IFtdO1xuICB2YXIgdXNlZFBhZHMgPSBbXTtcbiAgZnVuY3Rpb24gbG9hZE1hcHBpbmdzKG1hcHBpbmdzKSB7XG4gICAgdmFyIHRoaXNUeXBlID0gbnVsbDtcbiAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKC9eTGludXgvKSkge1xuICAgICAgdGhpc1R5cGUgPSBcImxpbnV4XCI7XG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0ubWF0Y2goL15NYWMvKSkge1xuICAgICAgdGhpc1R5cGUgPSBcImhpZFwiO1xuICAgIH0gZWxzZSBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLm1hdGNoKC9eV2luLykpIHtcbiAgICAgIHZhciBtID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChcIkdlY2tvLyguLilcIik7XG4gICAgICBpZiAobSAmJiBwYXJzZUludChtWzFdKSA8IDMyKSB7XG4gICAgICAgIHRoaXNUeXBlID0gXCJkaW5wdXRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXNUeXBlID0gXCJoaWRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzVHlwZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbGxNYXBwaW5ncyA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFwcGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChtYXBwaW5nc1tpXS50eXBlICE9IHRoaXNUeXBlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShtYXBwaW5nc1tpXS52ZW5kb3JfaWQgaW4gYWxsTWFwcGluZ3MpKSB7XG4gICAgICAgIGFsbE1hcHBpbmdzW21hcHBpbmdzW2ldLnZlbmRvcl9pZF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGFsbE1hcHBpbmdzW21hcHBpbmdzW2ldLnZlbmRvcl9pZF1bbWFwcGluZ3NbaV0ucHJvZHVjdF9pZF0gPSBtYXBwaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJRHMoaWQpIHtcbiAgICB2YXIgYml0cyA9IGlkLnNwbGl0KCctJyk7XG4gICAgaWYgKGJpdHMubGVuZ3RoIDwgMikge1xuICAgICAgdmFyIG1hdGNoID0gaWQubWF0Y2goL1ZlbmRvcjogKFxcdyspIFByb2R1Y3Q6IChcXHcrKS8pO1xuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hdGNoLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIHJldHVybiBiaXRzLnNsaWNlKDAsIDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZE1hcHBpbmcocGFkKSB7XG4gICAgaWYgKHVzZWRNYXBwaW5nc1twYWQuaW5kZXhdICYmIHVzZWRNYXBwaW5nc1twYWQuaW5kZXhdLmlkID09IHBhZC5pZCkge1xuICAgICAgcmV0dXJuIHVzZWRNYXBwaW5nc1twYWQuaW5kZXhdLm1hcHBpbmc7XG4gICAgfVxuICAgIHZhciBtYXBwaW5nID0gbnVsbDtcbiAgICBpZiAocGFkLmlkLm1hdGNoKC9TVEFOREFSRCBHQU1FUEFELykpIHtcbiAgICAgIC8vIE1ha2Ugb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIG1hdGNoIHRoZSB1cGRhdGVkIHNwZWMuXG4gICAgICBtYXBwaW5nID0gaWRlbnRpdHlNYXBwaW5nO1xuICAgIH0gZWxzZSBpZiAoYWxsTWFwcGluZ3MpIHtcbiAgICAgIC8vIExvb2sgdXAgYSBtYXBwaW5nIGJ5IHZlbmRvciBpZCwgcHJvZHVjdCBpZFxuICAgICAgdmFyIGlkcyA9IGdldElEcyhwYWQuaWQpO1xuICAgICAgaWYgKGlkcyAmJiBpZHNbMF0gaW4gYWxsTWFwcGluZ3MgJiYgaWRzWzFdIGluIGFsbE1hcHBpbmdzW2lkc1swXV0pIHtcbiAgICAgICAgbWFwcGluZyA9IGFsbE1hcHBpbmdzW2lkc1swXV1baWRzWzFdXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgIHVzZWRNYXBwaW5nc1twYWQuaW5kZXhdID0ge2lkOiBwYWQuaWQsIG1hcHBpbmc6IG1hcHBpbmd9O1xuICAgICAgcmV0dXJuIG1hcHBpbmc7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFkKHBhZCkge1xuICAgIGZ1bmN0aW9uIGJ1dHRvbigpIHtcbiAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgdGhpcy52YWx1ZSA9IDAuMDtcbiAgICB9XG4gICAgaWYgKHVzZWRQYWRzW3BhZC5pbmRleF0gJiYgdXNlZFBhZHNbcGFkLmluZGV4XS5pZCA9PSBwYWQuaWQpIHtcbiAgICAgIC8vIFJlY3ljbGUuIFNob3VsZCB3ZSBrZWVwIGEgZmV3IG9iamVjdHMgc28gd2UgZG9uJ3QgcmV0dXJuIHRoZSBzYW1lXG4gICAgICAvLyBvYmplY3QgZXZlcnkgdGltZT9cbiAgICAgIHJldHVybiB1c2VkUGFkc1twYWQuaW5kZXhdO1xuICAgIH1cbiAgICB2YXIgbmV3cGFkID0ge2J1dHRvbnM6IG5ldyBBcnJheSgxNyksIGF4ZXM6IFswLjAsIDAuMCwgMC4wLCAwLjBdLFxuICAgICAgICAgICAgICAgICBpZDogcGFkLmlkLCBpbmRleDogcGFkLmluZGV4LCBtYXBwaW5nOiBcInN0YW5kYXJkXCJ9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3cGFkLmJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5ld3BhZC5idXR0b25zW2ldID0gbmV3IGJ1dHRvbigpO1xuICAgIH1cbiAgICAvLyBDYWNoZSBpdCBzbyB3ZSBkb24ndCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgZXZlcnkgdGltZS5cbiAgICB1c2VkUGFkc1twYWQuaW5kZXhdID0gbmV3cGFkO1xuICAgIHJldHVybiBuZXdwYWQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRwcm9wKHRoaW5nLCBwcm9wcykge1xuICAgIHByb3BzID0gcHJvcHMuc2xpY2UoMCk7XG4gICAgd2hpbGUgKHByb3BzLmxlbmd0aCkge1xuICAgICAgdmFyIHAgPSBwcm9wcy5zaGlmdCgpO1xuICAgICAgaWYgKHAgaW4gdGhpbmcpIHtcbiAgICAgICAgdGhpbmcgPSB0aGluZ1twXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcEJ1dHRvbihwYWQsIHRoaXNCdXR0b24sIG1hcCwgYnV0dG9ucykge1xuICAgIHZhciBidXR0b24gPSBidXR0b25zW3RoaXNCdXR0b25bMF1dO1xuICAgIHZhciBwID0gZ2V0cHJvcChtYXAsIHRoaXNCdXR0b25bMV0pO1xuICAgIGlmIChwICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGIgPSB0eXBlb2YocCkgPT0gXCJudW1iZXJcIiA/IHAgOiAoXCJidXR0b25cIiBpbiBwID8gcC5idXR0b24gOiAtMSk7XG4gICAgICB2YXIgYSA9ICh0eXBlb2YocCkgPT0gXCJvYmplY3RcIiAmJiBcImF4aXNcIiBpbiBwKSA/IHAuYXhpcyA6IC0xO1xuICAgICAgaWYgKGEgIT0gLTEpIHtcbiAgICAgICAgYnV0dG9uLnZhbHVlID0gKHBhZC5heGVzW2FdICsgMS4wKSAvIDIuMDtcbiAgICAgICAgaWYgKGIgPT0gLTEpIHtcbiAgICAgICAgICBidXR0b24ucHJlc3NlZCA9IGJ1dHRvbi52YWx1ZSA+IDAuMjU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChiICE9IC0xKSB7XG4gICAgICAgIGJ1dHRvbi5wcmVzc2VkID0gdHlwZW9mKHBhZC5idXR0b25zW2JdKSA9PSBcIm51bWJlclwiID8gKHBhZC5idXR0b25zW2JdID09IDEuMCkgOiBwYWQuYnV0dG9uc1tiXS5wcmVzc2VkO1xuICAgICAgICBpZiAoYSA9PSAtMSkge1xuICAgICAgICAgIGJ1dHRvbi52YWx1ZSA9IHR5cGVvZihwYWQuYnV0dG9uc1tiXSkgPT0gXCJudW1iZXJcIiA/IHBhZC5idXR0b25zW2JdIDogcGFkLmJ1dHRvbnNbYl0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5uYW1lID0gbWFwLm5hbWVzW3RoaXNCdXR0b25bMF1dO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24ucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgYnV0dG9uLnZhbHVlID0gMC4wO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcEF4aXMocGFkLCB0aGlzQXhpcywgbWFwLCBheGVzLCBpKSB7XG4gICAgdmFyIGEgPSBnZXRwcm9wKG1hcCwgdGhpc0F4aXMpO1xuICAgIGlmIChhICE9IHVuZGVmaW5lZCkge1xuICAgICAgYXhlc1tpXSA9IHBhZC5heGVzW2FdO1xuICAgIH0gZWxzZSB7XG4gICAgICBheGVzW2ldID0gMC4wO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcEhhbGZBeGlzVG9CdXR0b24ocGFkLCB0aGlzQXhpcywgbWFwLCBidXR0b25zKSB7XG4gICAgdmFyIGJ1dHRvbiA9IGJ1dHRvbnNbdGhpc0F4aXNbMF1dO1xuICAgIHZhciBkaXJlY3Rpb24gPSB0aGlzQXhpc1sxXTtcbiAgICB2YXIgcCA9IGdldHByb3AobWFwLCB0aGlzQXhpc1syXSk7XG4gICAgdmFyIGEgPSB0eXBlb2YocCkgPT0gXCJudW1iZXJcIiA/IHAgOiAoXCJheGlzXCIgaW4gcCA/IHAuYXhpcyA6IC0xKTtcbiAgICBpZiAocCAhPSAtMSkge1xuICAgICAgdmFyIHZhbHVlID0gcGFkLmF4ZXNbYV07XG4gICAgICBpZiAoZGlyZWN0aW9uIDwgMCAmJiB2YWx1ZSA8IDApIHtcbiAgICAgICAgYnV0dG9uLnZhbHVlID0gLXZhbHVlO1xuICAgICAgICBidXR0b24ucHJlc3NlZCA9IHZhbHVlIDwgLTAuMjU7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA+IDAgJiYgdmFsdWUgPiAwKSB7XG4gICAgICAgIGJ1dHRvbi52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBidXR0b24ucHJlc3NlZCA9IHZhbHVlID4gMC4yNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIGJ1dHRvbi52YWx1ZSA9IDAuMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLnByZXNzZWQgPSBmYWxzZTtcbiAgICAgIGJ1dHRvbi52YWx1ZSA9IDAuMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseU1hcHBpbmcocGFkLCBtYXApIHtcbiAgICB2YXIgbmV3cGFkID0gZ2V0UGFkKHBhZCk7XG4gICAgbmV3cGFkLnRpbWVzdGFtcCA9IHBhZC50aW1lc3RhbXAgPyBwYWQudGltZXN0YW1wIDogcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25PcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbWFwQnV0dG9uKHBhZCwgYnV0dG9uT3JkZXJbaV0sIG1hcCwgbmV3cGFkLmJ1dHRvbnMpO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgZC1wYWQuXG4gICAgdmFyIHR5cGUgPSBnZXRwcm9wKG1hcCwgW1wiZC1wYWRzXCIsIDAsIFwidHlwZVwiXSk7XG4gICAgaWYgKHR5cGUgPT0gXCJidXR0b25zXCIpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkUGFkQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXBCdXR0b24ocGFkLCBkUGFkQnV0dG9uc1tpXSwgbWFwLCBuZXdwYWQuYnV0dG9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwiYXhlc1wiKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZFBhZEF4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWFwSGFsZkF4aXNUb0J1dHRvbihwYWQsIGRQYWRBeGVzW2ldLCBtYXAsIG5ld3BhZC5idXR0b25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gXCJkcGFkXCIpIHtcbiAgICAgIC8vVE9ETzogZm9yIGQtcGFkcyBleHBvc2VkIGFzIGhhdCBzd2l0Y2hlc1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuZXdwYWQuYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbWFwQXhpcyhwYWQsIGF4aXNPcmRlcltpXSwgbWFwLCBuZXdwYWQuYXhlcywgaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdwYWQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1hcEdhbWVwYWQocGFkKSB7XG4gICAgaWYgKHBhZCAmJiBwYWQubWFwcGluZyAhPSBcInN0YW5kYXJkXCIpIHtcbiAgICAgIHZhciBtYXAgPSBmaW5kTWFwcGluZyhwYWQpO1xuICAgICAgaWYgKG1hcCkge1xuICAgICAgICByZXR1cm4gYXBwbHlNYXBwaW5nKHBhZCwgbWFwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhbWVwYWRzKCkge1xuICAgIHZhciBwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzID8gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCkgOiAobmF2aWdhdG9yLndlYmtpdEdldEdhbWVwYWRzID8gbmF2aWdhdG9yLndlYmtpdEdldEdhbWVwYWRzKCkgOiBbXSk7XG4gICAgdmFyIG5ld3BhZHMgPSBuZXcgQXJyYXkocGFkcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmV3cGFkc1tpXSA9IHJlbWFwR2FtZXBhZChwYWRzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld3BhZHM7XG4gIH07XG5cbiAgc2NvcGUuZ2V0R2FtZXBhZHMgPSBnZXRHYW1lcGFkcztcbiAgc2NvcGUucmVtYXBHYW1lcGFkID0gcmVtYXBHYW1lcGFkO1xuICBsb2FkTWFwcGluZ3Moc2NvcGUuZ2FtZVBhZE1hcHBpbmdzKTtcblxufSkod2luZG93KTtcbiIsIi8qKlxuICogRXZ0XG4gKlxuICogQSBzdXBlciBsaWdodHdlaWdodFxuICogZXZlbnQgZW1pdHRlciBsaWJyYXJ5LlxuICpcbiAqIEB2ZXJzaW9uIDAuMy4zXG4gKiBAYXV0aG9yIFdpbHNvbiBQYWdlIDx3aWxzb24ucGFnZUBtZS5jb20+XG4gKi9cblxuOyhmdW5jdGlvbigpIHtcblxuLyoqXG4gKiBMb2NhbHNcbiAqL1xuXG52YXIgcHJvdG8gPSBFdmVudHMucHJvdG90eXBlO1xudmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBldmVudCBlbWl0dGVyXG4gKiBpbnN0YW5jZSwgb3IgaWYgcGFzc2VkIGFuXG4gKiBvYmplY3QsIG1peGVzIHRoZSBldmVudCBsb2dpY1xuICogaW50byBpdC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBFdmVudHMob2JqKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFdmVudHMpKSByZXR1cm4gbmV3IEV2ZW50cyhvYmopO1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqLCBwcm90byk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgY2FsbGJhY2tcbiAqIHdpdGggYW4gZXZlbnQgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgbmFtZVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiXG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xucHJvdG8ub24gPSBmdW5jdGlvbihuYW1lLCBjYikge1xuICB0aGlzLl9jYnMgPSB0aGlzLl9jYnMgfHwge307XG4gICh0aGlzLl9jYnNbbmFtZV0gfHwgKHRoaXMuX2Nic1tuYW1lXSA9IFtdKSkucHVzaChjYik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBdHRhY2ggYSBjYWxsYmFjayB0aGF0IG9uY2VcbiAqIGNhbGxlZCwgZGV0YWNoZXMgaXRzZWxmLlxuICpcbiAqIFRPRE86IEltcGxlbWVudCBgLm9mZigpYCB0byB3b3JrXG4gKiB3aXRoIGBvbmNlKClgIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgbmFtZVxuICogQHBhcmFtICB7RnVuY3Rpb259IGNiXG4gKiBAcHVibGljXG4gKi9cbnByb3RvLm9uY2UgPSBmdW5jdGlvbihuYW1lLCBjYikge1xuICB0aGlzLm9uKG5hbWUsIG9uZSk7XG4gIGZ1bmN0aW9uIG9uZSgpIHtcbiAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMub2ZmKG5hbWUsIG9uZSk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHNpbmdsZSBjYWxsYmFjayxcbiAqIG9yIGFsbCBjYWxsYmFja3MgYXNzb2NpYXRlZFxuICogd2l0aCB0aGUgcGFzc2VkIGV2ZW50IG5hbWUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIG5hbWVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gIHRoaXMuX2NicyA9IHRoaXMuX2NicyB8fCB7fTtcblxuICBpZiAoIW5hbWUpIHsgdGhpcy5fY2JzID0ge307IHJldHVybjsgfVxuICBpZiAoIWNiKSB7IHJldHVybiBkZWxldGUgdGhpcy5fY2JzW25hbWVdOyB9XG5cbiAgdmFyIGNicyA9IHRoaXMuX2Nic1tuYW1lXSB8fCBbXTtcbiAgdmFyIGk7XG5cbiAgd2hpbGUgKGNicyAmJiB+KGkgPSBjYnMuaW5kZXhPZihjYikpKSB7IGNicy5zcGxpY2UoaSwgMSk7IH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZpcmVzIGFuIGV2ZW50LCB0cmlnZ2VyaW5nXG4gKiBhbGwgY2FsbGJhY2tzIHJlZ2lzdGVyZWQgb24gdGhpc1xuICogZXZlbnQgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5wcm90by5maXJlID0gcHJvdG8uZW1pdCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIGNicyA9IHRoaXMuX2NicyA9IHRoaXMuX2NicyB8fCB7fTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucztcbiAgdmFyIGJhdGNoID0gKGNic1tuYW1lXSB8fCBbXSkuY29uY2F0KGNic1snKiddIHx8IFtdKTtcbiAgdmFyIGN0eCA9IG9wdGlvbnMuY3R4IHx8IHRoaXM7XG5cbiAgaWYgKGJhdGNoLmxlbmd0aCkge1xuICAgIHRoaXMuX2ZpcmVBcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHdoaWxlIChiYXRjaC5sZW5ndGgpIHtcbiAgICAgIGJhdGNoLnNoaWZ0KCkuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmZpcmVyID0gZnVuY3Rpb24obmFtZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICBhcmdzLnVuc2hpZnQobmFtZSk7XG4gICAgc2VsZi5maXJlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBVdGlsXG4gKi9cblxuLyoqXG4gKiBNaXhlcyBpbiB0aGUgcHJvcGVydGllc1xuICogb2YgdGhlIHNlY29uZCBvYmplY3QgaW50b1xuICogdGhlIGZpcnN0LlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gYVxuICogQHBhcmFtICB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1peGluKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIGFba2V5XSA9IGJba2V5XTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogRXhwb3NlICdFdmVudCcgKFVNRClcbiAqL1xuXG5pZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gRXZlbnRzO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCl7IHJldHVybiBFdmVudHM7IH0pO1xufSBlbHNlIHtcbiAgd2luZG93LmV2dCA9IEV2ZW50cztcbn1cblxufSkoKTtcbiIsIi8qIGpzaGludCBkZXZlbDp0cnVlICovXG4ndXNlIHN0cmljdCc7XG4oZnVuY3Rpb24oZGVmaW5lKXtkZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSxleHBvcnRzLG1vZHVsZSl7XG5cbiAgdmFyIHhCb3hQYWQgPSBuZXcgZXZ0KCk7XG4gIHZhciBpbnRlcnZhbDtcbiAgdmFyIGJ1dHRvbk1hcHBpbmcgPVxuICAgIFsnQScsICdCJywgJ1gnLCAnWScsICdMQicsICdSQicsJ0xUJyxcbiAgICAgJ1JUJywgJ0JhY2snLCAnU3RhcnQnLCAnTFMnLFxuICAgICdSUycsICdVcCcsICdEb3duJywgJ0xlZnQnLCAnUmlnaHQnLCAnWEJveCddO1xuICB2YXIgYnV0dG9uU3RhdHVzID0gW107XG4gIHZhciBwb2xsSW50ZXJ2YWwgPSAyMDA7XG4gIHZhciBwYWQ7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRjb25uZWN0ZWQnLCBjb25uZWN0aGFuZGxlcik7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkZGlzY29ubmVjdGVkJywgZGlzY29ubmVjdGhhbmRsZXIpO1xuXG4gIGZ1bmN0aW9uIGNvbm5lY3RoYW5kbGVyKGUpIHtcbiAgICBwYWQgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVtlLmdhbWVwYWQuaW5kZXhdO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwocG9sbFN0YXRlLCBwb2xsSW50ZXJ2YWwpXG4gICAgeEJveFBhZC5jb25uZWN0ZWQgPSB0cnVlO1xuICAgIHhCb3hQYWQuZmlyZSgnY29ubmVjdGVkJyk7XG4gIH1cblxuICBmdW5jdGlvbiBwb2xsU3RhdGUoKSB7XG4gICAgdmFyIGdwID0gcmVtYXBHYW1lcGFkKHBhZCk7XG4gICAgdmFyIHByZXNzZWRCdXR0b25zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncC5idXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYiA9IGdwLmJ1dHRvbnNbaV07XG4gICAgICB2YXIgcHJlc3NlZCA9IGIucHJlc3NlZDtcbiAgICAgIGlmIChiLnByZXNzZWQpIHtcbiAgICAgICAgaWYgKCFidXR0b25TdGF0dXNbaV0pIHtcbiAgICAgICAgICBwcmVzc2VkQnV0dG9ucy5wdXNoKGJ1dHRvbk1hcHBpbmdbaV0pO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ0JVVFRPTiBQUkVTU0VEICcgKyBpICsgJyBOQU1FICcgKyBidXR0b25NYXBwaW5nW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnV0dG9uU3RhdHVzW2ldID0gcHJlc3NlZDtcbiAgICB9XG4gICAgeEJveFBhZC5maXJlKCdwcmVzc2VkJywgcHJlc3NlZEJ1dHRvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzY29ubmVjdGhhbmRsZXIoZSkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIHhCb3hQYWQuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgeEJveFBhZC5maXJlKCdjb25uZWN0ZWQnKTtcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0geEJveFBhZDtcblxufSk7fSkodHlwZW9mIGRlZmluZT09J2Z1bmN0aW9uJyYmZGVmaW5lLmFtZD9kZWZpbmVcbjooZnVuY3Rpb24obix3KXtyZXR1cm4gdHlwZW9mIG1vZHVsZT09J29iamVjdCc/ZnVuY3Rpb24oYyl7XG5jKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpO306ZnVuY3Rpb24oYyl7dmFyIG09e2V4cG9ydHM6e319O2MoZnVuY3Rpb24obil7XG5yZXR1cm4gd1tuXTt9LG0uZXhwb3J0cyxtKTt3W25dPW0uZXhwb3J0czt9O30pKCd4Qm94UGFkJyx0aGlzKSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=