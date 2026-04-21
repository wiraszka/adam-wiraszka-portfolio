import { render, screen, waitFor } from "@testing-library/react";
import CertificatesGrid from "@/components/CertificatesGrid";

const mockCertificates = [
  {
    id: 1,
    name: "Google Data Analytics",
    issuer: "Google",
    date: "2024",
    url: "https://example.com/verify/1",
    image: "",
  },
  {
    id: 2,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://example.com/verify/2",
    image: "",
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

describe("CertificatesGrid", () => {
  it("shows skeleton loaders while fetching", () => {
    fetchMock.mockReturnValue(new Promise<Response>(() => {}));

    render(<CertificatesGrid />);

    expect(document.querySelectorAll(".animate-pulse")).toHaveLength(3);
  });

  it("renders certificate cards after a successful fetch", async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => mockCertificates,
    } as Response);

    render(<CertificatesGrid />);

    await waitFor(() => {
      expect(screen.getByText("Google Data Analytics")).toBeInTheDocument();
      expect(screen.getByText("AWS Cloud Practitioner")).toBeInTheDocument();
    });
  });

  it("shows no certificates message when fetch returns an empty array", async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => [] } as Response);

    render(<CertificatesGrid />);

    await waitFor(() => {
      expect(screen.getByText("No certificates found")).toBeInTheDocument();
    });
  });

  it("shows no certificates message when fetch fails", async () => {
    fetchMock.mockRejectedValue(new Error("Network error"));

    render(<CertificatesGrid />);

    await waitFor(() => {
      expect(screen.getByText("No certificates found")).toBeInTheDocument();
    });
  });

  it("shows no certificates message when response is not ok", async () => {
    fetchMock.mockResolvedValue({ ok: false } as Response);

    render(<CertificatesGrid />);

    await waitFor(() => {
      expect(screen.getByText("No certificates found")).toBeInTheDocument();
    });
  });
});
