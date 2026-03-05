output "id" {
  description = "Container Apps environment resource ID."
  value       = azurerm_container_app_environment.this.id
}

output "name" {
  description = "Container Apps environment name."
  value       = azurerm_container_app_environment.this.name
}

output "default_domain" {
  description = "Default DNS domain for apps in the environment."
  value       = azurerm_container_app_environment.this.default_domain
}
