// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("DropShadow");

function value(e) {
  return e.target.value;
}

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      return React.createElement("div", {
                  style: {
                    display: "flex",
                    height: "100vh",
                    alignItems: "center",
                    flexDirection: "column",
                    justifyContent: "center"
                  }
                }, React.createElement("div", {
                      style: {
                        height: "200px",
                        width: "200px",
                        borderRadius: "2px",
                        boxShadow: Pervasives.string_of_int(self[/* state */2][/* x */0]) + ("px " + (Pervasives.string_of_int(self[/* state */2][/* y */1]) + ("px " + (Pervasives.string_of_int(self[/* state */2][/* blur */2]) + ("px " + (Pervasives.string_of_int(self[/* state */2][/* spread */3]) + ("px " + self[/* state */2][/* color */4])))))))
                      }
                    }), React.createElement("div", {
                      style: {
                        margin: "30px 0"
                      }
                    }, React.createElement("input", {
                          max: "100",
                          min: 0,
                          type: "range",
                          value: Pervasives.string_of_int(self[/* state */2][/* blur */2]),
                          onChange: (function (e) {
                              return Curry._1(self[/* send */4], /* ChangeBlur */Block.__(2, [Caml_format.caml_int_of_string(e.target.value)]));
                            })
                        }), React.createElement("input", {
                          max: "100",
                          min: 0,
                          type: "range",
                          value: Pervasives.string_of_int(self[/* state */2][/* spread */3]),
                          onChange: (function (e) {
                              return Curry._1(self[/* send */4], /* ChangeSpread */Block.__(3, [Caml_format.caml_int_of_string(e.target.value)]));
                            })
                        })));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* x */0,
              /* y */15,
              /* blur */30,
              /* spread */0,
              /* color */"#673ab7"
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      switch (action.tag | 0) {
        case 0 : 
            return /* Update */Block.__(0, [/* record */[
                        /* x */action[0],
                        /* y */state[/* y */1],
                        /* blur */state[/* blur */2],
                        /* spread */state[/* spread */3],
                        /* color */state[/* color */4]
                      ]]);
        case 1 : 
            return /* Update */Block.__(0, [/* record */[
                        /* x */state[/* x */0],
                        /* y */action[0],
                        /* blur */state[/* blur */2],
                        /* spread */state[/* spread */3],
                        /* color */state[/* color */4]
                      ]]);
        case 2 : 
            return /* Update */Block.__(0, [/* record */[
                        /* x */state[/* x */0],
                        /* y */state[/* y */1],
                        /* blur */action[0],
                        /* spread */state[/* spread */3],
                        /* color */state[/* color */4]
                      ]]);
        case 3 : 
            return /* Update */Block.__(0, [/* record */[
                        /* x */state[/* x */0],
                        /* y */state[/* y */1],
                        /* blur */state[/* blur */2],
                        /* spread */action[0],
                        /* color */state[/* color */4]
                      ]]);
        case 4 : 
            return /* Update */Block.__(0, [/* record */[
                        /* x */state[/* x */0],
                        /* y */state[/* y */1],
                        /* blur */state[/* blur */2],
                        /* spread */state[/* spread */3],
                        /* color */action[0]
                      ]]);
        
      }
    });
  return newrecord;
}

exports.component = component;
exports.value = value;
exports.make = make;
/* component Not a pure module */
