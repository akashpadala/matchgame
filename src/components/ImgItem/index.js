import './index.css'

const ImgItem = props => {
  const {eachItem, clickImg} = props
  const {id, thumbnailUrl} = eachItem

  const onClickImg = () => {
    clickImg(id)
  }

  return (
    <li className="img-item">
      <button className="button" type="button" onClick={onClickImg}>
        <img src={thumbnailUrl} alt="thumbnail" className="img" />
      </button>
    </li>
  )
}

export default ImgItem
