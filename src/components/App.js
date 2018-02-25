import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

import { connect } from "react-redux";
import { addRecipe, removeFromCalendar } from "../actions/index";

class App extends Component {
  render() {
    console.log(this.props);
    return <div>Hello World</div>;
  }
}
function mapStateToProps(calendar) {
  const dayOrder = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  return {
    calendar: dayOrder.map(day => ({
      day: day,
      meals: Object.keys(calendar[day]).reduce((accum, i) => {
        accum[i] = calendar[day][i] ? calendar[day][i] : null;
        return accum;
      }, {})
    }))
  };
}
function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: data => dispatch(addRecipe(data)),
    remove: data => dispatch(removeFromCalendar(data))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

//   state = {
//     calendar: null
//   };
//   componentDidMount() {
//     const { store } = this.props;
//     store.subscribe(() => {
//       this.setState(() => ({ calendar: store.getState() }));
//     });
//   }
//   submitFood = () => {
//     this.props.store.dispatch(
//       addRecipe({
//         day: 'monday',
//         meal: 'breakfast',
//         recipe: {
//           label: this.input.value
//         }
//       })
//     );
//     this.input.value = "";
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           ref={(input) => this.input = input}
//           placeholder="Mondays breakfast"
//         />
//         <button onClick={this.submitFood}>Submit</button>
//         <pre>
//           Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
//         </pre>
//       </div>
//     );
//   }
// }
