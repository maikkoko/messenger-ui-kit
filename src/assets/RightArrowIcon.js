import React from 'react'

const RightArrowIcon = (props) => {
  let fill = props.secondary ? "#0084FF" : "#FFFFFF"
  fill = props.disabled ? "rgba(0, 0, 0, 0.34)" : fill

  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Design-Kit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Buttons" transform="translate(-82.000000, -1054.000000)">
          <g id="Button-Icon" transform="translate(80.000000, 964.000000)">
            <g id="buttonIcon" transform="translate(0.000000, 88.000000)">
              <g id="Send-Icon">
                <g id="buttonIcon-01">
                  <g id="ic_send_lg_blue">
                    <g id="ic_send_blue">
                      <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                      <path d="M3.84546073,2.13270004 L21.0602686,10.5183229 C22.3132438,11.1290974 22.3132438,12.8711504 21.0602686,13.4815107 L3.84546073,21.8671336 C2.99753485,22.2803898 2,21.6795534 2,20.7561452 L2.73359402,14.6314231 C2.80202312,14.0599866 3.26445087,13.6090487 3.85098606,13.541553 L12.9299558,12.6177307 C13.6920265,12.5402969 13.6920265,11.4595367 12.9299558,11.3821029 L3.85098606,10.4582807 C3.26445087,10.391199 2.80202312,9.94026109 2.73359402,9.36841056 L2,3.24368844 C2,2.32028027 2.99753485,1.71985791 3.84546073,2.13270004" id="Fill-1" fill={fill}></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
  

export default RightArrowIcon