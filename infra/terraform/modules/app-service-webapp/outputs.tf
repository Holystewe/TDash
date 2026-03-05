output "id" {
  description = "App Service resource ID."
  value       = azurerm_linux_web_app.this.id
}

output "name" {
  description = "App Service name."
  value       = azurerm_linux_web_app.this.name
}

output "default_hostname" {
  description = "Default hostname for the app."
  value       = azurerm_linux_web_app.this.default_hostname
}
