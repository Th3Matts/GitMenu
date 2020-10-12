import styled from 'styled-components'

export const StyledButton = styled("button")`
  cursor: pointer;
  outline: 0;
  align-items: center;
  justify-content: center;
	border-radius: 0.8rem;
	margin-right: 1.6rem;
  border-style: none;
  text-decoration: none;
  transition: background-color 0.2s;

`
export const FindButton = styled(StyledButton)`
  width: 40rem;
  height: 10.8rem;
  display: flex;
  color: var(--color-button-text);
  background-color: var(--color-primary-lighter);
	font: 700 2.0rem Archivo;
  img{
    width: 4rem;
    margin-right: 2.4rem;
  }

  :hover{
    background: var(--color-primary-light);
  }

  @media( min-width: 1100px){
    font-size: 2.4rem;
  }
`

export const SearchButton = styled(StyledButton)`
  width: 100%;
  height: 5.6rem;
  background: var(--color-secondary-light);
  color: var(--color-button-text);
  border: 0;
  border-radius: 0.8rem;
  cursor: pointer;
  font: 700 1.8rem Archivo;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-top: 3.2rem;

  :hover{
  background: var(--color-secondary)
  }

  @media( min-width: 1100px){
    grid-area: search;
  }
`;
