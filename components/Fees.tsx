const Fees = () => (
  <section
    id="fees"
    className="py-16 max-w-xl mx-auto px-6 my-12 rounded-2xl bg-white shadow-lg text-center text-gray-900"
  >
    <h3 className="text-4xl font-extrabold mb-8 tracking-wide">
      Session Fees
    </h3>

    <div className="flex flex-col sm:flex-row justify-center gap-10">
      {/* Individual Session */}
      <div className="flex-1 bg-blue-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
        <p className="text-5xl font-bold mb-2 text-blue-700">
          $200 <span className="text-3xl align-top font-normal">/ session</span>
        </p>
        <p className="text-lg font-semibold tracking-wide">
          Individual Session
        </p>
      </div>

      {/* Couples Session */}
      <div className="flex-1 bg-blue-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
        <p className="text-5xl font-bold mb-2 text-blue-700">
          $240 <span className="text-3xl align-top font-normal">/ session</span>
        </p>
        <p className="text-lg font-semibold tracking-wide">
          Couples Session
        </p>
      </div>
    </div>
  </section>
)

export default Fees
