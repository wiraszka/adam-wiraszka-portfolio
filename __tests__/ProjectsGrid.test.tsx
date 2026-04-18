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

const fetchMock = jest.fn() as jest.MockedFunction<typeof fetch>;

beforeEach(() => {
  Object.defineProperty(globalThis, "fetch", {
    value: fetchMock,
    writable: true,
    configurable: true,
  });
});

afterEach(() => {
  fetchMock.mockReset();
});

describe("ProjectsGrid", () => {
  it("shows skeleton loaders while fetching", () => {
    fetchMock.mockReturnValue(new Promise<Response>(() => {}));

    render(<ProjectsGrid />);

    expect(document.querySelectorAll(".animate-pulse")).toHaveLength(3);
  });

  it("renders project cards after a successful fetch", async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => mockProjects } as Response);

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("Project One")).toBeInTheDocument();
      expect(screen.getByText("Project Two")).toBeInTheDocument();
    });
  });

  it("shows no projects message when fetch returns an empty array", async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => [] } as Response);

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("No projects found")).toBeInTheDocument();
    });
  });

  it("shows no projects message when fetch fails", async () => {
    fetchMock.mockRejectedValue(new Error("Network error"));

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("No projects found")).toBeInTheDocument();
    });
  });

  it("shows no projects message when response is not ok", async () => {
    fetchMock.mockResolvedValue({ ok: false } as Response);

    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("No projects found")).toBeInTheDocument();
    });
  });
});
