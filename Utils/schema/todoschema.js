import * as z from "zod";
const todoSchema = z.object({
  taskname: z.string().min(3).max(10),
  description: z.string().optional(),
});
export { todoSchema };
