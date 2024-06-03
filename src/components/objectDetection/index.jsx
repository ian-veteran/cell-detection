import React, { useRef } from "react";
import styled from "styled-components";

const ObjectDetectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const DetectorContainer = styled.div`
  min-width: 200px;
  height: 500px;
  border: 3px solid #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TargetImg = styled.div`
  height: 100%;
`;

const HiddenFileInput = styled.div`
  display: none;
`;

const SelectButton = styled.div`
  padding: 7px 10px;
  border: 2px solid transparent;
  background-color: #fff;
  color: #0a0f22;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  margin-top: 2em;
  cursor: pointer;
  transition: all 260ms ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`;

export function ObjectDetector(props) {
  const fileInputRef = useRef();

  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <ObjectDetectorContainer>
      <DetectorContainer>img</DetectorContainer>
      <HiddenFileInput type="file" ref={fileInputRef} />
      <SelectButton onClick={openFilePicker}>Select Image</SelectButton>
    </ObjectDetectorContainer>
  );
}
