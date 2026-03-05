variable "name" {
  description = "App Service name."
  type        = string
}

variable "resource_group_name" {
  description = "Resource group where the app is deployed."
  type        = string
}

variable "location" {
  description = "Azure region for the app."
  type        = string
}

variable "service_plan_id" {
  description = "App Service Plan resource ID."
  type        = string
}

variable "https_only" {
  description = "Enforce HTTPS only."
  type        = bool
  default     = true
}

variable "always_on" {
  description = "Keep the app always on."
  type        = bool
  default     = false
}

variable "health_check_path" {
  description = "Health check path for the app."
  type        = string
  default     = null
}

variable "dotnet_version" {
  description = "Dotnet version for the app (e.g. 8.0)."
  type        = string
  default     = null
}

variable "node_version" {
  description = "Node version for the app (e.g. 20-lts)."
  type        = string
  default     = null
}

variable "app_settings" {
  description = "App settings for the app."
  type        = map(string)
  default     = {}
}

variable "tags" {
  description = "Common resource tags."
  type        = map(string)
  default     = {}
}
