import supabase from "./supabase";

//= [DOCS] Supabase > API Docs > Table & View (cabins)

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
