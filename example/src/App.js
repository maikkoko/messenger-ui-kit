import React, { Component } from 'react'

import { 
  Button,
  CircularButton
} from 'messenger-ui-kit'

export default class App extends Component {
  clickAction = () => {
    console.log('hello')
  }

  render () {
    return (
      <div>
        <div>
          <CircularButton action={this.clickAction} primary />
          <CircularButton action={this.clickAction}  primary icon="arrow" />
        </div>
        <div>
          <CircularButton action={this.clickAction} />
          <CircularButton action={this.clickAction} icon="upload" />
        </div>
        <div>
          <CircularButton disabled action={this.clickAction} />
          <CircularButton disabled action={this.clickAction} icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} size="small" primary />
          <Button action={this.clickAction} text="Next" size="small" primary icon="arrow" />
          <Button action={this.clickAction} text="Upload" size="small" primary icon="upload" />
        </div>

        <div>
          <Button size="small" action={this.clickAction} />
          <Button action={this.clickAction} text="Next" size="small" icon="arrow" />
          <Button action={this.clickAction} text="Upload" size="small" icon="upload" />
        </div>

        <div>
          <Button disabled size="small" primary action={this.clickAction} />
          <Button disabled action={this.clickAction} text="Next" size="small" icon="arrow" />
          <Button disabled action={this.clickAction} text="Upload" size="small" icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} primary />
          <Button action={this.clickAction} primary text="Next" size="medium" icon="arrow" />
          <Button action={this.clickAction} primary text="Upload" icon="upload" />
        </div>

        <div>
          <Button action={this.clickAction} />
          <Button action={this.clickAction} text="Next" size="medium" icon="arrow" />
          <Button action={this.clickAction} text="Upload" icon="upload" />
        </div>

        <div>
          <Button disabled primary action={this.clickAction} />
          <Button disabled action={this.clickAction} text="Next" size="medium" icon="arrow" />
          <Button disabled action={this.clickAction} text="Upload" icon="upload" />
        </div>

        <br />

        <div>
          <Button action={this.clickAction} size="large" primary />
          <Button action={this.clickAction} primary text="Next" size="large" icon="arrow" />
          <Button action={this.clickAction} primary text="Upload" size="large" icon="upload" />
        </div>

        <div>
          <Button size="large" action={this.clickAction} />
          <Button action={this.clickAction} text="Next" size="large" icon="arrow" />
          <Button action={this.clickAction} text="Upload" size="large" icon="upload" />
        </div>

        <div>
          <Button disabled size="large" primary action={this.clickAction} />
          <Button disabled action={this.clickAction} text="Next" size="large" icon="arrow" />
          <Button disabled action={this.clickAction} text="Upload" size="large" icon="upload" />
        </div>

        <br />
        
        <div>
          <Button primary action={this.clickAction} fluid text="Next" size="large" icon="arrow" />
          <Button action={this.clickAction} fluid text="Upload" size="large" icon="upload" />
          <Button disabled action={this.clickAction} fluid text="Disabled" size="large" />
        </div>

        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="eg-Various-lists" transform="translate(-12.000000, -174.000000)">
              <g id="Extension">
                <g transform="translate(0.000000, 64.000000)">
                  <g id="Options" transform="translate(0.000000, 74.000000)">
                    <g id="Menu-Cell-1" transform="translate(0.000000, 26.000000)">
                      <g id="Group-5" transform="translate(12.000000, 10.000000)">
                        <circle id="Oval-15" stroke="#0084FF" strokeWidth="2" cx="12" cy="12" r="11"></circle>
                        <circle id="Oval" fill="#0084FF" cx="12" cy="12" r="8"></circle>
                      </g> 
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="eg-Various-lists" transform="translate(-12.000000, -262.000000)" stroke="#0084FF" strokeWidth="2">
              <g id="Extension">
                <g transform="translate(0.000000, 64.000000)">
                  <g id="Options" transform="translate(0.000000, 74.000000)">
                    <g id="Menu-Cell-1-Copy-2" transform="translate(0.000000, 114.000000)">
                      <circle id="Oval-15" cx="24" cy="22" r="11"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="eg-Various-lists" transform="translate(-12.000000, -452.000000)" fill="#0084FF">
              <g id="Extension">
                <g transform="translate(0.000000, 64.000000)">
                  <g id="Options" transform="translate(0.000000, 264.000000)">
                    <g id="Menu-Cell-1-Copy-2" transform="translate(0.000000, 114.000000)">
                      <path d="M24,34 C17.372583,34 12,28.627417 12,22 C12,15.372583 17.372583,10 24,10 C30.627417,10 36,15.372583 36,22 C36,28.627417 30.627417,34 24,34 Z M19.7071068,22.2928932 C19.3165825,21.9023689 18.6834175,21.9023689 18.2928932,22.2928932 C17.9023689,22.6834175 17.9023689,23.3165825 18.2928932,23.7071068 L21.2928932,26.7071068 C21.7019291,27.1161427 22.3716554,27.0938432 22.7525767,26.6585046 L29.7525767,18.6585046 C30.1162587,18.242868 30.0741412,17.6111054 29.6585046,17.2474233 C29.242868,16.8837413 28.6111054,16.9258588 28.2474233,17.3414954 L21.9512899,24.5370764 L19.7071068,22.2928932 Z" id="Combined-Shape"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="48px" height="32px" viewBox="0 0 48 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Design-Kit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Lists" transform="translate(-389.000000, -1784.000000)">
                  <g id="Table-Cells" transform="translate(80.000000, 964.000000)">
                      <g id="Group-2" transform="translate(0.000000, 88.000000)">
                          <g id="Table-cell---switch---off" transform="translate(1.000000, 724.000000)">
                              <g id="Switch-OFF" transform="translate(308.000000, 8.000000)">
                                  <rect id="background" fillOpacity="0.200000003" fill="#000000" x="0" y="0" width="48" height="32" rx="16"></rect>
                                  <circle id="Handle" fill="#FFFFFF" cx="16" cy="16" r="11"></circle>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="48px" height="32px" viewBox="0 0 48 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Design-Kit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Lists" transform="translate(-389.000000, -1852.000000)">
                  <g id="Table-Cells" transform="translate(80.000000, 964.000000)">
                      <g id="Group-2" transform="translate(0.000000, 88.000000)">
                          <g id="Table-cell---switch---on" transform="translate(1.000000, 792.000000)">
                              <g id="Switch-OFF" transform="translate(308.000000, 8.000000)">
                                  <rect id="background" fill="#0084FF" x="0" y="0" width="48" height="32" rx="16"></rect>
                                  <circle id="Handle" fill="#FFFFFF" cx="32" cy="16" r="11"></circle>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Android-Container-Back" transform="translate(-325.000000, -97.000000)">
                  <g id="Extension" transform="translate(0.000000, 80.000000)">
                      <g id="Toolbar">
                          <g id="material_close" transform="translate(320.000000, 12.000000)">
                              <g id="x">
                                  <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                  <polygon id="Shape" fillOpacity="0.54" fill="#000000" points="19 6.415 17.585 5 12 10.585 6.415 5 5 6.415 10.585 12 5 17.585 6.415 19 12 13.415 17.585 19 19 17.585 13.415 12"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Android-Container-Back" transform="translate(-20.000000, -96.000000)">
                  <g id="Extension" transform="translate(0.000000, 80.000000)">
                      <g id="Toolbar">
                          <g id="material_back" transform="translate(16.000000, 12.000000)">
                              <g id="back">
                                  <rect id="bounds" x="0" y="0" width="24" height="24"></rect>
                                  <polygon id="Shape" fillOpacity="0.54" fill="#000000" points="20 11 7.8 11 13.4 5.4 12 4 4 12 12 20 13.4 18.6 7.8 13 20 13"></polygon>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          </svg>
        </div>

