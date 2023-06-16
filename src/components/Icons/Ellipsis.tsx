import type { SVGProps } from 'react';
const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={16} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M10.5 8C10.5 7.1875 11.1562 6.5 12 6.5C12.8125 6.5 13.5 7.1875 13.5 8C13.5 8.84375 12.8125 9.5 12 9.5C11.1562 9.5 10.5 8.84375 10.5 8ZM5.5 8C5.5 7.1875 6.15625 6.5 7 6.5C7.8125 6.5 8.5 7.1875 8.5 8C8.5 8.84375 7.8125 9.5 7 9.5C6.15625 9.5 5.5 8.84375 5.5 8ZM3.5 8C3.5 8.84375 2.8125 9.5 2 9.5C1.15625 9.5 0.5 8.84375 0.5 8C0.5 7.1875 1.15625 6.5 2 6.5C2.8125 6.5 3.5 7.1875 3.5 8Z"
    />
  </svg>
);
export default SvgEllipsis;
