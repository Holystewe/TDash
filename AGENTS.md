# AGENTS

## Riferimenti obbligatori
- Source of truth: `docs/agent-pack/GLOBAL_MISSION.md`
- Backlog: `docs/agent-pack/BACKLOG_PRIORITIZED.md`
- Operating model: `docs/agent-pack/OPERATING_MODEL.md`

## Regole rapide
- Usa `CONTEXT_CAPSULE_V1` quando devi comprimere contesto.
- Nei prompt cita solo ID requisito (`REQ-xx`) e backlog (`BL-xxx`).
- Non duplicare i contenuti di questi file: referenziali.
- Se cambia la visione, aggiorna `docs/agent-pack/GLOBAL_MISSION.md`.
- Regola globale: quando cambiano visione/priorità/scope, aggiorna **nella stessa run** `GLOBAL_MISSION.md` + `BACKLOG_PRIORITIZED.md` + info agent impattate (`OPERATING_MODEL.md`, prompt in `docs/agent-pack/prompts/**`, questo file se necessario).
- Regola tecnica imperativa: progettare sempre con microresponsabilità (SRP), evitare classi/moduli monolitici, introdurre interfacce quando utili a contratti/astrazioni e usare dependency injection nel backend per ogni servizio/repository/client.
