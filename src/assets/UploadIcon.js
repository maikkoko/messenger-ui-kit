import React from 'react'

const UploadIcon = (props) => {
  let fill = props.secondary ? "#0084FF" : "#FFFFFF"
  fill = props.disabled ? "rgba(0, 0, 0, 0.34)" : fill

  return (
    <svg width="18px" height="22px" viewBox="0 0 18 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Design-Kit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Buttons" transform="translate(-147.000000, -1053.000000)" fill={fill}>
          <g id="Button-Icon" transform="translate(80.000000, 964.000000)">
            <g id="buttonIcon" transform="translate(0.000000, 88.000000)">
              <g id="Share-Icon" transform="translate(64.000000, 0.000000)">
                <g id="buttonIcon-01">
                  <g id="ic_share_lg_blue">
                    <path d="M11,4.41970323 L7.75958401,7.66011921 C7.3700186,8.04968463 6.7403536,8.05162997 6.34710665,7.65838302 C5.95658236,7.26785873 5.95558968,6.63568642 6.34537045,6.24590565 L11.2985903,1.29268579 C11.4930864,1.09818974 11.7474308,1.00031369 12.0023214,1 C12.2597094,1.00088648 12.5147297,1.09808403 12.7093315,1.29268579 L17.6625513,6.24590565 C18.0521168,6.63547107 18.0540621,7.26513606 17.6608151,7.65838302 C17.2702909,8.04890731 16.6381185,8.04989998 16.2483378,7.66011921 L13,4.41178143 L13,14.9904698 C13,15.5465352 12.5561352,15.9973152 12,15.9973152 C11.4477153,15.9973152 11,15.5473665 11,14.9904698 L11,4.41970323 L11,4.41970323 Z M5,18.9914566 C5,20.1002551 5.89805351,20.9973152 7.00585866,20.9973152 L16.9941413,20.9973152 C18.1029399,20.9973152 19,20.0992617 19,18.9914566 L19,11.9973158 C19,11.4450305 19.4477153,10.9973152 20,10.9973152 C20.5522847,10.9973152 21,11.4450305 21,11.9973152 L21,19.0025318 C21,21.2087898 19.2082844,22.9973152 17.0052166,22.9973152 L6.9947834,22.9973152 C4.78852545,22.9973152 3,21.2055996 3,19.0025318 L3,11.9973152 C3,11.4450305 3.44771525,10.9973152 4,10.9973152 C4.55228475,10.9973152 5,11.4450305 5,11.9973152 L5,18.9914566 Z" id="Share"></path>
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

export default UploadIcon