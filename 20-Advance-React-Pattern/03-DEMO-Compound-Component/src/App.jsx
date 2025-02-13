import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount="top"
      /> */}

      <Counter>
        <Counter.Increase icon="+" />
        <Counter.Count />
        <Counter.Decrease icon="-" />
        <Counter.Label>My super flexible counter</Counter.Label>
      </Counter>

      <div>
        <Counter>
          <span>HOW TO LEVEL UP</span>
          <Counter.Increase icon="◀️" />
          <Counter.Count />
          <Counter.Decrease icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}
