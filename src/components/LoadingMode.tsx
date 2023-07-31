export default function LoadingMode({
  loading,
  error,
}: {
  loading: boolean;
  error: string | null;
}) {
  return (
    <>
      {loading ? (
        <div className="flex justify-center w-full">
          <div className="lds-dual-ring"></div>
        </div>
      ) : null}
      {error ? (
        <div>
          <p>An error while fetching data</p>
        </div>
      ) : null}
    </>
  );
}
