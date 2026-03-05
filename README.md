# TDash Monorepo

Production-ready scaffold for a card game results tracker.

## Stack

- Frontend: React + TypeScript SPA (`apps/web`)
- Backend: .NET 8 ASP.NET Core (`src/backend`) with DDD layers:
	- `TDash.Domain`
	- `TDash.Application`
	- `TDash.Infrastructure`
	- `TDash.Api`
- Infrastructure as Code: Terraform for Azure (`infra/terraform`)

## Repository layout

```text
.
├─ apps/
│  └─ web/
├─ src/
│  └─ backend/
│     ├─ src/
│     │  ├─ TDash.Domain/
│     │  ├─ TDash.Application/
│     │  ├─ TDash.Infrastructure/
│     │  └─ TDash.Api/
│     └─ tests/
│        └─ TDash.Api.Tests/
├─ infra/
│  └─ terraform/
│     ├─ modules/resource-group/
│     └─ environments/{dev,prod}/
└─ .github/workflows/ci.yml
```

## Prerequisites

- .NET SDK matching `global.json` (projects target `net8.0`)
- Node.js 22+
- npm 10+
- Terraform 1.7+

## Local development

Install dependencies:

```bash
npm ci
dotnet restore src/backend/TDash.slnx
```

Run frontend:

```bash
npm --workspace apps/web run dev
```

Run backend:

```bash
dotnet run --project src/backend/src/TDash.Api
```

Health check:

```text
GET /health
```

## Quality commands

```bash
npm run lint
npm run test
npm run build
npm run format:check
```

## Agentic development pack

Ready-to-use multi-agent governance pack (scopes, permissions, prompts, handoff templates):

- `docs/agent-pack/README.md`
- `docs/agent-pack/OPERATING_MODEL.md`
- `docs/agent-pack/agent-scope.policy.json`

## Conventional commits

Commit messages are validated with Commitlint using the Conventional Commits spec.

Examples:

- `feat(api): add tournament aggregate root`
- `fix(web): handle empty leaderboard state`
- `chore(ci): cache npm dependencies`

If hooks are not installed yet:

```bash
npm run prepare
```

## Terraform scope

Terraform files are scaffolding only in this stage:

- provider and module structure are present
- dev/prod environment entry points exist
- no remote state backend and no automatic apply in CI

Copy an environment example before planning:

```bash
cp infra/terraform/environments/dev/terraform.tfvars.example infra/terraform/environments/dev/terraform.tfvars
```

## Security

- Never commit secrets
- Use `.env.example` as template only
- Terraform state files are ignored by `.gitignore`
