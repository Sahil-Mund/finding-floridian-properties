import React from "react";

interface TermsAndConditionsProps {
  // Add your component's props here
}

const UserListingTermsAndConditions: React.FC = () => {
  // Add your component logic here
  return (
    <div
      className="terms-container"
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h2>Listing Terms and Conditions: </h2>
      <br />
      <p>
        These Terms and Conditions govern your use of our platform as a user who
        shares information regarding listings for sale or rent ("Lister"), as
        well as the terms applicable to visitors who access our website
        ("Visitor"). By using our website, you agree to comply with and be bound
        by these Terms and Conditions.
      </p>
      <h4>1. Content Ownership and Usage Rights: </h4>
      <p>
        a. Lister understands and acknowledges that by posting any content on
        our website, including but not limited to property listings,
        descriptions, photographs, videos, and other related materials, they
        grant us a non-exclusive, worldwide, royalty-free, transferable, and
        sub-licensable license to use, display, reproduce, distribute, modify,
        and adapt the content. This license allows us to incorporate the content
        into promotional or marketing materials on our website, social media
        channels, or other platforms associated with our business.
      </p>
      <p>
        {" "}
        b. Lister represents and warrants that they have all legal rights and
        permissions necessary to authorize the usage of the content publicly
        available on our website. Lister agrees to indemnify and hold us
        harmless from any claims arising out of their failure to obtain the
        necessary rights or permissions for the content provided.
      </p>
      <h4>2. User-Generated Content: </h4>
      <p>
        a. Users may have the ability to post comments, reviews, or other
        user-generated content on our website. By contributing such content,
        users grant us a non-exclusive, worldwide, royalty-free, transferable,
        and sub-licensable license to use, display, reproduce, distribute,
        modify, and adapt the content for promotional, marketing, or
        informational purposes associated with our business.
      </p>
      <p>
        b. Users are solely responsible for the content they share on our
        website and must ensure that it is accurate, lawful, and does not
        infringe upon the rights of any third party.
      </p>
      <h4>3. Privacy:</h4>
      <p>
        a. Privacy is important to us. Please refer to our Privacy Policy, which
        outlines how we collect, use, disclose, and protect your personal
        information.
      </p>
      <h4>4. Prohibited Conduct:</h4>
      <p>
        a. Users are prohibited from engaging in any activities that violate
        applicable laws or infringe upon the rights of others. This includes,
        but is not limited to, posting false or misleading information, engaging
        in illegal activities, spamming, or unauthorized use of intellectual
        property.
      </p>
      <p>
        b. We reserve the right to investigate and take appropriate legal action
        against any individual engaging in prohibited conduct, which may result
        in the termination of their access to our website.
      </p>
      <h4>5. Limitation of Liability:</h4>
      <p>
        a. We strive to provide accurate and up-to-date information on our
        website; however, we do not guarantee the accuracy or completeness of
        the content. Users rely on the information provided at their own risk.
      </p>
      <p>
        b. We shall not be held liable for any direct, indirect, incidental,
        special, or consequential damages arising out of or relating to the use
        of our website or the information provided.
      </p>

      <h4> 6. Modification and Termination:</h4>

      <p>
        a. We reserve the right to modify, suspend, or terminate the
        availability of our website, services, or these Terms and Conditions, in
        whole or in part, at any time without prior notice.
      </p>

      <h4>7. Release of Contact Information:</h4>

      <p>
        a. By becoming a Lister on our website, you acknowledge and authorize
        the release of your contact information, including but not limited to
        your name, email address, and phone number, to other users of the
        website who are interested in your listed properties and sponsors to
        communicate with you directly. This release of contact information is
        necessary for facilitating communication and potential transactions
        between Lister and interested parties on our platform.
      </p>
      <p>
        b. While we take reasonable measures to protect your contact
        information, we cannot guarantee the security of such information once
        it is shared with other users. Lister agrees to release us from any
        liability or responsibility for any misuse, unauthorized access, or
        disclosure of their contact information by other users.
      </p>
      <br />
      <br />

      <p>
        By accessing and using our website, you acknowledge that you have read,
        understood, and agreed to these Terms and Conditions. If you do not
        agree to these terms, please refrain from using our website.
      </p>
      <p>
        These Terms and Conditions are governed by and construed in accordance
        with the laws of the state of Florida. Any disputes arising from or
        related to these Terms and Conditions shall be subject to the exclusive
        jurisdiction of the courts in the state of Florida.
      </p>
      <p>
        If you have any questions or concerns regarding these Terms and
        Conditions, please contact us at info@findingfloridians.com
      </p>

      <p> Last updated: 02/07/2024</p>
    </div>
  );
};

export default UserListingTermsAndConditions;
