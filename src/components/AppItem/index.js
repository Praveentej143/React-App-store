// Write your code here
import './index.css'

const AppItem = props => {
  const {appsListComp} = props
  const {appId, appName, imageUrl, category} = appsListComp

  return (
    <li className="list-item-2">
      <img className="logo" src={`${imageUrl}`} alt={`${appName}`} />
      <p className="logo-desc">{appName}</p>
    </li>
  )
}

export default AppItem
