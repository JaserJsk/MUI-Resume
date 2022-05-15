// Material UI
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Senseidev" width="100" />
     *
     */
    <svg
      width="170"
      height="36"
      version="1.0"
      viewBox="0 0 300 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 50) scale(.05 -.05)">
        <path
          d="m405 959c-327-44-331-339-8-502 309-156 132-381-207-262-55 19-107 44-117 55-9 11-11-6-4-37 9-42 6-53-13-43-14 7 0-9 31-36 168-143 448-108 538 67l35 69v-118-118l166 11c332 20 518 215 488 508-35 338-354 480-909 406zm630-149c306-184 202-619-158-662l-107-12v318c0 272-5 324-34 352-46 47-59 3-76-276-8-121-15-201-17-178-5 70-77 142-198 199-184 86-225 147-159 237 60 82 623 99 749 22z"
          fill={theme.palette.secondary.main}
        />
        <path
          d="m4280 510v-230h178c199 0 283 47 308 174 37 190-66 286-308 286h-178v-230zm351 101c109-109 25-251-150-251h-101v150 150h101c80 0 111-10 150-49z"
          fill={theme.palette.secondary.main}
        />
        <path
          d="m4861 701c-12-21-21-107-21-191 0-230 0-230 261-230 204 0 219 3 219 39s-16 40-195 45l-195 6-6 55-7 55h162c158 0 161 1 161 50s-3 50-161 50c-143 0-161 4-155 35 6 30 34 36 201 41 179 5 195 9 195 45 0 60-427 60-459 0z"
          fill={theme.palette.secondary.main}
        />
        <path
          d="m5759 747c-17-5-61-69-97-143l-66-134-69 135c-56 112-76 135-117 135-28 0-50-5-50-10 0-26 222-450 236-450 13 0 244 445 244 470 0 11-34 10-81-3z"
          fill={theme.palette.secondary.main}
        />
        <path
          d="m1511 709c-106-107-8-229 184-229 134 0 175-30 125-90-32-39-206-40-238-2-43 51-102 53-102 3 0-109 322-168 407-74 106 116 14 248-184 263-100 8-133 17-133 40 0 36 223 55 257 21 54-54 116-25 83 39-37 72-334 93-399 29z"
          fill={theme.palette.primary.main}
        />
        <path
          d="m2031 709c-23-24-31-74-31-199 0-226 5-230 271-230 194 0 209 3 209 39s-16 40-195 45l-195 6-12 108 156 6c144 6 156 9 162 51 7 44 1 45-156 45-144 0-162 4-156 35 6 30 34 36 201 41 179 5 195 9 195 45 0 53-396 60-449 8z"
          fill={theme.palette.primary.main}
        />
        <path
          d="m2540 510c0-225 1-230 45-230 43 0 45 6 38 142-8 165-24 166 210-16 89-69 168-126 175-126s12 104 12 230v230h-49c-47 0-50-6-55-139l-6-140-178 140c-98 76-181 139-185 139s-7-103-7-230z"
          fill={theme.palette.primary.main}
        />
        <path
          d="m3113 703c-95-105-10-208 184-223 126-9 133-13 133-60 0-62-220-90-242-31-16 40-108 41-108 1 0-119 334-164 419-57 96 122-3 247-197 247-109 0-122 4-122 40 0 44 224 62 250 20 14-23 110-27 110-4 0 104-345 158-427 67z"
          fill={theme.palette.primary.main}
        />
        <path
          d="m3631 709c-23-24-31-74-31-199 0-226 5-230 271-230 194 0 209 3 209 39s-16 40-195 45l-195 6-6 55-7 55h162c158 0 161 1 161 50s-3 50-161 50c-143 0-161 4-155 35 6 30 34 36 201 41 179 5 195 9 195 45 0 53-396 60-449 8z"
          fill={theme.palette.primary.main}
        />
        <path
          d="m4140 510c0-225 1-230 45-230s45 5 45 230-1 230-45 230-45-5-45-230z"
          fill={theme.palette.primary.main}
        />
      </g>
    </svg>
  );
};

export default Logo;
