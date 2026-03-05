# TDash — Backlog Prioritizzato (MVP-first)

## Criteri di priorità
- **P0**: blocca l'MVP o abilita più feature downstream
- **P1**: valore alto post-MVP, non blocca go-live iniziale
- **P2**: evolutivi/ottimizzazioni

## Sequenza macro consigliata
1. Fondazioni piattaforma (infra, auth, data model)
2. Esperienza utente pubblica core (mappa + tornei)
3. Backoffice store/organizzatori + preregistrazione
4. Dashboard avanzate, profili, notifiche

## Regola globale di manutenzione (obbligatoria)
1. Quando cambia visione/scope/requisiti in `docs/agent-pack/GLOBAL_MISSION.md`, questo backlog va aggiornato nella stessa run.
2. Ogni cambio di priorità, ownership, dipendenze o DoD (`BL-xxx`) richiede verifica di allineamento con `REQ-xx`.
3. Se cambia ownership o confini operativi degli agent, aggiornare contestualmente `docs/agent-pack/OPERATING_MODEL.md`, `docs/agent-pack/prompts/*.md` e `AGENTS.md`.
4. Nessun handoff/planning è completo se non è verificata la coerenza `GLOBAL_MISSION` ↔ `BACKLOG` ↔ info agent.

## P0 — MVP Core

| ID | Tema | Req | Owner agent | Supporto | Dipendenze | DoD sintetica |
|---|---|---|---|---|---|---|
| BL-001 | Baseline deploy su Azure Container Apps (Linux/Docker) con env dev/prod | REQ-02 | containerapp-deploy-agent | planning-agent | nessuna | IaC valida, immagini Docker versionate, deploy dev riuscito |
| BL-002 | OIDC Azure (Entra ID) + ruoli base (`player`, `store`, `admin`) | REQ-06, REQ-02 | backend-business-agent | containerapp-deploy-agent, frontend-data-agent | BL-001 | Login funzionante, claim role propagati BE/FE |
| BL-003 | Schema SQL iniziale (store, torneo, player, partecipazione, deck, preregistrazione) | REQ-04, REQ-09, REQ-10, REQ-11 | db-agent | backend-business-agent | BL-001 | Modello persistente minimo pronto per use case MVP |
| BL-004 | Shell FE con Tailwind + routing 3 aree (pubblico/backoffice store/backoffice admin) | REQ-02, REQ-03, REQ-13 | frontend-ui-agent | frontend-data-agent | BL-002 | Navigazione a sezioni con menu hamburger e layout coerenti Tailwind |
| BL-005 | Mappa tornei globale con pin store (Leaflet + OpenStreetMap) | REQ-01, REQ-03 | frontend-ui-agent | backend-business-agent, frontend-data-agent | BL-003, BL-004 | Mappa pubblica con pin e popup info torneo/store |
| BL-006 | API + vista pubblica tornei (lista/dettaglio: risultati, partecipanti, mazzi) | REQ-09 | backend-business-agent | db-agent, frontend-data-agent, frontend-ui-agent | BL-003, BL-004 | Endpoint stabili + pagina dettaglio completa |
| BL-007 | Backoffice store: creazione eventi torneo | REQ-11 | backend-business-agent | db-agent, frontend-ui-agent, frontend-data-agent | BL-002, BL-003, BL-004 | Store autenticato crea/modifica evento base |
| BL-008 | Pre-registrazione tornei lato giocatore | REQ-10 | backend-business-agent | frontend-data-agent, frontend-ui-agent, db-agent | BL-002, BL-006 | Utente autenticato si preregistra, stato persistito |
| BL-009 | Cache breve TTL su endpoint read-heavy (tornei/mappa) | REQ-05 | backend-business-agent | db-agent | BL-006 | Riduzione latenza con TTL breve e invalidazione minima |
| BL-010 | Test minimi E2E funzionali MVP (auth, mappa, tornei, preregistrazione, store event) | REQ-01..REQ-11 | unit-test-agent | tutti | BL-002..BL-009 | Suite smoke/regressione MVP verde |
| BL-019 | Dashboard decks dedicata (metriche + house distribution) | REQ-14, REQ-03 | frontend-ui-agent | backend-business-agent, frontend-data-agent | BL-004, BL-006 | Sezione deck dashboard separata e navigabile |
| BL-020 | Super backoffice manutentore: gestione negozi | REQ-15, REQ-02 | backend-business-agent | frontend-ui-agent, frontend-data-agent, db-agent | BL-004, BL-003 | CRUD base negozi con vista gestione dedicata |
| BL-021 | Guardrail architetturali imperativi (SRP, anti-monoliti, interfacce, DI backend) | REQ-16 | planning-agent | backend-business-agent, db-agent, frontend-ui-agent, frontend-data-agent | nessuna | Checklist quality gate integrata nei prompt/handoff con enforcement esplicito |

