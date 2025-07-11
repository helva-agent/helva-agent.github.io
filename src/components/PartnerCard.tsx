export const PartnerCard = ({
  name,
  delay,
  src,
  isPlaceholder = false,
  fullWidth = false,
}: {
  name: string;
  delay: string;
  src?: string;
  isPlaceholder?: boolean;
  fullWidth?: boolean;
}) => {
  return (
    <div
      className={`
        bg-black/20 border border-white rounded-2xl 
        p-4 lg:p-6 
        flex flex-col items-center justify-center text-center 
        space-y-3 lg:space-y-4 
        transition-all duration-500 hover:scale-105
        ${fullWidth 
          ? 'w-[341px] h-[170px] lg:w-[241px] lg:h-[248px]' 
          : 'w-[164px] h-[154px] lg:w-[241px] lg:h-[248px]'}
      `}
      style={{ animationDelay: delay }}
    >
      {src && (
        <img
          src={src}
          alt={name}
          className={`
            object-contain rounded-xl 
            w-[96px] h-[96px] 
            lg:w-[152px] lg:h-[152px] 
            ${isPlaceholder ? 'opacity-40 blur-sm' : ''}
          `}
        />
      )}
      <h3
        className={`
          text-sm lg:text-xl font-poppins font-semibold  text-white
          ${isPlaceholder ? 'text-gray-400 font-normal' : 'text-white font-semibold'}
        `}
      >
        {name}
      </h3>
    </div>
  );
};
