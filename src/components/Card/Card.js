
import "./Card.css"
export const Item = ({img, name, status, species, location}) => {
  return (
    <li className=" box d-flex border rounded-2 mb-4 text-bg-secondary">
      <img className="me-3 item-img" src={img} alt={name} />
      <div className="pt-3">
        <h2 className="mt-0 mb-3">{name}</h2>
        <div className="d-flex mb-3">
          <p className="status">{status} - </p>
          <p className="status">{species}</p>
        </div>
        <p className="status">Last known location:</p>
        <h3 className="">{location}</h3>
      </div>
    </li>
  )
}