import React, { useState } from "react";
import "./ButtonC.css";
const ButtonC = () => {
  const [d1, setd1] = useState("");
  const [history, sethistory] = useState([]);
  const [data, setdata] = useState("");
  const [res, setres] = useState(null);
  var s1 = "";
  var b = "<";
  // solve function
  function calculate(s) {
    const stack = [];
    let sign = "+";
    let num = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (!isNaN(parseInt(c))) {
        num = num * 10 + parseInt(c);
      }
      if (
        i + 1 === s.length ||
        c === "+" ||
        c === "-" ||
        c === "*" ||
        c === "/"
      ) {
        if (sign === "+") {
          stack.push(num);
        } else if (sign === "-") {
          stack.push(-num);
        } else if (sign === "*") {
          stack[stack.length - 1] *= num;
        } else if (sign === "/") {
          stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / num);
        }
        sign = c;
        num = 0;
      }
    }
    let result = 0;
    for (let num of stack) {
      result += num;
    }
    return result;
  }
  function handleclick(para) {
    if (para === "=") {
      var input = d1;
      console.log("d1", d1);
      const ans = calculate(input);
      console.log("ans", ans);
      sethistory(ans);
      setres(ans);
      setdata(d1 + "=");
      setd1("");
    }

    // else
    else {
      s1 = d1.concat(para);
      setd1(s1);
    }
  }
  function handleCencel() {
    setres("");
    setdata("");
  }
  function handleBack() {
    var nst = d1;
    let finalstrig = nst.slice(0, -1);
    setd1(finalstrig);
    console.log(d1);
  }
  function handleHistory() {}
  return (
    <>
      <div style={{ textAlign: "center", padding: "10px", color: "red" }}>
        <h5>{!d1 ? data : d1}</h5>
        <h3>Ans:{!res ? null : res} </h3>
      </div>
      <div
        className="maindiv"
        style={{ display: "flex", justifyContent: "center", padding: "23px" }}
      >
        <table>
          <tr>
            <td>
              <button
                onClick={() => {
                  handleclick("=");
                }}
                style={{ color: "green" }}
              >
                =
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleCencel(null);
                }}
                style={{ color: "red" }}
              >
                c
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleBack();
                }}
                style={{ color: "purple" }}
              >
                {b}
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick("+");
                }}
                style={{ color: "grey" }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  handleclick(1);
                }}
              >
                1
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(2);
                }}
              >
                2
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(3);
                }}
              >
                3
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick("-");
                }}
                style={{ color: "grey" }}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  handleclick(4);
                }}
              >
                4
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(5);
                }}
              >
                5
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(6);
                }}
              >
                6
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick("*");
                }}
                style={{ color: "grey" }}
              >
                *
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  handleclick(7);
                }}
              >
                7
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(8);
                }}
              >
                8
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(9);
                }}
              >
                9
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick("/");
                }}
                style={{ color: "grey" }}
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  handleHistory();
                }}
              >
                H
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(0);
                }}
              >
                0
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick(".");
                }}
              >
                .
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  handleclick("%");
                }}
                style={{ color: "grey" }}
              >
                %
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ textAlign: "center" }}>History={history}</div>
    </>
  );
};

export default ButtonC;
