"use server";

import { redirect } from "next/navigation";
import { saveItem } from "./items";

export async function shareItem(formData) {
  const item = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    details: formData.get("details"),
    budget: formData.get("budget"),
  };

  saveItem(item);

  redirect("/List");
}
