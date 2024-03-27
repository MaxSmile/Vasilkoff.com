import React from 'react';

type Props = {
    isActive: boolean;
};

const ToggleIcon: React.FC<Props> = ({ isActive }) => {
    return (
        <div
            className='grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition'
        >
            <svg role="presentation" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                    className={isActive ? 'hidden' : ''}
                    d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                    fill="currentColor"
                />
                <path
                    d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default ToggleIcon;
