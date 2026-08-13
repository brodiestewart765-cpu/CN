import { redirect } from "next/navigation";

export default function WorkspaceIndex({
  params,
}: {
  params: { business: string };
}) {
  redirect(`/w/${params.business}/dashboard`);
}
