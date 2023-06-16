import type { SVGProps } from 'react';
const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} fill="none" {...props}>
    <path
      fill="#000"
      d="M10 6.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875A.864.864 0 0 1 10 6.75Zm-4.375 0c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875ZM3 6.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875A.9.9 0 0 1 3 6.75Z"
    />
  </svg>
);
export default SvgEllipsis;
