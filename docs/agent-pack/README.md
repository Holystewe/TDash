# TDash Agent Pack (Ready-to-Use)

Pack operativo per sviluppo agentico con confini e permessi espliciti, allineato a DDD e monorepo TDash.

## Obiettivo

- separare responsabilità tra agent
- ridurre conflitti di modifica
- garantire qualità tramite handoff e quality gates

## Contenuto del pack

- `agent-scope.policy.json`: policy centralizzata di scope/permessi per ogni agent
- `GLOBAL_MISSION.md`: missione globale FE/BE/Infra + contesto compatto (`CONTEXT_CAPSULE_V1`)
- `BACKLOG_PRIORITIZED.md`: backlog P0/P1/P2 pronto all'uso con owner e dipendenze
- `prompts/`: prompt di sistema pronti all'uso
- `templates/`: template per task card, handoff e check di run

## Regole chiave

1. Ogni agent modifica solo i path consentiti dalla policy.
2. Il **DB Agent** è limitato al solo progetto `TDash.Infrastructure.csproj`.
3. La circoscrizione backend è a livello `.csproj` (Domain, Application, Infrastructure, Api, Tests).
4. Operazioni distruttive o deploy richiedono approvazione umana.
5. Regola globale: se cambia visione/priorità/scope, aggiornare nella stessa run `GLOBAL_MISSION.md` + `BACKLOG_PRIORITIZED.md` + informazioni agent impattate (`OPERATING_MODEL.md`, `prompts/*.md`, `AGENTS.md` se necessario).

## Come usare (flusso consigliato)

1. Planning Agent produce `Task Card` da requirement.
2. Agent specializzato implementa nel proprio scope.
3. Unit Test Agent aggiunge/verifica test.
4. Reviewer umano valida output + gate (`build/test/lint`).

## Mapping DDD attuale

- Domain: `src/backend/src/TDash.Domain/TDash.Domain.csproj`
- Application: `src/backend/src/TDash.Application/TDash.Application.csproj`
- Infrastructure: `src/backend/src/TDash.Infrastructure/TDash.Infrastructure.csproj`
- Api: `src/backend/src/TDash.Api/TDash.Api.csproj`
- Tests: `src/backend/tests/TDash.Api.Tests/TDash.Api.Tests.csproj`

## Nota operativa

Se vuoi irrigidire ulteriormente i permessi, imposta il tuo orchestratore per bloccare a runtime i path non inclusi in `write` e i comandi non inclusi in `allowedCommands`.

## Deploy agent (nuovo)

- Prompt dedicato deploy ACA Linux/Docker: `prompts/containerapp-deploy-agent.system.md`
- Usa questo agent solo per attività di containerizzazione, pipeline e deployment infra.
