from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Adam Wiraszka Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://adamwiraszka.com"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


class Project(BaseModel):
    id: int
    name: str
    description: str
    url: str
    tags: list[str]


PROJECTS: list[Project] = [
    Project(
        id=1,
        name="Invest Hub",
        description="Personal investment research platform integrating live market data, SEC filings, and LLM-driven analysis into a structured MongoDB pipeline.",
        url="https://github.com/wiraszka/invest-hub",
        tags=["Next.js", "FastAPI", "MongoDB", "Python"],
    ),
    Project(
        id=2,
        name="AW Piano Studio",
        description="Professional business website featuring instructor profiles, downloadable resources, and an integrated contact form with Google Maps.",
        url="https://awpianostudio.com",
        tags=["Next.js", "Vercel"],
    ),
    Project(
        id=3,
        name="Portfolio Site",
        description="This portfolio website — built with Next.js and a FastAPI backend, deployed on Vercel with a custom domain.",
        url="https://adamwiraszka.com",
        tags=["Next.js", "FastAPI", "Tailwind CSS", "Vercel"],
    ),
    Project(
        id=4,
        name="Placeholder Project",
        description="A brief description of what this project does and why it is interesting.",
        url="https://example.com",
        tags=["Python", "FastAPI"],
    ),
    Project(
        id=5,
        name="Placeholder Project",
        description="A brief description of what this project does and why it is interesting.",
        url="https://example.com",
        tags=["React", "TypeScript"],
    ),
    Project(
        id=6,
        name="Placeholder Project",
        description="A brief description of what this project does and why it is interesting.",
        url="https://example.com",
        tags=["Next.js", "Tailwind CSS"],
    ),
]


class Certificate(BaseModel):
    id: int
    name: str
    issuer: str
    date: str
    url: str


CERTIFICATES: list[Certificate] = [
    Certificate(
        id=1,
        name="Placeholder Certificate",
        issuer="Issuer Name",
        date="2024",
        url="https://example.com/verify",
    ),
    Certificate(
        id=2,
        name="Placeholder Certificate",
        issuer="Issuer Name",
        date="2024",
        url="https://example.com/verify",
    ),
    Certificate(
        id=3,
        name="Placeholder Certificate",
        issuer="Issuer Name",
        date="2023",
        url="https://example.com/verify",
    ),
]


@app.get("/api/projects")
def get_projects() -> list[Project]:
    return PROJECTS


@app.get("/api/certificates")
def get_certificates() -> list[Certificate]:
    return CERTIFICATES
