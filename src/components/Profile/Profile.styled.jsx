import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 350px;
  background-color: white;
  border: 1px solid #d5dce6;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 5%) 0px 5px 5px;
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const Avatar = styled.img`
  margin-bottom: 35px;
  width: 40%;
  display: block;
  border-radius: 50%;
  background-color: #a98772;
`;

export const UserName = styled.p`
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
  color: #343538;
`;

export const UserTag = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  color: #74767a;
`;

export const UserLocation = styled.p`
  font-size: 20px;
  color: #74767a;
`;

export const ProfileStats = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
`;

export const PSLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: bold;
  background-color: #f5f4fa;
  border: 1px solid #d5dce6;
`;

export const PSLabel = styled.span`
  margin-bottom: 5px;
  font-size: 15px;
  color: #74767a;
`;

export const PSQuantity = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: #343538;
`;
