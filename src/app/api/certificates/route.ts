import { NextResponse } from "next/server";

const CERTIFICATES = [
  {
    id: 1,
    name: "Placeholder Certificate",
    issuer: "Issuer Name",
    date: "2024",
    url: "https://example.com/verify",
  },
  {
    id: 2,
    name: "Placeholder Certificate",
    issuer: "Issuer Name",
    date: "2024",
    url: "https://example.com/verify",
  },
  {
    id: 3,
    name: "Placeholder Certificate",
    issuer: "Issuer Name",
    date: "2023",
    url: "https://example.com/verify",
  },
];

export function GET() {
  return NextResponse.json(CERTIFICATES);
}
