function userResponseDTO(user) {
  return {
    name: user.name,
    email: user.email,
  };
}

const responseDTO = {
  userResponseDTO,
};

export default responseDTO;
