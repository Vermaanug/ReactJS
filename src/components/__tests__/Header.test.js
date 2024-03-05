import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utilis/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

//   const button = screen.getByRole("button");
    const button = screen.getByText("Login");

  expect(button).toBeInTheDocument();

});

it("Should Change Login button to logout to click ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button" , {name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button" , {name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
  
});
  
