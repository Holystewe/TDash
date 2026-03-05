variable "name" {
  description = "App Service Plan name."
  type        = string
}

variable "resource_group_name" {
  description = "Resource group where the plan is deployed."
  type        = string
}

variable "location" {
  description = "Azure region for the plan."
  type        = string
}

variable "os_type" {
  description = "OS type for the plan (Linux or Windows)."
  type        = string
  default     = "Linux"
}

variable "sku_name" {
  description = "SKU name for the plan (e.g. B1, P1v3)."
  type        = string
  default     = "B1"
}

variable "tags" {
  description = "Common resource tags."
  type        = map(string)
  default     = {}
}
