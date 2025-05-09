import style from './ProductCard.module.css'

export default function ProductCard({ item, imageUrl }) {
  return (
    <div key={item.id} className="col">

      <div className={`card ${style.card}`}>
        <div className="card-header bg-white ">
          <img src={`${imageUrl}/${item.cover_image}`} alt="" className='card-img-top' />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <h4>{item.name}</h4>
          <p className='mt-4 '>
            {item.description}
          </p>
          <p className='text-end fs-4'><strong>{item.price}</strong></p>
        </div>
      </div>
    </div>
  )
}