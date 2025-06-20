import { Plus } from "lucide-react";

type Props = {
  isLast: boolean;
  onAddNewPage: () => void;
};

const AddPageDashed: React.FC<Props> = ({ onAddNewPage, isLast }) => {
  if (isLast)
    return (
      <hr
        className="w-5 h-[1.5px] border border-dashed border-gray-200"
        aria-hidden="true"
      />
    );

  return (
    <div
      className="group h-8 flex items-center relative"
      role="presentation"
      aria-hidden="false"
    >
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-200 ease-[ease-in-out opacity-0 group-hover:opacity-100">
        <button
          onClick={onAddNewPage}
          className="w-4 h-4 border border-gray-200 rounded-full flex items-center justify-center bg-white cursor-pointer"
          aria-label="Add a new form page between sections"
          type="button"
        >
          <Plus size={16} />
        </button>
      </div>
      <hr
        aria-hidden="true"
        className="w-5 h-[1.5px] border border-dashed border-gray-200 transition-all duration-200 ease-[ease-in-out] group-hover:w-14"
      />
    </div>
  );
};

export default AddPageDashed;
