export async function generateMetadata() {
  const title = "User generated meta data";
  const description = "This description is generated dynamically.";

  return {
    title,
    description,
  };
}

export default function GenerateUserMeta() {
  return (
    <div>
      <h1>User generated meta data</h1>
    </div>
  );
}
