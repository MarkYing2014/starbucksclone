export function NoMatches() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="relative w-48 h-48 mb-6">
        <div className="absolute inset-0 bg-[#E6F3EF] rounded-full" />
        <img
          src="/placeholder.svg?height=192&width=192"
          alt="No matches illustration"
          className="relative z-10"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        We couldn't find any matches!
      </h3>
      <p className="text-gray-600">
        Please check with other filter options
      </p>
    </div>
  )
}

