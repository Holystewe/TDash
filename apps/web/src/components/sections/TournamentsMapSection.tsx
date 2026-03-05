import { CircleMarker, MapContainer, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { SectionTitle } from '../common'
import { tournaments } from '../../data/mockData'
import './sections.css'

export function TournamentsMapSection() {
  return (
    <section className="section-with-bg bg-phoenix">
      <div className="section-content">
      <SectionTitle
        title="Tornei con mappa"
        subtitle="Calendario tornei e mappa eventi attivi con provider gratuito OpenStreetMap."
      />

      <div className="grid gap-4 xl:grid-cols-[340px_1fr]">
        <aside className="rounded-xl border border-kf-untamed/40 bg-kf-night/70 p-4">
          <h3 className="text-lg font-semibold text-kf-untamed">Prossimi tornei</h3>
          <ul className="mt-3 space-y-3">
            {tournaments.map((event) => (
              <li key={event.id} className="rounded-lg border border-white/10 bg-black/15 p-3">
                <p className="font-medium text-kf-gold">{event.name}</p>
                <p className="text-sm text-slate-200">{event.store}</p>
                <p className="text-xs text-slate-300">
                  {event.city} • {event.format} • {event.date} • {event.seats} posti
                </p>
              </li>
            ))}
          </ul>
        </aside>

        <div className="overflow-hidden rounded-xl border border-kf-logos/40">
          <MapContainer center={[43.2, 10.7]} zoom={5} className="h-[420px] w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {tournaments.map((event) => (
              <CircleMarker
                key={event.id}
                center={[event.lat, event.lng]}
                radius={8}
                pathOptions={{ color: '#ffd166', fillColor: '#ff9f1c', fillOpacity: 0.85 }}
              >
                <Popup>
                  <strong>{event.name}</strong>
                  <br />
                  {event.city} - {event.store}
                  <br />
                  {event.format} - {event.date}
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>
      </div>
    </section>
  )
}
