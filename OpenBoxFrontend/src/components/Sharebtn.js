import React from "react";
import "./share.css";
import image from "../images/poverty.png";
import thank from "../images/thank.jpg";
import { useStateContext } from "../context";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";
const Sharebtn = () => {
  const { billId, setBillId } = useStateContext();
  return (
    <div className="bg-zinc-300">
      {/* <a href="http://localhost:3000/success">
        <button
          style={{ marginLeft: "730px", marginTop: "10px" }}
          className="bg-stone-800 text-white h-[30px] w-[100px] rounded-[10px]"
        >
          Continue
        </button>
      </a> */}
      <div class="container ">
        <div style={{ width: "432px", marginLeft: "-57px" }} class="card">
          <div class="imgBx">
            <img src={image} />
          </div>
          <div class="contentBx">
            <br />

            <h2> BILL ID : {billId[0] + billId[1]}</h2>
            <br />

            <div class="color">
              <h3>Feeling good after donating at OpenBox</h3>
            </div>
            <br />

            <a href="#">Share Now</a>
            <br />
            <br />
            <div class="size">
              <LinkedinShareButton
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
              >
                <LinkedinIcon size={36} />
              </LinkedinShareButton>
              <TwitterShareButton
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
              >
                <TwitterIcon size={36} />
              </TwitterShareButton>
              <FacebookShareButton
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
              >
                <FacebookIcon size={36} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
              >
                <WhatsappIcon size={36} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sharebtn;
