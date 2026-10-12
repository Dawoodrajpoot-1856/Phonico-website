export default function CheckoutSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-[#faf5f0] p-4 sm:p-6 flex flex-col gap-6 my-6 sm:my-10 rounded-lg shadow-xs animate-pulse">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center border-b border-orange-100 pb-4 sm:pb-0">
        <div className="w-28 h-10 bg-gray-200 rounded-md"></div>
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <div className="w-24 h-7 bg-gray-200 rounded-md"></div>
          <div className="w-36 h-4 bg-gray-200 rounded-md"></div>
        </div>
        <div className="w-20 h-7 bg-gray-200 rounded-md"></div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-white p-3 rounded-xl w-full h-12 border border-gray-200"></div>
        <div className="bg-white p-3 rounded-xl w-full h-12 border border-gray-200"></div>
      </div>

      <div className="flex flex-col gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-2xs">
        <div className="flex justify-between border-b border-gray-100 pb-2 items-center">
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
          <div className="w-10 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-2 items-center">
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
          <div className="w-10 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex justify-between border-b border-gray-100 pb-2 items-center">
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="flex justify-between items-center pt-3 mt-1 border-t-2 border-dashed border-orange-100">
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
          <div className="w-20 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="w-full h-12 bg-gray-200 rounded-xl"></div>
    </div>
  );
}
