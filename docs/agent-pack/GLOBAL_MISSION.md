# TDash — Global Mission Context (Single Source of Truth)

## Visione del progetto
Costruire una piattaforma globale per l'ecosistema competitivo di **Keyforge**, con dashboard pubbliche e ambienti di backoffice dedicati, capace di aggregare tornei, store, giocatori e risultati in modo affidabile, scalabile e semplice da usare.

## Obiettivo architetturale corrente
- Deploy su **Azure App Service**
- Workload su **App Service Linux** (no container)
- Frontend e backend separati, orchestrati via IaC
- Governance multi-agent con confini chiari

## Scope funzionale (macro)
1. Mappa globale tornei Keyforge con pin store (package mappa gratuito)
2. Tre ambienti funzionali distinti:
   - Backoffice organizzatore tornei
   - Backoffice gestore sito
   - Sito pubblico per utenti
3. UI con Tailwind
4. Persistenza dati su SQL
5. Cache leggera a breve durata per chiamate frequenti
6. Autenticazione OIDC con Azure (Microsoft Entra ID)
7. Dashboard player-centric (mondo, regioni, nazioni, filtri)
8. Profilo giocatore (dettagli da raffinire)
9. Vista tornei per giocatori (risultati, mazzi, partecipanti, altro)
10. Pre-registrazione tornei
11. Sezione store per creazione eventi
12. Notifiche email per tornei in zona
13. Navigazione FE a sezioni con menu hamburger (dashboard players/decks, tornei+mappa, profili)
14. Dashboard deck-centric dedicata (metriche meta, distribuzione case)
15. Super backoffice manutentore con gestione negozi
16. Adozione imperativa principi architetturali: SRP, anti-monoliti, interfacce dove necessarie, DI backend

## Linee guida FE (mission)
- Progettare UX chiara per pubblico e backoffice distinti
- Usare componenti riusabili e design coerente Tailwind
- Gestire stati loading/error/empty per tutte le viste principali
- Integrare mappa con provider gratuito (es. Leaflet + OpenStreetMap)

## Linee guida BE (mission)
- Mantenere separazione DDD per Domain/Application/Infrastructure/Api
- Esporre API stabili e versionabili per dashboard, tornei, registrazioni
- Introdurre cache breve TTL per endpoint ad alta lettura
- Preparare integrazione OIDC e autorizzazioni per ruoli (player/store/admin)

## Principi ingegneristici imperativi (mission)
- Microresponsabilità (SRP) obbligatoria per classi/moduli/componenti.
- Vietato introdurre classi/moduli monolitici che accentrano responsabilità.
- Interfacce obbligatorie quando servono contratti/astrazioni, testabilità o sostituibilità.
- Backend: dependency injection obbligatoria per servizi, repository, client esterni e adapter.
- Evitare accoppiamenti forti e dipendenze infrastrutturali hardcoded nel dominio/application.

## Linee guida Infra (mission)
- Provisioning in Terraform in `infra/terraform`
- Target compute principale: Azure App Service (Linux)
- Secret management e identity-first (managed identity dove possibile)
- Ambiente pronto per due stage almeno: dev e prod

## Decisioni tecnologiche iniziali consigliate
- FE map: Leaflet + OpenStreetMap (free)
- Cache: in-memory distribuita leggera (iniziale) con TTL breve, evolvibile
- SQL: Azure SQL Database
- Email: servizio gestito Azure per invio notifiche
- Auth: OIDC con Entra ID

## Context capsule (per risparmio token nei prompt agent)
Usare questo blocco nei prompt, senza ripetere tutto il documento:

```text
CONTEXT_CAPSULE_V1:
- Goal: Global Keyforge tournaments platform
- Compute: Azure App Service, Linux
- FE: Tailwind, public+2 backoffices, world map with free provider
- BE: DDD + stable APIs + short TTL cache + OIDC roles
- Data: SQL persistence
- Features: tournaments, players, decks, preregistration, store events, super-backoffice stores, geo email notifications, hamburger sections navigation
- SourceOfTruth: docs/agent-pack/GLOBAL_MISSION.md
```

## Regole per ridurre token mantenendo massimo contesto
1. Gli agent citano **solo ID requisito** e non riscrivono il requisito completo.
2. Questo file è la fonte primaria; nelle chat si usa la `CONTEXT_CAPSULE_V1`.
3. Ogni handoff include solo delta: cosa cambia rispetto a prima.
4. Evitare duplicazioni: linkare file e sezioni invece di incollare contenuti lunghi.
5. Aggiornare questo file quando cambia la visione, non ogni prompt agente.

## Policy di sincronizzazione globale (obbligatoria)
1. Ogni variazione di visione, scope, architettura o requisiti (`REQ-xx`) richiede aggiornamento di questo file.
2. Nella stessa run va aggiornato anche `docs/agent-pack/BACKLOG_PRIORITIZED.md` per mantenere coerenza `REQ-xx` ↔ `BL-xxx`.
3. Se la modifica impatta ruoli/confini/workflow agent, aggiornare contestualmente `docs/agent-pack/OPERATING_MODEL.md`, `AGENTS.md` e i prompt in `docs/agent-pack/prompts/*.md`.
4. Prompt e handoff devono continuare a citare solo ID (`REQ-xx`, `BL-xxx`) senza duplicare contenuti lunghi.

## Requirement IDs (per handoff brevi)
- `REQ-01` Mappa tornei globale
- `REQ-02` 2 backoffice + sito pubblico
- `REQ-03` UI Tailwind
- `REQ-04` Persistenza SQL
- `REQ-05` Cache breve TTL
- `REQ-06` OIDC Azure
- `REQ-07` Dashboard giocatori globale/regionale
- `REQ-08` Profilo giocatore
- `REQ-09` Vista tornei con risultati/mazzi/partecipanti
- `REQ-10` Pre-registrazione tornei
- `REQ-11` Sezione store per eventi
- `REQ-12` Notifiche email geolocalizzate
- `REQ-13` Navigazione FE a sezioni con menu hamburger
- `REQ-14` Dashboard decks dedicata
- `REQ-15` Super backoffice manutentore: gestione negozi
- `REQ-16` Principi architetturali imperativi: SRP, anti-monoliti, interfacce, DI backend

## Stato
Documento iniziale macro + backlog prioritizzato in `BACKLOG_PRIORITIZED.md`: da raffinire progressivamente con KPI e milestone. Policy di sincronizzazione globale attiva.
