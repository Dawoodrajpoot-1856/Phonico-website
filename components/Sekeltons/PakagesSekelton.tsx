export default function PackagesSkeleton() {
  const skeletonItems = Array.from({ length: 5 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mt-20 justify-center max-w-[1300px] mx-auto animate-pulse">
      {skeletonItems.map((_, i) => {
        const isFifthCard = i === 4;

        return (
          <div
            key={i}
            className={`w-full flex justify-center relative ${
              isFifthCard
                ? "sm:col-span-2 md:col-span-3 lg:col-start-2 lg:col-span-2 mx-auto"
                : ""
            }`}
          >
            <div className="w-full bg-white rounded-xl shadow-sm p-5 pt-28 flex flex-col justify-between border border-gray-100 min-h-[520px] h-full relative overflow-hidden max-w-[290px]">
              <div>
                <div className="absolute top-6 left-6 right-6 h-8 bg-gray-200 rounded-md"></div>

                <div className="absolute left-[-12px] right-[-12px] top-[72px] h-16 bg-gray-200 rounded-md px-4 py-3"></div>

                <div className="mt-12 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6 mx-auto"></div>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-gray-100 pt-3.5">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="h-3.5 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 w-full">
                <div className="w-full bg-gray-200 h-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
