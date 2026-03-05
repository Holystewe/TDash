output "name" {
  value       = azurerm_resource_group.this.name
  description = "Resource group name."
}

output "id" {
  value       = azurerm_resource_group.this.id
  description = "Resource group resource ID."
}
