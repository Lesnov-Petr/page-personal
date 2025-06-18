import styled from "styled-components";

export const SList = styled.ul<{ $direction?: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
`;
