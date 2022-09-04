import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { click } from "@testing-library/user-event/dist/click";

describe("Emoji Copy Tests", () => {
	let clicks;

	beforeEach(() => {
		render(<App />);
		clicks = screen.getAllByTestId("row");
	});

	it("should have data-clipboard-text", () => {
		expect(clicks[0]).toHaveAttribute("data-clipboard-text");
	});
});
