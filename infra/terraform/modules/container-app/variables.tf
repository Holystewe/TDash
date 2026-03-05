variable "name" {
  description = "Container App name."
  type        = string
}

variable "resource_group_name" {
  description = "Resource group where the app is deployed."
  type        = string
}

variable "container_app_environment_id" {
  description = "Container Apps managed environment resource ID."
  type        = string
}

variable "revision_mode" {
  description = "Container app revision mode."
  type        = string
  default     = "Single"
}

variable "container_name" {
  description = "Container name within the app."
  type        = string
}

variable "image" {
  description = "Container image reference."
  type        = string
}

variable "cpu" {
  description = "CPU cores requested by the container."
  type        = number
  default     = 0.5
}

variable "memory" {
  description = "Memory requested by the container."
  type        = string
  default     = "1Gi"
}

variable "target_port" {
  description = "Ingress target port."
  type        = number
}

variable "external_enabled" {
  description = "Whether ingress is exposed publicly."
  type        = bool
  default     = true
}

variable "min_replicas" {
  description = "Minimum replica count."
  type        = number
  default     = 0
}

variable "max_replicas" {
  description = "Maximum replica count."
  type        = number
  default     = 2
}

variable "tags" {
  description = "Common resource tags."
  type        = map(string)
  default     = {}
}
