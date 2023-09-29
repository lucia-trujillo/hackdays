# Filename: main.tf
# Configure GCP project
provider "google" {
  project = "ingka-native-ikealabs-dev"
}
# Deploy image to Cloud Run
resource "google_cloud_run_service" "my_hangman_app" {
  name     = "my-hangman-app-3"
  location = "europe-west4"

  template {
    spec {
      containers {
        image = "gcr.io/ingka-native-ikealabs-dev/hang-image:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

# Create public access
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}
# Enable public access on Cloud Run service
resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.my_hangman_app.location
  project     = google_cloud_run_service.my_hangman_app.project
  service     = google_cloud_run_service.my_hangman_app.name
  policy_data = data.google_iam_policy.noauth.policy_data
}

# Return service URL
output "url" {
  value = "${google_cloud_run_service.my_hangman_app.status[0].url}"
}