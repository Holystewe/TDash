resource_group_name = "rg-tdash-dev"
location            = ""
preferred_location  = "italynorth"
fallback_location   = "westeurope"
use_fallback_location = false

tags = {
  environment = "dev"
  project     = "tdash"
}

app_service_plan_name     = "asp-tdash-dev"
app_service_plan_sku_name = "B1"
api_app_service_name      = "app-tdash-api-dev"
web_app_service_name      = "app-tdash-web-dev"

api_dotnet_version = "8.0"
web_node_version   = "20-lts"

api_always_on = false
web_always_on = false