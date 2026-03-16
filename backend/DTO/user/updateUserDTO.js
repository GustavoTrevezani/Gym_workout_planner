import createUserDTO from "./createUserDTO.js";

const updateUserDTO = createUserDTO
  .omit({ password: true, email: true })
  .partial();

export default updateUserDTO;
