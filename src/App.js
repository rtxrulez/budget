import React, { Component } from "react";
import moment from "moment";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const DateBtn = styled.button`
  color: #000;
  background-color: transparent;
  width: 40px;
  height: 40px;
  margin: 5px;
  border: 1px solid #555;
`;

const DateLine = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding: 40px 0 15px;
`;

const Link = styled.a`
  color: green;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  border: ${({ selected }) => (selected ? "1px solid green" : "1px solid transparent")};
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      navSelected: "expanse"
    };
  }
  handleSubtracDay = () => {
    this.setState({ date: this.state.date.subtract(1, "day") });
  };

  handleAddDay = () => {
    this.setState({ date: this.state.date.add(1, "day") });
  };

  handleNavClick = event => {
    this.setState({ navSelected: event.target.getAttribute("name") });
  };

  render() {
    const { date, navSelected } = this.state;

    return (
      <div className="App">
        <section>
          <header>
            <h1> Реактивный бюджет </h1>
            <DateLine>
              <p> {date.format("DD.MM.YYYY")} </p>
              <DateBtn onClick={this.handleSubtracDay}>-</DateBtn>
              <DateBtn onClick={this.handleAddDay}>+</DateBtn>
            </DateLine>
          </header>
          <main>
            <Nav>
              <Link
                name="expanse"
                onClick={this.handleNavClick}
                selected={navSelected == "expanse"}
              >
                Расходы сегодня
              </Link>
              <Link
                name="incomes"
                onClick={this.handleNavClick}
                selected={navSelected == "incomes"}
              >
                Доходы
              </Link>
            </Nav>
          </main>
        </section>
      </div>
    );
  }
}

export default App;
