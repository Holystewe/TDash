locals {
  selected_location = var.location != "" ? var.location : (var.use_fallback_location ? var.fallback_location : var.preferred_location)
}

module "resource_group" {
  source   = "../../modules/resource-group"
  name     = var.resource_group_name
  location = local.selected_location
  tags     = var.tags
}

module "app_service_plan" {
  source              = "../../modules/app-service-plan"
  name                = var.app_service_plan_name
  location            = local.selected_location
  resource_group_name = module.resource_group.name
  os_type             = "Linux"
  sku_name            = var.app_service_plan_sku_name
  tags                = var.tags
}

module "api_app_service" {
  source              = "../../modules/app-service-webapp"
  name                = var.api_app_service_name
  location            = local.selected_location
  resource_group_name = module.resource_group.name
  service_plan_id     = module.app_service_plan.id
  dotnet_version      = var.api_dotnet_version
  always_on           = var.api_always_on
  tags                = var.tags
}

module "web_app_service" {
  source              = "../../modules/app-service-webapp"
  name                = var.web_app_service_name
  location            = local.selected_location
  resource_group_name = module.resource_group.name
  service_plan_id     = module.app_service_plan.id
  node_version        = var.web_node_version
  always_on           = var.web_always_on
  tags                = var.tags
}

output "api_default_hostname" {
  value       = module.api_app_service.default_hostname
  description = "Default hostname for API App Service."
}

output "web_default_hostname" {
  value       = module.web_app_service.default_hostname
  description = "Default hostname for WEB App Service."
}
