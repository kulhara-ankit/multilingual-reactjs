import './index.css'

const Tabs = props => {
  const {eachTabDetails, onClickTab, isActive} = props
  const {buttonText, id} = eachTabDetails

  const onClickTabItem = () => {
    onClickTab(id)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
