import styled from "styled-components";

// interface IButtonprops {
//   bgcolor: string,
//   color: string
// }


// export const Button = styled.button<IButtonprops>`

//   background-color: ${(props: IButtonprops) => props.bgcolor || 'whitesmoke'};
//   color: ${(props: IButtonprops) => props.color || 'whitesmoke'}

// `;

export const Button = styled.button`

  padding: 0.4rem 0.8rem;
  background-color: lightcoral;
  border: 1px solid #bc6262;
  border-radius: 8px;

`;

export const DangerButton = styled(Button)`
background-color: red;

`;