export default function ReviewsCard({ item }) {

  function printRating(vote) {
    const stars = []
    const empty = []

    for (let i = 0; i < vote; i++) {
      stars.push(<i key={`filled-${i}`} className="bi bi-star-fill"></i>)
    }
    for (let i = vote; i < 5; i++) {
      empty.push(<i key={`empty-${i}`} className="bi bi-star"></i>)
    }

    return (
      <>
        {stars}
        {empty}
      </>
    )
  }

  return (
    <div className="col">

      <div className="card text-center h-100" >
        <div className="card-header">
          {printRating(item.vote)}
        </div>

        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.text}</p>
        </div>
        <div className="card-footer text-body-secondary">
          {item.author}
        </div>
      </div>
    </div>
  )
}