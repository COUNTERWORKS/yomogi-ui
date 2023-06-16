import type { SVGProps } from 'react';
const SvgXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={14} fill="none" {...props}>
    <path
      fill="#000"
      d="M8.738 11.016a.463.463 0 0 1-.629 0L4.5 7.379.863 11.016a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63L3.871 6.75.234 3.14a.463.463 0 0 1 0-.628.463.463 0 0 1 .63 0L4.5 6.148l3.61-3.636a.463.463 0 0 1 .628 0 .463.463 0 0 1 0 .629L5.102 6.75l3.636 3.637a.463.463 0 0 1 0 .629Z"
    />
  </svg>
);
export default SvgXmark;
