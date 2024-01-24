import {ItemContainer, ItemImage} from './styledComponent'

const LanguageItem = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails
  return (
    <>
      <ItemContainer className="item-container">
        <ItemImage
          className="item-image"
          src={imageUrl}
          alt={`${imageAltText}`}
        />
      </ItemContainer>
    </>
  )
}

export default LanguageItem
