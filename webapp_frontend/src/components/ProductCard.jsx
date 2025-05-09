export default function ProductCard({ item, imageUrl }) {
  return (
    <div key={item.id} className="col">

      <div className="card h-100">
        <div className="card-header bg-white ">
          <img src={`${imageUrl}/${item.cover_image}`} alt="" className='card-img-top' />
        </div>
        <div className="card-body">
          <h4>{item.name}</h4>
          <p>
            {item.description}
          </p>
          <p className='text-end fs-4'><strong>{item.price}</strong></p>
        </div>
      </div>
    </div>
  )
}