import style from './ProductCard.module.css'

export default function ProductCard({ item, imageUrl }) {
  return (
    <div key={item.id} className="col">

      <div className={`card ${style.card}`}>

        {
          item?.discount_percentage != 0 ? (

            <>
              <div className="card-header bg-white  text-end">
                <div className='discount badge text-bg-danger fs-5'>{parseFloat(item.discount_percentage).toFixed(0)}%</div>
                <img src={`${imageUrl}/${item.cover_image}`} alt="" className='card-img-top' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h4>{item.name}</h4>
                <div className="pricing text-end d-flex flex-column justify-content-between">
                  <p className='old_price fs-5'><s>{item.price} &#8364;</s></p>
                  <p className='final_price fs-4 fw-bold'>{item.final_price} &#8364;</p>
                </div>
              </div>
            </>

          ) : (
            <>
              <div className="card-header bg-white ">
                <img src={`${imageUrl}/${item.cover_image}`} alt="" className='card-img-top' />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h4>{item.name}</h4>
                <p className='text-end fs-4'><strong>{item.price} &#8364;</strong></p>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}