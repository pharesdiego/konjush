import React, { Component } from 'react';
// ArrowIcon,  HouseIcon, InfoIcon, LayersIcon, BookIcon, ViewIcon, WrenchIcon

const createSVGComponent = svg => class extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render(){
    return svg
  }
};


export const ArrowIcon = createSVGComponent(<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 195.5 355" style={{
 enableBackground: 'new 0 0 195.5 355'
}} xmlSpace="preserve">
 <g>
   <g>
     <polygon points="18.7,6.3 4.8,20.2 162.8,178.2 4.8,336.2 18.7,350.1 190.7,178.2 		"/>
   </g>
 </g>
</svg>);


export const HouseIcon = createSVGComponent(<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 485.4 485.4" style={{
 enableBackground: "new 0 0 485.4 485.4"
}} xmlSpace="preserve">
<g>
 <g>
   <path style={{ fill: '#FFFFFF' }} d="M242.2,16.2L0,223l12.8,14.8l39.4-33.5v264.9h132.9h115.2h132.9V204.3l39.4,33.5l12.8-14.8L242.2,16.2z
     M279.6,449.5h-75.8v-130h75.8V449.5z M412.6,449.5H299.3V299.8H185.1v149.7H71.9V187.6L242.2,42.8l170.3,144.7L412.6,449.5
     L412.6,449.5z"/>
 </g>
</g>
<g>
 <g>
   <path style={{ fill: '#FFFFFF' }} d="M242.2,139.3c-31.5,0-57.1,24.6-57.1,57.1c0,31.5,25.6,57.1,57.1,57.1s57.1-25.6,57.1-57.1
     S273.7,139.3,242.2,139.3z M242.2,233.8c-20.7,0-37.4-16.7-37.4-37.4s16.7-37.4,37.4-37.4s37.4,16.7,37.4,37.4
     S262.9,233.8,242.2,233.8z"/>
 </g>
</g>
</svg>);

export const InfoIcon = createSVGComponent(<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 492.3 492.3" style={{
 enableBackground: "new 0 0 492.3 492.3"
}} xmlSpace="preserve">
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }}  d="M246.2,0C110.4,0,0,110.4,0,246.2s110.4,246.2,246.2,246.2s246.2-110.4,246.2-246.2S381.9,0,246.2,0z
       M246.2,472.6C121.3,472.6,19.7,371,19.7,246.2S121.3,19.7,246.2,19.7s226.5,101.6,226.5,226.5S371,472.6,246.2,472.6z"/>
   </g>
 </g>
 <g>
   <g>
     <rect x="236.3" y="155.4" style={{ fill: '#FFFFFF' }} width="19.7" height="252"/>
   </g>
 </g>
 <g>
   <g>
     <rect x="236.3" y="84.9" style={{ fill: '#FFFFFF' }} width="19.7" height="35"/>
   </g>
 </g>
 </svg>);

export const LayersIcon = createSVGComponent(<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 506 506" style={{
 enableBackground: "new 0 0 506 506"
}} xmlSpace="preserve">
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M253,5.4L0,151l253,145.7L506,151L253,5.4z M39.5,151L253,28.1l213.6,123L253,274L39.5,151z"/>
   </g>
 </g>
 <g>
   <g>
     <polygon style={{ fill: '#FFFFFF' }} points="481.4,244.5 253,376 24.6,244.5 14.8,261.6 253,398.7 491.2,261.6 		"/>
   </g>
 </g>
 <g>
   <g>
     <polygon style={{ fill: '#FFFFFF' }} points="481.4,346.5 253,478 24.6,346.5 14.8,363.5 253,500.7 491.2,363.5 		"/>
   </g>
 </g>
</svg>);

