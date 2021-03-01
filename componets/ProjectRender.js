import styles from '../styles/Loader.module.scss'
import { projectList } from '../utils/project-list'
import { generalSetting } from '../utils/general'

export default function Loader(doneState) {
  const [loader, setLoader] = useState(generalSetting.maxProjectRender)
  return <div></div>
}
