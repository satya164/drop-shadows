type state = {
  x: int,
  y: int,
  blur: int,
  spread: int,
  color: string,
};

type action =
  | ChangeX(int)
  | ChangeY(int)
  | ChangeBlur(int)
  | ChangeSpread(int)
  | ChangeColor(string);

let component = ReasonReact.reducerComponent("DropShadow");

let value = e => ReactDOMRe.domElementToObj(ReactEventRe.Form.target(e))##value;

let make = _children => {
  ...component,
  initialState: () => {x: 0, y: 15, blur: 30, spread: 0, color: "#673ab7"},
  reducer: (action, state) =>
    switch (action) {
    | ChangeX(value) => ReasonReact.Update({...state, x: value})
    | ChangeY(value) => ReasonReact.Update({...state, y: value})
    | ChangeBlur(value) => ReasonReact.Update({...state, blur: value})
    | ChangeSpread(value) => ReasonReact.Update({...state, spread: value})
    | ChangeColor(value) => ReasonReact.Update({...state, color: value})
    },
  render: self =>
    <div
      style=(
        ReactDOMRe.Style.make(
          ~display="flex",
          ~flexDirection="column",
          ~alignItems="center",
          ~justifyContent="center",
          ~height="100vh",
          (),
        )
      )>
      <div
        style=(
          ReactDOMRe.Style.make(
            ~height="200px",
            ~width="200px",
            ~borderRadius="2px",
            ~boxShadow=
              string_of_int(self.state.x)
              ++ "px "
              ++ string_of_int(self.state.y)
              ++ "px "
              ++ string_of_int(self.state.blur)
              ++ "px "
              ++ string_of_int(self.state.spread)
              ++ "px "
              ++ self.state.color,
            (),
          )
        )
      />
      <div style=(ReactDOMRe.Style.make(~margin="30px 0", ()))>
        <input
          _type="range"
          min=0
          max="100"
          value=(string_of_int(self.state.blur))
          onChange=(e => self.send(ChangeBlur(int_of_string(value(e)))))
        />
        <input
          _type="range"
          min=0
          max="100"
          value=(string_of_int(self.state.spread))
          onChange=(e => self.send(ChangeSpread(int_of_string(value(e)))))
        />
      </div>
    </div>,
};
