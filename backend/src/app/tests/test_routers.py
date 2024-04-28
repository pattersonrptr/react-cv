from fastapi.testclient import TestClient

from src.app.main import app

client = TestClient(app)


def test_get_all_curriculums():
    response = client.get("/curriculum/")
    assert response.status_code == 200
    assert response.json() == {"msg": ""}