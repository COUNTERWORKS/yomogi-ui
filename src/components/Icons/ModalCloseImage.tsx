import type { SVGProps } from 'react';
const SvgModalCloseImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" {...props}>
    <path
      fill="#aaa"
      d="M14.658 12.59c.394.437.394 1.093 0 1.487-.437.438-1.093.438-1.487 0L8.008 8.871l-5.206 5.206c-.438.438-1.094.438-1.488 0-.437-.394-.437-1.05 0-1.488l5.207-5.206-5.207-5.206c-.437-.438-.437-1.094 0-1.488a.958.958 0 0 1 1.444 0l5.25 5.25L13.215.733a.958.958 0 0 1 1.443 0c.438.394.438 1.05 0 1.488L9.452 7.383l5.206 5.206Z"
    />
  </svg>
);
export default SvgModalCloseImage;
