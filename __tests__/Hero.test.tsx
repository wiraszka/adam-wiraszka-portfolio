import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero />);

    expect(screen.getByText("Adam Wiraszka")).toBeInTheDocument();
  });

  it("renders the profile image", () => {
    render(<Hero />);

    expect(screen.getByAltText("Adam Wiraszka")).toBeInTheDocument();
  });

  it("renders the email contact link", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:adam.wirasz@gmail.com"
    );
  });

  it("renders the GitHub contact link", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });

  it("renders the LinkedIn contact link", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
  });
});
