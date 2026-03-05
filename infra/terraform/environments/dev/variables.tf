variable "subscription_id" {
  description = "Azure subscription ID used by provider."
  type        = string
}

variable "tenant_id" {
  description = "Azure tenant ID used by provider."
  type        = string
}

variable "resource_group_name" {
  description = "Resource group name for the dev environment."
  type        = string
}

variable "location" {
  description = "Explicit Azure region override for the dev environment. Leave empty to use preferred/fallback logic."
  type        = string
  default     = ""
}

variable "preferred_location" {
  description = "Preferred Azure region for dev environment deployments."
  type        = string
  default     = "italynorth"
}

variable "fallback_location" {
  description = "Fallback Azure region when preferred location is not available for deployment."
  type        = string
  default     = "westeurope"
}

variable "use_fallback_location" {
  description = "Set to true to force deployment on fallback location."
  type        = bool
  default     = false
}

variable "tags" {
  description = "Common tags for dev resources."
  type        = map(string)
  default     = {}
}

variable "app_service_plan_name" {
  description = "App Service Plan name for dev."
  type        = string
}

variable "app_service_plan_sku_name" {
  description = "App Service Plan SKU for dev (e.g. B1, P1v3)."
  type        = string
  default     = "B1"
}

variable "api_app_service_name" {
  description = "App Service name for backend API (dev)."
  type        = string
}

variable "web_app_service_name" {
  description = "App Service name for frontend WEB (dev)."
  type        = string
}

variable "api_dotnet_version" {
  description = "Dotnet runtime version for API (e.g. 8.0)."
  type        = string
  default     = "8.0"
}

variable "web_node_version" {
  description = "Node runtime version for WEB (e.g. 20-lts)."
  type        = string
  default     = "20-lts"
}

variable "api_always_on" {
  description = "Keep API app always on."
  type        = bool
  default     = false
}

variable "web_always_on" {
  description = "Keep WEB app always on."
  type        = bool
  default     = false
}