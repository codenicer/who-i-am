import styles from '../styles/Projects.module.scss'
import { useRouter } from 'next/router'
import ScrollAnimation from 'react-animate-on-scroll'
import { projectList } from '../utils/project-list'
import { generalSetting } from '../utils/general'
import { useState } from 'react'

export default function Projects() {
  const [toRender, setTorender] = useState(generalSetting.maxProjectRender)
  const router = useRouter()

  const onClickHandler = () => {
    if (toRender >= projectList.length) {
      setTorender(generalSetting.maxProjectRender)
      router.push('#projects')
    } else {
      setTorender(toRender + generalSetting.maxProjectRender)
    }
  }

  return (
    <ScrollAnimation animateOnce animateIn="ani-viewport">
      <div id="projects" className={styles.projects_cotainer}>
        <div className={styles.projects_info}>
          <div className={'heading_container'}>
            <h1 className={'heading_title'}>Some of my Works</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
          <div className={styles.project_list_cont}>
            <ul className={styles.project_list}>
              {projectList.slice(0, toRender).map((project, i) => {
                return (
                  <li key={i}>
                    <div className={`${styles.project_card} fade-it-fast`}>
                      <div className={styles.project_content}>
                        <p className={styles.project_type}>
                          {project.projectType}
                        </p>
                        <h5 className={styles.project_title}>
                          {project.projectName}
                        </h5>
                        <p className={styles.project_decription}>
                          {project.porjectDesc}
                        </p>
                        <p className={styles.tech_list}>
                          {project.projectTech}
                        </p>
                        <p className={styles.demo_acc_title}>{'Demo Acc:'}</p>
                        {project.demoAcc.map((ac, i) => {
                          return (
                            <p className={styles.demo_accnts} key={i}>
                              {ac}
                            </p>
                          )
                        })}
                        <ul className={styles.project_links_list}>
                          <li className={styles.project_link}>
                            <a href={project.githubSource} target="_blank">
                              <svg viewBox="0 0 256 250">
                                <g>
                                  <path
                                    d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"
                                    fill="#fcdab7"
                                  ></path>
                                </g>
                              </svg>
                            </a>
                          </li>
                          <li className={styles.project_link}>
                            {project.demoLink ? (
                              <a href={project.demoLink} target="_blank">
                                <svg
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 511.626 511.627"
                                >
                                  <g>
                                    <g>
                                      <path
                                        d="M392.857,292.354h-18.274c-2.669,0-4.859,0.855-6.563,2.573c-1.718,1.708-2.573,3.897-2.573,6.563v91.361
                                      c0,12.563-4.47,23.315-13.415,32.262c-8.945,8.945-19.701,13.414-32.264,13.414H82.224c-12.562,0-23.317-4.469-32.264-13.414
                                      c-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562,4.471-23.313,13.417-32.259c8.947-8.947,19.702-13.418,32.264-13.418
                                      h200.994c2.669,0,4.859-0.859,6.57-2.57c1.711-1.713,2.566-3.9,2.566-6.567V82.221c0-2.662-0.855-4.853-2.566-6.563
                                      c-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648,0-42.016,8.042-58.102,24.125C8.042,113.297,0,132.665,0,155.313v237.542
                                      c0,22.647,8.042,42.018,24.123,58.095c16.086,16.084,35.454,24.13,58.102,24.13h237.543c22.647,0,42.017-8.046,58.101-24.13
                                      c16.085-16.077,24.127-35.447,24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57
                                      C397.709,293.209,395.519,292.354,392.857,292.354z"
                                        fill="#fcdab7"
                                      />
                                      <path
                                        d="M506.199,41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948,0-9.233,1.807-12.847,5.424
                                  c-3.617,3.615-5.428,7.898-5.428,12.847s1.811,9.233,5.428,12.85l50.247,50.248L198.424,304.067
                                  c-1.906,1.903-2.856,4.093-2.856,6.563c0,2.479,0.953,4.668,2.856,6.571l32.548,32.544c1.903,1.903,4.093,2.852,6.567,2.852
                                  s4.665-0.948,6.567-2.852l186.148-186.148l50.251,50.248c3.614,3.617,7.898,5.426,12.847,5.426s9.233-1.809,12.851-5.426
                                  c3.617-3.616,5.424-7.898,5.424-12.847V54.818C511.626,49.866,509.813,45.586,506.199,41.971z"
                                        fill="#fcdab7"
                                      />
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            ) : (
                              <div className={styles.project_link_null}></div>
                            )}
                          </li>
                          <li className={styles.project_link}>
                            {project.officialLink ? (
                              <a href={project.officialLink} target="_blank">
                                <svg viewBox="0 12 100 80">
                                  <path
                                    d="M81.23,17H18.77c-3.71,0-6.68,2.43-6.77,5.58V68.32C12,71.45,15,74,18.77,74H48V85H30.5a1.5,1.5,0,0,0,0,3h39a1.5,1.5,0,0,0,0-3H51V74H81.23C85,74,88,71.45,88,68.32V22.68C88,19.55,85,17,81.23,17ZM85,68.32C85,69.77,83.27,71,81.23,71H18.77c-2,0-3.77-1.23-3.77-2.68V22.62C15,21.18,16.73,20,18.77,20H81.23c2,0,3.77,1.23,3.77,2.68Z"
                                    fill="#fcdab7"
                                  />
                                  <path
                                    d="M55.27,36.63a1.5,1.5,0,0,0-2,.65L45.19,53a1.5,1.5,0,1,0,2.67,1.37l8.06-15.75A1.5,1.5,0,0,0,55.27,36.63Z"
                                    fill="#fcdab7"
                                  />
                                  <path
                                    d="M64.86,36.08a1.5,1.5,0,0,0-2.12,2.12l7.48,7.47-7.48,7.47a1.5,1.5,0,1,0,2.12,2.12l8.54-8.53a1.5,1.5,0,0,0,0-2.12Z"
                                    fill="#fcdab7"
                                  />
                                  <path
                                    d="M38.4,36.08a1.5,1.5,0,0,0-2.12,0l-8.54,8.54a1.5,1.5,0,0,0,0,2.12l8.54,8.54a1.5,1.5,0,0,0,2.12-2.12l-7.48-7.47L38.4,38.2A1.5,1.5,0,0,0,38.4,36.08Z"
                                    fill="#fcdab7"
                                  />
                                </svg>
                              </a>
                            ) : (
                              <div className={styles.project_link_null}></div>
                            )}
                          </li>
                        </ul>
                      </div>
                      <img src={project.photo}></img>
                    </div>
                  </li>
                )
              })}
            </ul>
            {projectList.length > generalSetting.maxProjectRender ? (
              <button onClick={onClickHandler}>
                {toRender >= projectList.length
                  ? 'Show Less'
                  : 'Show More Project'}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
