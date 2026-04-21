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

  it("renders the email contact link", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:adam.wirasz@gmail.com",
    );
  });

  it("renders the GitHub contact link", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/wiraszka",
    );
  });

  it("renders the LinkedIn contact link", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
  });
});
