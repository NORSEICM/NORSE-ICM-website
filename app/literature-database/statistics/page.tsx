import Link from "next/link";

export default function Statistics() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Statistics</h1>
      <p className="mb-4">
        Here we will present statistical summaries and visualizations of the NORSE‑ICM
        database — including patient demographics, outcomes, and key variables.
      </p>

      <p className="mt-6">
        ←{" "}
        <Link href="/database" className="text-blue-700 hover:underline">
          Back to Database
        </Link>
      </p>
    </main>
  );
}