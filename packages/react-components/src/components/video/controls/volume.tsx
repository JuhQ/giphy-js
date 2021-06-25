import React from 'react'

export const VolumeSize = 25
export const VolumeOnIcon = ({ size = VolumeSize, onClick = () => {} }) => (
    <svg width={size} height={size} viewBox="0 0 26 23" onClick={onClick}>
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g transform="translate(1.000000, 0.000000)" fill="#FFF" fillRule="nonzero">
                <path d="M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 -1.77635684e-15,15.3405244 L-1.77635684e-15,7.45058441 C-1.77635684e-15,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z" />
                <path d="M15.7579491,16.0914044 L14.6798891,13.6594044 C15.5739159,13.2635547 16.1503537,12.3776671 16.1501091,11.3999244 C16.150386,10.4242626 15.5763999,9.53983269 14.6852091,9.14272441 L15.7697291,6.71376441 C17.6193585,7.53872062 18.810518,9.37466359 18.8101092,11.3999244 C18.8105521,13.4298903 17.6139475,15.2691931 15.7579491,16.0914044 L15.7579491,16.0914044 Z" />
                <path d="M18.3647491,20.2619044 L17.2863091,17.8299044 C19.8302925,16.7031661 21.4705725,14.1822599 21.4701091,11.3999244 C21.4701091,8.59818441 19.8167291,6.09892441 17.3022691,4.97678441 L18.3864091,2.54782441 C21.8804724,4.10607079 24.1307363,7.57414217 24.1301093,11.3999244 C24.1308375,15.2343934 21.8705556,18.7086904 18.3647491,20.2619044 Z" />
            </g>
        </g>
    </svg>
)

export const VolumeOffIcon = ({ size = VolumeSize, onClick = () => {} }) => (
    <svg
        onClick={onClick}
        height={size}
        width={size}
        viewBox="0 0 26 23"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g id="Group" transform="translate(1.000000, 0.000000)" fill="#FFFFFF" fillRule="nonzero">
                <path
                    d="M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 0,15.3405244 L0,7.45058441 C0,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z"
                    id="Path"
                />
            </g>
            <g id="Group" transform="translate(14.887009, 6.947630)" fill="#FFFFFF" fillRule="nonzero">
                <path
                    d="M7.88199149,6.27905236 C7.94693088,6.35707599 7.94693088,6.47033309 7.88199149,6.54835671 L6.54835671,7.88199149 C6.47033309,7.94693088 6.35707599,7.94693088 6.27905236,7.88199149 L3.96534802,5.56828715 L1.65164367,7.88199149 C1.57362004,7.94693088 1.46036294,7.94693088 1.38233932,7.88199149 L0.0487045381,6.54835671 C-0.016234846,6.47033309 -0.016234846,6.35707599 0.0487045381,6.27905236 L2.36240889,3.96534802 L0.0487045381,1.65164367 C-0.016234846,1.57362004 -0.016234846,1.46036294 0.0487045381,1.38233932 L1.38233932,0.0487045381 C1.46036294,-0.016234846 1.57362004,-0.016234846 1.65164367,0.0487045381 L3.96534802,2.36240889 L6.27905236,0.0487045381 C6.35707599,-0.016234846 6.47033309,-0.016234846 6.54835671,0.0487045381 L7.88199149,1.38233932 C7.94693088,1.46036294 7.94693088,1.57362004 7.88199149,1.65164367 L5.56828715,3.96534802 L7.88199149,6.27905236 Z"
                    id="Shape"
                />
            </g>
        </g>
    </svg>
)
