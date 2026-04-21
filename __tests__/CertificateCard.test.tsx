import { render, screen } from "@testing-library/react";
import CertificateCard from "@/components/CertificateCard";

const baseProps = {
  name: "Google Data Analytics",
  issuer: "Google",
  date: "2024",
  url: "https://example.com/verify",
};

describe("CertificateCard", () => {
  it("renders the certificate name", () => {
    render(<CertificateCard {...baseProps} />);

    expect(screen.getByText("Google Data Analytics")).toBeInTheDocument();
  });

  it("renders the issuer", () => {
    render(<CertificateCard {...baseProps} />);

    expect(screen.getByText("Google")).toBeInTheDocument();
  });

  it("renders the date", () => {
    render(<CertificateCard {...baseProps} />);

    expect(screen.getByText("2024")).toBeInTheDocument();
  });

  it("links to the verify URL", () => {
    render(<CertificateCard {...baseProps} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com/verify");
  });

  it("opens the link in a new tab", () => {
    render(<CertificateCard {...baseProps} />);

    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
  });

  it("renders the issuer logo area", () => {
    render(<CertificateCard {...baseProps} />);

    expect(screen.getByTestId("certificate-logo")).toBeInTheDocument();
  });
});
