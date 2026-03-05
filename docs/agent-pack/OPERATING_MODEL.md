# Operating Model — Agent Team TDash

## 1) Confini a livello progetto (DDD)

| Agent | `.csproj` / Area primaria | Write | Read | Non può scrivere |
|---|---|---|---|---|
| Planning Agent | n/a (orchestrazione) | `docs/**`, `*.md` | repo completo | codice BE/FE/infra |
| Backend Business Agent | `TDash.Domain`, `TDash.Application`, `TDash.Api` | `src/backend/src/TDash.Domain/**`, `src/backend/src/TDash.Application/**`, `src/backend/src/TDash.Api/**` | backend + test | `TDash.Infrastructure`, `infra`, `apps/web` |
| **DB Agent** | **`TDash.Infrastructure.csproj`** | **`src/backend/src/TDash.Infrastructure/**`** | infrastructure + contratti Domain/Application/Api + `infra/terraform` (RO) | tutto il resto |
| Unit Test Agent | `TDash.Api.Tests.csproj` + FE tests | `src/backend/tests/**`, test FE | backend + FE source | `src/backend/src/**`, `infra/**` |
| Frontend UI Agent | `apps/web` | `apps/web/src/**`, `apps/web/public/**` | FE + contratti API | `src/backend/**`, `infra/**` |
| Frontend Data Agent | `apps/web` | `apps/web/src/**` | FE + Api/Application | `src/backend/**`, `infra/**` |
| Frontend Test Agent | `apps/web` tests | test FE only | FE source | backend + infra |
| AppService Deploy Agent | App Service Linux + IaC | `infra/terraform/**`, pipeline docs | repo completo | codice business FE/BE |

## 2) Permessi esecuzione

- Consentito: comandi `build/test/lint` relativi allo scope dell'agent.
- Vietato senza approvazione: `terraform apply`, deploy, update DB reale.
- Escalation obbligatoria: breaking changes schema DB, contratti API pubblici, refactor cross-layer multi-progetto.

## 2.1) Sorgente contesto globale

- Missione condivisa e contesto funzionale del progetto: `GLOBAL_MISSION.md`
- Per prompt brevi usare la `CONTEXT_CAPSULE_V1` definita in quel file

## 2.2) Regola di sincronizzazione globale (obbligatoria)

- Se cambiano visione/priorità/scope/requisiti, aggiornare nella stessa run:
	- `docs/agent-pack/GLOBAL_MISSION.md`
	- `docs/agent-pack/BACKLOG_PRIORITIZED.md`
- Se la modifica impatta agent ownership, confini o workflow, aggiornare contestualmente:
	- `docs/agent-pack/OPERATING_MODEL.md`
	- `docs/agent-pack/prompts/*.md`
	- `AGENTS.md` (se necessario)
- Planning e handoff devono citare solo ID (`REQ-xx`, `BL-xxx`) e riportare solo i delta.

## 2.3) Principi ingegneristici imperativi (non negoziabili)

- Microresponsabilità obbligatoria: classi/moduli/componenti con una responsabilità chiara (SRP).
- Vietato introdurre classi o moduli monolitici che concentrano troppe responsabilità.
- Introdurre interfacce quando servono contratti espliciti, sostituibilità o isolamento delle dipendenze.
- Backend: dependency injection obbligatoria per servizi, repository, client esterni e adapter infrastrutturali.
- Vietato hardcodare dipendenze infrastrutturali nel dominio/application layer.
- Nei handoff includere verifica esplicita di conformità a questi principi.

## 3) Workflow standard

1. Planning Agent produce `Task Card` e `handoff.json`.
2. Agent owner implementa nel proprio scope.
3. Unit Test/Frontend Test Agent aggiunge verifiche.
4. Reviewer umano valida quality gates e merge.
5. Deploy Agent interviene solo su richiesta esplicita per pipeline/deployment App Service.

## 4) Contratto di handoff minimo

Ogni handoff deve contenere:
- scope (`allowedPaths`, `allowedProjects`, `outOfScope`)
- deliverable + Definition of Done
- comandi di verifica (`build/test/lint`)
- rischi/escalation

Usa il template: `templates/handoff.json`.

## 5) Regola anti-conflitto

- Un file in ownership di un solo agent per run.
- Se il task tocca più ownership, split in più handoff sequenziali.
- Evitare task cross-layer nello stesso run.