## P1 — Value Expansion

| ID | Tema | Req | Owner agent | Supporto | Dipendenze | DoD sintetica |
|---|---|---|---|---|---|---|
| BL-011 | Dashboard giocatori globale/regione/nazione con filtri | REQ-07 | frontend-ui-agent | backend-business-agent, frontend-data-agent | P0 completo | Dashboard con filtri geografici e KPI base |
| BL-012 | Profilo giocatore (v1) | REQ-08 | backend-business-agent | frontend-ui-agent, db-agent | BL-011 | Profilo pubblico con metriche principali |
| BL-013 | Backoffice organizzatore tornei avanzato (gestione risultati/deck) | REQ-02, REQ-09 | backend-business-agent | frontend-ui-agent, db-agent | BL-007 | Flusso completo post-evento |
| BL-014 | Notifiche email geolocalizzate tornei in zona | REQ-12 | backend-business-agent | containerapp-deploy-agent, db-agent | BL-006, BL-008 | Invio notifiche opt-in con template base |
| BL-015 | Osservabilità e hardening sicurezza ACA (diagnostics, policy baseline) | REQ-02 | containerapp-deploy-agent | planning-agent | BL-001 | Logging/metriche attive e check sicurezza base |

## P2 — Optimization & Scale

| ID | Tema | Req | Owner agent | Supporto | Dipendenze | DoD sintetica |
|---|---|---|---|---|---|---|
| BL-016 | Ottimizzazioni performance query/dashboard | REQ-07, REQ-09 | db-agent | backend-business-agent | BL-011 | Miglioramento tempi p95 definito |
| BL-017 | Feature avanzate profilo (storico, ranking, confronto) | REQ-08 | backend-business-agent | frontend-ui-agent | BL-012 | Esperienza profilo avanzata |
| BL-018 | Pipeline deploy progressivo (canary/blue-green revisioni ACA) | REQ-02 | containerapp-deploy-agent | planning-agent | BL-015 | Rollout sicuro con rollback rapido |

## Ready Queue consigliata (prossimi 5 task)
1. **BL-001** Baseline ACA Linux/Docker dev/prod
2. **BL-002** OIDC + ruoli base
3. **BL-003** Schema SQL iniziale
4. **BL-004** Shell FE Tailwind + routing 3 aree
5. **BL-019** Dashboard decks dedicata + nav sezioni

## Definition of Ready (DoR)
- Req ID referenziati
- Scope path/progetto definito nel `handoff.json`
- Dipendenze dichiarate
- DoD misurabile

## Definition of Done (DoD)
- Build/lint/test verdi nello scope
- Nessuna modifica fuori confini agent
- Handoff compilato con delta e rischi residui
- Documentazione minima aggiornata se cambia comportamento
- Conformità esplicita ai principi `REQ-16` (SRP, no monoliti, interfacce dove necessarie, DI backend)

## Nota operativa
Usare questo backlog con `GLOBAL_MISSION.md` e citare solo `BL-xxx` + `REQ-xx` nei prompt per contenere token mantenendo contesto massimo.
