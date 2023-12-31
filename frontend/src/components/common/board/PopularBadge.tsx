import React from "react";

const PopularBadge = () => {

  return(
    <div style={Badge}>
      <div>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_389_4136)">
          <path d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="#8F6EEB"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4008 11.9891C19.2438 12.0242 19.1359 12.0445 19.0305 12.0727C18.3703 12.2453 17.7055 12.382 17.018 12.3562C16.0992 12.3211 15.3102 11.9516 14.6141 11.3563C14.3328 11.1148 14.0719 10.8484 13.8031 10.5922C13.6727 10.4687 13.6414 10.3281 13.7406 10.1672L13.9945 9.75547L14.3375 10.132C14.832 10.6805 15.3609 11.1797 16.0586 11.4461C16.7438 11.707 17.4414 11.6687 18.1422 11.5508C19.1328 11.3852 20.0477 10.9891 20.9445 10.5445C20.9742 10.5297 21.007 10.5203 21.0938 10.4859C21.0344 10.5977 21.0016 10.6641 20.9641 10.7266C19.6547 12.9281 18.3453 15.1297 17.0344 17.3305C16.8734 17.6008 16.8133 17.6211 16.5336 17.4844C14.6852 16.5766 12.7492 16.4039 10.7508 16.7477C10.4383 16.8016 10.3828 16.775 10.2336 16.4547C10.0703 16.1047 10.0719 16.1141 10.4414 16.043C11.4711 15.8418 12.5254 15.7989 13.568 15.9156C14.5438 16.025 15.5164 16.1688 16.4117 16.6281C16.5398 16.6945 16.6078 16.6391 16.6719 16.5328C17.2398 15.5844 17.8078 14.6359 18.3789 13.6891C18.6844 13.182 18.9961 12.6789 19.3031 12.1734C19.3297 12.1297 19.3508 12.0836 19.4008 11.9891V11.9891ZM5.60859 12.0836C5.73984 12.3047 5.87109 12.5258 6.00391 12.7461L8.63203 17.1055C8.75703 17.3133 8.75703 17.3195 8.54063 17.4187C8.07422 17.6336 8.13203 17.6891 7.84687 17.2117C6.83906 15.5203 5.83281 13.8273 4.82656 12.1352L4.01094 10.7641C3.97187 10.6992 3.94062 10.6289 3.90625 10.5609L3.93672 10.5203C4.05156 10.5711 4.16719 10.6187 4.28047 10.6719C4.97031 10.9945 5.66797 11.2945 6.40703 11.4773C7.35547 11.7133 8.29219 11.7406 9.19609 11.2898C9.75859 11.0094 10.2219 10.5961 10.6391 10.125C11.307 9.36875 11.8492 8.52031 12.3406 7.63594L12.4602 7.42188C12.525 7.51875 12.5664 7.59219 12.6188 7.65625C12.907 8.00938 12.8391 8.32344 12.5961 8.68906C12.0539 9.50469 11.5078 10.3125 10.7859 10.975C10.1406 11.5672 9.41719 12.0141 8.56719 12.218C7.9 12.3781 7.22969 12.3461 6.56016 12.2219C6.25391 12.1648 5.94922 12.1008 5.64375 12.0398L5.60859 12.0836V12.0836Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_389_4136">
          <rect width="25" height="25" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <p style={{fontSize: '14px',fontWeight:'900'}}>[인기글]</p>
    </div>
  )
}

export default PopularBadge;

const Badge:React.CSSProperties = {
  width: '85px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  top: 0,
  left: 0,
  flex: 0.5,
}

