output "id" {
  description = "Container App resource ID."
  value       = azurerm_container_app.this.id
}

output "name" {
  description = "Container App name."
  value       = azurerm_container_app.this.name
}

output "latest_revision_fqdn" {
  description = "FQDN of the latest revision."
  value       = azurerm_container_app.this.latest_revision_fqdn
}
