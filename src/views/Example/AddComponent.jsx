import React from "react";

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    studentName: "",
    className: "",
  };

  handleChangeStdName = (event) => {
    this.setState({
      studentName: event.target.value,
    });
  };

  handleChangeClsName = (event) => {
    this.setState({
      className: event.target.value,
    });
  };

  handleAdd = (event) => {
    event.preventDefault();
    if (!this.state.className || !this.state.className) {
      alert("Please input student name and class name");
      return;
    }
    this.props.addStudent({
      id: Math.floor(Math.random() * 1001),
      name: this.state.studentName,
      class: this.state.className,
    });
    this.setState({
      studentName: "",
      className: "",
    });
  };

  render() {
    const { studentName, className } = this.state;
    return (
      <>
        <h3>Add Form</h3>
        <form>
          <label htmlFor="stdName">Student name</label>
          <br />
          <input
            type="text"
            value={studentName}
            onChange={(event) => this.handleChangeStdName(event)}
          />
          <br />
          <label htmlFor="clsName">Class name</label>
          <br />
          <input
            type="text"
            value={className}
            onChange={(event) => this.handleChangeClsName(event)}
          />
          <br />
          <button onClick={(event) => this.handleAdd(event)}>Submit</button>
        </form>
      </>
    );
  }
}

export default AddComponent;
