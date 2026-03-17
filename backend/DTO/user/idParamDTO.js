import { z } from "zod";

const idParamDTO = z.object({
  id: z.coerce.number().int().positive("ID must be a positive number"),
});

export default idParamDTO;
