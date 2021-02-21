import Walk from "./Walk";

export default function WalksDisplay({ walks, removeWalk }) {
  return (
    <div className="walks-container">
      <div className="walks-header">
        <div>
          Дата, ДД.ММ.ГГ
        </div>
        <div>
          Пройдено, км.
        </div>
        <div>
          Действия
        </div>
      </div>
      {walks.map(walk =>
        <Walk
          date={walk.date.format('DD.MM.YY')}
          distance={walk.distance}
          key={walk.date.format('DD.MM.YY')}
          removeWalk={removeWalk}
        />
      )}
    </div>
  )
}
