resource "google_cloud_run_service" "ireco" {
  name     = "ireco"
  project  = var.project_id
  location = var.region
}
