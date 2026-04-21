import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav", () => {
  it("renders all navigation links", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: /hero/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /certificates/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /projects/i }),
    ).toBeInTheDocument();
  });

  it("links point to correct section anchors", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: /hero/i })).toHaveAttribute(
      "href",
      "#hero",
    );
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(
      screen.getByRole("link", { name: /certificates/i }),
    ).toHaveAttribute("href", "#certificates");
    expect(screen.getByRole("link", { name: /projects/i })).toHaveAttribute(
      "href",
      "#projects",
    );
  });
});
