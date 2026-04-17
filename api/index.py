from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Adam Wiraszka Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


class Project(BaseModel):
    id: int
    name: str
    description: str
    url: str
    tags: list[str]


# Update these with your real projects
PROJECTS: list[Project] = [
    Project(
        id=1,
        name="Project One",
        description="A brief description of what this project does and why it is interesting.",
        url="https://example.com",
        tags=["Python", "FastAPI"],
    ),
    Project(
        id=2,
        name="Project Two",
        description="Another project with a compelling description of its purpose.",
        url="https://example.com",
        tags=["React", "TypeScript"],
    ),
    Project(
        id=3,
        name="Project Three",
        description="A third project showcasing a different area of work.",
        url="https://example.com",
        tags=["Next.js", "Tailwind"],
    ),
]


@app.get("/api/projects")
def get_projects() -> list[Project]:
    return PROJECTS
