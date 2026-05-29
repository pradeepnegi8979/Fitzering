import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MapPin, Flame } from 'lucide-react';
import './SevenSignalsSection.css';
import sevenSignals1 from '../../../assets/oneRingimg1.png';
import sevenSignals2 from '../../../assets/oneRingimg2.png';
import sevenSignals3 from '../../../assets/oneRingimg3.png';
import sevenSignals4 from '../../../assets/oneRingimg4.png';
import sevenSignals5 from '../../../assets/oneRingimg5.png';
import sevenSignals6 from '../../../assets/oneRingimg6.png';
import sevenSignals7 from '../../../assets/oneRingimg7.png';
import VideoPage from '../../../assets/fitze-ring-move.mp4';
const fitzePro = (
  <svg xmlns="http://www.w3.org/2000/svg" width="67" height="21" viewBox="0 0 67 21" fill="none">
<path d="M14.4714 15.268C13.7222 15.268 13.0648 15.1549 12.4993 14.9287C11.948 14.6883 11.5168 14.2996 11.2058 13.7624C10.8948 13.211 10.7393 12.4618 10.7393 11.5146V1.84822C10.7393 1.75271 10.8167 1.67528 10.9122 1.67528L13.4291 1.67528C13.5246 1.67528 13.602 1.75271 13.602 1.84822V4.40749C13.602 4.503 13.6794 4.58043 13.7749 4.58043H16.0797C16.1752 4.58043 16.2526 4.65785 16.2526 4.75336V6.80371C16.2526 6.89921 16.1752 6.97664 16.0797 6.97664H13.7749C13.6794 6.97664 13.602 7.05406 13.602 7.14957V11.557C13.602 12.0377 13.708 12.3699 13.9201 12.5537C14.1321 12.7374 14.4926 12.8293 15.0015 12.8293H16.2282C16.3237 12.8293 16.4011 12.9068 16.4011 13.0023V15.095C16.4011 15.1905 16.3237 15.268 16.2282 15.268L14.4714 15.268Z" fill="white"/>
<path d="M33.0452 11.7586C33.1073 11.6872 33.2121 11.6566 33.2957 11.7009L35.0852 12.6501C35.1735 12.697 35.2041 12.8069 35.1448 12.8873C34.6198 13.5996 32.5699 15.8271 29.2354 15.2203C27.1491 14.8406 25.285 13.1219 24.8548 10.8667C24.7146 10.2161 24.7109 9.52574 24.8324 8.85813C25.3753 5.87476 28.2112 3.91217 31.1945 4.45511C34.0945 4.98286 36.0343 7.7068 35.6147 10.6048C35.6038 10.6644 35.601 10.7184 35.5939 10.7686C35.5844 10.8359 35.5217 10.8761 35.4538 10.8761L27.8524 10.8766C27.7407 10.8766 27.6581 10.9811 27.6932 11.0872C27.9687 11.9201 28.6743 12.6179 29.6758 12.8002C31.2955 13.095 32.6341 12.232 33.0452 11.7586ZM27.7495 8.4622L27.7157 8.55077C27.6724 8.66375 27.7556 8.78507 27.8766 8.78548L32.586 8.80174C32.7015 8.80214 32.7849 8.69119 32.7436 8.58329C32.3668 7.59868 31.4567 6.8595 30.4279 6.77271C29.307 6.65493 28.1841 7.37738 27.7495 8.4622Z" fill="white"/>
<path d="M17.2141 15.2709C17.1186 15.2709 17.0412 15.1935 17.0412 15.098V13.0469C17.0412 13.0043 17.0569 12.9632 17.0854 12.9315L22.1638 7.26815C22.2637 7.15679 22.1847 6.97976 22.0351 6.97976L17.2212 6.97976C17.1257 6.97976 17.0483 6.90234 17.0483 6.80683V4.75632C17.0483 4.66081 17.1257 4.58339 17.2212 4.58339L25.5413 4.58339C25.6368 4.58339 25.7142 4.66081 25.7142 4.75632V6.91245C25.7142 6.95574 25.698 6.99746 25.6687 7.02936L20.5516 12.6061C20.4498 12.717 20.5285 12.8959 20.679 12.8959H25.5342C25.6297 12.8959 25.7071 12.9733 25.7071 13.0688V15.098C25.7071 15.1935 25.6297 15.2709 25.5342 15.2709H17.2141Z" fill="white"/>
<path d="M1.63611 15.2679C1.5406 15.2679 1.46317 15.1905 1.46317 15.095L1.46317 7.14952C1.46317 7.05401 1.38575 6.97658 1.29024 6.97658H0.172933C0.0774245 6.97658 -8.34958e-09 6.89916 0 6.80365L1.79247e-07 4.7533C1.87597e-07 4.65779 0.0774247 4.58037 0.172933 4.58037H1.29024C1.38575 4.58037 1.46317 4.50295 1.46317 4.40744L1.46317 3.62613C1.46317 2.7355 1.61161 2.02865 1.90849 1.50558C2.20536 0.982517 2.62947 0.60082 3.18081 0.360492C3.74629 0.120164 4.40366 -6.55022e-08 5.15292 0L6.14628 8.68423e-08C6.24179 9.51919e-08 6.31921 0.0774247 6.31921 0.172933V2.26569C6.31921 2.3612 6.24179 2.43862 6.14628 2.43862L5.57703 2.43862C5.13878 2.43862 4.8207 2.53051 4.62278 2.71429C4.42486 2.88394 4.32591 3.18081 4.32591 3.60492V4.40744C4.32591 4.50295 4.40333 4.58037 4.49884 4.58037L9.44467 4.58037C9.54018 4.58037 9.6176 4.6578 9.6176 4.7533V15.095C9.6176 15.1905 9.54018 15.2679 9.44467 15.2679H6.9278C6.83229 15.2679 6.75487 15.1905 6.75487 15.095L6.75487 7.14952C6.75487 7.05401 6.67745 6.97658 6.58194 6.97658L4.49884 6.97658C4.40333 6.97658 4.3259 7.05401 4.3259 7.14952L4.3259 15.095C4.3259 15.1905 4.24848 15.2679 4.15297 15.2679H1.63611Z" fill="white"/>
<path d="M63.9822 14.8156C64.5457 14.8633 65.0404 14.9725 65.4663 15.143C65.8987 15.3067 66.2361 15.5489 66.4786 15.8694C66.721 16.1969 66.8422 16.6232 66.8422 17.1484C66.8422 17.7282 66.6522 18.2398 66.2722 18.6832C65.8921 19.1334 65.3156 19.4847 64.5424 19.737C63.7693 19.9894 62.7963 20.1156 61.6235 20.1156C59.9658 20.1156 58.7144 19.8632 57.8692 19.3585C57.024 18.8605 56.6014 18.1784 56.6014 17.3121C56.6014 17.0393 56.6309 16.7971 56.6898 16.5857C56.7554 16.381 56.8274 16.2139 56.9061 16.0843L58.4982 16.3299C58.4458 16.4049 58.3934 16.5175 58.3409 16.6675C58.2951 16.8244 58.2721 17.0052 58.2721 17.2098C58.2721 17.7555 58.5703 18.1375 59.1665 18.3558C59.7627 18.5809 60.6079 18.6934 61.7021 18.6934C62.5211 18.6934 63.1927 18.6354 63.7169 18.5195C64.241 18.4035 64.6309 18.2364 64.8864 18.0181C65.1419 17.7998 65.2697 17.544 65.2697 17.2507C65.2697 16.8074 65.0895 16.5311 64.7292 16.422C64.3754 16.3196 63.9364 16.248 63.4122 16.2071L59.4417 15.9001C58.7799 15.8456 58.2394 15.6341 57.8201 15.2658C57.4073 14.8906 57.2009 14.437 57.2009 13.905C57.2009 13.5775 57.2762 13.2672 57.4269 12.9739C57.5842 12.6806 57.7644 12.435 57.9675 12.2372C58.1771 12.0325 58.3639 11.9098 58.5277 11.8688L59.8446 12.493C59.6808 12.5203 59.4777 12.6396 59.2353 12.8511C58.9994 13.0557 58.8815 13.2979 58.8815 13.5775C58.8815 13.8299 58.9765 14.038 59.1665 14.2017C59.3565 14.3586 59.7332 14.4609 60.2967 14.5086L63.9822 14.8156ZM65.427 4.61454L66.9994 4.61454L66.3508 8.8914C66.2329 9.68948 65.9872 10.4125 65.6137 11.0605C65.2402 11.7017 64.7292 12.2133 64.0805 12.5953C63.4384 12.9705 62.6423 13.158 61.6923 13.158C60.7029 13.158 59.8577 12.9705 59.1567 12.5953C58.4556 12.2201 57.9183 11.7085 57.5449 11.0605C57.1714 10.4057 56.9847 9.66901 56.9847 8.85048C56.9847 8.01829 57.178 7.27138 57.5645 6.60972C57.9577 5.94125 58.5015 5.41602 59.196 5.03404C59.8905 4.64523 60.6866 4.45083 61.5842 4.45083C62.3901 4.45083 63.0944 4.59748 63.6972 4.89079C64.3 5.17728 64.775 5.5388 65.1223 5.97536C65.4761 6.41191 65.6727 6.85188 65.712 7.29525L65.083 7.33618L65.427 4.61454ZM61.6825 11.6028C62.318 11.6028 62.8618 11.4937 63.3139 11.2754C63.7726 11.0571 64.1231 10.7399 64.3655 10.3238C64.6145 9.90776 64.739 9.40299 64.739 8.80955C64.739 8.23657 64.6145 7.74204 64.3655 7.32595C64.1231 6.90304 63.7726 6.57903 63.3139 6.35393C62.8618 6.12201 62.3213 6.00605 61.6923 6.00605C61.0895 6.00605 60.5555 6.12542 60.0903 6.36416C59.6317 6.59608 59.2713 6.9235 59.0093 7.34641C58.7537 7.76932 58.626 8.26727 58.626 8.84024C58.626 9.42004 58.7472 9.91799 58.9896 10.3341C59.2386 10.7433 59.5891 11.0571 60.0412 11.2754C60.4998 11.4937 61.0469 11.6028 61.6825 11.6028Z" fill="#FE572A"/>
<path d="M54.3059 15.4806L54.3059 10.2727C54.3059 9.95891 54.3059 9.70312 54.3059 9.50531C54.3059 9.30067 54.3059 9.10627 54.3059 8.9221C54.3059 8.35594 54.2142 7.86141 54.0307 7.4385C53.8473 7.01558 53.559 6.68817 53.1658 6.45625C52.7727 6.22433 52.2584 6.10837 51.6228 6.10837C51.0659 6.10837 50.5483 6.25844 50.07 6.55857C49.5983 6.85188 49.2183 7.25091 48.93 7.75568C48.6482 8.25362 48.5074 8.81296 48.5074 9.43368L47.554 9.05511C47.554 8.20247 47.7539 7.42826 48.1535 6.73251C48.5598 6.03675 49.097 5.48423 49.7653 5.07496C50.4402 4.65887 51.174 4.45083 51.9668 4.45083C52.7727 4.45083 53.4771 4.61113 54.0798 4.93172C54.6826 5.25232 55.1478 5.71274 55.4754 6.31301C55.8096 6.90645 55.9767 7.62267 55.9767 8.46167C55.9767 8.7618 55.9767 9.08922 55.9767 9.44392C55.9767 9.79862 55.9767 10.1294 55.9767 10.4364L55.9767 15.4806H54.3059ZM46.8366 15.4806L46.8366 4.61454H48.5074L48.5074 15.4806H46.8366Z" fill="#FE572A"/>
<path d="M43.6523 15.4818L43.6523 4.61571L45.3034 4.61571L45.3034 15.4818H43.6523ZM44.4877 2.11917C44.1797 2.11917 43.9111 2.03049 43.6818 1.85314C43.459 1.66897 43.3476 1.42 43.3476 1.10622C43.3476 0.799273 43.459 0.557122 43.6818 0.379772C43.9111 0.195601 44.1797 0.103516 44.4877 0.103516C44.7956 0.103516 45.061 0.195601 45.2837 0.379772C45.5065 0.557122 45.6179 0.799273 45.6179 1.10623C45.6179 1.42 45.5065 1.66897 45.2837 1.85314C45.061 2.03049 44.7956 2.11917 44.4877 2.11917Z" fill="#FE572A"/>
<path d="M37.2197 15.4806L37.2197 4.61454H38.8905L38.8905 7.95008L38.3401 7.74545C38.3794 7.343 38.4777 6.94737 38.635 6.55857C38.7922 6.16294 39.0084 5.80824 39.2836 5.49446C39.5654 5.17387 39.9159 4.92149 40.3352 4.73732C40.7545 4.54632 41.2459 4.45083 41.8094 4.45083C42.2287 4.45083 42.5695 4.48834 42.8315 4.56338C43.1002 4.63159 43.2672 4.68616 43.3328 4.72709L42.9003 6.43579C42.8348 6.38804 42.7005 6.32665 42.4974 6.25161C42.3008 6.17658 42.0191 6.13906 41.6522 6.13906C41.1084 6.13906 40.6563 6.24138 40.2959 6.44602C39.9421 6.65065 39.6604 6.9235 39.4507 7.26456C39.2476 7.59879 39.1034 7.96372 39.0183 8.35935C38.9331 8.75498 38.8905 9.1472 38.8905 9.536L38.8905 15.4806H37.2197Z" fill="#FE572A"/>
</svg>
);
const iconAed = (
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
<path d="M1.32445 0.0149494C1.33045 0.023919 1.36345 0.0642824 1.39495 0.103151C1.62444 0.37523 1.79693 0.817732 1.88993 1.37534C1.95143 1.74161 1.95443 1.85672 1.95443 3.25299V4.55359H1.32745C0.754472 4.55359 0.688474 4.5506 0.575979 4.52817C0.398985 4.4908 0.215992 4.39064 0.0929965 4.26207C-0.00449983 4.15892 -0.00149994 4.15294 0.00449983 4.46539C0.0119996 4.72401 0.0149994 4.75241 0.052498 4.89294C0.112496 5.11569 0.194993 5.28162 0.319488 5.42962C0.488982 5.63294 0.661475 5.74655 0.907466 5.82279C0.959964 5.83774 1.07096 5.84372 1.46395 5.84671L1.95443 5.85419V7.1503L0.568479 7.14133L0.448483 7.09349C0.305989 7.03668 0.241491 6.99483 0.101996 6.87075L0 6.77955L0.00599978 7.06509C0.0134995 7.32969 0.0149994 7.35959 0.052498 7.49414C0.182993 7.96953 0.497981 8.30888 0.913466 8.4195C1.01696 8.44791 1.05746 8.4494 1.49094 8.45538L1.95443 8.46136V9.80083C1.95443 10.6096 1.94993 11.2061 1.94243 11.3077C1.93493 11.4004 1.91093 11.5738 1.88993 11.6949C1.79243 12.2525 1.61694 12.6726 1.36495 12.9447L1.31395 13H3.85036C5.3668 13 6.50076 12.994 6.66725 12.9865C6.95974 12.9716 7.61222 12.9073 7.75921 12.8759C7.80571 12.867 7.8927 12.8535 7.9497 12.8445C8.0712 12.8266 8.27219 12.7847 8.56168 12.7115C8.96966 12.6098 9.34165 12.4828 9.70614 12.3213C9.82013 12.2705 10.1471 12.1045 10.2341 12.0522C10.2806 12.0253 10.3361 11.9924 10.3571 11.9819C10.4156 11.9506 10.5131 11.8878 10.6556 11.7861C10.7261 11.7353 10.7966 11.6859 10.8116 11.6755C10.8746 11.6336 11.0921 11.4527 11.1911 11.3615C11.5676 11.0162 11.8826 10.632 12.127 10.2209C12.1615 10.1611 12.2065 10.0864 12.226 10.055C12.2755 9.97125 12.4795 9.55267 12.499 9.48988C12.508 9.46148 12.52 9.43158 12.526 9.4256C12.565 9.37477 12.79 8.66916 12.817 8.51518C12.826 8.46585 12.8305 8.45837 12.868 8.4509C12.892 8.44641 13.2415 8.44641 13.645 8.4494C14.452 8.45538 14.452 8.45538 14.6305 8.5376C14.7309 8.58395 14.7609 8.60488 14.8719 8.70504C15.0174 8.8351 15.0039 8.85603 14.9949 8.53013C14.9889 8.33878 14.9814 8.22068 14.9679 8.17284C14.9169 7.98896 14.9049 7.95009 14.8599 7.8574C14.7129 7.53749 14.467 7.30876 14.152 7.19963L14.029 7.15478L13.528 7.1488L13.0285 7.14133L13.0345 6.96642C13.0405 6.7362 13.0405 6.28024 13.033 6.04554L13.027 5.85718L13.696 5.85419C14.269 5.8512 14.3755 5.85419 14.4385 5.87063C14.6275 5.92295 14.7549 5.99471 14.9109 6.13673L14.9979 6.21746V5.99621C14.9979 5.7331 14.9844 5.61649 14.9304 5.44308C14.8239 5.09177 14.614 4.83015 14.314 4.6687C14.119 4.56405 14.107 4.56106 13.4365 4.55658C13.0435 4.55359 12.838 4.54761 12.8275 4.53864C12.8185 4.52967 12.811 4.51472 12.811 4.50276C12.811 4.4908 12.7885 4.39662 12.7585 4.29496C12.4075 3.05865 11.7521 2.07647 10.7936 1.34844C10.6631 1.24828 10.3436 1.03749 10.2146 0.965731C10.1651 0.937328 10.1111 0.907429 10.0976 0.898459C10.0346 0.864075 9.67314 0.687672 9.58314 0.650299C9.52914 0.62638 9.45865 0.596481 9.42715 0.584522C8.89767 0.355796 8.0097 0.139029 7.33173 0.0717571C7.22073 0.0612926 7.07374 0.0448482 7.00624 0.0388684C6.70025 0.00448482 6.27576 0 3.86536 0C1.82843 0 1.31695 0.00448482 1.32445 0.0149494ZM6.28476 0.662259C6.79175 0.692157 7.10373 0.731026 7.46822 0.819227C8.58118 1.08234 9.36415 1.63845 9.93263 2.56831C9.98513 2.65501 10.2071 3.10649 10.2401 3.19768C10.3976 3.62075 10.4741 3.8719 10.5416 4.20377C10.5581 4.2845 10.5806 4.39213 10.5911 4.44296C10.6016 4.4923 10.6061 4.53864 10.6016 4.54312C10.5941 4.5491 9.08816 4.55209 7.25223 4.5506L3.91485 4.54761L3.91035 2.62661C3.90885 1.57118 3.91035 0.693652 3.91485 0.677208L3.92085 0.648804H4.98731C5.57229 0.648804 6.15727 0.654784 6.28476 0.662259ZM10.7471 5.89903C10.7576 5.96332 10.7576 7.05462 10.7471 7.10844L10.7381 7.1488L3.91485 7.14133L3.91185 6.50747C3.90885 6.15915 3.91185 5.86914 3.91485 5.86316C3.91935 5.85568 5.3728 5.8512 7.33023 5.8512H10.7381L10.7471 5.89903ZM10.5941 8.46585C10.6016 8.48827 10.5656 8.67215 10.4921 8.97114C10.4081 9.3075 10.2941 9.64685 10.1786 9.898C10.1216 10.0266 9.97913 10.3046 9.94463 10.3569C9.92813 10.3809 9.88013 10.4571 9.83813 10.5244C9.56814 10.946 9.18266 11.3302 8.74317 11.6142C8.58268 11.7158 8.25269 11.8893 8.1642 11.9162C8.1462 11.9207 8.1267 11.9296 8.1192 11.9356C8.1087 11.9446 7.9722 11.9954 7.81321 12.0522C7.52072 12.1554 6.96424 12.2675 6.51726 12.3138C6.22777 12.3422 6.18127 12.3437 5.06681 12.3437H3.91335V8.46435L7.22673 8.45837C9.04916 8.45538 10.5506 8.4509 10.5626 8.44791C10.5761 8.44641 10.5896 8.45538 10.5941 8.46585Z" fill="white"/>
</svg>
);
interface BentoCard {
  id: number;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  bgImage: string;
  key: string;
}

