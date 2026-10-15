export interface GuestPlan {
  id?: number | string;
  name?: string;
  slug?: string;
  title?: string;
  price?: number | string;
  data_usable?: number | string;
  validity_in_days?: number | string;
  minutes_usable?: number | string;
  sms_usable?: number | string;
  description?: string;
}

export function getGuestPlanSlug(plan: Pick<GuestPlan, "name" | "slug">) {
  if (plan.slug) {
    return plan.slug;
  }

  return plan.name
    ?.toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
