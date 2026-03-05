locals {
  selected_location = var.location != "" ? var.location : (var.use_fallback_location ? var.fallback_location : var.preferred_location)
}

module "resource_group" {
  source   = "../../modules/resource-group"
  name     = var.resource_group_name
  location = local.selected_location
  tags     = var.tags
}

module "container_app_environment" {
  source              = "../../modules/container-app-environment"
  name                = var.container_app_environment_name
  location            = local.selected_location
  resource_group_name = module.resource_group.name
  tags                = var.tags
}

module "api_container_app" {
  source                       = "../../modules/container-app"
  name                         = var.api_container_app_name
  resource_group_name          = module.resource_group.name
  container_app_environment_id = module.container_app_environment.id
  container_name               = "api"
  image                        = var.api_image
  cpu                          = 0.25
  memory                       = "0.5Gi"
  target_port                  = 8080
  external_enabled             = true
  min_replicas                 = 0
  max_replicas                 = 1
  tags                         = var.tags
}

module "web_container_app" {
  source                       = "../../modules/container-app"
  name                         = var.web_container_app_name
  resource_group_name          = module.resource_group.name
  container_app_environment_id = module.container_app_environment.id
  container_name               = "web"
  image                        = var.web_image
  cpu                          = 0.25
  memory                       = "0.5Gi"
  target_port                  = 80
  external_enabled             = true
  min_replicas                 = 0
  max_replicas                 = 1
  tags                         = var.tags
}

output "api_fqdn" {
  value       = module.api_container_app.latest_revision_fqdn
  description = "Public endpoint FQDN for API container app."
}

output "web_fqdn" {
  value       = module.web_container_app.latest_revision_fqdn
  description = "Public endpoint FQDN for WEB container app."
}
