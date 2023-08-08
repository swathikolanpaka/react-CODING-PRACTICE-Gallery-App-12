// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails} = props
  const {
    imageUrl,
    imageAltText,
    thumbnailUrl,
    thumbnailAltText,
    changeImgUrl,
  } = imageDetails

  const imgChange = () => {
    changeImgUrl(imageUrl, imageAltText)
  }

  return (
    <li>
      <button className="button" type="button" onClick={imgChange}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
