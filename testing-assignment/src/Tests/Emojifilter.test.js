import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Emoji Filter Tests", () => {
	let inputText;

	beforeEach(() => {
		render(<App />);
		inputText = screen.getByText("100");
	});

	it("should filter successfully", () => {
		expect(inputText).toBeInTheDocument("100");
	});
});
