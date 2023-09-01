import styled from "styled-components";

// interface IInputProps {
//   size: number,
// }

// export const Input = styled.input.attrs((props: IInputProps) => ({
//   type: 'text',
//     size: props.size || '1em'
// })) <IInputProps>`

// margin: ${(props: IInputProps) => props.size}
// `;


// export const Password = styled(Input).attrs((props: IInputProps) => {
//   type: 'password'
// })``;

interface IInputProps {
  size: number;
}

export const Input = styled.input<IInputProps>`
  margin: ${(props) => props.size}px;
`;

Input.defaultProps = {
  type: 'text',
};

export const Password = styled(Input).attrs<IInputProps>(() => ({
  type: 'password',
}))``;