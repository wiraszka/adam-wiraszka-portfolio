import { render, screen, waitFor } from "@testing-library/react";
import ProjectsGrid from "@/components/ProjectsGrid";

const mockProjects = [
  {
    id: 1,
    name: "Project One",
    description: "Description one",
    url: "https://one.com",
    tags: ["React"],
  },
  {
    id: 2,
    name: "Project Two",
    description: "Description two",
    url: "https://two.com",
    tags: ["Python"],
  },
];

type FetchMock = jest.Mock<Promise<Partial<Response>>, [RequestInfo | URL, RequestInit?]>;

beforeEach(() => {
  global.fetch = jest.fn() as FetchMock;
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("ProjectsGrid", () => {
  it("shows skeleton loaders while fetching", () => {
    (global.fetch as FetchMock).mockReturnValue(new Promise(() => {}));

    render(<ProjectsGrid />);

    expect(document.querySelectorAll(".animate-pulse")).toHaveLength(3);
  });

  it("renders project cards after a successful fetch", async () => {
    (global.fetch as FetchMock).mockResolvedValue({
      ok: true,
      json: async () => mockProjects,
    });

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("Project One")).toBeInTheDocument();
      expect(screen.getByText("Project Two")).toBeInTheDocument();
    });
  });

  it("shows no projects message when fetch returns an empty array", async () => {
    (global.fetch as FetchMock).mockResolvedValue({
      ok: true,
      json: async () => [],
    });

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("No projects found")).toBeInTheDocument();
    });
  });

  it("shows no projects message when fetch fails", async () => {
    (global.fetch as FetchMock).mockRejectedValue(new Error("Network error"));

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("No projects found")).toBeInTheDocument();
    });
  });

  it("shows no projects message when response is not ok", async () => {
    (global.fetch as FetchMock).mockResolvedValue({ ok: false });

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("No projects found")).toBeInTheDocument();
    });
  });
});
