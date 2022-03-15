import React from "react";
import { FaCaretUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import allActions from "../../actions";
import { countInArray } from "../../utils/genFunc.utils";
const SingleRow = (props) => {
  const hideNewsList = useSelector((state) => state.hideNews);
  const newsVotes = useSelector((state) => state.votes);
  const dispatch = useDispatch();

  const hideNews = (objid) => {
    let oldNews = hideNewsList.newsId;
    oldNews.push(objid);
    dispatch(allActions.hidenewsActions.hideNews(oldNews));
    return false;
  };

  const upVote = (objid) => {
    let oldVotes = newsVotes.votes;
    oldVotes.push(objid);
    dispatch(allActions.votesAction.addVotes(oldVotes));
    return false;
  };

  const myitemVote = (objid) => {
    // console.log("abarvotes", newsVotes.votes);
    let voteCount;
    if (newsVotes.votes.includes(objid)) {
      voteCount = countInArray(newsVotes.votes, objid);
    } else {
      voteCount = 0;
    }
    return voteCount;
  };
  return (
    <tr
      style={{
        alignItems: "flex-start",
        height: 20,
        fontSize: 14,
        padding: 0,
        textAlign: "left",
      }}
      key={props.singledata.objectID}
    >
      <td>{props.singledata.num_comments}</td>
      <td>{myitemVote(props.singledata.objectID)}</td>
      <td>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => upVote(props.singledata.objectID)}
        >
          <FaCaretUp size={24} color="#A9A9A9" />
        </span>
      </td>
      <td style={{ alignSelf: "flex-start", textAlign: "left" }}>
        <a
          href={props.singledata.url}
          target="_blank"
          rel="noopener noreferrer"
          title={props.singledata.title}
          style={{ color: "#000", fontSize: 18 }}
        >
          {props.singledata.title}
        </a>
        <span style={{ marginLeft: 10, fontSize: 14 }}>
          - by <i>{props.singledata.author}</i>
        </span>
        <b style={{ color: "#A9A9A9", padding: 5 }}>
          {format(props.singledata.created_at)}
        </b>

        <span
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => hideNews(props.singledata.objectID)}
        >
          [ hide ]
        </span>
      </td>
    </tr>
  );
};
export default SingleRow;
