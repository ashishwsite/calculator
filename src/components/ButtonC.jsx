import React, { useState } from "react";
import "./ButtonC.css";

const ButtonC = () => {
  const [d1, setd1] = useState("");
  const [history,sethistory]=useState([]);
  const [data, setdata] = useState("");
  const [res,setres]=useState(null)
  var s1 = "";
  var s2 = "";
  var a = 0;
 
  
  var op =null
  var b = "<";
  var ans;
  function isoperator(ch ){
    if(ch==='+'||ch==='-'||ch==='*'||ch==='/'||ch==='%'){
      return true;
    }
  }
  function handleclick(para) {
    if(para==='='){
      var st="";
      var foi=-1;
      var op='0';
      for(var i=0;i<d1.length;i++){
           if(isoperator(d1[i])){
            op=d1[i];
            foi=i;
            break;
           }
           st=st+d1[i];
      }
      var st2="";
      var ans=st-'0';
      // console.log("foi",foi, "ans",ans,"op",op)
      for(var i=foi+1;i<d1.length;i++){
        // console.log(ans);
        if(isoperator(d1[i])){
          if(op==='+'){ ans=ans+(st2-'0')}
         else if(op==='-'){ ans=ans-(st2-'0')}
         else if(op==='*'){ ans=ans*(st2-'0')}
         else  if(op==='/'){ ans=ans/(st2-'0')}
         else if(op==='%'){ ans=ans%(st2-'0')}
         op=d1[i];
         st2="";
        }
        else  st2=st2+d1[i];
      }
      // console.log(st2)
         if(op==='+'){ ans=ans+(st2-'0')}
         else if(op==='-'){ ans=ans-(st2-'0')}
         else if(op==='*'){ ans=ans*(st2-'0')}
         else  if(op==='/'){ ans=ans/(st2-'0')}
         else if(op==='%'){ ans=ans%(st2-'0')}
      // ans=a+(st-'0');
      console.log(ans);
     sethistory(ans);
      setres(ans);
      setdata(d1+"=");
      setd1("")
    }
   else{
    s1 = d1.concat(para);
    setd1(s1);
   }
  
  }
  function handleCencel(){
    setres("")
    setdata("")
  }
  function handleBack(){
    var nst=d1;
    let finalstrig =nst.slice(0, -1); 
    setd1(finalstrig);
    console.log(d1);
  }
function handleHistory(){
  
}
  return (
    <>
      <div
        style={{ textAlign: "center", padding: "10px", color:"red"}}
      >
        <h5>{(!d1)?data:d1}</h5>
        <h3>Ans:{(!res) ?null :res } </h3>
      </div>
      <div
        className="maindiv"
        style={{ display: "flex", justifyContent: "center", padding:"23px" }}
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
      <div style={{textAlign: "center"}}>History={history}</div>
    </>
  );
};

export default ButtonC;
