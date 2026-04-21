import { render, screen } from "@testing-library/react";
import About from "@/components/About";

jest.mock("react-github-calendar", () => ({
  GitHubCalendar: () => <div data-testid="github-calendar" />,
}));

describe("About", () => {
  it("renders the expertise paragraph", () => {
    render(<About />);

    expect(screen.getByTestId("expertise-text")).toBeInTheDocument();
  });

  it("renders the GitHub contributions calendar", () => {
    render(<About />);

    expect(screen.getByTestId("github-calendar")).toBeInTheDocument();
  });

  it("renders all four tech stack categories", () => {
    render(<About />);

    expect(screen.getByText(/languages/i)).toBeInTheDocument();
    expect(screen.getByText(/frontend/i)).toBeInTheDocument();
    expect(screen.getByText(/backend/i)).toBeInTheDocument();
    expect(screen.getByText(/devops/i)).toBeInTheDocument();
  });

  it("renders tech stack items", () => {
    render(<About />);

    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
    expect(screen.getByText("Vercel")).toBeInTheDocument();
  });
});
