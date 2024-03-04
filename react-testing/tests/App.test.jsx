import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "../src/App";

describe("Testing the <App/>", () => {
  const initialValue = 0;
  test("Debe de mostrar el valor inicial de 0 ", () => {
    render(<App />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test("Debe de incrementar con el boton +1 ", () => {
    render(<App />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1 ", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "btn-decrement" }));
    expect(screen.getByRole("heading", { name: "counter" }).innerHTML).toBe(
      "-1"
    );
  });

  test("Debe de reiniciar con el boton Reset ", () => {
    render(<App value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
