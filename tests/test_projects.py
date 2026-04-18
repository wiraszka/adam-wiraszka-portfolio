from fastapi.testclient import TestClient

from api.index import app

client = TestClient(app)


def test_get_projects_returns_200():
    response = client.get("/api/projects")

    assert response.status_code == 200


def test_get_projects_returns_list():
    response = client.get("/api/projects")

    assert isinstance(response.json(), list)


def test_get_projects_returns_at_least_one():
    response = client.get("/api/projects")

    assert len(response.json()) >= 1


def test_get_projects_item_shape():
    response = client.get("/api/projects")

    project = response.json()[0]
    assert "id" in project
    assert "name" in project
    assert "description" in project
    assert "url" in project
    assert "tags" in project


def test_get_projects_tags_are_lists():
    response = client.get("/api/projects")

    for project in response.json():
        assert isinstance(project["tags"], list)
