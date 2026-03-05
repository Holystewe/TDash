resource "azurerm_linux_web_app" "this" {
  name                = var.name
  resource_group_name = var.resource_group_name
  location            = var.location
  service_plan_id     = var.service_plan_id
  https_only          = var.https_only
  tags                = var.tags

  site_config {
    always_on        = var.always_on
    health_check_path = var.health_check_path

    application_stack {
      dotnet_version = var.dotnet_version
      node_version   = var.node_version
    }
  }

  app_settings = var.app_settings
}
