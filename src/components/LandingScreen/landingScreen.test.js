import React from "react";
import { Router } from "react-router-dom";
import {
  render,
  getByText,
  getByTestId,
  fireEvent
} from "@testing-library/react";
import LandingScreen from "./LandingScreen";
import GameScreen from "../GameScreen/GameScreen";

test("play again button is on the page", () => {
  const { debug, getByText } = render(<LandingScreen />);
  const button = getByText("Let's Play!");
  debug(button);
});
