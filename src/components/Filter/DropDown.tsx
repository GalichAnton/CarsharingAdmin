import { components, DropdownIndicatorProps } from "react-select";
export const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 5 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.410156 4.16016H4.58984L2.5 6.25L0.410156 4.16016Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.410156 2.33984L2.5 0.25L4.58984 2.33984H0.410156Z"
          fill="black"
        />
      </svg>
    </components.DropdownIndicator>
  );
};
