import styled from "styled-components";

interface props{
    label?: string;
    
}

const SelectContainer = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const SelectOptionContainer = styled.option``;

const Label = styled.div``;

const Select = () => {
  return (
    <>
      <Label>Filter Products:</Label>
      <SelectContainer>
        <SelectOptionContainer disabled selected>
          Color
        </SelectOptionContainer>
        <SelectOptionContainer>White</SelectOptionContainer>
        <SelectOptionContainer>Black</SelectOptionContainer>
        <SelectOptionContainer>Red</SelectOptionContainer>
        <SelectOptionContainer>Blue</SelectOptionContainer>
        <SelectOptionContainer>Yellow</SelectOptionContainer>
        <SelectOptionContainer>Green</SelectOptionContainer>
      </SelectContainer>
    </>
  );
};

export default Select;