export const BookIcon = createSVGComponent(<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 492.3 492.3" style={{
 enableBackground: "new 0 0 492.3 492.3"
}} xmlSpace="preserve">
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M483.9,24C406,12.9,324,26,246.2,61.8C168.4,26,86.3,12.9,8.5,24L0,25.2v408.1l11.2-1.6
       c75.3-10.8,155.1,2.4,230.1,37.7l1.5,0.8l2.8,1.7l0.2-0.1l0.5,0.2l3.6-2.2l0.6-0.3c75.5-35.6,155.2-48.7,230.6-38l11.2,1.6V25.2
       L483.9,24z M236.3,445.6c-56.8-24.6-115.6-37.2-173.2-37.2c-14.6,0-29.1,0.8-43.4,2.4V42.4c71-8.4,145.6,4.1,216.6,36.5V445.6z
       M472.6,410.8c-71.1-8-145.4,3.9-216.6,34.8V78.9c71-32.4,145.6-45,216.6-36.5V410.8z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M281,369.8l8.4,17.8c50-23.6,102.8-32.3,152.7-25.2l2.8-19.5C391.2,335.3,334.5,344.6,281,369.8z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M281,290.9l8.4,17.8c50-23.6,102.8-32.3,152.7-25.2l2.8-19.5C391.1,256.4,334.5,265.6,281,290.9z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M281,212l8.4,17.8c50-23.6,102.8-32.3,152.7-25.2l2.8-19.5C391.2,177.4,334.5,186.7,281,212z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M281,133l8.4,17.8c50-23.6,102.8-32.3,152.7-25.2l2.8-19.5C391.2,98.5,334.5,107.8,281,133z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M47.5,343l2.8,19.5c49.9-7.1,102.6,1.6,152.7,25.2l8.4-17.8C157.8,344.6,101.2,335.3,47.5,343z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M47.5,264l2.8,19.5c49.9-7.1,102.6,1.6,152.7,25.2l8.4-17.8C157.8,265.6,101.1,256.4,47.5,264z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M47.5,185.1l2.8,19.5c49.9-7.1,102.6,1.6,152.7,25.2l8.4-17.8C157.8,186.7,101.2,177.4,47.5,185.1z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M47.5,106.1l2.8,19.5c49.9-7.1,102.6,1.6,152.7,25.2l8.4-17.8C157.8,107.8,101.2,98.5,47.5,106.1z"/>
   </g>
 </g>
 </svg>);

export const ViewIcon = createSVGComponent(<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 409.806 409.806" style={{
 enableBackground: "new 0 0 409.806 409.806"
}} xmlSpace="preserve">
<g>
<g>
 <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
   c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
   c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
   c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
   c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
</g>
</g>
</svg>);

export const WrenchIcon = createSVGComponent(<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 492.2 492.2" style={{
 enableBackground: "new 0 0 492.2 492.2"
}} xmlSpace="preserve">
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M484,92.1l-5.3-14.6l-81.9,81.9l-52.4-11.6l-11.6-52.4l81.9-81.9l-14.6-5.3c-50.7-18.2-108-5.5-145.9,32.5
       c-26.4,26.4-40.9,61.4-40.9,98.7c0,9.4,0.9,18.7,2.8,27.7L22.6,360.6C8,375.2,0,394.5,0,415.1c0,20.6,8,40,22.6,54.5
       c15,15,34.8,22.6,54.5,22.6c19.8,0,39.5-7.5,54.5-22.6l193.5-193.5c9,1.8,18.3,2.8,27.7,2.8c37.3,0,72.3-14.5,98.7-40.9
       C489.5,200,502.3,142.8,484,92.1z M117.7,455.7c-22.4,22.4-58.8,22.4-81.2,0c-10.8-10.8-16.8-25.3-16.8-40.6
       c0-15.3,6-29.8,16.8-40.6l185.9-185.9c6.9,18.3,17.6,35.2,31.8,49.4c14.2,14.2,31.1,24.9,49.4,31.8L117.7,455.7z M437.6,224.1
       c-22.6,22.6-52.7,35.1-84.7,35.1c-32,0-62.1-12.5-84.7-35.1c-22.6-22.6-35.1-52.7-35.1-84.7c0-32,12.5-62.1,35.1-84.7
       c22.7-22.7,53.5-34.9,84.8-34.9c8.4,0,16.8,0.9,25.1,2.6l-66.7,66.7l16.6,75.2l75.2,16.6l66.7-66.7
       C478.3,153.5,466.4,195.3,437.6,224.1z"/>
   </g>
 </g>
 <g>
   <g>
     <path style={{ fill: '#FFFFFF' }} d="M106.2,386.1c-7.5-7.5-17.5-11.7-28.2-11.7s-20.6,4.1-28.2,11.7c-15.5,15.5-15.5,40.8,0,56.3
       c7.8,7.8,18,11.6,28.2,11.6c10.2,0,20.4-3.9,28.2-11.6c7.5-7.5,11.7-17.5,11.7-28.2S113.7,393.6,106.2,386.1z M92.3,428.5
       c-7.9,7.8-20.6,7.8-28.5,0c-7.9-7.9-7.9-20.6,0-28.5c3.8-3.8,8.9-5.9,14.2-5.9c5.4,0,10.4,2.1,14.2,5.9c3.8,3.8,5.9,8.9,5.9,14.2
       C98.2,419.6,96.1,424.7,92.3,428.5z"/>
   </g>
 </g>
</svg>);