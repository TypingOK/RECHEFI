import { Container } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TitleWithDivider from "../../../../common/components/title_with_divider";
import FreeBoardListItem from "./components/item/free_board_list_item";
import FreeBoardListItemContainer from "./components/free_board_list_items_container";
import FreeBoardListItemNotices from "./components/free_board_list_notices_items";
import FreeBoardPagination from "./components/free_board_list_pagination";
import RecipeListFab from "../../../Recipe/List/components/recipe_list_fab";

function FreeBoardPage() {
  const data = [
    {
      id: 1,
      title: "핫한 핫소스 실화냐",
      likes: 10,
      date: "2020-10-20",
      member_id: 1,
      member_nickname: "나다",
      comment_count: 3,
    },
    {
      id: 2,
      title: "핫한 핫소스 실화냐",
      likes: 10,
      date: "2020-10-20",
      member_id: 1,
      member_nickname: "나다",
      comment_count: 3,
    },
    {
      id: 3,
      title: "핫한 핫소스 실화냐",
      likes: 10,
      date: "2020-10-20",
      member_id: 1,
      member_nickname: "나다",
      comment_count: 3,
    },
  ];

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 30);

  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TitleWithDivider
        textVariant={"h5"}
        title="자유 게시판"
        style={{ px: 1, pt: 3 }}
      ></TitleWithDivider>
      {/* notice Items */}
      <FreeBoardListItemContainer isNotice={true}>
        <FreeBoardListItemNotices />
      </FreeBoardListItemContainer>
      {/* freeboard Items */}
      <FreeBoardListItemContainer style={{ mt: 1 }}>
        {data.map((item, index) => (
          <FreeBoardListItem
            key={item.id}
            post={item}
            isLast={data.length - 1 === index}
          />
        ))}
      </FreeBoardListItemContainer>
      <FreeBoardPagination
        totalPages={30}
        urlLink="/community/free-board"
      />

      <RecipeListFab
        onClick={() => {
          navigate("/community/free-board/write");
        }}
      />
    </Container>
  );
}

export default FreeBoardPage;
