terraform {
  backend "gcs" {
    # this bucket is in steffi-dev project
    bucket = "nusutto-tfstate"
  }
}

module "cloudrun" {
  source     = "../../modules/cloudrun"
  project_id = var.project_id
  region     = var.region
}
