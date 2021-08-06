// class Hello extends React.Component {
// render() {
//   // only one item can be returned so in order to show multiple things you have to wrap it in a single div like below.
//   return (
//     <div>
//       <h1>Hello there!</h1>
//       <h1>Hello there!</h1>
//       <h1>Hello there!</h1>
//     </div>
//   );
// }
// }

function Hello() {
  return (
    <div>
      <h1>Hello there!</h1>
      <h1>Hello there!</h1>
      <h1>Hello there!</h1>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
