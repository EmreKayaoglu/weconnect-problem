import React from "react";
import "./styles.css";

const App = () => {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");

  const parseParam = (str) => {
    let ret = { arr: [], cnt: 0 };
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "+") ret.arr.push(true);
      else if (str.charAt(i) === "-") ret.arr.push(false);
      else {
        ret.cnt = parseInt(str.substr(i), 10);
        break;
      }
    }
    return ret;
  };
  const cakeFlip = (str) => {
    let param = parseParam(str);
    let flipCnt = 0;
    let arr = param.arr;
    let cnt = param.cnt;
    while (true) {
      let idx = arr.indexOf(false);
      if (idx === -1 || idx + cnt > arr.length) break;
      for (let i = 0; i < cnt; i++) {
        arr[idx + i] = !arr[idx + i];
      }
      flipCnt++;
    }
    console.log(arr);
    if (
      arr.filter((a) => {
        return !a;
      }).length
    ) {
      console.log("Impossible");
      return "Impossible";
    } else {
      console.log(`Flip Count: ${flipCnt}`);
      return flipCnt;
    }
  };

  const checkValidInput = (str) => {
    const regex = /^\d+(([\+-]+)\d+)+/g;
    const found = str.match(regex);
    if (!found || found.length == 0 || found[0] != str) {
      return false;
    }
    return true;
  };

  const calculate = () => {
    let str = input.replaceAll(" ", "");
    let valid = checkValidInput(str);
    if (!valid) {
      // input is invalid
      setOutput("Invalid Input");
      return;
    }

    setOutput("");
    const regex = /([\+-]+)\d+/g;
    const cases = str.match(regex);
    let o = "";
    cases.forEach((element, i) => {
      const res = cakeFlip(element);
      o += "Case #" + (i + 1) + ": " + res + " ";
      setOutput(o);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pancake Problem</h2>
      </header>
      <div>
        <textarea
          className="testInput"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <textarea className="testOutput" value={output} disabled />
      </div>
      <button className="action" onClick={() => calculate()}>
        Start Flip
      </button>
    </div>
  );
};

export default App;
