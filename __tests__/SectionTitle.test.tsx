import { render, screen } from "@testing-library/react";
import SectionTitle from "@/components/SectionTitle";

describe("SectionTitle", () => {
  it("renders the section name in HTML-tag format", () => {
    render(<SectionTitle name="Projects" />);

    expect(
      screen.getByRole("heading", { name: /<projects\/>/i }),
    ).toBeInTheDocument();
  });

  it("renders the decorative horizontal line", () => {
    render(<SectionTitle name="Projects" />);

    expect(screen.getByTestId("section-line")).toBeInTheDocument();
  });

  it("renders different section names correctly", () => {
    render(<SectionTitle name="About" />);

    expect(
      screen.getByRole("heading", { name: /<about\/>/i }),
    ).toBeInTheDocument();
  });
});
