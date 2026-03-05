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

variable "container_app_environment_name" {
  description = "Container Apps managed environment name for dev."
  type        = string
}

variable "api_container_app_name" {
  description = "Container App name for backend API (dev)."
  type        = string
}

variable "web_container_app_name" {
  description = "Container App name for frontend WEB (dev)."
  type        = string
}

variable "api_image" {
  description = "Docker image for backend API."
  type        = string
}

variable "web_image" {
  description = "Docker image for frontend WEB."
  type        = string
}
