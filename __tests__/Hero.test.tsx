import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: /adam wiraszka/i }),
    ).toBeInTheDocument();
  });

  it("renders the profile image", () => {
    render(<Hero />);

    expect(screen.getByAltText("Adam Wiraszka")).toBeInTheDocument();
  });

  it("renders the View Projects button linking to the projects section", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /view projects/i }),
    ).toHaveAttribute("href", "#projects");
  });

  it("renders the resume button linking to the resume PDF", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );
  });
});