        <div>
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="iOS-Container" transform="translate(-14.000000, -74.000000)" fill="#D8D8D8">
                      <g id="Extension" transform="translate(0.000000, 64.000000)">
                          <g id="Header">
                              <circle id="Extension-Icon" cx="26" cy="22" r="12"></circle>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </div>

        <div>
          <svg width="14px" height="4px" viewBox="0 0 14 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="eg-Add-to-Order" transform="translate(-286.000000, -299.000000)" fill="#0084FF">
                      <g id="Mini-App" transform="translate(0.000000, 64.000000)">
                          <g id="Item" transform="translate(0.000000, 213.000000)">
                              <g id="Counter" transform="translate(286.000000, 14.000000)">
                                  <path d="M1.36488622,11.0153728 L12.6351138,11.0153728 C13.1958887,11.0153728 13.6504866,10.5607749 13.6504866,10 C13.6504866,9.43922507 13.1958887,8.98462717 12.6351138,8.98462717 L1.36488622,8.98462717 C0.804111289,8.98462717 0.349513387,9.43922507 0.349513387,10 C0.349513387,10.5607749 0.804111289,11.0153728 1.36488622,11.0153728" id="miniAppSubtract"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </div>

        <div>
          <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="eg-Add-to-Order" transform="translate(-341.000000, -294.000000)" fill="#0084FF">
                  <g id="Mini-App" transform="translate(0.000000, 64.000000)">
                      <g id="Item" transform="translate(0.000000, 213.000000)">
                          <g id="Counter" transform="translate(286.000000, 14.000000)">
                              <path d="M60.9846272,8.98462717 L60.9846272,4.36488622 C60.9846272,3.80411129 61.4392251,3.34951339 62,3.34951339 C62.5607749,3.34951339 63.0153728,3.80411129 63.0153728,4.36488622 L63.0153728,8.98462717 L67.6351138,8.98462717 C68.1958887,8.98462717 68.6504866,9.43922507 68.6504866,10 C68.6504866,10.5607749 68.1958887,11.0153728 67.6351138,11.0153728 L63.0153728,11.0153728 L63.0153728,15.6351138 C63.0153728,16.1958887 62.5607749,16.6504866 62,16.6504866 C61.4392251,16.6504866 60.9846272,16.1958887 60.9846272,15.6351138 L60.9846272,11.0153728 L56.3648862,11.0153728 C55.8041113,11.0153728 55.3495134,10.5607749 55.3495134,10 C55.3495134,9.43922507 55.8041113,8.98462717 56.3648862,8.98462717 L60.9846272,8.98462717 Z" id="miniAppAdd"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
          </svg>
        </div>

      </div>
    )
  }
}

/* 
List Item
16pt

List header
small - 11/12pt uppercase
large - 14pt semibold

Paragraph
14pt

Headers
16/17pt Semibold

Header/Dark Text
16pt Medium
*/