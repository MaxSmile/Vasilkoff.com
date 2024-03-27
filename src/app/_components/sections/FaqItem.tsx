import AnimateHeight from 'react-animate-height';
import ToggleIcon from '../ToggleIcon';

interface FaqItemProps {
  question: string;
  answer: string | string[];
  isActive: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isActive, onClick }) => (
  <div className="pb-2 border-gray-200">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={onClick}
    >
      <h3 className="font-bold">{question}</h3>
      <ToggleIcon isActive={isActive} />
    </button>
    <AnimateHeight duration={300} height={isActive ? 'auto' : 0}>
      <div className="p-2">
        {Array.isArray(answer) ? 
          answer.map((item, index) => <p className="pb-2" key={index}>{item}</p>) : 
          <p className="text-gray-700">{answer}</p>
        }
      </div>
    </AnimateHeight>
  </div>
);

export default FaqItem;

