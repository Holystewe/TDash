variable "name" {
  description = "Container Apps managed environment name."
  type        = string
}

variable "location" {
  description = "Azure region for the managed environment."
  type        = string
}

variable "resource_group_name" {
  description = "Target resource group name."
  type        = string
}

variable "log_analytics_sku" {
  description = "Log Analytics workspace SKU."
  type        = string
  default     = "PerGB2018"
}

variable "log_retention_days" {
  description = "Log Analytics retention in days."
  type        = number
  default     = 30
}

variable "tags" {
  description = "Common resource tags."
  type        = map(string)
  default     = {}
}
