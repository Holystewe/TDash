# Terraform scaffold

This folder contains Azure-targeted Terraform scaffolding only.

Current scope:

- reusable module: `modules/resource-group`
- reusable module: `modules/app-service-plan`
- reusable module: `modules/app-service-webapp`
- environment entries: `environments/dev` and `environments/prod`
- provider bootstrap: `providers.tf`

Environment status:

- `dev`: active baseline with cost-optimized settings
- `prod`: placeholder scaffold (empty files), to be implemented later

App Service baseline:

- App Service Plan (Linux)
- one App Service for API and one for WEB per environment
- runtime stacks configured via `api_dotnet_version` and `web_node_version`

Validation flow (before plan/apply):

```bash
terraform -chdir=infra/terraform/environments/dev init -backend=false
terraform -chdir=infra/terraform/environments/dev validate
```

Out of scope for this scaffold:

- remote state backend configuration
- `terraform apply` in CI/CD
- deployment automation and secrets wiring
