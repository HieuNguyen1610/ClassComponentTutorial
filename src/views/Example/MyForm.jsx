import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    arr: [
      {
        id: "SV001",
        name: "Nguyễn Văn A",
        class: "12A",
      },
      {
        id: "SV002",
        name: "Nguyễn Văn B",
        class: "12B",
      },
      {
        id: "SV003",
        name: "Nguyễn Văn C",
        class: "12C",
      },
    ],
  };

  addStudent = (student) => {
    this.setState({ arr: [...this.state.arr, student] });
  };

  deleteStudent = (student) => {
    let currentArr = this.state.arr;
    currentArr = currentArr.filter((std) => {
      if (std.id !== student.id) {
        return std;
      }
    });
    this.setState({ arr: currentArr });
  };

  render() {
    const { arr } = this.state;

    return (
      <div>
        <AddComponent addStudent={this.addStudent} />
        <hr />
        <h2>Child component </h2>
        <ChildComponent arr={arr} deleteStudent={this.deleteStudent} />
      </div>
    );
  }
}

export default MyForm;