export const SevenSignalsSection: React.FC = () => {
  // Activity state or interactivity values
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scoreVal, setScoreVal] = useState(0);

  // Smooth numeric count up overlay for Fitze Score card
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredCard === 8) {
      setScoreVal(0);
      let count = 0;
      interval = setInterval(() => {
        if (count < 88) {
          count += 2;
          setScoreVal(count);
        } else {
          setScoreVal(88);
          clearInterval(interval);
        }
      }, 15);
    } else {
      setScoreVal(0);
    }
    return () => clearInterval(interval);
  }, [hoveredCard]);

  const cards: BentoCard[] = [
    {
      id: 1,
      badge: 'Activity Tracking',
      badgeClass: 'badge-activity',
      title: 'Move More, Live Better.',
      description: 'Understand how much you move each day and how your activity shapes your health.',
      bgImage: sevenSignals1,
      key: 'activity',
    },
    {
      id: 2,
      badge: 'Sleep Analysis',
      badgeClass: 'badge-sleep',
      title: 'Better Nights. Better Days.',
      description: 'See how long you sleep, how deeply you rest, and how your nights shape your days, and how your activity shapes your health.',
      bgImage: sevenSignals2,
      key: 'sleep',
    },
    {
      id: 3,
      badge: 'Stress Insights',
      badgeClass: 'badge-stress',
      title: 'Know When to Slow Down.',
      description: 'Understand how your body responds to pressure and when it needs recovery.',
      bgImage:sevenSignals3,
      key: 'stress',
    },
    {
      id: 4,
      badge: 'Heart Rate',
      badgeClass: 'badge-heart',
      title: 'Understand Your Effort.',
      description: 'See how your heart responds to activity, rest and recovery. Two powerful signals that reveal how ready your body is for the day ahead.',
      bgImage: sevenSignals4,
      key: 'heart',
    },
    {
      id: 5,
      badge: 'HRV',
      badgeClass: 'badge-hrv',
      title: 'Your Readiness, Revealed.',
      description: 'See how your heart responds to activity, rest and recovery. Two powerful signals that reveal how ready your body is for the day ahead.',
      bgImage:sevenSignals5,
      key: 'hrv',
    },
    {
      id: 6,
      badge: 'Blood Oxygen',
      badgeClass: 'badge-oxygen',
      title: 'Know When Energy Drops.',
      description: 'Track your blood oxygen levels and understand how your body supports energy and recovery.',
      bgImage:sevenSignals6,
      key: 'oxygen',
    },
    {
      id: 7,
      badge: 'Skin Temperature',
      badgeClass: 'badge-temp',
      title: "Your Body's Subtle Signals.",
      description: 'Small temperature changes can reflect shifts in recovery, strain or rest. Your body often signals before you feel it.',
      bgImage: sevenSignals7,
      key: 'temp',
    },
  ];

  return (
    <section className="seven-signals-section" id="seven-signals">
      <Container className="seven-signals-container">
        {/* Elegant Section Header */}
        <header className="seven-signals-header text-center mb-5">
          <span className="track-matters-badge">TRACK WHAT MATTERS</span>
          <h2 className="seven-signals-title">
            Seven Signals. <span className="highlight-orange">One Ring.</span>
          </h2>
          <p className="seven-signals-sub">
            Your body speaks, fitze Ring helps you listen.
          </p>
        </header>

        {/* Bento Staggered Master Container */}
        <div className="bento-staggered-grid">
          
          {/* Row 1: Activity (Left: 58%) & Sleep (Right: 42%) */}
          <div className="bento-row row-ratio-58-42">
            
            {/* Card 1: Activity Tracking */}
            <div 
              className={`bento-card card-activity ${hoveredCard === 1 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[0].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              {/* Default Content */}
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[0].badgeClass}`}>{cards[0].badge}</span>
              </div>
              
              <div className="card-content-wrap">
                <h3 className="bento-card-title">{cards[0].title}</h3>
                <p className="bento-card-desc desc-activity">{cards[0].description}</p>
              </div>

              {/* Hover Overlay: Circular Steps Progress Arch with Stats */}
              <div className="hover-overlay-container overlay-activity">
                <div className="steps-arch-widget">
                  {/* Step Goal label positioned exactly on top of the circle curve */}
                  <div className="steps-goal-label text-center" style={{ fontSize: '0.58rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.8px', marginBottom: '-4px' }}>
                    STEP GOAL: 10,975
                  </div>
                  <div className="steps-svg-box">
                    <svg viewBox="0 0 200 120" className="radial-arch-svg">
                      <line x1="10" y1="110" x2="190" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                      {/* Background Arch Track */}
                      <path 
                        d="M 30,110 A 70,70 0 0,1 170,110" 
                        fill="none" 
                        stroke="rgba(255, 255, 255, 0.12)" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                      />
                      {/* Colored Active Arch Fill */}
                      <path 
                        d="M 30,110 A 70,70 0 0,1 170,110" 
                        fill="none" 
                        stroke="url(#orange-grad)" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        strokeDasharray="219.9" 
                        strokeDashoffset="22" /* 90% progress */
                        className="arch-svg-fill"
                      />
                      <defs>
                        <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FE5226" />
                          <stop offset="100%" stopColor="#FF8F3D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="arch-text-content">
                      <span className="arch-main">10,328</span>
                      <span className="arch-small">Total Steps</span>
                    </div>
                  </div>

                  {/* Below Arch Metric Row */}
                  <div className="arch-metrics-footer">
                    <div className="metric-col">
                      <span className="metric-icon-wrap"><MapPin size={15} color="#FE5226" /></span>
                      <div className="metric-info">
                        <span className="metric-val">6.2 kms</span>
                        <span className="metric-lbl">Distance</span>
                      </div>
                    </div>
                    <div className="metric-col">
                      <span className="metric-icon-wrap"><Flame size={15} color="#FF8F3D" /></span>
                      <div className="metric-info">
                        <span className="metric-val">1,200</span>
                        <span className="metric-lbl">Calories</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Sleep Analysis */}
            <div 
              className={`bento-card card-sleep ${hoveredCard === 2 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[1].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar" style={{ minHeight: '1px' }}>
                {/* Empty to allocate space to top right diagram */}
              </div>

              <div className="card-content-wrap">
                <span className={`bento-badge ${cards[1].badgeClass}`} style={{ width: 'fit-content', marginBottom: '8px' }}>{cards[1].badge}</span>
                <h3 className="bento-card-title">{cards[1].title}</h3>
                <p className="bento-card-desc desc-sleep">{cards[1].description}</p>
              </div>

              {/* Hover Overlay: Sleep Hypnogram visual stage bars */}
              <div className="hover-overlay-container overlay-sleep">
                <div className="sleep-hypnogram">
                  <div className="hypnogram-bars">
                    {/* Simulated Sleep stages blocks (Deep, light, REM, Awake) */}
                    <div className="hypno-col awake" style={{ height: '70%', animationDelay: '0.05s' }}></div>
                    <div className="hypno-col rem" style={{ height: '45%', animationDelay: '0.1s' }}></div>
                    <div className="hypno-col light" style={{ height: '30%', animationDelay: '0.15s' }}></div>
                    <div className="hypno-col deep" style={{ height: '15%', animationDelay: '0.2s' }}></div>
                    <div className="hypno-col light" style={{ height: '35%', animationDelay: '0.25s' }}></div>
                    <div className="hypno-col deep" style={{ height: '18%', animationDelay: '0.3s' }}></div>
                    <div className="hypno-col rem" style={{ height: '50%', animationDelay: '0.35s' }}></div>
                    <div className="hypno-col light" style={{ height: '32%', animationDelay: '0.4s' }}></div>
                    <div className="hypno-col awake" style={{ height: '75%', animationDelay: '0.45s' }}></div>
                    <div className="hypno-col light" style={{ height: '28%', animationDelay: '0.5s' }}></div>
                    <div className="hypno-col deep" style={{ height: '12%', animationDelay: '0.55s' }}></div>
                    <div className="hypno-col rem" style={{ height: '48%', animationDelay: '0.6s' }}></div>
                    <div className="hypno-col awake" style={{ height: '65%', animationDelay: '0.65s' }}></div>
                  </div>
                  
                  {/* Overlaid line trend graph inside sleep blocks */}
                  <svg className="sleep-trend-svg" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path 
                      d="M10,80 Q 40,55 70,75 T 130,85 T 190,60 T 250,70 T 290,40" 
                      fill="none" 
                      stroke="#A78BFA" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    <circle cx="190" cy="60" r="4.5" fill="#ffffff" stroke="#8B5CF6" strokeWidth="2.5" className="pulsing-hypno-dot" />
                  </svg>

                  <div className="hypno-timeline">
                    <span className="timeline-stamp">22:32</span>
                    <span className="timeline-stamp text-center" style={{ flex: 1, color: '#A78BFA', fontWeight: 500 }}>RESTORATIVE FLOW</span>
                    <span className="timeline-stamp text-end">07:01</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Stress (Left: 40%) & Heart Rate (Right: 60%) */}
          <div className="bento-row row-ratio-40-60">
            
            {/* Card 3: Stress Insights */}
            <div 
              className={`bento-card card-stress ${hoveredCard === 3 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[2].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[2].badgeClass}`}>{cards[2].badge}</span>
              </div>

              <div className="card-content-wrap">
                <h3 className="bento-card-title">{cards[2].title}</h3>
                <p className="bento-card-desc desc-stress">{cards[2].description}</p>
              </div>

              {/* Hover Overlay: Stress Timeline Equalizer representation */}
              <div className="hover-overlay-container overlay-stress">
                <div className="equalizer-stress-widget">
                  <div className="equalizer-bars-group">
                    {/* Series of bars with colored hints based on diurnal cycle in image.png */}
                    <div className="eq-bar state-calm" style={{ height: '42%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '35%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '48%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '22%' }}></div>
                    <div className="eq-bar state-normal" style={{ height: '55%' }}></div>
                    <div className="eq-bar state-normal" style={{ height: '62%' }}></div>
                    <div className="eq-bar state-stress" style={{ height: '78%' }}></div>
                    <div className="eq-bar state-stress" style={{ height: '85%' }}></div>
                    <div className="eq-bar state-stress" style={{ height: '70%' }}></div>
                    <div className="eq-bar state-normal" style={{ height: '45%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '28%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '18%' }}></div>
                  </div>
                  
                  <div className="equalizer-axis">
                    <span className="axis-point">00:00</span>
                    <span className="axis-point">12:00</span>
                    <span className="axis-point">18:00</span>
                    <span className="axis-point text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Heart Rate */}
            <div 
              className={`bento-card card-heart ${hoveredCard === 4 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[3].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[3].badgeClass}`}>{cards[3].badge}</span>
              </div>

              <div className="card-content-wrap card-content-heart">
                <h3 className="bento-card-title">{cards[3].title}</h3>
                <p className="bento-card-desc desc-heart">{cards[3].description}</p>
              </div>

              {/* Hover Overlay: Heart Rate magenta pulse wave line graph */}
              <div className="hover-overlay-container overlay-heart">
                <div className="cardiac-wave-widget">
                  <div className="cardiac-viewport">
                    <svg className="cardiac-curve-svg" viewBox="0 0 450 140" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="magenta-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.45)" />
                          <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Grid guideline reference */}
                      <line x1="0" y1="35" x2="450" y2="35" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="5,5" />
                      <line x1="0" y1="70" x2="450" y2="70" stroke="rgba(255, 255, 255, 0.08)" />
                      <line x1="0" y1="105" x2="450" y2="105" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="5,5" />
                      
                      {/* Gradient Fill under path */}
                      <path 
                        d="M 0,110 L 0,100 Q 30,95 50,110 T 100,60 T 140,115 T 180,95 T 210,105 T 250,55 T 280,120 T 320,75 T 380,100 T 430,90 L 450,90 L 450,140 L 0,140 Z" 
                        fill="url(#magenta-fade)" 
                      />
                      
                      {/* Glowing stroke path representing HRV pulse line */}
                      <path 
                        d="M 0,100 Q 30,95 50,110 T 100,60 T 140,115 T 180,95 T 210,105 T 250,55 T 280,120 T 320,75 T 380,100 T 430,90 L 450,90" 
                        fill="none" 
                        stroke="#EC4899" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        className="cardiac-live-path"
                      />
                      <circle cx="250" cy="55" r="5" fill="#ffffff" stroke="#EC4899" strokeWidth="3" className="cardiac-pulse-node" />
                    </svg>
                    
                    {/* Ticks on the right */}
                    <div className="cardiac-ticks">
                      <span className="tick-node">140</span>
                      <span className="tick-node">70</span>
                      <span className="tick-node">0</span>
                    </div>
                  </div>

                  <div className="cardiac-timeline">
                    <span className="timeline-point">00:00</span>
                    <span className="timeline-point">06:00</span>
                    <span className="timeline-point font-bold text-pink-400">NORMAL FLOW</span>
                    <span className="timeline-point">12:00</span>
                    <span className="timeline-point">18:00</span>
                    <span className="timeline-point text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 3: HRV (Left: 58%) & Blood Oxygen (Right: 42%) */}
          <div className="bento-row row-ratio-58-42">
            
            {/* Card 5: HRV */}
            <div 
              className={`bento-card card-hrv ${hoveredCard === 5 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[4].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[4].badgeClass}`}>{cards[4].badge}</span>
              </div>

              <div className="card-content-wrap">
                <h3 className="bento-card-title">{cards[4].title}</h3>
                <p className="bento-card-desc desc-hrv">{cards[4].description}</p>
              </div>

              {/* Hover Overlay: Cyan vertical bars for Heart Rate Variability */}
              <div className="hover-overlay-container overlay-hrv">
                <div className="hrv-chart-widget">
                  <div className="hrv-viewport">
                    <div className="hrv-bars-grid">
                      <div className="hrv-column" style={{ height: '45%' }}></div>
                      <div className="hrv-column" style={{ height: '52%' }}></div>
                      <div className="hrv-column" style={{ height: '38%' }}></div>
                      <div className="hrv-column" style={{ height: '60%' }}></div>
                      <div className="hrv-column active-pulse" style={{ height: '75%' }}></div>
                      <div className="hrv-column" style={{ height: '65%' }}></div>
                      <div className="hrv-column" style={{ height: '82%' }}></div>
                      <div className="hrv-column" style={{ height: '70%' }}></div>
                      <div className="hrv-column" style={{ height: '58%' }}></div>
                      <div className="hrv-column" style={{ height: '48%' }}></div>
                      <div className="hrv-column" style={{ height: '66%' }}></div>
                      <div className="hrv-column" style={{ height: '78%' }}></div>
                      <div className="hrv-column" style={{ height: '90%' }}></div>
                      <div className="hrv-column" style={{ height: '80%' }}></div>
                      <div className="hrv-column" style={{ height: '55%' }}></div>
                      <div className="hrv-column" style={{ height: '42%' }}></div>
                    </div>

                    <div className="hrv-ticks-legend">
                      <span className="legend-val">100</span>
                      <span className="legend-val">95</span>
                      <span className="legend-val">90</span>
                    </div>
                  </div>

                  <div className="hrv-timeline">
                    <span className="timeline-point">00:00</span>
                    <span className="timeline-point">06:00</span>
                    <span className="timeline-point text-center" style={{ flex: 1, color: '#2DD4BF' }}>92ms AVG VARIABILITY</span>
                    <span className="timeline-point">12:00</span>
                    <span className="timeline-point">18:00</span>
                    <span className="timeline-point text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Blood Oxygen */}
            <div 
              className={`bento-card card-oxygen ${hoveredCard === 6 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[5].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar col-direction">
                <span className={`bento-badge ${cards[5].badgeClass}`}>{cards[5].badge}</span>
                <h3 className="bento-card-title mt-2">{cards[5].title}</h3>
              </div>

              <div className="card-content-wrap">
                <p className="bento-card-desc desc-oxygen">{cards[5].description}</p>
              </div>

              {/* Hover Overlay: Green rounded columns illustrating blood oxygen */}
              <div className="hover-overlay-container overlay-oxygen">
                <div className="oxygen-chart-widget">
                  <div className="oxygen-viewport">
                    <div className="oxygen-bars-grid">
                      <div className="oxy-col" style={{ height: '88%' }}></div>
                      <div className="oxy-col" style={{ height: '92%' }}></div>
                      <div className="oxy-col" style={{ height: '90%' }}></div>
                      <div className="oxy-col" style={{ height: '95%' }}></div>
                      <div className="oxy-col peak" style={{ height: '99%' }}></div>
                      <div className="oxy-col" style={{ height: '97%' }}></div>
                      <div className="oxy-col" style={{ height: '94%' }}></div>
                      <div className="oxy-col" style={{ height: '91%' }}></div>
                      <div className="oxy-col" style={{ height: '89%' }}></div>
                      <div className="oxy-col" style={{ height: '93%' }}></div>
                      <div className="oxy-col" style={{ height: '96%' }}></div>
                    </div>

                    <div className="oxygen-ticks">
                      <span className="tick">100</span>
                      <span className="tick">95</span>
                      <span className="tick">90</span>
                    </div>
                  </div>

                  <div className="oxygen-timeline">
                    <span className="timeline-col">00:00</span>
                    <span className="timeline-col">06:00</span>
                    <span className="timeline-col">12:00</span>
                    <span className="timeline-col">18:00</span>
                    <span className="timeline-col text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 4: Skin Temperature (Left: 50%) & Fitze Score White (Right: 50%) */}
          <div className="bento-row row-ratio-50-50">
            
            {/* Card 7: Skin Temperature */}
            <div 
              className={`bento-card card-temp ${hoveredCard === 7 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(7)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[6].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar col-direction">
                <span className={`bento-badge ${cards[6].badgeClass}`}>{cards[6].badge}</span>
                <h3 className="bento-card-title mt-2">{cards[6].title}</h3>
              </div>

              <div className="card-content-wrap">
                <p className="bento-card-desc desc-temp">{cards[6].description}</p>
              </div>

              {/* Hover Overlay: Temperature cool wave chart */}
              <div className="hover-overlay-container overlay-temp">
                <div className="temp-chart-widget">
                  <div className="temp-viewport">
                    <div className="temp-bars-trend">
                      <div className="temp-bar cool" style={{ height: '40%' }}></div>
                      <div className="temp-bar cool" style={{ height: '48%' }}></div>
                      <div className="temp-bar neutral" style={{ height: '50%' }}></div>
                      <div className="temp-bar warm" style={{ height: '62%' }}></div>
                      <div className="temp-bar neutral" style={{ height: '51%' }}></div>
                      <div className="temp-bar cool" style={{ height: '35%' }}></div>
                      <div className="temp-bar cool" style={{ height: '28%' }}></div>
                      <div className="temp-bar warm" style={{ height: '58%' }}></div>
                      <div className="temp-bar warm" style={{ height: '65%' }}></div>
                      <div className="temp-bar neutral" style={{ height: '50%' }}></div>
                      <div className="temp-bar cool" style={{ height: '44%' }}></div>
                    </div>

                    <div className="temp-ticks">
                      <span className="tick">+0.5°</span>
                      <span className="tick">0.0°</span>
                      <span className="tick">-0.5°</span>
                    </div>
                  </div>

                  <div className="temp-timeline">
                    <span className="timeline-col">00:00</span>
                    <span className="timeline-col">08:00</span>
                    <span className="timeline-col">12:00</span>
                    <span className="timeline-col">18:00</span>
                    <span className="timeline-col text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: Fitze Score (Clean White Card Layout) */}
            <div 
              className={`bento-card card-fitze-score ${hoveredCard === 8 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(8)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="fitze-card-content">
                <div className="fitze-left-text">
                  <span className="fitze-badge">FITZE SCORE</span>
                  
                  <div className="fitze-text-body">
                    <h3 className="fitze-main-heading">Your day,</h3>
                    <h2 className="fitze-main-heading bold-sub">Simplified.</h2>
                    <p className="fitze-description">
                      Your daily snapshot of how balanced, active, and in control your body is.
                    </p>
                  </div>
                </div>
                 
                {/* Concentric Signal Rings with exact Red, Purple, Teal Color dots representing sleep, activity, readiness */}
                <div className="fitze-rings-container">
<video
  src={VideoPage}
  autoPlay
  muted
  loop
  playsInline
  style={{ maxWidth: "100%" }}
>
</video>                  
                </div>

                 


              </div>
              
            </div>

          </div>
 <div className="cta-btn-wrapper text-center">
  <a href="javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" className="premium-dark-btn">
    Get Your &nbsp;{fitzePro}&nbsp;{iconAed}&nbsp;699</a></div>
        </div>
      </Container>
    </section>
  );
};

export default SevenSignalsSection;
