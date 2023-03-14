import Link from 'next/link';
import Head from 'next/head';
import Testimonial from '../components/Testimonial';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Team = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>Team | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="items-center justify-between py-10 md:flex md:h-[400px] md:py-0">
                            <div className="heading relative mb-0 text-center ltr:md:text-left rtl:md:text-right">
                                <h6>Meet Our Team</h6>
                                <h4 className="!text-white">Creative Minds</h4>
                            </div>
                            <div className="relative mt-6 md:mt-0" data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                                <svg
                                    width="235"
                                    height="282"
                                    viewBox="0 0 235 282"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mx-auto w-[90%] rtl:rotate-y-180 sm:w-auto md:mx-auto"
                                >
                                    <path
                                        d="M131.638 259.384C138.586 259.864 139.448 249.37 132.522 248.656L66.1148 239.501C65.4091 239.351 64.6803 239.344 63.9715 239.479C63.2627 239.613 62.5881 239.889 61.9873 240.29C61.3865 240.689 60.8716 241.205 60.473 241.806C60.0742 242.407 59.7998 243.082 59.6656 243.791C59.5315 244.5 59.5405 245.229 59.6918 245.935C59.8433 246.64 60.1342 247.309 60.5474 247.9C60.9606 248.492 61.488 248.994 62.0984 249.379C62.7088 249.764 63.3899 250.023 64.1018 250.141C63.3604 250.1 62.6182 250.209 61.9202 250.462C61.2222 250.716 60.5829 251.108 60.0409 251.616C59.4989 252.123 59.0654 252.736 58.7667 253.415C58.468 254.095 58.3103 254.829 58.3031 255.571C58.304 256.893 58.7894 258.168 59.6674 259.155C60.5453 260.144 61.755 260.775 63.0673 260.931C62.3513 260.856 61.6273 260.924 60.9379 261.131C60.2484 261.339 59.6074 261.682 59.0523 262.141C58.4972 262.599 58.039 263.165 57.7048 263.801C57.3706 264.44 57.1669 265.138 57.1058 265.856C57.0446 266.573 57.1271 267.295 57.3486 267.981C57.5701 268.666 57.926 269.3 58.3955 269.845C58.865 270.392 59.4387 270.838 60.0831 271.159C60.7273 271.481 61.4292 271.671 62.1478 271.718L128.491 280.879C136.053 281.722 137.01 271.473 130.554 270.218C137.254 270.371 138.048 260.449 131.638 259.384Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M41.4318 101.209C58.429 97.8863 75.6804 96.0291 92.9955 95.6582C91.8577 103.06 91.4284 110.552 91.7134 118.035C91.0848 118.027 90.4561 118.019 89.8273 118.011L89.8178 118.011L89.8082 118.011C74.7303 117.816 59.5416 117.62 42.8317 120.415C40.038 114.398 39.5401 107.568 41.4318 101.209ZM48.4636 104.516C48.7261 104.253 48.8736 103.897 48.8736 103.526C48.8736 103.155 48.7261 102.799 48.4636 102.536C48.201 102.273 47.845 102.126 47.4736 102.126C47.1023 102.126 46.7463 102.273 46.4837 102.536C46.2212 102.799 46.0737 103.155 46.0737 103.526C46.0737 103.897 46.2212 104.253 46.4837 104.516C46.7463 104.778 47.1023 104.926 47.4736 104.926C47.845 104.926 48.201 104.778 48.4636 104.516ZM68.0234 113.268C68.0234 113.639 67.8759 113.995 67.6133 114.258C67.3508 114.52 66.9948 114.668 66.6234 114.668C66.2521 114.668 65.8961 114.52 65.6336 114.258C65.371 113.995 65.2235 113.639 65.2235 113.268C65.2235 112.897 65.371 112.541 65.6336 112.278C65.8961 112.016 66.2521 111.868 66.6234 111.868C66.9948 111.868 67.3508 112.016 67.6133 112.278C67.8759 112.541 68.0234 112.897 68.0234 113.268ZM88.5536 101.268C88.8162 101.005 88.9637 100.649 88.9637 100.278C88.9637 99.9068 88.8162 99.5506 88.5536 99.2882C88.2911 99.0256 87.9351 98.8781 87.5637 98.8781C87.1924 98.8781 86.8363 99.0256 86.5739 99.2882C86.3113 99.5506 86.1638 99.9068 86.1638 100.278C86.1638 100.649 86.3113 101.005 86.5739 101.268C86.8363 101.53 87.1924 101.678 87.5637 101.678C87.9351 101.678 88.2911 101.53 88.5536 101.268Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M118.5 93.5566C118.5 94.9566 119.341 95.7686 121.608 95.8246C123.366 95.8526 125.5 95.9366 127.852 96.05C123.457 102.608 119.963 109.726 117.465 117.214L98.3436 116.794C97.6303 110.984 98.5661 101.043 99.1556 95.6006L106.294 95.7686C107.197 95.8198 108.099 95.6474 108.92 95.2663C109.74 94.8854 110.454 94.3078 110.998 93.5846V93.5566H118.5ZM109.251 112.856C109.514 112.594 109.661 112.238 109.661 111.866C109.661 111.495 109.514 111.139 109.251 110.877C108.988 110.614 108.632 110.467 108.261 110.467C107.89 110.467 107.534 110.614 107.271 110.877C107.009 111.139 106.861 111.495 106.861 111.866C106.861 112.238 107.009 112.594 107.271 112.856C107.534 113.119 107.89 113.266 108.261 113.266C108.632 113.266 108.988 113.119 109.251 112.856Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M133.478 96.3594C146.301 97.1993 177.573 100.055 190.227 105.038C191.686 111.652 191.101 118.554 188.547 124.828C164.583 119.905 148.065 118.053 126.76 118.137L124.8 124.915C120.348 121.639 129.111 103.526 133.478 96.3594ZM140.934 102.665C141.197 102.402 141.344 102.046 141.344 101.675C141.344 101.304 141.197 100.948 140.934 100.685C140.672 100.422 140.315 100.275 139.944 100.275C139.573 100.275 139.216 100.422 138.954 100.685C138.691 100.948 138.544 101.304 138.544 101.675C138.544 102.046 138.691 102.402 138.954 102.665C139.216 102.927 139.573 103.075 139.944 103.075C140.315 103.075 140.672 102.927 140.934 102.665ZM162.035 115.757C162.035 116.128 161.888 116.484 161.626 116.747C161.363 117.009 161.007 117.157 160.635 117.157C160.264 117.157 159.907 117.009 159.645 116.747C159.383 116.484 159.235 116.128 159.235 115.757C159.235 115.386 159.383 115.029 159.645 114.767C159.907 114.504 160.264 114.357 160.635 114.357C161.007 114.357 161.363 114.504 161.626 114.767C161.888 115.029 162.035 115.386 162.035 115.757ZM185.31 109.047C185.572 108.784 185.719 108.428 185.719 108.057C185.719 107.686 185.572 107.33 185.31 107.067C185.047 106.805 184.691 106.657 184.319 106.657C183.948 106.657 183.591 106.805 183.329 107.067C183.067 107.33 182.919 107.686 182.919 108.057C182.919 108.428 183.067 108.784 183.329 109.047C183.591 109.31 183.948 109.457 184.319 109.457C184.691 109.457 185.047 109.31 185.31 109.047Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M116.233 89.0215L112.117 91.6534C112.507 90.8099 112.807 89.9278 113.013 89.0215C114.086 89.084 115.161 89.084 116.233 89.0215Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M157.052 79.6423C165.927 59.5125 133.254 76.4003 133.254 76.4003C138.462 66.5462 123.96 68.7861 117.688 73.5444C124.072 69.2061 125.192 75.5043 123.428 79.0882C123.12 79.8442 123.484 80.2082 125.024 79.8162C128.244 79.0042 128.331 84.0897 122.84 84.184C122.387 84.3948 121.994 84.7119 121.692 85.108C120.012 88.7744 118.472 91.7143 118.472 93.5902C118.472 95.0181 119.312 95.8301 121.58 95.8581C140.105 96.4303 158.565 98.3298 176.817 101.542C179.423 100.608 181.795 99.1244 183.776 97.1919C185.756 95.2594 187.298 92.9234 188.295 90.3423C199.27 64.1604 157.052 79.6423 157.052 79.6423Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M94.5635 205.346C91.2828 209.213 86.8797 211.962 81.9655 213.213C83.9534 216.796 84.9333 223.068 85.7969 227.155C87.2667 235.073 89.5655 242.814 92.6552 250.252C98.8149 236.399 99.5429 224.523 101.559 216.292C99.5432 212.45 97.2029 208.788 94.5635 205.346Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M184.068 156.717C179.955 158.904 176.039 161.443 172.365 164.305C175.923 167.801 178.491 172.177 179.813 176.987C188.287 172.75 202.666 172.771 217.915 166.18C204.141 159.881 192.271 158.845 184.068 156.717Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M145.965 174.047L133.395 184.489L129.167 180.795C134.998 179.172 140.632 176.909 145.965 174.047Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M93.1356 170.713C93.5276 172.365 94.0036 174.045 94.5636 175.723C102.197 174.407 109.648 172.197 116.765 169.141C109.514 172.053 100.819 171.929 93.1356 170.713Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M95.2978 243.524L132.502 248.604C139.65 249.342 138.368 260.212 131.324 259.328C138.36 260.137 137.091 270.822 130.126 270.147C137.18 271.039 135.852 281.663 128.964 280.968L61.9407 271.702C61.2318 271.629 60.544 271.417 59.9173 271.078C59.2907 270.738 58.7373 270.278 58.2892 269.724C57.8412 269.17 57.5073 268.532 57.3067 267.848C57.1062 267.164 57.043 266.448 57.1208 265.739C57.1986 265.031 57.4158 264.345 57.76 263.72C58.1041 263.097 58.5685 262.546 59.1261 262.102C59.6837 261.659 60.3237 261.33 61.0091 261.134C61.6945 260.94 62.4118 260.882 63.1196 260.965C62.4052 260.894 61.7117 260.683 61.0794 260.343C60.447 260.004 59.8885 259.541 59.436 258.984C58.9834 258.427 58.6458 257.785 58.4429 257.097C58.24 256.408 58.1756 255.686 58.2536 254.973C58.3315 254.258 58.5502 253.567 58.8971 252.939C59.2438 252.31 59.7119 251.758 60.2742 251.311C60.8364 250.865 61.4815 250.533 62.1722 250.338C62.8631 250.142 63.5857 250.086 64.2985 250.172C63.5736 250.086 62.8737 249.854 62.241 249.49C61.6084 249.126 61.0562 248.636 60.618 248.053C60.1797 247.468 59.8644 246.802 59.6911 246.093C59.5179 245.384 59.4902 244.647 59.61 243.927C59.7297 243.206 59.9942 242.518 60.3877 241.903C60.781 241.287 61.295 240.76 61.8986 240.349C62.5022 239.938 63.1827 239.655 63.8992 239.515C64.6157 239.375 65.353 239.381 66.0669 239.534L89.7054 242.761"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M182.36 75.3032C178.07 62.4053 170.251 50.968 159.789 42.2888C149.328 33.6097 136.643 28.0361 123.176 26.2004C84.7656 20.9308 50.3696 47.0877 46.242 84.5989C45.6795 89.8026 45.717 95.0537 46.354 100.249"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M185.327 103.469C185.634 100.609 185.755 97.7314 185.69 94.8555"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M180.101 123.164C179.725 124.045 179.276 124.893 178.757 125.699C166.496 145.887 159.411 157.676 154.427 169.318"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M99.5575 226.613L140.001 232.145C141.149 225.93 143.833 207.201 144.845 202.301"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M64.1256 195.602C64.0696 199.457 62.313 216.837 62.1671 221.47L85.2633 224.522"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M51.6178 119.172C54.6962 128.522 57.1041 135.884 58.924 142.38"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M109.682 81.5463L93.1641 79.2784C91.0625 78.9472 88.9159 79.0442 86.8527 79.5634C84.7896 80.0827 82.8528 81.0134 81.1584 82.2999C79.4639 83.5864 78.047 85.2019 76.9925 87.0497C75.9381 88.8973 75.2679 90.9392 75.0222 93.0524C74.9035 94.2252 74.9108 95.4074 75.0443 96.5788"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M101.087 226.817L104.894 194.033" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M92.996 95.6289C92.996 95.6289 89.1645 117.971 94.3399 134.964C93.5241 137.001 92.9418 139.123 92.604 141.291"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M91.6519 118.025C75.946 117.829 60.2121 117.493 42.7702 120.403C39.9918 114.385 39.504 107.559 41.3982 101.206C62.7448 97.0105 84.4913 95.1981 106.238 95.8026C109.094 95.922 110.967 94.1212 112.118 91.6588C112.507 90.815 112.807 89.9329 113.014 89.0269C109.035 88.6909 103.582 86.5114 114.89 75.8408C115.767 75.0093 116.702 74.2421 117.689 73.5449"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M190.227 105.061C177.64 100.154 147.019 97.2508 133.45 96.3828C129.084 103.551 120.32 121.664 124.772 124.939L126.76 118.135C148.065 118.051 164.583 119.903 188.547 124.827C191.135 118.57 191.722 111.665 190.227 105.061Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M123.487 78.9547C125.165 75.3516 123.998 69.2449 117.688 73.5347C123.96 68.7763 138.466 66.5364 133.254 76.3905C133.254 76.3905 165.926 59.5087 157.052 79.6325C203.029 62.7816 192.523 95.7894 176.817 101.526C158.566 98.2952 140.106 96.3862 121.58 95.8145C119.312 95.7835 118.472 94.9745 118.472 93.5465C118.472 91.6706 120.058 88.7513 121.692 85.0643C121.995 84.6688 122.389 84.3518 122.84 84.1404C128.331 84.0416 128.242 78.9576 125.024 79.7725C123.504 80.166 123.174 79.6296 123.487 78.9547Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M203.245 111.445C205.541 112.252 207.793 113.178 209.993 114.217C223.109 120.542 214.444 119.061 210.693 117.607"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M208.845 123.651C210.426 124.708 211.906 125.907 213.266 127.235C216.486 130.455 214.667 130.902 211.56 129.363C209.012 128.102 205.989 126.867 202.796 125.667C198.528 123.91 194.045 122.735 189.465 122.172"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M209.013 125.863C208.944 121.989 207.551 118.254 205.065 115.281"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M210.917 125.164C212.177 125.808 213.772 126.537 215.423 127.32C218.446 128.751 219.734 128.301 216.851 125.699C214.13 123.245 211.041 121.234 207.697 119.736"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M212.541 122.363C223.487 128.047 225.186 126.352 216.179 120.595C212.659 118.467 208.936 116.695 205.065 115.305"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M195.155 117.158C196.633 117.495 198.183 117.295 199.527 116.593C200.871 115.891 201.922 114.733 202.489 113.326C203.547 111.279 202.769 110.302 203.945 108.875C205.765 106.664 205.408 105.587 202.797 106.719C201.093 107.455 197.113 109.462 194.063 108.567C192.784 108.21 191.499 107.867 190.712 107.666"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M28.215 106.764C25.8439 107.469 23.516 108.313 21.2432 109.289C7.88773 115.085 16.5954 113.937 20.4033 112.649"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.9694 118.754C20.347 119.748 18.821 120.891 17.4115 122.169C14.0782 125.277 15.8421 125.779 19.0074 124.379C21.6099 123.23 24.6927 122.148 27.9096 121.075C37.4882 117.882 41.9091 118.109 41.9091 118.109"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.7179 120.963C21.9526 117.093 23.5007 113.419 26.1064 110.549"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19.8698 120.18C18.5819 120.77 16.9579 121.44 15.278 122.14C12.1981 123.427 10.9352 122.949 13.9061 120.46C16.7152 118.11 19.8908 116.235 23.3063 114.912"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M18.3297 117.297C7.13013 122.503 5.52829 120.701 14.7738 115.365C18.3856 113.395 22.181 111.782 26.106 110.549"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M40.7258 104.027C37.6194 104.782 30.4266 102.901 28.7717 102.095C26.2282 100.855 25.8083 101.895 27.5398 104.194C28.6347 105.648 27.8802 106.488 28.4917 108.282C29.1121 110.1 30.7022 112.901 34.3715 112.201"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M94.564 205.316L96.2159 207.556" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M96.2153 207.559C98.2202 210.328 100.008 213.248 101.563 216.293C99.5472 224.524 98.8192 236.395 92.6594 250.253C89.5704 242.815 87.2717 235.074 85.8012 227.156C84.8212 222.588 84.0932 217.385 81.9697 213.242"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M172.365 164.332C176.044 161.474 179.958 158.935 184.068 156.744C192.271 158.844 204.141 159.88 217.915 166.175C210.451 169.19 202.691 171.414 194.763 172.807C188.477 174.083 185.185 174.298 179.798 176.984"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M42.9938 204.758L24.74 175.502" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M22.6404 184.488L24.7403 175.502L33.728 177.602"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M234.237 98.4551C234.237 99.3467 233.974 100.218 233.477 100.96C232.982 101.701 232.279 102.279 231.455 102.62C230.631 102.961 229.725 103.05 228.85 102.876C227.976 102.702 227.173 102.273 226.542 101.643C225.911 101.012 225.482 100.209 225.309 99.3346C225.135 98.4601 225.223 97.5537 225.565 96.7299C225.905 95.9063 226.483 95.2022 227.226 94.7069C227.967 94.2116 228.838 93.9473 229.729 93.9473C230.322 93.9468 230.908 94.0632 231.455 94.2896C232.002 94.5159 232.5 94.848 232.918 95.2668C233.337 95.6854 233.668 96.1825 233.895 96.7295C234.121 97.2766 234.237 97.863 234.237 98.4551Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M163.799 260.189C163.799 260.775 163.625 261.35 163.3 261.838C162.973 262.325 162.51 262.706 161.968 262.931C161.425 263.155 160.829 263.214 160.252 263.099C159.676 262.986 159.149 262.703 158.733 262.287C158.317 261.872 158.035 261.344 157.921 260.768C157.806 260.192 157.865 259.595 158.089 259.053C158.315 258.51 158.695 258.047 159.183 257.72C159.67 257.395 160.245 257.221 160.832 257.221C161.222 257.218 161.61 257.293 161.971 257.442C162.332 257.589 162.66 257.807 162.936 258.084C163.213 258.36 163.431 258.689 163.578 259.05C163.727 259.411 163.802 259.798 163.799 260.189Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M39.0459 41.6523L49.0975 47.5601" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M90.7561 1L94.256 12.0301" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M154.699 15.5593L160.271 5.45312" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M197.757 56.0424L208.229 50.9746" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6.9904 66.6797L5.81592 77.4578" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.7781 72.6706L1 71.4961" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M127.823 96.0491C123.429 102.607 119.935 109.726 117.437 117.215L98.3434 116.793C97.4474 109.626 99.1274 95.5996 99.1274 95.5996"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M98.9596 121.664L100.024 132.864L106.686 137.51L113.742 132.752L116.233 121.916L98.9596 121.664Z"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M110.942 93.582H118.444" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M145.965 174.045L133.395 184.487L129.189 180.787"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M124.772 124.939L122.056 134.291C122.056 134.291 138.544 157.551 119.845 167.742C115.399 170.167 109.066 171.814 100.688 171.477C92.656 171.035 84.7437 169.333 77.2411 166.431C83.3785 178.16 90.2904 189.467 97.9309 200.277C95.81 204.542 92.5062 208.105 88.4142 210.541C84.723 212.623 80.6246 213.879 76.4012 214.225C65.8513 198.938 56.1929 183.055 47.4738 166.655C46.1801 164.244 45.4987 161.552 45.4896 158.815C45.4803 156.08 46.1437 153.383 47.4212 150.964C48.6986 148.544 50.5511 146.475 52.8156 144.94C55.0801 143.404 57.6874 142.449 60.4079 142.157C74.6019 140.642 90.9798 140.365 103.438 142.493"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M77.2411 166.431C75.6731 163.547 74.4412 160.803 74.4412 160.803"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M93.1356 170.713C96.0699 183.479 103.467 194.777 113.993 202.573C116.86 204.749 120.209 206.202 123.756 206.812C127.303 207.421 130.945 207.168 134.374 206.073C151.104 200.688 166.826 192.571 180.905 182.052C179.452 172.898 175.872 166.407 168.165 160.803C156.472 168.208 142.459 177.347 129.189 180.787C125.405 176.963 122.315 172.512 120.053 167.632"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M116.766 169.141C109.649 172.197 102.197 174.404 94.564 175.72"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M113.013 89.0215C114.086 89.0838 115.161 89.0838 116.233 89.0215L112.117 91.6534"
                                        stroke="white"
                                        strokeWidth="0.75"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative overflow-hidden pt-14 lg:pb-48 lg:pt-[100px]">
                <div className="container relative z-[1]">
                    <div className="text-center lg:w-1/2 ltr:lg:text-left rtl:lg:text-right">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right xl:w-[95%]">
                            <h6>Who are we?</h6>
                            <h4>We thrive to help our clients have global impact</h4>
                        </div>
                        <p className="pb-10 text-lg font-semibold leading-[30px]">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
                            typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </p>
                        <Link href="/career" className="btn capitalize text-white">
                            Join Our Team
                        </Link>
                    </div>
                </div>
                <img src="/assets/images/about-who-bg.png" alt="about-who-bg" className="-bottom-5 ltr:right-0 rtl:left-0 rtl:rotate-y-180 lg:absolute" />
            </section>

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        <h4>Our Visionary Leaders</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-1.png" alt="leader-1" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Aditya Patel
                            </h4>
                            <h6 className="text-sm font-bold">Chief Executive Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-2.png" alt="leader-2" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Audrey Ramirez
                            </h4>
                            <h6 className="text-sm font-bold">Chief Operating Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-3.png" alt="leader-3" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                James Robinson
                            </h4>
                            <h6 className="text-sm font-bold">Chief Financial Officer</h6>
                        </div>
                        <div className="group cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img src="/assets/images/leader-4.png" alt="leader-4" className="h-full w-full rounded-3xl object-cover object-top" />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Daniel Allen
                            </h4>
                            <h6 className="text-sm font-bold">Chief Marketing Officer</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:bg-none lg:py-[100px]">
                <div className="container">
                    <div className="heading mb-10 text-center">
                        <h4>Our Path Leaders</h4>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-1.png"
                                    alt="path-leaders-1"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Joseph Gonzalez
                            </h4>
                            <h6 className="text-sm font-bold">Director of Operations</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-2.png"
                                    alt="path-leaders-2"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Gregory Hayes
                            </h4>
                            <h6 className="text-sm font-bold">HR Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-3.png"
                                    alt="path-leaders-3"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Brooke Cagle
                            </h4>
                            <h6 className="text-sm font-bold">Team Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-4.png"
                                    alt="path-leaders-4"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Meysam Jarahkar
                            </h4>
                            <h6 className="text-sm font-bold">Asst. Director Sales</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-5.png"
                                    alt="path-leaders-5"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Joel Muniz
                            </h4>
                            <h6 className="text-sm font-bold">Business Development Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-6.png"
                                    alt="path-leaders-6"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Jakob Owens
                            </h4>
                            <h6 className="text-sm font-bold">Senior Manager</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-7.png"
                                    alt="path-leaders-7"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Jonas Kakaroto
                            </h4>
                            <h6 className="text-sm font-bold">Lead Administrator Networking</h6>
                        </div>
                        <div className="group mt-4 cursor-pointer text-center">
                            <div className="relative h-[280px] rounded-3xl transition-all duration-500 group-hover:shadow-[0_0_25px_#979797]">
                                <img
                                    src="/assets/images/path-leaders-8.png"
                                    alt="path-leaders-8"
                                    className="h-full w-full rounded-3xl object-cover object-top"
                                />
                            </div>
                            <h4 className="pt-5 pb-2 text-xl font-extrabold text-black transition duration-500 group-hover:text-secondary dark:text-white">
                                Amy Hirschi
                            </h4>
                            <h6 className="text-sm font-bold">Project Manager</h6>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />
        </div>
    );
};

export default Team;
