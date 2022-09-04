import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header Tests", () => {
	let headerDom;

	beforeEach(() => {
		render(<Header />);
		headerDom = screen.getByText(/Emoji Search/i);
	});

	it("should render successfully", () => {
		expect(headerDom).toBeInTheDocument();
	});
});
