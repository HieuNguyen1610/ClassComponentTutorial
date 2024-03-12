import React from "react";

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    isShowed: false,
  };

  handleShowHide = () => {
    this.setState({
      isShowed: !this.state.isShowed,
    });
  };

  handleDeleteStudent = (student) => {
    this.props.deleteStudent(student);
  };

  render() {
    const { arr } = this.props;
    return (
      <>
        {!this.state.isShowed ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <ul>
              {arr.map((sv) => (
                <li key={sv.id}>
                  {sv.name} - {sv.class}{" "}
                  <button onClick={() => this.handleDeleteStudent(sv)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
