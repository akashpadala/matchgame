import './index.css'

const TabItem = props => {
  const {activeTabId, eachItem, clickTabItem} = props
  const {tabId, displayText} = eachItem

  const onCLickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabClassNameValue = activeTabId === tabId ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`button ${activeTabClassNameValue}`}
        onClick={onCLickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
