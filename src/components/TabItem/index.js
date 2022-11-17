// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsListComp, onClickChangeTab} = props
  const {tabId, displayText} = tabsListComp
  const onClickTab = () => {
    onClickChangeTab(tabId)
  }
  return (
    <li className="list-item">
      <button className="tab-btn" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
