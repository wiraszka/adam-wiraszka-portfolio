import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";

const baseProps = {
  name: "Test Project",
  description: "A test description",
  url: "https://example.com",
  tags: ["React", "TypeScript"],
};

describe("ProjectCard", () => {
  it("renders the project name", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText("A test description")).toBeInTheDocument();
  });

  it("renders all tags", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("links to the correct URL", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
  });

  it("opens the link in a new tab", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("renders no tags when tags array is empty", () => {
    render(<ProjectCard {...baseProps} tags={[]} />);

    expect(screen.queryByText("React")).not.toBeInTheDocument();
    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });
});
