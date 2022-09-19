resource "google_cloud_run_service" "ireco" {
  name     = "ireco"
  project  = var.project_id
  location = var.region

  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "100"
        "run.googleapis.com/client-name"   = "terraform"
      }
    }

    spec {
      container_concurrency = 80
      timeout_seconds       = 100

      containers {
        image = "asia-northeast2-docker.pkg.dev/nusutto/cloud-run-source-deploy/ireco"

        ports {
          container_port = 8080
          name           = "http1"
        }

        resources {
          limits = {
            "cpu"    = "1000m"
            "memory" = "512Mi"
          }
          requests = {}
        }
      }
    }
  }
}
