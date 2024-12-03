/*
import React from "react";
import ReactDOM from "react-dom/client";
//render an element

const container1 = document.getElementById("roots");
const root1 = ReactDOM.createRoot(container1);
root1.render(<p>Hello</p>);
/*
result to render in html 
<body>
    <p>Hello</p>
</body>



//import 1 element in to a page through create root and render
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const container2 = document.getElementById("root");
const root2 = ReactDOM.createRoot(container2);
root2.render(myelement);

//root node


const sandy = (
  <div id="sandy">
    <p>This is sandy</p>
  </div>
);
const container = document.getElementById("sandy");
const container3 = document.getElementById("root");
const root3 = ReactDOM.createRoot(sandy);
const root = ReactDOM.createRoot(container);
root3.render(root3);
root.render(<p>Hallo</p>);
 */
function test() {
  return (
    <div>
      <body>
        <div id="test">
          <p>This is test div</p>
          <div className="import elements">
            <table>
              <tr>
                <th>Name</th>
              </tr>
              <tr>
                <td>John</td>
              </tr>
              <tr>
                <td>Elsa</td>
              </tr>
            </table>
          </div>
        </div>
      </body>
    </div>
  );
}
export default test;
