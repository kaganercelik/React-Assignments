import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Default data tests", () => {
	let items, item;

	beforeEach(() => {
		render(<App />);
		items = screen.getAllByText(/Click to copy emoji/i);
		item = screen.getByText("Kissing Heart");
	});

	it("should be the same length as default data", () => {
		expect(items.length).toEqual(20);
	});

	it("should be the same as default data", () => {
		expect(item).toBeInTheDocument();
	});
});
