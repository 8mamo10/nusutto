terraform {
  backend "gcs" {
    # this bucket is in steffi-dev project
    bucket = "nusutto-tfstate"
  }
}
