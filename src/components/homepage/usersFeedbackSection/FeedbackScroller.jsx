import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "../usersFeedbackSection/usersFeedback.module.scss";
import userFeedback from "@/mockdata/userFeedbackMockdata";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const FeedbackScroller = ({ direction }) => {
  return (
    <div className="container">
      <Marquee
        pauseOnHover
        speed={80}
        gradient={false}
        loop={0}
        direction={direction}
      >
        <div className={styles.feedbackContainer}>
          {userFeedback.map((feedback, index) => (
            <div key={index} className={styles.feedbackCard}>
              <Image
                src="/images/feedbackCard/ratingStar.png"
                alt="feedbackRating"
                width={100}
                height={20}
              />

              <div className={styles.paragraph}>
                <p>{feedback.content}</p>
              </div>

              <div className={styles.btmText}>
                <div className={styles.profile}>
                  <i className={feedback.profileImg} />
                  <h6>{feedback.userName}</h6>
                </div>
                <p>{feedback.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FeedbackScroller;