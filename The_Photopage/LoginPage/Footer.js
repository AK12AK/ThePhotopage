import React , {useState} from "react";
import twitter_image from '../../../images/twitter-512.png';
import whatsapp_image from '../../../images/whatsappImage.png'
import instagram_image from '../../../images/7-74347_instagram-logo-grey-png-instagram-logo-png-grey.png'
import facebook_image from '../../../images/107140_gray_circle_facebook_icon.png'
import './LoginPage.css'

function FooterLoginPage(){
    return(
    <div className="footer">
    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><img src={twitter_image} height="30px" width="30px"></img></a>
    <a href="https://www.whatsapp.com/"><img src={whatsapp_image} height="30px" width="30px"></img></a>
    <a href="https://www.instagram.com/"><img src={instagram_image} height="30px" width="30px"></img></a>
    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804791&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9062009%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpKkPg-FPx_CFU9FSa89y1nsPRKrECrLULeyVP13etTDFHSiRlViNhoCnqIQAvD_BwE"><img src={facebook_image} height="30px" width="30px"></img></a>
    <p>© 2023 The Photopage By Akilesh.A.K</p>
    </div>)
}

export default FooterLoginPage