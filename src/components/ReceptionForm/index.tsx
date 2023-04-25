import styled from '@emotion/styled';
import usePostReceptionMutation from '@hooks/queries/usePostReceptionMutation';
import useInput from '@hooks/useInput';
import Check from '@icons/Check.png';
import Image from 'next/image';
import { ChangeEvent, useCallback, useState } from 'react';
import {
  addressValidator,
  collectionDateValidator,
  laundryItemValidator,
  nameValidator,
  phoneNumberValidator,
  requestMemoValidator,
} from 'src/utils/validationUtils';

const ReceptionForm = ({ masterId }: any) => {
  const today = new Date();
  const month = `0${today.getMonth() + 1}`;
  const minTime = `${today.getFullYear()}-${month}-${today.getDate()}T${today.getHours()}:${today.getMinutes()}`;
  const { mutate } = usePostReceptionMutation();

  const [name, onChangeName, nameError] = useInput(nameValidator);
  const [phoneNumber, onChangePhoneNumber, phoneNumberError] =
    useInput(phoneNumberValidator);
  const [address, onChangeAddress, addressError] = useInput(addressValidator);
  const [laundryItem, onChangeLoundryItem, loundryItemError] =
    useInput(laundryItemValidator);
  const [requestMemo, onChangeRequestMemo, requestMemoError] =
    useInput(requestMemoValidator);
  const [collectionDate, onChangeCollectionDate, collectionDateError] =
    useInput(collectionDateValidator);

  const onClickReception = async () => {
    console.log({
      masterId: masterId,
      name,
      phoneNumber,
      address,
      laundryItem,
      requestMemo,
      collectionDate,
    });
    try {
      mutate({
        masterId: masterId,
        name,
        phoneNumber,
        address,
        laundryItem,
        requestMemo,
        collectionDate,
      });
    } catch (error: any) {}
  };

  return (
    <Wrapper>
      <Title>세탁 접수</Title>
      <FormBox>
        <FormLabel>이름</FormLabel>
        <FormInput onChange={onChangeName} placeholder="이름 입력"></FormInput>
        <FormLabel>전화번호</FormLabel>
        <FormInput
          onChange={onChangePhoneNumber}
          placeholder="전화번호 입력"
        ></FormInput>
        <FormLabel>주소</FormLabel>
        <FormInput
          onChange={onChangeAddress}
          placeholder="주소 입력"
        ></FormInput>
        <FormLabel>접수품목</FormLabel>
        <FormInput
          onChange={onChangeLoundryItem}
          placeholder="접수품목 입력"
        ></FormInput>
        <FormLabel>수거요청 시간 및 날짜</FormLabel>
        <FormInput
          type="datetime-local"
          placeholder="수거요청 시간 및 날짜 입력"
          onChange={onChangeCollectionDate}
          min={minTime}
          onKeyDown={(e) => e.preventDefault()}
        ></FormInput>
        <FormLabel>요청사항</FormLabel>
        <FormInput
          onChange={onChangeRequestMemo}
          placeholder="요청사항 입력"
        ></FormInput>
      </FormBox>
      <ReceptionCompleteButton onClick={onClickReception}>
        <Image src={Check} alt="체크" />
        접수하기
      </ReceptionCompleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 5vw;

  width: 100vw;

  background: #ffffff;
  border-radius: 7px;
`;

const Title = styled.div`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: #333d4b;

  margin-bottom: 24px;
`;

const FormBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
  color: #4e5968;

  margin-bottom: 5px;
`;

const FormInput = styled.input`
  box-sizing: border-box;
  width: 90vw;
  height: 50px;
  border: 1px solid #e5e8eb;
  box-shadow: 0px 0px 3px rgba(229, 232, 235, 0.25);
  border-radius: 7px;
  padding: 16px 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  margin-bottom: 24px;

  ::placeholder {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;

    color: #8b95a1;
  }
`;

const ReceptionCompleteButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 20px;

  margin-top: 16px;
  width: 201px;
  height: 61px;

  border: none;
  cursor: default;
  background: #d1d6db;
  border-radius: 7px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;

  margin-bottom: 80px;
`;

export default ReceptionForm;
