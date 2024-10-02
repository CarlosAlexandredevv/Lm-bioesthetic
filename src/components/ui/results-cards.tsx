type ResultsCardsProps = {
  title: string;
  description: string;
  before: string;
  after: string;
};

export function ResultsCards({
  title,
  description,
  before,
  after,
}: ResultsCardsProps) {
  return (
    <div className="flex flex-col items-center max-w-[400px] min-h-[250px] shadow-xl">
      <div className="flex">
        <img
          src={before}
          alt="Before"
          className="object-cover w-2/4 h-[150px] rounded-tl-md"
        />
        <img
          src={after}
          alt="After"
          className="object-cover w-2/4 h-[150px] rounded-tr-md"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center rounded-b-md p-3 gap-2 bg-burgundy">
        <h1 className="text-sand font-bold text-2xl font-adamBold">{title}</h1>
        <p className="text-lightCream font-semibold font-adamBold text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
