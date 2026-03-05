# Terraform scaffold

This folder contains Azure-targeted Terraform scaffolding only.

Current scope:

- reusable module: `modules/resource-group`
- reusable module: `modules/container-app-environment`
- reusable module: `modules/container-app`
- environment entries: `environments/dev` and `environments/prod`
- provider bootstrap: `providers.tf`

Environment status:

- `dev`: active baseline with cost-optimized settings
- `prod`: placeholder scaffold (empty files), to be implemented later

Container baseline:

- Azure Container Apps managed environment
- one Container App for API and one for WEB per environment
- Linux container images via `api_image` and `web_image` variables

Validation flow (before plan/apply):

```bash
terraform -chdir=infra/terraform/environments/dev init -backend=false
terraform -chdir=infra/terraform/environments/dev validate
```

Out of scope for this scaffold:

- remote state backend configuration
- `terraform apply` in CI/CD
- deployment automation and secrets wiring
