// components/Lottery.tsx
import React from "react";
import styled from "styled-components";

const LotteryContainer = styled.div`
  margin-top: 10px;
  .boxes {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .boxes {
      flex-direction: column;
      justify-content: center;
    }
  }

  .newLotterySection {
    /* position: relative; */
    h1 {
      margin-left: -0.5rem;
    }
    .content {
      margin: 1.5rem 0rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      align-content: space-between;
      .inputs {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 34vw;

        label {
          font-size: 12px;
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        input {
          margin-bottom: 0.2rem;
          margin-top: -0.2rem;
        }
      }
      Button {
        /* position: absolute; */
        width: 34vw;
        /* left: 20px;
        bottom: 12%; */
      }
      @media (max-width: 768px) {
        .inputs,
        Button {
          width: 68vw;
        }
      }
    }
  }
  .currentLotterySection {
    .content {
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      background-color: rgb(45, 52, 54);
      margin: 0 auto;
      padding: 15px;
      border-radius: 15px;
      padding-bottom: 1.9rem;
      .b2 {
        margin-top: 1rem;
      }
      .data {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        @media (max-width: 768px) {
          margin-top: 0.6rem;
        }
      }
    }
  }
  .postLotterySection {
    width: 71.2vw;
    max-width: 73vw;
    .content {
      margin: 17px 0;
      display: flex;
      gap: 1rem;
      Button {
        width: 10vw;
        padding: 6px 15px !important;
      }
      input {
        width: 20vw;
      }
    }

    @media (max-width: 768px) {
      max-width: 100% !important;
      width: 93%;
      .content {
        Button,
        input {
          width: 25vw;
        }
      }
    }

    @media (min-width: 320px) and (max-width: 400px) {
      max-width: 100% !important;
      width: 87%;
    }
      @media (min-width: 400px) and (max-width: 500px) {
      max-width: 100% !important;
      width: 90%;
    }
      

    @media (min-width: 1500px) and (max-width: 1700px) {
      max-width: 73vw;
      width: 100%; // Full width on smaller screens
    }
    @media (min-width: 1701px) and (max-width: 1900px) {
      max-width: 74vw;
      width: 100%; // Full width on smaller screens
    }
    @media (min-width: 1400px) and (max-width: 1499px) {
      max-width: 72.2vw;
      width: 100%; // Full width on smaller screens
    }
  }
`;

// Styling for each row (label-value pair)
const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed rgb(99, 110, 114);

  span {
    font-weight: 600;
    color: rgb(143, 148, 157);
    font-size: 14px;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
`;

const Section = styled.div`
  flex: 1 1 30%; // Flex-grow to expand, flex-basis for initial width
  max-width: 45%;
  padding: 8px 20px;
  background-color: rgb(26, 30, 31);
  border-radius: 6px;
  margin-bottom: 0.6rem;
  border: 1px solid rgb(99, 110, 114);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 12px 12px;
  background-color: rgb(45, 52, 54);
  border: 0;
  outline: 0;
  color: #fff;
  border-radius: 8px;
`;

const Button = styled.button`
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  outline: none;
  box-shadow: none;
  width: 30vw;
  border-radius: 40px;
  transition: background-color 0.2s;
  padding: 10px 20px;
  background-color: #2b70fa;
  color: white;
  &:hover {
    opacity: 0.65;
  }
  &:focus {
    box-shadow: none;
    outline: 0px;
  }
  @media (max-width: 768px) {
    width: 60vw;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  tbody tr {
    cursor: pointer;
    &:hover {
      background-color: rgb(45, 52, 54);
    }
  }
`;

const Th = styled.th`
  border: 1px solid #636e726b;
  padding: 8px;
  @media (max-width:768px){
    font-size:11px;
  }
`;

const Td = styled.td`
  border: 1px solid #636e726b;
  padding: 8px;
  text-align: center;
  font-size: 13px;
  color: rgb(143, 148, 157);
    @media (max-width:768px){
    font-size:11px;
  }
`;

const Lottery: React.FC = () => {
  return (
    <LotteryContainer>
      <div className="boxes">
        <Section className="newLotterySection">
          <Title>New Lottery</Title>
          <div className="content">
            <div className="inputs">
              <label htmlFor="" className="">
                Ticket Number
              </label>
              <Input placeholder="Input Ticket Price number" />
              <label htmlFor="" className="">
                Max Number
              </label>

              <Input placeholder="Input max number" />
              <label htmlFor="" className="">
                Text
              </label>

              <Input placeholder="" />
            </div>
            <div className="">
              <Button>Start</Button>
            </div>
          </div>
        </Section>

        <Section className="currentLotterySection">
          <Title>Current Lottery</Title>
          <div className="content">
            {/* Info Rows */}
            <div className="data">
              <InfoRow>
                <span>Total Players:</span>
                <p>500</p>
              </InfoRow>
              <InfoRow>
                <span>End Time:</span>

                <p>After 3 hours</p>
              </InfoRow>
              <InfoRow>
                <span>Ticket Price:</span>
                <p>5 Pizza</p>
              </InfoRow>

              {/* Button */}
              <Button className="b2">End</Button>
            </div>
          </div>
        </Section>
      </div>

      <Section className="postLotterySection">
        <Title>Past Lottery</Title>
        <div className="content">
          <Input placeholder="Input round number" />
          <Button>Search</Button>
        </div>
        <Table>
          <thead>
            <tr>
              <Th>Round</Th>
              <Th>Ticket Price</Th>
              <Th>Win Number</Th>
              <Th>Winner</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>1</Td>
              <Td>100</Td>
              <Td>3,4,5,6</Td>
              <Td>0x3234...34</Td>
            </tr>
            <tr>
              <Td>2</Td>
              <Td>100</Td>
              <Td>7,8,9,10</Td>
              <Td>0x4321...56</Td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </LotteryContainer>
  );
};

export default Lottery;
