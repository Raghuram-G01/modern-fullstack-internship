import Link from "next/link";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Link href="/client/users">Back to users</Link>
      <h1>User ID {id}</h1>
    </>
  );
}
