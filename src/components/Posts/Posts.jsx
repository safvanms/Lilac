import React, { useState } from 'react'
import './post.css'
import Post from '../../post.json'
import { SlOptions } from 'react-icons/sl'
import { PiArrowBendDownRightBold } from 'react-icons/pi'

export default function Posts() {
  const [formData, setFormData] = useState({
    comment: '',
  })
  const [comment, setComment] = useState([])
  const [openComments, setOpenComments] = useState(false)
  const [openReplyForComment, setOpenReplyForComment] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newComment = {
      comment: formData.comment,
      id: Date.now(),
    }
    setComment([...comment, newComment])
    setFormData({ comment: '' })
  }

  const handleOpenComments = () => {
    setOpenComments(!openComments)
  }

  const openReply = (commentId) => {
    setOpenReplyForComment(commentId)
  }

  return (
    <div className="post__section">
      {Post.post?.map(
        ({ userImg, name, time, description, image, comments }) => (
          <div className="post__container">
            <div className="post__header">
              <img className="user__image" src={userImg} alt="user" />
              <div className="post__user">
                <h3>{name}</h3>
                <p>{time}</p>
              </div>
            </div>
            <div className="post__description">
              <p>{description}</p>
            </div>
            <div className="post__img">
              <img src={image} alt="post" />
            </div>
            <div className="post__review">
              <p>
                {comments?.length} Comments .{' '}
                {comments.reduce(
                  (totalReplies, comment) =>
                    totalReplies +
                    (comment.replies ? comment.replies.length : 0),
                  0,
                )}{' '}
                Replies
              </p>
            </div>
            <div className="post__comment__container">
              <img className="user__image" src={userImg} alt="user" />
              <div className="commenting__container">
                <textarea
                  className="comment__input"
                  placeholder="Add a Comment ..."
                  rows="3"
                  name="comment"
                  value={formData.comment}
                  onChange={(event) =>
                    setFormData({ ...formData, comment: event.target.value })
                  }
                ></textarea>
                <p
                  style={{ color: 'grey', cursor: 'pointer' }}
                  onClick={handleSubmit}
                >
                  Post
                </p>
              </div>
            </div>

            <p
              style={{
                margin: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              onClick={handleOpenComments}
            >
              view Comments
            </p>

            {openComments && (
              <div className="comments">
                {comments?.map((commentItem) => (
                  <div key={commentItem.id} className="comment-sec">
                    <div>
                      <img
                        src={commentItem.userImg}
                        className="user"
                        alt="user"
                      />
                      <div className="comment_details">
                        <div
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <p style={{ fontWeight: 'bold' }}>
                              {commentItem.name}
                            </p>
                            <p style={{ fontSize: '10px' }}>
                              {commentItem.time}
                            </p>
                          </div>
                          <SlOptions color="grey" />
                        </div>
                        <p>{commentItem.comment}</p>
                      </div>
                    </div>
                    <div className="reply_counts">
                      <PiArrowBendDownRightBold /> {commentItem.replies.length}{' '}
                      Replies .{' '}
                      <p onClick={() => openReply(commentItem.id)}>Reply</p>
                    </div>

                    {commentItem.replies &&
                      commentItem.replies.map((replyItem) => (
                        <div key={replyItem.id} className="reply">
                          <div>
                            <img
                              src={replyItem.userImg}
                              className="reply_user"
                              alt="user"
                            />
                            <div className="reply_details">
                              <div
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <div>
                                  <p style={{ fontWeight: 'bold' }}>
                                    {replyItem.name}
                                  </p>
                                  <p style={{ fontSize: '10px' }}>
                                    {replyItem.time}
                                  </p>
                                </div>
                                <SlOptions color="grey" />
                              </div>
                              <p>{replyItem.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                    {openReplyForComment === commentItem.id && (
                      <div className="reply_input">
                        <img
                          src={commentItem.userImg}
                          className="reply_user"
                          alt="user"
                        />
                        <div>
                          <input type="text" placeholder="Add a Reply" />
                          Reply
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ),
      )}
    </div>
  )
}
