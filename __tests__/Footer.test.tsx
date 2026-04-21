import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders the current year", () => {
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });

  it("renders Adam Wiraszka name", () => {
    render(<Footer />);

    expect(screen.getByText(/adam wiraszka/i)).toBeInTheDocument();
  });
});
