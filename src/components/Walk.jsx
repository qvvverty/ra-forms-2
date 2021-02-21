export default function Walk({ date, distance, removeWalk}) {
  const onClickRemove = () => {
    removeWalk(date);
  };

  return (
    <div className="walk">
      <div>
        {date}
      </div>
      <div>
        {distance}
      </div>
      <div>
        <span onClick={onClickRemove} className="walk-delete">✗</span>
      </div>
    </div>
  )
}
